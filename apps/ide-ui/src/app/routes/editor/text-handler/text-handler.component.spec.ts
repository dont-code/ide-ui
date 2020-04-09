import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHandlerComponent } from './text-handler.component';

describe('TextHandlerComponent', () => {
  let component: TextHandlerComponent;
  let fixture: ComponentFixture<TextHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
