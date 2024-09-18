import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerProjetComponent } from './supprimer-projet.component';

describe('SupprimerProjetComponent', () => {
  let component: SupprimerProjetComponent;
  let fixture: ComponentFixture<SupprimerProjetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupprimerProjetComponent]
    });
    fixture = TestBed.createComponent(SupprimerProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
