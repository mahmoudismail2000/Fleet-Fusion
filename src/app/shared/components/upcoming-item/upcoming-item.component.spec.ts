import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpcomingItemComponent } from './upcoming-item.component';

describe('UpcomingItemComponent', () => {
  let component: UpcomingItemComponent;
  let fixture: ComponentFixture<UpcomingItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UpcomingItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
