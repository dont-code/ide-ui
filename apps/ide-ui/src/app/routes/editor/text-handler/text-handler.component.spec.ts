import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHandlerComponent } from './text-handler.component';
import { SelectElementComponent } from '../select-element/select-element.component';
import { TextElementComponent } from '../text-element/text-element.component';
import { SharedModule } from '../../../shared/shared.module';
import { EditorModule } from '../editor.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TextHandlerComponent', () => {
  let component: TextHandlerComponent;
  let fixture: ComponentFixture<TextHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, SharedModule, EditorModule]
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
