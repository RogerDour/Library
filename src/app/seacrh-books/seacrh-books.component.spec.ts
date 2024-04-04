import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacrhBooksComponent } from './seacrh-books.component';

describe('SeacrhBooksComponent', () => {
  let component: SeacrhBooksComponent;
  let fixture: ComponentFixture<SeacrhBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeacrhBooksComponent]
    });
    fixture = TestBed.createComponent(SeacrhBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
