import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceIndexComponent } from './place-index.component';

describe('PlaceIndexComponent', () => {
  let component: PlaceIndexComponent;
  let fixture: ComponentFixture<PlaceIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
