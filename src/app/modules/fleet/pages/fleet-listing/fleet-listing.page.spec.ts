import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FleetListingPage } from './fleet-listing.page';

describe('FleetListingPage', () => {
  let component: FleetListingPage;
  let fixture: ComponentFixture<FleetListingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
