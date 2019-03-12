import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBtnsComponent } from './main-buttons.component';

describe('MainButtonsComponent', () => {
  let component: MainBtnsComponent;
  let fixture: ComponentFixture<MainBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
