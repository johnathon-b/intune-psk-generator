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
var core_1 = require('@angular/core');
require('rxjs/Rx');
var IosComponent = (function () {
    function IosComponent() {
        this.hidden = 'False';
        this.ssid = '';
        this.passphrase = '';
        this.hexSource = '6a6f686e6174686f6e62';
        this.dataValue1 = "<?xml version='1.0' encoding='UTF-8'?>\n<!DOCTYPE plist PUBLIC '-//Apple//DTD PLIST 1.0//EN' 'http://www.apple.com/DTDs/PropertyList-1.0.dtd'>\n<plist version='1.0'>\n<dict>\n\t<key>PayloadContent</key>\n  <array>\n    <dict>\n      <key>AutoJoin</key>\n      <true/>\n      <key>EncryptionType</key>\n      <string>Any</string>\n      <key>HIDDEN_NETWORK</key>\n      <";
        this.dataValue2 = "/>\n      <key>IsHotspot</key>\n      <false/>\n      <key>Password</key>\n      <string>";
        this.dataValue3 = "</string>\n      <key>PayloadDescription</key>\n      <string>Configures Wi-Fi settings</string>\n      <key>PayloadDisplayName</key>\n      <string>WiFi</string>\n      <key>PayloadIdentifier</key>\n      <string>contoso.ninja.local.6a6f686e6174686f6e62.com.apple.wifi.managed.99-6a6f686e6174686f6e62-99</string>\n      <key>PayloadType</key>\n      <string>com.apple.wifi.managed</string>\n      <key>PayloadUUID</key>\n      <string>99-";
        this.dataValue4 = "-99</string>\n      <key>PayloadVersion</key>\n      <real>1</real>\n      <key>ProxyType</key>\n      <string>None</string>\n      <key>SSID_STR</key>\n      <string>";
        this.dataValue5 = "</string>\n    </dict>\n  </array>\n  <key>PayloadDisplayName</key>\n  <string>CNCY</string>\n  <key>PayloadIdentifier</key>\n  <string>contoso.ninja.local.6a6f686e6174686f6e62</string>\n  <key>PayloadRemovalDisallowed</key>\n  <false/>\n  <key>PayloadType</key>\n  <string>Configuration</string>\n  <key>PayloadUUID</key>\n  <string>6a6f686e6174686f6e62-99-6a6f686e6174686f6e62</string>\n  <key>PayloadVersion</key>\n  <integer>1</integer>\n</dict>\n</plist>";
    }
    IosComponent.prototype.onHidden = function () {
        this.hidden = 'True';
    };
    IosComponent.prototype.onPublic = function () {
        this.hidden = 'False';
    };
    IosComponent.prototype.downloadFile = function () {
        var xmlData = this.dataValue1 + this.hidden + this.dataValue2 + this.passphrase + this.dataValue3 + this.ssid + this.dataValue4 + this.hexSource + this.dataValue5;
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([xmlData], { type: 'text/xml' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = this.ssid + ' iOS WiFi PSK Profile.mobileconfig';
        a.click();
    };
    IosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ios',
            templateUrl: 'ios.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], IosComponent);
    return IosComponent;
}());
exports.IosComponent = IosComponent;
//# sourceMappingURL=ios.component.js.map