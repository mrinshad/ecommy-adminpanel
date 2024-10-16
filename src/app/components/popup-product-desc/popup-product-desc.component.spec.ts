import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupProductDescComponent } from './popup-product-desc.component';

describe('PopupProductDescComponent', () => {
  let component: PopupProductDescComponent;
  let fixture: ComponentFixture<PopupProductDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupProductDescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupProductDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
