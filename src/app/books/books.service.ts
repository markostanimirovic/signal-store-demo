import { Injectable } from '@angular/core';
import { Book } from './book.model';

const booksMock: Book[] = [
  { id: 1, title: 'Great Expectations', price: 90 },
  { id: 2, title: 'The Little Prince', price: 70 },
  { id: 3, title: 'Harry Potter and the Goblet of Fire', price: 30 },
  { id: 4, title: 'The Bridge on the Drina', price: 100 },
  { id: 5, title: 'Dream of the Red Chamber', price: 20 },
  { id: 6, title: 'The Hobbit', price: 60 },
  { id: 7, title: 'The Alchemist', price: 50 },
  { id: 8, title: 'Lolita', price: 40 },
  { id: 9, title: 'Romeo and Juliet', price: 40 },
  { id: 10, title: 'Anna Karenina', price: 30 },
];

@Injectable({ providedIn: 'root' })
export class BooksService {
  getAll(): Promise<Book[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(booksMock), 1_000);
    });
  }
}
