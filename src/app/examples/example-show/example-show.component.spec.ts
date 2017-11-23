import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleShowComponent } from './example-show.component';

describe('ExampleShowComponent', () => {
  let component: ExampleShowComponent;
  let fixture: ComponentFixture<ExampleShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
