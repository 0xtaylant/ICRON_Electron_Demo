"use strict";(self.webpackChunkICRON_WFM_WEB=self.webpackChunkICRON_WFM_WEB||[]).push([[118],{92118:(Q,U,_)=>{_.d(U,{n:()=>K});var C=_(11481),f=_(94650),g=(_(38755),_(99106)),v=_(84943);let K=(()=>{class I{}return I.\u0275fac=function(r){return new(r||I)},I.\u0275mod=f.oAB({type:I}),I.\u0275inj=f.cJS({imports:[[v.IOm,v.kOw,v.weU,v.D_l,v.JxK,v.zZW,v.ynY,v.lgR,v.sni,v.waX,v.pxS,v.Q8p,v.Fkd,v.oyT,v.lar,g.Lz,g.ie,C.Cu],v.IOm,v.kOw,v.weU,v.D_l,v.JxK,v.zZW,v.ynY,v.lgR,v.sni,v.waX,v.pxS,v.Q8p,v.Fkd,v.oyT,v.lar,g.ie]}),I})()},38755:(Q,U,_)=>{_.d(U,{Z:()=>f});const f=_(72979).Z},72979:(Q,U,_)=>{_.d(U,{Z:()=>te});var C=_(83520),f=_(68082),x=_(24705),g=_(41760),v=_(67771),$=_(56836),K=_(64596),I=_(43615),b=_(37075),r=_(91553),O=_(83684),N=_(34500),A=_(35922),H=_(71924),V=_(67923),M=_(16129),F=_(48795),L=_(37227),X=_(80316),Y=_(72010),z=_(61446),G="dx-menu",k=G+"-item",R=k+"-expanded",Z=G+"-items-container",e=k+"-wrapper",i="dx-submenu",S="dx-state-hover",s="down",p="first",P="last",B=["onShowing","onShown","onSubmenuCreated","onHiding","onHidden","onPositioning","onLeftFirstItem","onLeftLastItem","onCloseRootSubmenu","onExpandLastSubmenu"],W=["up",s,p,P],j="dxcontextmenu",q=(0,N.Jj)();class ee extends L.Z{getShowEvent(t){var a=null;return(0,K.Kn)(t)?null!==t.name&&(a=t.name||j):a=t,a}getShowDelay(t){return(0,K.Kn)(t)&&t.delay}_getDefaultOptions(){return(0,O.l)(super._getDefaultOptions(),{showEvent:j,hideOnOutsideClick:!0,position:{at:"top left",my:"top left"},onShowing:null,onShown:null,onSubmenuCreated:null,onHiding:null,onHidden:null,onPositioning:null,submenuDirection:"auto",visible:!1,target:void 0,onLeftFirstItem:null,onLeftLastItem:null,onCloseRootSubmenu:null,onExpandLastSubmenu:null})}_defaultOptionsRules(){return super._defaultOptionsRules().concat([{device:()=>!(0,N.Ym)(),options:{animation:null}}])}_setDeprecatedOptions(){super._setDeprecatedOptions(),(0,O.l)(this._deprecatedOptions,{closeOnOutsideClick:{since:"22.2",alias:"hideOnOutsideClick"}})}_initActions(){this._actions={},(0,r.S6)(B,(t,a)=>{this._actions[a]=this._createActionByOption(a)||$.ZT})}_setOptionsByReference(){super._setOptionsByReference(),(0,O.l)(this._optionsByReference,{animation:!0,selectedItem:!0})}_focusInHandler(){}_itemContainer(){return this._overlay?this._overlay.$content():(0,C.Z)()}_eventBindingTarget(){return this._itemContainer()}itemsContainer(){return this._overlay?this._overlay.$content():void 0}_supportedKeys(){return(0,O.l)(super._supportedKeys(),{space:()=>{var t=(0,C.Z)(this.option("focusedElement"));this.hide(),t.length&&this._isSelectionEnabled()&&this.selectItem(t[0])},escape:this.hide})}_getActiveItem(){var t=this._getAvailableItems(),a=t.filter(".".concat("dx-state-focused")),d=t.filter(".".concat(S));return d.closest(".".concat(Z)).find(".".concat(k)).index(a)>=0?a:d.length?d:super._getActiveItem()}_moveFocus(t){var D,a=this._getItemsByLocation(t),d=this._getActiveItem(!0),u=this.itemsContainer().find(".".concat(S)),T=!(!(0,C.Z)(this.option("focusedElement")).length&&!u.length);switch(t){case"up":D=T?this._prevItem(a):d,this._setFocusedElement(D),d.is(a.first())&&this._actions.onLeftFirstItem(d);break;case s:D=T?this._nextItem(a):d,this._setFocusedElement(D),d.is(a.last())&&this._actions.onLeftLastItem(d);break;case"right":D=this.option("rtlEnabled")?this._hideSubmenuHandler():this._expandSubmenuHandler(a,t),this._setFocusedElement(D);break;case"left":D=this.option("rtlEnabled")?this._expandSubmenuHandler(a,t):this._hideSubmenuHandler(),this._setFocusedElement(D);break;case p:D=a.first(),this._setFocusedElement(D);break;case P:D=a.last(),this._setFocusedElement(D);break;default:return super._moveFocus(t)}}_setFocusedElement(t){t&&0!==t.length&&this.option("focusedElement",(0,b.u)(t))}_getItemsByLocation(t){var d,a=this._getActiveItem(!0);return W.includes(t)&&(d=a.closest(".".concat(Z)).children().children()),this._getAvailableItems(d)}_getAriaTarget(){return this.$element()}_refreshActiveDescendant(){if((0,K.$K)(this._overlay)){var t=this._overlay.$content();super._refreshActiveDescendant(t)}}_hideSubmenuHandler(){var t=this._getActiveItem(!0),a=t.parents(".".concat(R)).first();return a.length?(this._hideSubmenusOnSameLevel(a),this._hideSubmenu(t.closest(".".concat(i))),a):(this._actions.onCloseRootSubmenu(t),t)}_expandSubmenuHandler(t,a){var d=this._getActiveItem(!0),u=this._getItemData(d),E=this._dataAdapter.getNodeByItem(u),T=this._hasSubmenu(E),D=d.children(".".concat(i));if(T&&!d.hasClass("dx-state-disabled"))return(!D.length||"hidden"===D.css("visibility"))&&this._showSubmenu(d),this._nextItem(this._getItemsByLocation(a));this._actions.onExpandLastSubmenu(d)}_clean(){this._overlay&&(this._overlay.$element().remove(),this._overlay=null),this._detachShowContextMenuEvents(this._getTarget()),super._clean()}_initMarkup(){this.$element().addClass("dx-has-context-menu"),super._initMarkup()}_render(){super._render(),this._renderVisibility(this.option("visible")),this._addWidgetClass()}_renderContentImpl(){this._detachShowContextMenuEvents(this._getTarget()),this._attachShowContextMenuEvents()}_attachKeyboardEvents(){!this._keyboardListenerId&&this._focusTarget().length&&super._attachKeyboardEvents()}_renderContextMenuOverlay(){if(!this._overlay){var t=this._getOverlayOptions();this._overlay=this._createComponent((0,C.Z)("<div>").appendTo(this._$element),F.Z,t);var a=this._overlay.$content();a.addClass("dx-context-menu"),this._addCustomCssClass(a),this._addPlatformDependentClass(a),this._attachContextMenuEvent()}}preventShowingDefaultContextMenuAboveOverlay(){var t=this._itemContainer(),a=(0,M.V4)(Y.u,this.NAME);x.Z.off(t,a,".".concat(i)),x.Z.on(t,a,".".concat(i),(d=>{d.stopPropagation(),d.preventDefault(),x.Z.off(t,a,".".concat(i))}).bind(this))}_itemContextMenuHandler(t){super._itemContextMenuHandler(t),t.stopPropagation()}_addPlatformDependentClass(t){V.Z.current().phone&&t.addClass("dx-menu-phone-overlay")}_detachShowContextMenuEvents(t){var a=this.getShowEvent(this.option("showEvent"));if(a){var d=(0,M.V4)(a,this.NAME);this._showContextMenuEventHandler?x.Z.off(f.Z.getDocument(),d,t,this._showContextMenuEventHandler):x.Z.off((0,C.Z)(t),d)}}_attachShowContextMenuEvents(){var t=this._getTarget(),a=this.getShowEvent(this.option("showEvent"));if(a){var d=(0,M.V4)(a,this.NAME),u=this._createAction(T=>{var D=this.getShowDelay(this.option("showEvent"));D?setTimeout(()=>this._show(T.event),D):this._show(T.event)},{validatingTargetName:"target"}),E=T=>u({event:T,target:(0,C.Z)(T.currentTarget)});u=this._createAction(u),(0,K.ZU)(t)||t.nodeType||(0,K.FJ)(t)?(this._showContextMenuEventHandler=void 0,x.Z.on(t,d,E)):(this._showContextMenuEventHandler=E,x.Z.on(f.Z.getDocument(),d,t,this._showContextMenuEventHandler))}}_hoverEndHandler(t){super._hoverEndHandler(t),t.stopPropagation()}_renderDimensions(){}_renderContainer(t,a){var d=a||this._itemContainer();(t=(0,C.Z)("<div>")).appendTo(d).addClass(i).css("visibility",a?"hidden":"visible"),t.parent().hasClass("dx-overlay-content")||this._addCustomCssClass(t);var u=super._renderContainer(t);return a?u:this.option("width")?u.css("minWidth",this.option("width")):this.option("height")?u.css("minHeight",this.option("height")):u}_renderSubmenuItems(t,a){this._renderItems(this._getChildNodes(t),a),this._actions.onSubmenuCreated({itemElement:(0,b.u)(a),itemData:t.internalFields.item,submenuElement:(0,b.u)(a.children(".".concat(i)))})}_getOverlayOptions(){var t=this.option("position");return{focusStateEnabled:this.option("focusStateEnabled"),animation:this.option("animation"),innerOverlay:!0,hideOnOutsideClick:d=>this._hideOnOutsideClickHandler(d),propagateOutsideClick:!0,hideOnParentScroll:!0,deferRendering:!1,position:{at:t.at,my:t.my,of:this._getTarget(),collision:"flipfit"},shading:!1,showTitle:!1,height:"auto",width:"auto",onShown:this._overlayShownActionHandler.bind(this),onHiding:this._overlayHidingActionHandler.bind(this),onHidden:this._overlayHiddenActionHandler.bind(this),visualContainer:q}}_overlayShownActionHandler(t){this._actions.onShown(t)}_overlayHidingActionHandler(t){this._actions.onHiding(t),t.cancel||(this._hideAllShownSubmenus(),this._setOptionWithoutOptionChange("visible",!1))}_overlayHiddenActionHandler(t){this._actions.onHidden(t)}_shouldHideOnOutsideClick(t){var{closeOnOutsideClick:a,hideOnOutsideClick:d}=this.option();return(0,K.mf)(d)?d(t):(0,K.mf)(a)?a(t):d||a}_hideOnOutsideClickHandler(t){if(!this._shouldHideOnOutsideClick(t))return!1;if(f.Z.isDocument(t.target))return!0;var a=this._getActiveItemsContainer(t.target),d=this._getItemsContainers(),u=this._searchActiveItem(t.target),E=this.$element().parents(".".concat(k)),T=u[0]===E[0]&&u.length&&E.length;return!(this._isIncludeOverlay(a,d)&&u.length)&&!T||("onClick"===this._getShowSubmenuMode()&&this._hideAllShownChildSubmenus(u),!1)}_getActiveItemsContainer(t){return(0,C.Z)(t).closest(".".concat(Z))}_getItemsContainers(){return this._overlay.$content().find(".".concat(Z))}_searchActiveItem(t){return(0,C.Z)(t).closest(".".concat(k)).eq(0)}_isIncludeOverlay(t,a){var d=!1;return(0,r.S6)(a,(u,E)=>{t.is(E)&&!d&&(d=!0)}),d}_hideAllShownChildSubmenus(t){var a=t.find(".".concat(i)),d=(0,O.l)([],this._shownSubmenus);a.length>0&&(0,r.S6)(d,(u,E)=>{var T=this._searchActiveItem(E.context).parent();T.parent().is(t.parent().parent())&&!T.is(t.parent())&&this._hideSubmenu(E)})}_showSubmenu(t){var a=this._dataAdapter.getNodeByItem(this._getItemData(t));if(this._hideSubmenusOnSameLevel(t),this._hasSubmenu(a)){var d=t.children(".".concat(i)),u=d.length;super._showSubmenu(t),u||this._renderSubmenuItems(a,t),this._isSubmenuVisible(d)||this._drawSubmenu(t)}}_hideSubmenusOnSameLevel(t){var a=t.parent(".".concat(e)).siblings().find(".".concat(R));a.length&&(a.removeClass(R),this._hideSubmenu(a.find(".".concat(i))))}_hideSubmenuGroup(t){this._isSubmenuVisible(t)&&this._hideSubmenuCore(t)}_isSubmenuVisible(t){return"visible"===t.css("visibility")}_drawSubmenu(t){var a=this.option("animation")?this.option("animation").show:{},d=t.children(".".concat(i)),u=this._getSubmenuPosition(t);this._overlay&&this._overlay.option("visible")&&((0,K.$K)(this._shownSubmenus)||(this._shownSubmenus=[]),this._shownSubmenus.includes(d)||this._shownSubmenus.push(d),a&&A.Z.stop(d),H.Z.setup(d,u),a&&((0,K.PO)(a.to)&&(a.to.position=u),this._animate(d,a)),d.css("visibility","visible"))}_animate(t,a){A.Z.animate(t,a)}_getSubmenuPosition(t){var a=this.option("submenuDirection").toLowerCase(),u={collision:"flip",of:t.parent(".".concat(e)),offset:{h:0,v:-1}};switch(a){case"left":u.at="left top",u.my="right top";break;case"right":u.at="right top",u.my="left top";break;default:this.option("rtlEnabled")?(u.at="left top",u.my="right top"):(u.at="right top",u.my="left top")}return u}_updateSubmenuVisibilityOnClick(t){if(t.args.length){var a=t.args[0].itemData,d=this._dataAdapter.getNodeByItem(a);if(d){var u=(0,C.Z)(t.args[0].itemElement),E=u.find(".".concat(i));if(this._hasSubmenu(d)&&!E.length&&(this._renderSubmenuItems(d,u),E=u.find(".".concat(i))),(u.context!==E.context||"visible"!==E.css("visibility"))&&(this._updateSelectedItemOnClick(t),a&&!a.disabled&&(!a||!1!==a.closeMenuOnClick)))if(0===E.length){var ie=(0,C.Z)(u.parents(".".concat(i))[0]);this._hideSubmenu(ie),!t.canceled&&this._overlay&&this._overlay.option("visible")&&this.option("visible",!1)}else this._shownSubmenus&&this._shownSubmenus.length>0&&this._shownSubmenus[0].is(E)&&this._hideSubmenu(E),this._showSubmenu(u)}}}_hideSubmenu(t){var a=(0,O.l)([],this._shownSubmenus);(0,r.S6)(a,(d,u)=>{(t.is(u)||(0,I.r3)(t[0],u[0]))&&(u.parent().removeClass(R),this._hideSubmenuCore(u))})}_hideSubmenuCore(t){var a=this._shownSubmenus.indexOf(t),d=this.option("animation")?this.option("animation").hide:null;a>=0&&this._shownSubmenus.splice(a,1),this._stopAnimate(t),d&&this._animate(t,d),t.css("visibility","hidden")}_stopAnimate(t){A.Z.stop(t,!0)}_hideAllShownSubmenus(){var t=(0,O.l)([],this._shownSubmenus);this._overlay.$content().find(".".concat(R)).removeClass(R),(0,r.S6)(t,(d,u)=>{this._hideSubmenu(u)})}_visibilityChanged(t){t&&this._renderContentImpl()}_optionChanged(t){if(B.includes(t.name))this._initActions();else switch(t.name){case"visible":this._renderVisibility(t.value);break;case"showEvent":case"position":case"submenuDirection":this._invalidate();break;case"target":t.previousValue&&this._detachShowContextMenuEvents(t.previousValue),this._invalidate();break;case"closeOnOutsideClick":case"hideOnOutsideClick":break;default:super._optionChanged(t)}}_renderVisibility(t){return t?this._show():this._hide()}_toggleVisibility(){}_show(t){var a={jQEvent:t},d=(new X.BH).reject().promise();if(this._actions.onShowing(a),a.cancel)return d;var E,u=this._positionContextMenu(t);return u&&(this._overlay||(this._renderContextMenuOverlay(),this._overlay.$content().addClass(this._widgetClass()),this._renderFocusState(),this._attachHoverEvents(),this._attachClickEvent(),this._renderItems(this._dataAdapter.getRootNodes())),this._setOptionWithoutOptionChange("visible",!0),this._overlay.option("position",u),d=this._overlay.show(),t&&t.stopPropagation(),this._setAriaAttributes(),(null==t||null===(E=t.originalEvent)||void 0===E?void 0:E.type)===z.Z.name&&this.preventShowingDefaultContextMenuAboveOverlay()),d}_setAriaAttributes(){this._overlayContentId="dx-".concat(new g.Z),this.setAria("owns",this._overlayContentId),this.setAria({id:this._overlayContentId,role:"menu"},this._overlay.$content())}_cleanAriaAttributes(){this._overlay&&this.setAria("id",null,this._overlay.$content()),this.setAria("owns",void 0)}_getTarget(){return this.option("target")||this.option("position").of||(0,C.Z)(f.Z.getDocument())}_getContextMenuPosition(){return(0,O.l)({},this.option("position"),{of:this._getTarget()})}_positionContextMenu(t){var a=this._getContextMenuPosition(),d=this._isInitialOptionValue("position"),u=this._createActionByOption("onPositioning",E);t&&t.preventDefault&&d&&(a.of=t);var E={position:a,event:t};return u(E),E.cancel?a=null:E.event&&(E.event.cancel=!0,t.preventDefault()),a}_refresh(){if((0,N.Ym)())if(this._overlay){var t=this._overlay.option("position");super._refresh(),this._overlay&&this._overlay.option("position",t)}else super._refresh();else super._refresh()}_hide(){var t;return this._overlay&&(t=this._overlay.hide(),this._setOptionWithoutOptionChange("visible",!1)),this._cleanAriaAttributes(),this.option("focusedElement",null),t||(new X.BH).reject().promise()}toggle(t){var a=this.option("visible");return this._renderVisibility(t=void 0===t?!a:t)}show(){return this.toggle(!0)}hide(){return this.toggle(!1)}}(0,v.Z)("dxContextMenu",ee);const te=ee},37227:(Q,U,_)=>{_.d(U,{Z:()=>S});var C=_(83520),f=_(56836),x=_(64596),g=_(91553),v=_(83684),$=_(22528),K=_(99664),I=_(86523);const r=class b extends I.Z{_getPlainItems(){return(0,g.UI)(this._collectionWidget.option("items"),function y(s){return s.items?[s].concat((0,g.UI)(s.items,y)):s})}_stringifyItem(y){return JSON.stringify(y,(s,o)=>"template"===s?this._getTemplateString(o):o)}_getTemplateString(y){return"object"==typeof y?(0,C.Z)(y).text():y.toString()}};var O=_(67923),N=_(69388),M="dx-menu-item",L=M+"-selected",X=M+"-wrapper",h={show:50,hide:300};const S=(()=>{class w extends K.Z{_getDefaultOptions(){return(0,v.l)(super._getDefaultOptions(),{items:[],cssClass:"",activeStateEnabled:!0,showSubmenuMode:{name:"onHover",delay:{show:50,hide:300}},animation:{show:{type:"fade",from:0,to:1,duration:100},hide:{type:"fade",from:1,to:0,duration:100}},selectByClick:!1,focusOnSelectedItem:!1,keyExpr:null,_itemAttributes:{role:"menuitem"},useInkRipple:!1})}_itemDataKey(){return"dxMenuItemDataKey"}_itemClass(){return M}_setAriaSelected(){}_selectedItemClass(){return L}_widgetClass(){return"dx-menu-base"}_focusTarget(){return this._itemContainer()}_clean(){this.option("focusedElement",null),super._clean()}_supportedKeys(){return(0,v.l)(super._supportedKeys(),{space:()=>{var s=(0,C.Z)(this.option("focusedElement"));!s.length||!this._isSelectionEnabled()||this.selectItem(s[0])},pageUp:f.ZT,pageDown:f.ZT})}_isSelectionEnabled(){return"single"===this.option("selectionMode")}_init(){this._activeStateUnit=".".concat(M),super._init(),this._renderSelectedItem(),this._initActions()}_getTextContainer(s){var o=s.text,m=(0,C.Z)("<span>").addClass("dx-menu-item-text"),p=(0,x.PO)(s)?o:String(s);return o&&m.text(p)}_getPopoutContainer(s){var m,o=s.items;if(o&&o.length){var p=(0,C.Z)("<div>").addClass("dx-menu-item-popout");m=(0,C.Z)("<span>").addClass("dx-menu-item-popout-container").append(p)}return m}_getDataAdapterOptions(){return{rootValue:0,multipleSelection:!1,recursiveSelection:!1,recursiveExpansion:!1,searchValue:""}}_selectByItem(s){if(s){var o=this._dataAdapter.getNodeByItem(s);this._dataAdapter.toggleSelection(o.internalFields.key,!0)}}_renderSelectedItem(){var s=this._dataAdapter.getSelectedNodesKeys(),o=s.length&&s[0],m=this.option("selectedItem");if(o){var p=this._dataAdapter.getNodeByKey(o);if(!1!==p.selectable){if(!m)return void this.option("selectedItem",p.internalFields.item);m!==p.internalFields.item&&(this._dataAdapter.toggleSelection(o,!1),this._selectByItem(m))}}else this._selectByItem(m)}_initActions(){}_initMarkup(){super._initMarkup(),this.option("useInkRipple")&&this._renderInkRipple()}_renderInkRipple(){this._inkRipple=(0,$.sY)()}_toggleActiveState(s,o,m){if(super._toggleActiveState.apply(this,arguments),this._inkRipple){var p={element:s,event:m};o?this._inkRipple.showWave(p):this._inkRipple.hideWave(p)}}_getShowSubmenuMode(){var s=this.option("showSubmenuMode");return s=(0,x.Kn)(s)?s.name:s,this._isDesktopDevice()?s:"onClick"}_initSelectedItems(){}_isDesktopDevice(){return"desktop"===O.Z.real().deviceType}_initEditStrategy(){this._editStrategy=new r(this)}_addCustomCssClass(s){s.addClass(this.option("cssClass"))}_itemWrapperSelector(){return".".concat(X)}_hoverStartHandler(s){var o=this._getItemElementByEventArgs(s);!o||this._isItemDisabled(o)||(s.stopPropagation(),"onHover"===this._getShowSubmenuMode()&&(clearTimeout(this._showSubmenusTimeout),this._showSubmenusTimeout=setTimeout(this._showSubmenu.bind(this,o),this._getSubmenuDelay("show"))))}_getAvailableItems(s){return super._getAvailableItems(s).filter(function(){return"hidden"!==(0,C.Z)(this).css("visibility")})}_isItemDisabled(s){return this._disabledGetter(s.data(this._itemDataKey()))}_showSubmenu(s){this._addExpandedClass(s)}_addExpandedClass(s){(0,C.Z)(s).addClass("dx-menu-item-expanded")}_getSubmenuDelay(s){var{delay:o}=this.option("showSubmenuMode");return(0,x.$K)(o)?(0,x.Kn)(o)?o[s]:o:h[s]}_getItemElementByEventArgs(s){var o=(0,C.Z)(s.target);if(o.hasClass(this._itemClass())||o.get(0)===s.currentTarget)return o;for(;!o.hasClass(this._itemClass());)if((o=o.parent()).hasClass("dx-submenu"))return null;return o}_hoverEndHandler(){clearTimeout(this._showSubmenusTimeout)}_hasSubmenu(s){return s&&s.internalFields.childrenKeys.length}_renderContentImpl(){this._renderItems(this._dataAdapter.getRootNodes())}_renderItems(s,o){if(s.length){this.hasIcons=!1;var m=this._renderContainer(this.$element(),o),p=-1,P=-1;(0,g.S6)(s,(B,W)=>{var j=!1!==W.visible;j&&p<0&&(p=B),p<B&&(W.beginGroup||B===P)&&(P=j?B:B+1),B===P&&p<B&&this._renderSeparator(m),this._renderItem(B,W,m)}),this.hasIcons||m.addClass("dx-menu-no-icons")}}_renderContainer(s){var o=(0,C.Z)("<ul>");return this.setAria("role","none",o),o.appendTo(s).addClass("dx-menu-items-container")}_createDOMElement(s){var o=(0,C.Z)("<li>");return this.setAria("role","none",o),o.appendTo(s).addClass(X)}_renderItem(s,o,m,p){var P=this.option("items"),B=p||this._createDOMElement(m);P[s+1]&&P[s+1].beginGroup&&B.addClass("dx-menu-last-group-item");var W=super._renderItem(s,o.internalFields.item,B);o.internalFields.item===this.option("selectedItem")&&W.addClass(L),W.attr("tabIndex",-1),this._hasSubmenu(o)&&this.setAria("haspopup","true",W)}_renderItemFrame(s,o,m){var p=m.children(".".concat(M));return p.length?p:super._renderItemFrame.apply(this,arguments)}_refreshItem(s,o){var m=this._dataAdapter.getNodeByItem(o),p=s.data(this._itemIndexKey()),P=s.closest("ul"),B=s.closest("li");this._renderItem(p,m,P,B)}_addContentClasses(s,o){var p=!!s.icon,P=!!s.items&&!!s.items.length;o.toggleClass("dx-menu-item-has-text",!!s.text&&!!s.text.length),o.toggleClass("dx-menu-item-has-icon",p),this.hasIcons||(this.hasIcons=p),o.toggleClass("dx-menu-item-has-submenu",P)}_getItemContent(s){var o=super._getItemContent(s);return o.length||(o=s.children(".".concat("dx-menu-item-content"))),o}_postprocessRenderItem(s){var o=(0,C.Z)(s.itemElement),m=this._dataAdapter.getSelectedNodesKeys();m.length&&this._selectedGetter(s.itemData)&&this._isItemSelectable(s.itemData)&&this._dataAdapter.getNodeByItem(s.itemData).internalFields.key===m[0]?(o.addClass(this._selectedItemClass()),this._setAriaSelected(o,"true")):this._setAriaSelected(o,"false")}_isItemSelectable(s){return!1!==s.selectable}_renderSeparator(s){(0,C.Z)("<li>").appendTo(s).addClass("dx-menu-separator")}_itemClickHandler(s){if(!s._skipHandling){var o=this._createAction(this._updateSubmenuVisibilityOnClick.bind(this));this._itemDXEventHandler(s,"onItemClick",{},{afterExecute:o.bind(this)}),s._skipHandling=!0}}_updateSubmenuVisibilityOnClick(s){this._updateSelectedItemOnClick(s),"onClick"===this._getShowSubmenuMode()&&this._addExpandedClass(s.args[0].itemElement)}_updateSelectedItemOnClick(s){var o=s.args?s.args[0]:s;if(this._isItemSelectionAllowed(o.itemData)){var m=this._dataAdapter.getSelectedNodesKeys(),p=m.length&&this._dataAdapter.getNodeByKey(m[0]);p&&this._toggleItemSelection(p,!1),p&&p.internalFields.item===o.itemData?(this._fireSelectionChangeEvent(null,this.option("selectedItem")),this._setOptionWithoutOptionChange("selectedItem",null)):this.selectItem(o.itemData)}}_isItemSelectionAllowed(s){var o=this._isSelectionEnabled()&&this.option("selectByClick");return!this._isContainerEmpty()&&o&&this._isItemSelectable(s)&&!this._itemsGetter(s)}_isContainerEmpty(){return this._itemContainer().is(":empty")}_syncSelectionOptions(){return(0,f.C$)()}_optionChanged(s){switch(s.name){case"showSubmenuMode":break;case"selectedItem":var o=this._dataAdapter.getNodeByItem(s.value),m=this._dataAdapter.getSelectedNodesKeys()[0];if(o&&o.internalFields.key!==m){if(!1===o.selectable)break;m&&this._toggleItemSelection(this._dataAdapter.getNodeByKey(m),!1),this._toggleItemSelection(o,!0),this._updateSelectedItems()}break;case"cssClass":case"position":case"selectByClick":case"animation":case"useInkRipple":this._invalidate();break;default:super._optionChanged(s)}}_toggleItemSelection(s,o){var m=this._getElementByItem(s.internalFields.item);m&&(0,C.Z)(m).toggleClass(L),this._dataAdapter.toggleSelection(s.internalFields.key,o)}_getElementByItem(s){var o;return(0,g.S6)(this._itemElements(),(m,p)=>(0,C.Z)(p).data(this._itemDataKey())!==s||(o=p,!1)),o}_updateSelectedItems(s,o){(s||o)&&this._fireSelectionChangeEvent(o,s)}_fireSelectionChangeEvent(s,o){this._createActionByOption("onSelectionChanged",{excludeValidators:["disabled","readOnly"]})({addedItems:[s],removedItems:[o]})}selectItem(s){var o=s.nodeType?this._getItemData(s):s,m=this._dataAdapter.getSelectedNodesKeys()[0],p=this.option("selectedItem"),P=this._dataAdapter.getNodeByItem(o);P.internalFields.key!==m&&(m&&this._toggleItemSelection(this._dataAdapter.getNodeByKey(m),!1),this._toggleItemSelection(P,!0),this._updateSelectedItems(p,o),this._setOptionWithoutOptionChange("selectedItem",o))}unselectItem(s){var o=s.nodeType?this._getItemData(s):s,m=this._dataAdapter.getNodeByItem(o),p=this.option("selectedItem");m.internalFields.selected&&(this._toggleItemSelection(m,!1),this._updateSelectedItems(p,null),this._setOptionWithoutOptionChange("selectedItem",null))}}return w.ItemClass=N.Z,w})()},99664:(Q,U,_)=>{_.d(U,{Z:()=>Z});var C=_(83520),f=_(31996),x=_(83684),g=_(91553),v=_(67923),$=_(84667),K=_(24245),I=_(56836),b=_(64596),r=_(6795),O=_(35477),N=_(6536),A=_(82510),H=_(2030);const M=K.Z.inherit({ctor:function(){this._dataStructure=[],this._itemsCount=0,this._visibleItemsCount=0},_indexByKey:{},_convertItemsToNodes:function(e,i){var n=this;(0,g.S6)(e,function(l,h){var c=(0,b.$K)(i)?i:n._getParentId(h),S=n._convertItemToNode(h,c);n._dataStructure.push(S),n._checkForDuplicateId(S.internalFields.key),n._indexByKey[S.internalFields.key]=n._dataStructure.length-1,n._itemHasChildren(h)&&n._convertItemsToNodes(n._dataAccessors.getters.items(h),S.internalFields.key)})},_checkForDuplicateId:function(e){if((0,b.$K)(this._indexByKey[e]))throw r.Z.Error("E1040",e)},_getParentId:function(e){return"plain"===this._dataType?this._dataAccessors.getters.parentKey(e):void 0},_itemHasChildren:function(e){if("plain"!==this._dataType){var i=this._dataAccessors.getters.items(e);return i&&i.length}},_getUniqueKey:function(e){var i=this._dataAccessors.getters.key,n=i(e);return i&&(n||0===n)&&(0,b.pt)(n)?n:this.getItemsCount()},_convertItemToNode:function(e,i){this._itemsCount++,!1!==e.visible&&this._visibleItemsCount++;var n={internalFields:{disabled:this._dataAccessors.getters.disabled(e,{defaultValue:!1}),expanded:this._dataAccessors.getters.expanded(e,{defaultValue:!1}),selected:this._dataAccessors.getters.selected(e,{defaultValue:!1}),key:this._getUniqueKey(e),parentKey:(0,b.$K)(i)?i:this._rootValue,item:this._makeObjectFromPrimitive(e),childrenKeys:[]}};return(0,x.l)(n,e),delete n.items,n},setChildrenKeys:function(){var e=this;(0,g.S6)(this._dataStructure,function(i,n){if(n.internalFields.parentKey!==e._rootValue){var l=e.getParentNode(n);l&&l.internalFields.childrenKeys.push(n.internalFields.key)}})},_makeObjectFromPrimitive:function(e){if((0,b.pt)(e)){var i=e;this._dataAccessors.setters.key(e={},i)}return e},_convertToPublicNode:function(e,i){if(!e)return null;var n={text:this._dataAccessors.getters.display(e),key:e.internalFields.key,selected:e.internalFields.selected,expanded:e.internalFields.expanded,disabled:e.internalFields.disabled,parent:i||null,itemData:e.internalFields.item,children:[],items:[]};return n.parent&&(n.parent.children.push(n),n.parent.items.push(n)),n},convertToPublicNodes:function(e,i){if(!e.length)return[];var n=this,l=[];return(0,g.S6)(e,function(h,c){c=(0,b.pt)(c)?n._getByKey(c):c;var S=n._convertToPublicNode(c,i);S.children=n.convertToPublicNodes(c.internalFields.childrenKeys,S),l.push(S),c.internalFields.publicNode=S}),l},setDataAccessors:function(e){this._dataAccessors=e},_getByKey:function(e){return this._dataStructure[this.getIndexByKey(e)]||null},getParentNode:function(e){return this._getByKey(e.internalFields.parentKey)},getByKey:function(e,i){if(null==i)return null;var S,n=null,l=this;return S=i,(0,g.S6)(e,function(w,y){if((y.internalFields&&y.internalFields.key||l._dataAccessors.getters.key(y)).toString()===S.toString())return n=y,!1}),n},getItemsCount:function(){return this._itemsCount},getVisibleItemsCount:function(){return this._visibleItemsCount},updateIndexByKey:function(){var e=this;this._indexByKey={},(0,g.S6)(this._dataStructure,function(i,n){e._checkForDuplicateId(n.internalFields.key),e._indexByKey[n.internalFields.key]=i})},updateChildrenKeys:function(){this._indexByKey={},this.removeChildrenKeys(),this.updateIndexByKey(),this.setChildrenKeys()},removeChildrenKeys:function(){this._indexByKey={},(0,g.S6)(this._dataStructure,function(e,i){i.internalFields.childrenKeys=[]})},getIndexByKey:function(e){return this._indexByKey[e]},createPlainStructure:function(e,i,n){return this._itemsCount=0,this._visibleItemsCount=0,this._rootValue=i,this._dataType=n,this._indexByKey={},this._convertItemsToNodes(e),this.setChildrenKeys(),this._dataStructure}});var F="expanded",L="selected";O.Z.setEditorClass(N.Z);const z=K.Z.inherit({ctor:function(e){this.options={},(0,x.l)(this.options,this._defaultOptions(),e),this.options.dataConverter.setDataAccessors(this.options.dataAccessors),this._selectedNodesKeys=[],this._expandedNodesKeys=[],this._dataStructure=[],this._createInternalDataStructure(),this.getTreeNodes()},setOption:function(e,i){this.options[e]=i,"recursiveSelection"===e&&this._updateSelection()},_defaultOptions:function(){return{dataAccessors:void 0,items:[],multipleSelection:!0,recursiveSelection:!1,recursiveExpansion:!1,rootValue:0,searchValue:"",dataType:"tree",searchMode:"contains",dataConverter:new M,onNodeChanged:I.ZT,sort:null}},_createInternalDataStructure:function(){this._initialDataStructure=this.options.dataConverter.createPlainStructure(this.options.items,this.options.rootValue,this.options.dataType),this._dataStructure=this.options.searchValue.length?this.search(this.options.searchValue):this._initialDataStructure,this.options.dataConverter._dataStructure=this._dataStructure,this._updateSelection(),this._updateExpansion()},_updateSelection:function(){this.options.recursiveSelection&&(this._setChildrenSelection(),this._setParentSelection()),this._selectedNodesKeys=this._updateNodesKeysArray(L)},_updateExpansion:function(e){this.options.recursiveExpansion&&(e?this._updateOneBranch(e):this._setParentExpansion()),this._expandedNodesKeys=this._updateNodesKeysArray(F)},_updateNodesKeysArray:function(e){var i=this,n=[];return(0,g.S6)(i._getDataBySelectionMode(),function(l,h){!i._isNodeVisible(h)||h.internalFields[e]&&(e===F||i.options.multipleSelection?n.push(h.internalFields.key):(n.length&&i.toggleSelection(n[0],!1,!0),n=[h.internalFields.key]))}),n},_getDataBySelectionMode:function(){return this.options.multipleSelection?this.getData():this.getFullData()},_isNodeVisible:function(e){return!1!==e.internalFields.item.visible},_getByKey:function(e,i){return e===this._dataStructure?this.options.dataConverter._getByKey(i):this.options.dataConverter.getByKey(e,i)},_setChildrenSelection:function(){var e=this;(0,g.S6)(this._dataStructure,function(i,n){if(n.internalFields.childrenKeys.length){var l=n.internalFields.selected;!0===l&&e._toggleChildrenSelection(n,l)}})},_setParentSelection:function(){var e=this;(0,g.S6)(this._dataStructure,function(i,n){e.options.dataConverter.getParentNode(n)&&n.internalFields.parentKey!==e.options.rootValue&&e._iterateParents(n,function(h){var c=e._calculateSelectedState(h);e._setFieldState(h,L,c)})})},_setParentExpansion:function(){var e=this;(0,g.S6)(this._dataStructure,function(i,n){!n.internalFields.expanded||e._updateOneBranch(n.internalFields.key)})},_updateOneBranch:function(e){var i=this,n=this.getNodeByKey(e);i._iterateParents(n,function(l){i._setFieldState(l,F,!0)})},_iterateChildren:function(e,i,n,l){if((0,b.mf)(n)){var h=this,c=e.internalFields.key;-1===(l=l||[]).indexOf(c)&&(l.push(c),(0,g.S6)(e.internalFields.childrenKeys,function(S,w){var y=h.getNodeByKey(w);n(y),y.internalFields.childrenKeys.length&&i&&h._iterateChildren(y,i,n,l)}))}},_iterateParents:function(e,i,n){if(e.internalFields.parentKey!==this.options.rootValue&&(0,b.mf)(i)){var l=e.internalFields.key;if(-1===(n=n||[]).indexOf(l)){n.push(l);var h=this.options.dataConverter.getParentNode(e);h&&(i(h),h.internalFields.parentKey!==this.options.rootValue&&this._iterateParents(h,i,n))}}},_calculateSelectedState:function(e){for(var i=e.internalFields.childrenKeys.length,n=0,l=0,h=!1,c=0;c<=i-1;c++){var S=this.getNodeByKey(e.internalFields.childrenKeys[c]),y=S.internalFields.selected;!1===S.internalFields.item.visible?l++:y?n++:void 0===y&&(n+=.5)}return n&&(h=n===i-l||void 0),h},_toggleChildrenSelection:function(e,i){var n=this;this._iterateChildren(e,!0,function(l){n._isNodeVisible(l)&&n._setFieldState(l,L,i)})},_setFieldState:function(e,i,n){e.internalFields[i]!==n&&(e.internalFields[i]=n,e.internalFields.publicNode&&(e.internalFields.publicNode[i]=n),this.options.dataAccessors.setters[i](e.internalFields.item,n),this.options.onNodeChanged(e))},_markChildren:function(e){var i=this;(0,g.S6)(e,function(n,l){var h=i.getIndexByKey(l),c=i.getNodeByKey(l);i._dataStructure[h]=0,c.internalFields.childrenKeys.length&&i._markChildren(c.internalFields.childrenKeys)})},_removeNode:function(e){var i=this.getNodeByKey(e);this._dataStructure[this.getIndexByKey(e)]=0,this._markChildren(i.internalFields.childrenKeys);var n=this,l=0,h=(0,x.l)([],this._dataStructure);(0,g.S6)(h,function(c,S){S||(n._dataStructure.splice(c-l,1),l++)})},_addNode:function(e){var i=this.options.dataConverter,n=i._convertItemToNode(e,this.options.dataAccessors.getters.parentKey(e));this._dataStructure=this._dataStructure.concat(n),this._initialDataStructure=this._initialDataStructure.concat(n),i._dataStructure=i._dataStructure.concat(n)},_updateFields:function(){this.options.dataConverter.updateChildrenKeys(),this._updateSelection(),this._updateExpansion()},getSelectedNodesKeys:function(){return this._selectedNodesKeys},getExpandedNodesKeys:function(){return this._expandedNodesKeys},getData:function(){return this._dataStructure},getFullData:function(){return this._initialDataStructure},getNodeByItem:function(e){var i=null;return(0,g.S6)(this._dataStructure,function(n,l){if(l.internalFields.item===e)return i=l,!1}),i},getNodesByItems:function(e){var i=this,n=[];return(0,g.S6)(e,function(l,h){var c=i.getNodeByItem(h);c&&n.push(c)}),n},getNodeByKey:function(e,i){return this._getByKey(i||this._getDataBySelectionMode(),e)},getTreeNodes:function(){return this.options.dataConverter.convertToPublicNodes(this.getRootNodes())},getItemsCount:function(){return this.options.dataConverter.getItemsCount()},getVisibleItemsCount:function(){return this.options.dataConverter.getVisibleItemsCount()},getPublicNode:function(e){return e.internalFields.publicNode},getRootNodes:function(){return this.getChildrenNodes(this.options.rootValue)},getChildrenNodes:function(e){return(0,A.Z)(this._dataStructure).filter(["internalFields.parentKey",e]).toArray()},getIndexByKey:function(e){return this.options.dataConverter.getIndexByKey(e)},addItem:function(e){this._addNode(e),this._updateFields()},removeItem:function(e){this._removeNode(e),this._updateFields()},toggleSelection:function(e,i,n){var l=this._isSingleModeUnselect(i),h=this._getByKey(n||l?this._initialDataStructure:this._dataStructure,e);this._setFieldState(h,L,i),this.options.recursiveSelection&&!n&&(i?this._setChildrenSelection():this._toggleChildrenSelection(h,i),this._setParentSelection()),this._selectedNodesKeys=this._updateNodesKeysArray(L)},_isSingleModeUnselect:function(e){return!this.options.multipleSelection&&!e},toggleNodeDisabledState:function(e,i){var n=this.getNodeByKey(e);this._setFieldState(n,"disabled",i)},toggleSelectAll:function(e){if((0,b.$K)(e)){var i=this,n=i._selectedNodesKeys[i._selectedNodesKeys.length-1],l=i._isSingleModeUnselect(e)?this._initialDataStructure:this._dataStructure;(0,g.S6)(l,function(h,c){!i._isNodeVisible(c)||i._setFieldState(c,L,e)}),i._selectedNodesKeys=i._updateNodesKeysArray(L),!e&&i.options.selectionRequired&&i.toggleSelection(n,!0)}},isAllSelected:function(){return!!this.getSelectedNodesKeys().length&&(this.getSelectedNodesKeys().length===this.getVisibleItemsCount()||void 0)},toggleExpansion:function(e,i){var n=this.getNodeByKey(e);this._setFieldState(n,F,i),i&&this._updateExpansion(e),this._expandedNodesKeys=this._updateNodesKeysArray(F)},isFiltered:function(e){return!this.options.searchValue.length||!!this._filterDataStructure(this.options.searchValue,[e]).length},_createCriteria:function(e,i,n){var l=[];return Array.isArray(e)?((0,g.S6)(e,function(h,c){l.push([c,n,i],"or")}),l.pop(),l):[e,n,i]},_filterDataStructure:function(e,i){var n=this.options.searchExpr||this.options.dataAccessors.getters.display,l=O.Z.getOperationBySearchMode(this.options.searchMode),h=this._createCriteria(n,e,l);return(0,A.Z)(i=i||this._initialDataStructure).filter(h).toArray()},search:function(e){var i=this,n=this._filterDataStructure(e),l=this.options.dataConverter;return function h(c,S){for(var w=c.length;S<w;){var y=c[S];if(y.internalFields.parentKey!==i.options.rootValue){var s=l.getParentNode(y);s?(s.internalFields.expanded||i._setFieldState(s,F,!0),c.includes(s)?S++:(c.splice(S,0,s),h(c,S))):(r.Z.log("W1007",y.internalFields.parentKey,y.internalFields.key),S++)}else S++}}(n,0),this.options.sort&&(n=H.Z.queryByOptions((0,A.Z)(n),{sort:this.options.sort}).toArray()),l._indexByKey={},(0,g.S6)(n,function(h,c){c.internalFields.childrenKeys=[],l._indexByKey[c.internalFields.key]=h}),l._dataStructure=n,l.setChildrenKeys(),l._dataStructure}});var G=_(60364),k=_(98595),R="dx-state-disabled";const Z=G.Z.inherit({_getDefaultOptions:function(){return(0,x.l)(this.callBase(),{keyExpr:"id",displayExpr:"text",selectedExpr:"selected",disabledExpr:"disabled",itemsExpr:"items",hoverStateEnabled:!0,parentIdExpr:"parentId",expandedExpr:"expanded"})},_defaultOptionsRules:function(){return this.callBase().concat([{device:function(){return"desktop"===v.Z.real().deviceType&&!v.Z.isSimulator()},options:{focusStateEnabled:!0}}])},_init:function(){this.callBase(),this._initAccessors(),this._initDataAdapter(),this._initDynamicTemplates()},_initDataSource:function(){this.callBase(),this._dataSource&&this._dataSource.paginate(!1)},_initDataAdapter:function(){var e=this._createDataAdapterAccessors();this._dataAdapter=new z((0,x.l)({dataAccessors:{getters:e.getters,setters:e.setters},items:this.option("items")},this._getDataAdapterOptions()))},_getDataAdapterOptions:I.ZT,_initDynamicTemplates:function(){var e=this;this._templateManager.addDefaultTemplates({item:new k.c(function(i,n){i.html(n.html).append(this._getIconContainer(n)).append(this._getTextContainer(n)).append(this._getPopoutContainer(n)),e._addContentClasses(n,i.parent())}.bind(this),["text","html","items","icon"],this.option("integrationOptions.watchMethod"),{text:this._displayGetter,items:this._itemsGetter})})},_getIconContainer:function(e){return e.icon?(0,$.H)(e.icon):void 0},_getTextContainer:function(e){return(0,C.Z)("<span>").text(e.text)},_getPopoutContainer:I.ZT,_addContentClasses:I.ZT,_initAccessors:function(){var e=this;(0,g.S6)(this._getAccessors(),function(i,n){e._compileAccessor(n)}),this._compileDisplayGetter()},_getAccessors:function(){return["key","selected","items","disabled","parentId","expanded"]},_getChildNodes:function(e){var i=this,n=[];return(0,g.S6)(e.internalFields.childrenKeys,function(l,h){var c=i._dataAdapter.getNodeByKey(h);n.push(c)}),n},_hasChildren:function(e){return e&&e.internalFields.childrenKeys.length},_compileAccessor:function(e){var i="_"+e+"Getter",n="_"+e+"Setter",l=this.option(e+"Expr");return l?(0,b.mf)(l)?(this[n]=function(h,c){h[l()]=c},void(this[i]=function(h){return h[l()]})):(this[i]=(0,f.vb)(l),void(this[n]=(0,f.OM)(l))):(this[i]=I.ZT,void(this[n]=I.ZT))},_createDataAdapterAccessors:function(){var e=this,i={getters:{},setters:{}};return(0,g.S6)(this._getAccessors(),function(n,l){var c="_"+l+"Setter",S="parentId"===l?"parentKey":l;i.getters[S]=e["_"+l+"Getter"],i.setters[S]=e[c]}),i.getters.display=this._displayGetter?this._displayGetter:n=>n.text,i},_initMarkup:function(){this.callBase(),this._addWidgetClass()},_addWidgetClass:function(){this._focusTarget().addClass(this._widgetClass())},_widgetClass:I.ZT,_renderItemFrame:function(e,i){var n=this.callBase.apply(this,arguments);return n.toggleClass(R,!!this._disabledGetter(i)),n},_optionChanged:function(e){switch(e.name){case"displayExpr":case"keyExpr":this._initAccessors(),this._initDynamicTemplates(),this.repaint();break;case"itemsExpr":case"selectedExpr":case"disabledExpr":case"expandedExpr":case"parentIdExpr":this._initAccessors(),this._initDataAdapter(),this.repaint();break;case"items":this._initDataAdapter(),this.callBase(e);break;default:this.callBase(e)}}})}}]);