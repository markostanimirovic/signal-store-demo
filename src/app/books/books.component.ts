import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../shared/ui/search-box.component';
import { BookListComponent } from './ui/book-list.component';
import { BooksStore } from './books.store';

@Component({
  selector: 'ngrx-books',
  standalone: true,
  imports: [SearchBoxComponent, BookListComponent],
  template: `
    <h1>Books</h1>

    <ngrx-search-box
      [query]="store.query()"
      (queryChange)="store.updateQuery($event)"
    />

    <ngrx-book-list
      [books]="store.filteredBooks()"
      [isPending]="store.isPending()"
    />
  `,
  providers: [BooksStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {
  readonly store = inject(BooksStore);
}
