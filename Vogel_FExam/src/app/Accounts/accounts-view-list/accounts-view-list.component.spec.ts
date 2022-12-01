import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsViewListComponent } from './accounts-view-list.component';

describe('AccountsViewListComponent', () => {
  let component: AccountsViewListComponent;
  let fixture: ComponentFixture<AccountsViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
