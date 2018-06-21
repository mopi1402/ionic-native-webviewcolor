import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class WebViewColor extends IonicNativePlugin {
    /**
     * Change the background color of the webview
     * @param color {string}
     * @return {Promise<any>} Returns a promise
     */
    change(color: string): Promise<any>;
}
