import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiumListAppComponent } from './negotium-list-app.component';

describe('NegotiumListAppComponent', () => {
  let component: NegotiumListAppComponent;
  let fixture: ComponentFixture<NegotiumListAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegotiumListAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegotiumListAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
