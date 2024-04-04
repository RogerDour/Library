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
    image: null as string | null // Update the type definition to accept string or null
  };

  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.libraryService.addBook(this.book);
    console.log('Book added:', this.book);
    // Clear the form after submission
    form.resetForm();
    this.book = {
      name: '',
      author: '',
      tags: '',
      quantity: 0,
      image: null as string | null // Reset the image
    };
  }

  onImageChange(event: any): void {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Set the data URL as the value of book.image
        this.book.image = reader.result as string;
      };
      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  }
}
