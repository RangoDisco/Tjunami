import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJeuComponent } from './page-jeu.component';

describe('PageJeuComponent', () => {
  let component: PageJeuComponent;
  let fixture: ComponentFixture<PageJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
