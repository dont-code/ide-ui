import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import {DataViewModule} from "primeng/dataview";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "../../shared/shared.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ DataViewModule,
        ButtonModule,
        SharedModule,
      HttpClientTestingModule],
      declarations: [ ProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
