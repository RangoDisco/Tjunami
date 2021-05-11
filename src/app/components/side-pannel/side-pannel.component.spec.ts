import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePannelComponent } from './side-pannel.component';

describe('SidePannelComponent', () => {
  let component: SidePannelComponent;
  let fixture: ComponentFixture<SidePannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidePannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
