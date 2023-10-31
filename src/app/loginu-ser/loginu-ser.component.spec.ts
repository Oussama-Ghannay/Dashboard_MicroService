import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginuSERComponent } from './loginu-ser.component';

describe('LoginuSERComponent', () => {
  let component: LoginuSERComponent;
  let fixture: ComponentFixture<LoginuSERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginuSERComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginuSERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
