import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibraryService } from '../library.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnDestroy {
  books: any[] = [];
  private bookSubscription!: Subscription;

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.fetchBooks();

    this.bookSubscription = this.libraryService.getBookAddedObservable().subscribe((books: any[]) => {
      console.log('Updated books array:', books);
      this.books = books;
    });
  }

  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }

  fetchBooks(): void {
    this.books = this.libraryService.getBooks();
  }

  removeBook(bookToRemove: any): void {
    this.books = this.books.filter(book => book !== bookToRemove);
    this.libraryService.updateBooksInStorage(this.books);
  }

}
