import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FleetPage } from './fleet.page';

describe('FleetPage', () => {
  let component: FleetPage;
  let fixture: ComponentFixture<FleetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
