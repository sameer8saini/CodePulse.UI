import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostListComponent } from './blogpost-list.component';

describe('BlogpostListComponent', () => {
  let component: BlogpostListComponent;
  let fixture: ComponentFixture<BlogpostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogpostListComponent]
    });
    fixture = TestBed.createComponent(BlogpostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
