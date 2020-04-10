import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEditorComponent } from './main-editor.component';
import { EditorModule } from '../editor.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MainEditorComponent', () => {
  let component: MainEditorComponent;
  let fixture: ComponentFixture<MainEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, EditorModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
