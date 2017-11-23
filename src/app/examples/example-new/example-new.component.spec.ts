import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNewComponent } from './example-new.component';

describe('ExampleNewComponent', () => {
  let component: ExampleNewComponent;
  let fixture: ComponentFixture<ExampleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
