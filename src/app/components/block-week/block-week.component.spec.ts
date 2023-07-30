import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockWeekComponent } from './block-week.component';

describe('BlockWeekComponent', () => {
  let component: BlockWeekComponent;
  let fixture: ComponentFixture<BlockWeekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockWeekComponent]
    });
    fixture = TestBed.createComponent(BlockWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
