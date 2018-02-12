/*! Built with http://stenciljs.com */
ionicpwaelements.loadBundle("xsc0fsyb",["exports"],function(e){var t=window.ionicpwaelements.h;function n(e){return void 0!==e&&null!==e}function o(e){return new Promise(function(t){e.onFinish(function(e){t(e)}),e.play()})}function i(e,t){return new Promise(function(n){e(function(){if(!t)return n();Promise.resolve(t()).then(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n(e)})})})}function r(e,t,n){return n.split(" ").reduce(function(n,o){return n[o]=!0,e&&(n[o+"-"+e]=!0,t&&(n[o+"-"+t]=!0,n[o+"-"+e+"-"+t]=!0)),n},{})}function a(e){var t={};return e&&e.split(" ").filter(function(e){return""!==e.trim()}).forEach(function(e){return t[e]=!0}),t}function s(e,t){var n=new e,o=new e;o.addElement(t.querySelector(".action-sheet-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.4),i.fromTo("translateY","100%","0%");var r=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(i);return Promise.resolve(r)}function l(e,t){var n=new e,o=new e;o.addElement(t.querySelector(".action-sheet-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.4,0),i.fromTo("translateY","0%","100%");var r=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(i);return Promise.resolve(r)}function c(e,t){var n=new e,o=new e;o.addElement(t.querySelector(".action-sheet-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.01,.26),i.fromTo("translateY","100%","0%");var r=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(o).add(i);return Promise.resolve(r)}function d(e,t){var n=new e,o=new e;o.addElement(t.querySelector(".action-sheet-backdrop"));var i=new e;i.addElement(t.querySelector(".action-sheet-wrapper")),o.fromTo("opacity",.26,0),i.fromTo("translateY","0%","100%");var r=n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).add(o).add(i);return Promise.resolve(r)}window.ionicpwaelements.Context;var u=function(){function e(){this.animation=null,this.enableBackdropDismiss=!0,this.translucent=!1,this.willAnimate=!0}return e.prototype.present=function(){var e=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionActionSheetWillPresent.emit(),this.el.style.zIndex=""+(2e4+this.actionSheetId);var t=this.enterAnimation||this.config.get("actionSheetEnter","ios"===this.mode?s:c);return this.animationCtrl.create(t,this.el).then(function(t){return e.animation=t,(!e.willAnimate||n(e.config.get("willAnimate"))&&!1===e.config.get("willAnimate"))&&(e.animation=t.duration(0)),o(t)}).then(function(t){t.destroy(),e.ionActionSheetDidPresent.emit()})},e.prototype.dismiss=function(e,t){var r=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionActionSheetWillDismiss.emit({data:e,role:t});var a=this.leaveAnimation||this.config.get("actionSheetLeave","ios"===this.mode?l:d);return this.animationCtrl.create(a,this.el).then(function(e){return r.animation=e,(!r.willAnimate||n(r.config.get("willAnimate"))&&!1===r.config.get("willAnimate"))&&(r.animation=e.duration(0)),o(e)}).then(function(n){n.destroy(),r.ionActionSheetDidDismiss.emit({data:e,role:t})}).then(function(){return i(r.dom.write,function(){r.el.parentNode.removeChild(r.el)})})},e.prototype.componentDidLoad=function(){this.ionActionSheetDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionActionSheetDidUnload.emit()},e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.backdropClick=function(){this.enableBackdropDismiss&&this.dismiss()},e.prototype.buttonClick=function(e){var t=!0;e.handler&&!1===e.handler()&&(t=!1),t&&this.dismiss()},e.prototype.hostData=function(){var e=this.translucent?r(this.mode,this.color,"action-sheet-translucent"):{};return{class:Object.assign({},e,a(this.cssClass))}},e.prototype.render=function(){var e=this,n=this.buttons.map(function(e){return"string"==typeof e&&(e={text:e}),e.cssClass||(e.cssClass=""),e}),o=n.find(function(e){return"cancel"===e.role}),i=n.filter(function(e){return"cancel"!==e.role});return[t("ion-backdrop",{onClick:this.backdropClick.bind(this),class:"action-sheet-backdrop"}),t("div",{class:"action-sheet-wrapper",role:"dialog"},t("div",{class:"action-sheet-container"},t("div",{class:"action-sheet-group"},this.title?t("div",{class:"action-sheet-title"},this.title,this.subTitle?t("div",{class:"action-sheet-sub-title"},this.subTitle):null):null,i.map(function(n){return t("button",{class:m(n),onClick:function(){return e.buttonClick(n)}},t("span",{class:"button-inner"},n.icon?t("ion-icon",{name:n.icon,class:"action-sheet-icon"}):null,n.text))})),o?t("div",{class:"action-sheet-group action-sheet-group-cancel"},t("button",{class:m(o),onClick:function(){return e.buttonClick(o)}},t("span",{class:"button-inner"},o.icon?t("ion-icon",{name:o.icon,class:"action-sheet-icon"}):null,o.text))):null))]},Object.defineProperty(e,"is",{get:function(){return"ion-action-sheet"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"action-sheet"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},buttons:{type:"Any",attr:"buttons"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},dom:{context:"dom"},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},leaveAnimation:{type:"Any",attr:"leave-animation"},present:{method:!0},subTitle:{type:String,attr:"sub-title"},title:{type:String,attr:"title"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionActionSheetDidLoad",method:"ionActionSheetDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidPresent",method:"ionActionSheetDidPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillPresent",method:"ionActionSheetWillPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetWillDismiss",method:"ionActionSheetWillDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidDismiss",method:"ionActionSheetDidDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionActionSheetDidUnload",method:"ionActionSheetDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-action-sheet{left:0;top:0;position:absolute;z-index:1000;display:block;width:100%;height:100%}.action-sheet-wrapper{left:0;right:0;top:0;bottom:0;margin:auto;transform:translate3d(0,100%,0);position:absolute;z-index:10;display:block;width:100%;max-width:500px;pointer-events:none}.action-sheet-button{width:100%;border:0}.action-sheet-button:active,.action-sheet-button:focus{outline:0}.action-sheet-container{display:flex;flex-flow:column;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group{overflow:scroll;flex-shrink:2;pointer-events:all}.action-sheet-group-cancel{overflow:hidden;flex-shrink:0}.action-sheet-ios{text-align:center;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Roboto,sans-serif}.action-sheet-ios .action-sheet-wrapper{margin:constant(safe-area-inset-top) auto constant(safe-area-inset-bottom);margin:env(safe-area-inset-top) auto env(safe-area-inset-bottom)}.action-sheet-ios .action-sheet-container{padding:0 10px}.action-sheet-ios .action-sheet-group{border-radius:13px;margin-bottom:8px;background:var(--ion-background-ios-color-step-100,var(--ion-background-color-step-100,#f7f7f7))}.action-sheet-ios .action-sheet-group:first-child{margin-top:10px}.action-sheet-ios .action-sheet-group:last-child{margin-bottom:10px}.action-sheet-translucent-ios .action-sheet-group{background:rgba(255,255,255,var(--ion-alpha-ios-high,var(--ion-alpha-high,.75)));backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px)}.action-sheet-ios .action-sheet-title{padding:15px;text-align:center;border-bottom:.55px solid var(--ion-background-ios-color-step-100,var(--ion-background-color-step-100,#f7f7f7));font-size:13px;font-weight:400;color:var(--ion-text-ios-color-step-400,var(--ion-text-color-step-400,#8f8f8f))}.action-sheet-ios .action-sheet-sub-title{padding:15px 0 0;font-size:12px}.action-sheet-ios .action-sheet-button{margin:0;padding:18px;min-height:56px;border-bottom:.55px solid var(--ion-background-ios-color-step-100,var(--ion-background-color-step-100,#f7f7f7));font-size:20px;color:var(--ion-color-ios-primary,var(--ion-color-primary,#488aff));background:0 0}.action-sheet-ios .action-sheet-button .action-sheet-icon{margin-top:-10px;padding-right:.1em;height:.7em;font-size:1.4em}.action-sheet-ios .action-sheet-button:last-child{border-bottom-color:transparent}.action-sheet-ios .action-sheet-button.activated{margin-top:-.55px;border-top:.55px solid rgba(0,0,0,var(--ion-alpha-ios-lowest,var(--ion-alpha-lowest,.06)));border-bottom-color:rgba(0,0,0,var(--ion-alpha-ios-lowest,var(--ion-alpha-lowest,.06)));background:rgba(0,0,0,var(--ion-alpha-ios-lowest,var(--ion-alpha-lowest,.06)))}.action-sheet-ios .action-sheet-selected{font-weight:700;background:var(--ion-background-ios-color,var(--ion-background-color,#fff))}.action-sheet-ios .action-sheet-destructive{color:var(--ion-color-ios-danger,var(--ion-color-danger,#f53d3d))}.action-sheet-ios .action-sheet-cancel{font-weight:600;background:var(--ion-background-ios-color,var(--ion-background-color,#fff))}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function m(e){var t=Object.assign({"action-sheet-button":!0},a(e.cssClass));return e.role&&(t["action-sheet-"+e.role]=!0),t}var p=0,h=new Map,f=function(){function e(){}return e.prototype.create=function(e){var t=document.createElement("ion-action-sheet");return t.actionSheetId=p++,Object.assign(t,e),(document.querySelector("ion-app")||document.body).appendChild(t),t.componentOnReady()},e.prototype.dismiss=function(e,t,n){void 0===n&&(n=-1),n=n>=0?n:b();var o=h.get(n);return o?o.dismiss(e,t):Promise.reject("action-sheet does not exist")},e.prototype.getTop=function(){return h.get(b())},e.prototype.actionSheetWillPresent=function(e){h.set(e.target.actionSheetId,e.target)},e.prototype.actionSheetWillDismiss=function(e){h.delete(e.target.actionSheetId)},e.prototype.escapeKeyUp=function(){var e;(e=h.get(b()))?e.dismiss():Promise.resolve()},Object.defineProperty(e,"is",{get:function(){return"ion-action-sheet-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();function b(){var e=-1;return h.forEach(function(t,n){n>e&&(e=n)}),e}var y=function(){function e(){this.ariaLabel="",this.ios="",this.md="",this.name="",this.svgContent=null}return Object.defineProperty(e.prototype,"iconName",{get:function(){var e=this.name.toLowerCase(),t=this.mode||"md";this.ios&&"ios"===t?e=this.ios.toLowerCase():this.md&&"md"===t?e=this.md.toLowerCase():e&&!/^md-|^ios-|^logo-/.test(e)&&(e=t+"-"+e);var n=e.replace(/[a-z]|-|\d/g,"");return""!==n?(console.error("invalid characters in ion-icon name: "+n),null):e},enumerable:!0,configurable:!0}),e.prototype.hostData=function(){var e={role:"img"};if(this.ariaLabel)e["aria-label"]=this.ariaLabel;else{var t=this.iconName;t&&(e["aria-label"]=t.replace("ios-","").replace("md-","").replace("-outline","").replace(/\-/g," "))}return e},e.prototype.render=function(){var e=this;if(this.isServer)return t("div",{class:"icon-inner"});var n=this.iconName;if(!n)return t("div",{class:"icon-inner"});var o=w[n];return o===this.svgContent?t("div",{class:"icon-inner",innerHTML:o}):(function(t,n,o){if((v[t]=v[t]||[]).push(function(t){e.svgContent=t}),!g[t]){g[t]=!0;var i=document.createElement("script");i.charset="utf-8",i.async=!0,i.src=n+"svg/"+t+".js";var r=setTimeout(a,12e4);i.onerror=i.onload=a,document.head.appendChild(i)}function a(){clearTimeout(r),i.onerror=i.onload=null,i.parentNode.removeChild(i),delete g[t]}}(n,this.publicPath),t("div",{class:"icon-inner"}))},Object.defineProperty(e,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"icon"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{ariaLabel:{type:String},ios:{type:String},isServer:{context:"isServer"},md:{type:String},mode:{context:"mode"},name:{type:String},publicPath:{context:"publicPath"},svgContent:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-icon{display:inline-block;font-size:inherit}ion-icon .icon-inner{height:1em;width:1em}ion-icon svg{fill:currentColor;stroke:currentColor}"},enumerable:!0,configurable:!0}),e}(),g={},v=[],w={};window.loadIonicon=function(e,t){delete g[t],w[t]=e;var n=v[t];n&&(n.forEach(function(t){t(e)}),delete v[t])};var S=function(){function e(){}return e.prototype.attachViewToDom=function(e,t,n,o){return void 0===n&&(n={}),void 0===o&&(o=[]),new Promise(function(i){var r="string"==typeof t?document.createElement(t):t;if(Object.assign(r,n),o.length)for(var a=0,s=o;a<s.length;a++){var l=s[a];r.classList.add(l)}e.appendChild(r),i({element:r,data:n,component:t})})},e.prototype.removeViewFromDom=function(e,t){return e.removeChild(t),Promise.resolve()},e.prototype.shouldDeferToRouter=function(e){return Promise.resolve(!1)},e.prototype.routeToUrl=function(e){return Promise.resolve("todo")},e}();function P(e,t){var n=new e,o=new e;o.addElement(t.querySelector(".modal-backdrop"));var i=new e;return i.addElement(t.querySelector(".modal-wrapper")),i.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),o.fromTo("opacity",.01,.4),Promise.resolve(n.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(o).add(i))}function D(e,t){var n=new e,o=new e;o.addElement(t.querySelector(".modal-backdrop"));var i=new e,r=t.querySelector(".modal-wrapper");i.addElement(r);var a=r.getBoundingClientRect();return i.beforeStyles({opacity:1}).fromTo("translateY","0%",window.innerHeight-a.top+"px"),o.fromTo("opacity",.4,0),Promise.resolve(n.addElement(t).easing("ease-out").duration(250).add(o).add(i))}function C(e,t){var n=new e,o=new e;o.addElement(t.querySelector(".modal-backdrop"));var i=new e;return i.addElement(t.querySelector(".modal-wrapper")),i.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),o.fromTo("opacity",.01,.4),Promise.resolve(n.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(o).add(i))}function A(e,t){var n=new e,o=new e;o.addElement(t.querySelector(".modal-backdrop"));var i=new e,r=t.querySelector(".modal-wrapper");return i.addElement(r),i.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),o.fromTo("opacity",.4,0),Promise.resolve(n.addElement(t).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(o).add(i))}var k=function(){function e(){this.data={},this.enableBackdropDismiss=!0,this.showBackdrop=!0,this.willAnimate=!0}return e.prototype.present=function(){var e=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionModalWillPresent.emit(),this.el.style.zIndex=""+(2e4+this.modalId);var t=this.enterAnimation||this.config.get("modalEnter","ios"===this.mode?P:C),n=this.el.querySelector("."+E);this.delegate||(this.delegate=new S);var i=[];return this.cssClass&&this.cssClass.length&&i.push(this.cssClass),this.data=this.data||{},this.data.modal=this.el,this.delegate.attachViewToDom(n,this.component,this.data,i).then(function(t){e.usersComponentElement=t.element}),this.animationCtrl.create(t,this.el).then(function(t){return e.animation=t,e.willAnimate||(e.animation=t.duration(0)),o(t)}).then(function(t){t.destroy(),e.ionModalDidPresent.emit()})},e.prototype.dismiss=function(e,t){var n=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionModalWillDismiss.emit({data:e,role:t}),this.delegate||(this.delegate=new S);var r=this.leaveAnimation||this.config.get("modalLeave","ios"===this.mode?D:A);return this.animationCtrl.create(r,this.el).then(function(e){return n.animation=e,n.willAnimate||(n.animation=e.duration(0)),o(e)}).then(function(o){o.destroy(),n.ionModalDidDismiss.emit({data:e,role:t})}).then(function(){return i(n.dom.write,function(){var e=n.el.querySelector("."+E);n.delegate.removeViewFromDom(e,n.usersComponentElement),n.el.parentNode.removeChild(n.el)})})},e.prototype.getUserComponentContainer=function(){return this.el.querySelector("."+E)},e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.componentDidLoad=function(){this.ionModalDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionModalDidUnload.emit()},e.prototype.backdropClick=function(){this.enableBackdropDismiss&&this.dismiss()},e.prototype.render=function(){var e=r(this.mode,this.color,"modal-backdrop"),n=r(this.mode,this.color,"modal-wrapper");return[t("div",{onClick:this.backdropClick.bind(this),class:Object.assign({},e,{"hide-backdrop":!this.showBackdrop})}),t("div",{role:"dialog",class:n})]},Object.defineProperty(e,"is",{get:function(){return"ion-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"modal"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},color:{type:String,attr:"color"},component:{type:"Any",attr:"component"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},data:{type:"Any",attr:"data"},delegate:{type:"Any",attr:"delegate",mutable:!0},dismiss:{method:!0},dom:{context:"dom"},el:{elementRef:!0},enableBackdropDismiss:{type:Boolean,attr:"enable-backdrop-dismiss"},enterAnimation:{type:"Any",attr:"enter-animation"},getUserComponentContainer:{method:!0},leaveAnimation:{type:"Any",attr:"leave-animation"},modalId:{type:Number,attr:"modal-id"},mode:{type:"Any",attr:"mode"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionModalDidLoad",method:"ionModalDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidPresent",method:"ionModalDidPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillPresent",method:"ionModalWillPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalWillDismiss",method:"ionModalWillDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidDismiss",method:"ionModalDidDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionModalDidUnload",method:"ionModalDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-modal{left:0;top:0;position:absolute;display:block;width:100%;height:100%;contain:strict}ion-modal-controller{display:none}.modal-backdrop{left:0;top:0;position:absolute;z-index:2;display:block;width:100%;height:100%;opacity:.01;transform:translateZ(0)}\@media not all and (min-width:768px) and (min-height:600px){.modal-backdrop{visibility:hidden}}.modal-backdrop.backdrop-no-tappable{cursor:auto}.modal-backdrop.hide-backdrop{visibility:hidden}.modal-wrapper{z-index:10;height:100%;contain:strict}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (500px/2));position:absolute;width:600px;height:500px}}\@media only screen and (min-width:768px) and (min-height:768px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (600px/2));position:absolute;width:600px;height:600px}}.modal-backdrop-ios{background-color:var(--ion-backdrop-ios-color,var(--ion-backdrop-color,#000))}.modal-wrapper-ios{transform:translate3d(0,100%,0)}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper-ios{border-radius:10px;overflow:hidden}}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),E="modal-wrapper",T=0,j=new Map,O=function(){function e(){}return e.prototype.create=function(e){var t=document.createElement("ion-modal");return t.modalId=T++,Object.assign(t,e),(document.querySelector("ion-app")||document.body).appendChild(t),t.componentOnReady()},e.prototype.dismiss=function(e,t,n){void 0===n&&(n=-1),n=n>=0?n:M();var o=j.get(n);return o?o.dismiss(e,t):Promise.reject("modal does not exist")},e.prototype.getTop=function(){return j.get(M())},e.prototype.modalWillPresent=function(e){j.set(e.target.modalId,e.target)},e.prototype.modalWillDismiss=function(e){j.delete(e.target.modalId)},e.prototype.escapeKeyUp=function(){var e;(e=j.get(M()))?e.dismiss():Promise.resolve()},Object.defineProperty(e,"is",{get:function(){return"ion-modal-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();function M(){var e=-1;return j.forEach(function(t,n){n>e&&(e=n)}),e}e.IonActionSheet=u,e.IonActionSheetController=f,e.IonIcon=y,e.IonModal=k,e.IonModalController=O,Object.defineProperty(e,"__esModule",{value:!0})});