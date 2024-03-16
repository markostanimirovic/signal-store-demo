import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'ngrx-book-list',
  standalone: true,
  template: `
    @if (isPending()) {
      <span>Loading...</span>
    }

    <ul>
      @for (book of books(); track book.id) {
        <li>{{ book.title }} | \${{ book.price }}</li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {
  books = input<Book[]>([]);
  isPending = input(false);
}
