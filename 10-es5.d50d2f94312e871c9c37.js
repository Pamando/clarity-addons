!function(){function e(e,c){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,c){if(!e)return;if("string"==typeof e)return t(e,c);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,c)}(e))||c&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var c,n=i(e);if(t){var r=i(this).constructor;c=Reflect.construct(n,arguments,r)}else c=n.apply(this,arguments);return o(this,c)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{rbve:function(t,o,i){"use strict";i.r(o),i.d(o,"CardsDemoModule",function(){return I});var l=i("3Pt+"),d=i("ofXK"),b=i("8MG2"),s=i("N+3j"),u=i("fXoL"),f=i("0G9f"),v=i("vAyd");function h(e,t){1&e&&(u.Qb(0,"div",7),u.Bc(1," Click to select me "),u.Pb())}function p(e,t){1&e&&(u.Qb(0,"div",7),u.Bc(1," I am the selected card "),u.Pb())}function m(e,t){if(1&e){var c=u.Rb();u.Qb(0,"div",4),u.Qb(1,"div",20),u.Xb("click",function(){u.tc(c);var e=t.index;return u.Zb().activateCard(e)}),u.Qb(2,"div",6),u.Bc(3),u.Pb(),u.zc(4,h,2,0,"div",21),u.zc(5,p,2,0,"div",21),u.Pb(),u.Pb()}if(2&e){var n=t.$implicit;u.zb(1),u.Cb("card-active",n.active),u.zb(2),u.Dc(" ",n.title," "),u.zb(1),u.hc("ngIf",!n.active),u.zb(1),u.hc("ngIf",n.active)}}function P(e,t){1&e&&(u.Qb(0,"clr-dropdown-menu",22),u.Qb(1,"button",23),u.Bc(2," Edit "),u.Pb(),u.Qb(3,"button",23),u.Bc(4," Duplicate "),u.Pb(),u.Qb(5,"button",23),u.Bc(6," Delete "),u.Pb(),u.Pb())}var y,Q,w=((y=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(b,t);var o,i,l,d=a(b);function b(){var e;return c(this,b),(e=d.call(this,"cards")).htmlExample='\n<div class="clr-row">\n    <div class="clr-col-4">\n        <div class="card card-active clickable">\n            <div class="card-header">\n                I am an active card\n            </div>\n            <div class="card-block">\n                I am also clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card clickable">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                But I am clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                And I am also not clickable\n            </div>\n        </div>\n    </div>\n</div>\n',e.htmlExamplePlaceholder='\n<div class="card card-placeholder">\n    <div class="card-header">\n        Placeholder card\n    </div>\n    <div class="card-block">\n        Card block\n        <div>\n            <a class="btn btn-link">Action</a>\n        </div>\n    </div>\n</div>\n',e.htmlExampleCustomActions='\n<div class="card">\n    <div class="card-header">\n        Card header with custom actions\n        <clr-dropdown class="card-actions">\n            <button type="button" class="btn btn-icon btn-link card-action dropdown-toggle" clrDropdownTrigger>\n                <clr-icon shape="ellipsis-vertical"></clr-icon>\n            </button>\n            <clr-dropdown-menu clrPosition="bottom-right" *clrIfOpen>\n                ...\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n    <div class="card-block">\n        Card Block\n    </div>\n</div>\n',e.cards=[{title:"Selectable card",active:!0},{title:"Selectable card",active:!1},{title:"Selectable card",active:!1}],e}return o=b,(i=[{key:"activateCard",value:function(t){var c,n=e(this.cards);try{for(n.s();!(c=n.n()).done;)c.value.active=!1}catch(r){n.e(r)}finally{n.f()}this.cards[t].active=!0}}])&&n(o.prototype,i),l&&n(o,l),b}(s.a)).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=u.Eb({type:y,selectors:[["clr-cards-demo"]],hostVars:4,hostBindings:function(e,t){2&e&&u.Cb("content-area",!0)("dox-content-panel",!0)},features:[u.wb],decls:85,vars:5,consts:[[3,"title"],["id","cards-header",1,"component-summary"],["id","design-guidelines"],[1,"clr-row"],[1,"clr-col-4"],[1,"card","clickable"],[1,"card-header"],[1,"card-block"],["href","https://clarity.design/documentation/cards"],["class","clr-col-4",4,"ngFor","ngForOf"],[1,"clr-code"],["id","examples"],[3,"clrCode"],[1,"card","card-placeholder"],[1,"btn","btn-link"],[1,"card"],[1,"card-actions"],["type","button","clrDropdownTrigger","",1,"btn","btn-icon","btn-link","card-action","dropdown-toggle"],["shape","ellipsis-vertical"],["clrPosition","bottom-right",4,"clrIfOpen"],[1,"card","selectable",3,"click"],["class","card-block",4,"ngIf"],["clrPosition","bottom-right"],["type","button","clrDropdownItem",""]],template:function(e,t){1&e&&(u.Qb(0,"clr-doc-wrapper",0),u.Qb(1,"article"),u.Qb(2,"h5",1),u.Bc(3,"The Addons extend the default Clarity cards by providing following additional types:"),u.Pb(),u.Qb(4,"ul"),u.Qb(5,"li"),u.Bc(6,"Selectable card. The selected stays visually highlighted."),u.Pb(),u.Qb(7,"li"),u.Bc(8,"Placeholder card. Represents an empty card which can be filled by user actions."),u.Pb(),u.Pb(),u.Qb(9,"h2"),u.Bc(10,"Selectable card"),u.Pb(),u.Qb(11,"div",2),u.Qb(12,"h3"),u.Bc(13,"Behavior"),u.Pb(),u.Qb(14,"p"),u.Bc(15,"Only one card at the time can have the selection indicator. Compare this behavior to a radio button. Note the different hover style in the example below."),u.Pb(),u.Qb(16,"h6"),u.Bc(17,"Default clickable card (Standard Clarity)"),u.Pb(),u.Qb(18,"div",3),u.Qb(19,"div",4),u.Qb(20,"div",5),u.Qb(21,"div",6),u.Bc(22," Default card "),u.Pb(),u.Qb(23,"div",7),u.Bc(24," See the official "),u.Qb(25,"a",8),u.Bc(26,"Clarity documentation"),u.Pb(),u.Bc(27," for details. "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Qb(28,"h6"),u.Bc(29,"Selectable card (Clarity Addons)"),u.Pb(),u.Qb(30,"div",3),u.zc(31,m,6,5,"div",9),u.Pb(),u.Qb(32,"h3"),u.Bc(33,"Usage"),u.Pb(),u.Qb(34,"p"),u.Bc(35," On contrast to the default clickable-cards, the selectable card does not start an action, it is only marked as selected. Note that multiple selection is not supported. If you depend on multi-selection, use a different element such as a checkbox. A selectable card should have the class "),u.Qb(36,"code",10),u.Bc(37,"selectable"),u.Pb(),u.Bc(38," instead of the clarity-default "),u.Qb(39,"code",10),u.Bc(40,"clickable"),u.Pb(),u.Bc(41," class. Use the "),u.Qb(42,"code",10),u.Bc(43,"card-active"),u.Pb(),u.Bc(44," class to mark the currently selected one. "),u.Pb(),u.Pb(),u.Qb(45,"div",11),u.Lb(46,"clr-code-snippet",12),u.Pb(),u.Qb(47,"h2"),u.Bc(48,"Placeholder card"),u.Pb(),u.Bc(49," The placeholder card represents an empty card by a dashed border. The style is provided by class "),u.Qb(50,"code",10),u.Bc(51,"card-placeholder"),u.Pb(),u.Bc(52,". All buttons inside a placeholder card should be flat (btn-link). "),u.Qb(53,"div",3),u.Qb(54,"div",4),u.Qb(55,"div",13),u.Qb(56,"div",6),u.Bc(57," Placeholder card "),u.Pb(),u.Qb(58,"div",7),u.Bc(59," Card block "),u.Qb(60,"div"),u.Qb(61,"a",14),u.Bc(62,"Action"),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Lb(63,"clr-code-snippet",12),u.Qb(64,"h2"),u.Bc(65,"Card with custom actions"),u.Pb(),u.Bc(66," To use a card with custom actions, use the classes "),u.Qb(67,"code",10),u.Bc(68,"card-actions"),u.Pb(),u.Bc(69," on the dropdown itself and "),u.Qb(70,"code",10),u.Bc(71,"card-action"),u.Pb(),u.Bc(72," on the dropdown-toggle. "),u.Qb(73,"div",3),u.Qb(74,"div",4),u.Qb(75,"div",15),u.Qb(76,"div",6),u.Bc(77," Card header with custom actions "),u.Qb(78,"clr-dropdown",16),u.Qb(79,"button",17),u.Lb(80,"clr-icon",18),u.Pb(),u.zc(81,P,7,0,"clr-dropdown-menu",19),u.Pb(),u.Pb(),u.Qb(82,"div",7),u.Bc(83," Card Block "),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Lb(84,"clr-code-snippet",12),u.Pb(),u.Pb()),2&e&&(u.hc("title",t.title),u.zb(31),u.hc("ngForOf",t.cards),u.zb(15),u.hc("clrCode",t.htmlExample),u.zb(17),u.hc("clrCode",t.htmlExamplePlaceholder),u.zb(21),u.hc("clrCode",t.htmlExampleCustomActions))},directives:[f.a,d.p,v.a,b.u,b.x,b.B,b.D,d.q,b.w,b.v],encapsulation:2}),y),B=i("JsA7"),g=i("tyNb"),k=i("XPsC"),C=i("6Y1o"),I=((Q=function e(){c(this,e)}).\u0275fac=function(e){return new(e||Q)},Q.\u0275mod=u.Ib({type:Q}),Q.\u0275inj=u.Hb({imports:[[d.c,l.h,b.a,k.a,B.a,g.g.forChild([{path:"",component:w}]),C.b]]}),Q)}}])}();