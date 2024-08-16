import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReqComponent } from './product-req.component';

describe('ProductReqComponent', () => {
  let component: ProductReqComponent;
  let fixture: ComponentFixture<ProductReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductReqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
