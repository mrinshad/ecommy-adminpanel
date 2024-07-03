import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSprtComponent } from './customer-sprt.component';

describe('CustomerSprtComponent', () => {
  let component: CustomerSprtComponent;
  let fixture: ComponentFixture<CustomerSprtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSprtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerSprtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
