(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FICHIERS\COURS\MASTER 2\Angular-WebComponents\FINAL\assignment-app\src\main.ts */"zUnb");


/***/ }),

/***/ "3kxz":
/*!*************************************************!*\
  !*** ./src/app/assignments/assignment.model.ts ***!
  \*************************************************/
/*! exports provided: Assignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assignment", function() { return Assignment; });
/*****************************************************************************************/
class Assignment {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B8dI":
/*!******************************************************************************!*\
  !*** ./src/app/assignments/assignment-detail/assignment-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: AssignmentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentDetailComponent", function() { return AssignmentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_assignments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/assignments.service */ "uEgX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth.service */ "QNcV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");








function AssignmentDetailComponent_mat_card_1_mat_checkbox_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignmentDetailComponent_mat_card_1_mat_checkbox_7_Template_mat_checkbox_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.onAssignmentRendu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Devoir rendu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssignmentDetailComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AssignmentDetailComponent_mat_card_1_mat_checkbox_7_Template, 2, 0, "mat-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignmentDetailComponent_mat_card_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClickEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " EDIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignmentDetailComponent_mat_card_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " DELETE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.assignmentTransmis.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx_r0.assignmentTransmis.dateDeRendu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.assignmentTransmis.rendu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.loggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.loggedIn());
} }
/*****************************************************************************************/
class AssignmentDetailComponent {
    /*****************************************************************************************/
    constructor(assignmentsService, route, router, authService) {
        this.assignmentsService = assignmentsService;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    /*****************************************************************************************/
    ngOnInit() {
        this.getAssignment();
    }
    /*****************************************************************************************/
    getAssignment() {
        // 1 récupérer l'id de l'assignment dans l'URL
        let id = +this.route.snapshot.params.id;
        console.log('COMPOSANT DETAIL ID = ' + id);
        this.assignmentsService.getAssignment(id).subscribe((assignment) => {
            //console.log(assignment);
            this.assignmentTransmis = assignment;
        });
    }
    /*****************************************************************************************/
    onAssignmentRendu() {
        this.assignmentTransmis.rendu = true;
        this.assignmentsService
            .updateAssignment(this.assignmentTransmis)
            .subscribe((message) => {
            console.log(message);
            // on retourne à la page d'accueil
            this.router.navigate(['/home']);
        });
    }
    /*****************************************************************************************/
    onDelete() {
        this.assignmentsService
            .deleteAssignment(this.assignmentTransmis)
            .subscribe((reponse) => {
            console.log(reponse.message);
            this.assignmentTransmis = null;
            // on retourne à la page d'accueil
            this.router.navigate(['/home']);
        });
    }
    /*****************************************************************************************/
    onClickEdit() {
        this.router.navigate(['/assignment', this.assignmentTransmis.id, 'edit'], {
            queryParams: { nom: 'toto', age: '30' },
            fragment: 'edition',
        });
    }
    /*****************************************************************************************/
    loggedIn() {
        return this.authService.loggedIn;
    }
}
AssignmentDetailComponent.ɵfac = function AssignmentDetailComponent_Factory(t) { return new (t || AssignmentDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_assignments_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AssignmentDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentDetailComponent, selectors: [["app-assignment-detail"]], decls: 2, vars: 1, consts: [[1, "container"], [4, "ngIf"], ["id", "bottom"], [3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "click"]], template: function AssignmentDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AssignmentDetailComponent_mat_card_1_Template, 12, 7, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assignmentTransmis);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\n\n\n#bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbm1lbnQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGOztBQUUxRjtFQUNFLFlBQVk7QUFDZDs7QUFDQSwwRkFBMEY7O0FBQzFGO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYXNzaWdubWVudC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiNib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "QNcV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // appelée lors de la navigation
    canActivate(route, state) {
        //return true; // signifie "toujours activé/autorisé"
        return this.authService.isAdmin().then((authentifie) => {
            // ici on traite la valeur retournée par la promesse
            if (authentifie) {
                console.log('AUTORISE A NAVIGUER');
                return true; // on autorise la navigation
            }
            else {
                console.log('NON AUTORISE A NAVIGUER');
                this.router.navigate(['/home']);
                return false;
            }
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QNcV":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthService {
    constructor() {
        this.loggedIn = false;
    }
    logIn() {
        this.loggedIn = true;
    }
    logOut() {
        this.loggedIn = false;
    }
    // cette méthode renvoie une promesse (on devra traiter le résultat avec un then...)
    // la valeur renvoyé (qu'on récupèrera dans le then(val => {....}) est la valeur
    // de la propriété loggedIn. En gros, si on est loggué, on est admin...
    isAdmin() {
        const isUserAdmin = new Promise((resolve, reject) => {
            resolve(this.loggedIn);
        });
        return isUserAdmin;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/auth.service */ "QNcV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");




/*****************************************************************************************/
/*****************************************************************************************/
class AppComponent {
    /*****************************************************************************************/
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        /*****************************************************************************************/
        this.titre = 'Application de gestion des Assignments';
    }
    /*****************************************************************************************/
    login() {
        if (!this.authService.loggedIn) {
            this.authService.logIn();
        }
        else {
            this.authService.logOut();
            this.router.navigate(['/home']);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 1, consts: [["routerLink", "/home"], ["color", "primary", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-slide-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_slide_toggle_click_4_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titre);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assignments/assignments.component */ "f2/Y");
/* harmony import */ var _assignments_assignment_detail_assignment_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assignments/assignment-detail/assignment-detail.component */ "B8dI");
/* harmony import */ var _assignments_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assignments/add-assignment/add-assignment.component */ "eqDZ");
/* harmony import */ var _assignments_edit_assigment_edit_assigment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assignments/edit-assigment/edit-assigment.component */ "yyhn");
/* harmony import */ var _shared_rendu_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/rendu.directive */ "d+1Q");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");



/*****************************************************************************************/











/*****************************************************************************************/



/*****************************************************************************************/




/*****************************************************************************************/




/*****************************************************************************************/
const routes = [
    { path: '', component: _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_17__["AssignmentsComponent"] },
    { path: 'home', component: _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_17__["AssignmentsComponent"] },
    { path: 'add', component: _assignments_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_19__["AddAssignmentComponent"] },
    { path: 'assignment/:id', component: _assignments_assignment_detail_assignment_detail_component__WEBPACK_IMPORTED_MODULE_18__["AssignmentDetailComponent"] },
    { path: 'assignment/:id/edit', component: _assignments_edit_assigment_edit_assigment_component__WEBPACK_IMPORTED_MODULE_20__["EditAssigmentComponent"],
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"]],
    },
];
/*****************************************************************************************/
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(routes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _assignments_assignments_component__WEBPACK_IMPORTED_MODULE_17__["AssignmentsComponent"],
        _shared_rendu_directive__WEBPACK_IMPORTED_MODULE_21__["RenduDirective"],
        _assignments_assignment_detail_assignment_detail_component__WEBPACK_IMPORTED_MODULE_18__["AssignmentDetailComponent"],
        _assignments_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_19__["AddAssignmentComponent"],
        _assignments_edit_assigment_edit_assigment_component__WEBPACK_IMPORTED_MODULE_20__["EditAssigmentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]] }); })();


/***/ }),

/***/ "d+1Q":
/*!*******************************************!*\
  !*** ./src/app/shared/rendu.directive.ts ***!
  \*******************************************/
/*! exports provided: RenduDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenduDirective", function() { return RenduDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RenduDirective {
    constructor(el) {
        el.nativeElement.style.color = 'green';
        el.nativeElement.style.border = '1px solid green';
        // el.nativeElement.append += '### RENDU ###';
    }
}
RenduDirective.ɵfac = function RenduDirective_Factory(t) { return new (t || RenduDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
RenduDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RenduDirective, selectors: [["", "appRendu", ""]] });


/***/ }),

/***/ "eqDZ":
/*!************************************************************************!*\
  !*** ./src/app/assignments/add-assignment/add-assignment.component.ts ***!
  \************************************************************************/
/*! exports provided: AddAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssignmentComponent", function() { return AddAssignmentComponent; });
/* harmony import */ var _assignment_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assignment.model */ "3kxz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_assignments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/assignments.service */ "uEgX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









/*****************************************************************************************/
class AddAssignmentComponent {
    /*****************************************************************************************/
    constructor(assignmentsService, router) {
        this.assignmentsService = assignmentsService;
        this.router = router;
        /*****************************************************************************************/
        // pour le formulaire
        this.nomDevoir = '';
        this.dateDeRendu = null;
    }
    /*****************************************************************************************/
    ngOnInit() { }
    /*****************************************************************************************/
    onSubmit(event) {
        // evite la soumission standard du formulaire, qui génère un warning
        // dans la console...
        event.preventDefault();
        /*****************************************************************************************/
        console.log('Dans submit nom = ' + this.nomDevoir + ' date = ' + this.dateDeRendu);
        /*****************************************************************************************/
        let newAssignment = new _assignment_model__WEBPACK_IMPORTED_MODULE_0__["Assignment"]();
        newAssignment.id = Math.floor(Math.random() * 1000000);
        newAssignment.nom = this.nomDevoir;
        newAssignment.dateDeRendu = this.dateDeRendu;
        newAssignment.rendu = false;
        /*****************************************************************************************/
        // on va utiliser directement le service
        this.assignmentsService
            .addAssignment(newAssignment)
            .subscribe((reponse) => {
            console.log(reponse.message);
            // il va falloir naviguer de nouveau vers la page d'accueil
            // on va devoir faire l'équivalent du routerLink="/home" mais
            // par programme...
            // on retourne à la page d'accueil
            this.router.navigate(['/home']);
        });
        /*****************************************************************************************/
    }
}
AddAssignmentComponent.ɵfac = function AddAssignmentComponent_Factory(t) { return new (t || AddAssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_assignments_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddAssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddAssignmentComponent, selectors: [["app-add-assignment"]], decls: 11, vars: 4, consts: [["ngForm", "", 1, "form"], ["assignmentForm", ""], ["matInput", "", "placeholder", "Entrez un nom", "name", "nom", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "date", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["datepicker", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"]], template: function AddAssignmentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddAssignmentComponent_Template_input_ngModelChange_3_listener($event) { return ctx.nomDevoir = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AddAssignmentComponent_Template_input_ngModelChange_5_listener($event) { return ctx.dateDeRendu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-datepicker-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-datepicker", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddAssignmentComponent_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); ctx.onSubmit($event); return _r0.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Ajouter un devoir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.nomDevoir);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx.dateDeRendu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1hc3NpZ25tZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGO0FBQzFGO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2IiLCJmaWxlIjoiYWRkLWFzc2lnbm1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA1cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "f2/Y":
/*!******************************************************!*\
  !*** ./src/app/assignments/assignments.component.ts ***!
  \******************************************************/
/*! exports provided: AssignmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsComponent", function() { return AssignmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_assignments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/assignments.service */ "uEgX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _shared_rendu_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/rendu.directive */ "d+1Q");








function AssignmentsComponent_mat_list_5_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Devoir intitul\u00E9 ", a_r1.nom, " rendu. ");
} }
const _c0 = function () { return { nonrendu: true }; };
function AssignmentsComponent_mat_list_5_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("le devoir ", a_r1.nom, " n'a pas \u00E9t\u00E9 rendu...");
} }
function AssignmentsComponent_mat_list_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignmentsComponent_mat_list_5_Template_mat_list_item_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const a_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.assignmentClique(a_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AssignmentsComponent_mat_list_5_p_7_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AssignmentsComponent_mat_list_5_ng_template_8_Template, 2, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date de rendu : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, a_r1.dateDeRendu), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/assignment/", a_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", a_r1.rendu)("ngIfElse", _r3);
} }
/*****************************************************************************************/
class AssignmentsComponent {
    /*****************************************************************************************/
    constructor(assignmentService) {
        this.assignmentService = assignmentService;
    }
    /*****************************************************************************************/
    ngOnInit() {
        console.log('Demande des assignments via le service...');
        // on utilise le service pour récupérer la liste des assignments
        this.assignmentService.getAssignments().subscribe((assignements) => {
            // on ne rentre ici que quand les données sont prêtes
            // par ex, le service peut utiliser une BD distance et des WebService
            // pour récupérer les données..
            this.assignments = assignements;
            console.log('Données reçues...');
        });
        console.log('getAssignments appelé....');
    }
    /*****************************************************************************************/
    assignmentClique(a) {
        console.log('Assignment cliqué : ' + a.nom);
        this.assignmentSelectionne = a;
    }
    /*****************************************************************************************/
    onNouvelAssignment(newAssignment) {
        //this.assignments.push(newAssignment);
        this.assignmentService.addAssignment(newAssignment).subscribe((message) => {
            // on ne rentre ici que quand l'ajout (insert) a bien été
            // effectué !
            console.log(message);
        });
        // et on cache le formulaire et on réaffiche la liste à jour
        //this.formVisible = false;
    }
}
AssignmentsComponent.ɵfac = function AssignmentsComponent_Factory(t) { return new (t || AssignmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_assignments_service__WEBPACK_IMPORTED_MODULE_1__["AssignmentsService"])); };
AssignmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignmentsComponent, selectors: [["app-assignments"]], decls: 6, vars: 1, consts: [[1, "container"], ["routerLink", "/add"], ["mat-flat-button", "", "color", "accent", 1, "ajouterBtn"], [4, "ngFor", "ngForOf"], ["mat-subheader", ""], [3, "routerLink"], [3, "click"], ["appRendu", "", 4, "ngIf", "ngIfElse"], ["nonsoumis", ""], ["appRendu", ""], [3, "ngClass"]], template: function AssignmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Ajouter Assignment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AssignmentsComponent_mat_list_5_Template, 11, 6, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.assignments);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _shared_rendu_directive__WEBPACK_IMPORTED_MODULE_7__["RenduDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.ajouterBtn[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  margin-right: 10px;\n}\n\n.rendu[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.nonrendu[_ngcontent-%COMP%] {\n  color: red;\n  background-color: yellow;\n  border: 2px dashed orange;\n  padding: 2px;\n}\n\n.gros[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbm1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGO0FBQzFGO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBLDBGQUEwRjtBQUMxRjtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQSwwRkFBMEY7QUFDMUY7RUFDRSxZQUFZO0FBQ2Q7QUFDQSwwRkFBMEY7QUFDMUY7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7QUFDQSwwRkFBMEY7QUFDMUY7RUFDRSxlQUFlO0FBQ2pCO0FBQ0EsMEZBQTBGIiwiZmlsZSI6ImFzc2lnbm1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5ham91dGVyQnRuIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5yZW5kdSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5ub25yZW5kdSB7XG4gIGNvbG9yOiByZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgYm9yZGVyOiAycHggZGFzaGVkIG9yYW5nZTtcbiAgcGFkZGluZzogMnB4O1xufVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLmdyb3Mge1xuICBmb250LXNpemU6IDQwcHg7XG59XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4iXX0= */"] });


/***/ }),

/***/ "ljKL":
/*!*******************************************!*\
  !*** ./src/app/shared/logging.service.ts ***!
  \*******************************************/
/*! exports provided: LoggingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingService", function() { return LoggingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoggingService {
    constructor() { }
    log(assignmentName, action) {
        console.log(assignmentName + ' ' + action);
    }
}
LoggingService.ɵfac = function LoggingService_Factory(t) { return new (t || LoggingService)(); };
LoggingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggingService, factory: LoggingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uEgX":
/*!***********************************************!*\
  !*** ./src/app/shared/assignments.service.ts ***!
  \***********************************************/
/*! exports provided: AssignmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentsService", function() { return AssignmentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logging.service */ "ljKL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AssignmentsService {
    constructor(loggingService, http) {
        this.loggingService = loggingService;
        this.http = http;
        this.assignments = [
            {
                id: 1,
                nom: 'TP Angular 1 à rendre !',
                dateDeRendu: new Date('01/02/2021'),
                rendu: true,
            },
            {
                id: 2,
                nom: 'Projet MOPOLO SQL',
                dateDeRendu: new Date('02/15/2021'),
                rendu: false,
            },
            {
                id: 3,
                nom: 'Lange R à finir',
                dateDeRendu: new Date('01/20/2021'),
                rendu: false,
            },
        ];
        this.url = 'https://api2096.herokuapp.com/api/assignments';
    }
    getAssignments() {
        console.log('Dans getAssignments dans le service...');
        this.loggingService.log('tous les assignments', 'ont été recherchés');
        // return of(this.assignments);
        return this.http.get(this.url);
    }
    getAssignment(id) {
        console.log('Dans getAssignment dans le service id=' + id);
        this.loggingService.log('Assignment id=' + id, 'a été recherché');
        /*
        let assignmentTrouve: Assignment;
    
        this.assignments.forEach((a, index) => {
          if (a.id === id) {
            console.log("Assignment trouvé à l'index " + index);
            assignmentTrouve = a;
          }
        });
        return of(assignmentTrouve);
    */
        //return of(this.assignments.find((a) => a.id === id));
        return this.http.get(this.url + '/' + id);
    }
    addAssignment(assignment) {
        // this.assignments.push(assignment);
        this.loggingService.log(assignment.nom, 'a été ajouté');
        return this.http.post(this.url, assignment);
    }
    updateAssignment(assignment) {
        /*
        this.assignments.forEach((a, index) => {
          if (a === assignment) {
            this.assignments[index] = a;
          }
        });
        */
        this.loggingService.log(assignment.nom, 'a été mis à jour');
        return this.http.put(this.url, assignment);
    }
    deleteAssignment(assignment) {
        /*
        this.assignments.forEach((a, index) => {
          if (a === assignment) {
            // suppression d'un élément du tableau
            // splice(position, nb elements à supprimer)
            this.assignments.splice(index, 1);
          }
        });
        */
        this.loggingService.log(assignment.nom, 'a été supprimé');
        return this.http.delete(this.url + '/' + assignment._id);
    }
}
AssignmentsService.ɵfac = function AssignmentsService_Factory(t) { return new (t || AssignmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logging_service__WEBPACK_IMPORTED_MODULE_1__["LoggingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AssignmentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssignmentsService, factory: AssignmentsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "yyhn":
/*!************************************************************************!*\
  !*** ./src/app/assignments/edit-assigment/edit-assigment.component.ts ***!
  \************************************************************************/
/*! exports provided: EditAssigmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAssigmentComponent", function() { return EditAssigmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_assignments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/assignments.service */ "uEgX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function EditAssigmentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditAssigmentComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.nomassignment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditAssigmentComponent_div_0_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.dateDeRendu = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-datepicker-toggle", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-datepicker", null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditAssigmentComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSaveAssignment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sauver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edition de l'assignment ", ctx_r0.assignment.nom, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.nomassignment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1)("ngModel", ctx_r0.dateDeRendu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
} }
/*****************************************************************************************/
class EditAssigmentComponent {
    /*****************************************************************************************/
    constructor(route, router, assignmentsService) {
        this.route = route;
        this.router = router;
        this.assignmentsService = assignmentsService;
    }
    /*****************************************************************************************/
    ngOnInit() {
        console.log(this.route.snapshot.queryParams);
        console.log(this.route.snapshot.fragment);
        this.getAssignment();
    }
    /*****************************************************************************************/
    getAssignment() {
        // 1 récupérer l'id de l'assignment dans l'URL
        let id = +this.route.snapshot.params.id;
        /*****************************************************************************************/
        console.log('COMPOSANT EDIT ID = ' + id);
        /*****************************************************************************************/
        this.assignmentsService.getAssignment(id).subscribe((assignment) => {
            //console.log(assignment);
            this.assignment = assignment;
            /*****************************************************************************************/
            if (assignment) {
                this.nomassignment = assignment.nom;
                this.dateDeRendu = assignment.dateDeRendu;
            }
            /*****************************************************************************************/
        });
    }
    /*****************************************************************************************/
    onSaveAssignment() {
        if (this.nomassignment) {
            this.assignment.nom = this.nomassignment;
        }
        /*****************************************************************************************/
        if (this.dateDeRendu) {
            this.assignment.dateDeRendu = this.dateDeRendu;
        }
        /*****************************************************************************************/
        this.assignmentsService
            .updateAssignment(this.assignment)
            .subscribe((reponse) => {
            console.log(reponse.message);
            // on navigue vers la page d'accueil
            this.router.navigate(['/home']);
        });
    }
}
EditAssigmentComponent.ɵfac = function EditAssigmentComponent_Factory(t) { return new (t || EditAssigmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_assignments_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentsService"])); };
EditAssigmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditAssigmentComponent, selectors: [["app-edit-assigment"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["ngForm", "", 1, "form"], ["matInput", "", "placeholder", "Edition du nom", "name", "assignment-name", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Edition de la date", "name", "date", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function EditAssigmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditAssigmentComponent_div_0_Template, 13, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assignment);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtYXNzaWdtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGO0FBQzFGO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2IiLCJmaWxlIjoiZWRpdC1hc3NpZ21lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA1cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map