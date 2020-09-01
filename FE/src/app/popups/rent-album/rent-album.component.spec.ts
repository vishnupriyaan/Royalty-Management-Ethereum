import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAlbumComponent } from './rent-album.component';

describe('RentAlbumComponent', () => {
  let component: RentAlbumComponent;
  let fixture: ComponentFixture<RentAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
