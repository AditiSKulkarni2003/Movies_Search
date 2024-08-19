import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDComponent } from './ng-for-d.component';

describe('NgForDComponent', () => {
  let component: NgForDComponent;
  let fixture: ComponentFixture<NgForDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgForDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
