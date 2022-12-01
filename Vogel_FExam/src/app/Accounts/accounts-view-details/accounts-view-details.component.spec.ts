import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsViewDetailsComponent } from './accounts-view-details.component';

describe('AccountsViewDetailsComponent', () => {
  let component: AccountsViewDetailsComponent;
  let fixture: ComponentFixture<AccountsViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsViewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
