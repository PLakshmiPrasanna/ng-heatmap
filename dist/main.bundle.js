webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_heat_map_heat_map_component__ = __webpack_require__("../../../../../src/app/components/heat-map/heat-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/heatmap', pathMatch: 'full' },
    { path: 'heatmap', component: __WEBPACK_IMPORTED_MODULE_2__components_heat_map_heat_map_component__["a" /* HeatMapComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>App works</p>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_heat_map_heat_map_component__ = __webpack_require__("../../../../../src/app/components/heat-map/heat-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_heat_map_heat_map_component__["a" /* HeatMapComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services__["a" /* HeatMapService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/heat-map/heat-map.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"CreateHeatMap()\">CreateHeatMap</button>\n\n<div class=\"mouseOverContent\" style=\"opacity:0\"></div>\n<div style=\"margin:10px 10px\" id=\"celldetails\">\n    <textarea cols=\"90\" rows=\"5\" id=\"cellpara\">    </textarea>    \n</div>\n\n<div style=\"margin:10px 10px;\" id=\"heatmap\">\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/heat-map/heat-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mouseOverContent {\n  position: absolute;\n  width: 270px;\n  background: #bdd4f9;\n  padding: 3px;\n  pointer-events: none;\n  text-align: center;\n  font: 14px sans-serif;\n  height: 50px;\n  border-radius: 4px;\n  border: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/heat-map/heat-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeatMapComponent = /** @class */ (function () {
    function HeatMapComponent(heatMapSvc) {
        var _this = this;
        this.heatMapSvc = heatMapSvc;
        this.cell = "";
        heatMapSvc.getHeatMapXmlPayload()
            .subscribe(function (res) {
            var heatMapPayload = res;
            _this.cells = heatMapSvc.convertXmlToCells(heatMapPayload);
        });
    }
    HeatMapComponent.prototype.ngOnInit = function () {
    };
    HeatMapComponent.prototype.ngOnChanges = function () {
        console.log("change occured");
    };
    HeatMapComponent.prototype.CreateHeatMap = function () {
        console.log('creating heat map');
        var selection = __WEBPACK_IMPORTED_MODULE_1_d3__["b" /* select */]("#heatmap");
        var svgSelection = selection.append("svg")
            .attr("width", 1500)
            .attr("height", 775)
            .attr("style", "outline:thick solid black;");
        var mouseOverDiv = __WEBPACK_IMPORTED_MODULE_1_d3__["b" /* select */](".mouseOverContent");
        var rectangles = svgSelection.selectAll("rect")
            .data(this.cells)
            .enter()
            .append("rect")
            .attr("x", function (d) {
            return 10 + d.properties.X * 15;
        })
            .attr("y", function (d) {
            return 20 + d.properties.Y * 7.5;
        })
            .attr("width", 13)
            .attr("height", 6)
            .style("fill", function (d) {
            if (d.properties.State == "bad")
                return "red";
            else
                return "green";
        })
            .on("mouseover", function (d) {
            __WEBPACK_IMPORTED_MODULE_1_d3__["b" /* select */](this).style("fill", "blue");
            mouseOverDiv.transition()
                .duration(200)
                .style("opacity", .9);
            mouseOverDiv.html(JSON.stringify(d))
                .style("left", (__WEBPACK_IMPORTED_MODULE_1_d3__["a" /* event */].pageX) + "px")
                .style("top", (__WEBPACK_IMPORTED_MODULE_1_d3__["a" /* event */].pageY - 75) + "px")
                .style("color", "black");
        })
            .on("mouseout", function (d) {
            var color = "blue";
            if (d.properties.State == "bad")
                color = "red";
            else
                color = "green";
            __WEBPACK_IMPORTED_MODULE_1_d3__["b" /* select */](this).style("fill", color);
            mouseOverDiv.transition()
                .duration(200)
                .style("opacity", 0);
        })
            .on('mousedown', function (d) {
            console.log("click handler started working " + new Date().getTime());
            document.getElementById("cellpara").innerHTML = "before" + JSON.stringify(d);
            d.properties.State = "good";
            document.getElementById("cellpara").innerHTML += "\nafter" + JSON.stringify(d);
            //d3.select(this).style("fill","green");                                        
            console.log("click handler completed " + new Date().getTime());
        });
        //95 rows and 95 cols
    };
    HeatMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heat-map',
            template: __webpack_require__("../../../../../src/app/components/heat-map/heat-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/heat-map/heat-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* HeatMapService */]])
    ], HeatMapComponent);
    return HeatMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/heat-map/heat-map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatMapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xml2js__ = __webpack_require__("../../../../xml2js/lib/xml2js.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeatMapService = /** @class */ (function () {
    function HeatMapService(http) {
        this.http = http;
    }
    HeatMapService.prototype.getHeatMapXmlPayload = function () {
        console.log("in heat map service");
        return this.http.get('assets/heatmap.xml', { responseType: "text" })
            .map(function (rslt) {
            return rslt;
        });
    };
    HeatMapService.prototype.convertXmlToCells = function (payload) {
        var data = [];
        var jsonData;
        //let parser = new Parser({explicitArray:false});
        Object(__WEBPACK_IMPORTED_MODULE_2_xml2js__["parseString"])(payload, { trim: true, explicitArray: false }, function (err, result) {
            console.log('converted with xml2js');
            var childJSON = result['Envelope']['Body']['OperationInfo']['Parent']['ChildCollection'];
            //let designChild = child['Properties'];
            var childCollection = childJSON['Child'];
            for (var i = 0; i < childCollection.length; i++) {
                var currentChild = childCollection[i];
                var XNode = currentChild.Properties.Property.filter(function (obj) {
                    if (obj.$['name'] == "X")
                        return true;
                    else
                        return false;
                });
                var YNode = currentChild.Properties.Property.filter(function (obj) {
                    if (obj.$['name'] == "Y")
                        return true;
                    else
                        return false;
                });
                var StateNode = currentChild.Properties.Property.filter(function (obj) {
                    if (obj.$['name'] == "State")
                        return true;
                    else
                        return false;
                });
                var properties = {
                    X: parseInt(XNode[0].$.value, 10),
                    Y: parseInt(YNode[0].$.value, 10),
                    State: StateNode[0].$.value
                };
                var child = {
                    $: currentChild.$,
                    properties: properties
                };
                data.push(child);
            }
        });
        return data;
    };
    HeatMapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HeatMapService);
    return HeatMapService;
}());



/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heat_map_heat_map_service__ = __webpack_require__("../../../../../src/app/services/heat-map/heat-map.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__heat_map_heat_map_service__["a"]; });



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map