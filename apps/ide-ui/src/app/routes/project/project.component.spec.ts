import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import {DataViewModule} from "primeng/dataview";
import {ButtonModule} from "primeng/button";
import {SharedModule} from "../../shared/shared.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {InplaceModule} from "primeng/inplace";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {FormsModule} from "@angular/forms";
import {ConfirmationService} from "primeng/api";

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ DataViewModule,
        ButtonModule,
        SharedModule, InplaceModule, ConfirmPopupModule, FormsModule,
      HttpClientTestingModule],
      declarations: [ ProjectComponent ],
      providers:[ConfirmationService]
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
