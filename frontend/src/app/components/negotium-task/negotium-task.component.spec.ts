import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiumTaskComponent } from './negotium-task.component';

describe('NegotiumTaskComponent', () => {
  let component: NegotiumTaskComponent;
  let fixture: ComponentFixture<NegotiumTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NegotiumTaskComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegotiumTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
