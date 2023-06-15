import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogpostComponent } from './edit-blogpost.component';

describe('EditBlogpostComponent', () => {
  let component: EditBlogpostComponent;
  let fixture: ComponentFixture<EditBlogpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBlogpostComponent]
    });
    fixture = TestBed.createComponent(EditBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
