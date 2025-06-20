import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FleetOptionComponent } from './fleet-option.component';

describe('FleetOptionComponent', () => {
  let component: FleetOptionComponent;
  let fixture: ComponentFixture<FleetOptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FleetOptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FleetOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
