import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import {
  setFulfilled,
  setPending,
  withRequestStatus,
} from '../shared/state/request-status.feature';
import { Book } from './book.model';
import { BooksService } from './books.service';

export const BooksStore = signalStore(
  withState({ query: '' }),
  withEntities<Book>(),
  withRequestStatus(),
  withComputed(({ entities, query }) => ({
    filteredBooks: computed(() =>
      entities().filter(({ title }) =>
        title.toLowerCase().includes(query().toLowerCase()),
      ),
    ),
  })),
  withMethods((store, booksService = inject(BooksService)) => ({
    updateQuery(query: string) {
      patchState(store, { query });
    },
    async loadAll() {
      patchState(store, setPending());

      const books = await booksService.getAll();
      patchState(store, setAllEntities(books), setFulfilled());
    },
  })),
  withHooks({ onInit: ({ loadAll }) => loadAll() }),
);
