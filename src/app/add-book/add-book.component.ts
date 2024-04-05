import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book = {
    name: '',
    author: '',
    tags: '',
    quantity: 0,
    image: null as string | null 
  };

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.libraryService.addBook(this.book);
    console.log('Book added:', this.book);
    form.resetForm();
    this.book = {
      name: '',
      author: '',
      tags: '',
      quantity: 0,
      image: null as string | null
    };
  }

  onImageChange(event: any): void {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.book.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
