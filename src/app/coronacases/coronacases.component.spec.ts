import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronacasesComponent } from './coronacases.component';

describe('CoronacasesComponent', () => {
  let component: CoronacasesComponent;
  let fixture: ComponentFixture<CoronacasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronacasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoronacasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
