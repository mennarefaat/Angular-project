import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersAddComponent } from './speakers-add.component';

describe('SpeakersAddComponent', () => {
  let component: SpeakersAddComponent;
  let fixture: ComponentFixture<SpeakersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
