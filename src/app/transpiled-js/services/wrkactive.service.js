"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/do");
var WrkActiveService = (function () {
    function WrkActiveService(_http) {
        this._http = _http;
    }
    WrkActiveService.prototype.startWorkout = function (wrkActvie) {
        console.log(wrkActvie);
        return this._http.post("http://localhost:9081/workouttracker/workoutactive/create", wrkActvie).map(this.extractData).do(function (data) { return console.log(JSON.stringify(data)); });
    };
    WrkActiveService.prototype.endWorkout = function (wrkActvie) {
        console.log(wrkActvie);
        return this._http.post("http://localhost:9081/workouttracker/workoutactive/update", wrkActvie).map(this.extractData).do(function (data) { return console.log(JSON.stringify(data)); });
    };
    WrkActiveService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("response @@@@@@@@@@@@@");
        console.log(res.text());
        return body;
    };
    WrkActiveService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WrkActiveService);
    return WrkActiveService;
}());
exports.WrkActiveService = WrkActiveService;
//# sourceMappingURL=wrkactive.service.js.map