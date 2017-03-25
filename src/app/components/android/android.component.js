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
var AndroidComponent = (function () {
    function AndroidComponent() {
        this.hidden = 'False';
        this.ssid = '';
        this.passphrase = '';
        this.encryption = 'AES';
        this.dataValue1 = "<?xml version=\"1.0\"?>\n<WLANProfile xmlns=\"http://www.microsoft.com/networking/WLAN/profile/v1\">\n\t<name></name>\n\t\t<SSIDConfig>\n\t\t<SSID>\n\t\t\t<hex>53534944</hex>\n\t\t\t<name>";
        this.dataValue2 = "</name>\n\t\t</SSID>\n\t<nonBroadcast>";
        this.dataValue3 = "</nonBroadcast>\n\t</SSIDConfig>',\n\t<connectionType>ESS</connectionType>\n\t<connectionMode>auto</connectionMode>\n\t<MSM>\n\t\t<security>\n\t\t\t<authEncryption>\n\t\t\t\t<authentication>WPA2PSK</authentication>\n\t\t\t\t<encryption>";
        this.dataValue4 = "</encryption>\n\t\t\t\t<useOneX>false</useOneX>\n\t\t\t</authEncryption>\n\t\t\t<sharedKey>\n\t\t\t\t<keyType>passPhrase</keyType>\n\t\t\t\t<protected>true</protected>\n\t\t\t\t<keyMaterial>";
        this.dataValue5 = "</keyMaterial>\n\t\t\t</sharedKey>\n\t\t</security>\n\t</MSM>\n</WLANProfile>";
    }
    AndroidComponent.prototype.onHidden = function () {
        this.hidden = 'True';
    };
    AndroidComponent.prototype.onPublic = function () {
        this.hidden = 'False';
    };
    AndroidComponent.prototype.onAes = function () {
        this.encryption = 'AES';
    };
    AndroidComponent.prototype.onTkip = function () {
        this.encryption = 'TKIP';
    };
    AndroidComponent.prototype.downloadFile = function () {
        var xmlData = this.dataValue1 + this.ssid + this.dataValue2 + this.hidden + this.dataValue3 + this.encryption + this.dataValue4 + this.passphrase + this.dataValue5;
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([xmlData], { type: 'text/xml' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = this.ssid + ' Android WiFi PSK Profile.xml';
        a.click();
    };
    AndroidComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'android',
            templateUrl: 'android.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AndroidComponent);
    return AndroidComponent;
}());
exports.AndroidComponent = AndroidComponent;
//# sourceMappingURL=android.component.js.map