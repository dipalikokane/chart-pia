import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiaChartComponent } from './pia-chart.component';

describe('PiaChartComponent', () => {
  let component: PiaChartComponent;
  let fixture: ComponentFixture<PiaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiaChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
