import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersViewListComponent } from './orders-view-list.component';

describe('OrdersViewListComponent', () => {
  let component: OrdersViewListComponent;
  let fixture: ComponentFixture<OrdersViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
