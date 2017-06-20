import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPlaylistComponent } from './personal-playlist.component';

describe('PersonalPlaylistComponent', () => {
  let component: PersonalPlaylistComponent;
  let fixture: ComponentFixture<PersonalPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
