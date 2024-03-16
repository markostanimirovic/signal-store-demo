import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'ngrx-root',
  standalone: true,
  imports: [BooksComponent],
  template: '<ngrx-books />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
