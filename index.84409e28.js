!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired7c6=r);var o=r("bpxeT"),a=r("8MBJY"),s=r("4KMWL"),u=r("8MQK7"),c=r("a2hTj"),l=r("2TvXO"),f=r("dIxxU"),p=new WeakMap,d=new WeakMap,h=function(){"use strict";function e(){t(a)(this,e),t(u)(this,p,{writable:!0,value:"https://api.themoviedb.org/3/"}),t(u)(this,d,{writable:!0,value:"bdc0e4e9aaa7667ff59f8bdca91622c0"}),this.page=1,this.perPage=1,this.totalPage=0}return t(c)(e,[{key:"getFilmotekaCard",value:function(){var e=this;return t(o)(t(l).mark((function n(){var i;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(f).get("".concat(t(s)(e,p),"trending/movie/day?api_key=").concat(t(s)(e,d),"&page=").concat(e.page));case 2:return i=n.sent.data,n.abrupt("return",i);case 4:case"end":return n.stop()}}),n)})))()}},{key:"getTotalPages",value:function(t){this.totalPage=t/this.perPage}}]),e}(),g=r("twtVq");function v(t){return t.map((function(t){var e=t.id,n=t.genre_ids,i=t.title,r=t.release_date,o=t.poster_path,a=Object.values(n).map((function(t){return g.genres[t]}));a=a.length>2?a.slice(0,2).join(", ")+", Other":a.join(", ");var s="https://image.tmdb.org/t/p/w500/".concat(o);return'\n    <li class="film-card__item" data-id='.concat(e,'>\n      <img class="film-card__img"  src="').concat(o?s:"https://www.prokerala.com/movies/assets/img/no-poster-available.webp",'" alt="film poster"  />\n    <h2 class="film-card__title">').concat(i,'</h2>\n    <div class="film-card__flex">\n    <p class="film-card__flex__text">').concat(a,' |\n    </p>\n    <p class="film-card__flex__text">').concat(r.slice(0,-6),"</p>\n    </div>\n    </li>\n")})).join("")}var m,_={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,m=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,r,o,a=Object.prototype.hasOwnProperty;for(r=1,o=arguments.length;r<o;r+=1)for(i in n=arguments[r])a.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),r=n(17),o=n(6);t.exports=function(t,e,n){i(t)?r(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),r=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(r(n,e.static),delete e.static),r(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var r,o;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,r=n;n>=0&&r<o;r+=1)if(e[r]===t)return r;return-1}},function(t,e,n){"use strict";var i=n(29),r=n(30),o=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),r=o(t)?t(e):i(t,e);return n.innerHTML=r,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),r=n(7),o=n(0),a=n(1),s=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=r({init:function(t,e){this._options=o({},c,e),this._currentPage=0,this._view=new s(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),r=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<r,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,r=this._getLastPage(),o=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(o/2),(n=(e=Math.max(t-i,1))+o-1)>r&&(e=Math.max(r-o+1,1),n=r)):(e=(a-1)*o+1,n=a*o,n=Math.min(n,r)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){"use strict";var i=n(0),r=n(14),o=n(4),a=n(16),s=n(2),u=n(5),c=n(3),l=/\s+/g;function f(){this.events=null,this.contexts=null}f.mixin=function(t){i(t.prototype,f.prototype)},f.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},f.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},f.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},f.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},f.prototype._memorizeContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},f.prototype._forgetContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},f.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},f.prototype.on=function(t,e,n){var i=this;o(t)?(t=t.split(l),c(t,(function(t){i._bindEvent(t,e,n)}))):a(t)&&(n=e,c(t,(function(t,e){i.on(e,t,n)})))},f.prototype.once=function(t,e,n){var i=this;if(a(t))return n=e,void c(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function r(){e.apply(n,arguments),i.off(t,r,n)}),n)},f.prototype._spliceMatches=function(t,e){var n,i=0;if(s(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},f.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},f.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},f.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var r=t===i.handler,o=e===i.context,a=r&&o;return a&&n._forgetContext(i.context),a}},f.prototype._offByEventName=function(t,e){var n=this,i=u(e),r=n._matchHandler(e);t=t.split(l),c(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,r):(c(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},f.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},f.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?c(t,(function(t,e){i.off(e,t)})):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),c(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},f.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},f.prototype.fire=function(t){this.invoke.apply(this,arguments)},f.prototype.invoke=function(t){var e,n,i,r;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(r=e[i]).handler.apply(r.context,n))return!1;i+=1}return!0},f.prototype.hasListener=function(t){return this.getListenerLength(t)>0},f.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=f},function(t,e,n){"use strict";var i=n(1),r=n(15);t.exports=function(t){return!i(t)&&!r(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,r=t.length;for(n=n||null;i<r&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),r=n(7),o=n(21),a=n(22),s=n(24),u=n(25),c=n(0),l=n(4),f=n(28),p=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],g=["prev","next"],v=r({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!f(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(h,(function(t){this._buttons[t]=p.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(h,(function(t){var e="disabled"+p.capitalizeFirstLetter(t);this._buttons[e]=p.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(g,(function(t){var e=t+"More";this._buttons[e]=p.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,u(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,u(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,r=t.rightPageNumber;for(n=i;n<=r;n+=1)n===t.page?e=p.createElementByTemplate(this._template.currentPage,{page:n}):(e=p.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||u(e,this._firstItemClassName),n!==r||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,i,r=o(e);s(e),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!p.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],p.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),r=n(3),o=n(23);function a(t,e,n,i){function a(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,i){var a=o(t,e),s=!1;r(a,(function(t){return t.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:i})}(t,e,n,a)}t.exports=function(t,e,n,o){i(e)?r(e.split(/\s+/g),(function(e){a(t,e,n,o)})):r(e,(function(e,i){a(t,i,e,n)}))}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,r=t[i];return r||(r=t[i]={}),(n=r[e])||(n=r[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),r=n(8),o=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),s=t.classList,u=[];s?i(n,(function(e){t.classList.add(e)})):((e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){r(t,u)<0&&u.push(t)})),a(t,u))}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),r=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){"use strict";var i=n(8),r=n(3),o=n(2),a=n(4),s=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,f=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,p=/\./,d=/^["']\w+["']$/,h=/"|'/g,g=/^-?\d+\.?\d*$/,v={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],o=0,a=0;return r(e,(function(t,r){0===t.indexOf("if")?o+=1:"/if"===t?o-=1:o||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(a,r)),a=r+1)})),i.push(e.slice(a)),{exps:n,sourcesInsideIf:i}}(t,e),o=!1,a="";return r(i.exps,(function(t,e){return(o=x(t,n))&&(a=b(i.sourcesInsideIf[e],n)),!o})),a},each:function(t,e,n){var i=x(t,n),a=o(i)?"@index":"@key",u={},c="";return r(i,(function(t,i){u[a]=i,u["@this"]=t,s(n,u),c+=b(e.slice(),n)})),c},with:function(t,e,n){var r=i("as",t),o=t[r+1],a=x(t.slice(0,r),n),u={};return u[o]=a,b(e,s(n,u))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,r=[],o=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,r.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return r.push(t.slice(o)),r};function _(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(h,""):c.test(t)?i=_((n=t.split(l))[0],e)[_(n[1],e)]:f.test(t)?i=_((n=t.split(p))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function y(t,e,n){for(var i,r,o,s,u=v[t],c=1,l=2,f=e[l];c&&a(f);)0===f.indexOf(t)?c+=1:0===f.indexOf("/"+t)&&(c-=1,i=l),f=e[l+=2];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=u(e[0].split(" ").slice(1),(r=0,o=i,(s=e.splice(r+1,o-r)).pop(),s),n),e}function x(t,e){var n=_(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return r(e,(function(t){i.push(_(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function b(t,e){for(var n,i,r,o=1,s=t[o];a(s);)i=(n=s.split(" "))[0],v[i]?(r=y(i,t.splice(o,t.length-o),e),t=t.concat(r)):t[o]=x(n,e),s=t[o+=2];return t.join("")}t.exports=function(t,e){return b(m(t,u),e)}},function(t,e,n){"use strict";var i=n(1),r=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",a=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(t){return(new Date).getTime()-t>6048e5}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),r="";return i(e,(function(t,e){r+="&"+e+"="+t})),r=r.substring(1),n.src=t+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},_=m();var y=document.getElementById("pagination"),x=new(t(_))(y,{totalItems:10,itemsPerPage:3,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn btnPages">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});r("twtVq");var b=r("l1RgP"),P=new h;function w(t){(0,b.default)().loader.classList.remove("visually-hidden"),window.scroll({top:0,left:0,behavior:"smooth"}),P.page=t.page,P.getFilmotekaCard().then((function(t){return(0,b.default)().div.innerHTML=v(t.results)})).then((function(){})).finally((function(){(0,b.default)().loader.classList.add("visually-hidden")}))}P.getFilmotekaCard().then((function(t){return(0,b.default)().div.innerHTML=v(t.results)})).finally((function(){(0,b.default)().loader.classList.add("visually-hidden")})),(0,b.default)().body.classList.add("overflow"),x.on("afterMove",w),r("ghnK3");var C=r("8nrFW"),E=(b=r("l1RgP"),r("lHIzZ")),M=r("k5SnF"),I=r("iU1Pc"),N=new(0,E.MovieAPI),L={},T=[],S="WATCHED",k=[],B="QUEUE";function O(){(0,b.default)().modal.classList.add("is-hidden"),document.removeEventListener("keydown",F),(0,b.default)().modalContainer.removeEventListener("click",j),(0,b.default)().html.style.overflow="visible",(0,b.default)().backToTop.style.display="block"}function j(t){t.target===t.currentTarget&&(O(),console.log("click"))}function F(t){"Escape"===t.key&&(O(),console.log("escape"))}(0,b.default)().containerListRef.addEventListener("click",(function(e){var n=e.target.closest(".film-card__item").dataset.id;if(e.target===e.currentTarget)return;(0,b.default)().modal.classList.remove("is-hidden"),document.addEventListener("keydown",F),(0,b.default)().modalContainer.addEventListener("click",j),N.getFilms(n).then((function(e){var n=(0,M.renderModalMarkup)(e);(0,b.default)().modalFilm.innerHTML=n,(0,b.default)().modal.style.backgroundImage="linear-gradient(to right, rgba(47, 48, 58, 0.9), rgba(47, 48, 58, 0.9)),\n\t\turl(https://image.tmdb.org/t/p/w500/".concat(e.backdrop_path,")"),(0,b.default)().modal.style.backgroundSize="cover",(0,b.default)().html.style.overflow="hidden",(0,b.default)().backToTop.style.display="none",function(e){L=e;var n=document.querySelector(".js-btn-watched");n.addEventListener("click",q),null!==localStorage.getItem(S)&&(T=t(C)(JSON.parse(localStorage.getItem(S))));T.some((function(t){return t.id===e.id}))&&(n.textContent="Remove from watched");null!==localStorage.getItem(B)&&(k=t(C)(JSON.parse(localStorage.getItem(B))));var i=document.querySelector(".js-btn-queue");i.addEventListener("click",H),k.some((function(t){return t.id===e.id}))&&(i.textContent="Remove from queue")}(e)})).catch((function(t){return console.log(t)})).finally((function(){(0,b.default)().loaderModal.classList.add("visually-hidden")}))})),(0,b.default)().modalCloseBtnRef.addEventListener("click",O);var A,q=function(e){var n=L,i=document.querySelector(".js-btn-watched");if(null!==localStorage.getItem(S)&&(T=t(C)(JSON.parse(localStorage.getItem(S)))),0===T.leng)T.push(n),I.Notify.success("Film add to watched"),i.textContent="Remove from watched";else if(T.some((function(t){return t.id===n.id}))){T=T.filter((function(t){return Number(t)!==n.id})),I.Notify.warning("Film Remove from watched");var r=T.findIndex((function(t){return t.id===n.id}));T.splice(r,1),i.textContent="Add to watched"}else T.push(n),I.Notify.success("Film add to watched"),i.textContent="Remove from watched";try{var o=JSON.stringify(T);localStorage.setItem(S,o)}catch(t){console.error("Set state error: ",t.message)}},H=function(e){var n=L,i=document.querySelector(".js-btn-queue");if(null!==localStorage.getItem(B)&&(k=t(C)(JSON.parse(localStorage.getItem(B)))),0===k.lenght)k.push(n),I.Notify.success("Film added to queue"),i.textContent="Remove from queue";else if(k.some((function(t){return t.id===n.id}))){k=k.filter((function(t){return Number(t)!==n.id})),I.Notify.warning("Film Removed from queue");var r=k.findIndex((function(t){return t.id===n.id}));k.splice(r,1),i.textContent="Add to queue"}else k.push(n),I.Notify.success("Film added to queue"),i.textContent="Remove from queue";try{var o=JSON.stringify(k);localStorage.setItem(B,o)}catch(t){console.error("Set state error: ",t.message)}},R=r("l5bVx"),V=/^\s+|\s+$/g,D=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,U=/^0o[0-7]+$/i,$=parseInt,J="object"==typeof e&&e&&e.Object===Object&&e,W="object"==typeof self&&self&&self.Object===Object&&self,Z=J||W||Function("return this")(),K=Object.prototype.toString,Q=Math.max,X=Math.min,G=function(){return Z.Date.now()};function Y(e){var n=void 0===e?"undefined":t(R)(e);return!!e&&("object"==n||"function"==n)}function tt(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(R)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==K.call(e)}(e))return NaN;if(Y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=Y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(V,"");var i=z.test(e);return i||U.test(e)?$(e.slice(2),i?2:8):D.test(e)?NaN:+e}A=function(t,e,n){var i,r,o,a,s,u,c=0,l=!1,f=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function d(e){var n=i,o=r;return i=r=void 0,c=e,a=t.apply(o,n)}function h(t){return c=t,s=setTimeout(v,e),l?d(t):a}function g(t){var n=t-u;return void 0===u||n>=e||n<0||f&&t-c>=o}function v(){var t=G();if(g(t))return m(t);s=setTimeout(v,function(t){var n=e-(t-u);return f?X(n,o-(t-c)):n}(t))}function m(t){return s=void 0,p&&i?d(t):(i=r=void 0,a)}function _(){var t=G(),n=g(t);if(i=arguments,r=this,u=t,n){if(void 0===s)return h(u);if(f)return s=setTimeout(v,e),d(u)}return void 0===s&&(s=setTimeout(v,e)),a}return e=tt(e)||0,Y(n)&&(l=!!n.leading,o=(f="maxWait"in n)?Q(tt(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),_.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=u=r=s=void 0},_.flush=function(){return void 0===s?a:m(G())},_};var et=document.querySelector(".header_input"),nt=t(A)((function(t){var e=t.target.value;st.value=e,""===st.value&&rt.classList.add("is-hidden-text");x.off("beforeMove",ut),x.off("afterMove",w),x.on("beforeMove",ut),x.movePageTo(1)}),300),it=(et.addEventListener("input",nt),document.querySelector(".container__list")),rt=document.querySelector("#noName"),ot=document.querySelector("#noGiv");function at(t){0===t.results.length?(rt.classList.remove("is-hidden-text"),ot.classList.remove("is-hidden-giv")):(rt.classList.add("is-hidden-text"),ot.classList.add("is-hidden-giv"));var e=v(t.results);it.innerHTML=e}var st={value:"",page:1,ApiSearch:function(){var t="https://api.themoviedb.org/3/search/movie?api_key=bdc0e4e9aaa7667ff59f8bdca91622c0&language=en-US&query=".concat(this.value,"&page=").concat(this.page,"&include_adult=false&year=2001");return fetch(t).then((function(t){if(!t.ok)throw new Error;return t.json()}))}};function ut(t){st.page=t.page,window.scroll({top:0,left:0,behavior:"smooth"}),st.value&&st.ApiSearch().then(at).catch((function(t){console.log("error",t)}))}r("23Ajj"),r("9VC5X")}();
//# sourceMappingURL=index.84409e28.js.map
