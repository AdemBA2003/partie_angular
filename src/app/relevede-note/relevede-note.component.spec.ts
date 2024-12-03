import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelevedeNoteComponent } from './relevede-note.component';

describe('RelevedeNoteComponent', () => {
  let component: RelevedeNoteComponent;
  let fixture: ComponentFixture<RelevedeNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelevedeNoteComponent]
    });
    fixture = TestBed.createComponent(RelevedeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
