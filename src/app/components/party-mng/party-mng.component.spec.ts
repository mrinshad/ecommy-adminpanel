import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyMngComponent } from './party-mng.component';

describe('PartyMngComponent', () => {
  let component: PartyMngComponent;
  let fixture: ComponentFixture<PartyMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartyMngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartyMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
