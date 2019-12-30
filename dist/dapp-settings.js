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
exports.waves.setProvider(provider);
function donate(element, amount) {
    var label = document.querySelector(".waves__donate-label");
    exports.waves
        .transfer({
        recipient: element.getAttribute("data-recipient"),
        amount: amount,
        assetId: "WAVES"
    })
        .broadcast()
        .then(function () {
        label.innerHTML = 'Thank you for the donate!';
    }, function (e) {
        label.innerHTML = 'Here is an error &#129300; Check the console!';
        console.log(e);
    });
}
exports.donate = donate;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kQXBwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kQXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzLmV4Y2hhbmdlL3N0b3JhZ2UtcHJvdmlkZXIvZGlzdC9zdG9yYWdlLXByb3ZpZGVyLm1pbi5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvYXBpLW5vZGUvYWRkcmVzc2VzL2luZGV4LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy9hcGktbm9kZS9hc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL2FwaS1ub2RlL2Jsb2Nrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvYXBpLW5vZGUvdHJhbnNhY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL2Jsb2Nrcy9nZXROZXR3b3JrQnl0ZS5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy9ub2RlLWFwaS1qcy9janMvdG9vbHMvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL3F1ZXJ5LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy9yZXF1ZXN0LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy9yZXNvbHZlLmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL3RyYW5zYWN0aW9ucy9icm9hZGNhc3QuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL3RyYW5zYWN0aW9ucy93YWl0LmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy91dGlscy5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy93YXZlcy1qcy9janMvV2F2ZXMuanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvd2F2ZXMtanMvY2pzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy93YXZlcy1qcy9janMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZEFwcC8uL25vZGVfbW9kdWxlcy9Ad2F2ZXMvd2F2ZXMtanMvY2pzL3V0aWxzL29iamVjdC5qcyIsIndlYnBhY2s6Ly9kQXBwLy4vbm9kZV9tb2R1bGVzL0B3YXZlcy93YXZlcy1qcy9janMvdXRpbHMvdHJhbnNhY3Rpb25zLmpzIiwid2VicGFjazovL2RBcHAvLi9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9icm93c2VyLmpzIiwid2VicGFjazovL2RBcHAvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNB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T0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsa0JBQWtCLG1CQUFPLENBQUMscUVBQWM7QUFDeEM7QUFDQSwrQkFBK0IsVUFBVSxtQ0FBbUM7QUFDNUU7QUFDQTtBQUNBLHdDOzs7Ozs7Ozs7Ozs7O0FDbEJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsYUFBYTtBQUNoRCxxQ0FBcUMsZUFBZTtBQUNwRCxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DOzs7Ozs7Ozs7Ozs7O0FDdEJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQ0FBaUMsbUJBQU8sQ0FBQyxvRUFBaUI7QUFDMUQseUNBQXlDLG1CQUFPLENBQUMsc0hBQWtDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxREFBcUQ7QUFDckQ7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiJkYXBwLXNldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZEFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkQXBwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLnN0b3JhZ2VQcm92aWRlcj1lKCk6dC5zdG9yYWdlUHJvdmlkZXI9ZSgpfSh0aGlzLChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTgpfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO24ucihlKSxuLmQoZSxcIl9fZXh0ZW5kc1wiLChmdW5jdGlvbigpe3JldHVybiBvfSkpLG4uZChlLFwiX19hc3NpZ25cIiwoZnVuY3Rpb24oKXtyZXR1cm4gaX0pKSxuLmQoZSxcIl9fcmVzdFwiLChmdW5jdGlvbigpe3JldHVybiBzfSkpLG4uZChlLFwiX19kZWNvcmF0ZVwiLChmdW5jdGlvbigpe3JldHVybiBhfSkpLG4uZChlLFwiX19wYXJhbVwiLChmdW5jdGlvbigpe3JldHVybiB1fSkpLG4uZChlLFwiX19tZXRhZGF0YVwiLChmdW5jdGlvbigpe3JldHVybiBjfSkpLG4uZChlLFwiX19hd2FpdGVyXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ9KSksbi5kKGUsXCJfX2dlbmVyYXRvclwiLChmdW5jdGlvbigpe3JldHVybiBsfSkpLG4uZChlLFwiX19leHBvcnRTdGFyXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGh9KSksbi5kKGUsXCJfX3ZhbHVlc1wiLChmdW5jdGlvbigpe3JldHVybiBkfSkpLG4uZChlLFwiX19yZWFkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHB9KSksbi5kKGUsXCJfX3NwcmVhZFwiLChmdW5jdGlvbigpe3JldHVybiBffSkpLG4uZChlLFwiX19zcHJlYWRBcnJheXNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdn0pKSxuLmQoZSxcIl9fYXdhaXRcIiwoZnVuY3Rpb24oKXtyZXR1cm4geX0pKSxuLmQoZSxcIl9fYXN5bmNHZW5lcmF0b3JcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZ30pKSxuLmQoZSxcIl9fYXN5bmNEZWxlZ2F0b3JcIiwoZnVuY3Rpb24oKXtyZXR1cm4gd30pKSxuLmQoZSxcIl9fYXN5bmNWYWx1ZXNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gbX0pKSxuLmQoZSxcIl9fbWFrZVRlbXBsYXRlT2JqZWN0XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGJ9KSksbi5kKGUsXCJfX2ltcG9ydFN0YXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gT30pKSxuLmQoZSxcIl9faW1wb3J0RGVmYXVsdFwiLChmdW5jdGlvbigpe3JldHVybiBQfSkpO1xuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxuXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG52YXIgcj1mdW5jdGlvbih0LGUpe3JldHVybihyPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKWUuaGFzT3duUHJvcGVydHkobikmJih0W25dPWVbbl0pfSkodCxlKX07ZnVuY3Rpb24gbyh0LGUpe2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPXR9cih0LGUpLHQucHJvdG90eXBlPW51bGw9PT1lP09iamVjdC5jcmVhdGUoZSk6KG4ucHJvdG90eXBlPWUucHJvdG90eXBlLG5ldyBuKX12YXIgaT1mdW5jdGlvbigpe3JldHVybihpPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW25dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07ZnVuY3Rpb24gcyh0LGUpe3ZhciBuPXt9O2Zvcih2YXIgciBpbiB0KU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LHIpJiZlLmluZGV4T2Yocik8MCYmKG5bcl09dFtyXSk7aWYobnVsbCE9dCYmXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG89MDtmb3Iocj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO288ci5sZW5ndGg7bysrKWUuaW5kZXhPZihyW29dKTwwJiZPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodCxyW29dKSYmKG5bcltvXV09dFtyW29dXSl9cmV0dXJuIG59ZnVuY3Rpb24gYSh0LGUsbixyKXt2YXIgbyxpPWFyZ3VtZW50cy5sZW5ndGgscz1pPDM/ZTpudWxsPT09cj9yPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxuKTpyO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBSZWZsZWN0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBSZWZsZWN0LmRlY29yYXRlKXM9UmVmbGVjdC5kZWNvcmF0ZSh0LGUsbixyKTtlbHNlIGZvcih2YXIgYT10Lmxlbmd0aC0xO2E+PTA7YS0tKShvPXRbYV0pJiYocz0oaTwzP28ocyk6aT4zP28oZSxuLHMpOm8oZSxuKSl8fHMpO3JldHVybiBpPjMmJnMmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4scyksc31mdW5jdGlvbiB1KHQsZSl7cmV0dXJuIGZ1bmN0aW9uKG4scil7ZShuLHIsdCl9fWZ1bmN0aW9uIGModCxlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSlyZXR1cm4gUmVmbGVjdC5tZXRhZGF0YSh0LGUpfWZ1bmN0aW9uIGYodCxlLG4scil7cmV0dXJuIG5ldyhufHwobj1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8saSl7ZnVuY3Rpb24gcyh0KXt0cnl7dShyLm5leHQodCkpfWNhdGNoKHQpe2kodCl9fWZ1bmN0aW9uIGEodCl7dHJ5e3Uoci50aHJvdyh0KSl9Y2F0Y2godCl7aSh0KX19ZnVuY3Rpb24gdSh0KXt0LmRvbmU/byh0LnZhbHVlKTpuZXcgbigoZnVuY3Rpb24oZSl7ZSh0LnZhbHVlKX0pKS50aGVuKHMsYSl9dSgocj1yLmFwcGx5KHQsZXx8W10pKS5uZXh0KCkpfSkpfWZ1bmN0aW9uIGwodCxlKXt2YXIgbixyLG8saSxzPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBpPXtuZXh0OmEoMCksdGhyb3c6YSgxKSxyZXR1cm46YSgyKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoaVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxpO2Z1bmN0aW9uIGEoaSl7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihpKXtpZihuKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO2Zvcig7czspdHJ5e2lmKG49MSxyJiYobz0yJmlbMF0/ci5yZXR1cm46aVswXT9yLnRocm93fHwoKG89ci5yZXR1cm4pJiZvLmNhbGwociksMCk6ci5uZXh0KSYmIShvPW8uY2FsbChyLGlbMV0pKS5kb25lKXJldHVybiBvO3N3aXRjaChyPTAsbyYmKGk9WzImaVswXSxvLnZhbHVlXSksaVswXSl7Y2FzZSAwOmNhc2UgMTpvPWk7YnJlYWs7Y2FzZSA0OnJldHVybiBzLmxhYmVsKysse3ZhbHVlOmlbMV0sZG9uZTohMX07Y2FzZSA1OnMubGFiZWwrKyxyPWlbMV0saT1bMF07Y29udGludWU7Y2FzZSA3Omk9cy5vcHMucG9wKCkscy50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShvPShvPXMudHJ5cykubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pJiYoNj09PWlbMF18fDI9PT1pWzBdKSl7cz0wO2NvbnRpbnVlfWlmKDM9PT1pWzBdJiYoIW98fGlbMV0+b1swXSYmaVsxXTxvWzNdKSl7cy5sYWJlbD1pWzFdO2JyZWFrfWlmKDY9PT1pWzBdJiZzLmxhYmVsPG9bMV0pe3MubGFiZWw9b1sxXSxvPWk7YnJlYWt9aWYobyYmcy5sYWJlbDxvWzJdKXtzLmxhYmVsPW9bMl0scy5vcHMucHVzaChpKTticmVha31vWzJdJiZzLm9wcy5wb3AoKSxzLnRyeXMucG9wKCk7Y29udGludWV9aT1lLmNhbGwodCxzKX1jYXRjaCh0KXtpPVs2LHRdLHI9MH1maW5hbGx5e249bz0wfWlmKDUmaVswXSl0aHJvdyBpWzFdO3JldHVybnt2YWx1ZTppWzBdP2lbMV06dm9pZCAwLGRvbmU6ITB9fShbaSxhXSl9fX1mdW5jdGlvbiBoKHQsZSl7Zm9yKHZhciBuIGluIHQpZS5oYXNPd25Qcm9wZXJ0eShuKXx8KGVbbl09dFtuXSl9ZnVuY3Rpb24gZCh0KXt2YXIgZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXSxuPTA7cmV0dXJuIGU/ZS5jYWxsKHQpOntuZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIHQmJm4+PXQubGVuZ3RoJiYodD12b2lkIDApLHt2YWx1ZTp0JiZ0W24rK10sZG9uZTohdH19fX1mdW5jdGlvbiBwKHQsZSl7dmFyIG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0W1N5bWJvbC5pdGVyYXRvcl07aWYoIW4pcmV0dXJuIHQ7dmFyIHIsbyxpPW4uY2FsbCh0KSxzPVtdO3RyeXtmb3IoOyh2b2lkIDA9PT1lfHxlLS0gPjApJiYhKHI9aS5uZXh0KCkpLmRvbmU7KXMucHVzaChyLnZhbHVlKX1jYXRjaCh0KXtvPXtlcnJvcjp0fX1maW5hbGx5e3RyeXtyJiYhci5kb25lJiYobj1pLnJldHVybikmJm4uY2FsbChpKX1maW5hbGx5e2lmKG8pdGhyb3cgby5lcnJvcn19cmV0dXJuIHN9ZnVuY3Rpb24gXygpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0PXQuY29uY2F0KHAoYXJndW1lbnRzW2VdKSk7cmV0dXJuIHR9ZnVuY3Rpb24gdigpe2Zvcih2YXIgdD0wLGU9MCxuPWFyZ3VtZW50cy5sZW5ndGg7ZTxuO2UrKyl0Kz1hcmd1bWVudHNbZV0ubGVuZ3RoO3ZhciByPUFycmF5KHQpLG89MDtmb3IoZT0wO2U8bjtlKyspZm9yKHZhciBpPWFyZ3VtZW50c1tlXSxzPTAsYT1pLmxlbmd0aDtzPGE7cysrLG8rKylyW29dPWlbc107cmV0dXJuIHJ9ZnVuY3Rpb24geSh0KXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIHk/KHRoaXMudj10LHRoaXMpOm5ldyB5KHQpfWZ1bmN0aW9uIGcodCxlLG4pe2lmKCFTeW1ib2wuYXN5bmNJdGVyYXRvcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO3ZhciByLG89bi5hcHBseSh0LGV8fFtdKSxpPVtdO3JldHVybiByPXt9LHMoXCJuZXh0XCIpLHMoXCJ0aHJvd1wiKSxzKFwicmV0dXJuXCIpLHJbU3ltYm9sLmFzeW5jSXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9LHI7ZnVuY3Rpb24gcyh0KXtvW3RdJiYoclt0XT1mdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKG4scil7aS5wdXNoKFt0LGUsbixyXSk+MXx8YSh0LGUpfSkpfSl9ZnVuY3Rpb24gYSh0LGUpe3RyeXsobj1vW3RdKGUpKS52YWx1ZSBpbnN0YW5jZW9mIHk/UHJvbWlzZS5yZXNvbHZlKG4udmFsdWUudikudGhlbih1LGMpOmYoaVswXVsyXSxuKX1jYXRjaCh0KXtmKGlbMF1bM10sdCl9dmFyIG59ZnVuY3Rpb24gdSh0KXthKFwibmV4dFwiLHQpfWZ1bmN0aW9uIGModCl7YShcInRocm93XCIsdCl9ZnVuY3Rpb24gZih0LGUpe3QoZSksaS5zaGlmdCgpLGkubGVuZ3RoJiZhKGlbMF1bMF0saVswXVsxXSl9fWZ1bmN0aW9uIHcodCl7dmFyIGUsbjtyZXR1cm4gZT17fSxyKFwibmV4dFwiKSxyKFwidGhyb3dcIiwoZnVuY3Rpb24odCl7dGhyb3cgdH0pKSxyKFwicmV0dXJuXCIpLGVbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxlO2Z1bmN0aW9uIHIocixvKXtlW3JdPXRbcl0/ZnVuY3Rpb24oZSl7cmV0dXJuKG49IW4pP3t2YWx1ZTp5KHRbcl0oZSkpLGRvbmU6XCJyZXR1cm5cIj09PXJ9Om8/byhlKTplfTpvfX1mdW5jdGlvbiBtKHQpe2lmKCFTeW1ib2wuYXN5bmNJdGVyYXRvcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO3ZhciBlLG49dFtTeW1ib2wuYXN5bmNJdGVyYXRvcl07cmV0dXJuIG4/bi5jYWxsKHQpOih0PWQodCksZT17fSxyKFwibmV4dFwiKSxyKFwidGhyb3dcIikscihcInJldHVyblwiKSxlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSxlKTtmdW5jdGlvbiByKG4pe2Vbbl09dFtuXSYmZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihyLG8peyhmdW5jdGlvbih0LGUsbixyKXtQcm9taXNlLnJlc29sdmUocikudGhlbigoZnVuY3Rpb24oZSl7dCh7dmFsdWU6ZSxkb25lOm59KX0pLGUpfSkocixvLChlPXRbbl0oZSkpLmRvbmUsZS52YWx1ZSl9KSl9fX1mdW5jdGlvbiBiKHQsZSl7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eT9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcInJhd1wiLHt2YWx1ZTplfSk6dC5yYXc9ZSx0fWZ1bmN0aW9uIE8odCl7aWYodCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBlPXt9O2lmKG51bGwhPXQpZm9yKHZhciBuIGluIHQpT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodCxuKSYmKGVbbl09dFtuXSk7cmV0dXJuIGUuZGVmYXVsdD10LGV9ZnVuY3Rpb24gUCh0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0KXtmb3IodmFyIG4gaW4gdCllLmhhc093blByb3BlcnR5KG4pfHwoZVtuXT10W25dKX1PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyKG4oMTIpKSxyKG4oNikpLHIobigxNikpLHIobig3KSkscihuKDUpKSxyKG4oNCkpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5rZXlzPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3Qua2V5cyh0KX07dmFyIHI9TWF0aC5mbG9vcihEYXRlLm5vdygpKk1hdGgucmFuZG9tKCkpLG89MDtlLnVuaXF1ZUlkPWZ1bmN0aW9uKHQpe3JldHVybiB0K1wiLVwiK3IrXCItXCIrbysrfSxlLnRvQXJyYXk9ZnVuY3Rpb24odCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/dDpbdF19LGUucGlwZT1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTxhcmd1bWVudHMubGVuZ3RoO2UrKyl0W2VdPWFyZ3VtZW50c1tlXTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiBlKHQpfSksZSl9fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMCksbz1uKDExKSxpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXt0aGlzLnF1ZXVlPW5ldyBvLlF1ZXVlKHQpfXJldHVybiB0LnByb3RvdHlwZS5kaWFsb2c9ZnVuY3Rpb24odCl7cmV0dXJuIHIuX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZSxuLG8saSxzPXRoaXM7cmV0dXJuIHIuX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24oYSl7c3dpdGNoKGEubGFiZWwpe2Nhc2UgMDpyZXR1cm4gdGhpcy5ydW5CZWZvcmVTaG93KCksWzQsdGhpcy5nZXRCdXMoKV07Y2FzZSAxOmlmKGU9YS5zZW50KCksbj1mdW5jdGlvbigpe3JldHVybiByLl9fYXdhaXRlcihzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIHIuX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24obil7cmV0dXJuWzIsdChlKV19KSl9KSl9LCF0aGlzLnF1ZXVlLmNhblB1c2goKSlyZXR1cm5bMyw2XTthLmxhYmVsPTI7Y2FzZSAyOnJldHVybiBhLnRyeXMucHVzaChbMiw0LCw1XSksWzQsdGhpcy5xdWV1ZS5wdXNoKG4pXTtjYXNlIDM6cmV0dXJuIG89YS5zZW50KCksdGhpcy5ydW5BZnRlclNob3coKSxbMixvXTtjYXNlIDQ6cmV0dXJuIGk9YS5zZW50KCksdGhpcy5ydW5BZnRlclNob3coKSxbMixQcm9taXNlLnJlamVjdChpKV07Y2FzZSA1OnJldHVyblszLDddO2Nhc2UgNjpyZXR1cm5bMixQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJRdWV1ZSBpcyBmdWxsIVwiKSldO2Nhc2UgNzpyZXR1cm5bMl19fSkpfSkpfSx0LnByb3RvdHlwZS5ydW5CZWZvcmVTaG93PWZ1bmN0aW9uKCl7MD09PXRoaXMucXVldWUubGVuZ3RoJiZ0aGlzLmJlZm9yZVNob3coKX0sdC5wcm90b3R5cGUucnVuQWZ0ZXJTaG93PWZ1bmN0aW9uKCl7MD09PXRoaXMucXVldWUubGVuZ3RoJiZ0aGlzLmFmdGVyU2hvdygpfSx0fSgpO2UuVHJhbnNwb3J0PWl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKHQpe2Zvcih2YXIgbiBpbiB0KWUuaGFzT3duUHJvcGVydHkobil8fChlW25dPXRbbl0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIobigyKSkscihuKDEzKSkscihuKDE1KSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxmdW5jdGlvbih0KXshZnVuY3Rpb24odCl7dC5MT0dfTEVWRUw9e1BST0RVQ1RJT046MCxFUlJPUlM6MSxWRVJCT1NFOjJ9LHQubG9nTGV2ZWw9dC5MT0dfTEVWRUwuUFJPRFVDVElPTix0Lm1ldGhvZHNEYXRhPXtsb2c6e3NhdmU6ITEsbG9nTGV2ZWw6dC5MT0dfTEVWRUwuVkVSQk9TRX0saW5mbzp7c2F2ZTohMSxsb2dMZXZlbDp0LkxPR19MRVZFTC5WRVJCT1NFfSx3YXJuOntzYXZlOiExLGxvZ0xldmVsOnQuTE9HX0xFVkVMLlZFUkJPU0V9LGVycm9yOntzYXZlOiEwLGxvZ0xldmVsOnQuTE9HX0xFVkVMLkVSUk9SU319fSh0LmNvbnNvbGV8fCh0LmNvbnNvbGU9e30pKX0oZS5jb25maWd8fChlLmNvbmZpZz17fSkpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXt9O2UuQWRhcHRlcj1yfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsbz10aGlzJiZ0aGlzLl9fZXh0ZW5kc3x8KHI9ZnVuY3Rpb24odCxlKXtyZXR1cm4ocj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSllLmhhc093blByb3BlcnR5KG4pJiYodFtuXT1lW25dKX0pKHQsZSl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbigpe3RoaXMuY29uc3RydWN0b3I9dH1yKHQsZSksdC5wcm90b3R5cGU9bnVsbD09PWU/T2JqZWN0LmNyZWF0ZShlKToobi5wcm90b3R5cGU9ZS5wcm90b3R5cGUsbmV3IG4pfSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShuLHIpe3ZhciBvPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gby53aW49bixvLnR5cGU9cixvLmhhbmRsZXI9ZnVuY3Rpb24odCl7by50cmlnZ2VyKFwibWVzc2FnZVwiLHQpfSxyPT09ZS5QUk9UT0NPTF9UWVBFUy5MSVNURU4mJm8ud2luLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsby5oYW5kbGVyLCExKSxvfXZhciBuO3JldHVybiBvKGUsdCksZS5wcm90b3R5cGUuZGlzcGF0Y2g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMud2luLnBvc3RNZXNzYWdlKHQsXCIqXCIpLHRoaXN9LGUucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLnR5cGU9PT1lLlBST1RPQ09MX1RZUEVTLkxJU1RFTiYmdGhpcy53aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIix0aGlzLmhhbmRsZXIsITEpLHRoaXMud2luPWUuX2Zha2VXaW59LGUuX2Zha2VXaW49e3Bvc3RNZXNzYWdlOm49ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sYWRkRXZlbnRMaXN0ZW5lcjpuLHJlbW92ZUV2ZW50TGlzdGVuZXI6bn0sZX0obigxNykuRXZlbnRFbWl0dGVyKTtlLldpbmRvd1Byb3RvY29sPWksZnVuY3Rpb24odCl7dC5QUk9UT0NPTF9UWVBFUz17TElTVEVOOlwibGlzdGVuXCIsRElTUEFUQ0g6XCJkaXNwYXRjaFwifX0oaT1lLldpbmRvd1Byb3RvY29sfHwoZS5XaW5kb3dQcm90b2NvbD17fSkpLGUuV2luZG93UHJvdG9jb2w9aX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oOSk7ZS5TdG9yYWdlUHJvdmlkZXI9ci5TdG9yYWdlUHJvdmlkZXIsZS5kZWZhdWx0PXIuU3RvcmFnZVByb3ZpZGVyfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigwKSxvPW4oMTApLGk9bigxOSkscz1uKDEpLGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dD10fHxcImh0dHBzOi8vd2F2ZXMuZXhjaGFuZ2Uvc2lnbmVyXCI7dmFyIG49by5UcmFuc3BvcnRJZnJhbWUuY2FuVXNlKCk/by5UcmFuc3BvcnRJZnJhbWU6aS5UcmFuc3BvcnRXaW5kb3c7dGhpcy5fdHJhbnNwb3J0PW5ldyBuKHQsMyksbnVsbCE9ZSYmKHMuY29uZmlnLmNvbnNvbGUubG9nTGV2ZWw9cy5jb25maWcuY29uc29sZS5MT0dfTEVWRUwuVkVSQk9TRSl9cmV0dXJuIHQucHJvdG90eXBlLmNvbm5lY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIHIuX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXtyZXR1cm4gci5fX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihlKXtyZXR1cm5bMixQcm9taXNlLnJlc29sdmUodGhpcy5fdHJhbnNwb3J0LmV2ZW50KChmdW5jdGlvbihlKXtyZXR1cm4gZS5kaXNwYXRjaEV2ZW50KFwiY29ubmVjdFwiLHQpfSkpKV19KSl9KSl9LHQucHJvdG90eXBlLmxvZ291dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLl90cmFuc3BvcnQuZGlhbG9nKChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZXF1ZXN0KFwibG9nb3V0XCIpfSkpfSx0LnByb3RvdHlwZS5sb2dpbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLl90cmFuc3BvcnQuZGlhbG9nKChmdW5jdGlvbih0KXtyZXR1cm4gdC5yZXF1ZXN0KFwibG9naW5cIil9KSl9LHQucHJvdG90eXBlLnNpZ25NZXNzYWdlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLl90cmFuc3BvcnQuZGlhbG9nKChmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXF1ZXN0KFwic2lnbi1tZXNzYWdlXCIsdCl9KSl9LHQucHJvdG90eXBlLnNpZ25UeXBlZERhdGE9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3RyYW5zcG9ydC5kaWFsb2coKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcXVlc3QoXCJzaWduLXR5cGVkLWRhdGFcIix0KX0pKX0sdC5wcm90b3R5cGUuc2lnbj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5fdHJhbnNwb3J0LmRpYWxvZygoZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVxdWVzdChcInNpZ25cIix0KX0pKX0sdH0oKTtlLlN0b3JhZ2VQcm92aWRlcj1hfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9bigwKSxvPW4oMyksaT1uKDEpLHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShuLHIpe3ZhciBvPXQuY2FsbCh0aGlzLHIpfHx0aGlzO3JldHVybiBvLl9pZnJhbWU9ZS5fY3JlYXRlSWZyYW1lKG4pLG8uX3JlYWR5PWkuV2luZG93QWRhcHRlci5jcmVhdGVTaW1wbGVXaW5kb3dBZGFwdGVyKG8uX2lmcmFtZSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIG8uX2hpZGVJZnJhbWUoKSxuZXcgaS5CdXModCwtMSl9KSksby5fYWRkSWZyYW1lVG9Eb20oKSxvfXJldHVybiByLl9fZXh0ZW5kcyhlLHQpLGUuY2FuVXNlPWZ1bmN0aW9uKCl7dmFyIHQ9bmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLGU9dC5pbmNsdWRlcyhcInNhZmFyaVwiKSYmIXQuaW5jbHVkZXMoXCJjaHJvbWVcIik7cmV0dXJuIShudWxsIT1uYXZpZ2F0b3IucGxhdGZvcm0mJi9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSl8fGUpfSxlLl9jcmVhdGVJZnJhbWU9ZnVuY3Rpb24odCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtyZXR1cm4gZS5zdHlsZS50cmFuc2l0aW9uPVwib3BhY2l0eSAuMnNcIixlLnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixlLnN0eWxlLm9wYWNpdHk9XCIwXCIsZS5zcmM9dCxlfSxlLnByb3RvdHlwZS5ldmVudD1mdW5jdGlvbih0KXt0aGlzLl9yZWFkeS50aGVuKChmdW5jdGlvbihlKXt0KGUpfSkpfSxlLnByb3RvdHlwZS5nZXRCdXM9ZnVuY3Rpb24oKXtyZXR1cm4gci5fX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3JldHVybiByLl9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKHQpe3JldHVyblsyLHRoaXMuX3JlYWR5XX0pKX0pKX0sZS5wcm90b3R5cGUuYmVmb3JlU2hvdz1mdW5jdGlvbigpe3RoaXMuX3Nob3dJZnJhbWUoKX0sZS5wcm90b3R5cGUuYWZ0ZXJTaG93PWZ1bmN0aW9uKCl7dGhpcy5faGlkZUlmcmFtZSgpfSxlLnByb3RvdHlwZS5fYWRkSWZyYW1lVG9Eb209ZnVuY3Rpb24oKXt2YXIgdD10aGlzO251bGwhPWRvY3VtZW50LmJvZHk/ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9pZnJhbWUpOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKGZ1bmN0aW9uKCl7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0Ll9pZnJhbWUpfSkpfSxlLnByb3RvdHlwZS5fc2hvd0lmcmFtZT1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5fYXBwbHlTdHlsZSh7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OlwiMTAwJVwiLGxlZnQ6XCIwXCIsdG9wOlwiMFwiLGJvcmRlcjpcIm5vbmVcIixwb3NpdGlvbjpcImZpeGVkXCIsZGlzcGxheTpcImJsb2NrXCIsb3BhY2l0eTpcIjBcIix6SW5kZXg6XCI5OTk5OTk5OVwifSksbnVsbCE9ZS5fdGltZXImJmNsZWFyVGltZW91dChlLl90aW1lciksZS5fdGltZXI9c2V0VGltZW91dCgoZnVuY3Rpb24oKXt0Ll9hcHBseVN0eWxlKHtvcGFjaXR5OlwiMVwifSl9KSwwKX0sZS5wcm90b3R5cGUuX2hpZGVJZnJhbWU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuX2FwcGx5U3R5bGUoe29wYWNpdHk6XCIwXCJ9KSxudWxsIT1lLl90aW1lciYmY2xlYXJUaW1lb3V0KGUuX3RpbWVyKSxlLl90aW1lcj1zZXRUaW1lb3V0KChmdW5jdGlvbigpe3QuX2FwcGx5U3R5bGUoe3dpZHRoOlwiMTBweFwiLGhlaWdodDpcIjEwcHhcIixsZWZ0OlwiLTEwMHB4XCIsdG9wOlwiLTEwMHB4XCIscG9zaXRpb246XCJhYnNvbHV0ZVwiLG9wYWNpdHk6XCIwXCIsekluZGV4OlwiMFwiLGRpc3BsYXk6XCJub25lXCJ9KX0pLDIwMCl9LGUucHJvdG90eXBlLl9hcHBseVN0eWxlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7T2JqZWN0LmVudHJpZXModCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIG49dFswXSxyPXRbMV07bnVsbCE9ciYmKGUuX2lmcmFtZS5zdHlsZVtuXT1yKX0pKX0sZS5fdGltZXI9bnVsbCxlfShvLlRyYW5zcG9ydCk7ZS5UcmFuc3BvcnRJZnJhbWU9c30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW4oMCksbz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dGhpcy5hY3Rpb25zPVtdLHRoaXMubWF4TGVuZ3RoPXR9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImxlbmd0aFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hY3Rpb25zLmxlbmd0aCsobnVsbD09dGhpcy5hY3RpdmU/MDoxKX0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHQpe3JldHVybiByLl9fYXdhaXRlcih0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gci5fX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihuKXtpZih0aGlzLmFjdGlvbnMubGVuZ3RoPj10aGlzLm1heExlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJDYW50J3QgcHVzaCBhY3Rpb24hIFF1ZXVlIGlzIGZ1bGwhXCIpO3JldHVyblsyLG5ldyBQcm9taXNlKChmdW5jdGlvbihuLG8pe2UuYWN0aW9ucy5wdXNoKChmdW5jdGlvbigpe3JldHVybiByLl9fYXdhaXRlcihlLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7cmV0dXJuIHIuX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24oZSl7cmV0dXJuWzIsdCgpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiBuKHQpfSksbyldfSkpfSkpfSkpLDE9PT1lLmxlbmd0aCYmZS5ydW4oKX0pKV19KSl9KSl9LHQucHJvdG90eXBlLmNhblB1c2g9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hY3Rpb25zLmxlbmd0aDx0aGlzLm1heExlbmd0aH0sdC5wcm90b3R5cGUucnVuPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXRoaXMuYWN0aW9ucy5zaGlmdCgpO251bGwhPWUmJih0aGlzLmFjdGl2ZT1lKCksdGhpcy5hY3RpdmUuZmluYWxseSgoZnVuY3Rpb24oKXt0LmFjdGl2ZT12b2lkIDA7dmFyIG49dC5hY3Rpb25zLmluZGV4T2YoZSk7LTEhPT1uJiZ0LmFjdGlvbnMuc3BsaWNlKG4sMSksdC5ydW4oKX0pKSl9LHR9KCk7ZS5RdWV1ZT1vfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9big0KTshZnVuY3Rpb24odCl7dFt0LkV2ZW50PTBdPVwiRXZlbnRcIix0W3QuQWN0aW9uPTFdPVwiQWN0aW9uXCIsdFt0LlJlc3BvbnNlPTJdPVwiUmVzcG9uc2VcIn0oZS5FdmVudFR5cGV8fChlLkV2ZW50VHlwZT17fSkpLGZ1bmN0aW9uKHQpe3RbdC5TdWNjZXNzPTBdPVwiU3VjY2Vzc1wiLHRbdC5FcnJvcj0xXT1cIkVycm9yXCJ9KGUuUmVzcG9uc2VTdGF0dXN8fChlLlJlc3BvbnNlU3RhdHVzPXt9KSk7dmFyIG89ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dmFyIG49dGhpczt0aGlzLmlkPXIudW5pcXVlSWQoXCJidXNcIiksdGhpcy5fdGltZW91dD1lfHw1ZTMsdGhpcy5fYWRhcHRlcj10LHRoaXMuX2FkYXB0ZXIuYWRkTGlzdGVuZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBuLl9vbk1lc3NhZ2UodCl9KSksdGhpcy5fZXZlbnRIYW5kbGVycz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2FjdGl2ZVJlcXVlc3RIYXNoPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fcmVxdWVzdEhhbmRsZXJzPU9iamVjdC5jcmVhdGUobnVsbCksci5jb25zb2xlLmluZm8oJ0NyZWF0ZSBCdXMgd2l0aCBpZCBcIicrdGhpcy5pZCsnXCInKX1yZXR1cm4gdC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihlLG4pe3JldHVybiB0aGlzLl9hZGFwdGVyLnNlbmQodC5fY3JlYXRlRXZlbnQoZSxuKSksci5jb25zb2xlLmluZm8oJ0Rpc3BhdGNoIGV2ZW50IFwiJytlKydcIicsbiksdGhpc30sdC5wcm90b3R5cGUucmVxdWVzdD1mdW5jdGlvbih0LGUsbil7dmFyIG89dGhpcztyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKGkscyl7dmFyIGEsdT1yLnVuaXF1ZUlkKG8uaWQrXCItYWN0aW9uXCIpLGM9bnx8by5fdGltZW91dDstMSE9PShufHxvLl90aW1lb3V0KSYmKGE9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtkZWxldGUgby5fYWN0aXZlUmVxdWVzdEhhc2hbdV07dmFyIGU9bmV3IEVycm9yKCdUaW1lb3V0IGVycm9yIGZvciByZXF1ZXN0IHdpdGggbmFtZSBcIicrdCsnXCIgYW5kIHRpbWVvdXQgJytjK1wiIVwiKTtyLmNvbnNvbGUuZXJyb3IoZSkscyhlKX0pLGMpKTt2YXIgZj1mdW5jdGlvbigpe2EmJmNsZWFyVGltZW91dChhKX07by5fYWN0aXZlUmVxdWVzdEhhc2hbdV09e3JlamVjdDpmdW5jdGlvbihlKXtmKCksci5jb25zb2xlLmVycm9yKCdFcnJvciByZXF1ZXN0IHdpdGggbmFtZSBcIicrdCsnXCInLGUpLHMoZSl9LHJlc29sdmU6ZnVuY3Rpb24oZSl7ZigpLHIuY29uc29sZS5pbmZvKCdSZXF1ZXN0IHdpdGggbmFtZSBcIicrdCsnXCIgc3VjY2VzcyByZXNvbHZlZCEnLGUpLGkoZSl9fSxvLl9hZGFwdGVyLnNlbmQoe2lkOnUsdHlwZToxLG5hbWU6dCxkYXRhOmV9KSxyLmNvbnNvbGUuaW5mbygnUmVxdWVzdCB3aXRoIG5hbWUgXCInK3QrJ1wiJyxlKX0pKX0sdC5wcm90b3R5cGUub249ZnVuY3Rpb24odCxlLG4pe3JldHVybiB0aGlzLl9hZGRFdmVudEhhbmRsZXIodCxlLG4sITEpfSx0LnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gdGhpcy5fYWRkRXZlbnRIYW5kbGVyKHQsZSxuLCEwKX0sdC5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcztyZXR1cm4gdD90aGlzLl9ldmVudEhhbmRsZXJzW3RdP2U/KHRoaXMuX2V2ZW50SGFuZGxlcnNbdF09dGhpcy5fZXZlbnRIYW5kbGVyc1t0XS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0LmhhbmRsZXIhPT1lfSkpLHRoaXMuX2V2ZW50SGFuZGxlcnNbdF0ubGVuZ3RofHxkZWxldGUgdGhpcy5fZXZlbnRIYW5kbGVyc1t0XSx0aGlzKToodGhpcy5fZXZlbnRIYW5kbGVyc1t0XS5zbGljZSgpLmZvckVhY2goKGZ1bmN0aW9uKGUpe24ub2ZmKHQsZS5oYW5kbGVyKX0pKSx0aGlzKTp0aGlzOihPYmplY3Qua2V5cyh0aGlzLl9ldmVudEhhbmRsZXJzKS5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gbi5vZmYodCxlKX0pKSx0aGlzKX0sdC5wcm90b3R5cGUucmVnaXN0ZXJSZXF1ZXN0SGFuZGxlcj1mdW5jdGlvbih0LGUpe2lmKHRoaXMuX3JlcXVlc3RIYW5kbGVyc1t0XSl0aHJvdyBuZXcgRXJyb3IoXCJEdXBsaWNhdGUgcmVxdWVzdCBoYW5kbGVyIVwiKTtyZXR1cm4gdGhpcy5fcmVxdWVzdEhhbmRsZXJzW3RdPWUsdGhpc30sdC5wcm90b3R5cGUudW5yZWdpc3RlckhhbmRsZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuX3JlcXVlc3RIYW5kbGVyc1t0XSYmZGVsZXRlIHRoaXMuX3JlcXVlc3RIYW5kbGVyc1t0XSx0aGlzfSx0LnByb3RvdHlwZS5jaGFuZ2VBZGFwdGVyPWZ1bmN0aW9uKGUpe3ZhciBuPXRoaXMscj1uZXcgdChlLHRoaXMuX3RpbWVvdXQpO3JldHVybiBPYmplY3Qua2V5cyh0aGlzLl9ldmVudEhhbmRsZXJzKS5mb3JFYWNoKChmdW5jdGlvbih0KXtuLl9ldmVudEhhbmRsZXJzW3RdLmZvckVhY2goKGZ1bmN0aW9uKGUpe2Uub25jZT9yLm9uY2UodCxlLmhhbmRsZXIsZS5jb250ZXh0KTpyLm9uKHQsZS5oYW5kbGVyLGUuY29udGV4dCl9KSl9KSksT2JqZWN0LmtleXModGhpcy5fcmVxdWVzdEhhbmRsZXJzKS5mb3JFYWNoKChmdW5jdGlvbih0KXtyLnJlZ2lzdGVyUmVxdWVzdEhhbmRsZXIodCxuLl9yZXF1ZXN0SGFuZGxlcnNbdF0pfSkpLHJ9LHQucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXtyLmNvbnNvbGUuaW5mbyhcIkRlc3Ryb3kgQnVzXCIpLHRoaXMub2ZmKCksdGhpcy5fYWRhcHRlci5kZXN0cm95KCl9LHQucHJvdG90eXBlLl9hZGRFdmVudEhhbmRsZXI9ZnVuY3Rpb24odCxlLG4scil7cmV0dXJuIHRoaXMuX2V2ZW50SGFuZGxlcnNbdF18fCh0aGlzLl9ldmVudEhhbmRsZXJzW3RdPVtdKSx0aGlzLl9ldmVudEhhbmRsZXJzW3RdLnB1c2goe2hhbmRsZXI6ZSxvbmNlOnIsY29udGV4dDpufSksdGhpc30sdC5wcm90b3R5cGUuX29uTWVzc2FnZT1mdW5jdGlvbih0KXtzd2l0Y2godC50eXBlKXtjYXNlIDA6ci5jb25zb2xlLmluZm8oJ0hhcyBldmVudCB3aXRoIG5hbWUgXCInK1N0cmluZyh0Lm5hbWUpKydcIicsdC5kYXRhKSx0aGlzLl9maXJlRXZlbnQoU3RyaW5nKHQubmFtZSksdC5kYXRhKTticmVhaztjYXNlIDE6ci5jb25zb2xlLmluZm8oJ1N0YXJ0IGFjdGlvbiB3aXRoIGlkIFwiJyt0LmlkKydcIiBhbmQgbmFtZSBcIicrU3RyaW5nKHQubmFtZSkrJ1wiJyx0LmRhdGEpLHRoaXMuX2NyZWF0ZVJlc3BvbnNlKHQpO2JyZWFrO2Nhc2UgMjpyLmNvbnNvbGUuaW5mbygnU3RhcnQgcmVzcG9uc2Ugd2l0aCBuYW1lIFwiJyt0LmlkKydcIiBhbmQgc3RhdHVzIFwiJyt0LnN0YXR1cysnXCInLHQuY29udGVudCksdGhpcy5fZmlyZUVuZEFjdGlvbih0KX19LHQucHJvdG90eXBlLl9jcmVhdGVSZXNwb25zZT1mdW5jdGlvbihlKXt2YXIgbj10aGlzLG89ZnVuY3Rpb24odCl7ci5jb25zb2xlLmVycm9yKHQpLG4uX2FkYXB0ZXIuc2VuZCh7aWQ6ZS5pZCx0eXBlOjIsc3RhdHVzOjEsY29udGVudDpTdHJpbmcodCl9KX07aWYodGhpcy5fcmVxdWVzdEhhbmRsZXJzW1N0cmluZyhlLm5hbWUpXSl0cnl7dmFyIGk9dGhpcy5fcmVxdWVzdEhhbmRsZXJzW1N0cmluZyhlLm5hbWUpXShlLmRhdGEpO3QuX2lzUHJvbWlzZShpKT9pLnRoZW4oKGZ1bmN0aW9uKHQpe24uX2FkYXB0ZXIuc2VuZCh7aWQ6ZS5pZCx0eXBlOjIsc3RhdHVzOjAsY29udGVudDp0fSl9KSxvKTp0aGlzLl9hZGFwdGVyLnNlbmQoe2lkOmUuaWQsdHlwZToyLHN0YXR1czowLGNvbnRlbnQ6aX0pfWNhdGNoKHQpe28odCl9ZWxzZSBvKG5ldyBFcnJvcignSGFzIG5vIGhhbmRsZXIgZm9yIFwiJytTdHJpbmcoZS5uYW1lKSsnXCIgYWN0aW9uIScpKX0sdC5wcm90b3R5cGUuX2ZpcmVFbmRBY3Rpb249ZnVuY3Rpb24odCl7aWYodGhpcy5fYWN0aXZlUmVxdWVzdEhhc2hbdC5pZF0pe3N3aXRjaCh0LnN0YXR1cyl7Y2FzZSAxOnRoaXMuX2FjdGl2ZVJlcXVlc3RIYXNoW3QuaWRdLnJlamVjdCh0LmNvbnRlbnQpO2JyZWFrO2Nhc2UgMDp0aGlzLl9hY3RpdmVSZXF1ZXN0SGFzaFt0LmlkXS5yZXNvbHZlKHQuY29udGVudCl9ZGVsZXRlIHRoaXMuX2FjdGl2ZVJlcXVlc3RIYXNoW3QuaWRdfX0sdC5wcm90b3R5cGUuX2ZpcmVFdmVudD1mdW5jdGlvbih0LGUpe3RoaXMuX2V2ZW50SGFuZGxlcnNbdF0mJih0aGlzLl9ldmVudEhhbmRsZXJzW3RdPXRoaXMuX2V2ZW50SGFuZGxlcnNbdF0uc2xpY2UoKS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3RyeXt0LmhhbmRsZXIuY2FsbCh0LmNvbnRleHQsZSl9Y2F0Y2godCl7ci5jb25zb2xlLndhcm4odCl9cmV0dXJuIXQub25jZX0pKSx0aGlzLl9ldmVudEhhbmRsZXJzW3RdLmxlbmd0aHx8ZGVsZXRlIHRoaXMuX2V2ZW50SGFuZGxlcnNbdF0pfSx0Ll9jcmVhdGVFdmVudD1mdW5jdGlvbih0LGUpe3JldHVybnt0eXBlOjAsbmFtZTp0LGRhdGE6ZX19LHQuX2lzUHJvbWlzZT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmdC50aGVuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRoZW59LHR9KCk7ZS5CdXM9b30sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiOyhmdW5jdGlvbih0KXt2YXIgcj10aGlzJiZ0aGlzLl9fYXNzaWdufHxmdW5jdGlvbigpe3JldHVybihyPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW25dKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89big1KSxpPW4oMikscz0oc2VsZnx8dCkuY29uc29sZSxhPU9iamVjdC5jcmVhdGUobnVsbCk7ZnVuY3Rpb24gdSh0KXthW3RdfHwoYVt0XT1bXSl9ZnVuY3Rpb24gYyh0LGUpe2FbdF0ucHVzaChlKX1lLmNvbnNvbGU9cih7fSxpLmtleXMoby5jb25maWcuY29uc29sZS5tZXRob2RzRGF0YSkucmVkdWNlKChmdW5jdGlvbih0LGUpe3JldHVybiB0W2VdPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLG49MDtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXRbbl09YXJndW1lbnRzW25dO28uY29uZmlnLmNvbnNvbGUubG9nTGV2ZWw8by5jb25maWcuY29uc29sZS5tZXRob2RzRGF0YVtlXS5sb2dMZXZlbD9vLmNvbmZpZy5jb25zb2xlLm1ldGhvZHNEYXRhW2VdLnNhdmUmJih1KGUpLGMoZSx0KSk6c1tlXS5hcHBseShzLHQpfSx0fSksT2JqZWN0LmNyZWF0ZShudWxsKSkse2dldFNhdmVkTWVzc2FnZXM6ZnVuY3Rpb24odCl7cmV0dXJuIGFbdF18fFtdfX0pfSkuY2FsbCh0aGlzLG4oMTQpKX0sZnVuY3Rpb24odCxlKXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaCh0KXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfXQuZXhwb3J0cz1ufSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3RoaXMuc2l6ZT0wLHRoaXMuaGFzaD1PYmplY3QuY3JlYXRlKG51bGwpLHQmJnQuZm9yRWFjaCh0aGlzLmFkZCx0aGlzKX1yZXR1cm4gdC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhhc2hbdF09ITAsdGhpcy5zaXplPU9iamVjdC5rZXlzKHRoaXMuaGFzaCkubGVuZ3RoLHRoaXN9LHQucHJvdG90eXBlLmhhcz1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbiB0aGlzLmhhc2h9LHQucHJvdG90eXBlLnRvQXJyYXk9ZnVuY3Rpb24oKXtyZXR1cm4gT2JqZWN0LmtleXModGhpcy5oYXNoKX0sdH0oKTtlLlVuaXFQcmltaXRpdmVDb2xsZWN0aW9uPXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcixvPXRoaXMmJnRoaXMuX19leHRlbmRzfHwocj1mdW5jdGlvbih0LGUpe3JldHVybihyPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGUpe3QuX19wcm90b19fPWV9fHxmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiBlKWUuaGFzT3duUHJvcGVydHkobikmJih0W25dPWVbbl0pfSkodCxlKX0sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7dGhpcy5jb25zdHJ1Y3Rvcj10fXIodCxlKSx0LnByb3RvdHlwZT1udWxsPT09ZT9PYmplY3QuY3JlYXRlKGUpOihuLnByb3RvdHlwZT1lLnByb3RvdHlwZSxuZXcgbil9KSxpPXRoaXMmJnRoaXMuX19hc3NpZ258fGZ1bmN0aW9uKCl7cmV0dXJuKGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odCl7Zm9yKHZhciBlLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rKylmb3IodmFyIG8gaW4gZT1hcmd1bWVudHNbbl0pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJih0W29dPWVbb10pO3JldHVybiB0fSkuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1uKDYpLGE9bigxKSx1PW4oNyksYz1uKDIpLGY9e29yaWdpbnM6W10sYXZhaWxhYmxlQ2hhbmVsSWQ6W119LGw9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZShuLHIsbyl7dmFyIGk9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBpLmlkPWEudW5pcXVlSWQoXCJ3YVwiKSxpLmNhbGxiYWNrcz1bXSxpLm9wdGlvbnM9ZS5wcmVwYXJlT3B0aW9ucyhvKSxpLmxpc3Rlbj1uLGkuZGlzcGF0Y2g9cixpLmxpc3Rlbi5mb3JFYWNoKChmdW5jdGlvbih0KXtyZXR1cm4gdC5vbihcIm1lc3NhZ2VcIixpLm9uTWVzc2FnZSxpKX0pKSxpfXJldHVybiBvKGUsdCksZS5wcm90b3R5cGUuYWRkTGlzdGVuZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY2FsbGJhY2tzLnB1c2godCksYS5jb25zb2xlLmluZm8oXCJXaW5kb3dBZGFwdGVyOiBBZGQgaWZyYW1lIG1lc3NhZ2UgbGlzdGVuZXJcIiksdGhpc30sZS5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbih0KXt2YXIgZT1pKHt9LHQse2NoYW5lbElkOnRoaXMub3B0aW9ucy5jaGFuZWxJZH0pO3JldHVybiB0aGlzLmRpc3BhdGNoLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiB0LmRpc3BhdGNoKGUpfSkpLGEuY29uc29sZS5pbmZvKFwiV2luZG93QWRhcHRlcjogU2VuZCBtZXNzYWdlXCIsZSksdGhpc30sZS5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMubGlzdGVuLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiB0LmRlc3Ryb3koKX0pKSx0aGlzLmRpc3BhdGNoLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiB0LmRlc3Ryb3koKX0pKSxhLmNvbnNvbGUuaW5mbyhcIldpbmRvd0FkYXB0ZXI6IERlc3Ryb3lcIil9LGUucHJvdG90eXBlLm9uTWVzc2FnZT1mdW5jdGlvbih0KXt0aGlzLmFjY2Vzc0V2ZW50KHQpJiZ0aGlzLmNhbGxiYWNrcy5mb3JFYWNoKChmdW5jdGlvbihlKXt0cnl7ZSh0LmRhdGEpfWNhdGNoKHQpe2EuY29uc29sZS53YXJuKFwiV2luZG93QWRhcHRlcjogVW5oYW5kbGVkIGV4Y2VwdGlvbiFcIix0KX19KSl9LGUucHJvdG90eXBlLmFjY2Vzc0V2ZW50PWZ1bmN0aW9uKHQpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0LmRhdGF8fG51bGw9PXQuZGF0YS50eXBlKXJldHVybiBhLmNvbnNvbGUuaW5mbyhcIldpbmRvd0FkYXB0ZXI6IEJsb2NrIGV2ZW50LiBXcm9uZyBldmVudCBmb3JtYXQhXCIsdC5kYXRhKSwhMTtpZighdGhpcy5vcHRpb25zLm9yaWdpbnMuaGFzKFwiKlwiKSYmIXRoaXMub3B0aW9ucy5vcmlnaW5zLmhhcyh0Lm9yaWdpbikpcmV0dXJuIGEuY29uc29sZS5pbmZvKCdTaW1wbGVXaW5kb3dBZGFwdGVyOiBCbG9jayBldmVudCBieSBvcmlnaW4gXCInK3Qub3JpZ2luKydcIicpLCExO2lmKCF0aGlzLm9wdGlvbnMuYXZhaWxhYmxlQ2hhbmVsSWQuc2l6ZSlyZXR1cm4hMDt2YXIgZT0hKCF0LmRhdGEuY2hhbmVsSWR8fCF0aGlzLm9wdGlvbnMuYXZhaWxhYmxlQ2hhbmVsSWQuaGFzKHQuZGF0YS5jaGFuZWxJZCkpO3JldHVybiBlfHxhLmNvbnNvbGUuaW5mbygnU2ltcGxlV2luZG93QWRhcHRlcjogQmxvY2sgZXZlbnQgYnkgY2hhbmVsIGlkIFwiJyt0LmRhdGEuY2hhbmVsSWQrJ1wiJyksZX0sZS5jcmVhdGVTaW1wbGVXaW5kb3dBZGFwdGVyPWZ1bmN0aW9uKHQsbil7dmFyIHI9dGhpcyxvPXRoaXMuZ2V0Q29udGVudE9yaWdpbih0KSxpPXRoaXMucHJlcGFyZU9wdGlvbnMobikscz1bXTtvJiZpLm9yaWdpbnMuYWRkKG8pO3ZhciBhPW5ldyB1LldpbmRvd1Byb3RvY29sKHdpbmRvdyx1LldpbmRvd1Byb3RvY29sLlBST1RPQ09MX1RZUEVTLkxJU1RFTiksYz1mdW5jdGlvbih0KXtzLnB1c2godCl9O3JldHVybiBhLm9uKFwibWVzc2FnZVwiLGMpLHRoaXMuZ2V0SWZyYW1lQ29udGVudCh0KS50aGVuKChmdW5jdGlvbih0KXt2YXIgbj1uZXcgdS5XaW5kb3dQcm90b2NvbCh0Lndpbix1LldpbmRvd1Byb3RvY29sLlBST1RPQ09MX1RZUEVTLkRJU1BBVENIKSxvPW5ldyBlKFthXSxbbl0sci51blByZXBhcmVPcHRpb25zKGkpKTtyZXR1cm4gcy5mb3JFYWNoKChmdW5jdGlvbih0KXtvLm9uTWVzc2FnZSh0KX0pKSxhLm9mZihcIm1lc3NhZ2VcIixjKSxvfSkpfSxlLnByZXBhcmVPcHRpb25zPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PWYpO3ZhciBlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGMucGlwZShhLnRvQXJyYXksKG49ZSxmdW5jdGlvbih0KXtyZXR1cm4gdC5yZWR1Y2UoKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuYWRkKGUpfSksbil9KSkodCk7dmFyIG59LG49ZSh0Lm9yaWdpbnN8fFtdLG5ldyBhLlVuaXFQcmltaXRpdmVDb2xsZWN0aW9uKFt3aW5kb3cubG9jYXRpb24ub3JpZ2luXSkpLHI9ZSh0LmF2YWlsYWJsZUNoYW5lbElkfHxbXSxuZXcgYS5VbmlxUHJpbWl0aXZlQ29sbGVjdGlvbik7cmV0dXJuIGkoe30sdCx7b3JpZ2luczpuLGF2YWlsYWJsZUNoYW5lbElkOnJ9KX0sZS51blByZXBhcmVPcHRpb25zPWZ1bmN0aW9uKHQpe3JldHVybntvcmlnaW5zOnQub3JpZ2lucy50b0FycmF5KCksYXZhaWxhYmxlQ2hhbmVsSWQ6dC5hdmFpbGFibGVDaGFuZWxJZC50b0FycmF5KCksY2hhbmVsSWQ6dC5jaGFuZWxJZH19LGUuZ2V0SWZyYW1lQ29udGVudD1mdW5jdGlvbih0KXtyZXR1cm4gdD90IGluc3RhbmNlb2YgSFRNTElGcmFtZUVsZW1lbnQ/dC5jb250ZW50V2luZG93P1Byb21pc2UucmVzb2x2ZSh7d2luOnQuY29udGVudFdpbmRvd30pOm5ldyBQcm9taXNlKChmdW5jdGlvbihlLG4pe3QuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZSh7d2luOnQuY29udGVudFdpbmRvd30pfSksITEpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsbiwhMSl9KSk6UHJvbWlzZS5yZXNvbHZlKHt3aW46dH0pOlByb21pc2UucmVzb2x2ZSh7d2luOndpbmRvdy5vcGVuZXJ8fHdpbmRvdy5wYXJlbnR9KX0sZS5nZXRDb250ZW50T3JpZ2luPWZ1bmN0aW9uKHQpe2lmKCF0KXRyeXtyZXR1cm4gbmV3IFVSTChkb2N1bWVudC5yZWZlcnJlcikub3JpZ2lufWNhdGNoKHQpe3JldHVybiBudWxsfWlmKCEodCBpbnN0YW5jZW9mIEhUTUxJRnJhbWVFbGVtZW50KSl0cnl7cmV0dXJuIHdpbmRvdy50b3Aub3JpZ2lufWNhdGNoKHQpe3JldHVybiBudWxsfXRyeXtyZXR1cm4gbmV3IFVSTCh0LnNyYykub3JpZ2lufHxudWxsfWNhdGNoKHQpe3JldHVybiBudWxsfX0sZX0ocy5BZGFwdGVyKTtlLldpbmRvd0FkYXB0ZXI9bH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO2UuX19lc01vZHVsZT0hMCxmdW5jdGlvbih0KXtmb3IodmFyIG4gaW4gdCllLmhhc093blByb3BlcnR5KG4pfHwoZVtuXT10W25dKX0obigxOCkpfSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7ZS5fX2VzTW9kdWxlPSEwO3ZhciByPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpfXJldHVybiB0LnByb3RvdHlwZS5oYXNMaXN0ZW5lcnM9ZnVuY3Rpb24odCl7cmV0dXJuISghdGhpcy5fZXZlbnRzW3RdfHwhdGhpcy5fZXZlbnRzW3RdLmxlbmd0aCl9LHQucHJvdG90eXBlLmdldEFjdGl2ZUV2ZW50cz1mdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2V2ZW50cykuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gdC5oYXNMaXN0ZW5lcnMoZSl9KSl9LHQucHJvdG90eXBlLnRyaWdnZXI9ZnVuY3Rpb24odCxlKXt0aGlzLl9ldmVudHNbdF0mJih0aGlzLl9ldmVudHNbdF09dGhpcy5fZXZlbnRzW3RdLmZpbHRlcigoZnVuY3Rpb24odCl7dHJ5e3QuaGFuZGxlci5jYWxsKHQuY29udGV4dCxlKX1jYXRjaCh0KXt9cmV0dXJuIXQub25jZX0pKSx0aGlzLl9ldmVudHNbdF0ubGVuZ3RofHxkZWxldGUgdGhpcy5fZXZlbnRzW3RdKX0sdC5wcm90b3R5cGUub249ZnVuY3Rpb24odCxlLG4pe3RoaXMuX29uKHQsZSxuLCExKX0sdC5wcm90b3R5cGUub25jZT1mdW5jdGlvbih0LGUsbil7dGhpcy5fb24odCxlLG4sITApfSx0LnByb3RvdHlwZS5vZmY9ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLHI9XCJzdHJpbmdcIj09dHlwZW9mIHQ/dDpudWxsLG89XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpudWxsO3I/bz9yIGluIHRoaXMuX2V2ZW50cyYmKHRoaXMuX2V2ZW50c1tyXT10aGlzLl9ldmVudHNbcl0uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5oYW5kbGVyIT09b30pKSk6ZGVsZXRlIHRoaXMuX2V2ZW50c1tyXTpPYmplY3Qua2V5cyh0aGlzLl9ldmVudHMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe24ub2ZmKHQsbyl9KSl9LHQucHJvdG90eXBlLl9vbj1mdW5jdGlvbih0LGUsbixyKXt0aGlzLl9ldmVudHNbdF18fCh0aGlzLl9ldmVudHNbdF09W10pLHRoaXMuX2V2ZW50c1t0XS5wdXNoKHtoYW5kbGVyOmUsY29udGV4dDpuLG9uY2U6cn0pfSx0fSgpO2UuRXZlbnRFbWl0dGVyPXJ9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1uKDApLG89bigzKSxpPW4oMSkscz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKGUsbil7dmFyIHI9dC5jYWxsKHRoaXMsbil8fHRoaXM7cmV0dXJuIHIuX3VybD1lLHJ9cmV0dXJuIHIuX19leHRlbmRzKGUsdCksZS5wcm90b3R5cGUuZXZlbnQ9ZnVuY3Rpb24odCl7dGhpcy5fbWVzc2FnZUNhbGxiYWNrPXR9LGUucHJvdG90eXBlLmJlZm9yZVNob3c9ZnVuY3Rpb24oKXt9LGUucHJvdG90eXBlLmFmdGVyU2hvdz1mdW5jdGlvbigpe251bGwhPXRoaXMuX2FjdGl2ZSYmKHRoaXMuX2FjdGl2ZS53aW4uY2xvc2UoKSx0aGlzLl9hY3RpdmUuYnVzLmRlc3Ryb3koKSksdGhpcy5fYWN0aXZlPXZvaWQgMH0sZS5wcm90b3R5cGUuZ2V0QnVzPWZ1bmN0aW9uKCl7cmV0dXJuIHIuX19hd2FpdGVyKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgdCxlLG4sbyxzPXRoaXM7cmV0dXJuIHIuX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24ocil7c3dpdGNoKHIubGFiZWwpe2Nhc2UgMDppZihudWxsIT10aGlzLl9hY3RpdmUpcmV0dXJuWzIsUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2FjdGl2ZS5idXMpXTtpZih0PXdpbmRvdy5vcGVuKHRoaXMuX3VybCksZT1uZXcgVVJMKFwiXCIsdGhpcy5fdXJsKS5vcmlnaW4sbnVsbD09dCl0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2QgbXVzdCBiZSBjYWxsZWQgaW4gdXNlciBldmVudCFcIik7cmV0dXJuWzQsaS5XaW5kb3dBZGFwdGVyLmNyZWF0ZVNpbXBsZVdpbmRvd0FkYXB0ZXIodCx7b3JpZ2luczplfSldO2Nhc2UgMTpyZXR1cm4gbj1yLnNlbnQoKSxvPW5ldyBpLkJ1cyhuLC0xKSx0aGlzLl9hY3RpdmU9e3dpbjp0LGJ1czpvfSxbMixuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7by5vbmNlKFwicmVhZHlcIiwoZnVuY3Rpb24oKXtudWxsIT1zLl9tZXNzYWdlQ2FsbGJhY2smJnMuX21lc3NhZ2VDYWxsYmFjayhvKSx0KCl9KSl9KSldfX0pKX0pKX0sZX0oby5UcmFuc3BvcnQpO2UuVHJhbnNwb3J0V2luZG93PXN9XSl9KSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVxdWVzdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9yZXF1ZXN0XCIpKTtcbnZhciBxdWVyeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9xdWVyeVwiKSk7XG5mdW5jdGlvbiBmZXRjaERhdGFLZXkoYmFzZSwgYWRkcmVzcywga2V5LCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvZGF0YS9cIiArIGFkZHJlc3MgKyBcIi9cIiArIGVuY29kZVVSSUNvbXBvbmVudChrZXkpXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoRGF0YUtleSA9IGZldGNoRGF0YUtleTtcbmZ1bmN0aW9uIGZldGNoU2NyaXB0SW5mb01ldGEoYmFzZSwgYWRkcmVzcywgb3B0aW9ucykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL3NjcmlwdEluZm8vXCIgKyBhZGRyZXNzICsgXCIvbWV0YVwiXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoU2NyaXB0SW5mb01ldGEgPSBmZXRjaFNjcmlwdEluZm9NZXRhO1xuZnVuY3Rpb24gZmV0Y2hCYWxhbmNlRGV0YWlscyhiYXNlLCBhZGRyZXNzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvYmFsYW5jZS9kZXRhaWxzL1wiICsgYWRkcmVzc1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEJhbGFuY2VEZXRhaWxzID0gZmV0Y2hCYWxhbmNlRGV0YWlscztcbmZ1bmN0aW9uIGZldGNoQmFsYW5jZUNvbmZpcm1hdGlvbnMoYmFzZSwgYWRkcmVzcywgY29uZmlybWF0aW9ucywgb3B0aW9ucykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYWRkcmVzc2VzL2JhbGFuY2UvXCIgKyBhZGRyZXNzICsgXCIvXCIgKyBjb25maXJtYXRpb25zXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoQmFsYW5jZUNvbmZpcm1hdGlvbnMgPSBmZXRjaEJhbGFuY2VDb25maXJtYXRpb25zO1xuZnVuY3Rpb24gZmV0Y2hTY3JpcHRJbmZvKGJhc2UsIGFkZHJlc3MsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9zY3JpcHRJbmZvL1wiICsgYWRkcmVzc1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFNjcmlwdEluZm8gPSBmZXRjaFNjcmlwdEluZm87XG5mdW5jdGlvbiBkYXRhKGJhc2UsIGFkZHJlc3MsIHBhcmFtcywgb3B0aW9ucykge1xuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgeyBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpOyB9XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvZGF0YS9cIiArIGFkZHJlc3MgKyBxdWVyeV8xLmRlZmF1bHQocGFyYW1zKVxuICAgIH0pO1xufVxuZXhwb3J0cy5kYXRhID0gZGF0YTtcbmZ1bmN0aW9uIGZldGNoVmFsaWRhdGUoYmFzZSwgYWRkcmVzcywgb3B0aW9ucykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7IGJhc2U6IGJhc2UsIHVybDogXCIvYWRkcmVzc2VzL3ZhbGlkYXRlL1wiICsgYWRkcmVzcyB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hWYWxpZGF0ZSA9IGZldGNoVmFsaWRhdGU7XG5mdW5jdGlvbiBmZXRjaEJhbGFuY2UoYmFzZSwgYWRkcmVzcywgb3B0aW9ucykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7IGJhc2U6IGJhc2UsIHVybDogXCIvYWRkcmVzc2VzL2JhbGFuY2UvXCIgKyBhZGRyZXNzIH0pO1xufVxuZXhwb3J0cy5mZXRjaEJhbGFuY2UgPSBmZXRjaEJhbGFuY2U7XG5mdW5jdGlvbiBmZXRjaEVmZmVjdGl2ZUJhbGFuY2VDb25maXJtYXRpb25zKGJhc2UsIGFkZHJlc3MsIGNvbmZpcm1hdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9lZmZlY3RpdmVCYWxhbmNlL1wiICsgYWRkcmVzcyArIFwiL1wiICsgY29uZmlybWF0aW9uc1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEVmZmVjdGl2ZUJhbGFuY2VDb25maXJtYXRpb25zID0gZmV0Y2hFZmZlY3RpdmVCYWxhbmNlQ29uZmlybWF0aW9ucztcbmZ1bmN0aW9uIGZldGNoRWZmZWN0aXZlQmFsYW5jZShiYXNlLCBhZGRyZXNzKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9hZGRyZXNzZXMvZWZmZWN0aXZlQmFsYW5jZS9cIiArIGFkZHJlc3NcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hFZmZlY3RpdmVCYWxhbmNlID0gZmV0Y2hFZmZlY3RpdmVCYWxhbmNlO1xuZnVuY3Rpb24gZmV0Y2hTZXEoYmFzZSwgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9zZXEvXCIgKyBmcm9tICsgXCIvXCIgKyB0b1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFNlcSA9IGZldGNoU2VxO1xuZnVuY3Rpb24gZmV0Y2hTZWVkKGJhc2UsIGFkZHJlc3MpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9zZWVkL1wiICsgYWRkcmVzc1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFNlZWQgPSBmZXRjaFNlZWQ7XG5mdW5jdGlvbiBmZXRjaFB1YmxpY0tleShiYXNlLCBwdWJsaWNLZXkpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2FkZHJlc3Nlcy9wdWJsaWNLZXkvXCIgKyBwdWJsaWNLZXlcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hQdWJsaWNLZXkgPSBmZXRjaFB1YmxpY0tleTtcbmZ1bmN0aW9uIGZldGNoQWRkcmVzc2VzKGJhc2UpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6ICcvYWRkcmVzc2VzJ1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEFkZHJlc3NlcyA9IGZldGNoQWRkcmVzc2VzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcmVxdWVzdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9yZXF1ZXN0XCIpKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uLy4uL3Rvb2xzL3V0aWxzXCIpO1xuZnVuY3Rpb24gZmV0Y2hEZXRhaWxzKGJhc2UsIGFzc2V0SWQpIHtcbiAgICB2YXIgaXNPbmNlID0gIUFycmF5LmlzQXJyYXkoYXNzZXRJZCk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHV0aWxzXzEudG9BcnJheShhc3NldElkKS5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7IGJhc2U6IGJhc2UsIHVybDogXCIvYXNzZXRzL2RldGFpbHMvXCIgKyBpZCB9KTsgfSkpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChsaXN0KSB7IHJldHVybiBpc09uY2UgPyBsaXN0WzBdIDogbGlzdDsgfSk7XG59XG5leHBvcnRzLmZldGNoRGV0YWlscyA9IGZldGNoRGV0YWlscztcbmZ1bmN0aW9uIGZldGNoQXNzZXREaXN0cmlidXRpb24oYmFzZSwgYXNzZXRJZCwgaGVpZ2h0LCBsaW1pdCkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7IGJhc2U6IGJhc2UsIHVybDogXCIvYXNzZXRzL1wiICsgYXNzZXRJZCArIFwiL2Rpc3RyaWJ1dGlvbi9cIiArIGhlaWdodCArIFwiL2xpbWl0L1wiICsgbGltaXQgfSk7XG59XG5leHBvcnRzLmZldGNoQXNzZXREaXN0cmlidXRpb24gPSBmZXRjaEFzc2V0RGlzdHJpYnV0aW9uO1xuLyoqXG4gKiBUT0RPXG4gKiBHRVQgL2Fzc2V0cy97YXNzZXRJZH0vZGlzdHJpYnV0aW9uXG4gKiBBc3NldCBiYWxhbmNlIGRpc3RyaWJ1dGlvblxuICovXG5mdW5jdGlvbiBmZXRjaEFzc2V0c0FkZHJlc3NMaW1pdChiYXNlLCBhZGRyZXNzLCBsaW1pdCkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7IGJhc2U6IGJhc2UsIHVybDogXCJhc3NldHMvbmZ0L1wiICsgYWRkcmVzcyArIFwiL2xpbWl0L1wiICsgbGltaXQgfSk7XG59XG5leHBvcnRzLmZldGNoQXNzZXRzQWRkcmVzc0xpbWl0ID0gZmV0Y2hBc3NldHNBZGRyZXNzTGltaXQ7XG5mdW5jdGlvbiBmZXRjaEFzc2V0c0JhbGFuY2UoYmFzZSwgYWRkcmVzcykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7IGJhc2U6IGJhc2UsIHVybDogXCIvYXNzZXRzL2JhbGFuY2UvXCIgKyBhZGRyZXNzIH0pO1xufVxuZXhwb3J0cy5mZXRjaEFzc2V0c0JhbGFuY2UgPSBmZXRjaEFzc2V0c0JhbGFuY2U7XG5mdW5jdGlvbiBmZXRjaEJhbGFuY2VBZGRyZXNzQXNzZXRJZChiYXNlLCBhZGRyZXNzLCBhc3NldElkKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHsgYmFzZTogYmFzZSwgdXJsOiBcIi9hc3NldHMvYmFsYW5jZS9cIiArIGFkZHJlc3MgKyBcIi9cIiArIGFzc2V0SWQgfSk7XG59XG5leHBvcnRzLmZldGNoQmFsYW5jZUFkZHJlc3NBc3NldElkID0gZmV0Y2hCYWxhbmNlQWRkcmVzc0Fzc2V0SWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZXF1ZXN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uLy4uL3Rvb2xzL3JlcXVlc3RcIikpO1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9oZWFkZXJzL3NlcS97ZnJvbX0ve3RvfVxuICogR2V0IGJsb2NrIGhlYWRlcnMgYXQgc3BlY2lmaWVkIGhlaWdodHNcbiAqIEBwYXJhbSBiYXNlXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIHRvXG4gKi9cbmZ1bmN0aW9uIGZldGNoSGVhZGVyc1NlcShiYXNlLCBmcm9tLCB0bykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYmxvY2tzL2hlYWRlcnMvc2VxL1wiICsgZnJvbSArIFwiL1wiICsgdG9cbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hIZWFkZXJzU2VxID0gZmV0Y2hIZWFkZXJzU2VxO1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9oZWFkZXJzL2xhc3RcbiAqIExhc3QgYmxvY2sgaGVhZGVyXG4gKiBAcGFyYW0gYmFzZVxuICovXG5mdW5jdGlvbiBmZXRjaEhlYWRlcnNMYXN0KGJhc2UsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6ICcvYmxvY2tzL2hlYWRlcnMvbGFzdCdcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hIZWFkZXJzTGFzdCA9IGZldGNoSGVhZGVyc0xhc3Q7XG4vKipcbiAqIEdFVCAvYmxvY2tzL2hlaWdodC97c2lnbmF0dXJlfVxuICogSGVpZ2h0IG9mIGEgYmxvY2sgYnkgaXRzIHNpZ25hdHVyZVxuICogQHBhcmFtIGJhc2VcbiAqIEBwYXJhbSBzaWduYXR1cmVcbiAqL1xuZnVuY3Rpb24gZmV0Y2hIZWlnaHRCeVNpZ25hdHVyZShiYXNlLCBzaWduYXR1cmUpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2Jsb2Nrcy9oZWlnaHQvXCIgKyBzaWduYXR1cmVcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hIZWlnaHRCeVNpZ25hdHVyZSA9IGZldGNoSGVpZ2h0QnlTaWduYXR1cmU7XG4vKipcbiAqIEdFVCAvYmxvY2tzL2hlYWRlcnMvYXQve2hlaWdodH1cbiAqIEJsb2NrIGhlYWRlciBhdCBoZWlnaHRcbiAqIEBwYXJhbSBiYXNlXG4gKiBAcGFyYW0gaGVpZ2h0XG4gKi9cbmZ1bmN0aW9uIGZldGNoSGVhZGVyc0F0KGJhc2UsIGhlaWdodCwgb3B0aW9ucykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYmxvY2tzL2hlYWRlcnMvYXQvXCIgKyBoZWlnaHRcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hIZWFkZXJzQXQgPSBmZXRjaEhlYWRlcnNBdDtcbi8qKlxuICogR0VUIC9ibG9ja3MvYXQve2hlaWdodH1cbiAqIEdldCBibG9jayBhdCBzcGVjaWZpZWQgaGVpZ2h0XG4gKiBAcGFyYW0gYmFzZVxuICogQHBhcmFtIGhlaWdodFxuICovXG5mdW5jdGlvbiBCbG9ja0F0KGJhc2UsIGhlaWdodCkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYmxvY2tzL2F0L1wiICsgaGVpZ2h0XG4gICAgfSk7XG59XG5leHBvcnRzLkJsb2NrQXQgPSBCbG9ja0F0O1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9zZXEve2Zyb219L3t0b31cbiAqIEJsb2NrIHJhbmdlXG4gKiBAcGFyYW0gYmFzZVxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSB0b1xuICovXG5mdW5jdGlvbiBmZXRjaFNlcShiYXNlLCBmcm9tLCB0bykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYmxvY2tzL3NlcS9cIiArIGZyb20gKyBcIi9cIiArIHRvXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoU2VxID0gZmV0Y2hTZXE7XG4vKipcbiAqIEdFVCAvYmxvY2tzL3NpZ25hdHVyZS97c2lnbmF0dXJlfVxuICogR2V0IGJsb2NrIGJ5IGl0cyBzaWduYXR1cmVcbiAqIEBwYXJhbSBiYXNlXG4gKiBAcGFyYW0gc2lnbmF0dXJlXG4gKi9cbmZ1bmN0aW9uIGZldGNoQmxvY2tCeVNpZ25hdHVyZShiYXNlLCBzaWduYXR1cmUpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6IFwiL2Jsb2Nrcy9zaWduYXR1cmUvXCIgKyBzaWduYXR1cmVcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hCbG9ja0J5U2lnbmF0dXJlID0gZmV0Y2hCbG9ja0J5U2lnbmF0dXJlO1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9maXJzdFxuICogR2V0IGdlbmVzaXMgYmxvY2tcbiAqIEBwYXJhbSBiYXNlXG4gKi9cbmZ1bmN0aW9uIGZldGNoRmlyc3QoYmFzZSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYmxvY2tzL2ZpcnN0XCJcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hGaXJzdCA9IGZldGNoRmlyc3Q7XG4vKipcbiAqIC9ibG9ja3MvYWRkcmVzcy97YWRkcmVzc30ve2Zyb219L3t0b31cbiAqIEdldCBsaXN0IG9mIGJsb2NrcyBnZW5lcmF0ZWQgYnkgc3BlY2lmaWVkIGFkZHJlc3NcbiAqIEBwYXJhbSBiYXNlXG4gKiBAcGFyYW0gYWRkcmVzc1xuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSB0b1xuICovXG5mdW5jdGlvbiBmZXRjaEJsb2Nrc0J5QWRkcmVzcyhiYXNlLCBhZGRyZXNzLCBmcm9tLCB0bykge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvYmxvY2tzL2FkZHJlc3MvXCIgKyBhZGRyZXNzICsgXCIvXCIgKyBmcm9tICsgXCIvXCIgKyB0b1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaEJsb2Nrc0J5QWRkcmVzcyA9IGZldGNoQmxvY2tzQnlBZGRyZXNzO1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9sYXN0XG4gKiBMYXN0IGJsb2NrXG4gKiBAcGFyYW0gYmFzZVxuICovXG5mdW5jdGlvbiBmZXRjaExhc3QoYmFzZSkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogJy9ibG9ja3MvbGFzdCdcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hMYXN0ID0gZmV0Y2hMYXN0O1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9kZWxheS97c2lnbmF0dXJlfS97YmxvY2tOdW19XG4gKiBBdmVyYWdlIGRlbGF5IGluIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGxhc3QgYmxvY2tOdW0gYmxvY2tzIHN0YXJ0aW5nIGZyb20gYmxvY2sgd2l0aCBzaWduYXR1cmVcbiAqIEBwYXJhbSBiYXNlXG4gKiBAcGFyYW0gc2lnbmF0dXJlXG4gKiBAcGFyYW0gYmxvY2tOdW1cbiAqL1xuZnVuY3Rpb24gZmV0Y2hEZWxheShiYXNlLCBzaWduYXR1cmUsIGJsb2NrTnVtKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi9ibG9ja3MvZGVsYXkvXCIgKyBzaWduYXR1cmUgKyBcIi9cIiArIGJsb2NrTnVtXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoRGVsYXkgPSBmZXRjaERlbGF5O1xuLyoqXG4gKiBHRVQgL2Jsb2Nrcy9oZWlnaHRcbiAqIEBwYXJhbSBiYXNlXG4gKi9cbmZ1bmN0aW9uIGZldGNoSGVpZ2h0KGJhc2UpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6ICcvYmxvY2tzL2hlaWdodCdcbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hIZWlnaHQgPSBmZXRjaEhlaWdodDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9jb25zdGFudHNcIik7XG52YXIgYmxvY2tzXzEgPSByZXF1aXJlKFwiLi4vYmxvY2tzXCIpO1xudmFyIHJlcXVlc3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvcmVxdWVzdFwiKSk7XG52YXIgcXVlcnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdG9vbHMvcXVlcnlcIikpO1xudmFyIHN0cmluZ2lmeV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi90b29scy9zdHJpbmdpZnlcIikpO1xuLyoqXG4gKiBHRVQgL3RyYW5zYWN0aW9ucy91bmNvbmZpcm1lZC9zaXplXG4gKiBOdW1iZXIgb2YgdW5jb25maXJtZWQgdHJhbnNhY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIGZldGNoVW5jb25maXJtZWRTaXplKGJhc2UpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6ICcvdHJhbnNhY3Rpb25zL3VuY29uZmlybWVkL3NpemUnXG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoVW5jb25maXJtZWRTaXplID0gZmV0Y2hVbmNvbmZpcm1lZFNpemU7XG4vLyBAVE9ETzogd2hlbiBjb3JyZWN0IEFQSSBrZXkgaXMgcmVjZWl2ZWRcbi8qKlxuICogUE9TVCAvdHJhbnNhY3Rpb25zL3NpZ24ve3NpZ25lckFkZHJlc3N9XG4gKiBTaWduIGEgdHJhbnNhY3Rpb24gd2l0aCBhIG5vbi1kZWZhdWx0IHByaXZhdGUga2V5XG4gKi9cbi8qKlxuKiBQT1NUIC90cmFuc2FjdGlvbnMvY2FsY3VsYXRlRmVlXG4qIENhbGN1bGF0ZSB0cmFuc2FjdGlvbiBmZWVcbiovXG5mdW5jdGlvbiBmZXRjaENhbGN1bGF0ZUZlZShiYXNlLCB0eCkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogJy90cmFuc2FjdGlvbnMvY2FsY3VsYXRlRmVlJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBzdHJpbmdpZnlfMS5kZWZhdWx0KHR4KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZmV0Y2hDYWxjdWxhdGVGZWUgPSBmZXRjaENhbGN1bGF0ZUZlZTtcbi8qKlxuICogR0VUIC90cmFuc2FjdGlvbnMvdW5jb25maXJtZWRcbiAqIFVuY29uZmlybWVkIHRyYW5zYWN0aW9uc1xuICovXG5mdW5jdGlvbiBmZXRjaFVuY29uZmlybWVkKGJhc2UpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoe1xuICAgICAgICBiYXNlOiBiYXNlLFxuICAgICAgICB1cmw6ICcvdHJhbnNhY3Rpb25zL3VuY29uZmlybWVkJ1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFVuY29uZmlybWVkID0gZmV0Y2hVbmNvbmZpcm1lZDtcbi8qKlxuICog0KHQv9C40YHQvtC6INGC0YDQsNC90LfQsNC60YbQuNC5INC/0L4g0LDQtNGA0LXRgdGDXG4gKiBAcGFyYW0gYWRkcmVzc1xuICogQHBhcmFtIGxpbWl0ICAgICAg0LzQsNC60YHQuNC80LDQu9GM0L3QvtC1INC60L7Qu9C40YfQtdGB0YLQstC+INGC0YDQsNC90LfQsNC60YbQuNC5INCyINGA0LXQt9GD0LvRjNGC0LDRgtC1XG4gKiBAcGFyYW0gYWZ0ZXIgICAgICDQuNGB0LrQsNGC0Ywg0YLRgNCw0L3Qt9Cw0LrRhtC40Lgg0L/QvtGB0LvQtSBJRCDRg9C60LDQt9Cw0L3QvdC+0LPQviDQsiBhZnRlclxuICogQHBhcmFtIHJldHJ5ICAgICAg0LrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtC/0YvRgtC+0Log0L3QsCDQstGL0L/QvtC70L3QtdC90LjQtSDQt9Cw0L/RgNC+0YHQsFxuICovXG5mdW5jdGlvbiBmZXRjaFRyYW5zYWN0aW9ucyhiYXNlLCBhZGRyZXNzLCBsaW1pdCwgYWZ0ZXIsIHJldHJ5KSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSxcbiAgICAgICAgdXJsOiBcIi90cmFuc2FjdGlvbnMvYWRkcmVzcy9cIiArIGFkZHJlc3MgKyBcIi9saW1pdC9cIiArIGxpbWl0ICsgcXVlcnlfMS5kZWZhdWx0KHsgYWZ0ZXI6IGFmdGVyIH0pXG4gICAgfSkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGxpc3QgPSBfYVswXTtcbiAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgfSk7XG59XG5leHBvcnRzLmZldGNoVHJhbnNhY3Rpb25zID0gZmV0Y2hUcmFuc2FjdGlvbnM7XG4vKipcbiAqIEdFVCAvdHJhbnNhY3Rpb25zL3VuY29uZmlybWVkL2luZm8ve2lkfVxuICogVW5jb25maXJtZWQgdHJhbnNhY3Rpb24gaW5mb1xuICovXG5mdW5jdGlvbiBmZXRjaFVuY29uZmlybWVkSW5mbyhiYXNlLCBpZCkge1xuICAgIHJldHVybiByZXF1ZXN0XzEuZGVmYXVsdCh7XG4gICAgICAgIGJhc2U6IGJhc2UsXG4gICAgICAgIHVybDogXCIvdHJhbnNhY3Rpb25zL3VuY29uZmlybWVkL2luZm8vXCIgKyBpZFxuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFVuY29uZmlybWVkSW5mbyA9IGZldGNoVW5jb25maXJtZWRJbmZvO1xuLy8gQFRPRE8gd2hlbiBjb3JyZWN0IEFQSSBrZXkgaXMgcmVjZWl2ZWRcbi8qKlxuICogUE9TVCAvdHJhbnNhY3Rpb25zL3NpZ25cbiAqIFNpZ24gYSB0cmFuc2FjdGlvblxuICovXG4vKipcbiAqIEdFVCAvdHJhbnNhY3Rpb25zL2luZm8ve2lkfVxuICogVHJhbnNhY3Rpb24gaW5mb1xuICovXG5mdW5jdGlvbiBmZXRjaEluZm8oYmFzZSwgaWQpIHtcbiAgICByZXR1cm4gcmVxdWVzdF8xLmRlZmF1bHQoeyBiYXNlOiBiYXNlLCB1cmw6IFwiL3RyYW5zYWN0aW9ucy9pbmZvL1wiICsgaWQgfSk7XG59XG5leHBvcnRzLmZldGNoSW5mbyA9IGZldGNoSW5mbztcbmZ1bmN0aW9uIGZldGNoU3RhdHVzKGJhc2UsIGxpc3QpIHtcbiAgICB2YXIgREVGQVVMVF9TVEFUVVMgPSB7XG4gICAgICAgIGlkOiAnJyxcbiAgICAgICAgY29uZmlybWF0aW9uczogLTEsXG4gICAgICAgIGhlaWdodDogLTEsXG4gICAgICAgIGluVVRYOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzOiBjb25zdGFudHNfMS5UUkFOU0FDVElPTl9TVEFUVVNFUy5OT1RfRk9VTkRcbiAgICB9O1xuICAgIHZhciBsb2FkQWxsVHhJbmZvID0gbGlzdC5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFVuY29uZmlybWVkSW5mbyhiYXNlLCBpZClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgREVGQVVMVF9TVEFUVVMpLCB7IGlkOiBpZCwgc3RhdHVzOiBjb25zdGFudHNfMS5UUkFOU0FDVElPTl9TVEFUVVNFUy5VTkNPTkZJUk1FRCwgaW5VVFg6IHRydWUgfSkpOyB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZldGNoSW5mbyhiYXNlLCBpZClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh0eCkgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX1NUQVRVUyksIHsgaWQ6IGlkLCBzdGF0dXM6IGNvbnN0YW50c18xLlRSQU5TQUNUSU9OX1NUQVRVU0VTLklOX0JMT0NLQ0hBSU4sIGhlaWdodDogdHguaGVpZ2h0IH0pKTsgfSk7IH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBERUZBVUxUX1NUQVRVUyksIHsgaWQ6IGlkIH0pKTsgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgYmxvY2tzXzEuZmV0Y2hIZWlnaHQoYmFzZSksXG4gICAgICAgIFByb21pc2UuYWxsKGxvYWRBbGxUeEluZm8pXG4gICAgXSkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGhlaWdodCA9IF9hWzBdLmhlaWdodCwgc3RhdHVzZXMgPSBfYVsxXTtcbiAgICAgICAgcmV0dXJuICh7XG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIHN0YXR1c2VzOiBzdGF0dXNlcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaXRlbSksIHsgY29uZmlybWF0aW9uczogaXRlbS5zdGF0dXMgPT09IGNvbnN0YW50c18xLlRSQU5TQUNUSU9OX1NUQVRVU0VTLklOX0JMT0NLQ0hBSU4gPyBoZWlnaHQgLSBpdGVtLmhlaWdodCA6IGl0ZW0uY29uZmlybWF0aW9ucyB9KSk7IH0pXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5mZXRjaFN0YXR1cyA9IGZldGNoU3RhdHVzO1xuZnVuY3Rpb24gYnJvYWRjYXN0KGJhc2UsIHR4KSB7XG4gICAgcmV0dXJuIHJlcXVlc3RfMS5kZWZhdWx0KHtcbiAgICAgICAgYmFzZTogYmFzZSwgdXJsOiAnL3RyYW5zYWN0aW9ucy9icm9hZGNhc3QnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IHN0cmluZ2lmeV8xLmRlZmF1bHQodHgpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5icm9hZGNhc3QgPSBicm9hZGNhc3Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVFlQRV9NQVAgPSB7XG4gICAgMzogJ2lzc3VlJyxcbiAgICA0OiAndHJhbnNmZXInLFxuICAgIDU6ICdyZWlzc3VlJyxcbiAgICA2OiAnYnVybicsXG4gICAgNzogJ2V4Y2hhbmdlJyxcbiAgICA4OiAnbGVhc2UnLFxuICAgIDk6ICdjYW5jZWxMZWFzZScsXG4gICAgMTA6ICdhbGlhcycsXG4gICAgMTE6ICdtYXNzVHJhbnNmZXInLFxuICAgIDEyOiAnZGF0YScsXG4gICAgMTM6ICdzZXRTY3JpcHQnLFxuICAgIDE0OiAnc3BvbnNvcnNoaXAnLFxuICAgIDE1OiAnc2V0QXNzZXRTY3JpcHQnLFxuICAgIDE2OiAnaW52b2tlJ1xufTtcbmV4cG9ydHMuTkFNRV9NQVAgPSB7XG4gICAgJ2lzc3VlJzogMyxcbiAgICAndHJhbnNmZXInOiA0LFxuICAgICdyZWlzc3VlJzogNSxcbiAgICAnYnVybic6IDYsXG4gICAgJ2V4Y2hhbmdlJzogNyxcbiAgICAnbGVhc2UnOiA4LFxuICAgICdjYW5jZWxMZWFzZSc6IDksXG4gICAgJ2FsaWFzJzogMTAsXG4gICAgJ21hc3NUcmFuc2Zlcic6IDExLFxuICAgICdkYXRhJzogMTIsXG4gICAgJ3NldFNjcmlwdCc6IDEzLFxuICAgICdzcG9uc29yc2hpcCc6IDE0LFxuICAgICdzZXRBc3NldFNjcmlwdCc6IDE1LFxuICAgICdpbnZva2UnOiAxNlxufTtcbmV4cG9ydHMuVFJBTlNBQ1RJT05fU1RBVFVTRVMgPSB7XG4gICAgSU5fQkxPQ0tDSEFJTjogJ2luX2Jsb2NrY2hhaW4nLFxuICAgIFVOQ09ORklSTUVEOiAndW5jb25maXJtZWQnLFxuICAgIE5PVF9GT1VORDogJ25vdF9mb3VuZCdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYmxvY2tzXzEgPSByZXF1aXJlKFwiLi4vLi4vYXBpLW5vZGUvYmxvY2tzXCIpO1xuZnVuY3Rpb24gZGVmYXVsdF8xKGJhc2UpIHtcbiAgICByZXR1cm4gYmxvY2tzXzEuZmV0Y2hIZWFkZXJzTGFzdChiYXNlKS50aGVuKGZ1bmN0aW9uIChoZWFkZXIpIHsgcmV0dXJuIGJhc2U1OERlY29kZShoZWFkZXIuZ2VuZXJhdG9yKVsxXTsgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG52YXIgQUxQSEFCRVQgPSAnMTIzNDU2Nzg5QUJDREVGR0hKS0xNTlBRUlNUVVZXWFlaYWJjZGVmZ2hpamttbm9wcXJzdHV2d3h5eic7XG52YXIgQUxQSEFCRVRfTUFQID0ge307XG5mb3IgKHZhciBpID0gMDsgaSA8IEFMUEhBQkVULmxlbmd0aDsgaSsrKSB7XG4gICAgQUxQSEFCRVRfTUFQW0FMUEhBQkVULmNoYXJBdChpKV0gPSBpO1xufVxuZnVuY3Rpb24gYmFzZTU4RGVjb2RlKHN0cmluZykge1xuICAgIHZhciBieXRlcywgYywgY2FycnksIGosIGk7XG4gICAgaWYgKHN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KDApO1xuICAgIH1cbiAgICBpID0gdm9pZCAwO1xuICAgIGogPSB2b2lkIDA7XG4gICAgYnl0ZXMgPSBbMF07XG4gICAgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgIGMgPSBzdHJpbmdbaV07XG4gICAgICAgIGlmICghKGMgaW4gQUxQSEFCRVRfTUFQKSkge1xuICAgICAgICAgICAgdGhyb3cgJ0Jhc2U1OC5kZWNvZGUgcmVjZWl2ZWQgdW5hY2NlcHRhYmxlIGlucHV0LiBDaGFyYWN0ZXIgXFwnJyArIGMgKyAnXFwnIGlzIG5vdCBpbiB0aGUgQmFzZTU4IGFscGhhYmV0Lic7XG4gICAgICAgIH1cbiAgICAgICAgaiA9IDA7XG4gICAgICAgIHdoaWxlIChqIDwgYnl0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBieXRlc1tqXSAqPSA1ODtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICBieXRlc1swXSArPSBBTFBIQUJFVF9NQVBbY107XG4gICAgICAgIGNhcnJ5ID0gMDtcbiAgICAgICAgaiA9IDA7XG4gICAgICAgIHdoaWxlIChqIDwgYnl0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBieXRlc1tqXSArPSBjYXJyeTtcbiAgICAgICAgICAgIGNhcnJ5ID0gYnl0ZXNbal0gPj4gODtcbiAgICAgICAgICAgIGJ5dGVzW2pdICY9IDB4ZmY7XG4gICAgICAgICAgICArK2o7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGNhcnJ5KSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKGNhcnJ5ICYgMHhmZik7XG4gICAgICAgICAgICBjYXJyeSA+Pj0gODtcbiAgICAgICAgfVxuICAgICAgICBpKys7XG4gICAgfVxuICAgIGkgPSAwO1xuICAgIHdoaWxlIChzdHJpbmdbaV0gPT09ICcxJyAmJiBpIDwgc3RyaW5nLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgYnl0ZXMucHVzaCgwKTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMucmV2ZXJzZSgpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldE5ldHdvcmtCeXRlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlZyA9IG5ldyBSZWdFeHAoJygoPyFcXFxcXFxcXClcIlxcXFx3K1wiKTpcXFxccyooLT9bXFxcXGR8XFxcXC5dezE0LH0pJywgJ2cnKTtcbmZ1bmN0aW9uIGRlZmF1bHRfMShqc29uKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbi5yZXBsYWNlKHJlZywgXCIkMTpcXFwiJDJcXFwiXCIpKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZGVmYXVsdF8xKHBhcmFtcywgZXZvbHZlcikge1xuICAgIGlmIChldm9sdmVyID09PSB2b2lkIDApIHsgZXZvbHZlciA9IE9iamVjdC5jcmVhdGUobnVsbCk7IH1cbiAgICB2YXIgcXVlcnkgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gW2tleSwgcGFyYW1zW2tleV1dOyB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgIHJldHVybiBba2V5LCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXZvbHZlciwga2V5KSA/IGV2b2x2ZXJba2V5XSh2YWx1ZSkgOiB2YWx1ZV07XG4gICAgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGtleSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xuICAgICAgICByZXR1cm4gdmFsdWUgIT0gbnVsbDtcbiAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgIHJldHVybiBrZXkgKyBcIj1cIiArIHZhbHVlO1xuICAgIH0pXG4gICAgICAgIC5qb2luKCcmJyk7XG4gICAgcmV0dXJuIHF1ZXJ5Lmxlbmd0aCA/IFwiP1wiICsgcXVlcnkgOiAnJztcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHJlc29sdmVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9yZXNvbHZlXCIpKTtcbnZhciBwYXJzZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlXCIpKTtcbnZhciByZXF1ZXN0ID0gdHlwZW9mIGZldGNoID09PSAnZnVuY3Rpb24nID8gZmV0Y2ggOiByZXF1aXJlKCdub2RlLWZldGNoJyk7XG5mdW5jdGlvbiBkZWZhdWx0XzEocGFyYW1zKSB7XG4gICAgcmV0dXJuIHJlcXVlc3QocmVzb2x2ZV8xLmRlZmF1bHQocGFyYW1zLnVybCwgcGFyYW1zLmJhc2UpLCB1cGRhdGVIZWFkZXJzKHBhcmFtcy5vcHRpb25zKSlcbiAgICAgICAgLnRoZW4ocGFyc2VSZXNwb25zZSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG5mdW5jdGlvbiBwYXJzZVJlc3BvbnNlKHIpIHtcbiAgICByZXR1cm4gci50ZXh0KCkudGhlbihmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gci5vayA/IHBhcnNlXzEuZGVmYXVsdChtZXNzYWdlKSA6IFByb21pc2UucmVqZWN0KHRyeVBhcnNlKG1lc3NhZ2UpKTsgfSk7XG59XG5mdW5jdGlvbiB0cnlQYXJzZShtZXNzYWdlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobWVzc2FnZSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVwZGF0ZUhlYWRlcnMob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IH1cbiAgICBvcHRpb25zLmNyZWRlbnRpYWxzID0gJ2luY2x1ZGUnO1xuICAgIHJldHVybiBvcHRpb25zO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGRlZmF1bHRfMShwYXRoLCBiYXNlKSB7XG4gICAgcmV0dXJuIG5ldyBVUkwocGF0aCwgYmFzZSkudG9TdHJpbmcoKTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc29sdmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRklFTERTID0gWyd2YWx1ZScsICdhbW91bnQnLCAnbWF0Y2hlckZlZScsICdwcmljZScsICdmZWUnLCAnbWluU3BvbnNvcmVkQXNzZXRGZWUnLCAncXVhbnRpdHknLCAnc2VsbE1hdGNoZXJGZWUnLCAnYnV5TWF0Y2hlckZlZSddO1xudmFyIHJlZyA9IG5ldyBSZWdFeHAoXCIoPyFcXFxcXFxcXClcXFwiKFwiICsgRklFTERTLmpvaW4oJ3wnKSArIFwiKVxcXCI6XFxcXHMqXFxcIigtP1xcXFxkKylcXFwiXCIsICdnJyk7XG5mdW5jdGlvbiBkZWZhdWx0XzEoZGF0YSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKS5yZXBsYWNlKHJlZywgJ1wiJDFcIjokMicpO1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gZGVmYXVsdF8xO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RyaW5naWZ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0cmFuc2FjdGlvbnNfMSA9IHJlcXVpcmUoXCIuLi8uLi9hcGktbm9kZS90cmFuc2FjdGlvbnNcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciB3YWl0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vd2FpdFwiKSk7XG52YXIgREVGQVVMVF9CUk9BRENBU1RfT1BUSU9OUyA9IHtcbiAgICBjaGFpbjogZmFsc2UsXG4gICAgY29uZmlybWF0aW9uczogLTEsXG4gICAgbWF4V2FpdFRpbWU6IDAsXG4gICAgcmVxdWVzdEludGVydmFsOiAwXG59O1xuZnVuY3Rpb24gZGVmYXVsdF8xKGJhc2UsIGxpc3QsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3B0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIERFRkFVTFRfQlJPQURDQVNUX09QVElPTlMpLCAob3B0aW9ucyB8fCB7fSkpO1xuICAgIHZhciBpc09uY2UgPSAhQXJyYXkuaXNBcnJheShsaXN0KTtcbiAgICB2YXIgY29uZmlybWF0aW9ucyA9IG9wdC5jb25maXJtYXRpb25zID4gMCA/IDEgOiAwO1xuICAgIHJldHVybiAob3B0LmNoYWluXG4gICAgICAgID8gY2hhaW5Ccm9hZGNhc3QoYmFzZSwgdXRpbHNfMS50b0FycmF5KGxpc3QpLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0KSwgeyBjb25maXJtYXRpb25zOiBjb25maXJtYXRpb25zIH0pKVxuICAgICAgICA6IHNpbXBsZUJyb2FkY2FzdChiYXNlLCB1dGlsc18xLnRvQXJyYXkobGlzdCkpKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAobGlzdCkgeyByZXR1cm4gb3B0LmNvbmZpcm1hdGlvbnMgPD0gMCA/IGxpc3QgOiB3YWl0XzEuZGVmYXVsdChiYXNlLCBsaXN0LCBvcHQpOyB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAobGlzdCkgeyByZXR1cm4gaXNPbmNlID8gdXRpbHNfMS5oZWFkKGxpc3QpIDogbGlzdDsgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG5mdW5jdGlvbiBzaW1wbGVCcm9hZGNhc3QoYmFzZSwgbGlzdCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChsaXN0Lm1hcChmdW5jdGlvbiAodHgpIHsgcmV0dXJuIHRyYW5zYWN0aW9uc18xLmJyb2FkY2FzdChiYXNlLCB0eCk7IH0pKTtcbn1cbmZ1bmN0aW9uIGNoYWluQnJvYWRjYXN0KGJhc2UsIGxpc3QsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgdG9Ccm9hZGNhc3QgPSBsaXN0LnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0b0Jyb2FkY2FzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHggPSB0b0Jyb2FkY2FzdC5wb3AoKTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uc18xLmJyb2FkY2FzdChiYXNlLCB0eClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodHgpIHsgcmV0dXJuIHdhaXRfMS5kZWZhdWx0KGJhc2UsIHR4LCBvcHRpb25zKTsgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodHgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0eCk7XG4gICAgICAgICAgICAgICAgbG9vcCgpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfTtcbiAgICAgICAgbG9vcCgpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvYWRjYXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgdHJhbnNhY3Rpb25zXzEgPSByZXF1aXJlKFwiLi4vLi4vYXBpLW5vZGUvdHJhbnNhY3Rpb25zXCIpO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uLy4uL2NvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIGRlZmF1bHRfMShiYXNlLCB0eCwgb3B0aW9ucykge1xuICAgIHZhciBpc09uY2UgPSAhQXJyYXkuaXNBcnJheSh0eCk7XG4gICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgY29uZmlybWVkID0gW107XG4gICAgdmFyIGNvbmZpcm1hdGlvbnMgPSBvcHRpb25zICYmIG9wdGlvbnMuY29uZmlybWF0aW9ucyB8fCAwO1xuICAgIHZhciBtYXhXYWl0VGltZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tYXhXYWl0VGltZSB8fCAwO1xuICAgIHZhciByZXF1ZXN0SW50ZXJ2YWwgPSBvcHRpb25zICYmIG9wdGlvbnMucmVxdWVzdEludGVydmFsIHx8IDI1MDtcbiAgICB2YXIgd2FpdFR4ID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uc18xLmZldGNoU3RhdHVzKGJhc2UsIGxpc3QubWFwKHV0aWxzXzEucHJvcCgnaWQnKSkpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICB2YXIgaGFzaCA9IHV0aWxzXzEuaW5kZXhCeSh1dGlsc18xLnByb3AoJ2lkJyksIHN0YXR1cy5zdGF0dXNlcyk7XG4gICAgICAgICAgICB2YXIgaGFzRXJyb3IgPSBsaXN0LnNvbWUoZnVuY3Rpb24gKHR4KSB7IHJldHVybiBoYXNoW3R4LmlkXS5zdGF0dXMgPT09IGNvbnN0YW50c18xLlRSQU5TQUNUSU9OX1NUQVRVU0VTLk5PVF9GT1VORDsgfSk7XG4gICAgICAgICAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09uZSB0cmFuc2FjdGlvbiBpcyBub3QgaW4gYmxvY2tjaGFpbiEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0b1JlcXVlc3QgPSBsaXN0LmZpbHRlcihmdW5jdGlvbiAodHgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzaFt0eC5pZF0uY29uZmlybWF0aW9ucyA+PSBjb25maXJtYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1lZC5wdXNoKHR4KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXRvUmVxdWVzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1heFdhaXRUaW1lICYmIERhdGUubm93KCkgLSBzdGFydCA+IG1heFdhaXRUaW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdUaW1lb3V0IGVycm9yIScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzXzEud2FpdChyZXF1ZXN0SW50ZXJ2YWwpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gd2FpdFR4KHRvUmVxdWVzdCk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiB3YWl0VHgodXRpbHNfMS50b0FycmF5KHR4KSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBpc09uY2UgPyB1dGlsc18xLmhlYWQoY29uZmlybWVkKSA6IGNvbmZpcm1lZDsgfSk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0XzE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13YWl0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gdG9BcnJheShkYXRhKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdO1xufVxuZXhwb3J0cy50b0FycmF5ID0gdG9BcnJheTtcbmZ1bmN0aW9uIGhlYWQoZGF0YSkge1xuICAgIHJldHVybiBkYXRhWzBdO1xufVxuZXhwb3J0cy5oZWFkID0gaGVhZDtcbmZ1bmN0aW9uIHdhaXQodGltZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuICAgIH0pO1xufVxuZXhwb3J0cy53YWl0ID0gd2FpdDtcbmZ1bmN0aW9uIHByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhW2tleV07IH07XG59XG5leHBvcnRzLnByb3AgPSBwcm9wO1xuZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xufTtcbmV4cG9ydHMuZW50cmllcyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gZXhwb3J0cy5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbbmFtZSwgb2JqW25hbWVdXTsgfSk7XG59O1xuZXhwb3J0cy52YWx1ZXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBvYmpba2V5XTsgfSk7XG59O1xuZXhwb3J0cy5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0LCBtZXJnZSkge1xuICAgIHJldHVybiBleHBvcnRzLmVudHJpZXMobWVyZ2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBfYSkge1xuICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSwgdGFyZ2V0KTtcbn07XG5mdW5jdGlvbiBtYXAocHJvY2Vzcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAobGlzdCkgeyByZXR1cm4gbGlzdC5tYXAocHJvY2Vzcyk7IH07XG59XG5leHBvcnRzLm1hcCA9IG1hcDtcbmZ1bmN0aW9uIGZpbHRlcihwcm9jZXNzKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChsaXN0KSB7IHJldHVybiBsaXN0LmZpbHRlcihwcm9jZXNzKTsgfTtcbn1cbmV4cG9ydHMuZmlsdGVyID0gZmlsdGVyO1xuZnVuY3Rpb24gaW5kZXhCeShwcm9jZXNzLCBkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGl0ZW0pIHtcbiAgICAgICAgYWNjW3Byb2Nlc3MoaXRlbSldID0gaXRlbTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59XG5leHBvcnRzLmluZGV4QnkgPSBpbmRleEJ5O1xuZXhwb3J0cy51bmlxID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5rZXlzKGxpc3QucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGl0ZW0pIHtcbiAgICAgICAgYWNjW2l0ZW1dID0gaXRlbTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBPYmplY3QuY3JlYXRlKG51bGwpKSk7XG59O1xuZnVuY3Rpb24gc3dpdGNoVHJhbnNhY3Rpb25CeVR5cGUoY2hvaWNlcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodHgpIHsgcmV0dXJuIGNob2ljZXNbdHgudHlwZV0gJiYgdHlwZW9mIGNob2ljZXNbdHgudHlwZV0gPT09ICdmdW5jdGlvbicgPyBjaG9pY2VzW3R4LnR5cGVdKHR4KSA6IHVuZGVmaW5lZDsgfTtcbn1cbmV4cG9ydHMuc3dpdGNoVHJhbnNhY3Rpb25CeVR5cGUgPSBzd2l0Y2hUcmFuc2FjdGlvbkJ5VHlwZTtcbmV4cG9ydHMucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBhcmdzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpdGVtKSB7IHJldHVybiBpdGVtKGFjYyk7IH0sIGRhdGEpOyB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbnZhciB0cmFuc2FjdGlvbnNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3RyYW5zYWN0aW9uc1wiKTtcbnZhciBhZGRyZXNzZXNfMSA9IHJlcXVpcmUoXCJAd2F2ZXMvbm9kZS1hcGktanMvY2pzL2FwaS1ub2RlL2FkZHJlc3Nlc1wiKTtcbnZhciBhc3NldHNfMSA9IHJlcXVpcmUoXCJAd2F2ZXMvbm9kZS1hcGktanMvY2pzL2FwaS1ub2RlL2Fzc2V0c1wiKTtcbnZhciB3YWl0XzEgPSByZXF1aXJlKFwiQHdhdmVzL25vZGUtYXBpLWpzL2Nqcy90b29scy90cmFuc2FjdGlvbnMvd2FpdFwiKTtcbnZhciBicm9hZGNhc3RfMSA9IHJlcXVpcmUoXCJAd2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL3RyYW5zYWN0aW9ucy9icm9hZGNhc3RcIik7XG52YXIgZ2V0TmV0d29ya0J5dGVfMSA9IHJlcXVpcmUoXCJAd2F2ZXMvbm9kZS1hcGktanMvY2pzL3Rvb2xzL2Jsb2Nrcy9nZXROZXR3b3JrQnl0ZVwiKTtcbnZhciBXYXZlcyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXYXZlcyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29uc3RhbnRzXzEuREVGQVVMVF9PUFRJT05TKSwgKG9wdGlvbnMgfHwge30pKTtcbiAgICAgICAgdGhpcy5fbmV0d29ya0J5dGVQcm9taXNlID0gZ2V0TmV0d29ya0J5dGVfMS5kZWZhdWx0KHRoaXMuX29wdGlvbnMuTk9ERV9VUkwpLnRoZW4oZnVuY3Rpb24gKGJ5dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBieXRlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdhdmVzLnByb3RvdHlwZSwgXCJfY29ubmVjdFByb21pc2VcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fY29ubmVjdFByb21pc2UgfHwgUHJvbWlzZS5yZWplY3QoJ0hhcyBubyBwcm92aWRlciEnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5fX2Nvbm5lY3RQcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICog0JfQsNC/0YDQvtGB0LjRgtGMINCx0LDQudGCINGB0LXRgtC4XG4gICAgICovXG4gICAgV2F2ZXMucHJvdG90eXBlLmdldE5ldHdvcmtCeXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmV0d29ya0J5dGVQcm9taXNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0L/RgNC+0LLQsNC50LTQtdGAINC+0YLQstC10YfQsNGO0YnQuNC5INC30LAg0L/QvtC00L/QuNGB0YxcbiAgICAgKiBAcGFyYW0gcHJvdmlkZXJcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogaW1wb3J0IFdhdmVzIGZyb20gJ0B3YXZlcy93YXZlcy1qcyc7XG4gICAgICogaW1wb3J0IFByb3ZpZGVyIGZyb20gJ0B3YXZlcy9zZWVkLXByb3ZpZGVyJztcbiAgICAgKlxuICAgICAqIGNvbnN0IHdhdmVzID0gbmV3IFdhdmVzKCk7XG4gICAgICogd2F2ZXMuc2V0UHJvdmlkZXIobmV3IFByb3ZpZGVyKCdTRUVEJykpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIFdhdmVzLnByb3RvdHlwZS5zZXRQcm92aWRlciA9IGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmN1cnJlbnRQcm92aWRlciA9IHByb3ZpZGVyO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fbmV0d29ya0J5dGVQcm9taXNlLnRoZW4oZnVuY3Rpb24gKG5ldHdvcmtCeXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdmlkZXIuY29ubmVjdCh7XG4gICAgICAgICAgICAgICAgTk9ERV9VUkw6IF90aGlzLl9vcHRpb25zLk5PREVfVVJMLFxuICAgICAgICAgICAgICAgIE5FVFdPUktfQllURTogbmV0d29ya0J5dGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RQcm9taXNlID0gcmVzdWx0LnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvdmlkZXI7IH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9Cw0LXQvCDRgdC/0LjRgdC+0Log0LHQsNC70LDQvdGB0L7QsiDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8gKNC90LXQvtCx0YXQvtC00LjQvNC+INCy0YvQv9C+0LvQvdC40YLRjCBsb2dpbiDQv9C10YDQtdC0INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC10LwpXG4gICAgICogQmFzaWMgdXNhZ2UgZXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogYXdhaXQgd2F2ZXMuZ2V0QmFsYW5jZSgpOyAvLyDQktC+0LfQstGA0LDRidCw0LXRgiDQsdCw0LvQsNC90YHRiyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBXYXZlcy5wcm90b3R5cGUuZ2V0QmFsYW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl91c2VyRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignTmVlZCBsb2dpbiBmb3IgZ2V0IGJhbGFuY2VzIScpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXNlciA9IHRoaXMuX3VzZXJEYXRhO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgYWRkcmVzc2VzXzEuZmV0Y2hCYWxhbmNlRGV0YWlscyh0aGlzLl9vcHRpb25zLk5PREVfVVJMLCB1c2VyLmFkZHJlc3MpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgYXNzZXRJZDogJ1dBVkVTJyxcbiAgICAgICAgICAgICAgICBhc3NldE5hbWU6ICdXYXZlcycsXG4gICAgICAgICAgICAgICAgZGVjaW1hbHM6IDgsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBTdHJpbmcoZGF0YS5hdmFpbGFibGUpLFxuICAgICAgICAgICAgICAgIGlzTXlBc3NldDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG9rZW5zOiBOdW1iZXIoZGF0YS5hdmFpbGFibGUpICogTWF0aC5wb3coMTAsIDgpLFxuICAgICAgICAgICAgICAgIHNwb25zb3JzaGlwOiBudWxsLFxuICAgICAgICAgICAgICAgIGlzU21hcnQ6IGZhbHNlXG4gICAgICAgICAgICB9KTsgfSksXG4gICAgICAgICAgICBhc3NldHNfMS5mZXRjaEFzc2V0c0JhbGFuY2UodGhpcy5fb3B0aW9ucy5OT0RFX1VSTCwgdXNlci5hZGRyZXNzKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhLmJhbGFuY2VzLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBhc3NldElkOiBpdGVtLmFzc2V0SWQsXG4gICAgICAgICAgICAgICAgYXNzZXROYW1lOiBpdGVtLmlzc3VlVHJhbnNhY3Rpb24ubmFtZSxcbiAgICAgICAgICAgICAgICBkZWNpbWFsczogaXRlbS5pc3N1ZVRyYW5zYWN0aW9uLmRlY2ltYWxzLFxuICAgICAgICAgICAgICAgIGFtb3VudDogU3RyaW5nKGl0ZW0uYmFsYW5jZSksXG4gICAgICAgICAgICAgICAgaXNNeUFzc2V0OiBpdGVtLmlzc3VlVHJhbnNhY3Rpb24uc2VuZGVyID09PSB1c2VyLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgdG9rZW5zOiBpdGVtLmJhbGFuY2UgKlxuICAgICAgICAgICAgICAgICAgICBNYXRoLnBvdygxMCwgaXRlbS5pc3N1ZVRyYW5zYWN0aW9uLmRlY2ltYWxzKSxcbiAgICAgICAgICAgICAgICBpc1NtYXJ0OiAhIWl0ZW0uaXNzdWVUcmFuc2FjdGlvbi5zY3JpcHQsXG4gICAgICAgICAgICAgICAgc3BvbnNvcnNoaXA6IGl0ZW0uc3BvbnNvckJhbGFuY2UgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNwb25zb3JCYWxhbmNlID4gTWF0aC5wb3coMTAsIDgpICYmXG4gICAgICAgICAgICAgICAgICAgIChpdGVtLm1pblNwb25zb3JlZEFzc2V0RmVlIHx8IDApIDwgaXRlbS5iYWxhbmNlXG4gICAgICAgICAgICAgICAgICAgID8gaXRlbS5taW5TcG9uc29yZWRBc3NldEZlZVxuICAgICAgICAgICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICB9KTsgfSk7IH0pLFxuICAgICAgICBdKS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHdhdmVzID0gX2FbMF0sIGFzc2V0cyA9IF9hWzFdO1xuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkQXJyYXlzKFt3YXZlc10sIGFzc2V0cyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9Cw0LXQvCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70LVcbiAgICAgKlxuICAgICAqIGBgYHRzXG4gICAgICogYXdhaXQgd2F2ZXMubG9naW4oKTsgLy8g0JDQstGC0L7RgNC40LfRg9C10LzRgdGPLiDQktC+0LfQstGA0LDRidCw0LXRgiDQsNC00YDQtdGBINC4INC/0YPQsdC70LjRh9C90YvQuSDQutC70Y7Rh1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIFdhdmVzLnByb3RvdHlwZS5sb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RQcm9taXNlXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocHJvdmlkZXIpIHsgcmV0dXJuIHByb3ZpZGVyLmxvZ2luKCk7IH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMuX3VzZXJEYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqINCS0YvQu9C+0LPQuNC90LjQstCw0LXQvNGB0Y8g0LjQtyDRjtC30LXRgNCwXG4gICAgICovXG4gICAgV2F2ZXMucHJvdG90eXBlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nvbm5lY3RQcm9taXNlXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocHJvdmlkZXIpIHsgcmV0dXJuIHByb3ZpZGVyLmxvZ291dCgpOyB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX3VzZXJEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqINCf0L7QtNC/0LjRgdGL0LLQsNC10Lwg0YHQvtC+0LHRidC10L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyAo0L/RgNC+0LLQsNC50LTQtdGAINC80L7QttC10YIg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNGC0Ywg0L/RgNC10YTQuNC60YEpXG4gICAgICogQHBhcmFtIG1lc3NhZ2VcbiAgICAgKi9cbiAgICBXYXZlcy5wcm90b3R5cGUuc2lnbk1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdFByb21pc2UudGhlbihmdW5jdGlvbiAocHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm92aWRlci5zaWduTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiDQn9C+0LTQv9C40YHRi9Cy0LDQtdC8INGC0LjQv9C40LfQuNGA0L7QstCw0L3QvdGL0LUg0LTQsNC90L3Ri9C1XG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBXYXZlcy5wcm90b3R5cGUuc2lnblR5cGVkRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25uZWN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHByb3ZpZGVyLnNpZ25UeXBlZERhdGEoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICog0J/QvtC70YPRh9Cw0LXQvCDRgdC/0LjRgdC+0Log0LHQsNC70LDQvdGB0L7QsiDQsiDQutGC0L7RgNGL0YUg0LzQvtC20L3QviDQv9C70LDRgtC40YLRjCDQutC+0LzQuNGB0YHQuNGOXG4gICAgICovXG4gICAgV2F2ZXMucHJvdG90eXBlLmdldFNwb25zb3JlZEJhbGFuY2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCYWxhbmNlKCkudGhlbihmdW5jdGlvbiAoYmFsYW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGJhbGFuY2UuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiAhIWl0ZW0uc3BvbnNvcnNoaXA7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uICh0eE9yTGlzdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgaXNPbmNlID0gIUFycmF5LmlzQXJyYXkodHhPckxpc3QpO1xuICAgICAgICB2YXIgc2lnbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fc2lnbih1dGlsc18xLnRvQXJyYXkodHhPckxpc3QpKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNPbmNlID8gcmVzdWx0WzBdIDogcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaWduOiBzaWduLFxuICAgICAgICAgICAgYnJvYWRjYXN0OiBmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ24oKS50aGVuKGZ1bmN0aW9uICh0cmFuc2FjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmJyb2FkY2FzdCh0cmFuc2FjdGlvbnMsIG9wdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLmlzc3VlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ2lzc3VlJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS50cmFuc2ZlciA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVQaXBlbGluZUFQSShbdHJhbnNhY3Rpb25zXzEuYWRkUGFyYW1UeXBlKCd0cmFuc2ZlcicsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUucmVpc3N1ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVQaXBlbGluZUFQSShbdHJhbnNhY3Rpb25zXzEuYWRkUGFyYW1UeXBlKCdyZWlzc3VlJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5idXJuID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ2J1cm4nLCBkYXRhKV0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLmxlYXNlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ2xlYXNlJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5leGNoYW5nZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVQaXBlbGluZUFQSShbdHJhbnNhY3Rpb25zXzEuYWRkUGFyYW1UeXBlKCdleGNoYW5nZScsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUuY2FuY2VsTGVhc2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnY2FuY2VsTGVhc2UnLCBkYXRhKV0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLmFsaWFzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ2FsaWFzJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5tYXNzVHJhbnNmZXIgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnbWFzc1RyYW5zZmVyJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ2RhdGEnLCBkYXRhKV0pO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLnNwb25zb3JzaGlwID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ3Nwb25zb3JzaGlwJywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5zZXRTY3JpcHQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoW3RyYW5zYWN0aW9uc18xLmFkZFBhcmFtVHlwZSgnc2V0U2NyaXB0JywgZGF0YSldKTtcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5zZXRBc3NldFNjcmlwdCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVQaXBlbGluZUFQSShbdHJhbnNhY3Rpb25zXzEuYWRkUGFyYW1UeXBlKCdzZXRBc3NldFNjcmlwdCcsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVBpcGVsaW5lQVBJKFt0cmFuc2FjdGlvbnNfMS5hZGRQYXJhbVR5cGUoJ2ludm9rZScsIGRhdGEpXSk7XG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUuYnJvYWRjYXN0ID0gZnVuY3Rpb24gKHR4LCBvcHQpIHtcbiAgICAgICAgcmV0dXJuIGJyb2FkY2FzdF8xLmRlZmF1bHQodGhpcy5fb3B0aW9ucy5OT0RFX1VSTCwgdHgsIG9wdCk7IC8vIFRPRE8gRml4IHR5cGVzXG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUud2FpdFR4Q29uZmlybSA9IGZ1bmN0aW9uICh0eCwgY29uZmlybWF0aW9ucykge1xuICAgICAgICByZXR1cm4gd2FpdF8xLmRlZmF1bHQodGhpcy5fb3B0aW9ucy5OT0RFX1VSTCwgdHgsIHsgY29uZmlybWF0aW9uczogY29uZmlybWF0aW9ucyB9KTsgLy8gVE9ETyBGaXggdHlwZXNcbiAgICB9O1xuICAgIFdhdmVzLnByb3RvdHlwZS5fY3JlYXRlUGlwZWxpbmVBUEkgPSBmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBUT0RPIGZpeCB0eXBlc1xuICAgICAgICB2YXIgYXBpID0gdXRpbHNfMS5ldm9sdmUoY29uc3RhbnRzXzEuTkFNRV9NQVAsIGZ1bmN0aW9uIChrZXksIHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5fY3JlYXRlUGlwZWxpbmVBUEkoX19zcHJlYWRBcnJheXMobGlzdCwgW19fYXNzaWduKHsgdHlwZTogdHlwZSB9LCBkYXRhKV0pKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIGFwaSksIHRoaXMuX2NyZWF0ZUFjdGlvbnMobGlzdCkpO1xuICAgIH07XG4gICAgV2F2ZXMucHJvdG90eXBlLl9jcmVhdGVBY3Rpb25zID0gZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNpZ24gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fc2lnbihsaXN0KTsgfTtcbiAgICAgICAgdmFyIGJyb2FkY2FzdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gc2lnbigpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuYnJvYWRjYXN0KGxpc3QsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHNpZ246IHNpZ24sIGJyb2FkY2FzdDogYnJvYWRjYXN0IH07XG4gICAgfTtcbiAgICBXYXZlcy5wcm90b3R5cGUuX3NpZ24gPSBmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdFByb21pc2UudGhlbihmdW5jdGlvbiAocHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm92aWRlci5zaWduKGxpc3QpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBXYXZlcztcbn0oKSk7XG5leHBvcnRzLldhdmVzID0gV2F2ZXM7XG5leHBvcnRzLmRlZmF1bHQgPSBXYXZlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdhdmVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UWVBFX01BUCA9IHtcbiAgICAzOiAnaXNzdWUnLFxuICAgIDQ6ICd0cmFuc2ZlcicsXG4gICAgNTogJ3JlaXNzdWUnLFxuICAgIDY6ICdidXJuJyxcbiAgICA3OiAnZXhjaGFuZ2UnLFxuICAgIDg6ICdsZWFzZScsXG4gICAgOTogJ2NhbmNlbExlYXNlJyxcbiAgICAxMDogJ2FsaWFzJyxcbiAgICAxMTogJ21hc3NUcmFuc2ZlcicsXG4gICAgMTI6ICdkYXRhJyxcbiAgICAxMzogJ3NldFNjcmlwdCcsXG4gICAgMTQ6ICdzcG9uc29yc2hpcCcsXG4gICAgMTU6ICdzZXRBc3NldFNjcmlwdCcsXG4gICAgMTY6ICdpbnZva2UnXG59O1xuZXhwb3J0cy5OQU1FX01BUCA9IHtcbiAgICAnaXNzdWUnOiAzLFxuICAgICd0cmFuc2Zlcic6IDQsXG4gICAgJ3JlaXNzdWUnOiA1LFxuICAgICdidXJuJzogNixcbiAgICAnZXhjaGFuZ2UnOiA3LFxuICAgICdsZWFzZSc6IDgsXG4gICAgJ2NhbmNlbExlYXNlJzogOSxcbiAgICAnYWxpYXMnOiAxMCxcbiAgICAnbWFzc1RyYW5zZmVyJzogMTEsXG4gICAgJ2RhdGEnOiAxMixcbiAgICAnc2V0U2NyaXB0JzogMTMsXG4gICAgJ3Nwb25zb3JzaGlwJzogMTQsXG4gICAgJ3NldEFzc2V0U2NyaXB0JzogMTUsXG4gICAgJ2ludm9rZSc6IDE2XG59O1xuZXhwb3J0cy5ERUZBVUxUX09QVElPTlMgPSB7XG4gICAgTk9ERV9VUkw6ICdodHRwczovL25vZGVzLndhdmVzcGxhdGZvcm0uY29tJyxcbiAgICBNQVRDSEVSX1VSTDogJ2h0dHBzOi8vbm9kZXMud2F2ZXNwbGF0Zm9tci5jb20vbWF0Y2hlcidcbn07XG5leHBvcnRzLkRFRkFVTFRfQlJPQURDQVNUX09QVElPTlMgPSB7XG4gICAgY2hhaW46IGZhbHNlLFxuICAgIGNvbmZpcm1hdGlvbnM6IC0xXG59O1xuZXhwb3J0cy5NQVhfQUxJQVNfTEVOR1RIID0gMzA7XG5leHBvcnRzLlNNQVJUX0FTU0VUX0VYVFJBX0ZFRSA9IDAuMDA0ICogTWF0aC5wb3coMTAsIDgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG9iamVjdF8xID0gcmVxdWlyZShcIi4vb2JqZWN0XCIpO1xuZnVuY3Rpb24gdG9BcnJheShkYXRhKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdO1xufVxuZXhwb3J0cy50b0FycmF5ID0gdG9BcnJheTtcbmZ1bmN0aW9uIHdhaXQodGltZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuICAgIH0pO1xufVxuZXhwb3J0cy53YWl0ID0gd2FpdDtcbmZ1bmN0aW9uIGV2b2x2ZShkYXRhLCBwcm9jZXNzKSB7XG4gICAgcmV0dXJuIG9iamVjdF8xLmVudHJpZXMoZGF0YSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIF9hKSB7XG4gICAgICAgIHZhciBrZXkgPSBfYVswXSwgdmFsdWUgPSBfYVsxXTtcbiAgICAgICAgYWNjW2tleV0gPSBwcm9jZXNzKGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn1cbmV4cG9ydHMuZXZvbHZlID0gZXZvbHZlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmtleXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaik7XG59O1xuZXhwb3J0cy5lbnRyaWVzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW25hbWUsIG9ialtuYW1lXV07IH0pO1xufTtcbmV4cG9ydHMudmFsdWVzID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBvYmpba2V5XTsgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5mdW5jdGlvbiBhZGRQYXJhbVR5cGUobmFtZSwgZGF0YSkge1xuICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGF0YSksIHsgdHlwZTogY29uc3RhbnRzXzEuTkFNRV9NQVBbbmFtZV0gfSk7XG59XG5leHBvcnRzLmFkZFBhcmFtVHlwZSA9IGFkZFBhcmFtVHlwZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYW5zYWN0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWxcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIHRoZSBvbmx5IHJlbGlhYmxlIG1lYW5zIHRvIGdldCB0aGUgZ2xvYmFsIG9iamVjdCBpc1xuXHQvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcblx0Ly8gSG93ZXZlciwgdGhpcyBjYXVzZXMgQ1NQIHZpb2xhdGlvbnMgaW4gQ2hyb21lIGFwcHMuXG5cdGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH1cblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH1cblx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH1cblx0dGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QnKTtcbn1cblxudmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBnbG9iYWwuZmV0Y2g7XG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBhbmQgV2VicGFjay5cbmV4cG9ydHMuZGVmYXVsdCA9IGdsb2JhbC5mZXRjaC5iaW5kKGdsb2JhbCk7XG5cbmV4cG9ydHMuSGVhZGVycyA9IGdsb2JhbC5IZWFkZXJzO1xuZXhwb3J0cy5SZXF1ZXN0ID0gZ2xvYmFsLlJlcXVlc3Q7XG5leHBvcnRzLlJlc3BvbnNlID0gZ2xvYmFsLlJlc3BvbnNlOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHdhdmVzX2pzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIkB3YXZlcy93YXZlcy1qc1wiKSk7XG52YXIgc3RvcmFnZV9wcm92aWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJAd2F2ZXMuZXhjaGFuZ2Uvc3RvcmFnZS1wcm92aWRlclwiKSk7XG52YXIgcHJvdmlkZXIgPSBuZXcgc3RvcmFnZV9wcm92aWRlcl8xLmRlZmF1bHQoKTtcbmV4cG9ydHMud2F2ZXMgPSBuZXcgd2F2ZXNfanNfMS5kZWZhdWx0KCk7XG5leHBvcnRzLndhdmVzLnNldFByb3ZpZGVyKHByb3ZpZGVyKTtcbmZ1bmN0aW9uIGRvbmF0ZShlbGVtZW50LCBhbW91bnQpIHtcbiAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndhdmVzX19kb25hdGUtbGFiZWxcIik7XG4gICAgZXhwb3J0cy53YXZlc1xuICAgICAgICAudHJhbnNmZXIoe1xuICAgICAgICByZWNpcGllbnQ6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWNpcGllbnRcIiksXG4gICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICBhc3NldElkOiBcIldBVkVTXCJcbiAgICB9KVxuICAgICAgICAuYnJvYWRjYXN0KClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSAnVGhhbmsgeW91IGZvciB0aGUgZG9uYXRlISc7XG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ0hlcmUgaXMgYW4gZXJyb3IgJiMxMjkzMDA7IENoZWNrIHRoZSBjb25zb2xlISc7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5kb25hdGUgPSBkb25hdGU7XG4iXSwic291cmNlUm9vdCI6IiJ9