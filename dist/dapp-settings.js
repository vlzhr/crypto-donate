(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dApp"] = factory();
	else
		root["dApp"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@waves.exchange/storage-provider/dist/storage-provider.min.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@waves.exchange/storage-provider/dist/storage-provider.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return i})),n.d(e,"__rest",(function(){return s})),n.d(e,"__decorate",(function(){return a})),n.d(e,"__param",(function(){return u})),n.d(e,"__metadata",(function(){return c})),n.d(e,"__awaiter",(function(){return f})),n.d(e,"__generator",(function(){return l})),n.d(e,"__exportStar",(function(){return h})),n.d(e,"__values",(function(){return d})),n.d(e,"__read",(function(){return p})),n.d(e,"__spread",(function(){return _})),n.d(e,"__spreadArrays",(function(){return v})),n.d(e,"__await",(function(){return y})),n.d(e,"__asyncGenerator",(function(){return g})),n.d(e,"__asyncDelegator",(function(){return w})),n.d(e,"__asyncValues",(function(){return m})),n.d(e,"__makeTemplateObject",(function(){return b})),n.d(e,"__importStar",(function(){return O})),n.d(e,"__importDefault",(function(){return P}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function a(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s}function u(t,e){return function(n,r){e(n,r,t)}}function c(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function f(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}u((r=r.apply(t,e||[])).next())}))}function l(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function h(t,e){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}function d(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function p(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function _(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(p(arguments[e]));return t}function v(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function y(t){return this instanceof y?(this.v=t,this):new y(t)}function g(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||a(t,e)}))})}function a(t,e){try{(n=o[t](e)).value instanceof y?Promise.resolve(n.value.v).then(u,c):f(i[0][2],n)}catch(t){f(i[0][3],t)}var n}function u(t){a("next",t)}function c(t){a("throw",t)}function f(t,e){t(e),i.shift(),i.length&&a(i[0][0],i[0][1])}}function w(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:y(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function m(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=d(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function b(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function O(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function P(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(12)),r(n(6)),r(n(16)),r(n(7)),r(n(5)),r(n(4))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.keys=function(t){return Object.keys(t)};var r=Math.floor(Date.now()*Math.random()),o=0;e.uniqueId=function(t){return t+"-"+r+"-"+o++},e.toArray=function(t){return Array.isArray(t)?t:[t]},e.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e){return t.reduce((function(t,e){return e(t)}),e)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(11),i=function(){function t(t){this.queue=new o.Queue(t)}return t.prototype.dialog=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e,n,o,i,s=this;return r.__generator(this,(function(a){switch(a.label){case 0:return this.runBeforeShow(),[4,this.getBus()];case 1:if(e=a.sent(),n=function(){return r.__awaiter(s,void 0,void 0,(function(){return r.__generator(this,(function(n){return[2,t(e)]}))}))},!this.queue.canPush())return[3,6];a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.queue.push(n)];case 3:return o=a.sent(),this.runAfterShow(),[2,o];case 4:return i=a.sent(),this.runAfterShow(),[2,Promise.reject(i)];case 5:return[3,7];case 6:return[2,Promise.reject(new Error("Queue is full!"))];case 7:return[2]}}))}))},t.prototype.runBeforeShow=function(){0===this.queue.length&&this.beforeShow()},t.prototype.runAfterShow=function(){0===this.queue.length&&this.afterShow()},t}();e.Transport=i},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(2)),r(n(13)),r(n(15))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){!function(t){t.LOG_LEVEL={PRODUCTION:0,ERRORS:1,VERBOSE:2},t.logLevel=t.LOG_LEVEL.PRODUCTION,t.methodsData={log:{save:!1,logLevel:t.LOG_LEVEL.VERBOSE},info:{save:!1,logLevel:t.LOG_LEVEL.VERBOSE},warn:{save:!1,logLevel:t.LOG_LEVEL.VERBOSE},error:{save:!0,logLevel:t.LOG_LEVEL.ERRORS}}}(t.console||(t.console={}))}(e.config||(e.config={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){};e.Adapter=r},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(n,r){var o=t.call(this)||this;return o.win=n,o.type=r,o.handler=function(t){o.trigger("message",t)},r===e.PROTOCOL_TYPES.LISTEN&&o.win.addEventListener("message",o.handler,!1),o}var n;return o(e,t),e.prototype.dispatch=function(t){return this.win.postMessage(t,"*"),this},e.prototype.destroy=function(){this.type===e.PROTOCOL_TYPES.LISTEN&&this.win.removeEventListener("message",this.handler,!1),this.win=e._fakeWin},e._fakeWin={postMessage:n=function(){return null},addEventListener:n,removeEventListener:n},e}(n(17).EventEmitter);e.WindowProtocol=i,function(t){t.PROTOCOL_TYPES={LISTEN:"listen",DISPATCH:"dispatch"}}(i=e.WindowProtocol||(e.WindowProtocol={})),e.WindowProtocol=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9);e.StorageProvider=r.StorageProvider,e.default=r.StorageProvider},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(10),i=n(19),s=n(1),a=function(){function t(t,e){t=t||"https://waves.exchange/signer";var n=o.TransportIframe.canUse()?o.TransportIframe:i.TransportWindow;this._transport=new n(t,3),null!=e&&(s.config.console.logLevel=s.config.console.LOG_LEVEL.VERBOSE)}return t.prototype.connect=function(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,Promise.resolve(this._transport.event((function(e){return e.dispatchEvent("connect",t)})))]}))}))},t.prototype.logout=function(){return this._transport.dialog((function(t){return t.request("logout")}))},t.prototype.login=function(){return this._transport.dialog((function(t){return t.request("login")}))},t.prototype.signMessage=function(t){return this._transport.dialog((function(e){return e.request("sign-message",t)}))},t.prototype.signTypedData=function(t){return this._transport.dialog((function(e){return e.request("sign-typed-data",t)}))},t.prototype.sign=function(t){return this._transport.dialog((function(e){return e.request("sign",t)}))},t}();e.StorageProvider=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(3),i=n(1),s=function(t){function e(n,r){var o=t.call(this,r)||this;return o._iframe=e._createIframe(n),o._ready=i.WindowAdapter.createSimpleWindowAdapter(o._iframe).then((function(t){return o._hideIframe(),new i.Bus(t,-1)})),o._addIframeToDom(),o}return r.__extends(e,t),e.canUse=function(){var t=navigator.userAgent.toLowerCase(),e=t.includes("safari")&&!t.includes("chrome");return!(null!=navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)||e)},e._createIframe=function(t){var e=document.createElement("iframe");return e.style.transition="opacity .2s",e.style.position="absolute",e.style.opacity="0",e.src=t,e},e.prototype.event=function(t){this._ready.then((function(e){t(e)}))},e.prototype.getBus=function(){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){return[2,this._ready]}))}))},e.prototype.beforeShow=function(){this._showIframe()},e.prototype.afterShow=function(){this._hideIframe()},e.prototype._addIframeToDom=function(){var t=this;null!=document.body?document.body.appendChild(this._iframe):document.addEventListener("DOMContentLoaded",(function(){document.body.appendChild(t._iframe)}))},e.prototype._showIframe=function(){var t=this;this._applyStyle({width:"100%",height:"100%",left:"0",top:"0",border:"none",position:"fixed",display:"block",opacity:"0",zIndex:"99999999"}),null!=e._timer&&clearTimeout(e._timer),e._timer=setTimeout((function(){t._applyStyle({opacity:"1"})}),0)},e.prototype._hideIframe=function(){var t=this;this._applyStyle({opacity:"0"}),null!=e._timer&&clearTimeout(e._timer),e._timer=setTimeout((function(){t._applyStyle({width:"10px",height:"10px",left:"-100px",top:"-100px",position:"absolute",opacity:"0",zIndex:"0",display:"none"})}),200)},e.prototype._applyStyle=function(t){var e=this;Object.entries(t).forEach((function(t){var n=t[0],r=t[1];null!=r&&(e._iframe.style[n]=r)}))},e._timer=null,e}(o.Transport);e.TransportIframe=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(){function t(t){this.actions=[],this.maxLength=t}return Object.defineProperty(t.prototype,"length",{get:function(){return this.actions.length+(null==this.active?0:1)},enumerable:!0,configurable:!0}),t.prototype.push=function(t){return r.__awaiter(this,void 0,void 0,(function(){var e=this;return r.__generator(this,(function(n){if(this.actions.length>=this.maxLength)throw new Error("Cant't push action! Queue is full!");return[2,new Promise((function(n,o){e.actions.push((function(){return r.__awaiter(e,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,t().then((function(t){return n(t)}),o)]}))}))})),1===e.length&&e.run()}))]}))}))},t.prototype.canPush=function(){return this.actions.length<this.maxLength},t.prototype.run=function(){var t=this,e=this.actions.shift();null!=e&&(this.active=e(),this.active.finally((function(){t.active=void 0;var n=t.actions.indexOf(e);-1!==n&&t.actions.splice(n,1),t.run()})))},t}();e.Queue=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);!function(t){t[t.Event=0]="Event",t[t.Action=1]="Action",t[t.Response=2]="Response"}(e.EventType||(e.EventType={})),function(t){t[t.Success=0]="Success",t[t.Error=1]="Error"}(e.ResponseStatus||(e.ResponseStatus={}));var o=function(){function t(t,e){var n=this;this.id=r.uniqueId("bus"),this._timeout=e||5e3,this._adapter=t,this._adapter.addListener((function(t){return n._onMessage(t)})),this._eventHandlers=Object.create(null),this._activeRequestHash=Object.create(null),this._requestHandlers=Object.create(null),r.console.info('Create Bus with id "'+this.id+'"')}return t.prototype.dispatchEvent=function(e,n){return this._adapter.send(t._createEvent(e,n)),r.console.info('Dispatch event "'+e+'"',n),this},t.prototype.request=function(t,e,n){var o=this;return new Promise((function(i,s){var a,u=r.uniqueId(o.id+"-action"),c=n||o._timeout;-1!==(n||o._timeout)&&(a=setTimeout((function(){delete o._activeRequestHash[u];var e=new Error('Timeout error for request with name "'+t+'" and timeout '+c+"!");r.console.error(e),s(e)}),c));var f=function(){a&&clearTimeout(a)};o._activeRequestHash[u]={reject:function(e){f(),r.console.error('Error request with name "'+t+'"',e),s(e)},resolve:function(e){f(),r.console.info('Request with name "'+t+'" success resolved!',e),i(e)}},o._adapter.send({id:u,type:1,name:t,data:e}),r.console.info('Request with name "'+t+'"',e)}))},t.prototype.on=function(t,e,n){return this._addEventHandler(t,e,n,!1)},t.prototype.once=function(t,e,n){return this._addEventHandler(t,e,n,!0)},t.prototype.off=function(t,e){var n=this;return t?this._eventHandlers[t]?e?(this._eventHandlers[t]=this._eventHandlers[t].filter((function(t){return t.handler!==e})),this._eventHandlers[t].length||delete this._eventHandlers[t],this):(this._eventHandlers[t].slice().forEach((function(e){n.off(t,e.handler)})),this):this:(Object.keys(this._eventHandlers).forEach((function(t){return n.off(t,e)})),this)},t.prototype.registerRequestHandler=function(t,e){if(this._requestHandlers[t])throw new Error("Duplicate request handler!");return this._requestHandlers[t]=e,this},t.prototype.unregisterHandler=function(t){return this._requestHandlers[t]&&delete this._requestHandlers[t],this},t.prototype.changeAdapter=function(e){var n=this,r=new t(e,this._timeout);return Object.keys(this._eventHandlers).forEach((function(t){n._eventHandlers[t].forEach((function(e){e.once?r.once(t,e.handler,e.context):r.on(t,e.handler,e.context)}))})),Object.keys(this._requestHandlers).forEach((function(t){r.registerRequestHandler(t,n._requestHandlers[t])})),r},t.prototype.destroy=function(){r.console.info("Destroy Bus"),this.off(),this._adapter.destroy()},t.prototype._addEventHandler=function(t,e,n,r){return this._eventHandlers[t]||(this._eventHandlers[t]=[]),this._eventHandlers[t].push({handler:e,once:r,context:n}),this},t.prototype._onMessage=function(t){switch(t.type){case 0:r.console.info('Has event with name "'+String(t.name)+'"',t.data),this._fireEvent(String(t.name),t.data);break;case 1:r.console.info('Start action with id "'+t.id+'" and name "'+String(t.name)+'"',t.data),this._createResponse(t);break;case 2:r.console.info('Start response with name "'+t.id+'" and status "'+t.status+'"',t.content),this._fireEndAction(t)}},t.prototype._createResponse=function(e){var n=this,o=function(t){r.console.error(t),n._adapter.send({id:e.id,type:2,status:1,content:String(t)})};if(this._requestHandlers[String(e.name)])try{var i=this._requestHandlers[String(e.name)](e.data);t._isPromise(i)?i.then((function(t){n._adapter.send({id:e.id,type:2,status:0,content:t})}),o):this._adapter.send({id:e.id,type:2,status:0,content:i})}catch(t){o(t)}else o(new Error('Has no handler for "'+String(e.name)+'" action!'))},t.prototype._fireEndAction=function(t){if(this._activeRequestHash[t.id]){switch(t.status){case 1:this._activeRequestHash[t.id].reject(t.content);break;case 0:this._activeRequestHash[t.id].resolve(t.content)}delete this._activeRequestHash[t.id]}},t.prototype._fireEvent=function(t,e){this._eventHandlers[t]&&(this._eventHandlers[t]=this._eventHandlers[t].slice().filter((function(t){try{t.handler.call(t.context,e)}catch(t){r.console.warn(t)}return!t.once})),this._eventHandlers[t].length||delete this._eventHandlers[t])},t._createEvent=function(t,e){return{type:0,name:t,data:e}},t._isPromise=function(t){return t&&t.then&&"function"==typeof t.then},t}();e.Bus=o},function(t,e,n){"use strict";(function(t){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),i=n(2),s=(self||t).console,a=Object.create(null);function u(t){a[t]||(a[t]=[])}function c(t,e){a[t].push(e)}e.console=r({},i.keys(o.config.console.methodsData).reduce((function(t,e){return t[e]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];o.config.console.logLevel<o.config.console.methodsData[e].logLevel?o.config.console.methodsData[e].save&&(u(e),c(e,t)):s[e].apply(s,t)},t}),Object.create(null)),{getSavedMessages:function(t){return a[t]||[]}})}).call(this,n(14))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.size=0,this.hash=Object.create(null),t&&t.forEach(this.add,this)}return t.prototype.add=function(t){return this.hash[t]=!0,this.size=Object.keys(this.hash).length,this},t.prototype.has=function(t){return t in this.hash},t.prototype.toArray=function(){return Object.keys(this.hash)},t}();e.UniqPrimitiveCollection=r},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var s=n(6),a=n(1),u=n(7),c=n(2),f={origins:[],availableChanelId:[]},l=function(t){function e(n,r,o){var i=t.call(this)||this;return i.id=a.uniqueId("wa"),i.callbacks=[],i.options=e.prepareOptions(o),i.listen=n,i.dispatch=r,i.listen.forEach((function(t){return t.on("message",i.onMessage,i)})),i}return o(e,t),e.prototype.addListener=function(t){return this.callbacks.push(t),a.console.info("WindowAdapter: Add iframe message listener"),this},e.prototype.send=function(t){var e=i({},t,{chanelId:this.options.chanelId});return this.dispatch.forEach((function(t){return t.dispatch(e)})),a.console.info("WindowAdapter: Send message",e),this},e.prototype.destroy=function(){this.listen.forEach((function(t){return t.destroy()})),this.dispatch.forEach((function(t){return t.destroy()})),a.console.info("WindowAdapter: Destroy")},e.prototype.onMessage=function(t){this.accessEvent(t)&&this.callbacks.forEach((function(e){try{e(t.data)}catch(t){a.console.warn("WindowAdapter: Unhandled exception!",t)}}))},e.prototype.accessEvent=function(t){if("object"!=typeof t.data||null==t.data.type)return a.console.info("WindowAdapter: Block event. Wrong event format!",t.data),!1;if(!this.options.origins.has("*")&&!this.options.origins.has(t.origin))return a.console.info('SimpleWindowAdapter: Block event by origin "'+t.origin+'"'),!1;if(!this.options.availableChanelId.size)return!0;var e=!(!t.data.chanelId||!this.options.availableChanelId.has(t.data.chanelId));return e||a.console.info('SimpleWindowAdapter: Block event by chanel id "'+t.data.chanelId+'"'),e},e.createSimpleWindowAdapter=function(t,n){var r=this,o=this.getContentOrigin(t),i=this.prepareOptions(n),s=[];o&&i.origins.add(o);var a=new u.WindowProtocol(window,u.WindowProtocol.PROTOCOL_TYPES.LISTEN),c=function(t){s.push(t)};return a.on("message",c),this.getIframeContent(t).then((function(t){var n=new u.WindowProtocol(t.win,u.WindowProtocol.PROTOCOL_TYPES.DISPATCH),o=new e([a],[n],r.unPrepareOptions(i));return s.forEach((function(t){o.onMessage(t)})),a.off("message",c),o}))},e.prepareOptions=function(t){void 0===t&&(t=f);var e=function(t,e){return c.pipe(a.toArray,(n=e,function(t){return t.reduce((function(t,e){return t.add(e)}),n)}))(t);var n},n=e(t.origins||[],new a.UniqPrimitiveCollection([window.location.origin])),r=e(t.availableChanelId||[],new a.UniqPrimitiveCollection);return i({},t,{origins:n,availableChanelId:r})},e.unPrepareOptions=function(t){return{origins:t.origins.toArray(),availableChanelId:t.availableChanelId.toArray(),chanelId:t.chanelId}},e.getIframeContent=function(t){return t?t instanceof HTMLIFrameElement?t.contentWindow?Promise.resolve({win:t.contentWindow}):new Promise((function(e,n){t.addEventListener("load",(function(){return e({win:t.contentWindow})}),!1),t.addEventListener("error",n,!1)})):Promise.resolve({win:t}):Promise.resolve({win:window.opener||window.parent})},e.getContentOrigin=function(t){if(!t)try{return new URL(document.referrer).origin}catch(t){return null}if(!(t instanceof HTMLIFrameElement))try{return window.top.origin}catch(t){return null}try{return new URL(t.src).origin||null}catch(t){return null}},e}(s.Adapter);e.WindowAdapter=l},function(t,e,n){"use strict";e.__esModule=!0,function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(18))},function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function t(){this._events=Object.create(null)}return t.prototype.hasListeners=function(t){return!(!this._events[t]||!this._events[t].length)},t.prototype.getActiveEvents=function(){var t=this;return Object.keys(this._events).filter((function(e){return t.hasListeners(e)}))},t.prototype.trigger=function(t,e){this._events[t]&&(this._events[t]=this._events[t].filter((function(t){try{t.handler.call(t.context,e)}catch(t){}return!t.once})),this._events[t].length||delete this._events[t])},t.prototype.on=function(t,e,n){this._on(t,e,n,!1)},t.prototype.once=function(t,e,n){this._on(t,e,n,!0)},t.prototype.off=function(t,e){var n=this,r="string"==typeof t?t:null,o="function"==typeof e?e:"function"==typeof t?t:null;r?o?r in this._events&&(this._events[r]=this._events[r].filter((function(t){return t.handler!==o}))):delete this._events[r]:Object.keys(this._events).forEach((function(t){n.off(t,o)}))},t.prototype._on=function(t,e,n,r){this._events[t]||(this._events[t]=[]),this._events[t].push({handler:e,context:n,once:r})},t}();e.EventEmitter=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(3),i=n(1),s=function(t){function e(e,n){var r=t.call(this,n)||this;return r._url=e,r}return r.__extends(e,t),e.prototype.event=function(t){this._messageCallback=t},e.prototype.beforeShow=function(){},e.prototype.afterShow=function(){null!=this._active&&(this._active.win.close(),this._active.bus.destroy()),this._active=void 0},e.prototype.getBus=function(){return r.__awaiter(this,void 0,void 0,(function(){var t,e,n,o,s=this;return r.__generator(this,(function(r){switch(r.label){case 0:if(null!=this._active)return[2,Promise.resolve(this._active.bus)];if(t=window.open(this._url),e=new URL("",this._url).origin,null==t)throw new Error("Method must be called in user event!");return[4,i.WindowAdapter.createSimpleWindowAdapter(t,{origins:e})];case 1:return n=r.sent(),o=new i.Bus(n,-1),this._active={win:t,bus:o},[2,new Promise((function(t){o.once("ready",(function(){null!=s._messageCallback&&s._messageCallback(o),t()}))}))]}}))}))},e}(o.Transport);e.TransportWindow=s}])}));

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/api-node/addresses/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/api-node/addresses/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./node_modules/@waves/node-api-js/cjs/tools/request.js"));
var query_1 = __importDefault(__webpack_require__(/*! ../../tools/query */ "./node_modules/@waves/node-api-js/cjs/tools/query.js"));
function fetchDataKey(base, address, key, options) {
    return request_1.default({
        base: base,
        url: "/addresses/data/" + address + "/" + encodeURIComponent(key)
    });
}
exports.fetchDataKey = fetchDataKey;
function fetchScriptInfoMeta(base, address, options) {
    return request_1.default({
        base: base,
        url: "/addresses/scriptInfo/" + address + "/meta"
    });
}
exports.fetchScriptInfoMeta = fetchScriptInfoMeta;
function fetchBalanceDetails(base, address, options) {
    return request_1.default({
        base: base,
        url: "/addresses/balance/details/" + address
    });
}
exports.fetchBalanceDetails = fetchBalanceDetails;
function fetchBalanceConfirmations(base, address, confirmations, options) {
    return request_1.default({
        base: base,
        url: "/addresses/balance/" + address + "/" + confirmations
    });
}
exports.fetchBalanceConfirmations = fetchBalanceConfirmations;
function fetchScriptInfo(base, address, options) {
    return request_1.default({
        base: base,
        url: "/addresses/scriptInfo/" + address
    });
}
exports.fetchScriptInfo = fetchScriptInfo;
function data(base, address, params, options) {
    if (params === void 0) { params = Object.create(null); }
    return request_1.default({
        base: base,
        url: "/addresses/data/" + address + query_1.default(params)
    });
}
exports.data = data;
function fetchValidate(base, address, options) {
    return request_1.default({ base: base, url: "/addresses/validate/" + address });
}
exports.fetchValidate = fetchValidate;
function fetchBalance(base, address, options) {
    return request_1.default({ base: base, url: "/addresses/balance/" + address });
}
exports.fetchBalance = fetchBalance;
function fetchEffectiveBalanceConfirmations(base, address, confirmations) {
    return request_1.default({
        base: base,
        url: "/addresses/effectiveBalance/" + address + "/" + confirmations
    });
}
exports.fetchEffectiveBalanceConfirmations = fetchEffectiveBalanceConfirmations;
function fetchEffectiveBalance(base, address) {
    return request_1.default({
        base: base,
        url: "/addresses/effectiveBalance/" + address
    });
}
exports.fetchEffectiveBalance = fetchEffectiveBalance;
function fetchSeq(base, from, to) {
    return request_1.default({
        base: base,
        url: "/addresses/seq/" + from + "/" + to
    });
}
exports.fetchSeq = fetchSeq;
function fetchSeed(base, address) {
    return request_1.default({
        base: base,
        url: "/addresses/seed/" + address
    });
}
exports.fetchSeed = fetchSeed;
function fetchPublicKey(base, publicKey) {
    return request_1.default({
        base: base,
        url: "/addresses/publicKey/" + publicKey
    });
}
exports.fetchPublicKey = fetchPublicKey;
function fetchAddresses(base) {
    return request_1.default({
        base: base,
        url: '/addresses'
    });
}
exports.fetchAddresses = fetchAddresses;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/api-node/assets/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/api-node/assets/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./node_modules/@waves/node-api-js/cjs/tools/request.js"));
var utils_1 = __webpack_require__(/*! ../../tools/utils */ "./node_modules/@waves/node-api-js/cjs/tools/utils.js");
function fetchDetails(base, assetId) {
    var isOnce = !Array.isArray(assetId);
    return Promise.all(utils_1.toArray(assetId).map(function (id) { return request_1.default({ base: base, url: "/assets/details/" + id }); }))
        .then(function (list) { return isOnce ? list[0] : list; });
}
exports.fetchDetails = fetchDetails;
function fetchAssetDistribution(base, assetId, height, limit) {
    return request_1.default({ base: base, url: "/assets/" + assetId + "/distribution/" + height + "/limit/" + limit });
}
exports.fetchAssetDistribution = fetchAssetDistribution;
/**
 * TODO
 * GET /assets/{assetId}/distribution
 * Asset balance distribution
 */
function fetchAssetsAddressLimit(base, address, limit) {
    return request_1.default({ base: base, url: "assets/nft/" + address + "/limit/" + limit });
}
exports.fetchAssetsAddressLimit = fetchAssetsAddressLimit;
function fetchAssetsBalance(base, address) {
    return request_1.default({ base: base, url: "/assets/balance/" + address });
}
exports.fetchAssetsBalance = fetchAssetsBalance;
function fetchBalanceAddressAssetId(base, address, assetId) {
    return request_1.default({ base: base, url: "/assets/balance/" + address + "/" + assetId });
}
exports.fetchBalanceAddressAssetId = fetchBalanceAddressAssetId;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/api-node/blocks/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/api-node/blocks/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./node_modules/@waves/node-api-js/cjs/tools/request.js"));
/**
 * GET /blocks/headers/seq/{from}/{to}
 * Get block headers at specified heights
 * @param base
 * @param from
 * @param to
 */
function fetchHeadersSeq(base, from, to) {
    return request_1.default({
        base: base,
        url: "/blocks/headers/seq/" + from + "/" + to
    });
}
exports.fetchHeadersSeq = fetchHeadersSeq;
/**
 * GET /blocks/headers/last
 * Last block header
 * @param base
 */
function fetchHeadersLast(base, options) {
    return request_1.default({
        base: base,
        url: '/blocks/headers/last'
    });
}
exports.fetchHeadersLast = fetchHeadersLast;
/**
 * GET /blocks/height/{signature}
 * Height of a block by its signature
 * @param base
 * @param signature
 */
function fetchHeightBySignature(base, signature) {
    return request_1.default({
        base: base,
        url: "/blocks/height/" + signature
    });
}
exports.fetchHeightBySignature = fetchHeightBySignature;
/**
 * GET /blocks/headers/at/{height}
 * Block header at height
 * @param base
 * @param height
 */
function fetchHeadersAt(base, height, options) {
    return request_1.default({
        base: base,
        url: "/blocks/headers/at/" + height
    });
}
exports.fetchHeadersAt = fetchHeadersAt;
/**
 * GET /blocks/at/{height}
 * Get block at specified height
 * @param base
 * @param height
 */
function BlockAt(base, height) {
    return request_1.default({
        base: base,
        url: "/blocks/at/" + height
    });
}
exports.BlockAt = BlockAt;
/**
 * GET /blocks/seq/{from}/{to}
 * Block range
 * @param base
 * @param from
 * @param to
 */
function fetchSeq(base, from, to) {
    return request_1.default({
        base: base,
        url: "/blocks/seq/" + from + "/" + to
    });
}
exports.fetchSeq = fetchSeq;
/**
 * GET /blocks/signature/{signature}
 * Get block by its signature
 * @param base
 * @param signature
 */
function fetchBlockBySignature(base, signature) {
    return request_1.default({
        base: base,
        url: "/blocks/signature/" + signature
    });
}
exports.fetchBlockBySignature = fetchBlockBySignature;
/**
 * GET /blocks/first
 * Get genesis block
 * @param base
 */
function fetchFirst(base) {
    return request_1.default({
        base: base,
        url: "/blocks/first"
    });
}
exports.fetchFirst = fetchFirst;
/**
 * /blocks/address/{address}/{from}/{to}
 * Get list of blocks generated by specified address
 * @param base
 * @param address
 * @param from
 * @param to
 */
function fetchBlocksByAddress(base, address, from, to) {
    return request_1.default({
        base: base,
        url: "/blocks/address/" + address + "/" + from + "/" + to
    });
}
exports.fetchBlocksByAddress = fetchBlocksByAddress;
/**
 * GET /blocks/last
 * Last block
 * @param base
 */
function fetchLast(base) {
    return request_1.default({
        base: base,
        url: '/blocks/last'
    });
}
exports.fetchLast = fetchLast;
/**
 * GET /blocks/delay/{signature}/{blockNum}
 * Average delay in milliseconds between last blockNum blocks starting from block with signature
 * @param base
 * @param signature
 * @param blockNum
 */
function fetchDelay(base, signature, blockNum) {
    return request_1.default({
        base: base,
        url: "/blocks/delay/" + signature + "/" + blockNum
    });
}
exports.fetchDelay = fetchDelay;
/**
 * GET /blocks/height
 * @param base
 */
function fetchHeight(base) {
    return request_1.default({
        base: base,
        url: '/blocks/height'
    });
}
exports.fetchHeight = fetchHeight;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/api-node/transactions/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/api-node/transactions/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../../constants */ "./node_modules/@waves/node-api-js/cjs/constants.js");
var blocks_1 = __webpack_require__(/*! ../blocks */ "./node_modules/@waves/node-api-js/cjs/api-node/blocks/index.js");
var request_1 = __importDefault(__webpack_require__(/*! ../../tools/request */ "./node_modules/@waves/node-api-js/cjs/tools/request.js"));
var query_1 = __importDefault(__webpack_require__(/*! ../../tools/query */ "./node_modules/@waves/node-api-js/cjs/tools/query.js"));
var stringify_1 = __importDefault(__webpack_require__(/*! ../../tools/stringify */ "./node_modules/@waves/node-api-js/cjs/tools/stringify.js"));
/**
 * GET /transactions/unconfirmed/size
 * Number of unconfirmed transactions
 */
function fetchUnconfirmedSize(base) {
    return request_1.default({
        base: base,
        url: '/transactions/unconfirmed/size'
    });
}
exports.fetchUnconfirmedSize = fetchUnconfirmedSize;
// @TODO: when correct API key is received
/**
 * POST /transactions/sign/{signerAddress}
 * Sign a transaction with a non-default private key
 */
/**
* POST /transactions/calculateFee
* Calculate transaction fee
*/
function fetchCalculateFee(base, tx) {
    return request_1.default({
        base: base,
        url: '/transactions/calculateFee',
        options: {
            method: 'POST',
            body: stringify_1.default(tx),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.fetchCalculateFee = fetchCalculateFee;
/**
 * GET /transactions/unconfirmed
 * Unconfirmed transactions
 */
function fetchUnconfirmed(base) {
    return request_1.default({
        base: base,
        url: '/transactions/unconfirmed'
    });
}
exports.fetchUnconfirmed = fetchUnconfirmed;
/**
 * Список транзакций по адресу
 * @param address
 * @param limit      максимальное количество транзакций в результате
 * @param after      искать транзакции после ID указанного в after
 * @param retry      количество попыток на выполнение запроса
 */
function fetchTransactions(base, address, limit, after, retry) {
    return request_1.default({
        base: base,
        url: "/transactions/address/" + address + "/limit/" + limit + query_1.default({ after: after })
    }).then(function (_a) {
        var list = _a[0];
        return list;
    });
}
exports.fetchTransactions = fetchTransactions;
/**
 * GET /transactions/unconfirmed/info/{id}
 * Unconfirmed transaction info
 */
function fetchUnconfirmedInfo(base, id) {
    return request_1.default({
        base: base,
        url: "/transactions/unconfirmed/info/" + id
    });
}
exports.fetchUnconfirmedInfo = fetchUnconfirmedInfo;
// @TODO when correct API key is received
/**
 * POST /transactions/sign
 * Sign a transaction
 */
/**
 * GET /transactions/info/{id}
 * Transaction info
 */
function fetchInfo(base, id) {
    return request_1.default({ base: base, url: "/transactions/info/" + id });
}
exports.fetchInfo = fetchInfo;
function fetchStatus(base, list) {
    var DEFAULT_STATUS = {
        id: '',
        confirmations: -1,
        height: -1,
        inUTX: false,
        status: constants_1.TRANSACTION_STATUSES.NOT_FOUND
    };
    var loadAllTxInfo = list.map(function (id) {
        return fetchUnconfirmedInfo(base, id)
            .then(function () { return (__assign(__assign({}, DEFAULT_STATUS), { id: id, status: constants_1.TRANSACTION_STATUSES.UNCONFIRMED, inUTX: true })); })
            .catch(function () { return fetchInfo(base, id)
            .then(function (tx) { return (__assign(__assign({}, DEFAULT_STATUS), { id: id, status: constants_1.TRANSACTION_STATUSES.IN_BLOCKCHAIN, height: tx.height })); }); })
            .catch(function () { return (__assign(__assign({}, DEFAULT_STATUS), { id: id })); });
    });
    return Promise.all([
        blocks_1.fetchHeight(base),
        Promise.all(loadAllTxInfo)
    ]).then(function (_a) {
        var height = _a[0].height, statuses = _a[1];
        return ({
            height: height,
            statuses: statuses.map(function (item) { return (__assign(__assign({}, item), { confirmations: item.status === constants_1.TRANSACTION_STATUSES.IN_BLOCKCHAIN ? height - item.height : item.confirmations })); })
        });
    });
}
exports.fetchStatus = fetchStatus;
function broadcast(base, tx) {
    return request_1.default({
        base: base, url: '/transactions/broadcast',
        options: {
            method: 'POST',
            body: stringify_1.default(tx),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    });
}
exports.broadcast = broadcast;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPE_MAP = {
    3: 'issue',
    4: 'transfer',
    5: 'reissue',
    6: 'burn',
    7: 'exchange',
    8: 'lease',
    9: 'cancelLease',
    10: 'alias',
    11: 'massTransfer',
    12: 'data',
    13: 'setScript',
    14: 'sponsorship',
    15: 'setAssetScript',
    16: 'invoke'
};
exports.NAME_MAP = {
    'issue': 3,
    'transfer': 4,
    'reissue': 5,
    'burn': 6,
    'exchange': 7,
    'lease': 8,
    'cancelLease': 9,
    'alias': 10,
    'massTransfer': 11,
    'data': 12,
    'setScript': 13,
    'sponsorship': 14,
    'setAssetScript': 15,
    'invoke': 16
};
exports.TRANSACTION_STATUSES = {
    IN_BLOCKCHAIN: 'in_blockchain',
    UNCONFIRMED: 'unconfirmed',
    NOT_FOUND: 'not_found'
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/blocks/getNetworkByte.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/blocks/getNetworkByte.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var blocks_1 = __webpack_require__(/*! ../../api-node/blocks */ "./node_modules/@waves/node-api-js/cjs/api-node/blocks/index.js");
function default_1(base) {
    return blocks_1.fetchHeadersLast(base).then(function (header) { return base58Decode(header.generator)[1]; });
}
exports.default = default_1;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var ALPHABET_MAP = {};
for (var i = 0; i < ALPHABET.length; i++) {
    ALPHABET_MAP[ALPHABET.charAt(i)] = i;
}
function base58Decode(string) {
    var bytes, c, carry, j, i;
    if (string.length === 0) {
        return new Uint8Array(0);
    }
    i = void 0;
    j = void 0;
    bytes = [0];
    i = 0;
    while (i < string.length) {
        c = string[i];
        if (!(c in ALPHABET_MAP)) {
            throw 'Base58.decode received unacceptable input. Character \'' + c + '\' is not in the Base58 alphabet.';
        }
        j = 0;
        while (j < bytes.length) {
            bytes[j] *= 58;
            j++;
        }
        bytes[0] += ALPHABET_MAP[c];
        carry = 0;
        j = 0;
        while (j < bytes.length) {
            bytes[j] += carry;
            carry = bytes[j] >> 8;
            bytes[j] &= 0xff;
            ++j;
        }
        while (carry) {
            bytes.push(carry & 0xff);
            carry >>= 8;
        }
        i++;
    }
    i = 0;
    while (string[i] === '1' && i < string.length - 1) {
        bytes.push(0);
        i++;
    }
    return new Uint8Array(bytes.reverse());
}
//# sourceMappingURL=getNetworkByte.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/parse.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var reg = new RegExp('((?!\\\\)"\\w+"):\\s*(-?[\\d|\\.]{14,})', 'g');
function default_1(json) {
    return JSON.parse(json.replace(reg, "$1:\"$2\""));
}
exports.default = default_1;
//# sourceMappingURL=parse.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/query.js":
/*!************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/query.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(params, evolver) {
    if (evolver === void 0) { evolver = Object.create(null); }
    var query = Object.keys(params)
        .map(function (key) { return [key, params[key]]; })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, Object.prototype.hasOwnProperty.call(evolver, key) ? evolver[key](value) : value];
    })
        .filter(function (_a) {
        var key = _a[0], value = _a[1];
        return value != null;
    })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return key + "=" + value;
    })
        .join('&');
    return query.length ? "?" + query : '';
}
exports.default = default_1;
;
//# sourceMappingURL=query.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/request.js":
/*!**************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/request.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolve_1 = __importDefault(__webpack_require__(/*! ./resolve */ "./node_modules/@waves/node-api-js/cjs/tools/resolve.js"));
var parse_1 = __importDefault(__webpack_require__(/*! ./parse */ "./node_modules/@waves/node-api-js/cjs/tools/parse.js"));
var request = typeof fetch === 'function' ? fetch : __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
function default_1(params) {
    return request(resolve_1.default(params.url, params.base), updateHeaders(params.options))
        .then(parseResponse);
}
exports.default = default_1;
function parseResponse(r) {
    return r.text().then(function (message) { return r.ok ? parse_1.default(message) : Promise.reject(tryParse(message)); });
}
function tryParse(message) {
    try {
        return JSON.parse(message);
    }
    catch (e) {
        return message;
    }
}
function updateHeaders(options) {
    if (options === void 0) { options = Object.create(null); }
    options.credentials = 'include';
    return options;
}
//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/resolve.js":
/*!**************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/resolve.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(path, base) {
    return new URL(path, base).toString();
}
exports.default = default_1;
//# sourceMappingURL=resolve.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/stringify.js":
/*!****************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/stringify.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FIELDS = ['value', 'amount', 'matcherFee', 'price', 'fee', 'minSponsoredAssetFee', 'quantity', 'sellMatcherFee', 'buyMatcherFee'];
var reg = new RegExp("(?!\\\\)\"(" + FIELDS.join('|') + ")\":\\s*\"(-?\\d+)\"", 'g');
function default_1(data) {
    return JSON.stringify(data).replace(reg, '"$1":$2');
}
exports.default = default_1;
//# sourceMappingURL=stringify.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/transactions/broadcast.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/transactions/broadcast.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var transactions_1 = __webpack_require__(/*! ../../api-node/transactions */ "./node_modules/@waves/node-api-js/cjs/api-node/transactions/index.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@waves/node-api-js/cjs/tools/utils.js");
var wait_1 = __importDefault(__webpack_require__(/*! ./wait */ "./node_modules/@waves/node-api-js/cjs/tools/transactions/wait.js"));
var DEFAULT_BROADCAST_OPTIONS = {
    chain: false,
    confirmations: -1,
    maxWaitTime: 0,
    requestInterval: 0
};
function default_1(base, list, options) {
    var opt = __assign(__assign({}, DEFAULT_BROADCAST_OPTIONS), (options || {}));
    var isOnce = !Array.isArray(list);
    var confirmations = opt.confirmations > 0 ? 1 : 0;
    return (opt.chain
        ? chainBroadcast(base, utils_1.toArray(list), __assign(__assign({}, opt), { confirmations: confirmations }))
        : simpleBroadcast(base, utils_1.toArray(list)))
        .then(function (list) { return opt.confirmations <= 0 ? list : wait_1.default(base, list, opt); })
        .then(function (list) { return isOnce ? utils_1.head(list) : list; });
}
exports.default = default_1;
function simpleBroadcast(base, list) {
    return Promise.all(list.map(function (tx) { return transactions_1.broadcast(base, tx); }));
}
function chainBroadcast(base, list, options) {
    return new Promise(function (resolve, reject) {
        var toBroadcast = list.slice().reverse();
        var result = [];
        var loop = function () {
            if (!toBroadcast.length) {
                resolve(result);
                return null;
            }
            var tx = toBroadcast.pop();
            transactions_1.broadcast(base, tx)
                .then(function (tx) { return wait_1.default(base, tx, options); })
                .then(function (tx) {
                result.push(tx);
                loop();
            }, reject);
        };
        loop();
    });
}
//# sourceMappingURL=broadcast.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/transactions/wait.js":
/*!************************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/transactions/wait.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@waves/node-api-js/cjs/tools/utils.js");
var transactions_1 = __webpack_require__(/*! ../../api-node/transactions */ "./node_modules/@waves/node-api-js/cjs/api-node/transactions/index.js");
var constants_1 = __webpack_require__(/*! ../../constants */ "./node_modules/@waves/node-api-js/cjs/constants.js");
function default_1(base, tx, options) {
    var isOnce = !Array.isArray(tx);
    var start = Date.now();
    var confirmed = [];
    var confirmations = options && options.confirmations || 0;
    var maxWaitTime = options && options.maxWaitTime || 0;
    var requestInterval = options && options.requestInterval || 250;
    var waitTx = function (list) {
        return transactions_1.fetchStatus(base, list.map(utils_1.prop('id')))
            .then(function (status) {
            var hash = utils_1.indexBy(utils_1.prop('id'), status.statuses);
            var hasError = list.some(function (tx) { return hash[tx.id].status === constants_1.TRANSACTION_STATUSES.NOT_FOUND; });
            if (hasError) {
                throw new Error('One transaction is not in blockchain!');
            }
            var toRequest = list.filter(function (tx) {
                if (hash[tx.id].confirmations >= confirmations) {
                    confirmed.push(tx);
                    return false;
                }
                else {
                    return true;
                }
            });
            if (!toRequest.length) {
                return void 0;
            }
            if (maxWaitTime && Date.now() - start > maxWaitTime) {
                return Promise.reject('Timeout error!');
            }
            return utils_1.wait(requestInterval).then(function () { return waitTx(toRequest); });
        });
    };
    return waitTx(utils_1.toArray(tx)).then(function () { return isOnce ? utils_1.head(confirmed) : confirmed; });
}
exports.default = default_1;
//# sourceMappingURL=wait.js.map

/***/ }),

/***/ "./node_modules/@waves/node-api-js/cjs/tools/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/@waves/node-api-js/cjs/tools/utils.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function toArray(data) {
    return Array.isArray(data) ? data : [data];
}
exports.toArray = toArray;
function head(data) {
    return data[0];
}
exports.head = head;
function wait(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
exports.wait = wait;
function prop(key) {
    return function (data) { return data[key]; };
}
exports.prop = prop;
exports.keys = function (obj) {
    return Object.keys(obj);
};
exports.entries = function (obj) {
    return exports.keys(obj).map(function (name) { return [name, obj[name]]; });
};
exports.values = function (obj) {
    return exports.keys(obj).map(function (key) { return obj[key]; });
};
exports.assign = function (target, merge) {
    return exports.entries(merge).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        target[key] = value;
        return target;
    }, target);
};
function map(process) {
    return function (list) { return list.map(process); };
}
exports.map = map;
function filter(process) {
    return function (list) { return list.filter(process); };
}
exports.filter = filter;
function indexBy(process, data) {
    return data.reduce(function (acc, item) {
        acc[process(item)] = item;
        return acc;
    }, {});
}
exports.indexBy = indexBy;
exports.uniq = function (list) {
    return exports.keys(list.reduce(function (acc, item) {
        acc[item] = item;
        return acc;
    }, Object.create(null)));
};
function switchTransactionByType(choices) {
    return function (tx) { return choices[tx.type] && typeof choices[tx.type] === 'function' ? choices[tx.type](tx) : undefined; };
}
exports.switchTransactionByType = switchTransactionByType;
exports.pipe = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (data) { return args.reduce(function (acc, item) { return item(acc); }, data); };
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/@waves/waves-js/cjs/Waves.js":
/*!***************************************************!*\
  !*** ./node_modules/@waves/waves-js/cjs/Waves.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/@waves/waves-js/cjs/constants.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/@waves/waves-js/cjs/utils/index.js");
var transactions_1 = __webpack_require__(/*! ./utils/transactions */ "./node_modules/@waves/waves-js/cjs/utils/transactions.js");
var addresses_1 = __webpack_require__(/*! @waves/node-api-js/cjs/api-node/addresses */ "./node_modules/@waves/node-api-js/cjs/api-node/addresses/index.js");
var assets_1 = __webpack_require__(/*! @waves/node-api-js/cjs/api-node/assets */ "./node_modules/@waves/node-api-js/cjs/api-node/assets/index.js");
var wait_1 = __webpack_require__(/*! @waves/node-api-js/cjs/tools/transactions/wait */ "./node_modules/@waves/node-api-js/cjs/tools/transactions/wait.js");
var broadcast_1 = __webpack_require__(/*! @waves/node-api-js/cjs/tools/transactions/broadcast */ "./node_modules/@waves/node-api-js/cjs/tools/transactions/broadcast.js");
var getNetworkByte_1 = __webpack_require__(/*! @waves/node-api-js/cjs/tools/blocks/getNetworkByte */ "./node_modules/@waves/node-api-js/cjs/tools/blocks/getNetworkByte.js");
var Waves = /** @class */ (function () {
    function Waves(options) {
        this._options = __assign(__assign({}, constants_1.DEFAULT_OPTIONS), (options || {}));
        this._networkBytePromise = getNetworkByte_1.default(this._options.NODE_URL).then(function (byte) {
            return byte;
        });
    }
    Object.defineProperty(Waves.prototype, "_connectPromise", {
        get: function () {
            return this.__connectPromise || Promise.reject('Has no provider!');
        },
        set: function (promise) {
            this.__connectPromise = promise;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Запросить байт сети
     */
    Waves.prototype.getNetworkByte = function () {
        return this._networkBytePromise;
    };
    /**
     * Устанавливаем провайдер отвечающий за подпись
     * @param provider
     *
     * ```ts
     * import Waves from '@waves/waves-js';
     * import Provider from '@waves/seed-provider';
     *
     * const waves = new Waves();
     * waves.setProvider(new Provider('SEED'));
     * ```
     */
    Waves.prototype.setProvider = function (provider) {
        var _this = this;
        this.currentProvider = provider;
        var result = this._networkBytePromise.then(function (networkByte) {
            return provider.connect({
                NODE_URL: _this._options.NODE_URL,
                NETWORK_BYTE: networkByte,
            });
        });
        this._connectPromise = result.then(function () { return provider; });
        return result;
    };
    /**
     * Получаем список балансов пользователя (необходимо выполнить login перед использованием)
     * Basic usage example:
     *
     * ```ts
     * await waves.getBalance(); // Возвращает балансы пользователя
     * ```
     */
    Waves.prototype.getBalance = function () {
        if (!this._userData) {
            return Promise.reject(new Error('Need login for get balances!'));
        }
        var user = this._userData;
        return Promise.all([
            addresses_1.fetchBalanceDetails(this._options.NODE_URL, user.address)
                .then(function (data) { return ({
                assetId: 'WAVES',
                assetName: 'Waves',
                decimals: 8,
                amount: String(data.available),
                isMyAsset: false,
                tokens: Number(data.available) * Math.pow(10, 8),
                sponsorship: null,
                isSmart: false
            }); }),
            assets_1.fetchAssetsBalance(this._options.NODE_URL, user.address)
                .then(function (data) { return data.balances.map(function (item) { return ({
                assetId: item.assetId,
                assetName: item.issueTransaction.name,
                decimals: item.issueTransaction.decimals,
                amount: String(item.balance),
                isMyAsset: item.issueTransaction.sender === user.address,
                tokens: item.balance *
                    Math.pow(10, item.issueTransaction.decimals),
                isSmart: !!item.issueTransaction.script,
                sponsorship: item.sponsorBalance != null &&
                    item.sponsorBalance > Math.pow(10, 8) &&
                    (item.minSponsoredAssetFee || 0) < item.balance
                    ? item.minSponsoredAssetFee
                    : null,
            }); }); }),
        ]).then(function (_a) {
            var waves = _a[0], assets = _a[1];
            return __spreadArrays([waves], assets);
        });
    };
    /**
     * Получаем информацию о пользователе
     *
     * ```ts
     * await waves.login(); // Авторизуемся. Возвращает адрес и публичный ключ
     * ```
     */
    Waves.prototype.login = function () {
        var _this = this;
        return this._connectPromise
            .then(function (provider) { return provider.login(); })
            .then(function (data) {
            _this._userData = data;
            return data;
        });
    };
    /**
     * Вылогиниваемся из юзера
     */
    Waves.prototype.logout = function () {
        var _this = this;
        return this._connectPromise
            .then(function (provider) { return provider.logout(); })
            .then(function () {
            _this._userData = undefined;
        });
    };
    /**
     * Подписываем сообщение пользователя (провайдер может устанавливать префикс)
     * @param message
     */
    Waves.prototype.signMessage = function (message) {
        return this._connectPromise.then(function (provider) {
            return provider.signMessage(message);
        });
    };
    /**
     * Подписываем типизированные данные
     * @param data
     */
    Waves.prototype.signTypedData = function (data) {
        return this._connectPromise.then(function (provider) {
            return provider.signTypedData(data);
        });
    };
    /**
     * Получаем список балансов в кторых можно платить комиссию
     */
    Waves.prototype.getSponsoredBalances = function () {
        return this.getBalance().then(function (balance) {
            return balance.filter(function (item) { return !!item.sponsorship; });
        });
    };
    Waves.prototype.batch = function (txOrList) {
        var _this = this;
        var isOnce = !Array.isArray(txOrList);
        var sign = function () {
            return _this._sign(utils_1.toArray(txOrList)).then(function (result) {
                return isOnce ? result[0] : result;
            });
        };
        return {
            sign: sign,
            broadcast: function (opt) {
                return sign().then(function (transactions) {
                    return _this.broadcast(transactions, opt);
                });
            },
        };
    };
    Waves.prototype.issue = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('issue', data)]);
    };
    Waves.prototype.transfer = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('transfer', data)]);
    };
    Waves.prototype.reissue = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('reissue', data)]);
    };
    Waves.prototype.burn = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('burn', data)]);
    };
    Waves.prototype.lease = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('lease', data)]);
    };
    Waves.prototype.exchange = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('exchange', data)]);
    };
    Waves.prototype.cancelLease = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('cancelLease', data)]);
    };
    Waves.prototype.alias = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('alias', data)]);
    };
    Waves.prototype.massTransfer = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('massTransfer', data)]);
    };
    Waves.prototype.data = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('data', data)]);
    };
    Waves.prototype.sponsorship = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('sponsorship', data)]);
    };
    Waves.prototype.setScript = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('setScript', data)]);
    };
    Waves.prototype.setAssetScript = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('setAssetScript', data)]);
    };
    Waves.prototype.invoke = function (data) {
        return this._createPipelineAPI([transactions_1.addParamType('invoke', data)]);
    };
    Waves.prototype.broadcast = function (tx, opt) {
        return broadcast_1.default(this._options.NODE_URL, tx, opt); // TODO Fix types
    };
    Waves.prototype.waitTxConfirm = function (tx, confirmations) {
        return wait_1.default(this._options.NODE_URL, tx, { confirmations: confirmations }); // TODO Fix types
    };
    Waves.prototype._createPipelineAPI = function (list) {
        var _this = this;
        // TODO fix types
        var api = utils_1.evolve(constants_1.NAME_MAP, function (key, type) {
            return function (data) {
                return _this._createPipelineAPI(__spreadArrays(list, [__assign({ type: type }, data)]));
            };
        });
        return __assign(__assign({}, api), this._createActions(list));
    };
    Waves.prototype._createActions = function (list) {
        var _this = this;
        var sign = function () { return _this._sign(list); };
        var broadcast = function (options) {
            return sign().then(function (list) {
                return _this.broadcast(list, options);
            });
        };
        return { sign: sign, broadcast: broadcast };
    };
    Waves.prototype._sign = function (list) {
        return this._connectPromise.then(function (provider) {
            return provider.sign(list);
        });
    };
    return Waves;
}());
exports.Waves = Waves;
exports.default = Waves;
//# sourceMappingURL=Waves.js.map

/***/ }),

/***/ "./node_modules/@waves/waves-js/cjs/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/@waves/waves-js/cjs/constants.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPE_MAP = {
    3: 'issue',
    4: 'transfer',
    5: 'reissue',
    6: 'burn',
    7: 'exchange',
    8: 'lease',
    9: 'cancelLease',
    10: 'alias',
    11: 'massTransfer',
    12: 'data',
    13: 'setScript',
    14: 'sponsorship',
    15: 'setAssetScript',
    16: 'invoke'
};
exports.NAME_MAP = {
    'issue': 3,
    'transfer': 4,
    'reissue': 5,
    'burn': 6,
    'exchange': 7,
    'lease': 8,
    'cancelLease': 9,
    'alias': 10,
    'massTransfer': 11,
    'data': 12,
    'setScript': 13,
    'sponsorship': 14,
    'setAssetScript': 15,
    'invoke': 16
};
exports.DEFAULT_OPTIONS = {
    NODE_URL: 'https://nodes.wavesplatform.com',
    MATCHER_URL: 'https://nodes.wavesplatfomr.com/matcher'
};
exports.DEFAULT_BROADCAST_OPTIONS = {
    chain: false,
    confirmations: -1
};
exports.MAX_ALIAS_LENGTH = 30;
exports.SMART_ASSET_EXTRA_FEE = 0.004 * Math.pow(10, 8);
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@waves/waves-js/cjs/utils/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@waves/waves-js/cjs/utils/index.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(/*! ./object */ "./node_modules/@waves/waves-js/cjs/utils/object.js");
function toArray(data) {
    return Array.isArray(data) ? data : [data];
}
exports.toArray = toArray;
function wait(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}
exports.wait = wait;
function evolve(data, process) {
    return object_1.entries(data).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        acc[key] = process(key, value);
        return acc;
    }, {});
}
exports.evolve = evolve;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@waves/waves-js/cjs/utils/object.js":
/*!**********************************************************!*\
  !*** ./node_modules/@waves/waves-js/cjs/utils/object.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = function (obj) {
    return Object.keys(obj);
};
exports.entries = function (obj) {
    return Object.keys(obj).map(function (name) { return [name, obj[name]]; });
};
exports.values = function (obj) {
    return Object.keys(obj).map(function (key) { return obj[key]; });
};
//# sourceMappingURL=object.js.map

/***/ }),

/***/ "./node_modules/@waves/waves-js/cjs/utils/transactions.js":
/*!****************************************************************!*\
  !*** ./node_modules/@waves/waves-js/cjs/utils/transactions.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@waves/waves-js/cjs/constants.js");
function addParamType(name, data) {
    return __assign(__assign({}, data), { type: constants_1.NAME_MAP[name] });
}
exports.addParamType = addParamType;
//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var waves_js_1 = __importDefault(__webpack_require__(/*! @waves/waves-js */ "./node_modules/@waves/waves-js/cjs/Waves.js"));
var storage_provider_1 = __importDefault(__webpack_require__(/*! @waves.exchange/storage-provider */ "./node_modules/@waves.exchange/storage-provider/dist/storage-provider.min.js"));
var provider = new storage_provider_1.default();
exports.waves = new waves_js_1.default();
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = "\n    .waves__donate-button {\n        background: rgb(73, 80, 96); color: white; padding: 20px 30px; border-radius: 5px; border: none; font-size: 20px;\n    }".trim();
document.getElementsByTagName('head')[0].appendChild(style);
exports.waves.setProvider(provider);
function donate(element, amount) {
    exports.waves
        .transfer({
        recipient: element.getAttribute("data-recipient"),
        amount: amount,
        assetId: "WAVES"
    })
        .broadcast()
        .then(function () {
        element.innerHTML = 'Spasiba!';
    }, function (e) {
        element.innerHTML = 'Deneg net!';
    });
}
exports.donate = donate;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kQXBwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzLmV4Y2hhbmdlL3N0b3JhZ2UtcHJvdmlkZXIvZGlzdC9zdG9yYWdlLXByb3ZpZGVyLm1pbi5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvYXBpLW5vZGUvYWRkcmVzc2VzL2luZGV4LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy9hcGktbm9kZS9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL2FwaS1ub2RlL2Jsb2Nrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvYXBpLW5vZGUvdHJhbnNhY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL2Jsb2Nrcy9nZXROZXR3b3JrQnl0ZS5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvdG9vbHMvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL3F1ZXJ5LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy9yZXF1ZXN0LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy9yZXNvbHZlLmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL3RyYW5zYWN0aW9ucy9icm9hZGNhc3QuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL3RyYW5zYWN0aW9ucy93YWl0LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy91dGlscy5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy93YXZlcy1qcy9janMvV2F2ZXMuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvd2F2ZXMtanMvY2pzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy93YXZlcy1qcy9janMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvd2F2ZXMtanMvY2pzL3V0aWxzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy93YXZlcy1qcy9janMvdXRpbHMvdHJhbnNhY3Rpb25zLmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9icm93c2VyLmpzIiwid2VicGFjazovL2RBcHAvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNB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T0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0JBQWtCLG1CQUFPLENBQUMscUVBQWM7QUFDeEM7QUFDQSwrQkFBK0IsVUFBVSxtQ0FBbUM7QUFDNUU7QUFDQTtBQUNBLHdDOzs7Ozs7Ozs7Ozs7O0FDbEJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsYUFBYTtBQUNoRCxxQ0FBcUMsZUFBZTtBQUNwRCxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7O0FDdEJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQ0FBaUMsbUJBQU8sQ0FBQyxvRUFBaUI7QUFDMUQseUNBQXlDLG1CQUFPLENBQUMsc0hBQWtDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNDQUFzQyxjQUFjLG9CQUFvQixvQkFBb0IsY0FBYyxpQkFBaUIsT0FBTztBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6ImRhcHAtc2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkQXBwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRBcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGUpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuc3RvcmFnZVByb3ZpZGVyPWUoKTp0LnN0b3JhZ2VQcm92aWRlcj1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBvPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUscil7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCluLmQocixvLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9OCl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKGUpLG4uZChlLFwiX19leHRlbmRzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIG99KSksbi5kKGUsXCJfX2Fzc2lnblwiLChmdW5jdGlvbigpe3JldHVybiBpfSkpLG4uZChlLFwiX19yZXN0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHN9KSksbi5kKGUsXCJfX2RlY29yYXRlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KSksbi5kKGUsXCJfX3BhcmFtXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSksbi5kKGUsXCJfX21ldGFkYXRhXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSksbi5kKGUsXCJfX2F3YWl0ZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZn0pKSxuLmQoZSxcIl9fZ2VuZXJhdG9yXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGx9KSksbi5kKGUsXCJfX2V4cG9ydFN0YXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gaH0pKSxuLmQoZSxcIl9fdmFsdWVzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGR9KSksbi5kKGUsXCJfX3JlYWRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gcH0pKSxuLmQoZSxcIl9fc3ByZWFkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIF99KSksbi5kKGUsXCJfX3NwcmVhZEFycmF5c1wiLChmdW5jdGlvbigpe3JldHVybiB2fSkpLG4uZChlLFwiX19hd2FpdFwiLChmdW5jdGlvbigpe3JldHVybiB5fSkpLG4uZChlLFwiX19hc3luY0dlbmVyYXRvclwiLChmdW5jdGlvbigpe3JldHVybiBnfSkpLG4uZChlLFwiX19hc3luY0RlbGVnYXRvclwiLChmdW5jdGlvbigpe3JldHVybiB3fSkpLG4uZChlLFwiX19hc3luY1ZhbHVlc1wiLChmdW5jdGlvbigpe3JldHVybiBtfSkpLG4uZChlLFwiX19tYWtlVGVtcGxhdGVPYmplY3RcIiwoZnVuY3Rpb24oKXtyZXR1cm4gYn0pKSxuLmQoZSxcIl9faW1wb3J0U3RhclwiLChmdW5jdGlvbigpe3JldHVybiBPfSkpLG4uZChlLFwiX19pbXBvcnREZWZhdWx0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFB9KSk7XG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXG5cblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbnZhciByPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHI9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShuKSYmKHRbbl09ZVtuXSl9KSh0LGUpfTtmdW5jdGlvbiBvKHQsZSl7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9dH1yKHQsZSksdC5wcm90b3R5cGU9bnVsbD09PWU/T2JqZWN0LmNyZWF0ZShlKToobi5wcm90b3R5cGU9ZS5wcm90b3R5cGUsbmV3IG4pfXZhciBpPWZ1bmN0aW9uKCl7cmV0dXJuKGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbbl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtmdW5jdGlvbiBzKHQsZSl7dmFyIG49e307Zm9yKHZhciByIGluIHQpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQscikmJmUuaW5kZXhPZihyKTwwJiYobltyXT10W3JdKTtpZihudWxsIT10JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihyPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7bzxyLmxlbmd0aDtvKyspZS5pbmRleE9mKHJbb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0LHJbb10pJiYobltyW29dXT10W3Jbb11dKX1yZXR1cm4gbn1mdW5jdGlvbiBhKHQsZSxuLHIpe3ZhciBvLGk9YXJndW1lbnRzLmxlbmd0aCxzPWk8Mz9lOm51bGw9PT1yP3I9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLG4pOnI7aWYoXCJvYmplY3RcIj09dHlwZW9mIFJlZmxlY3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUpcz1SZWZsZWN0LmRlY29yYXRlKHQsZSxuLHIpO2Vsc2UgZm9yKHZhciBhPXQubGVuZ3RoLTE7YT49MDthLS0pKG89dFthXSkmJihzPShpPDM/byhzKTppPjM/byhlLG4scyk6byhlLG4pKXx8cyk7cmV0dXJuIGk+MyYmcyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbixzKSxzfWZ1bmN0aW9uIHUodCxlKXtyZXR1cm4gZnVuY3Rpb24obixyKXtlKG4scix0KX19ZnVuY3Rpb24gYyh0LGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhKXJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKHQsZSl9ZnVuY3Rpb24gZih0LGUsbixyKXtyZXR1cm4gbmV3KG58fChuPVByb21pc2UpKSgoZnVuY3Rpb24obyxpKXtmdW5jdGlvbiBzKHQpe3RyeXt1KHIubmV4dCh0KSl9Y2F0Y2godCl7aSh0KX19ZnVuY3Rpb24gYSh0KXt0cnl7dShyLnRocm93KHQpKX1jYXRjaCh0KXtpKHQpfX1mdW5jdGlvbiB1KHQpe3QuZG9uZT9vKHQudmFsdWUpOm5ldyBuKChmdW5jdGlvbihlKXtlKHQudmFsdWUpfSkpLnRoZW4ocyxhKX11KChyPXIuYXBwbHkodCxlfHxbXSkpLm5leHQoKSl9KSl9ZnVuY3Rpb24gbCh0LGUpe3ZhciBuLHIsbyxpLHM9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIGk9e25leHQ6YSgwKSx0aHJvdzphKDEpLHJldHVybjphKDIpfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihpW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pLGk7ZnVuY3Rpb24gYShpKXtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGkpe2lmKG4pdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7Zm9yKDtzOyl0cnl7aWYobj0xLHImJihvPTImaVswXT9yLnJldHVybjppWzBdP3IudGhyb3d8fCgobz1yLnJldHVybikmJm8uY2FsbChyKSwwKTpyLm5leHQpJiYhKG89by5jYWxsKHIsaVsxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKHI9MCxvJiYoaT1bMiZpWzBdLG8udmFsdWVdKSxpWzBdKXtjYXNlIDA6Y2FzZSAxOm89aTticmVhaztjYXNlIDQ6cmV0dXJuIHMubGFiZWwrKyx7dmFsdWU6aVsxXSxkb25lOiExfTtjYXNlIDU6cy5sYWJlbCsrLHI9aVsxXSxpPVswXTtjb250aW51ZTtjYXNlIDc6aT1zLm9wcy5wb3AoKSxzLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89KG89cy50cnlzKS5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSkmJig2PT09aVswXXx8Mj09PWlbMF0pKXtzPTA7Y29udGludWV9aWYoMz09PWlbMF0mJighb3x8aVsxXT5vWzBdJiZpWzFdPG9bM10pKXtzLmxhYmVsPWlbMV07YnJlYWt9aWYoNj09PWlbMF0mJnMubGFiZWw8b1sxXSl7cy5sYWJlbD1vWzFdLG89aTticmVha31pZihvJiZzLmxhYmVsPG9bMl0pe3MubGFiZWw9b1syXSxzLm9wcy5wdXNoKGkpO2JyZWFrfW9bMl0mJnMub3BzLnBvcCgpLHMudHJ5cy5wb3AoKTtjb250aW51ZX1pPWUuY2FsbCh0LHMpfWNhdGNoKHQpe2k9WzYsdF0scj0wfWZpbmFsbHl7bj1vPTB9aWYoNSZpWzBdKXRocm93IGlbMV07cmV0dXJue3ZhbHVlOmlbMF0/aVsxXTp2b2lkIDAsZG9uZTohMH19KFtpLGFdKX19fWZ1bmN0aW9uIGgodCxlKXtmb3IodmFyIG4gaW4gdCllLmhhc093blByb3BlcnR5KG4pfHwoZVtuXT10W25dKX1mdW5jdGlvbiBkKHQpe3ZhciBlPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdFtTeW1ib2wuaXRlcmF0b3JdLG49MDtyZXR1cm4gZT9lLmNhbGwodCk6e25leHQ6ZnVuY3Rpb24oKXtyZXR1cm4gdCYmbj49dC5sZW5ndGgmJih0PXZvaWQgMCkse3ZhbHVlOnQmJnRbbisrXSxkb25lOiF0fX19fWZ1bmN0aW9uIHAodCxlKXt2YXIgbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXTtpZighbilyZXR1cm4gdDt2YXIgcixvLGk9bi5jYWxsKHQpLHM9W107dHJ5e2Zvcig7KHZvaWQgMD09PWV8fGUtLSA+MCkmJiEocj1pLm5leHQoKSkuZG9uZTspcy5wdXNoKHIudmFsdWUpfWNhdGNoKHQpe289e2Vycm9yOnR9fWZpbmFsbHl7dHJ5e3ImJiFyLmRvbmUmJihuPWkucmV0dXJuKSYmbi5jYWxsKGkpfWZpbmFsbHl7aWYobyl0aHJvdyBvLmVycm9yfX1yZXR1cm4gc31mdW5jdGlvbiBfKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXQ9dC5jb25jYXQocChhcmd1bWVudHNbZV0pKTtyZXR1cm4gdH1mdW5jdGlvbiB2KCl7Zm9yKHZhciB0PTAsZT0wLG49YXJndW1lbnRzLmxlbmd0aDtlPG47ZSsrKXQrPWFyZ3VtZW50c1tlXS5sZW5ndGg7dmFyIHI9QXJyYXkodCksbz0wO2ZvcihlPTA7ZTxuO2UrKylmb3IodmFyIGk9YXJndW1lbnRzW2VdLHM9MCxhPWkubGVuZ3RoO3M8YTtzKyssbysrKXJbb109aVtzXTtyZXR1cm4gcn1mdW5jdGlvbiB5KHQpe3JldHVybiB0aGlzIGluc3RhbmNlb2YgeT8odGhpcy52PXQsdGhpcyk6bmV3IHkodCl9ZnVuY3Rpb24gZyh0LGUsbil7aWYoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7dmFyIHIsbz1uLmFwcGx5KHQsZXx8W10pLGk9W107cmV0dXJuIHI9e30scyhcIm5leHRcIikscyhcInRocm93XCIpLHMoXCJyZXR1cm5cIikscltTeW1ib2wuYXN5bmNJdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30scjtmdW5jdGlvbiBzKHQpe29bdF0mJihyW3RdPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24obixyKXtpLnB1c2goW3QsZSxuLHJdKT4xfHxhKHQsZSl9KSl9KX1mdW5jdGlvbiBhKHQsZSl7dHJ5eyhuPW9bdF0oZSkpLnZhbHVlIGluc3RhbmNlb2YgeT9Qcm9taXNlLnJlc29sdmUobi52YWx1ZS52KS50aGVuKHUsYyk6ZihpWzBdWzJdLG4pfWNhdGNoKHQpe2YoaVswXVszXSx0KX12YXIgbn1mdW5jdGlvbiB1KHQpe2EoXCJuZXh0XCIsdCl9ZnVuY3Rpb24gYyh0KXthKFwidGhyb3dcIix0KX1mdW5jdGlvbiBmKHQsZSl7dChlKSxpLnNoaWZ0KCksaS5sZW5ndGgmJmEoaVswXVswXSxpWzBdWzFdKX19ZnVuY3Rpb24gdyh0KXt2YXIgZSxuO3JldHVybiBlPXt9LHIoXCJuZXh0XCIpLHIoXCJ0aHJvd1wiLChmdW5jdGlvbih0KXt0aHJvdyB0fSkpLHIoXCJyZXR1cm5cIiksZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGU7ZnVuY3Rpb24gcihyLG8pe2Vbcl09dFtyXT9mdW5jdGlvbihlKXtyZXR1cm4obj0hbik/e3ZhbHVlOnkodFtyXShlKSksZG9uZTpcInJldHVyblwiPT09cn06bz9vKGUpOmV9Om99fWZ1bmN0aW9uIG0odCl7aWYoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7dmFyIGUsbj10W1N5bWJvbC5hc3luY0l0ZXJhdG9yXTtyZXR1cm4gbj9uLmNhbGwodCk6KHQ9ZCh0KSxlPXt9LHIoXCJuZXh0XCIpLHIoXCJ0aHJvd1wiKSxyKFwicmV0dXJuXCIpLGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LGUpO2Z1bmN0aW9uIHIobil7ZVtuXT10W25dJiZmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHIsbyl7KGZ1bmN0aW9uKHQsZSxuLHIpe1Byb21pc2UucmVzb2x2ZShyKS50aGVuKChmdW5jdGlvbihlKXt0KHt2YWx1ZTplLGRvbmU6bn0pfSksZSl9KShyLG8sKGU9dFtuXShlKSkuZG9uZSxlLnZhbHVlKX0pKX19fWZ1bmN0aW9uIGIodCxlKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwicmF3XCIse3ZhbHVlOmV9KTp0LnJhdz1lLHR9ZnVuY3Rpb24gTyh0KXtpZih0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIGU9e307aWYobnVsbCE9dClmb3IodmFyIG4gaW4gdClPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pJiYoZVtuXT10W25dKTtyZXR1cm4gZS5kZWZhdWx0PXQsZX1mdW5jdGlvbiBQKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe2Zvcih2YXIgbiBpbiB0KWUuaGFzT3duUHJvcGVydHkobil8fChlW25dPXRbbl0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIobigxMikpLHIobig2KSkscihuKDE2KSkscihuKDcpKSxyKG4oNSkpLHIobig0KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmtleXM9ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5rZXlzKHQpfTt2YXIgcj1NYXRoLmZsb29yKERhdGUubm93KCkqTWF0aC5yYW5kb20oKSksbz0wO2UudW5pcXVlSWQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQrXCItXCIrcitcIi1cIitvKyt9LGUudG9BcnJheT1mdW5jdGlvbih0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT90Olt0XX0sZS5waXBlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7ZSsrKXRbZV09YXJndW1lbnRzW2VdO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUodCl9KSxlKX19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigwKSxvPW4oMTEpLGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3RoaXMucXVldWU9bmV3IG8uUXVldWUodCl9cmV0dXJuIHQucHJvdG90eXBlLmRpYWxvZz1mdW5jdGlvbih0KXtyZXR1cm4gci5fX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLG4sbyxpLHM9dGhpcztyZXR1cm4gci5fX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihhKXtzd2l0Y2goYS5sYWJlbCl7Y2FzZSAwOnJldHVybiB0aGlzLnJ1bkJlZm9yZVNob3coKSxbNCx0aGlzLmdldEJ1cygpXTtjYXNlIDE6aWYoZT1hLnNlbnQoKSxuPWZ1bmN0aW9uKCl7cmV0dXJuIHIuX19hd2FpdGVyKHMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gci5fX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihuKXtyZXR1cm5bMix0KGUpXX0pKX0pKX0sIXRoaXMucXVldWUuY2FuUHVzaCgpKXJldHVyblszLDZdO2EubGFiZWw9MjtjYXNlIDI6cmV0dXJuIGEudHJ5cy5wdXNoKFsyLDQsLDVdKSxbNCx0aGlzLnF1ZXVlLnB1c2gobildO2Nhc2UgMzpyZXR1cm4gbz1hLnNlbnQoKSx0aGlzLnJ1bkFmdGVyU2hvdygpLFsyLG9dO2Nhc2UgNDpyZXR1cm4gaT1hLnNlbnQoKSx0aGlzLnJ1bkFmdGVyU2hvdygpLFsyLFByb21pc2UucmVqZWN0KGkpXTtjYXNlIDU6cmV0dXJuWzMsN107Y2FzZSA2OnJldHVyblsyLFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIlF1ZXVlIGlzIGZ1bGwhXCIpKV07Y2FzZSA3OnJldHVyblsyXX19KSl9KSl9LHQucHJvdG90eXBlLnJ1bkJlZm9yZVNob3c9ZnVuY3Rpb24oKXswPT09dGhpcy5xdWV1ZS5sZW5ndGgmJnRoaXMuYmVmb3JlU2hvdygpfSx0LnByb3RvdHlwZS5ydW5BZnRlclNob3c9ZnVuY3Rpb24oKXswPT09dGhpcy5xdWV1ZS5sZW5ndGgmJnRoaXMuYWZ0ZXJTaG93KCl9LHR9KCk7ZS5UcmFuc3BvcnQ9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIodCl7Zm9yKHZhciBuIGluIHQpZS5oYXNPd25Qcm9wZXJ0eShuKXx8KGVbbl09dFtuXSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSkscihuKDIpKSxyKG4oMTMpKSxyKG4oMTUpKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGZ1bmN0aW9uKHQpeyFmdW5jdGlvbih0KXt0LkxPR19MRVZFTD17UFJPRFVDVElPTjowLEVSUk9SUzoxLFZFUkJPU0U6Mn0sdC5sb2dMZXZlbD10LkxPR19MRVZFTC5QUk9EVUNUSU9OLHQubWV0aG9kc0RhdGE9e2xvZzp7c2F2ZTohMSxsb2dMZXZlbDp0LkxPR19MRVZFTC5WRVJCT1NFfSxpbmZvOntzYXZlOiExLGxvZ0xldmVsOnQuTE9HX0xFVkVMLlZFUkJPU0V9LHdhcm46e3NhdmU6ITEsbG9nTGV2ZWw6dC5MT0dfTEVWRUwuVkVSQk9TRX0sZXJyb3I6e3NhdmU6ITAsbG9nTGV2ZWw6dC5MT0dfTEVWRUwuRVJST1JTfX19KHQuY29uc29sZXx8KHQuY29uc29sZT17fSkpfShlLmNvbmZpZ3x8KGUuY29uZmlnPXt9KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe307ZS5BZGFwdGVyPXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcixvPXRoaXMmJnRoaXMuX19leHRlbmRzfHwocj1mdW5jdGlvbih0LGUpe3JldHVybihyPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKWUuaGFzT3duUHJvcGVydHkobikmJih0W25dPWVbbl0pfSkodCxlKX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj10fXIodCxlKSx0LnByb3RvdHlwZT1udWxsPT09ZT9PYmplY3QuY3JlYXRlKGUpOihuLnByb3RvdHlwZT1lLnByb3RvdHlwZSxuZXcgbil9KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKG4scil7dmFyIG89dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBvLndpbj1uLG8udHlwZT1yLG8uaGFuZGxlcj1mdW5jdGlvbih0KXtvLnRyaWdnZXIoXCJtZXNzYWdlXCIsdCl9LHI9PT1lLlBST1RPQ09MX1RZUEVTLkxJU1RFTiYmby53aW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixvLmhhbmRsZXIsITEpLG99dmFyIG47cmV0dXJuIG8oZSx0KSxlLnByb3RvdHlwZS5kaXNwYXRjaD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy53aW4ucG9zdE1lc3NhZ2UodCxcIipcIiksdGhpc30sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMudHlwZT09PWUuUFJPVE9DT0xfVFlQRVMuTElTVEVOJiZ0aGlzLndpbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLHRoaXMuaGFuZGxlciwhMSksdGhpcy53aW49ZS5fZmFrZVdpbn0sZS5fZmFrZVdpbj17cG9zdE1lc3NhZ2U6bj1mdW5jdGlvbigpe3JldHVybiBudWxsfSxhZGRFdmVudExpc3RlbmVyOm4scmVtb3ZlRXZlbnRMaXN0ZW5lcjpufSxlfShuKDE3KS5FdmVudEVtaXR0ZXIpO2UuV2luZG93UHJvdG9jb2w9aSxmdW5jdGlvbih0KXt0LlBST1RPQ09MX1RZUEVTPXtMSVNURU46XCJsaXN0ZW5cIixESVNQQVRDSDpcImRpc3BhdGNoXCJ9fShpPWUuV2luZG93UHJvdG9jb2x8fChlLldpbmRvd1Byb3RvY29sPXt9KSksZS5XaW5kb3dQcm90b2NvbD1pfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9big5KTtlLlN0b3JhZ2VQcm92aWRlcj1yLlN0b3JhZ2VQcm92aWRlcixlLmRlZmF1bHQ9ci5TdG9yYWdlUHJvdmlkZXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDApLG89bigxMCksaT1uKDE5KSxzPW4oMSksYT1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXt0PXR8fFwiaHR0cHM6Ly93YXZlcy5leGNoYW5nZS9zaWduZXJcIjt2YXIgbj1vLlRyYW5zcG9ydElmcmFtZS5jYW5Vc2UoKT9vLlRyYW5zcG9ydElmcmFtZTppLlRyYW5zcG9ydFdpbmRvdzt0aGlzLl90cmFuc3BvcnQ9bmV3IG4odCwzKSxudWxsIT1lJiYocy5jb25maWcuY29uc29sZS5sb2dMZXZlbD1zLmNvbmZpZy5jb25zb2xlLkxPR19MRVZFTC5WRVJCT1NFKX1yZXR1cm4gdC5wcm90b3R5cGUuY29ubmVjdD1mdW5jdGlvbih0KXtyZXR1cm4gci5fX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiByLl9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKGUpe3JldHVyblsyLFByb21pc2UucmVzb2x2ZSh0aGlzLl90cmFuc3BvcnQuZXZlbnQoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmRpc3BhdGNoRXZlbnQoXCJjb25uZWN0XCIsdCl9KSkpXX0pKX0pKX0sdC5wcm90b3R5cGUubG9nb3V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RyYW5zcG9ydC5kaWFsb2coKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcXVlc3QoXCJsb2dvdXRcIil9KSl9LHQucHJvdG90eXBlLmxvZ2luPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RyYW5zcG9ydC5kaWFsb2coKGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcXVlc3QoXCJsb2dpblwiKX0pKX0sdC5wcm90b3R5cGUuc2lnbk1lc3NhZ2U9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3RyYW5zcG9ydC5kaWFsb2coKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcXVlc3QoXCJzaWduLW1lc3NhZ2VcIix0KX0pKX0sdC5wcm90b3R5cGUuc2lnblR5cGVkRGF0YT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fdHJhbnNwb3J0LmRpYWxvZygoZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVxdWVzdChcInNpZ24tdHlwZWQtZGF0YVwiLHQpfSkpfSx0LnByb3RvdHlwZS5zaWduPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl90cmFuc3BvcnQuZGlhbG9nKChmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXF1ZXN0KFwic2lnblwiLHQpfSkpfSx0fSgpO2UuU3RvcmFnZVByb3ZpZGVyPWF9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDApLG89bigzKSxpPW4oMSkscz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKG4scil7dmFyIG89dC5jYWxsKHRoaXMscil8fHRoaXM7cmV0dXJuIG8uX2lmcmFtZT1lLl9jcmVhdGVJZnJhbWUobiksby5fcmVhZHk9aS5XaW5kb3dBZGFwdGVyLmNyZWF0ZVNpbXBsZVdpbmRvd0FkYXB0ZXIoby5faWZyYW1lKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm4gby5faGlkZUlmcmFtZSgpLG5ldyBpLkJ1cyh0LC0xKX0pKSxvLl9hZGRJZnJhbWVUb0RvbSgpLG99cmV0dXJuIHIuX19leHRlbmRzKGUsdCksZS5jYW5Vc2U9ZnVuY3Rpb24oKXt2YXIgdD1uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksZT10LmluY2x1ZGVzKFwic2FmYXJpXCIpJiYhdC5pbmNsdWRlcyhcImNocm9tZVwiKTtyZXR1cm4hKG51bGwhPW5hdmlnYXRvci5wbGF0Zm9ybSYmL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKXx8ZSl9LGUuX2NyZWF0ZUlmcmFtZT1mdW5jdGlvbih0KXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO3JldHVybiBlLnN0eWxlLnRyYW5zaXRpb249XCJvcGFjaXR5IC4yc1wiLGUuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnNyYz10LGV9LGUucHJvdG90eXBlLmV2ZW50PWZ1bmN0aW9uKHQpe3RoaXMuX3JlYWR5LnRoZW4oKGZ1bmN0aW9uKGUpe3QoZSl9KSl9LGUucHJvdG90eXBlLmdldEJ1cz1mdW5jdGlvbigpe3JldHVybiByLl9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIHIuX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24odCl7cmV0dXJuWzIsdGhpcy5fcmVhZHldfSkpfSkpfSxlLnByb3RvdHlwZS5iZWZvcmVTaG93PWZ1bmN0aW9uKCl7dGhpcy5fc2hvd0lmcmFtZSgpfSxlLnByb3RvdHlwZS5hZnRlclNob3c9ZnVuY3Rpb24oKXt0aGlzLl9oaWRlSWZyYW1lKCl9LGUucHJvdG90eXBlLl9hZGRJZnJhbWVUb0RvbT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7bnVsbCE9ZG9jdW1lbnQuYm9keT9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuX2lmcmFtZSk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoZnVuY3Rpb24oKXtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQuX2lmcmFtZSl9KSl9LGUucHJvdG90eXBlLl9zaG93SWZyYW1lPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLl9hcHBseVN0eWxlKHt3aWR0aDpcIjEwMCVcIixoZWlnaHQ6XCIxMDAlXCIsbGVmdDpcIjBcIix0b3A6XCIwXCIsYm9yZGVyOlwibm9uZVwiLHBvc2l0aW9uOlwiZml4ZWRcIixkaXNwbGF5OlwiYmxvY2tcIixvcGFjaXR5OlwiMFwiLHpJbmRleDpcIjk5OTk5OTk5XCJ9KSxudWxsIT1lLl90aW1lciYmY2xlYXJUaW1lb3V0KGUuX3RpbWVyKSxlLl90aW1lcj1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuX2FwcGx5U3R5bGUoe29wYWNpdHk6XCIxXCJ9KX0pLDApfSxlLnByb3RvdHlwZS5faGlkZUlmcmFtZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5fYXBwbHlTdHlsZSh7b3BhY2l0eTpcIjBcIn0pLG51bGwhPWUuX3RpbWVyJiZjbGVhclRpbWVvdXQoZS5fdGltZXIpLGUuX3RpbWVyPXNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7dC5fYXBwbHlTdHlsZSh7d2lkdGg6XCIxMHB4XCIsaGVpZ2h0OlwiMTBweFwiLGxlZnQ6XCItMTAwcHhcIix0b3A6XCItMTAwcHhcIixwb3NpdGlvbjpcImFic29sdXRlXCIsb3BhY2l0eTpcIjBcIix6SW5kZXg6XCIwXCIsZGlzcGxheTpcIm5vbmVcIn0pfSksMjAwKX0sZS5wcm90b3R5cGUuX2FwcGx5U3R5bGU9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztPYmplY3QuZW50cmllcyh0KS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgbj10WzBdLHI9dFsxXTtudWxsIT1yJiYoZS5faWZyYW1lLnN0eWxlW25dPXIpfSkpfSxlLl90aW1lcj1udWxsLGV9KG8uVHJhbnNwb3J0KTtlLlRyYW5zcG9ydElmcmFtZT1zfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigwKSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt0aGlzLmFjdGlvbnM9W10sdGhpcy5tYXhMZW5ndGg9dH1yZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwibGVuZ3RoXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmFjdGlvbnMubGVuZ3RoKyhudWxsPT10aGlzLmFjdGl2ZT8wOjEpfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLHQucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24odCl7cmV0dXJuIHIuX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiByLl9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKG4pe2lmKHRoaXMuYWN0aW9ucy5sZW5ndGg+PXRoaXMubWF4TGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkNhbnQndCBwdXNoIGFjdGlvbiEgUXVldWUgaXMgZnVsbCFcIik7cmV0dXJuWzIsbmV3IFByb21pc2UoKGZ1bmN0aW9uKG4sbyl7ZS5hY3Rpb25zLnB1c2goKGZ1bmN0aW9uKCl7cmV0dXJuIHIuX19hd2FpdGVyKGUsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gci5fX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihlKXtyZXR1cm5bMix0KCkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIG4odCl9KSxvKV19KSl9KSl9KSksMT09PWUubGVuZ3RoJiZlLnJ1bigpfSkpXX0pKX0pKX0sdC5wcm90b3R5cGUuY2FuUHVzaD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmFjdGlvbnMubGVuZ3RoPHRoaXMubWF4TGVuZ3RofSx0LnByb3RvdHlwZS5ydW49ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dGhpcy5hY3Rpb25zLnNoaWZ0KCk7bnVsbCE9ZSYmKHRoaXMuYWN0aXZlPWUoKSx0aGlzLmFjdGl2ZS5maW5hbGx5KChmdW5jdGlvbigpe3QuYWN0aXZlPXZvaWQgMDt2YXIgbj10LmFjdGlvbnMuaW5kZXhPZihlKTstMSE9PW4mJnQuYWN0aW9ucy5zcGxpY2UobiwxKSx0LnJ1bigpfSkpKX0sdH0oKTtlLlF1ZXVlPW99LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDQpOyFmdW5jdGlvbih0KXt0W3QuRXZlbnQ9MF09XCJFdmVudFwiLHRbdC5BY3Rpb249MV09XCJBY3Rpb25cIix0W3QuUmVzcG9uc2U9Ml09XCJSZXNwb25zZVwifShlLkV2ZW50VHlwZXx8KGUuRXZlbnRUeXBlPXt9KSksZnVuY3Rpb24odCl7dFt0LlN1Y2Nlc3M9MF09XCJTdWNjZXNzXCIsdFt0LkVycm9yPTFdPVwiRXJyb3JcIn0oZS5SZXNwb25zZVN0YXR1c3x8KGUuUmVzcG9uc2VTdGF0dXM9e30pKTt2YXIgbz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXt2YXIgbj10aGlzO3RoaXMuaWQ9ci51bmlxdWVJZChcImJ1c1wiKSx0aGlzLl90aW1lb3V0PWV8fDVlMyx0aGlzLl9hZGFwdGVyPXQsdGhpcy5fYWRhcHRlci5hZGRMaXN0ZW5lcigoZnVuY3Rpb24odCl7cmV0dXJuIG4uX29uTWVzc2FnZSh0KX0pKSx0aGlzLl9ldmVudEhhbmRsZXJzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fYWN0aXZlUmVxdWVzdEhhc2g9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLl9yZXF1ZXN0SGFuZGxlcnM9T2JqZWN0LmNyZWF0ZShudWxsKSxyLmNvbnNvbGUuaW5mbygnQ3JlYXRlIEJ1cyB3aXRoIGlkIFwiJyt0aGlzLmlkKydcIicpfXJldHVybiB0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50PWZ1bmN0aW9uKGUsbil7cmV0dXJuIHRoaXMuX2FkYXB0ZXIuc2VuZCh0Ll9jcmVhdGVFdmVudChlLG4pKSxyLmNvbnNvbGUuaW5mbygnRGlzcGF0Y2ggZXZlbnQgXCInK2UrJ1wiJyxuKSx0aGlzfSx0LnByb3RvdHlwZS5yZXF1ZXN0PWZ1bmN0aW9uKHQsZSxuKXt2YXIgbz10aGlzO3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24oaSxzKXt2YXIgYSx1PXIudW5pcXVlSWQoby5pZCtcIi1hY3Rpb25cIiksYz1ufHxvLl90aW1lb3V0Oy0xIT09KG58fG8uX3RpbWVvdXQpJiYoYT1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2RlbGV0ZSBvLl9hY3RpdmVSZXF1ZXN0SGFzaFt1XTt2YXIgZT1uZXcgRXJyb3IoJ1RpbWVvdXQgZXJyb3IgZm9yIHJlcXVlc3Qgd2l0aCBuYW1lIFwiJyt0KydcIiBhbmQgdGltZW91dCAnK2MrXCIhXCIpO3IuY29uc29sZS5lcnJvcihlKSxzKGUpfSksYykpO3ZhciBmPWZ1bmN0aW9uKCl7YSYmY2xlYXJUaW1lb3V0KGEpfTtvLl9hY3RpdmVSZXF1ZXN0SGFzaFt1XT17cmVqZWN0OmZ1bmN0aW9uKGUpe2YoKSxyLmNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlcXVlc3Qgd2l0aCBuYW1lIFwiJyt0KydcIicsZSkscyhlKX0scmVzb2x2ZTpmdW5jdGlvbihlKXtmKCksci5jb25zb2xlLmluZm8oJ1JlcXVlc3Qgd2l0aCBuYW1lIFwiJyt0KydcIiBzdWNjZXNzIHJlc29sdmVkIScsZSksaShlKX19LG8uX2FkYXB0ZXIuc2VuZCh7aWQ6dSx0eXBlOjEsbmFtZTp0LGRhdGE6ZX0pLHIuY29uc29sZS5pbmZvKCdSZXF1ZXN0IHdpdGggbmFtZSBcIicrdCsnXCInLGUpfSkpfSx0LnByb3RvdHlwZS5vbj1mdW5jdGlvbih0LGUsbil7cmV0dXJuIHRoaXMuX2FkZEV2ZW50SGFuZGxlcih0LGUsbiwhMSl9LHQucHJvdG90eXBlLm9uY2U9ZnVuY3Rpb24odCxlLG4pe3JldHVybiB0aGlzLl9hZGRFdmVudEhhbmRsZXIodCxlLG4sITApfSx0LnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzO3JldHVybiB0P3RoaXMuX2V2ZW50SGFuZGxlcnNbdF0/ZT8odGhpcy5fZXZlbnRIYW5kbGVyc1t0XT10aGlzLl9ldmVudEhhbmRsZXJzW3RdLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHQuaGFuZGxlciE9PWV9KSksdGhpcy5fZXZlbnRIYW5kbGVyc1t0XS5sZW5ndGh8fGRlbGV0ZSB0aGlzLl9ldmVudEhhbmRsZXJzW3RdLHRoaXMpOih0aGlzLl9ldmVudEhhbmRsZXJzW3RdLnNsaWNlKCkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7bi5vZmYodCxlLmhhbmRsZXIpfSkpLHRoaXMpOnRoaXM6KE9iamVjdC5rZXlzKHRoaXMuX2V2ZW50SGFuZGxlcnMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiBuLm9mZih0LGUpfSkpLHRoaXMpfSx0LnByb3RvdHlwZS5yZWdpc3RlclJlcXVlc3RIYW5kbGVyPWZ1bmN0aW9uKHQsZSl7aWYodGhpcy5fcmVxdWVzdEhhbmRsZXJzW3RdKXRocm93IG5ldyBFcnJvcihcIkR1cGxpY2F0ZSByZXF1ZXN0IGhhbmRsZXIhXCIpO3JldHVybiB0aGlzLl9yZXF1ZXN0SGFuZGxlcnNbdF09ZSx0aGlzfSx0LnByb3RvdHlwZS51bnJlZ2lzdGVySGFuZGxlcj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fcmVxdWVzdEhhbmRsZXJzW3RdJiZkZWxldGUgdGhpcy5fcmVxdWVzdEhhbmRsZXJzW3RdLHRoaXN9LHQucHJvdG90eXBlLmNoYW5nZUFkYXB0ZXI9ZnVuY3Rpb24oZSl7dmFyIG49dGhpcyxyPW5ldyB0KGUsdGhpcy5fdGltZW91dCk7cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2V2ZW50SGFuZGxlcnMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe24uX2V2ZW50SGFuZGxlcnNbdF0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5vbmNlP3Iub25jZSh0LGUuaGFuZGxlcixlLmNvbnRleHQpOnIub24odCxlLmhhbmRsZXIsZS5jb250ZXh0KX0pKX0pKSxPYmplY3Qua2V5cyh0aGlzLl9yZXF1ZXN0SGFuZGxlcnMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3IucmVnaXN0ZXJSZXF1ZXN0SGFuZGxlcih0LG4uX3JlcXVlc3RIYW5kbGVyc1t0XSl9KSkscn0sdC5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3IuY29uc29sZS5pbmZvKFwiRGVzdHJveSBCdXNcIiksdGhpcy5vZmYoKSx0aGlzLl9hZGFwdGVyLmRlc3Ryb3koKX0sdC5wcm90b3R5cGUuX2FkZEV2ZW50SGFuZGxlcj1mdW5jdGlvbih0LGUsbixyKXtyZXR1cm4gdGhpcy5fZXZlbnRIYW5kbGVyc1t0XXx8KHRoaXMuX2V2ZW50SGFuZGxlcnNbdF09W10pLHRoaXMuX2V2ZW50SGFuZGxlcnNbdF0ucHVzaCh7aGFuZGxlcjplLG9uY2U6cixjb250ZXh0Om59KSx0aGlzfSx0LnByb3RvdHlwZS5fb25NZXNzYWdlPWZ1bmN0aW9uKHQpe3N3aXRjaCh0LnR5cGUpe2Nhc2UgMDpyLmNvbnNvbGUuaW5mbygnSGFzIGV2ZW50IHdpdGggbmFtZSBcIicrU3RyaW5nKHQubmFtZSkrJ1wiJyx0LmRhdGEpLHRoaXMuX2ZpcmVFdmVudChTdHJpbmcodC5uYW1lKSx0LmRhdGEpO2JyZWFrO2Nhc2UgMTpyLmNvbnNvbGUuaW5mbygnU3RhcnQgYWN0aW9uIHdpdGggaWQgXCInK3QuaWQrJ1wiIGFuZCBuYW1lIFwiJytTdHJpbmcodC5uYW1lKSsnXCInLHQuZGF0YSksdGhpcy5fY3JlYXRlUmVzcG9uc2UodCk7YnJlYWs7Y2FzZSAyOnIuY29uc29sZS5pbmZvKCdTdGFydCByZXNwb25zZSB3aXRoIG5hbWUgXCInK3QuaWQrJ1wiIGFuZCBzdGF0dXMgXCInK3Quc3RhdHVzKydcIicsdC5jb250ZW50KSx0aGlzLl9maXJlRW5kQWN0aW9uKHQpfX0sdC5wcm90b3R5cGUuX2NyZWF0ZVJlc3BvbnNlPWZ1bmN0aW9uKGUpe3ZhciBuPXRoaXMsbz1mdW5jdGlvbih0KXtyLmNvbnNvbGUuZXJyb3IodCksbi5fYWRhcHRlci5zZW5kKHtpZDplLmlkLHR5cGU6MixzdGF0dXM6MSxjb250ZW50OlN0cmluZyh0KX0pfTtpZih0aGlzLl9yZXF1ZXN0SGFuZGxlcnNbU3RyaW5nKGUubmFtZSldKXRyeXt2YXIgaT10aGlzLl9yZXF1ZXN0SGFuZGxlcnNbU3RyaW5nKGUubmFtZSldKGUuZGF0YSk7dC5faXNQcm9taXNlKGkpP2kudGhlbigoZnVuY3Rpb24odCl7bi5fYWRhcHRlci5zZW5kKHtpZDplLmlkLHR5cGU6MixzdGF0dXM6MCxjb250ZW50OnR9KX0pLG8pOnRoaXMuX2FkYXB0ZXIuc2VuZCh7aWQ6ZS5pZCx0eXBlOjIsc3RhdHVzOjAsY29udGVudDppfSl9Y2F0Y2godCl7byh0KX1lbHNlIG8obmV3IEVycm9yKCdIYXMgbm8gaGFuZGxlciBmb3IgXCInK1N0cmluZyhlLm5hbWUpKydcIiBhY3Rpb24hJykpfSx0LnByb3RvdHlwZS5fZmlyZUVuZEFjdGlvbj1mdW5jdGlvbih0KXtpZih0aGlzLl9hY3RpdmVSZXF1ZXN0SGFzaFt0LmlkXSl7c3dpdGNoKHQuc3RhdHVzKXtjYXNlIDE6dGhpcy5fYWN0aXZlUmVxdWVzdEhhc2hbdC5pZF0ucmVqZWN0KHQuY29udGVudCk7YnJlYWs7Y2FzZSAwOnRoaXMuX2FjdGl2ZVJlcXVlc3RIYXNoW3QuaWRdLnJlc29sdmUodC5jb250ZW50KX1kZWxldGUgdGhpcy5fYWN0aXZlUmVxdWVzdEhhc2hbdC5pZF19fSx0LnByb3RvdHlwZS5fZmlyZUV2ZW50PWZ1bmN0aW9uKHQsZSl7dGhpcy5fZXZlbnRIYW5kbGVyc1t0XSYmKHRoaXMuX2V2ZW50SGFuZGxlcnNbdF09dGhpcy5fZXZlbnRIYW5kbGVyc1t0XS5zbGljZSgpLmZpbHRlcigoZnVuY3Rpb24odCl7dHJ5e3QuaGFuZGxlci5jYWxsKHQuY29udGV4dCxlKX1jYXRjaCh0KXtyLmNvbnNvbGUud2Fybih0KX1yZXR1cm4hdC5vbmNlfSkpLHRoaXMuX2V2ZW50SGFuZGxlcnNbdF0ubGVuZ3RofHxkZWxldGUgdGhpcy5fZXZlbnRIYW5kbGVyc1t0XSl9LHQuX2NyZWF0ZUV2ZW50PWZ1bmN0aW9uKHQsZSl7cmV0dXJue3R5cGU6MCxuYW1lOnQsZGF0YTplfX0sdC5faXNQcm9taXNlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0LnRoZW4mJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQudGhlbn0sdH0oKTtlLkJ1cz1vfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7KGZ1bmN0aW9uKHQpe3ZhciByPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKHI9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbbl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1uKDUpLGk9bigyKSxzPShzZWxmfHx0KS5jb25zb2xlLGE9T2JqZWN0LmNyZWF0ZShudWxsKTtmdW5jdGlvbiB1KHQpe2FbdF18fChhW3RdPVtdKX1mdW5jdGlvbiBjKHQsZSl7YVt0XS5wdXNoKGUpfWUuY29uc29sZT1yKHt9LGkua2V5cyhvLmNvbmZpZy5jb25zb2xlLm1ldGhvZHNEYXRhKS5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbZV09ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sbj0wO248YXJndW1lbnRzLmxlbmd0aDtuKyspdFtuXT1hcmd1bWVudHNbbl07by5jb25maWcuY29uc29sZS5sb2dMZXZlbDxvLmNvbmZpZy5jb25zb2xlLm1ldGhvZHNEYXRhW2VdLmxvZ0xldmVsP28uY29uZmlnLmNvbnNvbGUubWV0aG9kc0RhdGFbZV0uc2F2ZSYmKHUoZSksYyhlLHQpKTpzW2VdLmFwcGx5KHMsdCl9LHR9KSxPYmplY3QuY3JlYXRlKG51bGwpKSx7Z2V0U2F2ZWRNZXNzYWdlczpmdW5jdGlvbih0KXtyZXR1cm4gYVt0XXx8W119fSl9KS5jYWxsKHRoaXMsbigxNCkpfSxmdW5jdGlvbih0LGUpe3ZhciBuO249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKTt0cnl7bj1ufHxuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKHQpe1wib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJihuPXdpbmRvdyl9dC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dGhpcy5zaXplPTAsdGhpcy5oYXNoPU9iamVjdC5jcmVhdGUobnVsbCksdCYmdC5mb3JFYWNoKHRoaXMuYWRkLHRoaXMpfXJldHVybiB0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaGFzaFt0XT0hMCx0aGlzLnNpemU9T2JqZWN0LmtleXModGhpcy5oYXNoKS5sZW5ndGgsdGhpc30sdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluIHRoaXMuaGFzaH0sdC5wcm90b3R5cGUudG9BcnJheT1mdW5jdGlvbigpe3JldHVybiBPYmplY3Qua2V5cyh0aGlzLmhhc2gpfSx0fSgpO2UuVW5pcVByaW1pdGl2ZUNvbGxlY3Rpb249cn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByLG89dGhpcyYmdGhpcy5fX2V4dGVuZHN8fChyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHI9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsZSl7dC5fX3Byb3RvX189ZX18fGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShuKSYmKHRbbl09ZVtuXSl9KSh0LGUpfSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPXR9cih0LGUpLHQucHJvdG90eXBlPW51bGw9PT1lP09iamVjdC5jcmVhdGUoZSk6KG4ucHJvdG90eXBlPWUucHJvdG90eXBlLG5ldyBuKX0pLGk9dGhpcyYmdGhpcy5fX2Fzc2lnbnx8ZnVuY3Rpb24oKXtyZXR1cm4oaT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbih0KXtmb3IodmFyIGUsbj0xLHI9YXJndW1lbnRzLmxlbmd0aDtuPHI7bisrKWZvcih2YXIgbyBpbiBlPWFyZ3VtZW50c1tuXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxvKSYmKHRbb109ZVtvXSk7cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPW4oNiksYT1uKDEpLHU9big3KSxjPW4oMiksZj17b3JpZ2luczpbXSxhdmFpbGFibGVDaGFuZWxJZDpbXX0sbD1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKG4scixvKXt2YXIgaT10LmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIGkuaWQ9YS51bmlxdWVJZChcIndhXCIpLGkuY2FsbGJhY2tzPVtdLGkub3B0aW9ucz1lLnByZXBhcmVPcHRpb25zKG8pLGkubGlzdGVuPW4saS5kaXNwYXRjaD1yLGkubGlzdGVuLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiB0Lm9uKFwibWVzc2FnZVwiLGkub25NZXNzYWdlLGkpfSkpLGl9cmV0dXJuIG8oZSx0KSxlLnByb3RvdHlwZS5hZGRMaXN0ZW5lcj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jYWxsYmFja3MucHVzaCh0KSxhLmNvbnNvbGUuaW5mbyhcIldpbmRvd0FkYXB0ZXI6IEFkZCBpZnJhbWUgbWVzc2FnZSBsaXN0ZW5lclwiKSx0aGlzfSxlLnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKHQpe3ZhciBlPWkoe30sdCx7Y2hhbmVsSWQ6dGhpcy5vcHRpb25zLmNoYW5lbElkfSk7cmV0dXJuIHRoaXMuZGlzcGF0Y2guZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQuZGlzcGF0Y2goZSl9KSksYS5jb25zb2xlLmluZm8oXCJXaW5kb3dBZGFwdGVyOiBTZW5kIG1lc3NhZ2VcIixlKSx0aGlzfSxlLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5saXN0ZW4uZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQuZGVzdHJveSgpfSkpLHRoaXMuZGlzcGF0Y2guZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHQuZGVzdHJveSgpfSkpLGEuY29uc29sZS5pbmZvKFwiV2luZG93QWRhcHRlcjogRGVzdHJveVwiKX0sZS5wcm90b3R5cGUub25NZXNzYWdlPWZ1bmN0aW9uKHQpe3RoaXMuYWNjZXNzRXZlbnQodCkmJnRoaXMuY2FsbGJhY2tzLmZvckVhY2goKGZ1bmN0aW9uKGUpe3RyeXtlKHQuZGF0YSl9Y2F0Y2godCl7YS5jb25zb2xlLndhcm4oXCJXaW5kb3dBZGFwdGVyOiBVbmhhbmRsZWQgZXhjZXB0aW9uIVwiLHQpfX0pKX0sZS5wcm90b3R5cGUuYWNjZXNzRXZlbnQ9ZnVuY3Rpb24odCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHQuZGF0YXx8bnVsbD09dC5kYXRhLnR5cGUpcmV0dXJuIGEuY29uc29sZS5pbmZvKFwiV2luZG93QWRhcHRlcjogQmxvY2sgZXZlbnQuIFdyb25nIGV2ZW50IGZvcm1hdCFcIix0LmRhdGEpLCExO2lmKCF0aGlzLm9wdGlvbnMub3JpZ2lucy5oYXMoXCIqXCIpJiYhdGhpcy5vcHRpb25zLm9yaWdpbnMuaGFzKHQub3JpZ2luKSlyZXR1cm4gYS5jb25zb2xlLmluZm8oJ1NpbXBsZVdpbmRvd0FkYXB0ZXI6IEJsb2NrIGV2ZW50IGJ5IG9yaWdpbiBcIicrdC5vcmlnaW4rJ1wiJyksITE7aWYoIXRoaXMub3B0aW9ucy5hdmFpbGFibGVDaGFuZWxJZC5zaXplKXJldHVybiEwO3ZhciBlPSEoIXQuZGF0YS5jaGFuZWxJZHx8IXRoaXMub3B0aW9ucy5hdmFpbGFibGVDaGFuZWxJZC5oYXModC5kYXRhLmNoYW5lbElkKSk7cmV0dXJuIGV8fGEuY29uc29sZS5pbmZvKCdTaW1wbGVXaW5kb3dBZGFwdGVyOiBCbG9jayBldmVudCBieSBjaGFuZWwgaWQgXCInK3QuZGF0YS5jaGFuZWxJZCsnXCInKSxlfSxlLmNyZWF0ZVNpbXBsZVdpbmRvd0FkYXB0ZXI9ZnVuY3Rpb24odCxuKXt2YXIgcj10aGlzLG89dGhpcy5nZXRDb250ZW50T3JpZ2luKHQpLGk9dGhpcy5wcmVwYXJlT3B0aW9ucyhuKSxzPVtdO28mJmkub3JpZ2lucy5hZGQobyk7dmFyIGE9bmV3IHUuV2luZG93UHJvdG9jb2wod2luZG93LHUuV2luZG93UHJvdG9jb2wuUFJPVE9DT0xfVFlQRVMuTElTVEVOKSxjPWZ1bmN0aW9uKHQpe3MucHVzaCh0KX07cmV0dXJuIGEub24oXCJtZXNzYWdlXCIsYyksdGhpcy5nZXRJZnJhbWVDb250ZW50KHQpLnRoZW4oKGZ1bmN0aW9uKHQpe3ZhciBuPW5ldyB1LldpbmRvd1Byb3RvY29sKHQud2luLHUuV2luZG93UHJvdG9jb2wuUFJPVE9DT0xfVFlQRVMuRElTUEFUQ0gpLG89bmV3IGUoW2FdLFtuXSxyLnVuUHJlcGFyZU9wdGlvbnMoaSkpO3JldHVybiBzLmZvckVhY2goKGZ1bmN0aW9uKHQpe28ub25NZXNzYWdlKHQpfSkpLGEub2ZmKFwibWVzc2FnZVwiLGMpLG99KSl9LGUucHJlcGFyZU9wdGlvbnM9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9Zik7dmFyIGU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gYy5waXBlKGEudG9BcnJheSwobj1lLGZ1bmN0aW9uKHQpe3JldHVybiB0LnJlZHVjZSgoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5hZGQoZSl9KSxuKX0pKSh0KTt2YXIgbn0sbj1lKHQub3JpZ2luc3x8W10sbmV3IGEuVW5pcVByaW1pdGl2ZUNvbGxlY3Rpb24oW3dpbmRvdy5sb2NhdGlvbi5vcmlnaW5dKSkscj1lKHQuYXZhaWxhYmxlQ2hhbmVsSWR8fFtdLG5ldyBhLlVuaXFQcmltaXRpdmVDb2xsZWN0aW9uKTtyZXR1cm4gaSh7fSx0LHtvcmlnaW5zOm4sYXZhaWxhYmxlQ2hhbmVsSWQ6cn0pfSxlLnVuUHJlcGFyZU9wdGlvbnM9ZnVuY3Rpb24odCl7cmV0dXJue29yaWdpbnM6dC5vcmlnaW5zLnRvQXJyYXkoKSxhdmFpbGFibGVDaGFuZWxJZDp0LmF2YWlsYWJsZUNoYW5lbElkLnRvQXJyYXkoKSxjaGFuZWxJZDp0LmNoYW5lbElkfX0sZS5nZXRJZnJhbWVDb250ZW50PWZ1bmN0aW9uKHQpe3JldHVybiB0P3QgaW5zdGFuY2VvZiBIVE1MSUZyYW1lRWxlbWVudD90LmNvbnRlbnRXaW5kb3c/UHJvbWlzZS5yZXNvbHZlKHt3aW46dC5jb250ZW50V2luZG93fSk6bmV3IFByb21pc2UoKGZ1bmN0aW9uKGUsbil7dC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLChmdW5jdGlvbigpe3JldHVybiBlKHt3aW46dC5jb250ZW50V2luZG93fSl9KSwhMSksdC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixuLCExKX0pKTpQcm9taXNlLnJlc29sdmUoe3dpbjp0fSk6UHJvbWlzZS5yZXNvbHZlKHt3aW46d2luZG93Lm9wZW5lcnx8d2luZG93LnBhcmVudH0pfSxlLmdldENvbnRlbnRPcmlnaW49ZnVuY3Rpb24odCl7aWYoIXQpdHJ5e3JldHVybiBuZXcgVVJMKGRvY3VtZW50LnJlZmVycmVyKS5vcmlnaW59Y2F0Y2godCl7cmV0dXJuIG51bGx9aWYoISh0IGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQpKXRyeXtyZXR1cm4gd2luZG93LnRvcC5vcmlnaW59Y2F0Y2godCl7cmV0dXJuIG51bGx9dHJ5e3JldHVybiBuZXcgVVJMKHQuc3JjKS5vcmlnaW58fG51bGx9Y2F0Y2godCl7cmV0dXJuIG51bGx9fSxlfShzLkFkYXB0ZXIpO2UuV2luZG93QWRhcHRlcj1sfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5fX2VzTW9kdWxlPSEwLGZ1bmN0aW9uKHQpe2Zvcih2YXIgbiBpbiB0KWUuaGFzT3duUHJvcGVydHkobil8fChlW25dPXRbbl0pfShuKDE4KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtlLl9fZXNNb2R1bGU9ITA7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCl9cmV0dXJuIHQucHJvdG90eXBlLmhhc0xpc3RlbmVycz1mdW5jdGlvbih0KXtyZXR1cm4hKCF0aGlzLl9ldmVudHNbdF18fCF0aGlzLl9ldmVudHNbdF0ubGVuZ3RoKX0sdC5wcm90b3R5cGUuZ2V0QWN0aXZlRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gT2JqZWN0LmtleXModGhpcy5fZXZlbnRzKS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiB0Lmhhc0xpc3RlbmVycyhlKX0pKX0sdC5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbih0LGUpe3RoaXMuX2V2ZW50c1t0XSYmKHRoaXMuX2V2ZW50c1t0XT10aGlzLl9ldmVudHNbdF0uZmlsdGVyKChmdW5jdGlvbih0KXt0cnl7dC5oYW5kbGVyLmNhbGwodC5jb250ZXh0LGUpfWNhdGNoKHQpe31yZXR1cm4hdC5vbmNlfSkpLHRoaXMuX2V2ZW50c1t0XS5sZW5ndGh8fGRlbGV0ZSB0aGlzLl9ldmVudHNbdF0pfSx0LnByb3RvdHlwZS5vbj1mdW5jdGlvbih0LGUsbil7dGhpcy5fb24odCxlLG4sITEpfSx0LnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKHQsZSxuKXt0aGlzLl9vbih0LGUsbiwhMCl9LHQucHJvdG90eXBlLm9mZj1mdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMscj1cInN0cmluZ1wiPT10eXBlb2YgdD90Om51bGwsbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6XCJmdW5jdGlvblwiPT10eXBlb2YgdD90Om51bGw7cj9vP3IgaW4gdGhpcy5fZXZlbnRzJiYodGhpcy5fZXZlbnRzW3JdPXRoaXMuX2V2ZW50c1tyXS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmhhbmRsZXIhPT1vfSkpKTpkZWxldGUgdGhpcy5fZXZlbnRzW3JdOk9iamVjdC5rZXlzKHRoaXMuX2V2ZW50cykuZm9yRWFjaCgoZnVuY3Rpb24odCl7bi5vZmYodCxvKX0pKX0sdC5wcm90b3R5cGUuX29uPWZ1bmN0aW9uKHQsZSxuLHIpe3RoaXMuX2V2ZW50c1t0XXx8KHRoaXMuX2V2ZW50c1t0XT1bXSksdGhpcy5fZXZlbnRzW3RdLnB1c2goe2hhbmRsZXI6ZSxjb250ZXh0Om4sb25jZTpyfSl9LHR9KCk7ZS5FdmVudEVtaXR0ZXI9cn0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMCksbz1uKDMpLGk9bigxKSxzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUoZSxuKXt2YXIgcj10LmNhbGwodGhpcyxuKXx8dGhpcztyZXR1cm4gci5fdXJsPWUscn1yZXR1cm4gci5fX2V4dGVuZHMoZSx0KSxlLnByb3RvdHlwZS5ldmVudD1mdW5jdGlvbih0KXt0aGlzLl9tZXNzYWdlQ2FsbGJhY2s9dH0sZS5wcm90b3R5cGUuYmVmb3JlU2hvdz1mdW5jdGlvbigpe30sZS5wcm90b3R5cGUuYWZ0ZXJTaG93PWZ1bmN0aW9uKCl7bnVsbCE9dGhpcy5fYWN0aXZlJiYodGhpcy5fYWN0aXZlLndpbi5jbG9zZSgpLHRoaXMuX2FjdGl2ZS5idXMuZGVzdHJveSgpKSx0aGlzLl9hY3RpdmU9dm9pZCAwfSxlLnByb3RvdHlwZS5nZXRCdXM9ZnVuY3Rpb24oKXtyZXR1cm4gci5fX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciB0LGUsbixvLHM9dGhpcztyZXR1cm4gci5fX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihyKXtzd2l0Y2goci5sYWJlbCl7Y2FzZSAwOmlmKG51bGwhPXRoaXMuX2FjdGl2ZSlyZXR1cm5bMixQcm9taXNlLnJlc29sdmUodGhpcy5fYWN0aXZlLmJ1cyldO2lmKHQ9d2luZG93Lm9wZW4odGhpcy5fdXJsKSxlPW5ldyBVUkwoXCJcIix0aGlzLl91cmwpLm9yaWdpbixudWxsPT10KXRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBtdXN0IGJlIGNhbGxlZCBpbiB1c2VyIGV2ZW50IVwiKTtyZXR1cm5bNCxpLldpbmRvd0FkYXB0ZXIuY3JlYXRlU2ltcGxlV2luZG93QWRhcHRlcih0LHtvcmlnaW5zOmV9KV07Y2FzZSAxOnJldHVybiBuPXIuc2VudCgpLG89bmV3IGkuQnVzKG4sLTEpLHRoaXMuX2FjdGl2ZT17d2luOnQsYnVzOm99LFsyLG5ldyBQcm9taXNlKChmdW5jdGlvbih0KXtvLm9uY2UoXCJyZWFkeVwiLChmdW5jdGlvbigpe251bGwhPXMuX21lc3NhZ2VDYWxsYmFjayYmcy5fbWVzc2FnZUNhbGxiYWNrKG8pLHQoKX0pKX0pKV19fSkpfSkpfSxlfShvLlRyYW5zcG9ydCk7ZS5UcmFuc3BvcnRXaW5kb3c9c31dKX0pKTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZXF1ZXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3Rvb2xzL3JlcXVlc3RcIikpO1xudmFyIHF1ZXJ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3Rvb2xzL3F1ZXJ5XCIpKTtcbmZ1bmN0aW9uIGZldGNoRGF0YUtleShiYXNlLCBhZGRyZXNzLCBrZXksIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9kYXRhL1wiICsgYWRkcmVzcyArIFwiL1wiICsgZW5jb2RlVVJJQ29tcG9uZW50KGtleSlcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hEYXRhS2V5ID0gZmV0Y2hEYXRhS2V5O1xuZnVuY3Rpb24gZmV0Y2hTY3JpcHRJbmZvTWV0YShiYXNlLCBhZGRyZXNzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvc2NyaXB0SW5mby9cIiArIGFkZHJlc3MgKyBcIi9tZXRhXCJcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hTY3JpcHRJbmZvTWV0YSA9IGZldGNoU2NyaXB0SW5mb01ldGE7XG5mdW5jdGlvbiBmZXRjaEJhbGFuY2VEZXRhaWxzKGJhc2UsIGFkZHJlc3MsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9iYWxhbmNlL2RldGFpbHMvXCIgKyBhZGRyZXNzXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoQmFsYW5jZURldGFpbHMgPSBmZXRjaEJhbGFuY2VEZXRhaWxzO1xuZnVuY3Rpb24gZmV0Y2hCYWxhbmNlQ29uZmlybWF0aW9ucyhiYXNlLCBhZGRyZXNzLCBjb25maXJtYXRpb25zLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvYmFsYW5jZS9cIiArIGFkZHJlc3MgKyBcIi9cIiArIGNvbmZpcm1hdGlvbnNcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hCYWxhbmNlQ29uZmlybWF0aW9ucyA9IGZldGNoQmFsYW5jZUNvbmZpcm1hdGlvbnM7XG5mdW5jdGlvbiBmZXRjaFNjcmlwdEluZm8oYmFzZSwgYWRkcmVzcywgb3B0aW9ucykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL3NjcmlwdEluZm8vXCIgKyBhZGRyZXNzXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoU2NyaXB0SW5mbyA9IGZldGNoU2NyaXB0SW5mbztcbmZ1bmN0aW9uIGRhdGEoYmFzZSwgYWRkcmVzcywgcGFyYW1zLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7IHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IH1cbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9kYXRhL1wiICsgYWRkcmVzcyArIHF1ZXJ5XzEuZGVmYXVsdChwYXJhbXMpXG4gICAgfSk7XG59XG5leHBvcnRzLmRhdGEgPSBkYXRhO1xuZnVuY3Rpb24gZmV0Y2hWYWxpZGF0ZShiYXNlLCBhZGRyZXNzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHsgYmFzZTogYmFzZSwgdXJsOiBcIi9hZGRyZXNzZXMvdmFsaWRhdGUvXCIgKyBhZGRyZXNzIH0pO1xufVxuZXhwb3J0cy5mZXRjaFZhbGlkYXRlID0gZmV0Y2hWYWxpZGF0ZTtcbmZ1bmN0aW9uIGZldGNoQmFsYW5jZShiYXNlLCBhZGRyZXNzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHsgYmFzZTogYmFzZSwgdXJsOiBcIi9hZGRyZXNzZXMvYmFsYW5jZS9cIiArIGFkZHJlc3MgfSk7XG59XG5leHBvcnRzLmZldGNoQmFsYW5jZSA9IGZldGNoQmFsYW5jZTtcbmZ1bmN0aW9uIGZldGNoRWZmZWN0aXZlQmFsYW5jZUNvbmZpcm1hdGlvbnMoYmFzZSwgYWRkcmVzcywgY29uZmlybWF0aW9ucykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL2VmZmVjdGl2ZUJhbGFuY2UvXCIgKyBhZGRyZXNzICsgXCIvXCIgKyBjb25maXJtYXRpb25zXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoRWZmZWN0aXZlQmFsYW5jZUNvbmZpcm1hdGlvbnMgPSBmZXRjaEVmZmVjdGl2ZUJhbGFuY2VDb25maXJtYXRpb25zO1xuZnVuY3Rpb24gZmV0Y2hFZmZlY3RpdmVCYWxhbmNlKGJhc2UsIGFkZHJlc3MpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9lZmZlY3RpdmVCYWxhbmNlL1wiICsgYWRkcmVzc1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEVmZmVjdGl2ZUJhbGFuY2UgPSBmZXRjaEVmZmVjdGl2ZUJhbGFuY2U7XG5mdW5jdGlvbiBmZXRjaFNlcShiYXNlLCBmcm9tLCB0bykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL3NlcS9cIiArIGZyb20gKyBcIi9cIiArIHRvXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoU2VxID0gZmV0Y2hTZXE7XG5mdW5jdGlvbiBmZXRjaFNlZWQoYmFzZSwgYWRkcmVzcykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL3NlZWQvXCIgKyBhZGRyZXNzXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoU2VlZCA9IGZldGNoU2VlZDtcbmZ1bmN0aW9uIGZldGNoUHVibGljS2V5KGJhc2UsIHB1YmxpY0tleSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL3B1YmxpY0tleS9cIiArIHB1YmxpY0tleVxuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFB1YmxpY0tleSA9IGZldGNoUHVibGljS2V5O1xuZnVuY3Rpb24gZmV0Y2hBZGRyZXNzZXMoYmFzZSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogJy9hZGRyZXNzZXMnXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoQWRkcmVzc2VzID0gZmV0Y2hBZGRyZXNzZXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZXF1ZXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3Rvb2xzL3JlcXVlc3RcIikpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdG9vbHMvdXRpbHNcIik7XG5mdW5jdGlvbiBmZXRjaERldGFpbHMoYmFzZSwgYXNzZXRJZCkge1xuICAgIHZhciBpc09uY2UgPSAhQXJyYXkuaXNBcnJheShhc3NldElkKTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodXRpbHNfMS50b0FycmF5KGFzc2V0SWQpLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHsgYmFzZTogYmFzZSwgdXJsOiBcIi9hc3NldHMvZGV0YWlscy9cIiArIGlkIH0pOyB9KSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHsgcmV0dXJuIGlzT25jZSA/IGxpc3RbMF0gOiBsaXN0OyB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hEZXRhaWxzID0gZmV0Y2hEZXRhaWxzO1xuZnVuY3Rpb24gZmV0Y2hBc3NldERpc3RyaWJ1dGlvbihiYXNlLCBhc3NldElkLCBoZWlnaHQsIGxpbWl0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHsgYmFzZTogYmFzZSwgdXJsOiBcIi9hc3NldHMvXCIgKyBhc3NldElkICsgXCIvZGlzdHJpYnV0aW9uL1wiICsgaGVpZ2h0ICsgXCIvbGltaXQvXCIgKyBsaW1pdCB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hBc3NldERpc3RyaWJ1dGlvbiA9IGZldGNoQXNzZXREaXN0cmlidXRpb247XG4vKipcbiAqIFRPRE9cbiAqIEdFVCAvYXNzZXRzL3thc3NldElkfS9kaXN0cmlidXRpb25cbiAqIEFzc2V0IGJhbGFuY2UgZGlzdHJpYnV0aW9uXG4gKi9cbmZ1bmN0aW9uIGZldGNoQXNzZXRzQWRkcmVzc0xpbWl0KGJhc2UsIGFkZHJlc3MsIGxpbWl0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHsgYmFzZTogYmFzZSwgdXJsOiBcImFzc2V0cy9uZnQvXCIgKyBhZGRyZXNzICsgXCIvbGltaXQvXCIgKyBsaW1pdCB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hBc3NldHNBZGRyZXNzTGltaXQgPSBmZXRjaEFzc2V0c0FkZHJlc3NMaW1pdDtcbmZ1bmN0aW9uIGZldGNoQXNzZXRzQmFsYW5jZShiYXNlLCBhZGRyZXNzKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHsgYmFzZTogYmFzZSwgdXJsOiBcIi9hc3NldHMvYmFsYW5jZS9cIiArIGFkZHJlc3MgfSk7XG59XG5leHBvcnRzLmZldGNoQXNzZXRzQmFsYW5jZSA9IGZldGNoQXNzZXRzQmFsYW5jZTtcbmZ1bmN0aW9uIGZldGNoQmFsYW5jZUFkZHJlc3NBc3NldElkKGJhc2UsIGFkZHJlc3MsIGFzc2V0SWQpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoeyBiYXNlOiBiYXNlLCB1cmw6IFwiL2Fzc2V0cy9iYWxhbmNlL1wiICsgYWRkcmVzcyArIFwiL1wiICsgYXNzZXRJZCB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hCYWxhbmNlQWRkcmVzc0Fzc2V0SWQgPSBmZXRjaEJhbGFuY2VBZGRyZXNzQXNzZXRJZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlcXVlc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvcmVxdWVzdFwiKSk7XG4vKipcbiAqIEdFVCAvYmxvY2tzL2hlYWRlcnMvc2VxL3tmcm9tfS97dG99XG4gKiBHZXQgYmxvY2sgaGVhZGVycyBhdCBzcGVjaWZpZWQgaGVpZ2h0c1xuICogQHBhcmFtIGJhc2VcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gdG9cbiAqL1xuZnVuY3Rpb24gZmV0Y2hIZWFkZXJzU2VxKGJhc2UsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9ibG9ja3MvaGVhZGVycy9zZXEvXCIgKyBmcm9tICsgXCIvXCIgKyB0b1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEhlYWRlcnNTZXEgPSBmZXRjaEhlYWRlcnNTZXE7XG4vKipcbiAqIEdFVCAvYmxvY2tzL2hlYWRlcnMvbGFzdFxuICogTGFzdCBibG9jayBoZWFkZXJcbiAqIEBwYXJhbSBiYXNlXG4gKi9cbmZ1bmN0aW9uIGZldGNoSGVhZGVyc0xhc3QoYmFzZSwgb3B0aW9ucykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogJy9ibG9ja3MvaGVhZGVycy9sYXN0J1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEhlYWRlcnNMYXN0ID0gZmV0Y2hIZWFkZXJzTGFzdDtcbi8qKlxuICogR0VUIC9ibG9ja3MvaGVpZ2h0L3tzaWduYXR1cmV9XG4gKiBIZWlnaHQgb2YgYSBibG9jayBieSBpdHMgc2lnbmF0dXJlXG4gKiBAcGFyYW0gYmFzZVxuICogQHBhcmFtIHNpZ25hdHVyZVxuICovXG5mdW5jdGlvbiBmZXRjaEhlaWdodEJ5U2lnbmF0dXJlKGJhc2UsIHNpZ25hdHVyZSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYmxvY2tzL2hlaWdodC9cIiArIHNpZ25hdHVyZVxuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEhlaWdodEJ5U2lnbmF0dXJlID0gZmV0Y2hIZWlnaHRCeVNpZ25hdHVyZTtcbi8qKlxuICogR0VUIC9ibG9ja3MvaGVhZGVycy9hdC97aGVpZ2h0fVxuICogQmxvY2sgaGVhZGVyIGF0IGhlaWdodFxuICogQHBhcmFtIGJhc2VcbiAqIEBwYXJhbSBoZWlnaHRcbiAqL1xuZnVuY3Rpb24gZmV0Y2hIZWFkZXJzQXQoYmFzZSwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9ibG9ja3MvaGVhZGVycy9hdC9cIiArIGhlaWdodFxuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEhlYWRlcnNBdCA9IGZldGNoSGVhZGVyc0F0O1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9hdC97aGVpZ2h0fVxuICogR2V0IGJsb2NrIGF0IHNwZWNpZmllZCBoZWlnaHRcbiAqIEBwYXJhbSBiYXNlXG4gKiBAcGFyYW0gaGVpZ2h0XG4gKi9cbmZ1bmN0aW9uIEJsb2NrQXQoYmFzZSwgaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9ibG9ja3MvYXQvXCIgKyBoZWlnaHRcbiAgICB9KTtcbn1cbmV4cG9ydHMuQmxvY2tBdCA9IEJsb2NrQXQ7XG4vKipcbiAqIEdFVCAvYmxvY2tzL3NlcS97ZnJvbX0ve3RvfVxuICogQmxvY2sgcmFuZ2VcbiAqIEBwYXJhbSBiYXNlXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIHRvXG4gKi9cbmZ1bmN0aW9uIGZldGNoU2VxKGJhc2UsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9ibG9ja3Mvc2VxL1wiICsgZnJvbSArIFwiL1wiICsgdG9cbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hTZXEgPSBmZXRjaFNlcTtcbi8qKlxuICogR0VUIC9ibG9ja3Mvc2lnbmF0dXJlL3tzaWduYXR1cmV9XG4gKiBHZXQgYmxvY2sgYnkgaXRzIHNpZ25hdHVyZVxuICogQHBhcmFtIGJhc2VcbiAqIEBwYXJhbSBzaWduYXR1cmVcbiAqL1xuZnVuY3Rpb24gZmV0Y2hCbG9ja0J5U2lnbmF0dXJlKGJhc2UsIHNpZ25hdHVyZSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYmxvY2tzL3NpZ25hdHVyZS9cIiArIHNpZ25hdHVyZVxuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEJsb2NrQnlTaWduYXR1cmUgPSBmZXRjaEJsb2NrQnlTaWduYXR1cmU7XG4vKipcbiAqIEdFVCAvYmxvY2tzL2ZpcnN0XG4gKiBHZXQgZ2VuZXNpcyBibG9ja1xuICogQHBhcmFtIGJhc2VcbiAqL1xuZnVuY3Rpb24gZmV0Y2hGaXJzdChiYXNlKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9ibG9ja3MvZmlyc3RcIlxuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEZpcnN0ID0gZmV0Y2hGaXJzdDtcbi8qKlxuICogL2Jsb2Nrcy9hZGRyZXNzL3thZGRyZXNzfS97ZnJvbX0ve3RvfVxuICogR2V0IGxpc3Qgb2YgYmxvY2tzIGdlbmVyYXRlZCBieSBzcGVjaWZpZWQgYWRkcmVzc1xuICogQHBhcmFtIGJhc2VcbiAqIEBwYXJhbSBhZGRyZXNzXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIHRvXG4gKi9cbmZ1bmN0aW9uIGZldGNoQmxvY2tzQnlBZGRyZXNzKGJhc2UsIGFkZHJlc3MsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9ibG9ja3MvYWRkcmVzcy9cIiArIGFkZHJlc3MgKyBcIi9cIiArIGZyb20gKyBcIi9cIiArIHRvXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoQmxvY2tzQnlBZGRyZXNzID0gZmV0Y2hCbG9ja3NCeUFkZHJlc3M7XG4vKipcbiAqIEdFVCAvYmxvY2tzL2xhc3RcbiAqIExhc3QgYmxvY2tcbiAqIEBwYXJhbSBiYXNlXG4gKi9cbmZ1bmN0aW9uIGZldGNoTGFzdChiYXNlKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiAnL2Jsb2Nrcy9sYXN0J1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaExhc3QgPSBmZXRjaExhc3Q7XG4vKipcbiAqIEdFVCAvYmxvY2tzL2RlbGF5L3tzaWduYXR1cmV9L3tibG9ja051bX1cbiAqIEF2ZXJhZ2UgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIGJldHdlZW4gbGFzdCBibG9ja051bSBibG9ja3Mgc3RhcnRpbmcgZnJvbSBibG9jayB3aXRoIHNpZ25hdHVyZVxuICogQHBhcmFtIGJhc2VcbiAqIEBwYXJhbSBzaWduYXR1cmVcbiAqIEBwYXJhbSBibG9ja051bVxuICovXG5mdW5jdGlvbiBmZXRjaERlbGF5KGJhc2UsIHNpZ25hdHVyZSwgYmxvY2tOdW0pIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2Jsb2Nrcy9kZWxheS9cIiArIHNpZ25hdHVyZSArIFwiL1wiICsgYmxvY2tOdW1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hEZWxheSA9IGZldGNoRGVsYXk7XG4vKipcbiAqIEdFVCAvYmxvY2tzL2hlaWdodFxuICogQHBhcmFtIGJhc2VcbiAqL1xuZnVuY3Rpb24gZmV0Y2hIZWlnaHQoYmFzZSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogJy9ibG9ja3MvaGVpZ2h0J1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEhlaWdodCA9IGZldGNoSGVpZ2h0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL2NvbnN0YW50c1wiKTtcbnZhciBibG9ja3NfMSA9IHJlcXVpcmUoXCIuLi9ibG9ja3NcIik7XG52YXIgcmVxdWVzdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9yZXF1ZXN0XCIpKTtcbnZhciBxdWVyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9xdWVyeVwiKSk7XG52YXIgc3RyaW5naWZ5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3Rvb2xzL3N0cmluZ2lmeVwiKSk7XG4vKipcbiAqIEdFVCAvdHJhbnNhY3Rpb25zL3VuY29uZmlybWVkL3NpemVcbiAqIE51bWJlciBvZiB1bmNvbmZpcm1lZCB0cmFuc2FjdGlvbnNcbiAqL1xuZnVuY3Rpb24gZmV0Y2hVbmNvbmZpcm1lZFNpemUoYmFzZSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogJy90cmFuc2FjdGlvbnMvdW5jb25maXJtZWQvc2l6ZSdcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hVbmNvbmZpcm1lZFNpemUgPSBmZXRjaFVuY29uZmlybWVkU2l6ZTtcbi8vIEBUT0RPOiB3aGVuIGNvcnJlY3QgQVBJIGtleSBpcyByZWNlaXZlZFxuLyoqXG4gKiBQT1NUIC90cmFuc2FjdGlvbnMvc2lnbi97c2lnbmVyQWRkcmVzc31cbiAqIFNpZ24gYSB0cmFuc2FjdGlvbiB3aXRoIGEgbm9uLWRlZmF1bHQgcHJpdmF0ZSBrZXlcbiAqL1xuLyoqXG4qIFBPU1QgL3RyYW5zYWN0aW9ucy9jYWxjdWxhdGVGZWVcbiogQ2FsY3VsYXRlIHRyYW5zYWN0aW9uIGZlZVxuKi9cbmZ1bmN0aW9uIGZldGNoQ2FsY3VsYXRlRmVlKGJhc2UsIHR4KSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiAnL3RyYW5zYWN0aW9ucy9jYWxjdWxhdGVGZWUnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IHN0cmluZ2lmeV8xLmRlZmF1bHQodHgpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaENhbGN1bGF0ZUZlZSA9IGZldGNoQ2FsY3VsYXRlRmVlO1xuLyoqXG4gKiBHRVQgL3RyYW5zYWN0aW9ucy91bmNvbmZpcm1lZFxuICogVW5jb25maXJtZWQgdHJhbnNhY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIGZldGNoVW5jb25maXJtZWQoYmFzZSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogJy90cmFuc2FjdGlvbnMvdW5jb25maXJtZWQnXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoVW5jb25maXJtZWQgPSBmZXRjaFVuY29uZmlybWVkO1xuLyoqXG4gKiDQodC/0LjRgdC+0Log0YLRgNCw0L3Qt9Cw0LrRhtC40Lkg0L/QviDQsNC00YDQtdGB0YNcbiAqIEBwYXJhbSBhZGRyZXNzXG4gKiBAcGFyYW0gbGltaXQgICAgICDQvNCw0LrRgdC40LzQsNC70YzQvdC+0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0YLRgNCw0L3Qt9Cw0LrRhtC40Lkg0LIg0YDQtdC30YPQu9GM0YLQsNGC0LVcbiAqIEBwYXJhbSBhZnRlciAgICAgINC40YHQutCw0YLRjCDRgtGA0LDQvdC30LDQutGG0LjQuCDQv9C+0YHQu9C1IElEINGD0LrQsNC30LDQvdC90L7Qs9C+INCyIGFmdGVyXG4gKiBAcGFyYW0gcmV0cnkgICAgICDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0L/Ri9GC0L7QuiDQvdCwINCy0YvQv9C+0LvQvdC10L3QuNC1INC30LDQv9GA0L7RgdCwXG4gKi9cbmZ1bmN0aW9uIGZldGNoVHJhbnNhY3Rpb25zKGJhc2UsIGFkZHJlc3MsIGxpbWl0LCBhZnRlciwgcmV0cnkpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL3RyYW5zYWN0aW9ucy9hZGRyZXNzL1wiICsgYWRkcmVzcyArIFwiL2xpbWl0L1wiICsgbGltaXQgKyBxdWVyeV8xLmRlZmF1bHQoeyBhZnRlcjogYWZ0ZXIgfSlcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbGlzdCA9IF9hWzBdO1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hUcmFuc2FjdGlvbnMgPSBmZXRjaFRyYW5zYWN0aW9ucztcbi8qKlxuICogR0VUIC90cmFuc2FjdGlvbnMvdW5jb25maXJtZWQvaW5mby97aWR9XG4gKiBVbmNvbmZpcm1lZCB0cmFuc2FjdGlvbiBpbmZvXG4gKi9cbmZ1bmN0aW9uIGZldGNoVW5jb25maXJtZWRJbmZvKGJhc2UsIGlkKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi90cmFuc2FjdGlvbnMvdW5jb25maXJtZWQvaW5mby9cIiArIGlkXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoVW5jb25maXJtZWRJbmZvID0gZmV0Y2hVbmNvbmZpcm1lZEluZm87XG4vLyBAVE9ETyB3aGVuIGNvcnJlY3QgQVBJIGtleSBpcyByZWNlaXZlZFxuLyoqXG4gKiBQT1NUIC90cmFuc2FjdGlvbnMvc2lnblxuICogU2lnbiBhIHRyYW5zYWN0aW9uXG4gKi9cbi8qKlxuICogR0VUIC90cmFuc2FjdGlvbnMvaW5mby97aWR9XG4gKiBUcmFuc2FjdGlvbiBpbmZvXG4gKi9cbmZ1bmN0aW9uIGZldGNoSW5mbyhiYXNlLCBpZCkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7IGJhc2U6IGJhc2UsIHVybDogXCIvdHJhbnNhY3Rpb25zL2luZm8vXCIgKyBpZCB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hJbmZvID0gZmV0Y2hJbmZvO1xuZnVuY3Rpb24gZmV0Y2hTdGF0dXMoYmFzZSwgbGlzdCkge1xuICAgIHZhciBERUZBVUxUX1NUQVRVUyA9IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBjb25maXJtYXRpb25zOiAtMSxcbiAgICAgICAgaGVpZ2h0OiAtMSxcbiAgICAgICAgaW5VVFg6IGZhbHNlLFxuICAgICAgICBzdGF0dXM6IGNvbnN0YW50c18xLlRSQU5TQUNUSU9OX1NUQVRVU0VTLk5PVF9GT1VORFxuICAgIH07XG4gICAgdmFyIGxvYWRBbGxUeEluZm8gPSBsaXN0Lm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoVW5jb25maXJtZWRJbmZvKGJhc2UsIGlkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX1NUQVRVUyksIHsgaWQ6IGlkLCBzdGF0dXM6IGNvbnN0YW50c18xLlRSQU5TQUNUSU9OX1NUQVRVU0VTLlVOQ09ORklSTUVELCBpblVUWDogdHJ1ZSB9KSk7IH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gZmV0Y2hJbmZvKGJhc2UsIGlkKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHR4KSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfU1RBVFVTKSwgeyBpZDogaWQsIHN0YXR1czogY29uc3RhbnRzXzEuVFJBTlNBQ1RJT05fU1RBVFVTRVMuSU5fQkxPQ0tDSEFJTiwgaGVpZ2h0OiB0eC5oZWlnaHQgfSkpOyB9KTsgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiAoX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfU1RBVFVTKSwgeyBpZDogaWQgfSkpOyB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICBibG9ja3NfMS5mZXRjaEhlaWdodChiYXNlKSxcbiAgICAgICAgUHJvbWlzZS5hbGwobG9hZEFsbFR4SW5mbylcbiAgICBdKS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgaGVpZ2h0ID0gX2FbMF0uaGVpZ2h0LCBzdGF0dXNlcyA9IF9hWzFdO1xuICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgc3RhdHVzZXM6IHN0YXR1c2VzLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBpdGVtKSwgeyBjb25maXJtYXRpb25zOiBpdGVtLnN0YXR1cyA9PT0gY29uc3RhbnRzXzEuVFJBTlNBQ1RJT05fU1RBVFVTRVMuSU5fQkxPQ0tDSEFJTiA/IGhlaWdodCAtIGl0ZW0uaGVpZ2h0IDogaXRlbS5jb25maXJtYXRpb25zIH0pKTsgfSlcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoU3RhdHVzID0gZmV0Y2hTdGF0dXM7XG5mdW5jdGlvbiBicm9hZGNhc3QoYmFzZSwgdHgpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLCB1cmw6ICcvdHJhbnNhY3Rpb25zL2Jyb2FkY2FzdCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogc3RyaW5naWZ5XzEuZGVmYXVsdCh0eCksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmJyb2FkY2FzdCA9IGJyb2FkY2FzdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UWVBFX01BUCA9IHtcbiAgICAzOiAnaXNzdWUnLFxuICAgIDQ6ICd0cmFuc2ZlcicsXG4gICAgNTogJ3JlaXNzdWUnLFxuICAgIDY6ICdidXJuJyxcbiAgICA3OiAnZXhjaGFuZ2UnLFxuICAgIDg6ICdsZWFzZScsXG4gICAgOTogJ2NhbmNlbExlYXNlJyxcbiAgICAxMDogJ2FsaWFzJyxcbiAgICAxMTogJ21hc3NUcmFuc2ZlcicsXG4gICAgMTI6ICdkYXRhJyxcbiAgICAxMzogJ3NldFNjcmlwdCcsXG4gICAgMTQ6ICdzcG9uc29yc2hpcCcsXG4gICAgMTU6ICdzZXRBc3NldFNjcmlwdCcsXG4gICAgMTY6ICdpbnZva2UnXG59O1xuZXhwb3J0cy5OQU1FX01BUCA9IHtcbiAgICAnaXNzdWUnOiAzLFxuICAgICd0cmFuc2Zlcic6IDQsXG4gICAgJ3JlaXNzdWUnOiA1LFxuICAgICdidXJuJzogNixcbiAgICAnZXhjaGFuZ2UnOiA3LFxuICAgICdsZWFzZSc6IDgsXG4gICAgJ2NhbmNlbExlYXNlJzogOSxcbiAgICAnYWxpYXMnOiAxMCxcbiAgICAnbWFzc1RyYW5zZmVyJzogMTEsXG4gICAgJ2RhdGEnOiAxMixcbiAgICAnc2V0U2NyaXB0JzogMTMsXG4gICAgJ3Nwb25zb3JzaGlwJzogMTQsXG4gICAgJ3NldEFzc2V0U2NyaXB0JzogMTUsXG4gICAgJ2ludm9rZSc6IDE2XG59O1xuZXhwb3J0cy5UUkFOU0FDVElPTl9TVEFUVVNFUyA9IHtcbiAgICBJTl9CTE9DS0NIQUlOOiAnaW5fYmxvY2tjaGFpbicsXG4gICAgVU5DT05GSVJNRUQ6ICd1bmNvbmZpcm1lZCcsXG4gICAgTk9UX0ZPVU5EOiAnbm90X2ZvdW5kJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBibG9ja3NfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcGktbm9kZS9ibG9ja3NcIik7XG5mdW5jdGlvbiBkZWZhdWx0XzEoYmFzZSkge1xuICAgIHJldHVybiBibG9ja3NfMS5mZXRjaEhlYWRlcnNMYXN0KGJhc2UpLnRoZW4oZnVuY3Rpb24gKGhlYWRlcikgeyByZXR1cm4gYmFzZTU4RGVjb2RlKGhlYWRlci5nZW5lcmF0b3IpWzFdOyB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbnZhciBBTFBIQUJFVCA9ICcxMjM0NTY3ODlBQkNERUZHSEpLTE1OUFFSU1RVVldYWVphYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6JztcbnZhciBBTFBIQUJFVF9NQVAgPSB7fTtcbmZvciAodmFyIGkgPSAwOyBpIDwgQUxQSEFCRVQubGVuZ3RoOyBpKyspIHtcbiAgICBBTFBIQUJFVF9NQVBbQUxQSEFCRVQuY2hhckF0KGkpXSA9IGk7XG59XG5mdW5jdGlvbiBiYXNlNThEZWNvZGUoc3RyaW5nKSB7XG4gICAgdmFyIGJ5dGVzLCBjLCBjYXJyeSwgaiwgaTtcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMCk7XG4gICAgfVxuICAgIGkgPSB2b2lkIDA7XG4gICAgaiA9IHZvaWQgMDtcbiAgICBieXRlcyA9IFswXTtcbiAgICBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgYyA9IHN0cmluZ1tpXTtcbiAgICAgICAgaWYgKCEoYyBpbiBBTFBIQUJFVF9NQVApKSB7XG4gICAgICAgICAgICB0aHJvdyAnQmFzZTU4LmRlY29kZSByZWNlaXZlZCB1bmFjY2VwdGFibGUgaW5wdXQuIENoYXJhY3RlciBcXCcnICsgYyArICdcXCcgaXMgbm90IGluIHRoZSBCYXNlNTggYWxwaGFiZXQuJztcbiAgICAgICAgfVxuICAgICAgICBqID0gMDtcbiAgICAgICAgd2hpbGUgKGogPCBieXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGJ5dGVzW2pdICo9IDU4O1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICAgIGJ5dGVzWzBdICs9IEFMUEhBQkVUX01BUFtjXTtcbiAgICAgICAgY2FycnkgPSAwO1xuICAgICAgICBqID0gMDtcbiAgICAgICAgd2hpbGUgKGogPCBieXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGJ5dGVzW2pdICs9IGNhcnJ5O1xuICAgICAgICAgICAgY2FycnkgPSBieXRlc1tqXSA+PiA4O1xuICAgICAgICAgICAgYnl0ZXNbal0gJj0gMHhmZjtcbiAgICAgICAgICAgICsrajtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoY2FycnkpIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goY2FycnkgJiAweGZmKTtcbiAgICAgICAgICAgIGNhcnJ5ID4+PSA4O1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKHN0cmluZ1tpXSA9PT0gJzEnICYmIGkgPCBzdHJpbmcubGVuZ3RoIC0gMSkge1xuICAgICAgICBieXRlcy5wdXNoKDApO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShieXRlcy5yZXZlcnNlKCkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0TmV0d29ya0J5dGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVnID0gbmV3IFJlZ0V4cCgnKCg/IVxcXFxcXFxcKVwiXFxcXHcrXCIpOlxcXFxzKigtP1tcXFxcZHxcXFxcLl17MTQsfSknLCAnZycpO1xuZnVuY3Rpb24gZGVmYXVsdF8xKGpzb24pIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uLnJlcGxhY2UocmVnLCBcIiQxOlxcXCIkMlxcXCJcIikpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBkZWZhdWx0XzEocGFyYW1zLCBldm9sdmVyKSB7XG4gICAgaWYgKGV2b2x2ZXIgPT09IHZvaWQgMCkgeyBldm9sdmVyID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgfVxuICAgIHZhciBxdWVyeSA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBba2V5LCBwYXJhbXNba2V5XV07IH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICAgICAgcmV0dXJuIFtrZXksIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChldm9sdmVyLCBrZXkpID8gZXZvbHZlcltrZXldKHZhbHVlKSA6IHZhbHVlXTtcbiAgICB9KVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsO1xuICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICAgICAgcmV0dXJuIGtleSArIFwiPVwiICsgdmFsdWU7XG4gICAgfSlcbiAgICAgICAgLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gcXVlcnkubGVuZ3RoID8gXCI/XCIgKyBxdWVyeSA6ICcnO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVzb2x2ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3Jlc29sdmVcIikpO1xudmFyIHBhcnNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vcGFyc2VcIikpO1xudmFyIHJlcXVlc3QgPSB0eXBlb2YgZmV0Y2ggPT09ICdmdW5jdGlvbicgPyBmZXRjaCA6IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbmZ1bmN0aW9uIGRlZmF1bHRfMShwYXJhbXMpIHtcbiAgICByZXR1cm4gcmVxdWVzdChyZXNvbHZlXzEuZGVmYXVsdChwYXJhbXMudXJsLCBwYXJhbXMuYmFzZSksIHVwZGF0ZUhlYWRlcnMocGFyYW1zLm9wdGlvbnMpKVxuICAgICAgICAudGhlbihwYXJzZVJlc3BvbnNlKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbmZ1bmN0aW9uIHBhcnNlUmVzcG9uc2Uocikge1xuICAgIHJldHVybiByLnRleHQoKS50aGVuKGZ1bmN0aW9uIChtZXNzYWdlKSB7IHJldHVybiByLm9rID8gcGFyc2VfMS5kZWZhdWx0KG1lc3NhZ2UpIDogUHJvbWlzZS5yZWplY3QodHJ5UGFyc2UobWVzc2FnZSkpOyB9KTtcbn1cbmZ1bmN0aW9uIHRyeVBhcnNlKG1lc3NhZ2UpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShtZXNzYWdlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlSGVhZGVycyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTsgfVxuICAgIG9wdGlvbnMuY3JlZGVudGlhbHMgPSAnaW5jbHVkZSc7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZGVmYXVsdF8xKHBhdGgsIGJhc2UpIHtcbiAgICByZXR1cm4gbmV3IFVSTChwYXRoLCBiYXNlKS50b1N0cmluZygpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVzb2x2ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBGSUVMRFMgPSBbJ3ZhbHVlJywgJ2Ftb3VudCcsICdtYXRjaGVyRmVlJywgJ3ByaWNlJywgJ2ZlZScsICdtaW5TcG9uc29yZWRBc3NldEZlZScsICdxdWFudGl0eScsICdzZWxsTWF0Y2hlckZlZScsICdidXlNYXRjaGVyRmVlJ107XG52YXIgcmVnID0gbmV3IFJlZ0V4cChcIig/IVxcXFxcXFxcKVxcXCIoXCIgKyBGSUVMRFMuam9pbignfCcpICsgXCIpXFxcIjpcXFxccypcXFwiKC0/XFxcXGQrKVxcXCJcIiwgJ2cnKTtcbmZ1bmN0aW9uIGRlZmF1bHRfMShkYXRhKSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpLnJlcGxhY2UocmVnLCAnXCIkMVwiOiQyJyk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJpbmdpZnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHRyYW5zYWN0aW9uc18xID0gcmVxdWlyZShcIi4uLy4uL2FwaS1ub2RlL3RyYW5zYWN0aW9uc1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIHdhaXRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi93YWl0XCIpKTtcbnZhciBERUZBVUxUX0JST0FEQ0FTVF9PUFRJT05TID0ge1xuICAgIGNoYWluOiBmYWxzZSxcbiAgICBjb25maXJtYXRpb25zOiAtMSxcbiAgICBtYXhXYWl0VGltZTogMCxcbiAgICByZXF1ZXN0SW50ZXJ2YWw6IDBcbn07XG5mdW5jdGlvbiBkZWZhdWx0XzEoYmFzZSwgbGlzdCwgb3B0aW9ucykge1xuICAgIHZhciBvcHQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9CUk9BRENBU1RfT1BUSU9OUyksIChvcHRpb25zIHx8IHt9KSk7XG4gICAgdmFyIGlzT25jZSA9ICFBcnJheS5pc0FycmF5KGxpc3QpO1xuICAgIHZhciBjb25maXJtYXRpb25zID0gb3B0LmNvbmZpcm1hdGlvbnMgPiAwID8gMSA6IDA7XG4gICAgcmV0dXJuIChvcHQuY2hhaW5cbiAgICAgICAgPyBjaGFpbkJyb2FkY2FzdChiYXNlLCB1dGlsc18xLnRvQXJyYXkobGlzdCksIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHQpLCB7IGNvbmZpcm1hdGlvbnM6IGNvbmZpcm1hdGlvbnMgfSkpXG4gICAgICAgIDogc2ltcGxlQnJvYWRjYXN0KGJhc2UsIHV0aWxzXzEudG9BcnJheShsaXN0KSkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChsaXN0KSB7IHJldHVybiBvcHQuY29uZmlybWF0aW9ucyA8PSAwID8gbGlzdCA6IHdhaXRfMS5kZWZhdWx0KGJhc2UsIGxpc3QsIG9wdCk7IH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChsaXN0KSB7IHJldHVybiBpc09uY2UgPyB1dGlsc18xLmhlYWQobGlzdCkgOiBsaXN0OyB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbmZ1bmN0aW9uIHNpbXBsZUJyb2FkY2FzdChiYXNlLCBsaXN0KSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGxpc3QubWFwKGZ1bmN0aW9uICh0eCkgeyByZXR1cm4gdHJhbnNhY3Rpb25zXzEuYnJvYWRjYXN0KGJhc2UsIHR4KTsgfSkpO1xufVxuZnVuY3Rpb24gY2hhaW5Ccm9hZGNhc3QoYmFzZSwgbGlzdCwgb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciB0b0Jyb2FkY2FzdCA9IGxpc3Quc2xpY2UoKS5yZXZlcnNlKCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRvQnJvYWRjYXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0eCA9IHRvQnJvYWRjYXN0LnBvcCgpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb25zXzEuYnJvYWRjYXN0KGJhc2UsIHR4KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh0eCkgeyByZXR1cm4gd2FpdF8xLmRlZmF1bHQoYmFzZSwgdHgsIG9wdGlvbnMpOyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh0eCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHR4KTtcbiAgICAgICAgICAgICAgICBsb29wKCk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9O1xuICAgICAgICBsb29wKCk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icm9hZGNhc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciB0cmFuc2FjdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcGktbm9kZS90cmFuc2FjdGlvbnNcIik7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29uc3RhbnRzXCIpO1xuZnVuY3Rpb24gZGVmYXVsdF8xKGJhc2UsIHR4LCBvcHRpb25zKSB7XG4gICAgdmFyIGlzT25jZSA9ICFBcnJheS5pc0FycmF5KHR4KTtcbiAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHZhciBjb25maXJtZWQgPSBbXTtcbiAgICB2YXIgY29uZmlybWF0aW9ucyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5jb25maXJtYXRpb25zIHx8IDA7XG4gICAgdmFyIG1heFdhaXRUaW1lID0gb3B0aW9ucyAmJiBvcHRpb25zLm1heFdhaXRUaW1lIHx8IDA7XG4gICAgdmFyIHJlcXVlc3RJbnRlcnZhbCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5yZXF1ZXN0SW50ZXJ2YWwgfHwgMjUwO1xuICAgIHZhciB3YWl0VHggPSBmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25zXzEuZmV0Y2hTdGF0dXMoYmFzZSwgbGlzdC5tYXAodXRpbHNfMS5wcm9wKCdpZCcpKSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgIHZhciBoYXNoID0gdXRpbHNfMS5pbmRleEJ5KHV0aWxzXzEucHJvcCgnaWQnKSwgc3RhdHVzLnN0YXR1c2VzKTtcbiAgICAgICAgICAgIHZhciBoYXNFcnJvciA9IGxpc3Quc29tZShmdW5jdGlvbiAodHgpIHsgcmV0dXJuIGhhc2hbdHguaWRdLnN0YXR1cyA9PT0gY29uc3RhbnRzXzEuVFJBTlNBQ1RJT05fU1RBVFVTRVMuTk9UX0ZPVU5EOyB9KTtcbiAgICAgICAgICAgIGlmIChoYXNFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT25lIHRyYW5zYWN0aW9uIGlzIG5vdCBpbiBibG9ja2NoYWluIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRvUmVxdWVzdCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uICh0eCkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNoW3R4LmlkXS5jb25maXJtYXRpb25zID49IGNvbmZpcm1hdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybWVkLnB1c2godHgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghdG9SZXF1ZXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF4V2FpdFRpbWUgJiYgRGF0ZS5ub3coKSAtIHN0YXJ0ID4gbWF4V2FpdFRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1RpbWVvdXQgZXJyb3IhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXRpbHNfMS53YWl0KHJlcXVlc3RJbnRlcnZhbCkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB3YWl0VHgodG9SZXF1ZXN0KTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIHdhaXRUeCh1dGlsc18xLnRvQXJyYXkodHgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzT25jZSA/IHV0aWxzXzEuaGVhZChjb25maXJtZWQpIDogY29uZmlybWVkOyB9KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdhaXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiB0b0FycmF5KGRhdGEpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XG59XG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xuZnVuY3Rpb24gaGVhZChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGFbMF07XG59XG5leHBvcnRzLmhlYWQgPSBoZWFkO1xuZnVuY3Rpb24gd2FpdCh0aW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG4gICAgfSk7XG59XG5leHBvcnRzLndhaXQgPSB3YWl0O1xuZnVuY3Rpb24gcHJvcChrZXkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGFba2V5XTsgfTtcbn1cbmV4cG9ydHMucHJvcCA9IHByb3A7XG5leHBvcnRzLmtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaik7XG59O1xuZXhwb3J0cy5lbnRyaWVzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBleHBvcnRzLmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtuYW1lLCBvYmpbbmFtZV1dOyB9KTtcbn07XG5leHBvcnRzLnZhbHVlcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gZXhwb3J0cy5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIG9ialtrZXldOyB9KTtcbn07XG5leHBvcnRzLmFzc2lnbiA9IGZ1bmN0aW9uICh0YXJnZXQsIG1lcmdlKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW50cmllcyhtZXJnZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIF9hKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LCB0YXJnZXQpO1xufTtcbmZ1bmN0aW9uIG1hcChwcm9jZXNzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaXN0KSB7IHJldHVybiBsaXN0Lm1hcChwcm9jZXNzKTsgfTtcbn1cbmV4cG9ydHMubWFwID0gbWFwO1xuZnVuY3Rpb24gZmlsdGVyKHByb2Nlc3MpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGxpc3QpIHsgcmV0dXJuIGxpc3QuZmlsdGVyKHByb2Nlc3MpOyB9O1xufVxuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG5mdW5jdGlvbiBpbmRleEJ5KHByb2Nlc3MsIGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaXRlbSkge1xuICAgICAgICBhY2NbcHJvY2VzcyhpdGVtKV0gPSBpdGVtO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn1cbmV4cG9ydHMuaW5kZXhCeSA9IGluZGV4Qnk7XG5leHBvcnRzLnVuaXEgPSBmdW5jdGlvbiAobGlzdCkge1xuICAgIHJldHVybiBleHBvcnRzLmtleXMobGlzdC5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaXRlbSkge1xuICAgICAgICBhY2NbaXRlbV0gPSBpdGVtO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpKTtcbn07XG5mdW5jdGlvbiBzd2l0Y2hUcmFuc2FjdGlvbkJ5VHlwZShjaG9pY2VzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0eCkgeyByZXR1cm4gY2hvaWNlc1t0eC50eXBlXSAmJiB0eXBlb2YgY2hvaWNlc1t0eC50eXBlXSA9PT0gJ2Z1bmN0aW9uJyA/IGNob2ljZXNbdHgudHlwZV0odHgpIDogdW5kZWZpbmVkOyB9O1xufVxuZXhwb3J0cy5zd2l0Y2hUcmFuc2FjdGlvbkJ5VHlwZSA9IHN3aXRjaFRyYW5zYWN0aW9uQnlUeXBlO1xuZXhwb3J0cy5waXBlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGl0ZW0pIHsgcmV0dXJuIGl0ZW0oYWNjKTsgfSwgZGF0YSk7IH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fc3ByZWFkQXJyYXlzID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5cykgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcbiAgICByZXR1cm4gcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIHRyYW5zYWN0aW9uc18xID0gcmVxdWlyZShcIi4vdXRpbHMvdHJhbnNhY3Rpb25zXCIpO1xudmFyIGFkZHJlc3Nlc18xID0gcmVxdWlyZShcIkB3YXZlcy9ub2RlLWFwaS1qcy9janMvYXBpLW5vZGUvYWRkcmVzc2VzXCIpO1xudmFyIGFzc2V0c18xID0gcmVxdWlyZShcIkB3YXZlcy9ub2RlLWFwaS1qcy9janMvYXBpLW5vZGUvYXNzZXRzXCIpO1xudmFyIHdhaXRfMSA9IHJlcXVpcmUoXCJAd2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL3RyYW5zYWN0aW9ucy93YWl0XCIpO1xudmFyIGJyb2FkY2FzdF8xID0gcmVxdWlyZShcIkB3YXZlcy9ub2RlLWFwaS1qcy9janMvdG9vbHMvdHJhbnNhY3Rpb25zL2Jyb2FkY2FzdFwiKTtcbnZhciBnZXROZXR3b3JrQnl0ZV8xID0gcmVxdWlyZShcIkB3YXZlcy9ub2RlLWFwaS1qcy9janMvdG9vbHMvYmxvY2tzL2dldE5ldHdvcmtCeXRlXCIpO1xudmFyIFdhdmVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdhdmVzKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb25zdGFudHNfMS5ERUZBVUxUX09QVElPTlMpLCAob3B0aW9ucyB8fCB7fSkpO1xuICAgICAgICB0aGlzLl9uZXR3b3JrQnl0ZVByb21pc2UgPSBnZXROZXR3b3JrQnl0ZV8xLmRlZmF1bHQodGhpcy5fb3B0aW9ucy5OT0RFX1VSTCkudGhlbihmdW5jdGlvbiAoYnl0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGJ5dGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2F2ZXMucHJvdG90eXBlLCBcIl9jb25uZWN0UHJvbWlzZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19jb25uZWN0UHJvbWlzZSB8fCBQcm9taXNlLnJlamVjdCgnSGFzIG5vIHByb3ZpZGVyIScpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICAgICB0aGlzLl9fY29ubmVjdFByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiDQl9Cw0L/RgNC+0YHQuNGC0Ywg0LHQsNC50YIg0YHQtdGC0LhcbiAgICAgKi9cbiAgICBXYXZlcy5wcm90b3R5cGUuZ2V0TmV0d29ya0J5dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZXR3b3JrQnl0ZVByb21pc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDQv9GA0L7QstCw0LnQtNC10YAg0L7RgtCy0LXRh9Cw0Y7RidC40Lkg0LfQsCDQv9C+0LTQv9C40YHRjFxuICAgICAqIEBwYXJhbSBwcm92aWRlclxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBpbXBvcnQgV2F2ZXMgZnJvbSAnQHdhdmVzL3dhdmVzLWpzJztcbiAgICAgKiBpbXBvcnQgUHJvdmlkZXIgZnJvbSAnQHdhdmVzL3NlZWQtcHJvdmlkZXInO1xuICAgICAqXG4gICAgICogY29uc3Qgd2F2ZXMgPSBuZXcgV2F2ZXMoKTtcbiAgICAgKiB3YXZlcy5zZXRQcm92aWRlcihuZXcgUHJvdmlkZXIoJ1NFRUQnKSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgV2F2ZXMucHJvdG90eXBlLnNldFByb3ZpZGVyID0gZnVuY3Rpb24gKHByb3ZpZGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY3VycmVudFByb3ZpZGVyID0gcHJvdmlkZXI7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9uZXR3b3JrQnl0ZVByb21pc2UudGhlbihmdW5jdGlvbiAobmV0d29ya0J5dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm92aWRlci5jb25uZWN0KHtcbiAgICAgICAgICAgICAgICBOT0RFX1VSTDogX3RoaXMuX29wdGlvbnMuTk9ERV9VUkwsXG4gICAgICAgICAgICAgICAgTkVUV09SS19CWVRFOiBuZXR3b3JrQnl0ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fY29ubmVjdFByb21pc2UgPSByZXN1bHQudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBwcm92aWRlcjsgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LDQtdC8INGB0L/QuNGB0L7QuiDQsdCw0LvQsNC90YHQvtCyINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyAo0L3QtdC+0LHRhdC+0LTQuNC80L4g0LLRi9C/0L7Qu9C90LjRgtGMIGxvZ2luINC/0LXRgNC10LQg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LXQvClcbiAgICAgKiBCYXNpYyB1c2FnZSBleGFtcGxlOlxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBhd2FpdCB3YXZlcy5nZXRCYWxhbmNlKCk7IC8vINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINCx0LDQu9Cw0L3RgdGLINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIFdhdmVzLnByb3RvdHlwZS5nZXRCYWxhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3VzZXJEYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdOZWVkIGxvZ2luIGZvciBnZXQgYmFsYW5jZXMhJykpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1c2VyID0gdGhpcy5fdXNlckRhdGE7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBhZGRyZXNzZXNfMS5mZXRjaEJhbGFuY2VEZXRhaWxzKHRoaXMuX29wdGlvbnMuTk9ERV9VUkwsIHVzZXIuYWRkcmVzcylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBhc3NldElkOiAnV0FWRVMnLFxuICAgICAgICAgICAgICAgIGFzc2V0TmFtZTogJ1dhdmVzJyxcbiAgICAgICAgICAgICAgICBkZWNpbWFsczogOCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IFN0cmluZyhkYXRhLmF2YWlsYWJsZSksXG4gICAgICAgICAgICAgICAgaXNNeUFzc2V0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b2tlbnM6IE51bWJlcihkYXRhLmF2YWlsYWJsZSkgKiBNYXRoLnBvdygxMCwgOCksXG4gICAgICAgICAgICAgICAgc3BvbnNvcnNoaXA6IG51bGwsXG4gICAgICAgICAgICAgICAgaXNTbWFydDogZmFsc2VcbiAgICAgICAgICAgIH0pOyB9KSxcbiAgICAgICAgICAgIGFzc2V0c18xLmZldGNoQXNzZXRzQmFsYW5jZSh0aGlzLl9vcHRpb25zLk5PREVfVVJMLCB1c2VyLmFkZHJlc3MpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGEuYmFsYW5jZXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgIGFzc2V0SWQ6IGl0ZW0uYXNzZXRJZCxcbiAgICAgICAgICAgICAgICBhc3NldE5hbWU6IGl0ZW0uaXNzdWVUcmFuc2FjdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgIGRlY2ltYWxzOiBpdGVtLmlzc3VlVHJhbnNhY3Rpb24uZGVjaW1hbHMsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBTdHJpbmcoaXRlbS5iYWxhbmNlKSxcbiAgICAgICAgICAgICAgICBpc015QXNzZXQ6IGl0ZW0uaXNzdWVUcmFuc2FjdGlvbi5zZW5kZXIgPT09IHVzZXIuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB0b2tlbnM6IGl0ZW0uYmFsYW5jZSAqXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucG93KDEwLCBpdGVtLmlzc3VlVHJhbnNhY3Rpb24uZGVjaW1hbHMpLFxuICAgICAgICAgICAgICAgIGlzU21hcnQ6ICEhaXRlbS5pc3N1ZVRyYW5zYWN0aW9uLnNjcmlwdCxcbiAgICAgICAgICAgICAgICBzcG9uc29yc2hpcDogaXRlbS5zcG9uc29yQmFsYW5jZSAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3BvbnNvckJhbGFuY2UgPiBNYXRoLnBvdygxMCwgOCkgJiZcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0ubWluU3BvbnNvcmVkQXNzZXRGZWUgfHwgMCkgPCBpdGVtLmJhbGFuY2VcbiAgICAgICAgICAgICAgICAgICAgPyBpdGVtLm1pblNwb25zb3JlZEFzc2V0RmVlXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIH0pOyB9KTsgfSksXG4gICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgd2F2ZXMgPSBfYVswXSwgYXNzZXRzID0gX2FbMV07XG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRBcnJheXMoW3dhdmVzXSwgYXNzZXRzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LDQtdC8INC40L3RhNC+0YDQvNCw0YbQuNGOINC+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtVxuICAgICAqXG4gICAgICogYGBgdHNcbiAgICAgKiBhd2FpdCB3YXZlcy5sb2dpbigpOyAvLyDQkNCy0YLQvtGA0LjQt9GD0LXQvNGB0Y8uINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINCw0LTRgNC10YEg0Lgg0L/Rg9Cx0LvQuNGH0L3Ri9C5INC60LvRjtGHXG4gICAgICogYGBgXG4gICAgICovXG4gICAgV2F2ZXMucHJvdG90eXBlLmxvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdFByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChwcm92aWRlcikgeyByZXR1cm4gcHJvdmlkZXIubG9naW4oKTsgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBfdGhpcy5fdXNlckRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog0JLRi9C70L7Qs9C40L3QuNCy0LDQtdC80YHRjyDQuNC3INGO0LfQtdGA0LBcbiAgICAgKi9cbiAgICBXYXZlcy5wcm90b3R5cGUubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdFByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChwcm92aWRlcikgeyByZXR1cm4gcHJvdmlkZXIubG9nb3V0KCk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5fdXNlckRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog0J/QvtC00L/QuNGB0YvQstCw0LXQvCDRgdC+0L7QsdGJ0LXQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPICjQv9GA0L7QstCw0LnQtNC10YAg0LzQvtC20LXRgiDRg9GB0YLQsNC90LDQstC70LjQstCw0YLRjCDQv9GA0LXRhNC40LrRgSlcbiAgICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgICAqL1xuICAgIFdhdmVzLnByb3RvdHlwZS5zaWduTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyLnNpZ25NZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqINCf0L7QtNC/0LjRgdGL0LLQsNC10Lwg0YLQuNC/0LjQt9C40YDQvtCy0LDQvdC90YvQtSDQtNCw0L3QvdGL0LVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIFdhdmVzLnByb3RvdHlwZS5zaWduVHlwZWREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByb3ZpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXIuc2lnblR5cGVkRGF0YShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDQn9C+0LvRg9GH0LDQtdC8INGB0L/QuNGB0L7QuiDQsdCw0LvQsNC90YHQvtCyINCyINC60YLQvtGA0YvRhSDQvNC+0LbQvdC+INC/0LvQsNGC0LjRgtGMINC60L7QvNC40YHRgdC40Y5cbiAgICAgKi9cbiAgICBXYXZlcy5wcm90b3R5cGUuZ2V0U3BvbnNvcmVkQmFsYW5jZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJhbGFuY2UoKS50aGVuKGZ1bmN0aW9uIChiYWxhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gYmFsYW5jZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuICEhaXRlbS5zcG9uc29yc2hpcDsgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLmJhdGNoID0gZnVuY3Rpb24gKHR4T3JMaXN0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpc09uY2UgPSAhQXJyYXkuaXNBcnJheSh0eE9yTGlzdCk7XG4gICAgICAgIHZhciBzaWduID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9zaWduKHV0aWxzXzEudG9BcnJheSh0eE9yTGlzdCkpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc09uY2UgPyByZXN1bHRbMF0gOiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNpZ246IHNpZ24sXG4gICAgICAgICAgICBicm9hZGNhc3Q6IGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2lnbigpLnRoZW4oZnVuY3Rpb24gKHRyYW5zYWN0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuYnJvYWRjYXN0KHRyYW5zYWN0aW9ucywgb3B0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUuaXNzdWUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnaXNzdWUnLCBkYXRhKV0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLnRyYW5zZmVyID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ3RyYW5zZmVyJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5yZWlzc3VlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ3JlaXNzdWUnLCBkYXRhKV0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLmJ1cm4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnYnVybicsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUubGVhc2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnbGVhc2UnLCBkYXRhKV0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLmV4Y2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ2V4Y2hhbmdlJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5jYW5jZWxMZWFzZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVQaXBlbGluZUFQSShbdHJhbnNhY3Rpb25zXzEuYWRkUGFyYW1UeXBlKCdjYW5jZWxMZWFzZScsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUuYWxpYXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnYWxpYXMnLCBkYXRhKV0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLm1hc3NUcmFuc2ZlciA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVQaXBlbGluZUFQSShbdHJhbnNhY3Rpb25zXzEuYWRkUGFyYW1UeXBlKCdtYXNzVHJhbnNmZXInLCBkYXRhKV0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLmRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnZGF0YScsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUuc3BvbnNvcnNoaXAgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnc3BvbnNvcnNoaXAnLCBkYXRhKV0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLnNldFNjcmlwdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVQaXBlbGluZUFQSShbdHJhbnNhY3Rpb25zXzEuYWRkUGFyYW1UeXBlKCdzZXRTY3JpcHQnLCBkYXRhKV0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLnNldEFzc2V0U2NyaXB0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ3NldEFzc2V0U2NyaXB0JywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnaW52b2tlJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5icm9hZGNhc3QgPSBmdW5jdGlvbiAodHgsIG9wdCkge1xuICAgICAgICByZXR1cm4gYnJvYWRjYXN0XzEuZGVmYXVsdCh0aGlzLl9vcHRpb25zLk5PREVfVVJMLCB0eCwgb3B0KTsgLy8gVE9ETyBGaXggdHlwZXNcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS53YWl0VHhDb25maXJtID0gZnVuY3Rpb24gKHR4LCBjb25maXJtYXRpb25zKSB7XG4gICAgICAgIHJldHVybiB3YWl0XzEuZGVmYXVsdCh0aGlzLl9vcHRpb25zLk5PREVfVVJMLCB0eCwgeyBjb25maXJtYXRpb25zOiBjb25maXJtYXRpb25zIH0pOyAvLyBUT0RPIEZpeCB0eXBlc1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLl9jcmVhdGVQaXBlbGluZUFQSSA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFRPRE8gZml4IHR5cGVzXG4gICAgICAgIHZhciBhcGkgPSB1dGlsc18xLmV2b2x2ZShjb25zdGFudHNfMS5OQU1FX01BUCwgZnVuY3Rpb24gKGtleSwgdHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9jcmVhdGVQaXBlbGluZUFQSShfX3NwcmVhZEFycmF5cyhsaXN0LCBbX19hc3NpZ24oeyB0eXBlOiB0eXBlIH0sIGRhdGEpXSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgYXBpKSwgdGhpcy5fY3JlYXRlQWN0aW9ucyhsaXN0KSk7XG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUuX2NyZWF0ZUFjdGlvbnMgPSBmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc2lnbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9zaWduKGxpc3QpOyB9O1xuICAgICAgICB2YXIgYnJvYWRjYXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBzaWduKCkudGhlbihmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5icm9hZGNhc3QobGlzdCwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgc2lnbjogc2lnbiwgYnJvYWRjYXN0OiBicm9hZGNhc3QgfTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5fc2lnbiA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyLnNpZ24obGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFdhdmVzO1xufSgpKTtcbmV4cG9ydHMuV2F2ZXMgPSBXYXZlcztcbmV4cG9ydHMuZGVmYXVsdCA9IFdhdmVzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2F2ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlRZUEVfTUFQID0ge1xuICAgIDM6ICdpc3N1ZScsXG4gICAgNDogJ3RyYW5zZmVyJyxcbiAgICA1OiAncmVpc3N1ZScsXG4gICAgNjogJ2J1cm4nLFxuICAgIDc6ICdleGNoYW5nZScsXG4gICAgODogJ2xlYXNlJyxcbiAgICA5OiAnY2FuY2VsTGVhc2UnLFxuICAgIDEwOiAnYWxpYXMnLFxuICAgIDExOiAnbWFzc1RyYW5zZmVyJyxcbiAgICAxMjogJ2RhdGEnLFxuICAgIDEzOiAnc2V0U2NyaXB0JyxcbiAgICAxNDogJ3Nwb25zb3JzaGlwJyxcbiAgICAxNTogJ3NldEFzc2V0U2NyaXB0JyxcbiAgICAxNjogJ2ludm9rZSdcbn07XG5leHBvcnRzLk5BTUVfTUFQID0ge1xuICAgICdpc3N1ZSc6IDMsXG4gICAgJ3RyYW5zZmVyJzogNCxcbiAgICAncmVpc3N1ZSc6IDUsXG4gICAgJ2J1cm4nOiA2LFxuICAgICdleGNoYW5nZSc6IDcsXG4gICAgJ2xlYXNlJzogOCxcbiAgICAnY2FuY2VsTGVhc2UnOiA5LFxuICAgICdhbGlhcyc6IDEwLFxuICAgICdtYXNzVHJhbnNmZXInOiAxMSxcbiAgICAnZGF0YSc6IDEyLFxuICAgICdzZXRTY3JpcHQnOiAxMyxcbiAgICAnc3BvbnNvcnNoaXAnOiAxNCxcbiAgICAnc2V0QXNzZXRTY3JpcHQnOiAxNSxcbiAgICAnaW52b2tlJzogMTZcbn07XG5leHBvcnRzLkRFRkFVTFRfT1BUSU9OUyA9IHtcbiAgICBOT0RFX1VSTDogJ2h0dHBzOi8vbm9kZXMud2F2ZXNwbGF0Zm9ybS5jb20nLFxuICAgIE1BVENIRVJfVVJMOiAnaHR0cHM6Ly9ub2Rlcy53YXZlc3BsYXRmb21yLmNvbS9tYXRjaGVyJ1xufTtcbmV4cG9ydHMuREVGQVVMVF9CUk9BRENBU1RfT1BUSU9OUyA9IHtcbiAgICBjaGFpbjogZmFsc2UsXG4gICAgY29uZmlybWF0aW9uczogLTFcbn07XG5leHBvcnRzLk1BWF9BTElBU19MRU5HVEggPSAzMDtcbmV4cG9ydHMuU01BUlRfQVNTRVRfRVhUUkFfRkVFID0gMC4wMDQgKiBNYXRoLnBvdygxMCwgOCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgb2JqZWN0XzEgPSByZXF1aXJlKFwiLi9vYmplY3RcIik7XG5mdW5jdGlvbiB0b0FycmF5KGRhdGEpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV07XG59XG5leHBvcnRzLnRvQXJyYXkgPSB0b0FycmF5O1xuZnVuY3Rpb24gd2FpdCh0aW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG4gICAgfSk7XG59XG5leHBvcnRzLndhaXQgPSB3YWl0O1xuZnVuY3Rpb24gZXZvbHZlKGRhdGEsIHByb2Nlc3MpIHtcbiAgICByZXR1cm4gb2JqZWN0XzEuZW50cmllcyhkYXRhKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgX2EpIHtcbiAgICAgICAgdmFyIGtleSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICBhY2Nba2V5XSA9IHByb2Nlc3Moa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufVxuZXhwb3J0cy5ldm9sdmUgPSBldm9sdmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKTtcbn07XG5leHBvcnRzLmVudHJpZXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbbmFtZSwgb2JqW25hbWVdXTsgfSk7XG59O1xuZXhwb3J0cy52YWx1ZXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIG9ialtrZXldOyB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIGFkZFBhcmFtVHlwZShuYW1lLCBkYXRhKSB7XG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBkYXRhKSwgeyB0eXBlOiBjb25zdGFudHNfMS5OQU1FX01BUFtuYW1lXSB9KTtcbn1cbmV4cG9ydHMuYWRkUGFyYW1UeXBlID0gYWRkUGFyYW1UeXBlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhbnNhY3Rpb25zLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWdsb2JhbFxudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gdGhlIG9ubHkgcmVsaWFibGUgbWVhbnMgdG8gZ2V0IHRoZSBnbG9iYWwgb2JqZWN0IGlzXG5cdC8vIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxuXHQvLyBIb3dldmVyLCB0aGlzIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBDaHJvbWUgYXBwcy5cblx0aWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gc2VsZjsgfVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHdpbmRvdzsgfVxuXHRpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGdsb2JhbDsgfVxuXHR0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdCcpO1xufVxuXG52YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGdsb2JhbC5mZXRjaDtcblxuLy8gTmVlZGVkIGZvciBUeXBlU2NyaXB0IGFuZCBXZWJwYWNrLlxuZXhwb3J0cy5kZWZhdWx0ID0gZ2xvYmFsLmZldGNoLmJpbmQoZ2xvYmFsKTtcblxuZXhwb3J0cy5IZWFkZXJzID0gZ2xvYmFsLkhlYWRlcnM7XG5leHBvcnRzLlJlcXVlc3QgPSBnbG9iYWwuUmVxdWVzdDtcbmV4cG9ydHMuUmVzcG9uc2UgPSBnbG9iYWwuUmVzcG9uc2U7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgd2F2ZXNfanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiQHdhdmVzL3dhdmVzLWpzXCIpKTtcbnZhciBzdG9yYWdlX3Byb3ZpZGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkB3YXZlcy5leGNoYW5nZS9zdG9yYWdlLXByb3ZpZGVyXCIpKTtcbnZhciBwcm92aWRlciA9IG5ldyBzdG9yYWdlX3Byb3ZpZGVyXzEuZGVmYXVsdCgpO1xuZXhwb3J0cy53YXZlcyA9IG5ldyB3YXZlc19qc18xLmRlZmF1bHQoKTtcbnZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbnN0eWxlLmlubmVySFRNTCA9IFwiXFxuICAgIC53YXZlc19fZG9uYXRlLWJ1dHRvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoNzMsIDgwLCA5Nik7IGNvbG9yOiB3aGl0ZTsgcGFkZGluZzogMjBweCAzMHB4OyBib3JkZXItcmFkaXVzOiA1cHg7IGJvcmRlcjogbm9uZTsgZm9udC1zaXplOiAyMHB4O1xcbiAgICB9XCIudHJpbSgpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XG5leHBvcnRzLndhdmVzLnNldFByb3ZpZGVyKHByb3ZpZGVyKTtcbmZ1bmN0aW9uIGRvbmF0ZShlbGVtZW50LCBhbW91bnQpIHtcbiAgICBleHBvcnRzLndhdmVzXG4gICAgICAgIC50cmFuc2Zlcih7XG4gICAgICAgIHJlY2lwaWVudDogZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlY2lwaWVudFwiKSxcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIGFzc2V0SWQ6IFwiV0FWRVNcIlxuICAgIH0pXG4gICAgICAgIC5icm9hZGNhc3QoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJ1NwYXNpYmEhJztcbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICdEZW5lZyBuZXQhJztcbiAgICB9KTtcbn1cbmV4cG9ydHMuZG9uYXRlID0gZG9uYXRlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==