import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTextElementComponent } from './sub-text-element.component';

describe('SubTextElementComponent', () => {
  let component: SubTextElementComponent;
  let fixture: ComponentFixture<SubTextElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTextElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTextElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
