import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllboxComponent } from './controllbox.component';

describe('ControllboxComponent', () => {
  let component: ControllboxComponent;
  let fixture: ComponentFixture<ControllboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
