var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Web View Color
 * @description
 * This plugin allows you to change the background color of the iOS WebView
 *
 * Requires Cordova plugin: `cordova-plugin-webviewcolor`. For more info, please see the [Plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-webviewcolor).
 *
 * @usage
 * ```typescript
 * import { WebViewColor } from '@ionic-native/web-view-color';
 *
 * constructor(private webViewColor: WebViewColor) { }
 *
 * ...
 *
 * this.webViewColor.change( '#FF0000' );
 * ```
 */
var WebViewColor = (function (_super) {
    __extends(WebViewColor, _super);
    function WebViewColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Change the background color of the webview
     * @param color {string}
     * @return {Promise<any>} Returns a promise
     */
    WebViewColor.prototype.change = function (color) {
        return;
    };
    WebViewColor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WebViewColor.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], WebViewColor.prototype, "change", null);
    WebViewColor = __decorate([
        Plugin({
            pluginName: 'WebViewColor',
            plugin: 'cordova-plugin-webviewcolor',
            pluginRef: 'plugins.webviewcolor',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-webviewcolor',
            platforms: ['iOS']
        })
    ], WebViewColor);
    return WebViewColor;
}(IonicNativePlugin));
export { WebViewColor };
//# sourceMappingURL=index.js.map