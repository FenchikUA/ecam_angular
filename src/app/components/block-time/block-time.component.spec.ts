import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTimeComponent } from './block-time.component';

describe('BlockTimeComponent', () => {
  let component: BlockTimeComponent;
  let fixture: ComponentFixture<BlockTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockTimeComponent]
    });
    fixture = TestBed.createComponent(BlockTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
