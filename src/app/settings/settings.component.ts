import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-settings', 
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private libraryService: LibraryService) {}

  toggleDarkMode(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.libraryService.toggleDarkMode(isChecked);
  }
  onSubmit(form : NgForm) {
    console.log(form)
    }
}
