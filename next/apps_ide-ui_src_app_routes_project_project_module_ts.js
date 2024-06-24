"use strict";
(self["webpackChunkide_ui"] = self["webpackChunkide_ui"] || []).push([["apps_ide-ui_src_app_routes_project_project_module_ts"],{

/***/ 8616:
/*!*****************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/project/project.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectComponent": () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _shared_project_services_project_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/project/services/project.service */ 4232);
/* harmony import */ var _shared_ui_IdeComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/IdeComponent */ 2387);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/change/services/change-update.service */ 8722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dataview */ 211);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inplace */ 5431);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmpopup */ 9919);















const _c0 = ["inPlaceName"];
function ProjectComponent_ng_template_2_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r1.name ? project_r1.name : "Please enter a name");
  }
}
function ProjectComponent_ng_template_2_div_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectComponent_ng_template_2_div_2_ng_template_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](project_r1.name = $event);
    })("focusout", function ProjectComponent_ng_template_2_div_2_ng_template_5_Template_input_focusout_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
      _r5.deactivate();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r8.activate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _r12.focus(), " ");
  }
}
function ProjectComponent_ng_template_2_div_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r1.description ? project_r1.description : "Please enter a description");
  }
}
function ProjectComponent_ng_template_2_div_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProjectComponent_ng_template_2_div_2_ng_template_9_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](project_r1.description = $event);
    })("focusout", function ProjectComponent_ng_template_2_div_2_ng_template_9_Template_input_focusout_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r8.deactivate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
  }
  if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _r19.focus(), " ");
  }
}
function ProjectComponent_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "p-inplace", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProjectComponent_ng_template_2_div_2_ng_template_4_Template, 3, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ProjectComponent_ng_template_2_div_2_ng_template_5_Template, 3, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p-inplace", 11, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ProjectComponent_ng_template_2_div_2_ng_template_8_Template, 3, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ProjectComponent_ng_template_2_div_2_ng_template_9_Template, 3, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Current Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closable", true);
  }
}
function ProjectComponent_ng_template_2_div_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function ProjectComponent_ng_template_2_div_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function ProjectComponent_ng_template_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ProjectComponent_ng_template_2_div_3_ng_container_5_Template, 4, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ProjectComponent_ng_template_2_div_3_ng_container_6_Template, 4, 0, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", project_r1.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !project_r1.template);
  }
}
function ProjectComponent_ng_template_2_p_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProjectComponent_ng_template_2_p_button_8_Template_p_button_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.saveCurrentProject($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProjectComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProjectComponent_ng_template_2_div_2_Template, 13, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProjectComponent_ng_template_2_div_3_Template, 7, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5)(5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ProjectComponent_ng_template_2_p_button_8_Template, 1, 0, "p-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function ProjectComponent_ng_template_2_Template_p_button_onClick_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);
      const project_r1 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.loadProject(project_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r0.currentProjectClass(project_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isCurrentProject(project_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isCurrentProject(project_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, project_r1.lastUpdated));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isCurrentProject(project_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", ctx_r0.playButtonLabel(project_r1));
  }
}
class ProjectComponent extends _shared_ui_IdeComponent__WEBPACK_IMPORTED_MODULE_1__.IdeComponent {
  constructor(projectService, changeUpdateService, confirmationService) {
    super();
    this.projectService = projectService;
    this.changeUpdateService = changeUpdateService;
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    this.subscriptions.add(this.projectService.loadListOfProjects().subscribe(newList => {
      //this.projects=newList;
    }));
  }
  isCurrentProject(project) {
    return this.projectService.isCurrentProject(project);
  }
  currentProjectClass(project) {
    if (this.isCurrentProject(project)) return "current-project-item";else return '';
  }
  playButtonLabel(project) {
    if (this.projectService.isCurrentProject(project)) return 'Reload';else if (project.template) return 'Duplicate';else if (project.name) return 'Load';else return 'Select';
  }
  saveCurrentProject(event) {
    const curProject = this.projectService.getCurrentProject();
    if (!curProject.name || curProject.name.length === 0) {
      this.confirmationService.confirm({
        target: event.target ? event.target : undefined,
        message: 'Please define a name for your project',
        icon: 'pi pi-exclamation-triangle',
        rejectVisible: false,
        accept: () => {
          this.inPlaceName.activate();
        }
      });
    } else {
      this.projectService.saveCurrentProject();
    }
  }
  loadProject(project) {
    //console.log("Calling projectService");
    this.projectService.loadAndSetCurrentProject(project, this.changeUpdateService).then(value => {
      //console.log("projectService Call Returned");
      //this.projects=this.projectService.projects;
    });
    //console.log("Called projectService");
  }
  static #_ = this.ɵfac = function ProjectComponent_Factory(t) {
    return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_project_services_project_service__WEBPACK_IMPORTED_MODULE_0__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_2__.ChangeUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProjectComponent,
    selectors: [["ide-ui-project"]],
    viewQuery: function ProjectComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inPlaceName = _t.first);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 1,
    consts: [["layout", "list", 3, "value"], ["pTemplate", "listItem"], [1, "col-12"], [1, "project-list-item", 3, "ngClass"], ["class", "project-list-detail", 4, "ngIf"], [1, "project-list-action"], [1, "project-date"], ["icon", "pi pi-save", "label", "Save", 3, "onClick", 4, "ngIf"], ["icon", "pi pi-play", 3, "label", "onClick"], [1, "project-list-detail"], [1, "in-place-edit"], ["closeIcon", "pi pi-check", 3, "closable"], ["inPlaceName", ""], ["pTemplate", "display"], ["pTemplate", "content"], ["inPlaceDescription", ""], [1, "pi", "pi-inbox", "project-category-icon"], [1, "project-category"], [1, "project-name"], [1, "pi", "pi-pencil", "edit-icon"], ["type", "text", "id", "project-name-edit", "pInputText", "", 3, "ngModel", "ngModelChange", "focusout"], ["editName", ""], [1, "project-description"], ["type", "text", "id", "project-description-edit", "size", "50", "pInputText", "", 3, "ngModel", "ngModelChange", "focusout"], ["editDescription", ""], [4, "ngIf"], [1, "pi", "pi-bookmark", "project-category-icon"], [1, "pi", "pi-briefcase", "project-category-icon"], ["icon", "pi pi-save", "label", "Save", 3, "onClick"]],
    template: function ProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-confirmPopup");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p-dataView", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProjectComponent_ng_template_2_Template, 10, 8, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.projectService.projects);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_dataview__WEBPACK_IMPORTED_MODULE_6__.DataView, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_inplace__WEBPACK_IMPORTED_MODULE_8__.Inplace, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_10__.ConfirmPopup, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
    styles: [".in-place-edit[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.edit-icon[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.project-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n\n.project-description[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n}\n\n.project-category-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n\n.project-category[_ngcontent-%COMP%] {\n  font-weight: 600;\n  vertical-align: middle;\n}\n\n.project-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  width: 100%;\n}\n.project-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  margin-right: 2rem;\n}\n.project-list-item[_ngcontent-%COMP%]   .project-list-detail[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n}\n.project-list-item[_ngcontent-%COMP%]   .p-rating[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n}\n.project-list-item[_ngcontent-%COMP%]   .project-date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: normal;\n  margin-bottom: 0.5rem;\n  align-self: flex-end;\n}\n.project-list-item[_ngcontent-%COMP%]   .project-list-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.project-list-item[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n  margin-bottom: 0.1rem;\n  align-self: flex-end;\n}\n\n.current-project-item[_ngcontent-%COMP%] {\n  background-color: var(--green-50);\n}\n\n@media screen and (max-width: 576px) {\n  [_nghost-%COMP%]     .product-list-item {\n    flex-direction: column;\n    align-items: center;\n  }\n  [_nghost-%COMP%]     .product-list-item img {\n    width: 75%;\n    margin: 2rem 0;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-detail {\n    text-align: center;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-price {\n    align-self: center;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-action {\n    display: flex;\n    flex-direction: column;\n  }\n  [_nghost-%COMP%]     .product-list-item .product-list-action {\n    margin-top: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxtQkFBQTtBQUFEOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUFGO0FBRUU7RUFDRSxZQUFBO0VBQ0Esd0VBQUE7RUFDQSxrQkFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0FBREo7QUFJRTtFQUNFLG9CQUFBO0FBRko7QUFLRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSko7QUFPRTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7QUFMSjs7QUFTQTtFQUNDLGlDQUFBO0FBTkQ7O0FBUUE7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFMRjtFQU9FO0lBQ0UsVUFBQTtJQUNBLGNBQUE7RUFMSjtFQVFFO0lBQ0Usa0JBQUE7RUFOSjtFQVNFO0lBQ0Usa0JBQUE7RUFQSjtFQVVFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VBUko7RUFXRTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQVRKO0FBQ0YiLCJmaWxlIjoicHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmluLXBsYWNlLWVkaXQge1xuIG1hcmdpbi1ib3R0b206IDEuMHJlbTtcbn1cblxuLmVkaXQtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxLjByZW07XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG59XG5cbi5wcm9qZWN0LWNhdGVnb3J5LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xufVxuXG4ucHJvamVjdC1jYXRlZ29yeSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wcm9qZWN0LWxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIH1cblxuICAucHJvamVjdC1saXN0LWRldGFpbCB7XG4gICAgZmxleDogMSAxIDA7XG4gIH1cblxuICAucC1yYXRpbmcge1xuICAgIG1hcmdpbjogMCAwIC41cmVtIDA7XG4gIH1cblxuICAucHJvamVjdC1kYXRlIHtcbiAgICBmb250LXNpemU6IDEuMHJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG5cbiAgLnByb2plY3QtbGlzdC1hY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIHAtYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuMXJlbTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxufVxuXG4uY3VycmVudC1wcm9qZWN0LWl0ZW0ge1xuIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTUwKVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgOmhvc3QgOjpuZy1kZWVwIC5wcm9kdWN0LWxpc3QtaXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA3NSU7XG4gICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1saXN0LWRldGFpbCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWxpc3QtYWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWxpc3QtYWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFBO0FBQUQ7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUY7QUFFRTtFQUNFLFlBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7QUFESjtBQUlFO0VBQ0Usb0JBQUE7QUFGSjtBQUtFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU9FO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQUxKOztBQVNBO0VBQ0MsaUNBQUE7QUFORDs7QUFRQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQUxGO0VBT0U7SUFDRSxVQUFBO0lBQ0EsY0FBQTtFQUxKO0VBUUU7SUFDRSxrQkFBQTtFQU5KO0VBU0U7SUFDRSxrQkFBQTtFQVBKO0VBVUU7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RUFSSjtFQVdFO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLDhCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBVEo7QUFDRjtBQUNBLHd0R0FBd3RHIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW4tcGxhY2UtZWRpdCB7XG4gbWFyZ2luLWJvdHRvbTogMS4wcmVtO1xufVxuXG4uZWRpdC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEuMHJlbTtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbn1cblxuLnByb2plY3QtY2F0ZWdvcnktaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogLjVyZW07XG59XG5cbi5wcm9qZWN0LWNhdGVnb3J5IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnByb2plY3QtbGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgfVxuXG4gIC5wcm9qZWN0LWxpc3QtZGV0YWlsIHtcbiAgICBmbGV4OiAxIDEgMDtcbiAgfVxuXG4gIC5wLXJhdGluZyB7XG4gICAgbWFyZ2luOiAwIDAgLjVyZW0gMDtcbiAgfVxuXG4gIC5wcm9qZWN0LWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMS4wcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cblxuICAucHJvamVjdC1saXN0LWFjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgcC1idXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IC4xcmVtO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG59XG5cbi5jdXJyZW50LXByb2plY3QtaXRlbSB7XG4gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tNTApXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLnByb2R1Y3QtbGlzdC1pdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWxpc3QtZGV0YWlsIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLnByb2R1Y3QtbGlzdC1hY3Rpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2717:
/*!**************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/project/project.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectModule": () => (/* binding */ ProjectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5592);
/* harmony import */ var _project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.component */ 8616);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dataview */ 211);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 2418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8451);
/* harmony import */ var primeng_inplace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inplace */ 5431);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmpopup */ 9919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);












const routes = [{
  path: '',
  component: _project_component__WEBPACK_IMPORTED_MODULE_0__.ProjectComponent
}];
class ProjectModule {
  static #_ = this.ɵfac = function ProjectModule_Factory(t) {
    return new (t || ProjectModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ProjectModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_6__.DataViewModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_8__.InplaceModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_10__.ConfirmPopupModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProjectModule, {
    declarations: [_project_component__WEBPACK_IMPORTED_MODULE_0__.ProjectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_6__.DataViewModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_inplace__WEBPACK_IMPORTED_MODULE_8__.InplaceModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_10__.ConfirmPopupModule]
  });
})();

/***/ }),

/***/ 2387:
/*!*******************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/ui/IdeComponent.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdeComponent": () => (/* binding */ IdeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);


/**
 * Classical Angular component class
 */
class IdeComponent {
  constructor() {
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static #_ = this.ɵfac = function IdeComponent_Factory(t) {
    return new (t || IdeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IdeComponent,
    selectors: [["ng-component"]],
    decls: 0,
    vars: 0,
    template: function IdeComponent_Template(rf, ctx) {},
    encapsulation: 2
  });
}

/***/ }),

/***/ 9919:
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/primeng@15.4.1_@angular+common@15.2.10_@angular+core@15.2.10_rxjs@7.8.1_zone.js@0.12.0__rxjs@_ee6zf7vjhoozpy3jizybudrpxu/node_modules/primeng/fesm2020/primeng-confirmpopup.mjs ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmPopup": () => (/* binding */ ConfirmPopup),
/* harmony export */   "ConfirmPopupModule": () => (/* binding */ ConfirmPopupModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 1115);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 3135);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 5226);











function ConfirmPopup_div_0_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.confirmation.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-confirm-popup-icon");
  }
}
function ConfirmPopup_div_0_button_7_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.confirmation.rejectIcon);
  }
}
function ConfirmPopup_div_0_button_7_2_ng_template_0_Template(rf, ctx) {}
function ConfirmPopup_div_0_button_7_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmPopup_div_0_button_7_2_ng_template_0_Template, 0, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
}
function ConfirmPopup_div_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmPopup_div_0_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.reject());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmPopup_div_0_button_7_i_1_Template, 1, 2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfirmPopup_div_0_button_7_2_Template, 2, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.confirmation.rejectButtonStyleClass || "p-button-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r3.rejectButtonLabel)("ngClass", "p-confirm-popup-reject p-button-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.rejectButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.confirmation.rejectIcon)("ngIfElse", ctx_r3.rejecticon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.rejectIconTemplate);
  }
}
function ConfirmPopup_div_0_button_8_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r11.confirmation.acceptIcon);
  }
}
function ConfirmPopup_div_0_button_8_2_ng_template_0_Template(rf, ctx) {}
function ConfirmPopup_div_0_button_8_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmPopup_div_0_button_8_2_ng_template_0_Template, 0, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
}
function ConfirmPopup_div_0_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmPopup_div_0_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.accept());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmPopup_div_0_button_8_i_1_Template, 1, 2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfirmPopup_div_0_button_8_2_Template, 2, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.confirmation.acceptButtonStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r4.acceptButtonLabel)("ngClass", "p-confirm-popup-accept p-button-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r4.acceptButtonLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.confirmation.acceptIcon)("ngIfElse", ctx_r4.accepticon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.acceptIconTemplate);
  }
}
const _c0 = function (a0, a1) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1
  };
};
const _c1 = function (a1) {
  return {
    value: "open",
    params: a1
  };
};
function ConfirmPopup_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmPopup_div_0_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.onOverlayClick($event));
    })("@animation.start", function ConfirmPopup_div_0_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.onAnimationStart($event));
    })("@animation.done", function ConfirmPopup_div_0_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConfirmPopup_div_0_i_3_Template, 1, 3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConfirmPopup_div_0_button_7_Template, 3, 8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConfirmPopup_div_0_button_8_Template, 3, 8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-confirm-popup p-component")("ngStyle", ctx_r0.style)("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.confirmation.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.confirmation.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.confirmation.rejectVisible !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.confirmation.acceptVisible !== false);
  }
}
class ConfirmPopup {
  constructor(el, confirmationService, renderer, cd, config, overlayService, document) {
    this.el = el;
    this.confirmationService = confirmationService;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.document = document;
    this.defaultFocus = 'accept';
    this.showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    this.hideTransitionOptions = '.1s linear';
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.window = this.document.defaultView;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe(confirmation => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    this.cd.markForCheck();
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'rejecticon':
          this.rejectIconTemplate = item.template;
          break;
        case 'accepticon':
          this.acceptIconTemplate = item.template;
          break;
      }
    });
  }
  onAnimationStart(event) {
    if (event.toState === 'open') {
      this.container = event.element;
      this.renderer.appendChild(this.document.body, this.container);
      this.align();
      this.bindListeners();
      const element = this.getElementToFocus();
      if (element) {
        element.focus();
      }
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case 'void':
        this.onContainerDestroy();
        break;
    }
  }
  getElementToFocus() {
    switch (this.defaultFocus) {
      case 'accept':
        return primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.container, '.p-confirm-popup-accept');
      case 'reject':
        return primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.container, '.p-confirm-popup-reject');
      case 'none':
        return null;
    }
  }
  align() {
    if (this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('overlay', this.container, this.config.zIndex.overlay);
    }
    primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.absolutePosition(this.container, this.confirmation.target);
    const containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOffset(this.container);
    const targetOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOffset(this.confirmation.target);
    let arrowLeft = 0;
    if (containerOffset.left < targetOffset.left) {
      arrowLeft = targetOffset.left - containerOffset.left;
    }
    this.container.style.setProperty('--overlayArrowLeft', `${arrowLeft}px`);
    if (containerOffset.top < targetOffset.top) {
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.container, 'p-confirm-popup-flipped');
    }
  }
  hide() {
    this.visible = false;
  }
  accept() {
    if (this.confirmation.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide();
  }
  reject() {
    if (this.confirmation.rejectEvent) {
      this.confirmation.rejectEvent.emit();
    }
    this.hide();
  }
  onOverlayClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.el.nativeElement
    });
  }
  bindListeners() {
    /*
     * Called inside `setTimeout` to avoid listening to the click event that appears when `confirm` is first called(bubbling).
     * Need wait when bubbling event up and hang the handler on the next tick.
     * This is the case when eventTarget and confirmation.target do not match when the `confirm` method is called.
     */
    setTimeout(() => {
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
      this.bindScrollListener();
    });
  }
  unbindListeners() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      let documentEvent = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.isIOS() ? 'touchstart' : 'click';
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
      this.documentClickListener = this.renderer.listen(documentTarget, documentEvent, event => {
        let targetElement = this.confirmation.target;
        if (this.container !== event.target && !this.container.contains(event.target) && targetElement !== event.target && !targetElement.contains(event.target)) {
          this.hide();
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  onWindowResize() {
    if (this.visible && !primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.isTouchDevice()) {
      this.hide();
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, 'resize', this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_1__.ConnectedOverlayScrollHandler(this.confirmation.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unsubscribeConfirmationSubscriptions() {
    if (this.confirmation) {
      if (this.confirmation.acceptEvent) {
        this.confirmation.acceptEvent.unsubscribe();
      }
      if (this.confirmation.rejectEvent) {
        this.confirmation.rejectEvent.unsubscribe();
      }
    }
  }
  onContainerDestroy() {
    this.unbindListeners();
    this.unsubscribeConfirmationSubscriptions();
    if (this.autoZIndex) {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.container);
    }
    this.confirmation = null;
    this.container = null;
  }
  restoreAppend() {
    if (this.container) {
      this.renderer.removeChild(this.document.body, this.container);
    }
    this.onContainerDestroy();
  }
  get acceptButtonLabel() {
    return this.confirmation.acceptLabel || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_3__.TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.confirmation.rejectLabel || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_3__.TranslationKeys.REJECT);
  }
  ngOnDestroy() {
    this.restoreAppend();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
ConfirmPopup.ɵfac = function ConfirmPopup_Factory(t) {
  return new (t || ConfirmPopup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
};
ConfirmPopup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ConfirmPopup,
  selectors: [["p-confirmPopup"]],
  contentQueries: function ConfirmPopup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    key: "key",
    defaultFocus: "defaultFocus",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    style: "style",
    styleClass: "styleClass",
    visible: "visible"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "ngClass", "ngStyle", "class", "click", 4, "ngIf"], [3, "ngClass", "ngStyle", "click"], [1, "p-confirm-popup-content"], ["content", ""], [3, "ngClass", "class", 4, "ngIf"], [1, "p-confirm-popup-message"], [1, "p-confirm-popup-footer"], ["type", "button", "pButton", "", 3, "label", "ngClass", "class", "click", 4, "ngIf"], [3, "ngClass"], ["type", "button", "pButton", "", 3, "label", "ngClass", "click"], [3, "class", 4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet"], ["rejecticon", ""], ["accepticon", ""]],
  template: function ConfirmPopup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmPopup_div_0_Template, 9, 14, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective],
  styles: [".p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:\" \";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      transform: 'scaleY(0.8)',
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
      transform: 'translateY(0)',
      opacity: 1
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{showTransitionParams}}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('open => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{hideTransitionParams}}'))])]
  },
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmPopup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-confirmPopup',
      template: `
        <div
            *ngIf="visible"
            [ngClass]="'p-confirm-popup p-component'"
            [ngStyle]="style"
            [class]="styleClass"
            (click)="onOverlayClick($event)"
            [@animation]="{ value: 'open', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions } }"
            (@animation.start)="onAnimationStart($event)"
            (@animation.done)="onAnimationEnd($event)"
        >
            <div #content class="p-confirm-popup-content">
                <i [ngClass]="'p-confirm-popup-icon'" [class]="confirmation.icon" *ngIf="confirmation.icon"></i>
                <span class="p-confirm-popup-message">{{ confirmation.message }}</span>
            </div>
            <div class="p-confirm-popup-footer">
                <button
                    type="button"
                    pButton
                    [label]="rejectButtonLabel"
                    (click)="reject()"
                    [ngClass]="'p-confirm-popup-reject p-button-sm'"
                    [class]="confirmation.rejectButtonStyleClass || 'p-button-text'"
                    *ngIf="confirmation.rejectVisible !== false"
                    [attr.aria-label]="rejectButtonLabel"
                >
                    <i [class]="confirmation.rejectIcon" *ngIf="confirmation.rejectIcon; else rejecticon"></i>
                    <ng-template #rejecticon *ngTemplateOutlet="rejectIconTemplate"></ng-template>
                </button>
                <button
                    type="button"
                    pButton
                    [label]="acceptButtonLabel"
                    (click)="accept()"
                    [ngClass]="'p-confirm-popup-accept p-button-sm'"
                    [class]="confirmation.acceptButtonStyleClass"
                    *ngIf="confirmation.acceptVisible !== false"
                    [attr.aria-label]="acceptButtonLabel"
                >
                    <i [class]="confirmation.acceptIcon" *ngIf="confirmation.acceptIcon; else accepticon"></i>
                    <ng-template #accepticon *ngTemplateOutlet="acceptIconTemplate"></ng-template>
                </button>
            </div>
        </div>
    `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        transform: 'scaleY(0.8)',
        opacity: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
        transform: 'translateY(0)',
        opacity: 1
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{showTransitionParams}}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('open => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{hideTransitionParams}}'))])],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-confirm-popup{position:absolute;margin-top:10px;top:0;left:0}.p-confirm-popup-flipped{margin-top:0;margin-bottom:10px}.p-confirm-popup:after,.p-confirm-popup:before{bottom:100%;left:calc(var(--overlayArrowLeft, 0) + 1.25rem);content:\" \";height:0;width:0;position:absolute;pointer-events:none}.p-confirm-popup:after{border-width:8px;margin-left:-8px}.p-confirm-popup:before{border-width:10px;margin-left:-10px}.p-confirm-popup-flipped:after,.p-confirm-popup-flipped:before{bottom:auto;top:100%}.p-confirm-popup.p-confirm-popup-flipped:after{border-bottom-color:transparent}.p-confirm-popup.p-confirm-popup-flipped:before{border-bottom-color:transparent}.p-confirm-popup .p-confirm-popup-content{display:flex;align-items:center}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_3__.ConfirmationService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeNGConfig
    }, {
      type: primeng_api__WEBPACK_IMPORTED_MODULE_3__.OverlayService
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
      }]
    }];
  }, {
    key: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    defaultFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hideTransitionOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    baseZIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate]
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class ConfirmPopupModule {}
ConfirmPopupModule.ɵfac = function ConfirmPopupModule_Factory(t) {
  return new (t || ConfirmPopupModule)();
};
ConfirmPopupModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ConfirmPopupModule
});
ConfirmPopupModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmPopupModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
      exports: [ConfirmPopup, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
      declarations: [ConfirmPopup]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-confirmpopup.mjs.map

/***/ }),

/***/ 5431:
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ../../common/temp/node_modules/.pnpm/primeng@15.4.1_@angular+common@15.2.10_@angular+core@15.2.10_rxjs@7.8.1_zone.js@0.12.0__rxjs@_ee6zf7vjhoozpy3jizybudrpxu/node_modules/primeng/fesm2020/primeng-inplace.mjs ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inplace": () => (/* binding */ Inplace),
/* harmony export */   "InplaceContent": () => (/* binding */ InplaceContent),
/* harmony export */   "InplaceDisplay": () => (/* binding */ InplaceDisplay),
/* harmony export */   "InplaceModule": () => (/* binding */ InplaceModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/times */ 8029);








const _c0 = ["*"];
function Inplace_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c1 = function (a0) {
  return {
    "p-disabled": a0
  };
};
function Inplace_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Inplace_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onActivateClick($event));
    })("keydown", function Inplace_div_1_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Inplace_div_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r0.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.displayTemplate);
  }
}
function Inplace_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Inplace_div_2_ng_container_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Inplace_div_2_ng_container_3_button_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onDeactivateClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.icon);
  }
}
function Inplace_div_2_ng_container_3_button_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon");
  }
}
function Inplace_div_2_ng_container_3_button_2_2_ng_template_0_Template(rf, ctx) {}
function Inplace_div_2_ng_container_3_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Inplace_div_2_ng_container_3_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Inplace_div_2_ng_container_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Inplace_div_2_ng_container_3_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onDeactivateClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Inplace_div_2_ng_container_3_button_2_TimesIcon_1_Template, 1, 0, "TimesIcon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Inplace_div_2_ng_container_3_button_2_2_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-button-icon-only");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.closeIconTemplate);
  }
}
function Inplace_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Inplace_div_2_ng_container_3_button_1_Template, 1, 1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Inplace_div_2_ng_container_3_button_2_Template, 3, 3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.icon);
  }
}
function Inplace_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Inplace_div_2_ng_container_2_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Inplace_div_2_ng_container_3_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.closable);
  }
}
const _c2 = [[["", "pInplaceDisplay", ""]], [["", "pInplaceContent", ""]]];
const _c3 = function (a1) {
  return {
    "p-inplace p-component": true,
    "p-inplace-closable": a1
  };
};
const _c4 = ["[pInplaceDisplay]", "[pInplaceContent]"];
class InplaceDisplay {}
InplaceDisplay.ɵfac = function InplaceDisplay_Factory(t) {
  return new (t || InplaceDisplay)();
};
InplaceDisplay.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: InplaceDisplay,
  selectors: [["p-inplaceDisplay"]],
  hostAttrs: [1, "p-element"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function InplaceDisplay_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InplaceDisplay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-inplaceDisplay',
      template: '<ng-content></ng-content>',
      host: {
        class: 'p-element'
      }
    }]
  }], null, null);
})();
class InplaceContent {}
InplaceContent.ɵfac = function InplaceContent_Factory(t) {
  return new (t || InplaceContent)();
};
InplaceContent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: InplaceContent,
  selectors: [["p-inplaceContent"]],
  hostAttrs: [1, "p-element"],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function InplaceContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InplaceContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-inplaceContent',
      template: '<ng-content></ng-content>',
      host: {
        class: 'p-element'
      }
    }]
  }], null, null);
})();
class Inplace {
  constructor(cd) {
    this.cd = cd;
    this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'display':
          this.displayTemplate = item.template;
          break;
        case 'closeicon':
          this.closeIconTemplate = item.template;
          break;
        case 'content':
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  onActivateClick(event) {
    if (!this.preventClick) this.activate(event);
  }
  onDeactivateClick(event) {
    if (!this.preventClick) this.deactivate(event);
  }
  activate(event) {
    if (!this.disabled) {
      this.active = true;
      this.onActivate.emit(event);
      this.cd.markForCheck();
    }
  }
  deactivate(event) {
    if (!this.disabled) {
      this.active = false;
      this.hover = false;
      this.onDeactivate.emit(event);
      this.cd.markForCheck();
    }
  }
  onKeydown(event) {
    if (event.which === 13) {
      this.activate(event);
      event.preventDefault();
    }
  }
}
Inplace.ɵfac = function Inplace_Factory(t) {
  return new (t || Inplace)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
Inplace.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Inplace,
  selectors: [["p-inplace"]],
  contentQueries: function Inplace_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    active: "active",
    closable: "closable",
    disabled: "disabled",
    preventClick: "preventClick",
    style: "style",
    styleClass: "styleClass",
    closeIcon: "closeIcon"
  },
  outputs: {
    onActivate: "onActivate",
    onDeactivate: "onDeactivate"
  },
  ngContentSelectors: _c4,
  decls: 3,
  vars: 8,
  consts: [[3, "ngClass", "ngStyle"], ["class", "p-inplace-display", "tabindex", "0", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["class", "p-inplace-content", 4, "ngIf"], ["tabindex", "0", 1, "p-inplace-display", 3, "ngClass", "click", "keydown"], [4, "ngTemplateOutlet"], [1, "p-inplace-content"], [4, "ngIf"], ["type", "button", "pButton", "", 3, "icon", "click", 4, "ngIf"], ["type", "button", "pButton", "", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", "pButton", "", 3, "icon", "click"], ["type", "button", "pButton", "", 3, "ngClass", "click"]],
  template: function Inplace_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Inplace_div_1_Template, 3, 4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Inplace_div_2_Template, 4, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, ctx.closable))("ngStyle", ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active);
    }
  },
  dependencies: function () {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_icons_times__WEBPACK_IMPORTED_MODULE_4__.TimesIcon];
  },
  styles: [".p-inplace .p-inplace-display{display:inline;cursor:pointer}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{flex:1 1 auto;width:1%}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Inplace, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'p-inplace',
      template: `
        <div [ngClass]="{ 'p-inplace p-component': true, 'p-inplace-closable': closable }" [ngStyle]="style" [class]="styleClass">
            <div class="p-inplace-display" (click)="onActivateClick($event)" tabindex="0" (keydown)="onKeydown($event)" [ngClass]="{ 'p-disabled': disabled }" *ngIf="!active">
                <ng-content select="[pInplaceDisplay]"></ng-content>
                <ng-container *ngTemplateOutlet="displayTemplate"></ng-container>
            </div>
            <div class="p-inplace-content" *ngIf="active">
                <ng-content select="[pInplaceContent]"></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>

                <ng-container *ngIf="closable">
                    <button *ngIf="icon" type="button" [icon]="icon" pButton (click)="onDeactivateClick($event)"></button>
                    <button *ngIf="!icon" type="button" pButton [ngClass]="'p-button-icon-only'" (click)="onDeactivateClick($event)">
                        <TimesIcon *ngIf="!closeIconTemplate"/>
                        <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                    </button>
                </ng-container>
            </div>
        </div>
    `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'p-element'
      },
      styles: [".p-inplace .p-inplace-display{display:inline;cursor:pointer}.p-inplace .p-inplace-content{display:inline}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content{display:flex}.p-fluid .p-inplace.p-inplace-closable .p-inplace-content>.p-inputtext{flex:1 1 auto;width:1%}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preventClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    styleClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate]
    }],
    onActivate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDeactivate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class InplaceModule {}
InplaceModule.ɵfac = function InplaceModule_Factory(t) {
  return new (t || InplaceModule)();
};
InplaceModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: InplaceModule
});
InplaceModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_4__.TimesIcon, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InplaceModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_4__.TimesIcon],
      exports: [Inplace, InplaceDisplay, InplaceContent, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
      declarations: [Inplace, InplaceDisplay, InplaceContent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-inplace.mjs.map

/***/ })

}]);
//# sourceMappingURL=apps_ide-ui_src_app_routes_project_project_module_ts.js.map