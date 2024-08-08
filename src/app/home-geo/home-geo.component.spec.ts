import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGeoComponent } from './home-geo.component';

describe('HomeGeoComponent', () => {
  let component: HomeGeoComponent;
  let fixture: ComponentFixture<HomeGeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeGeoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
