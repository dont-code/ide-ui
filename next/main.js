"use strict";
(self["webpackChunkide_ui"] = self["webpackChunkide_ui"] || []).push([["main"],{

/***/ 2745:
/*!**********************************************!*\
  !*** ./apps/ide-ui/src/app/app.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dontcode/plugin-common */ 9815);
/* harmony import */ var _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dontcode/sandbox */ 2390);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 9949);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/change/services/change-update.service */ 1790);
/* harmony import */ var _shared_project_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/project/services/project.service */ 876);
/* harmony import */ var _shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/text/services/text.service */ 7250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _routes_editor_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/editor/main-editor/main-editor.component */ 2768);
/* harmony import */ var _layout_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/main/main.component */ 2130);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);



















function AppComponent_ide_ui_main_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ide-ui-main");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ide-ui-main-editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
class AppComponent extends _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_8__.LightAppComponent {
  constructor(configService, service, updateService, projectService, httpClient, injector, ref, dontCodeCore) {
    super(configService, httpClient, injector, ref, dontCodeCore);
    this.service = service;
    this.updateService = updateService;
    this.projectService = projectService;
    this.title = 'ide-ui';
    this.defaultRepositoryUrl = 'assets/repositories/stable.json';
    // Manages the different cases of loading the repository of plugins
    this.runtimeConfig = window.dontCodeConfig;
    if (this.runtimeConfig != null && this.runtimeConfig?.repositoryUrl == null) {
      this.runtimeConfig.repositoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.repositoryUrl;
    }
  }
  mainTab() {
    return window.location.hash.indexOf('/newTabDev') == -1;
  }
  /**
   * Initializa all services after all plugins and config are being loaded.
   * @param config
   * @param repoUrl
   */
  afterInitialization(config, repoUrl) {
    this.service.resetSchema();
    this.service.readSchema(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getSchemaManager().getSchema());
    //    this.service.readSchemaFormUrl('assets/core/'+DontCode.dtcde.getSchemaUri());
    return this.updateService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.RESET, _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT, null)).then(() => {
      this.projectService.newCurrentProject();
    }, reason => {
      console.error('Error while resetting model after a loadSchema', reason);
      this.projectService.newCurrentProject();
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_9__.CommonConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_4__.TextService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_2__.ChangeUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_project_services_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_9__.DONT_CODE_CORE));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["ide-ui-root"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AppComponent_ide_ui_main_0_Template, 2, 0, "ide-ui-main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mainTab());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.mainTab());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _routes_editor_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_5__.MainEditorComponent, _layout_main_main_component__WEBPACK_IMPORTED_MODULE_6__.MainComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 107:
/*!*******************************************!*\
  !*** ./apps/ide-ui/src/app/app.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2745);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.module */ 9049);
/* harmony import */ var _routes_editor_editor_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/editor/editor.module */ 3442);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _routes_editor_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/editor/main-editor/main-editor.component */ 2768);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _routes_dev_list_changes_list_changes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/dev/list-changes/list-changes.component */ 4979);
/* harmony import */ var _routes_dev_dev_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/dev/dev.module */ 8039);
/* harmony import */ var _routes_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/welcome/welcome.module */ 5133);
/* harmony import */ var _routes_welcome_main_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/welcome/main/welcome.component */ 2379);
/* harmony import */ var _dontcode_plugin_basic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @dontcode/plugin-basic */ 9769);
/* harmony import */ var _dontcode_plugin_fields__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @dontcode/plugin-fields */ 9899);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _dontcode_plugin_rest__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @dontcode/plugin-rest */ 9304);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @dontcode/plugin-common */ 9815);
/* harmony import */ var _dontcode_plugin_report__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @dontcode/plugin-report */ 6087);
/* harmony import */ var _dontcode_plugin_commerce__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @dontcode/plugin-commerce */ 6585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);






















const appRoutes = [{
  path: '',
  component: _routes_welcome_main_welcome_component__WEBPACK_IMPORTED_MODULE_7__.WelcomeComponent
}, {
  path: 'editor',
  component: _routes_editor_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_3__.MainEditorComponent
}, {
  path: 'welcome',
  component: _routes_welcome_main_welcome_component__WEBPACK_IMPORTED_MODULE_7__.WelcomeComponent
}, {
  path: 'dev',
  component: _routes_dev_list_changes_list_changes_component__WEBPACK_IMPORTED_MODULE_4__.ListChangesComponent
}, {
  path: 'newTabDev',
  component: _routes_dev_list_changes_list_changes_component__WEBPACK_IMPORTED_MODULE_4__.ListChangesComponent
}, {
  path: 'project',
  loadChildren: () => __webpack_require__.e(/*! import() */ "apps_ide-ui_src_app_routes_project_project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./routes/project/project.module */ 8676)).then(m => m.ProjectModule)
}];
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _routes_editor_editor_module__WEBPACK_IMPORTED_MODULE_2__.EditorModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule, _routes_dev_dev_module__WEBPACK_IMPORTED_MODULE_5__.DevModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      useHash: true
    } // <-- debugging purposes only
    ), _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _routes_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_6__.WelcomeModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_14__.PluginCommonModule.forRoot(), _dontcode_plugin_basic__WEBPACK_IMPORTED_MODULE_15__.BasicModule, _dontcode_plugin_fields__WEBPACK_IMPORTED_MODULE_16__.FieldsModule, _dontcode_plugin_rest__WEBPACK_IMPORTED_MODULE_17__.RestModule, _dontcode_plugin_report__WEBPACK_IMPORTED_MODULE_18__.ReportModule, _dontcode_plugin_commerce__WEBPACK_IMPORTED_MODULE_19__.CommerceModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _routes_editor_editor_module__WEBPACK_IMPORTED_MODULE_2__.EditorModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule, _routes_dev_dev_module__WEBPACK_IMPORTED_MODULE_5__.DevModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _routes_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_6__.WelcomeModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_14__.PluginCommonModule, _dontcode_plugin_basic__WEBPACK_IMPORTED_MODULE_15__.BasicModule, _dontcode_plugin_fields__WEBPACK_IMPORTED_MODULE_16__.FieldsModule, _dontcode_plugin_rest__WEBPACK_IMPORTED_MODULE_17__.RestModule, _dontcode_plugin_report__WEBPACK_IMPORTED_MODULE_18__.ReportModule, _dontcode_plugin_commerce__WEBPACK_IMPORTED_MODULE_19__.CommerceModule]
  });
})();

/***/ }),

/***/ 9049:
/*!*****************************************************!*\
  !*** ./apps/ide-ui/src/app/layout/layout.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2130);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menu */ 625);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 121);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/overlaypanel */ 6664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);











class LayoutModule {
  static #_ = this.ɵfac = function LayoutModule_Factory(t) {
    return new (t || LayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: LayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__.SidebarModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_8__.MenuModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__.OverlayPanelModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LayoutModule, {
    declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__.SidebarModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_8__.MenuModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__.OverlayPanelModule],
    exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent]
  });
})();

/***/ }),

/***/ 2130:
/*!***********************************************************!*\
  !*** ./apps/ide-ui/src/app/layout/main/main.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/text/services/text.service */ 7250);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/change/services/change-update.service */ 1790);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 9949);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var _shared_project_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/project/services/project.service */ 876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dontcode/plugin-common */ 9815);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toolbar */ 4575);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/overlaypanel */ 6664);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu.component */ 121);























function MainComponent_div_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Server:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Session:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.serverUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.sessionId);
  }
}
const _c0 = function () {
  return {
    width: "500px"
  };
};
const _c1 = function () {
  return {
    width: "15em"
  };
};
function MainComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "p-toolbar", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.sidePanelVisible = !ctx_r5.sidePanelVisible);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Dont-code Builder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.loadSchema());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.openDevUrl());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_div_0_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.openPreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function MainComponent_div_0_Template_button_mouseenter_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r2.show($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p-overlayPanel", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, MainComponent_div_0_ng_template_14_Template, 9, 2, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 13)(16, "p-sidebar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function MainComponent_div_0_Template_p_sidebar_visibleChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.sidePanelVisible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "img", 3)(18, "ide-ui-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 15)(20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "ide-ui-menu", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.connectedClass(ctx_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.connectedClass(ctx_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showCloseIcon", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx_r0.sidePanelVisible)("modal", false)("closeOnEscape", true)("showCloseIcon", true);
  }
}
class MainComponent {
  constructor(service, updateService, projectService, configService, ref) {
    this.service = service;
    this.updateService = updateService;
    this.projectService = projectService;
    this.configService = configService;
    this.ref = ref;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.context$ = null;
    this.sidePanelVisible = true;
    this.serverUrl = '';
    this.subscriptions.add(configService.getUpdates().subscribe({
      next: newConfig => {
        const changed = newConfig.ideWebSocketUrl != this.serverUrl;
        if (changed) {
          this.serverUrl = newConfig.ideWebSocketUrl ?? '';
          this.ref.markForCheck();
          this.ref.detectChanges();
        }
      }
    }));
  }
  ngOnInit() {
    this.sidePanelVisible = true;
    this.context$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.updateService.getConnectionStatus(), this.updateService.getSessionId()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(status => {
      this.sessionId = status[1];
      return {
        status: status[0],
        sessionId: status[1]
      };
    }));
    //    this.loadSchema();
  }

  logoClicked() {
    this.sidePanelVisible = true;
  }
  sidePanelVisibleChanged($event) {
    //console.log($event);
    this.sidePanelVisible = $event.target.visible;
  }
  /**
   * User wants to re-start from scratch
   */
  loadSchema() {
    this.service.resetSchema();
    this.service.readSchema(_dontcode_core__WEBPACK_IMPORTED_MODULE_3__.dtcde.getSchemaManager().getSchema());
    this.updateService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_3__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_3__.ChangeType.RESET, _dontcode_core__WEBPACK_IMPORTED_MODULE_3__.DontCodeModel.ROOT, null)).then(() => {
      this.projectService.newCurrentProject();
      this.ref.detectChanges();
    }, reason => {
      console.error('Error while resetting model after a loadSchema', reason);
      this.projectService.newCurrentProject();
      this.ref.detectChanges();
    });
  }
  openDevUrl() {
    window.open('#/newTabDev', '_blank');
  }
  openPreview() {
    if (this.sessionId == null) {
      window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.previewUrl, '_blank');
    } else {
      window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.previewUrl + '?sessionId=' + this.sessionId, '_blank');
    }
  }
  connectedClass(ctx) {
    if (ctx.status !== "connected") {
      return "p-button-danger";
    }
    return '';
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static #_ = this.ɵfac = function MainComponent_Factory(t) {
    return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_0__.TextService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__.ChangeUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_project_services_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_10__.CommonConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MainComponent,
    selectors: [["ide-ui-main"]],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], ["id", "mainToolbar"], [1, "p-toolbar-group-left"], ["src", "./assets/images/logo.png", "width", "119", "height", "66"], ["pButton", "", "type", "button", "icon", "pi pi-bars", 1, "md:hidden", "p-button-rounded", "p-button-outlined", 3, "click"], [1, "p-toolbar-group-right"], ["pButton", "", "type", "button", "icon", "pi pi-cloud-download", "pTooltip", "New Application", 1, "p-button-rounded", "p-button-outlined", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-book", "pTooltip", "Open Debugging Window", 1, "p-button-rounded", "p-button-outlined", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-external-link", "pTooltip", "Open Previewer", 1, "p-button-rounded", "p-button-outlined", 3, "ngClass", "click"], ["pButton", "", "type", "button", "icon", "pi pi-sort", 1, "p-button-rounded", "p-button-outlined", 3, "ngClass", "mouseenter"], [3, "showCloseIcon"], ["op", ""], ["pTemplate", ""], [1, "md:hidden"], ["id", "mainSidePanel", 3, "visible", "modal", "closeOnEscape", "showCloseIcon", "visibleChange"], [1, "grid"], [1, "col", "hidden", "md:block", "md:col-2"], ["id", "mainMenu"], [1, "col", "md:col-10"], [1, "col-2"], [1, "col-10"]],
    template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MainComponent_div_0_Template, 24, 13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.context$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__.Sidebar, primeng_toolbar__WEBPACK_IMPORTED_MODULE_14__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__.Tooltip, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_17__.OverlayPanel, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
    styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvbGF5b3V0L21haW4vbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUEsZ29CQUFnb0IiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 121:
/*!***********************************************************!*\
  !*** ./apps/ide-ui/src/app/layout/menu/menu.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/menu */ 625);


class MenuComponent {
  constructor() {
    this.menuItems = new Array({
      label: 'Main Menu',
      items: [{
        label: 'Welcome',
        icon: 'pi pi-home',
        routerLink: ['/welcome']
      }, {
        label: 'Projects',
        icon: 'pi pi-home',
        routerLink: ['/project']
      }, {
        label: 'Editor',
        icon: 'pi pi-pencil',
        routerLink: ['/editor']
      }]
    }, {
      label: 'Debug Menu',
      items: [{
        label: 'Dev',
        icon: 'pi pi-book',
        routerLink: ['/dev']
      }]
    });
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["ide-ui-menu"]],
    decls: 1,
    vars: 1,
    consts: [[3, "model"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-menu", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.menuItems);
      }
    },
    dependencies: [primeng_menu__WEBPACK_IMPORTED_MODULE_1__.Menu],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvbGF5b3V0L21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 8039:
/*!******************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/dev/dev.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevModule": () => (/* binding */ DevModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _list_changes_list_changes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-changes/list-changes.component */ 4979);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class DevModule {
  static #_ = this.ɵfac = function DevModule_Factory(t) {
    return new (t || DevModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DevModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_3__.TableModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DevModule, {
    declarations: [_list_changes_list_changes_component__WEBPACK_IMPORTED_MODULE_0__.ListChangesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_3__.TableModule]
  });
})();

/***/ }),

/***/ 4979:
/*!*******************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/dev/list-changes/list-changes.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListChangesComponent": () => (/* binding */ ListChangesComponent)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var _shared_change_services_change_listen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/change/services/change-listen.service */ 7539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








function ListChangesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ListChangesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const change_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](change_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](change_r2.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 3, change_r2.value));
  }
}
class ListChangesComponent {
  constructor(changeService, ref) {
    this.changeService = changeService;
    this.ref = ref;
    // context$: Observable<any>;
    this.title = 'List of Changes';
    this.listOfChanges = new Array();
  }
  ngOnInit() {
    this.listOfChanges = this.changeService.getListOfChanges();
    this.changeService.getChangeEvents().subscribe(value => {
      //      console.log("newVal", value);
      if (value.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.RESET) {
        this.listOfChanges = this.changeService.getListOfChanges();
      }
      //We have to force refresh when displayed in another tab
      this.ref.detectChanges();
    });
  }
  static #_ = this.ɵfac = function ListChangesComponent_Factory(t) {
    return new (t || ListChangesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_change_services_change_listen_service__WEBPACK_IMPORTED_MODULE_1__.ChangeListenService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ListChangesComponent,
    selectors: [["ide-ui-list-changes"]],
    inputs: {
      title: "title"
    },
    decls: 5,
    vars: 3,
    consts: [["styleClass", "p-datatable-gridlines", 3, "value", "resizableColumns"], ["pTemplate", "header"], ["pTemplate", "body"], ["pResizableColumn", ""]],
    template: function ListChangesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ListChangesComponent_ng_template_3_Template, 7, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ListChangesComponent_ng_template_4_Template, 8, 5, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.listOfChanges)("resizableColumns", true);
      }
    },
    dependencies: [primeng_table__WEBPACK_IMPORTED_MODULE_3__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_3__.ResizableColumn, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNoYW5nZXMuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2Rldi9saXN0LWNoYW5nZXMvbGlzdC1jaGFuZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 8442:
/*!*************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/editor-element.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorElement": () => (/* binding */ EditorElement),
/* harmony export */   "EditorElementType": () => (/* binding */ EditorElementType)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8253);

class EditorElement {
  constructor(id, schemaItem, position, schemaPosition, type) {
    /**
     * The list of possible values (for a select box)
     */
    this.values = null;
    this.childrenToDisplay = new Array();
    this.allChildren = new Map();
    this.forceRead = true;
    this.parent = null;
    /** An array of item carry the same schemamodel than the item itself, we use this to distinguish between the 2 modes
     *
     * @protected
     */
    this.asArray = false;
    this.id = id;
    this.schemaModel = schemaItem;
    this.position = position;
    this.schemaPosition = schemaPosition;
    /**
     * The id may not contains / as it is forbidden by html
     */
    if (this.id) this.id = this.id.split('/').join('-');
    this.type = type;
  }
  static createNew(position, schemaPosition, type, schemaItem, listValues, initialValue, asArray) {
    const ret = new EditorElement(position, schemaItem, position, schemaPosition, type);
    if (listValues) {
      ret.values = listValues;
    }
    if (initialValue) {
      // Dont call setEditedValue as it would try to recalculate children
      ret.editedValue = initialValue;
    }
    if (asArray) ret.asArray = asArray;
    return ret;
  }
  getParent() {
    return this.parent;
  }
  setParent(newParent) {
    this.parent = newParent;
  }
  isAsArray() {
    return this.asArray;
  }
  isHidden() {
    return _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager.isHidden(this.editedValue);
  }
  isReadonly() {
    return _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager.isReadonly(this.editedValue);
  }
  /**
   * Returns the item id of the DontCodeSchemaItem managed by this editor element if it's part of an array
   */
  getItemIdIfExists() {
    if (this.parent && this.parent.type === EditorElementType.array) {
      return this.position.substring(this.position.lastIndexOf('/') + 1);
    }
    return null;
  }
  getChildrenToDisplay() {
    if (this.forceRead) {
      this.childrenToDisplay.length = 0;
      /*      let added=false;
            if (this.type===EditorElementType.array) {
              if (this.editedValue) {
                for (const item in this.editedValue) {
                  if (this.editedValue.hasOwnProperty(item)) {
                    this.readSubSchema(this.position, this.schemaPosition, this.schemaModel, item, this.editedValue[item]);
                    added=true;
                  }
                }
              }
            }
            if(!added) {*/
      this.readSubSchema(this.position, this.schemaPosition, this.schemaModel, undefined, this.editedValue);
      if (this.schemaModel.isObject() || this.schemaModel.isArray())
        // Object's value are stored in the children hierarchy, so we remove it from parent
        this.editedValue = undefined;
      //      }
      this.forceRead = false;
    }
    return this.childrenToDisplay;
  }
  /**
   * Reads a DontCodeSchemaItem schema. Either is merges with current EditorElement
   * @param position
   * @param schemaPosition
   * @param model
   */
  readSubSchema(position, schemaPosition, model, mergeStartPosition, values) {
    const ret = this.childrenToDisplay;
    let mergePosition = mergeStartPosition ? mergeStartPosition : 0;
    const cache = this.allChildren;
    const parent = model;
    const children = new Array();
    let initialValue = values;
    if (this.asArray) {
      // Makes sure subItems are created from the initialValues sent, if any
      for (const itemKey in initialValue) {
        if (initialValue.hasOwnProperty(itemKey)) {
          children.push([itemKey, parent]);
        }
      }
      if (children.length === 0) {
        // No initial items, so create a new empty one
        children.push([this.getNextId(), parent]);
      }
    } else {
      // Make sure all subproperties are considered
      for (const childModel of parent.getChildren()) {
        const propKey = childModel[0];
        children.push([propKey, childModel[1]]);
      }
    }
    // resolve schemareference of all children
    children.forEach(value => {
      if (value[1] instanceof _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeSchemaRef) {
        if (!value[1].isArray() || parent === value[1])
          // Only resolve ref if we are not creating the array element
          value[1] = this.resolveRefs(value[1]);
      }
    });
    for (const [propName, child] of children) {
      let childPosition = position;
      let schemaChildPosition = schemaPosition;
      initialValue = values;
      // Are we reading a subProperty ?
      if (propName && propName.length > 0) {
        childPosition = childPosition + '/' + propName;
        if (!this.asArray) schemaChildPosition = schemaChildPosition + '/' + propName;
        if (initialValue) initialValue = initialValue[propName];
      }
      let newElement = cache.get(propName);
      if (!newElement) {
        if (child.isArray() && child !== parent) {
          // A model can be an array and an object or value at the same time.
          newElement = EditorElement.createNew(childPosition, schemaChildPosition, EditorElementType.array, child, undefined, initialValue, true);
        } else if (child.isValue()) {
          newElement = EditorElement.createNew(childPosition, schemaChildPosition, EditorElementType.input, child, undefined, initialValue);
        } else if (child.isEnum()) {
          const asEnum = child;
          newElement = EditorElement.createNew(childPosition, schemaChildPosition, EditorElementType.list, child, asEnum.getValues(), initialValue);
        } else if (child.isObject()) {
          newElement = EditorElement.createNew(childPosition, schemaChildPosition, EditorElementType.object, child, undefined, initialValue, false);
        } /*else if (child.isReference()) {
          this.readSubSchema(childPosition, schemaChildPosition, child, true, mergePosition, initialValue);
          }*/else {
          console.error('Unknown item read from schema at position ' + position + ':', child);
        }
      } else if (initialValue !== undefined) {
        newElement.setEditedValue(initialValue);
      }
      if (newElement) {
        newElement.parent = this;
        mergePosition = this.mergeElement(newElement, child, propName, mergePosition);
        if (newElement.hasActiveProperties()) {
          const toAddProps = newElement.getActiveProperties();
          if (toAddProps) {
            // We have to add a dynamic property, so let's create it with a possible value
            let propValue = toAddProps.getRelativeId();
            if (values != null && propValue != null) {
              propValue = values[propValue];
            } else propValue = undefined;
            this.readSubSchema(position, schemaPosition, toAddProps, mergePosition, values);
            // if the active properties are replacing the remaining elements, then remove the remaining elements and  just stop the loop here
            if (newElement.isReplacementActive()) {
              break;
            }
          }
        }
      }
    }
    return ret;
  }
  resolveRefs(entity) {
    let ret = entity;
    if (entity.isReference()) {
      const toFind = entity.getReference();
      const found = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.AbstractSchemaItem.goto(this.calculateRootSchema(), toFind);
      if (found) ret = found;
    }
    return ret;
  }
  calculateRootSchema() {
    let ret = this.schemaModel;
    while (ret.getParent()) {
      const parent = ret.getParent();
      if (parent) ret = parent;
    }
    return ret;
  }
  getNextId() {
    const childrenKeys = new Set(this.allChildren.keys());
    return _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager.generateNextKey(childrenKeys);
  }
  /**
   * Creates a new sub element of an array. Usually called when the user clicks Add
   * @param element
   */
  addSubElement() {
    /**
     * Creates the new element and adds it to the list
     */
    this.readSubSchema(this.position, this.schemaPosition, this.schemaModel);
  }
  removeElement(item, index) {
    const parentList = this.getChildrenToDisplay();
    if (!index) {
      index = parentList.indexOf(item);
    }
    const ret = parentList.splice(index, 1)[0];
    return ret;
  }
  /**
   * Moves the item up one place and returns the immediate following item.
   * or returns null if nothing have been moved
   * @param item
   * @param index
   */
  upElement(item, index) {
    const parentList = this.getChildrenToDisplay();
    if (!index) {
      index = parentList.indexOf(item);
    }
    if (index > 0) {
      parentList.splice(index, 1);
      parentList.splice(index - 1, 0, item);
    } else {
      return null;
    }
    return parentList[index];
  }
  /**
   * Moves the item down and returns the next item if possible.
   * Returns null if the item was already the last element (no move possible)
   * or undefined if the moved item becomes the last element
   * @param item
   * @param index
   */
  downElement(item, index) {
    const parentList = this.getChildrenToDisplay();
    if (!index) {
      index = parentList.indexOf(item);
    }
    if (index < parentList.length - 1) {
      parentList.splice(index, 1);
      parentList.splice(index + 1, 0, item);
    } else {
      return null;
    }
    if (index + 1 === parentList.length - 1) {
      // Item becomes the last element, so no-one is after him
      return undefined;
    } else return parentList[index + 2];
  }
  getEditedValue() {
    return this.editedValue;
  }
  setEditedValue(newVal) {
    const oldValue = this.editedValue;
    this.editedValue = newVal;
    const props = this.schemaModel.getProperties(this.editedValue);
    if (props || oldValue && this.schemaModel.getProperties(oldValue)) {
      // The children properties have changed
      //this.parent.mergeDisplayChildren(this, props);
      if (this.parent) this.parent.forceRead = true;
      return true;
    } else if (this.schemaModel.isArray() || this.schemaModel.isObject()) {
      // Remove all array items that are no more in values
      for (const oldProp of this.allChildren.keys()) {
        if (!this.editedValue || this.editedValue[oldProp] === undefined) {
          this.allChildren.delete(oldProp);
        }
      }
      this.forceRead = true;
    }
    return false;
  }
  hasActiveProperties() {
    const props = this.schemaModel.getProperties(this.editedValue);
    if (props) return true;else return false;
  }
  getActiveProperties() {
    return this.schemaModel.getProperties(this.editedValue);
  }
  isReplacementActive() {
    const props = this.schemaModel.getProperties(this.editedValue);
    if (props && props.isReplace()) return true;else return false;
  }
  mergeElement(newElement, after, propName, mergeStartPosition) {
    const list = this.childrenToDisplay;
    const cache = this.allChildren;
    const key = propName ?? newElement.schemaModel.getRelativeId();
    // If the element was already present, do nothing
    if (cache.get(key) === newElement) {
      // Returns its position
      for (let i = 0; i < list.length; i++) {
        if (list[i] === newElement) return i;
      }
    } else if (cache.get(key) != null) {
      console.error('Setting 2 differents elements with the same property name: ' + key + ' for the element ' + this.position);
      throw new Error('Setting 2 differents elements with the same property name: ' + key + ' for the element ' + this.position);
    }
    cache.set(key, newElement);
    if (mergeStartPosition >= list.length) {
      list.push(newElement);
      return ++mergeStartPosition;
    }
    let foundAt = -1;
    let alreadyThere = false;
    for (let i = mergeStartPosition; i < list.length; i++) {
      if (list[i].schemaModel === after) {
        foundAt = i;
      } else {
        if (foundAt !== -1) {
          // We found the insertion point, should we delete older elements or is the element already present in the list ?
          if (list[i] === newElement) {
            // It was already in the list !
            alreadyThere = true;
          }
          break;
        }
      }
    }
    if (foundAt !== -1) mergeStartPosition = foundAt + 1;
    if (!alreadyThere) list.splice(mergeStartPosition, 0, newElement);
    return mergeStartPosition;
  }
  getChild(propName) {
    if (this.forceRead) this.getChildrenToDisplay();
    return this.allChildren.get(propName);
  }
  /**
   * Retrieve the child in the hierarchy at the specified subposition.
   * For example getChildInHierarchy ('sub/item/name') will return the name of the item who is child of sub child of the element
   * getChildInHierarchy ('sub/table/ab/type') will return the type of the element ab of the array named table of sub child
   * @param beforeAName
   */
  getChildInHierarchy(beforeAName) {
    const propNames = beforeAName.split('/');
    let current = this;
    //let nextIsArray= false;
    //let arrayProp:string=null;
    for (const propName of propNames) {
      if (propName !== "") {
        /*if( nextIsArray) {
          current = this.getChildrenToDisplay().find(value => {
            if (value.position.endsWith(arrayProp+'/'+propName))
              return true;
          });
          arrayProp=null;
          nextIsArray=false;
        } else if( this.schemaModel.getChild(propName)?.isArray()) {
          nextIsArray=true;
          arrayProp = propName;
        } else {*/
        current = current.getChild(propName);
        //     }
        if (!current) {
          return null;
        }
      }
    }
    return current;
  }
}
var EditorElementType;
(function (EditorElementType) {
  EditorElementType["array"] = "array";
  EditorElementType["object"] = "object";
  EditorElementType["newLine"] = "newLine";
  EditorElementType["input"] = "input";
  EditorElementType["list"] = "list";
  EditorElementType["label"] = "label";
})(EditorElementType || (EditorElementType = {}));
var ArrayAction;
(function (ArrayAction) {
  ArrayAction[ArrayAction["DEFAULT"] = 0] = "DEFAULT";
  ArrayAction[ArrayAction["NEW_ITEM"] = 1] = "NEW_ITEM";
  ArrayAction[ArrayAction["ONLY_ITEM"] = 2] = "ONLY_ITEM";
})(ArrayAction || (ArrayAction = {}));

/***/ }),

/***/ 3442:
/*!************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/editor.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorModule": () => (/* binding */ EditorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-editor/main-editor.component */ 2768);
/* harmony import */ var _text_handler_text_handler_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-handler/text-handler.component */ 6323);
/* harmony import */ var _text_element_text_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-element/text-element.component */ 6634);
/* harmony import */ var _select_element_select_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-element/select-element.component */ 9527);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 2046);
/* harmony import */ var _input_element_input_element_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-element/input-element.component */ 9055);
/* harmony import */ var _sub_text_element_sub_text_element_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub-text-element/sub-text-element.component */ 9516);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/accordion */ 9854);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/autocomplete */ 5630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/locale.pipe */ 3106);
/* harmony import */ var _shared_pipes_locale_desc_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/locale-desc.pipe */ 4563);





















class EditorModule {
  static #_ = this.ɵfac = function EditorModule_Factory(t) {
    return new (t || EditorModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: EditorModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__.AutoCompleteModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EditorModule, {
    declarations: [_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_0__.MainEditorComponent, _text_handler_text_handler_component__WEBPACK_IMPORTED_MODULE_1__.TextHandlerComponent, _text_element_text_element_component__WEBPACK_IMPORTED_MODULE_2__.TextElementComponent, _select_element_select_element_component__WEBPACK_IMPORTED_MODULE_3__.SelectElementComponent, _input_element_input_element_component__WEBPACK_IMPORTED_MODULE_5__.InputElementComponent, _sub_text_element_sub_text_element_component__WEBPACK_IMPORTED_MODULE_6__.SubTextElementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__.AutoCompleteModule],
    exports: [_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_0__.MainEditorComponent]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetComponentScope"](_sub_text_element_sub_text_element_component__WEBPACK_IMPORTED_MODULE_6__.SubTextElementComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_accordion__WEBPACK_IMPORTED_MODULE_11__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionTab, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, _text_handler_text_handler_component__WEBPACK_IMPORTED_MODULE_1__.TextHandlerComponent], [_shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_7__.LocalePipe, _shared_pipes_locale_desc_pipe__WEBPACK_IMPORTED_MODULE_8__.LocaleDescPipe]);

/***/ }),

/***/ 9055:
/*!************************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/input-element/input-element.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputElementComponent": () => (/* binding */ InputElementComponent)
/* harmony export */ });
/* harmony import */ var _editor_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor-element */ 8442);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/change/services/change-update.service */ 1790);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/locale.pipe */ 3106);










class InputElementComponent {
  constructor(changeService) {
    this.changeService = changeService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({
      value: '',
      disabled: false
    }, {
      updateOn: 'blur'
    });
  }
  ngOnInit() {
    this.updateView();
    this.subscriptions.add(this.control.valueChanges.subscribe({
      next: value => this.onChange(value)
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  updateView() {
    if (this.element?.getEditedValue() == null) {
      this.control.setValue('', {
        emitModelToViewChange: true,
        emitEvent: false
      });
    } else {
      this.control.setValue(this.element.getEditedValue(), {
        emitModelToViewChange: true,
        emitEvent: false
      });
    }
    /*if ((this.element!=null) && (this.element.isReadonly()==true))
        this.control.disable({emitEvent:false});
      else
        this.control.enable({emitEvent:false});
      */
  }

  onChange(newValue) {
    if (this.element != null) {
      this.element.setEditedValue(newValue);
      this.changeService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.UPDATE, this.element.position, newValue));
    }
  }
  static #_ = this.ɵfac = function InputElementComponent_Factory(t) {
    return new (t || InputElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__.ChangeUpdateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: InputElementComponent,
    selectors: [["ide-ui-input-element"]],
    inputs: {
      element: "element"
    },
    decls: 4,
    vars: 6,
    consts: [[1, "displayable"], ["pInputText", "", 3, "id", "name", "formControl"]],
    template: function InputElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, ctx.element.schemaPosition));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx.element.id)("name", ctx.element.id)("formControl", ctx.control);
      }
    },
    dependencies: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_3__.LocalePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1lbGVtZW50LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci9pbnB1dC1lbGVtZW50L2lucHV0LWVsZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2768:
/*!********************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/main-editor/main-editor.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainEditorComponent": () => (/* binding */ MainEditorComponent)
/* harmony export */ });
/* harmony import */ var _shared_change_services_change_listen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/change/services/change-listen.service */ 7539);
/* harmony import */ var _shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/text/services/text.service */ 7250);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _text_handler_text_handler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text-handler/text-handler.component */ 6323);










function MainEditorComponent_ide_ui_text_handler_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ide-ui-text-handler", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("element", ctx_r0.rootElement);
  }
}
class MainEditorComponent {
  constructor(ref, changeListener, textService) {
    // Make sure the dev change listener is already started and listening
    this.ref = ref;
    this.changeListener = changeListener;
    this.textService = textService;
    this.rootElement = null;
    this.unsubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
  }
  ngOnInit() {
    try {
      this.rootElement = this.textService.getRootElement();
      console.debug('Got initial rootElement', this.rootElement.getChild('name')?.getEditedValue());
    } catch (err) {
      console.error('Error getting initial root element.', err);
    }
    this.unsubscriber.add(this.changeListener.getChangeEvents().subscribe(change => {
      //console.debug('Change receive for rootElement', this.rootElement?.getChild('name')?.getEditedValue());
      if (change.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.RESET) {
        if (change.position === _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.DontCodeModel.ROOT || change.position === "") {
          try {
            this.rootElement = this.textService.getRootElement();
            this.rootElement.setEditedValue(change.value?.creation);
            console.debug('Reset received, new root element', this.rootElement.getChild('name')?.getEditedValue());
            this.ref.markForCheck();
            this.ref.detectChanges();
          } catch (err) {
            console.error('Error getting the edited root element.', err);
          }
        }
      }
    }));
  }
  ngOnDestroy() {
    console.debug('Closing with rootElement', this.rootElement?.getChild('name')?.getEditedValue());
    // unsubscribe to all observables
    this.unsubscriber.unsubscribe();
  }
  static #_ = this.ɵfac = function MainEditorComponent_Factory(t) {
    return new (t || MainEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_change_services_change_listen_service__WEBPACK_IMPORTED_MODULE_0__.ChangeListenService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_1__.TextService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MainEditorComponent,
    selectors: [["ide-ui-main-editor"]],
    decls: 1,
    vars: 1,
    consts: [[3, "element", 4, "ngIf"], [3, "element"]],
    template: function MainEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MainEditorComponent_ide_ui_text_handler_0_Template, 1, 1, "ide-ui-text-handler", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.rootElement);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _text_handler_text_handler_component__WEBPACK_IMPORTED_MODULE_3__.TextHandlerComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWVkaXRvci5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci9tYWluLWVkaXRvci9tYWluLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 9527:
/*!**************************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/select-element/select-element.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectElementComponent": () => (/* binding */ SelectElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _editor_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor-element */ 8442);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/change/services/change-update.service */ 1790);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/autocomplete */ 5630);
/* harmony import */ var _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/locale.pipe */ 3106);










function SelectElementComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](group_r2.label);
  }
}
function SelectElementComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "locale");
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, option_r3), " ");
  }
}
class SelectElementComponent {
  constructor(changeService) {
    this.changeService = changeService;
    this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.filteredElements = new Array();
  }
  ngOnInit() {}
  calculateOptionValue(option) {
    return option;
  }
  editedValue() {
    if (this.element.getEditedValue()) return this.element.getEditedValue();else return '';
  }
  onChange(change) {
    //console.log('Selection change', change);
    let value = change;
    if (typeof change !== 'string') {
      value = change.target.value;
    }
    const changed = this.element.setEditedValue(value);
    this.changeService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.UPDATE, this.element.position, value));
    if (changed) {
      this.refresh.emit('refresh');
    }
  }
  filterGroupedElements(event) {
    const filteredGroups = [];
    const defaultGroup = {
      label: 'Standard',
      items: null
    };
    // If there is only one selection left, then selects it
    let selectItem = null;
    let selectedCount = 0;
    event.query = event.query?.toLowerCase();
    for (const optgroup of this.element.values) {
      if (!optgroup.getChildren() || optgroup.getChildren().length === 0) {
        if (optgroup.getLabel().toLowerCase().indexOf(event.query) >= 0) {
          if (defaultGroup.items === null) {
            defaultGroup.items = new Array();
            filteredGroups.push(defaultGroup);
          }
          defaultGroup.items.push(optgroup.getLabel());
          if (event.query?.length === optgroup.getLabel().length) {
            selectedCount++;
            selectItem = optgroup;
          }
        }
      } else {
        const items = optgroup.getChildren().filter(value => value.getLabel().toLowerCase().indexOf(event.query) >= 0);
        if (items.length > 0) {
          selectedCount += items.length;
          selectItem = items[0];
          filteredGroups.push({
            label: optgroup.getLabel(),
            value: optgroup.getValue(),
            items: items.map(value => value.getLabel())
          });
        }
      }
    }
    this.filteredElements = filteredGroups;
    if (selectedCount === 1 && selectItem) {
      if (selectItem.getLabel().length === event.query?.length) {
        this.onChange({
          target: {
            value: selectItem.getLabel()
          }
        });
      }
    }
  }
  static #_ = this.ɵfac = function SelectElementComponent_Factory(t) {
    return new (t || SelectElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__.ChangeUpdateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SelectElementComponent,
    selectors: [["ide-ui-select-element"]],
    inputs: {
      element: "element"
    },
    outputs: {
      refresh: "refresh"
    },
    decls: 6,
    vars: 9,
    consts: [[1, "displayable"], [1, "displayable", 3, "ngModel", "group", "id", "suggestions", "dropdown", "readonly", "completeMethod", "onSelect"], ["pTemplate", "group"], ["pTemplate", "item"], [1, "p-d-flex", "p-ai-center"]],
    template: function SelectElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-autoComplete", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("completeMethod", function SelectElementComponent_Template_p_autoComplete_completeMethod_3_listener($event) {
          return ctx.filterGroupedElements($event);
        })("onSelect", function SelectElementComponent_Template_p_autoComplete_onSelect_3_listener($event) {
          return ctx.onChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SelectElementComponent_ng_template_4_Template, 3, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SelectElementComponent_ng_template_5_Template, 2, 3, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 7, ctx.element.schemaPosition));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.editedValue())("group", true)("id", ctx.element.id)("suggestions", ctx.filteredElements)("dropdown", true)("readonly", ctx.element.isReadonly());
      }
    },
    dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__.AutoComplete, _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_3__.LocalePipe],
    styles: ["p-dropdown[_ngcontent-%COMP%]   p-component[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1lbGVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic2VsZWN0LWVsZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAtZHJvcGRvd24gcC1jb21wb25lbnQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci9zZWxlY3QtZWxlbWVudC9zZWxlY3QtZWxlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLHdWQUF3ViIsInNvdXJjZXNDb250ZW50IjpbInAtZHJvcGRvd24gcC1jb21wb25lbnQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9516:
/*!******************************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/sub-text-element/sub-text-element.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubTextElementComponent": () => (/* binding */ SubTextElementComponent)
/* harmony export */ });
/* harmony import */ var _editor_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor-element */ 8442);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/change/services/change-update.service */ 1790);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






function SubTextElementComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "localeDesc");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r0.element.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r0.element.schemaPosition));
  }
}
function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      const item_r4 = ctx_r10.$implicit;
      const i_r5 = ctx_r10.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.upElement(item_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", item_r4.id + "-up-button");
  }
}
function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      const item_r4 = ctx_r14.$implicit;
      const i_r5 = ctx_r14.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.downElement(item_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", item_r4.id + "-down-button");
  }
}
function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ide-ui-text-handler", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.addElement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const item_r4 = ctx_r20.$implicit;
      const i_r5 = ctx_r20.index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.removeElement(item_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_5_Template, 1, 1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_6_Template, 1, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const item_r4 = ctx_r21.$implicit;
    const i_r5 = ctx_r21.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("element", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", item_r4.id + "-add-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", item_r4.id + "-remove-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r5 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r5 < ctx_r6.items.length - 1);
  }
}
function SubTextElementComponent_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_Template, 8, 5, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r4.isHidden());
  }
}
function SubTextElementComponent_ng_template_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubTextElementComponent_ng_template_6_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.addElement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r3.element.id + "-new-button");
  }
}
function SubTextElementComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubTextElementComponent_ng_template_6_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubTextElementComponent_ng_template_6_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.items.length == 0);
  }
}
class SubTextElementComponent {
  constructor(changeService) {
    this.changeService = changeService;
    this.items = new Array();
  }
  ngOnInit() {}
  addElement() {
    this.element.addSubElement();
  }
  removeElement(item, index) {
    const removed = this.element.removeElement(item, index);
    this.changeService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.DELETE, removed.position, null));
  }
  /**
   * Moves the item up one place and returns the immediately following item, if there is one.
   * or returns null if nothing have been moved
   * @param item
   * @param index
   */
  upElement(item, index) {
    const oldPos = item.position; // The old position is the same as the new one in this case (only the beforeId changes)
    const nextElement = this.element.upElement(item, index);
    if (nextElement !== null) {
      const nextKey = nextElement.getItemIdIfExists();
      this.changeService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.MOVE, item.position, item.getEditedValue(), undefined, nextKey ? nextKey : undefined, oldPos));
    }
  }
  downElement(item, index) {
    const oldPos = item.position; // The old position is the same as the new one in this case (only the beforeId changes)
    const nextElement = this.element.downElement(item, index);
    if (nextElement !== null) {
      let nextKey;
      if (nextElement === undefined) {
        // It is the last element
        nextKey = undefined;
      } else {
        nextKey = nextElement.getItemIdIfExists();
      }
      this.changeService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.MOVE, item.position, item.getEditedValue(), undefined, nextKey ? nextKey : undefined, oldPos));
    }
  }
  ngOnChanges(changes) {
    this.items = this.element.getChildrenToDisplay();
  }
  static #_ = this.ɵfac = function SubTextElementComponent_Factory(t) {
    return new (t || SubTextElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__.ChangeUpdateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SubTextElementComponent,
    selectors: [["ide-ui-sub-text-element"]],
    inputs: {
      element: "element"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    decls: 7,
    vars: 4,
    consts: [[1, "displayable"], [3, "selected"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "displayable", 3, "id"], [2, "padding-left", "10px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "element"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "aria-label", "Add item", 1, "p-button-secondary", "p-button-rounded", "p-button-outlined", 3, "id", "click"], ["pButton", "", "type", "button", "icon", "pi pi-minus", "aria-label", "Remove item", 1, "p-button-danger", "p-button-rounded", "p-button-outlined", 3, "id", "click"], ["pButton", "", "type", "button", "class", "p-button-secondary p-button-rounded p-button-outlined", "icon", "pi pi-caret-up", "aria-label", "Up", 3, "id", "click", 4, "ngIf"], ["pButton", "", "type", "button", "class", "p-button-secondary p-button-rounded p-button-outlined", "icon", "pi pi-caret-down", "aria-label", "Down", 3, "id", "click", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-caret-up", "aria-label", "Up", 1, "p-button-secondary", "p-button-rounded", "p-button-outlined", 3, "id", "click"], ["pButton", "", "type", "button", "icon", "pi pi-caret-down", "aria-label", "Down", 1, "p-button-secondary", "p-button-rounded", "p-button-outlined", 3, "id", "click"]],
    template: function SubTextElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-accordion")(4, "p-accordionTab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SubTextElementComponent_ng_template_5_Template, 3, 4, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SubTextElementComponent_ng_template_6_Template, 3, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.element.schemaPosition));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", true);
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItdGV4dC1lbGVtZW50LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci9zdWItdGV4dC1lbGVtZW50L3N1Yi10ZXh0LWVsZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6634:
/*!**********************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/text-element/text-element.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextElementComponent": () => (/* binding */ TextElementComponent)
/* harmony export */ });
/* harmony import */ var _editor_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor-element */ 8442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/locale.pipe */ 3106);



class TextElementComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function TextElementComponent_Factory(t) {
    return new (t || TextElementComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TextElementComponent,
    selectors: [["ide-ui-text-element"]],
    inputs: {
      element: "element"
    },
    decls: 3,
    vars: 4,
    consts: [[1, "displayable", 3, "id"]],
    template: function TextElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.element.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx.element.schemaPosition));
      }
    },
    dependencies: [_shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_1__.LocalePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWVsZW1lbnQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci90ZXh0LWVsZW1lbnQvdGV4dC1lbGVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6323:
/*!**********************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/text-handler/text-handler.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextHandlerComponent": () => (/* binding */ TextHandlerComponent)
/* harmony export */ });
/* harmony import */ var _editor_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor-element */ 8442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _text_element_text_element_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text-element/text-element.component */ 6634);
/* harmony import */ var _select_element_select_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-element/select-element.component */ 9527);
/* harmony import */ var _input_element_input_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-element/input-element.component */ 9055);
/* harmony import */ var _sub_text_element_sub_text_element_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sub-text-element/sub-text-element.component */ 9516);
/* harmony import */ var _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/locale.pipe */ 3106);









function TextHandlerComponent_ng_container_1_ng_container_1_br_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "br");
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_text_element_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ide-ui-text-element", 6);
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("element", element_r1);
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div")(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "locale");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "ide-ui-text-handler", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, element_r1.schemaPosition));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("element", element_r1);
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_sub_text_element_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ide-ui-sub-text-element", 6);
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("element", element_r1);
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_select_element_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ide-ui-select-element", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("refresh", function TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_select_element_6_Template_ide_ui_select_element_refresh_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("element", element_r1);
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_input_element_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ide-ui-input-element", 6);
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("element", element_r1);
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0)(1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TextHandlerComponent_ng_container_1_ng_container_1_br_2_Template, 1, 0, "br", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_text_element_3_Template, 1, 1, "ide-ui-text-element", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TextHandlerComponent_ng_container_1_ng_container_1_ng_container_4_Template, 7, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_sub_text_element_5_Template, 1, 1, "ide-ui-sub-text-element", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_select_element_6_Template, 1, 1, "ide-ui-select-element", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_input_element_7_Template, 1, 1, "ide-ui-input-element", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", element_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "newLine");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "object");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "array");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "input");
  }
}
function TextHandlerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TextHandlerComponent_ng_container_1_ng_container_1_Template, 8, 7, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !element_r1.isHidden());
  }
}
class TextHandlerComponent {
  constructor(ref) {
    this.ref = ref;
    this.listOfElements = [];
  }
  ngOnInit() {
    this.listOfElements = this.element.getChildrenToDisplay();
  }
  ngOnChanges(changes) {
    //    console.log("text Changed");
    this.listOfElements = this.element.getChildrenToDisplay();
  }
  refresh() {
    this.listOfElements = this.element.getChildrenToDisplay();
    this.ref.detectChanges();
  }
  static #_ = this.ɵfac = function TextHandlerComponent_Factory(t) {
    return new (t || TextHandlerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: TextHandlerComponent,
    selectors: [["ide-ui-text-handler"]],
    inputs: {
      element: "element"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "element", 4, "ngSwitchCase"], [3, "element", "refresh", 4, "ngSwitchCase"], [3, "element"], [1, "displayable"], [3, "element", "refresh"]],
    template: function TextHandlerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TextHandlerComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listOfElements);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, TextHandlerComponent, _text_element_text_element_component__WEBPACK_IMPORTED_MODULE_1__.TextElementComponent, _select_element_select_element_component__WEBPACK_IMPORTED_MODULE_2__.SelectElementComponent, _input_element_input_element_component__WEBPACK_IMPORTED_MODULE_3__.InputElementComponent, _sub_text_element_sub_text_element_component__WEBPACK_IMPORTED_MODULE_4__.SubTextElementComponent, _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_5__.LocalePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWhhbmRsZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci90ZXh0LWhhbmRsZXIvdGV4dC1oYW5kbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2379:
/*!**********************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/welcome/main/welcome.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/badge */ 2381);




class WelcomeComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function WelcomeComponent_Factory(t) {
    return new (t || WelcomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WelcomeComponent,
    selectors: [["ide-ui-welcome"]],
    decls: 69,
    vars: 0,
    consts: [[1, "grid", "align-items-stretch"], [1, "welcome-question", "col-12"], [1, "col-12", "md:col-6"], ["header", "Show me a demo", "subheader", "The fastest way to see the Dont-code platform in action is to load an existing project."], [1, "welcome-item"], ["value", "1"], ["pButton", "", "type", "button", "icon", "pi pi-external-link", 1, "p-button-rounded", "p-button-outlined"], ["value", "2"], [1, "pi", "pi-home", 2, "font-size", "1.1rem"], ["value", "3"], ["icon", "pi pi-play", "label", "Play"], ["value", "4"], [1, "pi", "pi-pencil", 2, "font-size", "1.1rem"], ["value", "5"], ["src", "assets/images/preview-ui-tab.png"], ["header", "Start from scratch", "subheader", "Gets more insights by working from a blank project"], [1, "pi", "pi-download", 2, "font-size", "1.1rem"], ["value", "6"], ["icon", "pi pi-save", "label", "Save"]],
    template: function WelcomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to Dont-code !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You are running the Builder application of the Dont-code platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Use this tool to create new applications or load and edit their behaviors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0)(7, "div", 1)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2)(11, "p-card", 3)(12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p-badge", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Open the Previewer by clicking on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " on the top bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p-badge", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Then select the menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A0Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " on the side bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p-badge", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Load the Task Manager project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "p-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Edit some elements in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A0Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "p-badge", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " And watch the Previewer acting accordingly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2)(37, "p-card", 15)(38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "p-badge", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Open the Previewer by clicking on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " on the top bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p-badge", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Then Create a new application by clicking on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A0New Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "p-badge", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Edit some elements in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u00A0Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "p-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " And watch the Previewer acting accordingly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "p-badge", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " You can save your work by selecting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " on the side bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "p-badge", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " And select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "p-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_1__.Button, primeng_card__WEBPACK_IMPORTED_MODULE_2__.Card, primeng_badge__WEBPACK_IMPORTED_MODULE_3__.Badge],
    styles: ["p-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n}\n\n.welcome-question[_ngcontent-%COMP%]  {\n  text-align: center;\n}\n\n.welcome-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.welcome-item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlbGNvbWUtcXVlc3Rpb24gIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2VsY29tZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ud2VsY29tZS1pdGVtID4gKiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL3dlbGNvbWUvbWFpbi93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQSw0ekJBQTR6QiIsInNvdXJjZXNDb250ZW50IjpbInAtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlbGNvbWUtcXVlc3Rpb24gIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2VsY29tZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ud2VsY29tZS1pdGVtID4gKiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5133:
/*!**************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/welcome/welcome.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeModule": () => (/* binding */ WelcomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _main_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/welcome.component */ 2379);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ 4357);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/badge */ 2381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






class WelcomeModule {
  static #_ = this.ɵfac = function WelcomeModule_Factory(t) {
    return new (t || WelcomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: WelcomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule, primeng_badge__WEBPACK_IMPORTED_MODULE_5__.BadgeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WelcomeModule, {
    declarations: [_main_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule, primeng_badge__WEBPACK_IMPORTED_MODULE_5__.BadgeModule]
  });
})();

/***/ }),

/***/ 5570:
/*!************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/change/change.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeModule": () => (/* binding */ ChangeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ChangeModule {
  static #_ = this.ɵfac = function ChangeModule_Factory(t) {
    return new (t || ChangeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ChangeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangeModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ }),

/***/ 7539:
/*!*****************************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/change/services/change-listen.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeListenService": () => (/* binding */ ChangeListenService)
/* harmony export */ });
/* harmony import */ var _change_update_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-update.service */ 1790);
/* harmony import */ var broadcast_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! broadcast-channel */ 1425);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






/**
 * List to all the changes on the edited elements from the BroadCastChannel and updates
 * a list of changes from it.
 */
class ChangeListenService {
  constructor(changeMgr) {
    this.changeMgr = changeMgr;
    this.listOfChanges = [];
    this.changeEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.channel = new broadcast_channel__WEBPACK_IMPORTED_MODULE_1__.BroadcastChannel(_change_update_service__WEBPACK_IMPORTED_MODULE_0__.ChangeUpdateService.CHANNEL_CHANGE_NAME);
    console.log('Channel receiver created');
    this.channel.onmessage = msg => {
      if (msg.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.RESET) {
        this.listOfChanges.length = 0;
      } else {
        this.listOfChanges.push(msg);
      }
      this.changeEmitter.next(msg);
      if (msg.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.RESET) this.resetEmitter();
    };
    this.changeEmitter.subscribe({
      next: change => {
        this.changeMgr.pushChange(change);
      }
    });
  }
  resetEmitter() {
    /*    const newReplay = new ReplaySubject<Change>();
        newReplay.observers=this.changeEmitter.observers;
        this.changeEmitter=newReplay;*/
  }
  getListOfChanges() {
    return this.listOfChanges;
  }
  getChangeEvents() {
    return this.changeEmitter;
  }
  static #_ = this.ɵfac = function ChangeListenService_Factory(t) {
    return new (t || ChangeListenService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.DontCodeChangeManager));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ChangeListenService,
    factory: ChangeListenService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1790:
/*!*****************************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/change/services/change-update.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeUpdateService": () => (/* binding */ ChangeUpdateService)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var broadcast_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! broadcast-channel */ 1425);
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/webSocket */ 2227);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dontcode/plugin-common */ 9815);







/**
 * Updates all changes to the edited elements (what the user entered in the IDE)
 * to a broadcastchannel (for dev tab) and the websocket to the services.
 */
class ChangeUpdateService {
  static #_ = this.CHANNEL_CHANGE_NAME = 'ide-ui-changes';
  constructor(configService) {
    this.configService = configService;
    this.listOfChanges = [];
    this.ideServicesWebSocket = null;
    this.connectionStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
    /**
     * The Id of the session as returned by the services. This is used to tell the previewer to listen only to this session
     * @protected
     */
    this.sessionIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
    this.currentSocketUrl = null;
    console.debug('Creating channel');
    this.channel = new broadcast_channel__WEBPACK_IMPORTED_MODULE_1__.BroadcastChannel(ChangeUpdateService.CHANNEL_CHANGE_NAME);
    this.configService.getUpdates().subscribe(newConfig => {
      const socketChanged = newConfig.ideWebSocketUrl != this.currentSocketUrl;
      if (socketChanged) {
        this.currentSocketUrl = newConfig.ideWebSocketUrl ?? null;
        // Close the current socket, it will be opened when needed
        if (this.ideServicesWebSocket) {
          if (!this.ideServicesWebSocket.closed) {
            this.ideServicesWebSocket?.complete();
          }
        }
        if (this.currentSocketUrl != null) this.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.RESET, _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT, null));
      }
    });
    this.connectionStatus.next("closed");
    this.sessionIdSubject.next(undefined);
  }
  openWebSocket() {
    // Check if there is one already opened
    if (this.ideServicesWebSocket) {
      if (!this.ideServicesWebSocket.closed) {
        return Promise.resolve(this.ideServicesWebSocket);
      }
    }
    // If not, then check if we can open one
    const socketUrl = this.currentSocketUrl;
    if (socketUrl == null) {
      return Promise.reject("No Websocket Url to connect to");
    } else {
      const ret = new Promise((resolve, reject) => {
        const config = {
          url: socketUrl,
          closeObserver: {
            next: value => {
              console.debug("Close", value);
            }
          },
          openObserver: {
            next: value => {
              if (this.ideServicesWebSocket) resolve(this.ideServicesWebSocket);else reject('No WebSocket');
            },
            error: err => {
              console.error("error connecting socket", err);
              reject(err);
            }
          }
        };
        this.ideServicesWebSocket = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__.webSocket)(config);
        this.connectionStatus.next("connected");
        this.sessionIdSubject.next(undefined);
        this.ideServicesWebSocket.asObservable().subscribe({
          next: msg => {
            //console.log('message received: ' , msg);
            const newId = msg?.sessionId;
            if (newId && newId !== this.sessionId) {
              console.debug('Received SessionId ', newId);
              this.sessionId = newId;
              this.sessionIdSubject.next(newId);
            }
          },
          // Called whenever there is a message from the server
          error: err => {
            console.error(err);
            this.ideServicesWebSocket?.unsubscribe();
            this.ideServicesWebSocket = null;
            this.connectionStatus.next("ERROR:" + err);
            this.sessionIdSubject.next(undefined);
          },
          // Called if WebSocket API signals some kind of error
          complete: () => {
            console.debug('complete');
            this.ideServicesWebSocket?.unsubscribe();
            this.ideServicesWebSocket = null;
            this.connectionStatus.next("closed");
            this.sessionIdSubject.next(undefined);
          }
          // Called when connection is closed (for whatever reason)
        });
      });

      return ret;
    }
  }
  pushChange(newChange) {
    //console.log('Change pushed');
    if (newChange.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.RESET) {
      this.listOfChanges.length = 0;
    } else {
      this.listOfChanges.push(newChange);
    }
    return Promise.all([this.channel.postMessage(newChange), this.updateSocket(new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.Message(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.CHANGE, this.sessionId, newChange))]).then();
  }
  updateSocket(newChange) {
    return this.openWebSocket().then(socket => socket.next(newChange));
  }
  getListOfChanges() {
    return this.listOfChanges;
  }
  getConnectionStatus() {
    return this.connectionStatus;
  }
  getSessionId() {
    return this.sessionIdSubject;
  }
  static #_2 = this.ɵfac = function ChangeUpdateService_Factory(t) {
    return new (t || ChangeUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.CommonConfigService));
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ChangeUpdateService,
    factory: ChangeUpdateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4563:
/*!**************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/pipes/locale-desc.pipe.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocaleDescPipe": () => (/* binding */ LocaleDescPipe)
/* harmony export */ });
/* harmony import */ var _text_services_locale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../text/services/locale.service */ 6468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class LocaleDescPipe {
  constructor(locale) {
    this.locale = locale;
  }
  transform(value, ...args) {
    return this.locale.toText(value + '-desc');
  }
  static #_ = this.ɵfac = function LocaleDescPipe_Factory(t) {
    return new (t || LocaleDescPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_text_services_locale_service__WEBPACK_IMPORTED_MODULE_0__.LocaleService, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "localeDesc",
    type: LocaleDescPipe,
    pure: true
  });
}

/***/ }),

/***/ 3106:
/*!*********************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/pipes/locale.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalePipe": () => (/* binding */ LocalePipe)
/* harmony export */ });
/* harmony import */ var _text_services_locale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../text/services/locale.service */ 6468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class LocalePipe {
  constructor(locale) {
    this.locale = locale;
  }
  transform(value, ...args) {
    return this.locale.toText(value);
  }
  static #_ = this.ɵfac = function LocalePipe_Factory(t) {
    return new (t || LocalePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_text_services_locale_service__WEBPACK_IMPORTED_MODULE_0__.LocaleService, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "locale",
    type: LocalePipe,
    pure: true
  });
}

/***/ }),

/***/ 139:
/*!**********************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/pipes/type-of.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeOfPipe": () => (/* binding */ TypeOfPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TypeOfPipe {
  transform(value, ...args) {
    if (Array.isArray(value)) return 'array';else return typeof value;
  }
  static #_ = this.ɵfac = function TypeOfPipe_Factory(t) {
    return new (t || TypeOfPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "typeOf",
    type: TypeOfPipe,
    pure: true
  });
}

/***/ }),

/***/ 2543:
/*!**********************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/project/IdeProject.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdeProject": () => (/* binding */ IdeProject)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8253);

class IdeProject extends _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeProject {}

/***/ }),

/***/ 876:
/*!************************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/project/services/project.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _IdeProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IdeProject */ 2543);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dontcode/plugin-common */ 9815);









class ProjectService {
  constructor(http, configService) {
    this.http = http;
    this.configService = configService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    this.projects = [];
    this.projectApiUrl = null;
    this.currentProject = new _IdeProject__WEBPACK_IMPORTED_MODULE_0__.IdeProject();
    this.currentProject.template = false;
    this.currentProject.current = true;
    // Receive any updates of the project urls
    this.subscriptions.add(this.configService.getUpdates().subscribe({
      next: newConfig => {
        this.projectApiUrl = newConfig.projectApiUrl ?? null;
      }
    }));
  }
  loadListOfProjects() {
    if (this.projectApiUrl != null) {
      return this.http.get(this.projectApiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(newProjects => {
        this.projects = this.placeCurrentProject(newProjects);
        return this.projects;
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error("No API provided to load projects"));
    }
  }
  placeCurrentProject(projects) {
    // Keep the currentProject at first place in the list
    const found = projects.findIndex(value => {
      return value._id === this.currentProject._id;
    });
    if (found === -1) {
      projects = [this.currentProject, ...projects];
    } else {
      projects.splice(found, 1);
      projects = [this.currentProject, ...projects];
    }
    return projects;
  }
  saveCurrentProject() {
    if (this.projectApiUrl != null) {
      const toSave = {
        ...this.currentProject
      };
      delete toSave.current; // We don't want to save the fact it's the current project
      const model = _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.dtcde.getModelManager().getContent();
      toSave.content = model;
      if (toSave._id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.http.put(this.projectApiUrl + '/' + this.currentProject.name, toSave, {
          responseType: "json"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => {
          delete value.content;
          return value;
        })));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.http.post(this.projectApiUrl, toSave, {
          responseType: "json"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => {
          this.currentProject._id = value._id;
          return this.currentProject;
        })));
      }
    } else {
      return Promise.reject(new Error("No API provided to save project."));
    }
  }
  loadProject(prj) {
    if (prj.name) {
      if (this.projectApiUrl != null) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.http.get(this.projectApiUrl + '/' + prj.name, {
          responseType: 'json'
        }));
      } else {
        return Promise.reject(new Error("No API provided to load project."));
      }
    } else {
      return Promise.resolve(prj);
    }
  }
  /**
   * Creates a new empty project and sets it as current project
   */
  newCurrentProject() {
    this.setCurrentProject(new _IdeProject__WEBPACK_IMPORTED_MODULE_0__.IdeProject());
    return this.currentProject;
  }
  setCurrentProject(prj) {
    if (this.currentProject?.current) {
      delete this.currentProject.current;
    }
    this.currentProject = prj;
    this.currentProject.current = true;
    this.projects = this.placeCurrentProject(this.projects);
  }
  loadAndSetCurrentProject(prj, updateService) {
    // console.log("Loading Project");
    return this.loadProject(prj).then(value => {
      // console.log("Setting current Project");
      this.setCurrentProject(value);
      // console.log("Pushing update");
      updateService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ChangeType.RESET, '', value.content));
      // console.log("Loading Project done");
      return value;
    });
  }
  getCurrentProject() {
    return this.currentProject;
  }
  isCurrentProject(prj) {
    if (prj.current) return prj.current;else return false;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static #_ = this.ɵfac = function ProjectService_Factory(t) {
    return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__.CommonConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: ProjectService,
    factory: ProjectService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2046:
/*!*****************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/shared.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pipes_type_of_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/type-of.pipe */ 139);
/* harmony import */ var _text_text_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text/text.module */ 5901);
/* harmony import */ var _pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/locale.pipe */ 3106);
/* harmony import */ var _pipes_locale_desc_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/locale-desc.pipe */ 4563);
/* harmony import */ var _change_change_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change/change.module */ 5570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _text_text_module__WEBPACK_IMPORTED_MODULE_1__.TextModule, _change_change_module__WEBPACK_IMPORTED_MODULE_4__.ChangeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_pipes_type_of_pipe__WEBPACK_IMPORTED_MODULE_0__.TypeOfPipe, _pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_2__.LocalePipe, _pipes_locale_desc_pipe__WEBPACK_IMPORTED_MODULE_3__.LocaleDescPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _text_text_module__WEBPACK_IMPORTED_MODULE_1__.TextModule, _change_change_module__WEBPACK_IMPORTED_MODULE_4__.ChangeModule],
    exports: [_pipes_type_of_pipe__WEBPACK_IMPORTED_MODULE_0__.TypeOfPipe, _pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_2__.LocalePipe, _pipes_locale_desc_pipe__WEBPACK_IMPORTED_MODULE_3__.LocaleDescPipe]
  });
})();

/***/ }),

/***/ 6468:
/*!********************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/text/services/locale.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocaleService": () => (/* binding */ LocaleService)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class LocaleService {
  constructor() {
    this.texts = new Map([[_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT, 'I want to create'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_TYPE, 'I want to create a'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_NAME, 'with the name'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_NAME + '-desc', 'Enter the name'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES, 'handing the following items:'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES + '-desc', 'List of managed items'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES_FROM, 'An item from'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES_FROM + '-desc', 'Predefined items'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES_NAME, 'with the name'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES_NAME + '-desc', 'Name of item'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS, 'containing the following fields:'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS + '-desc', 'List of fields'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_NAME, 'A field named'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_NAME + '-desc', 'Name of field'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_TYPE, 'with the type'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_TYPE + '-desc', 'Type of field'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS, 'It will display reports:'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS + '-desc', 'Design the reports you want to use'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_TITLE, 'One named'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_TITLE + '-desc', 'The title of the report'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_FOR, 'for the item'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_FOR + '-desc', 'Name of the item to generate the report for'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP, 'Values must be grouped'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP + '-desc', 'Select if and how a grouping of values will be done'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_OF, 'on'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_OF + '-desc', 'The field or the type of field to use for grouping'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_SHOW, 'show'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_SHOW + '-desc', 'if grouping on a type of field, which one to show ?'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_LABEL, 'with the label'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_LABEL + '-desc', 'The title of the group to display'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE, 'and the group must display'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE + '-desc', 'What result to be displayed for each group ?'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OPERATION, 'the'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OPERATION + '-desc', 'Operation to display on the elements'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OF, 'of'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OF + '-desc', 'What field will be displayed ?'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_LABEL, 'labelled as'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_LABEL + '-desc', 'The label of the field aggregation'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT, 'Please sort the values'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT + '-desc', 'Specify how the values will be sorted'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT_BY, 'according to'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT_BY + '-desc', 'The field you want to sort'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT_DIRECTION, 'order'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT_DIRECTION + '-desc', 'Highest ranking or Lowest ranking first ?'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY, 'The report displays'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY + '-desc', 'what must be displayed'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_TYPE, 'a'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_TYPE + '-desc', 'the graph or table you want displayed'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_OF, 'of'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_OF + '-desc', 'the field to display. Empty for all'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_BY, 'by'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_BY + '-desc', 'the field to display. Empty for all'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_TITLE, 'with the title'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_TITLE + '-desc', 'Enter the title of the graph or table displayed'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SHARING, 'Information will be shared '], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SHARING + '-desc', 'List of screens'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SHARING_WITH, 'with'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SHARING_WITH + '-desc', 'Persons to information will be visible to.'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES, 'Data will come from:'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES + '-desc', 'Source of data'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_NAME, 'A source named'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_NAME + '-desc', 'Sets a name for the data source'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_TYPE, 'of type'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_TYPE + '-desc', 'How to connect to the source'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_URL, 'with the url'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_URL + '-desc', 'The url to call the service'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS, 'Showing the screens'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS + '-desc', 'List of screens'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS_NAME, 'A screen with the name'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS_NAME + '-desc', 'Name of screen'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS_LAYOUT, 'and the layout'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS_LAYOUT + '-desc', 'layout of the screen'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS, 'displaying parts:'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS + '-desc', 'List of parts'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS_TYPE, 'A part with the type'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS_TYPE + '-desc', 'Type of part'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS_ENTITY, 'handling the entity'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS_ENTITY + '-desc', 'Entity\'s name'],
    // Find a way for plugins to dynamically inserts label texts
    [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS + '/type', 'of type'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS + '/type-desc', 'Type of screen'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS + '/entity', 'handling the entity'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS + '/entity-desc', 'Entity\'s name']]);
    //
  }

  toText(context, element) {
    let ret;
    if (element) {
      ret = this.texts.get(context + '/' + element);
      if (!ret) {
        ret = context + '/' + element;
      }
    } else {
      ret = this.texts.get(context);
      if (!ret) ret = context;
    }
    return ret;
  }
  static #_ = this.ɵfac = function LocaleService_Factory(t) {
    return new (t || LocaleService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LocaleService,
    factory: LocaleService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7250:
/*!******************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/text/services/text.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextService": () => (/* binding */ TextService)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8253);
/* harmony import */ var _routes_editor_editor_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes/editor/editor-element */ 8442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);





/**
  Manages the model to be edited and as well the list of elements that informs the UI about what to display.
 */
class TextService {
  /**
   * Stores the SchemaItem corresponding to a position in the schema
   * For example:
   *  'creation/entities' => The SchemaItem describing an entity
   *  'creation/entities/fields/' => The SchemaItem describing a field in an entity
   *  'creation/screens[type=list]/columns' => The SchemaItem describing a column of a screen when the screen type is list
   */
  //mapOfJson = new Map<string, DontCodeSchemaItem>();
  constructor(http) {
    //    console.debug('TextElement: Constructor');
    this.http = http;
    this.jsonSchema = null;
    this.rootElement = null;
  }
  resetSchema() {
    //    console.debug('TextElement: Resetting rootElement');
    this.rootElement = null;
  }
  /**
   * Read the schema to integrate it in the list
   * @param schemaAsJson
   */
  readSchema(schemaAsJson) {
    this.jsonSchema = schemaAsJson;
    const rootSchema = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.AbstractSchemaItem.goto(schemaAsJson, _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT);
    if (rootSchema) {
      this.rootElement = _routes_editor_editor_element__WEBPACK_IMPORTED_MODULE_1__.EditorElement.createNew(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT, _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT, _routes_editor_editor_element__WEBPACK_IMPORTED_MODULE_1__.EditorElementType.label, rootSchema);
      //      console.debug('TextElement: New rootElement set');
    }
  }

  getRootElement() {
    if (!this.rootElement) throw new Error('No root elements to return');
    //  console.debug('TextElement: returning rootElement');
    return this.rootElement;
  }
  static #_ = this.ɵfac = function TextService_Factory(t) {
    return new (t || TextService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TextService,
    factory: TextService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5901:
/*!********************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/text/text.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextModule": () => (/* binding */ TextModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class TextModule {
  static #_ = this.ɵfac = function TextModule_Factory(t) {
    return new (t || TextModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TextModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TextModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ }),

/***/ 9949:
/*!*****************************************************!*\
  !*** ./apps/ide-ui/src/environments/environment.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  previewUrl: 'https://run.dont-code.net/preview-ui/next',
  //repositoryUrl: 'assets/repositories/next.json'
  repositoryUrl: 'https://test.dont-code.net/demo/repository-next.json'
};

/***/ }),

/***/ 3856:
/*!*********************************!*\
  !*** ./apps/ide-ui/src/main.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 107);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 9949);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3856)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map