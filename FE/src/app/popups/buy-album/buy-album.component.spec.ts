import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAlbumComponent } from './buy-album.component';

describe('BuyAlbumComponent', () => {
  let component: BuyAlbumComponent;
  let fixture: ComponentFixture<BuyAlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyAlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
