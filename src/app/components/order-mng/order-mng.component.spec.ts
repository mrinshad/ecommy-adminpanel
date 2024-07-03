import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMngComponent } from './order-mng.component';

describe('OrderMngComponent', () => {
  let component: OrderMngComponent;
  let fixture: ComponentFixture<OrderMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderMngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
