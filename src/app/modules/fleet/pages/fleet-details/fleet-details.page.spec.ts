import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FleetDetailsPage } from './fleet-details.page';

describe('FleetDetailsPage', () => {
  let component: FleetDetailsPage;
  let fixture: ComponentFixture<FleetDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
