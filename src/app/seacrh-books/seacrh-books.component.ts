import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-seacrh-books',
  templateUrl: './seacrh-books.component.html',
  styleUrls: ['./seacrh-books.component.css']
})
export class SeacrhBooksComponent implements OnInit {
  searchTerm: string = '';
  searchResults: any[] = [];

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }

  searchBooks(): void {
    if (this.searchTerm.trim() === '') {
      return;
    }

    this.libraryService.searchBooks(this.searchTerm).subscribe(
      (response: any) => {
        this.searchResults = response.items;
      },
      (error: any) => {
        console.error('Error fetching books:', error);
      }
    );
  }

}
