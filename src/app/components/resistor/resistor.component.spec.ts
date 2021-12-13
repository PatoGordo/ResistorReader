import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorComponent } from './resistor.component';

describe('ResistorComponent', () => {
  let component: ResistorComponent;
  let fixture: ComponentFixture<ResistorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResistorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
