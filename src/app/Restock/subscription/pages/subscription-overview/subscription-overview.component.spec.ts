import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionOverviewComponent } from './subscription-overview.component';

describe('SubscriptionOverviewComponent', () => {
  let component: SubscriptionOverviewComponent;
  let fixture: ComponentFixture<SubscriptionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
