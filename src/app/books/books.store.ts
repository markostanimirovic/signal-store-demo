import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Book } from './book.model';
import { BooksService } from './books.service';

export const BooksStore = signalStore(
  withState({ books: [] as Book[], isPending: false, query: '' }),
  withComputed(({ books, query }) => ({
    filteredBooks: computed(() =>
      books().filter(({ title }) =>
        title.toLowerCase().includes(query().toLowerCase()),
      ),
    ),
  })),
  withMethods((store, booksService = inject(BooksService)) => ({
    updateQuery(query: string) {
      patchState(store, { query });
    },
    async loadAll() {
      patchState(store, { isPending: true });

      const books = await booksService.getAll();
      patchState(store, { books, isPending: false });
    },
  })),
  withHooks({ onInit: ({ loadAll }) => loadAll() }),
);
