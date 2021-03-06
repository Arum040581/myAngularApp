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
var router_1 = require("@angular/router");
var wrkcollections_service_1 = require("../services/wrkcollections.service");
require("rxjs/add/operator/map");
var TrackComponent = (function () {
    function TrackComponent(wrkCollectionsService, router) {
        this.wrkCollectionsService = wrkCollectionsService;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.router = router;
    }
    ;
    // events
    TrackComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    TrackComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    TrackComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    TrackComponent = __decorate([
        core_1.Component({
            selector: 'app-track',
            templateUrl: './app/track/track.html',
            providers: [wrkcollections_service_1.WrkCollectionsService]
        }),
        __metadata("design:paramtypes", [wrkcollections_service_1.WrkCollectionsService, router_1.Router])
    ], TrackComponent);
    return TrackComponent;
}());
exports.TrackComponent = TrackComponent;
;
//# sourceMappingURL=track.component.js.map