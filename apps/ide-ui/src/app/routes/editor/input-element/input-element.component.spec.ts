import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputElementComponent } from './input-element.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('InputElementComponent', () => {
  let component: InputElementComponent;
  let fixture: ComponentFixture<InputElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputElementComponent ],
      imports: [NoopAnimationsModule, MatFormFieldModule,MatInputModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
