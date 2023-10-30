import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMusicComponent } from './dialog-music.component';

describe('DialogMusicComponent', () => {
  let component: DialogMusicComponent;
  let fixture: ComponentFixture<DialogMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
