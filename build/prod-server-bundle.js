module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){process.nextTick(function(){throw e})},n(n.s=26)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=f(n(15)),o=f(n(14)),u=f(n(13)),i=f(n(0)),a=n(12),l=f(n(11)),c=n(16);function f(e){return e&&e.__esModule?e:{default:e}}n(6);var s=(0,l.default)(function(t){return(0,u.default)({id:"./",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Routes.js",load:function(){return Promise.all([n(20)("./"+t.page),(0,o.default)(""+t.page,{})]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"./"+t.page)},resolve:function(){return n(19).resolve("./"+t.page)},chunkName:function(){return""+t.page}})});t.default=function(){return i.default.createElement("div",null,i.default.createElement("div",{className:"nav"},i.default.createElement(a.Link,{to:"/"},"Gallery"),i.default.createElement(a.Link,{to:"/about"},"About"),i.default.createElement(a.Link,{to:"/article"},"Article")),i.default.createElement(c.Switch,null,i.default.createElement(a.Route,{exact:!0,path:"/"},i.default.createElement(s,{page:"Gallery"})),i.default.createElement(a.Route,{path:"/about"},i.default.createElement(s,{page:"About"})),i.default.createElement(a.Route,{path:"/article"},i.default.createElement(s,{page:"Article"}))))}}).call(this,"/")},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(15)),o=a(n(14)),u=a(n(13)),i=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(){(0,u.default)({id:"lodash",file:"/Users/lawrencewhiteside/Web/courses/webpack-course/src/components/Gallery.js",load:function(){return Promise.all([Promise.resolve().then(n.t.bind(null,8,7)),(0,o.default)("lodash",{})]).then(function(e){return e[0]})},path:function(){return r.default.join(e,"lodash")},resolve:function(){return 8},chunkName:function(){return"lodash"}}).then(function(e){console.log("imported",e)})};t.default=function(){return i.default.createElement("div",null,i.default.createElement("h1",{onClick:l},"Gallery"))}}).call(this,"/")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),u=(r=o)&&r.__esModule?r:{default:r};t.default=function(){return u.default.createElement("div",null,u.default.createElement("h1",null,"Article"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),u=n(12),i=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"render",value:function(){return o.default.createElement(u.BrowserRouter,null,o.default.createElement(i.default,null))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),u=(r=o)&&r.__esModule?r:{default:r};var i=n(18),a=n(17);t.default=function(){return u.default.createElement("div",{className:"profile"},u.default.createElement("img",{src:a}),u.default.createElement("h1",null,i.title),u.default.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:i.__content}}))}},function(e,t,n){(e.exports=n(21)(!1)).push([e.i,".nav {\n  width: 100%;\n  line-height: 2em;\n  background-color: black;\n}\n\n.nav a {\n  color: white;\n  text-decoration: none;\n  padding: 0 20px;\n}\n",""])},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.cacheProm=t.loadFromPromiseCache=t.cacheExport=t.loadFromCache=t.callForString=t.createElement=t.findExport=t.resolveExport=t.requireById=t.tryRequire=t.DefaultError=t.DefaultLoading=t.babelInterop=t.isWebpack=t.isServer=t.isTest=void 0;var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(0),i=(r=u)&&r.__esModule?r:{default:r};t.isTest=!1;var a=t.isServer=!("undefined"!=typeof window&&window.document&&window.document.createElement),l=t.isWebpack=function(){return void 0!==n},c=t.babelInterop=function(e){return e&&"object"===(void 0===e?"undefined":o(e))&&e.__esModule?e.default:e},f=(t.DefaultLoading=function(){return i.default.createElement("div",null,"Loading...")},t.DefaultError=function(e){var t=e.error;return i.default.createElement("div",null,"Error: ",t&&t.message)},t.tryRequire=function(e){try{return f(e)}catch(e){0}return null},t.requireById=function(t){return l()||"string"!=typeof t?n(t):e.require(t)}),s=(t.resolveExport=function(e,t,n,r,o,u,i){var a=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l=s(e,t);n&&e&&n(e,{isServer:"undefined"==typeof window,isSync:a},o,u);return r&&l&&p(l,r,o,i),l},t.findExport=function(e,t){return"function"==typeof t?t(e):null===t?e:e&&"object"===(void 0===e?"undefined":o(e))&&t?e[t]:c(e)}),d=(t.createElement=function(e,t){return i.default.isValidElement(e)?i.default.cloneElement(e,t):i.default.createElement(e,t)},t.callForString=function(e,t){return"function"==typeof e?e(t):e}),p=(t.loadFromCache=function(e,t,n){return!a&&n[d(e,t)]},t.cacheExport=function(e,t,n,r){return r[d(t,n)]=e});t.loadFromPromiseCache=function(e,t,n){return n[d(e,t)]},t.cacheProm=function(e,t,n,r){return r[d(t,n)]=e}}).call(this,n(7)(e))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.setHasBabelPlugin=t.ReportChunks=t.MODULE_IDS=t.CHUNK_NAMES=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(24);Object.defineProperty(t,"CHUNK_NAMES",{enumerable:!0,get:function(){return u.CHUNK_NAMES}}),Object.defineProperty(t,"MODULE_IDS",{enumerable:!0,get:function(){return u.MODULE_IDS}});var i=n(23);Object.defineProperty(t,"ReportChunks",{enumerable:!0,get:function(){return d(i).default}});var a=d(n(0)),l=d(n(9)),c=d(n(22)),f=d(u),s=n(10);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var h=!1,v=function(){return e.hot&&(e.hot.data||"apply"===e.hot.status())};t.setHasBabelPlugin=function(){h=!0};t.default=function(e){var t,n,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=u.loading,d=void 0===i?s.DefaultLoading:i,y=u.error,m=void 0===y?s.DefaultError:y,b=u.minDelay,_=void 0===b?0:b,g=u.alwaysDelay,E=void 0!==g&&g,w=u.testBabelPlugin,O=void 0!==w&&w,j=u.loadingTransition,S=void 0===j||j,P=p(u,["loading","error","minDelay","alwaysDelay","testBabelPlugin","loadingTransition"]),k=h||O;return P.isDynamic=k,P.modCache={},P.promCache={},n=t=function(t){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return r.update=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];r._mounted&&(e.error||(e.error=null),r.handleAfter(e,t,n,o))},r.state={error:null},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,a.default.Component),o(n,null,[{key:"preload",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t=t||{};var o=(0,f.default)(e,P,t),u=o.requireAsync,i=o.requireSync,a=void 0;try{a=i(t,r)}catch(e){return Promise.reject(e)}return Promise.resolve().then(function(){return a||u(t,r)}).then(function(e){return(0,c.default)(n,e,{preload:!0}),e})}}]),o(n,[{key:"componentWillMount",value:function(){this._mounted=!0;var t=(0,f.default)(e,P,this.props),n=t.addModule,r=t.requireSync,o=t.requireAsync,u=t.asyncOnly,i=void 0;try{i=r(this.props,this.context)}catch(e){return this.update({error:e})}this._asyncOnly=u;var a=n(this.props);if(this.context.report&&this.context.report(a),i||s.isServer)return this.handleBefore(!0,!0,s.isServer),void this.update({Component:i},!0,!0,s.isServer);this.handleBefore(!0,!1),this.requireAsync(o,this.props,!0)}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"componentWillReceiveProps",value:function(t){var n=this;if(k||this._asyncOnly){var r=(0,f.default)(e,P,t,this.props),o=r.requireSync,u=r.requireAsync;if((0,r.shouldUpdate)(t,this.props)){var i=void 0;try{i=o(t,this.context)}catch(e){return this.update({error:e})}if(this.handleBefore(!1,!!i),!i)return this.requireAsync(u,t);var a={Component:i};if(E)return S&&this.update({Component:null}),void setTimeout(function(){return n.update(a,!1,!0)},_);this.update(a,!1,!0)}else if(v()){var l=o(t,this.context);this.setState({Component:function(){return null}}),setTimeout(function(){return n.setState({Component:l})})}}}},{key:"requireAsync",value:function(e,t,n){var r=this;this.state.Component&&S&&this.update({Component:null});var o=new Date;e(t,this.context).then(function(e){var t={Component:e},u=new Date-o;if(u<_)return setTimeout(function(){return r.update(t,n)},_-u);r.update(t,n)}).catch(function(e){return r.update({error:e})})}},{key:"handleBefore",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.props.onBefore&&(0,this.props.onBefore)({isMount:e,isSync:t,isServer:n})}},{key:"handleAfter",value:function(e,t,r,o){var u=e.Component,i=e.error;u&&!i?((0,c.default)(n,u,{preload:!0}),this.props.onAfter&&(0,this.props.onAfter)({isMount:t,isSync:r,isServer:o},u)):i&&this.props.onError&&this.props.onError(i),this.setState(e)}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.Component,o=this.props,u=o.isLoading,i=o.error,a=p(o,["isLoading","error"]);return u?(0,s.createElement)(d,a):i?(0,s.createElement)(m,r({},a,{error:i})):t?(0,s.createElement)(m,r({},a,{error:t})):n?(0,s.createElement)(n,a):(0,s.createElement)(d,a)}}]),n}(),t.contextTypes={store:l.default.object,report:l.default.func},n}}).call(this,n(7)(e))},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){(function(e){e.exports=function(e,t){if(!1===t)return e;var n=e.load;return e.then=function(e){return n().then(function(t){return e&&e(t)})},e.catch=function(e){return n().catch(function(t){return e&&e(t)})},e};var t=!1;!function(){if(!t){var r,o=void 0!==n;try{(r=o?n(11):e.require("react-universal-component"))&&(r.setHasBabelPlugin(),t=!0)}catch(e){}}}()}).call(this,n(7)(e))},function(e,t,n){var r={};e.exports=function(e,t){var n=function(e){return"undefined"!=typeof window&&window.__CSS_CHUNKS__?window.__CSS_CHUNKS__[e]:null}(e);if(n){if(r[n])return r[n];var o=document.getElementsByTagName("head")[0],u=document.createElement("link");u.charset="utf-8",u.type="text/css",u.rel="stylesheet",u.timeout=3e4;var i=new Promise(function(t,r){var i,a,l=function(){a&&(u.href=n,a.onerror=null),u.onerror=null,clearTimeout(i),t()};u.onerror=function(){u.onerror=u.onload=null,clearTimeout(i),r(new Error("could not load css chunk: "+e))},function(){var e=navigator.userAgent.match(/\ AppleWebKit\/(\d+)\.(\d+)/);if(e){var t=+e[1],n=+e[2];return 535===t&&n>=24||t>535}return!0}()&&"onload"in u?(u.onload=l,u.href=n):((a=document.createElement("img")).onerror=l,a.src=n),i=setTimeout(u.onerror,u.timeout),o.appendChild(u)});return r[n]=i,i}}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-router")},function(e,t,n){e.exports=n.p+"images/link.jpg"},function(e,t){e.exports={title:"Our first Post",author:"Link",__content:'<h1 id="long-ago-in-the-kingdom-of-hyrule">Long Ago in the Kingdom of Hyrule</h1>\n<p>Our Hero wakes up. He is alone. He must find his sword.</p>\n'}},function(e,t,n){var r={"./About":5,"./About.js":5,"./AppRoot":4,"./AppRoot.js":4,"./Article":3,"./Article.js":3,"./Gallery":2,"./Gallery.js":2,"./Routes":1,"./Routes.js":1,"./nav.css":6};function o(e){var t=u(e);if(!n.m[t]){var r=new Error("Module '"+e+"' ('"+t+"') is not available (weak dependency)");throw r.code="MODULE_NOT_FOUND",r}return n(t)}function u(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=u,o.id=19,e.exports=o},function(e,t,n){var r={"./About":[5,0],"./About.js":[5,0],"./AppRoot":[4,0],"./AppRoot.js":[4,0],"./Article":[3,0],"./Article.js":[3,0],"./Gallery":[2,0],"./Gallery.js":[2,0],"./Routes":[1],"./Routes.js":[1],"./nav.css":[6]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n.t(e,7)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id=20,e.exports=o},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),u=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(u).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var u=this[o][0];"number"==typeof u&&(r[u]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t){e.exports=require("hoist-non-react-statics")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),u=i(n(9));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"getChildContext",value:function(){return{report:this.props.report}}},{key:"render",value:function(){return o.default.Children.only(this.props.children)}}]),t}();a.propTypes={report:u.default.func.isRequired},a.childContextTypes={report:u.default.func.isRequired},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearChunks=t.flushModuleIds=t.flushChunkNames=t.MODULE_IDS=t.CHUNK_NAMES=void 0,t.default=function(e,t,a,l){var c=t.key,f=t.timeout,s=void 0===f?15e3:f,d=t.onLoad,p=t.onError,h=t.isDynamic,v=t.modCache,y=t.promCache,m=i(h,e,t,a),b=m.chunkName,_=m.path,g=m.resolve,E=m.load;return{requireSync:function(e,t){var o=(0,r.loadFromCache)(b,e,v);if(!o){var u=void 0;if(!(0,r.isWebpack)()&&_){var i=(0,r.callForString)(_,e)||"";u=(0,r.tryRequire)(i)}else if((0,r.isWebpack)()&&g){var a=(0,r.callForString)(g,e);n.m[a]&&(u=(0,r.tryRequire)(a))}u&&(o=(0,r.resolveExport)(u,c,d,b,e,t,v,!0))}return o},requireAsync:function(e,t){var n=(0,r.loadFromCache)(b,e,v);if(n)return Promise.resolve(n);var o=(0,r.loadFromPromiseCache)(b,e,y);if(o)return o;var u=new Promise(function(n,o){var u=function(e){if(e=e||new Error("timeout exceeded"),clearTimeout(i),p){var t="undefined"==typeof window,n={isServer:t};p(e,n)}o(e)},i=s&&setTimeout(u,s),a=function(o){clearTimeout(i);var a=(0,r.resolveExport)(o,c,d,b,e,t,v);if(a)return n(a);u(new Error("export not found"))},l=E(e,{resolve:a,reject:u});l&&"function"==typeof l.then&&l.then(a).catch(u)});return(0,r.cacheProm)(u,b,e,y),u},addModule:function(e){if(r.isServer||r.isTest){if(b){var t=(0,r.callForString)(b,e);if(t&&o.add(t),!r.isTest)return t}if((0,r.isWebpack)()){var n=(0,r.callForString)(g,e);return n&&u.add(n),n}if(!(0,r.isWebpack)()){var i=(0,r.callForString)(_,e);return i&&u.add(i),i}}},shouldUpdate:function(n,o){var u=(0,r.callForString)(b,n),a=i(h,e,t,o),l=(0,r.callForString)(a.chunkName,o);return u!==l},asyncOnly:!_&&!g||"function"==typeof b}};var r=n(10),o=t.CHUNK_NAMES=new Set,u=t.MODULE_IDS=new Set;t.flushChunkNames=function(){var e=Array.from(o);return o.clear(),e},t.flushModuleIds=function(){var e=Array.from(u);return u.clear(),e},t.clearChunks=function(){o.clear(),u.clear()};var i=function(e,t,n,r){if(e)return"function"==typeof t?t(r):t;var o="function"==typeof t?t:function(){return t};return{file:"default",id:n.id||"default",chunkName:n.chunkName||"default",resolve:n.resolve||"",path:n.path||"",load:o}}},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(0)),o=n(25),u=n(16),i=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return function(e,t){t.send('\n    <html>\n      <head>\n        <link href="/main.css" rel="stylesheet" />\n      </head>\n      <body>\n        <div id="react-root">'+(0,o.renderToString)(r.default.createElement(u.StaticRouter,{location:e.originalUrl,context:{}},r.default.createElement(i.default,null)))+"</div>\n        <script src='vendor-bundle.js'><\/script>\n        <script src='main-bundle.js'><\/script>\n      </body>\n    </html>\n  ")}}}]);