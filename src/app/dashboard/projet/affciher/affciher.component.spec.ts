import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffciherComponent } from './affciher.component';

describe('AffciherComponent', () => {
  let component: AffciherComponent;
  let fixture: ComponentFixture<AffciherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffciherComponent]
    });
    fixture = TestBed.createComponent(AffciherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
