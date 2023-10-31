import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEvenementComponent } from './dialog-evenement.component';

describe('DialogEvenementComponent', () => {
  let component: DialogEvenementComponent;
  let fixture: ComponentFixture<DialogEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
