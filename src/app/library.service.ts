import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private books: any[] = [];
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  private bookAddedSubject: Subject<any[]> = new Subject<any[]>();

  constructor(private http: HttpClient) { }
  darkMode = false;

  toggleDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  searchBooks(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${query}`);
  }
  addBook(book: any): void {
    let books: any[] = this.getBooksFromStorage();
    books.push(book);
    this.updateBooksInStorage(books);
    this.bookAddedSubject.next(books.slice()); // Emitting a copy of the updated books array
  }

  getBooks(): any[] {
    return this.getBooksFromStorage(); // Return a copy of the books array
  }

  getBookAddedObservable(): Observable<any[]> {
    return this.bookAddedSubject.asObservable();
  }

  private getBooksFromStorage(): any[] {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  }

  public updateBooksInStorage(books: any[]): void {
    localStorage.setItem('books', JSON.stringify(books));
    this.bookAddedSubject.next(books.slice()); // Emitting a copy of the updated books array
  }
  
  // addBook(book: any): void {
  //   this.books.push(book);
  //   this.bookAddedSubject.next(this.books.slice()); // Emitting a copy of the updated books array
  // }

  // getBooks(): any[] {
  //   return this.books.slice(); // Return a copy of the books array
  // }

  // getBookAddedObservable(): Observable<any[]> {
  //   return this.bookAddedSubject.asObservable();
  // }
}
