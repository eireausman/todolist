/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/listFormModalStyle.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/listFormModalStyle.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.listModalFormContainer {\n    display: flex;\n    justify-content: center;    \n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color:rgba(36, 36, 36, 0.9);   \n    transform: translate(-300vw, 0vh);\n    pointer-events: none;\n    transition: 0.4s;\n}\n.listFormContainerVisible {\n    transform: translate(0vw, 0vh);\n    pointer-events: all;\n}\n\n\n.listFormModalListItemEdit {\ndisplay: flex;\nflex-direction: column;\nposition: fixed;\ntop: 20%;\nborder: 5px solid #ffffff;\nbackground: rgb(216, 215, 215);\nborder-radius: 5px;\ncolor: black;\nmin-width: 250px;\nheight: 200px;\ntransition: border 2s;\n}\n\n.listFormModalLabel {\n    display: flex;\n    font-size: 0.8rem;\n    font-weight: bold;\n    margin: 10px 10px 0px 10px;\n}\n\n.listFormModalInput {\n    display: flex;\n    margin: 3px 10px 0px 10px;\n}\n\n.listFormModalDoneButton {\n    display: flex;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    width: 150px;   \n}\n\n.listUpdateHasSavedMessageFormModal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: 10px;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    opacity: 0;\n    width:100px;\n    transition: 3s;\n}\n\n.listUpdateHasSavedMessageFormModalShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.listFormModalListItemEditSaved {\n    border: 5px solid #30db05;\n}", "",{"version":3,"sources":["webpack://./src/listFormModalStyle.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sCAAsC;IACtC,iCAAiC;IACjC,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,8BAA8B;IAC9B,mBAAmB;AACvB;;;AAGA;AACA,aAAa;AACb,sBAAsB;AACtB,eAAe;AACf,QAAQ;AACR,yBAAyB;AACzB,8BAA8B;AAC9B,kBAAkB;AAClB,YAAY;AACZ,gBAAgB;AAChB,aAAa;AACb,qBAAqB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,kCAAkC;IAClC,yBAAyB;IACzB,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,UAAU;IACV,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,UAAU;;AAEd;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["\n.listModalFormContainer {\n    display: flex;\n    justify-content: center;    \n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color:rgba(36, 36, 36, 0.9);   \n    transform: translate(-300vw, 0vh);\n    pointer-events: none;\n    transition: 0.4s;\n}\n.listFormContainerVisible {\n    transform: translate(0vw, 0vh);\n    pointer-events: all;\n}\n\n\n.listFormModalListItemEdit {\ndisplay: flex;\nflex-direction: column;\nposition: fixed;\ntop: 20%;\nborder: 5px solid #ffffff;\nbackground: rgb(216, 215, 215);\nborder-radius: 5px;\ncolor: black;\nmin-width: 250px;\nheight: 200px;\ntransition: border 2s;\n}\n\n.listFormModalLabel {\n    display: flex;\n    font-size: 0.8rem;\n    font-weight: bold;\n    margin: 10px 10px 0px 10px;\n}\n\n.listFormModalInput {\n    display: flex;\n    margin: 3px 10px 0px 10px;\n}\n\n.listFormModalDoneButton {\n    display: flex;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    width: 150px;   \n}\n\n.listUpdateHasSavedMessageFormModal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: 10px;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    opacity: 0;\n    width:100px;\n    transition: 3s;\n}\n\n.listUpdateHasSavedMessageFormModalShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.listFormModalListItemEditSaved {\n    border: 5px solid #30db05;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n\nbody {\n    background-color: rgb(41, 41, 41);\n    color: white;\n}\n\n.nav {\n    display: flex;\n    justify-content: space-between;\n}\n\n.logoContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n}\n\n.navTitle {\n    display: flex;\n}\n\n.updateHasSavedMessage {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border: 1px solid white;\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    width:140px;\n    opacity: 0;\n    z-index: -1;\n    transition: 2s;\n    position: fixed;\n    right: 0;\n}\n.updateHasSavedMessageShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.navAddNewItem {\n    display: flex;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width:150px;\n    border-radius: 3px;\n    border: 1px solid rgb(86, 87, 86);\n    background-color: rgb(22, 186, 30);\n    color: rgb(255, 255, 255);\n    margin: 0px 0px 5px 5px;\n    transition: 0.5s;\n}\n.navAddNewItem:hover {\n    border-width: 2px;\n}\n\n.navAddNewItemLeftMenuOut {\n    margin-top: 0px;\n}\n\n.mainContainerDiv {\n    display: flex;\n    flex-wrap: nowrap;\n}\n\n\n.leftMenu {\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    position: fixed;\n    top: 0;\n    left: 0;\n    overflow: none;\n    width: 50px;\n    height: 100vh;\n    background-color: rgb(118, 118, 115);\n    transition: 1s;\n}\n\n\n.leftMenuFlyOut {\n    width: 200px;\n    background-color: rgb(230, 230, 230);\n    overflow: auto;\n}\n.leftMenuFlyOut::-webkit-scrollbar {\n    width: 10px;\n    background: #f1f1f1; \n}\n.leftMenuFlyOut::-webkit-scrollbar-track {\n    background: #5c5959; \n}\n.leftMenuFlyOut::-webkit-scrollbar-thumb {\n    background: rgb(77, 76, 76); \n}\n  .leftMenuFlyOut::-webkit-scrollbar-thumb:hover {\n    background: rgb(225, 222, 222); \n}\n\n.burgerFlyOutButton {\n\n    align-self: center;\n    border: 0px;\n    background-color:rgba(0, 0, 0, 0);\n    margin-top: 10px;\n    transition: 0.5s;\n    cursor: pointer;   \n}\n.burgerFlyOut {\n    display: flex;\n    width:30px;\n    align-self: center;\n    transition: 0.5s;\n    \n    cursor: pointer;\n}\n.burgerFlyOutButtonHide {\n    width: 0px;\n    height:0px;\n    transform: translate(-100vw, 0vh);\n}\n\n\n.leftMenuProjectItemList {\n    list-style-type: none;\n    padding-left: 0px;\n    transform: translate(-100vw, 0vh);   \n    transition: 0.5s;\n}\n\n.leftMenuProjectItemListShow {\n    transform: translate(0vw, 0vh);   \n}\n\n.leftMenuProjectItem {\n    display: flex;\n    align-items: center;\n    text-align: left;\n    width:180px;\n    border: 1px solid rgb(152, 152, 152);\n    background-color: rgb(43, 42, 42);\n    color: rgb(255, 255, 255);\n    border-radius: 0px 6px 6px 0px;\n    margin-top: 1px;\n    padding: 5px;\n    cursor: pointer;\n    margin-top: 3px;\n}\n\n.leftMenuProjectItem:hover {\n    background-color: rgb(22, 186, 30);\n}\n\n.ListImgEle {\n    width:20px;\n    height: 20px;\n    margin-right: 5px;\n}\n\n.leftMenuProjectItemText {\n    font-size: 1rem;\n}\n\n.leftMenuItemShowAsSelected {\n    background-color: rgb(5, 121, 11);\n    border: 1px solid rgb(75, 75, 75);\n    color: white;\n\n}\n\n.mainPageListContainer {\n    margin-left: 100px;\n    height: 100vh;\n}\n\n.mainPageListContentNavBar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top:10px;\n    gap: 3px;\n    font-weight: bold;\n}\n\n.listTitle {\n    color: white;\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.buttonAddAnotherMainPageListItem {\n    display: flex;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width:100px;\n    border-radius: 3px;\n    border: 1px solid rgb(191, 191, 191);\n    background-color: rgb(5, 121, 11);\n    color: white;\n    margin: 0px 0px 5px 5px;\n    transition: 0.5s;\n}\n.buttonAddAnotherMainPageListItem:hover {\n    border-color: white;\n    background-color: rgb(22, 186, 30);\n}\n\n.mainPageListContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    overflow: auto;\n    padding: 10px;\n}\n\n.contentBreakPoint {\n    transform: translate(-100vw, 0vh);   \n    transition: 0.5s;\n    height:0px;\n}\n.contentBreakPointShow {\n    border: 1px solid rgb(147, 147, 145);\n    border-radius: 3px;\n    margin-top: 2vh;\n    transform: translate(0vw, 0vh);\n    height:100%;\n}\n.contentBreakPointImg {\n    width:23px;\n}\n\n.breakPointHeading {\n    display: flex; \n    align-items: center;\n    gap: 4px;\n    font-weight: bold;\n    padding: 5px;\n}\n\n.mainPageListItemCard {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    width: 100%;\n    border-bottom: 1px solid rgb(99, 97, 97);\n    transition: 0.2s;\n}\n\n.mainPageListItemCardMouseInside {\n    background-color: #5c5959;\n    cursor: pointer;\n}\n\n.mainPageListItemCardActive {\n    /* border: 1px solid white; */\n    background-color: #5c5959;\n    border-radius: 3px;\n}\n\n.mainPageListItemContentLeft {\n    display: flex;\n    flex-direction: column;\n}\n\n.mainPageListItemContentRight {\n    display: flex;\n    margin-right: 10px;\n}\n\n.formDisplayDueDate {\n    margin-left: 25px;\n    font-size: 0.8rem;\n    color: #b6acac;\n    background-color: rgba(0, 0, 0, 0);\n    border: 0;\n    cursor: pointer;\n    text-align: left;\n    opacity: 0;\n    transform: 1.5s;\n}\n\n.formDisplayDueDateShow {\n    opacity: 1;\n}\n\n.formDisplayDueDateCompleted {\n    text-decoration: line-through;\n}\n\n.formDisplayDueDate:hover {\n    color: #b6acac;\n    text-decoration: underline;\n}\n\n.mainPageListItemForm {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n\n.listFormTitleText {\n    border: 0px;\n    background-color:rgba(0, 0, 0, 0);\n    color: white;\n    resize: none;\n    margin-left: 4px;\n    width: 60vw;\n    height: 1.2rem;\n}\n\n.listFormTitleText:hover{\n    border-left: 2px dotted white;\n}\n\n.listFormTitleText:focus{\n    outline: none;\n    border-left: 2px dotted white;\n}\n\n.listFormActionButton {\n    background-color: rgba(0, 0, 0, 0);\n    padding:0px;\n    border: 0;\n    cursor: pointer;\n}\n.listFormActionButton:hover {\n    animation: showActive 2s;\n    animation-iteration-count: infinite;\n}\n.checkBoxImgEle {\n    width:25px;\n    margin: 0px 2px 0px 4px;\n}\n\n.pencilImgEle {\n    width:25px;\n    margin: 0px 2px 0px 4px;\n}\n\n.trashImgEle {\n    width:28px;\n    margin: 0px 4px 0px 4px;\n}\n\n\n@keyframes showActive {\n    0% { transform: rotate(0deg); }\n    25% { transform: rotate(20deg) scale(1.35); }\n    75% { transform: rotate(-20deg) scale(1.35); }\n    100% { transform: rotate(00deg);}\n  }\n\n\n\n@media (max-width: 610px) {\n    .mainPageListItemContentLeft {\n        width:100%;\n    }\n    \n    .mainPageListItemContentRight {\n        justify-content: flex-end;\n        width:100%;\n    }\n  \n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n\nbody {\n    background-color: rgb(41, 41, 41);\n    color: white;\n}\n\n.nav {\n    display: flex;\n    justify-content: space-between;\n}\n\n.logoContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n}\n\n.navTitle {\n    display: flex;\n}\n\n.updateHasSavedMessage {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border: 1px solid white;\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    width:140px;\n    opacity: 0;\n    z-index: -1;\n    transition: 2s;\n    position: fixed;\n    right: 0;\n}\n.updateHasSavedMessageShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.navAddNewItem {\n    display: flex;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width:150px;\n    border-radius: 3px;\n    border: 1px solid rgb(86, 87, 86);\n    background-color: rgb(22, 186, 30);\n    color: rgb(255, 255, 255);\n    margin: 0px 0px 5px 5px;\n    transition: 0.5s;\n}\n.navAddNewItem:hover {\n    border-width: 2px;\n}\n\n.navAddNewItemLeftMenuOut {\n    margin-top: 0px;\n}\n\n.mainContainerDiv {\n    display: flex;\n    flex-wrap: nowrap;\n}\n\n\n.leftMenu {\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    position: fixed;\n    top: 0;\n    left: 0;\n    overflow: none;\n    width: 50px;\n    height: 100vh;\n    background-color: rgb(118, 118, 115);\n    transition: 1s;\n}\n\n\n.leftMenuFlyOut {\n    width: 200px;\n    background-color: rgb(230, 230, 230);\n    overflow: auto;\n}\n.leftMenuFlyOut::-webkit-scrollbar {\n    width: 10px;\n    background: #f1f1f1; \n}\n.leftMenuFlyOut::-webkit-scrollbar-track {\n    background: #5c5959; \n}\n.leftMenuFlyOut::-webkit-scrollbar-thumb {\n    background: rgb(77, 76, 76); \n}\n  .leftMenuFlyOut::-webkit-scrollbar-thumb:hover {\n    background: rgb(225, 222, 222); \n}\n\n.burgerFlyOutButton {\n\n    align-self: center;\n    border: 0px;\n    background-color:rgba(0, 0, 0, 0);\n    margin-top: 10px;\n    transition: 0.5s;\n    cursor: pointer;   \n}\n.burgerFlyOut {\n    display: flex;\n    width:30px;\n    align-self: center;\n    transition: 0.5s;\n    \n    cursor: pointer;\n}\n.burgerFlyOutButtonHide {\n    width: 0px;\n    height:0px;\n    transform: translate(-100vw, 0vh);\n}\n\n\n.leftMenuProjectItemList {\n    list-style-type: none;\n    padding-left: 0px;\n    transform: translate(-100vw, 0vh);   \n    transition: 0.5s;\n}\n\n.leftMenuProjectItemListShow {\n    transform: translate(0vw, 0vh);   \n}\n\n.leftMenuProjectItem {\n    display: flex;\n    align-items: center;\n    text-align: left;\n    width:180px;\n    border: 1px solid rgb(152, 152, 152);\n    background-color: rgb(43, 42, 42);\n    color: rgb(255, 255, 255);\n    border-radius: 0px 6px 6px 0px;\n    margin-top: 1px;\n    padding: 5px;\n    cursor: pointer;\n    margin-top: 3px;\n}\n\n.leftMenuProjectItem:hover {\n    background-color: rgb(22, 186, 30);\n}\n\n.ListImgEle {\n    width:20px;\n    height: 20px;\n    margin-right: 5px;\n}\n\n.leftMenuProjectItemText {\n    font-size: 1rem;\n}\n\n.leftMenuItemShowAsSelected {\n    background-color: rgb(5, 121, 11);\n    border: 1px solid rgb(75, 75, 75);\n    color: white;\n\n}\n\n.mainPageListContainer {\n    margin-left: 100px;\n    height: 100vh;\n}\n\n.mainPageListContentNavBar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top:10px;\n    gap: 3px;\n    font-weight: bold;\n}\n\n.listTitle {\n    color: white;\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.buttonAddAnotherMainPageListItem {\n    display: flex;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width:100px;\n    border-radius: 3px;\n    border: 1px solid rgb(191, 191, 191);\n    background-color: rgb(5, 121, 11);\n    color: white;\n    margin: 0px 0px 5px 5px;\n    transition: 0.5s;\n}\n.buttonAddAnotherMainPageListItem:hover {\n    border-color: white;\n    background-color: rgb(22, 186, 30);\n}\n\n.mainPageListContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    overflow: auto;\n    padding: 10px;\n}\n\n.contentBreakPoint {\n    transform: translate(-100vw, 0vh);   \n    transition: 0.5s;\n    height:0px;\n}\n.contentBreakPointShow {\n    border: 1px solid rgb(147, 147, 145);\n    border-radius: 3px;\n    margin-top: 2vh;\n    transform: translate(0vw, 0vh);\n    height:100%;\n}\n.contentBreakPointImg {\n    width:23px;\n}\n\n.breakPointHeading {\n    display: flex; \n    align-items: center;\n    gap: 4px;\n    font-weight: bold;\n    padding: 5px;\n}\n\n.mainPageListItemCard {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    width: 100%;\n    border-bottom: 1px solid rgb(99, 97, 97);\n    transition: 0.2s;\n}\n\n.mainPageListItemCardMouseInside {\n    background-color: #5c5959;\n    cursor: pointer;\n}\n\n.mainPageListItemCardActive {\n    /* border: 1px solid white; */\n    background-color: #5c5959;\n    border-radius: 3px;\n}\n\n.mainPageListItemContentLeft {\n    display: flex;\n    flex-direction: column;\n}\n\n.mainPageListItemContentRight {\n    display: flex;\n    margin-right: 10px;\n}\n\n.formDisplayDueDate {\n    margin-left: 25px;\n    font-size: 0.8rem;\n    color: #b6acac;\n    background-color: rgba(0, 0, 0, 0);\n    border: 0;\n    cursor: pointer;\n    text-align: left;\n    opacity: 0;\n    transform: 1.5s;\n}\n\n.formDisplayDueDateShow {\n    opacity: 1;\n}\n\n.formDisplayDueDateCompleted {\n    text-decoration: line-through;\n}\n\n.formDisplayDueDate:hover {\n    color: #b6acac;\n    text-decoration: underline;\n}\n\n.mainPageListItemForm {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n\n.listFormTitleText {\n    border: 0px;\n    background-color:rgba(0, 0, 0, 0);\n    color: white;\n    resize: none;\n    margin-left: 4px;\n    width: 60vw;\n    height: 1.2rem;\n}\n\n.listFormTitleText:hover{\n    border-left: 2px dotted white;\n}\n\n.listFormTitleText:focus{\n    outline: none;\n    border-left: 2px dotted white;\n}\n\n.listFormActionButton {\n    background-color: rgba(0, 0, 0, 0);\n    padding:0px;\n    border: 0;\n    cursor: pointer;\n}\n.listFormActionButton:hover {\n    animation: showActive 2s;\n    animation-iteration-count: infinite;\n}\n.checkBoxImgEle {\n    width:25px;\n    margin: 0px 2px 0px 4px;\n}\n\n.pencilImgEle {\n    width:25px;\n    margin: 0px 2px 0px 4px;\n}\n\n.trashImgEle {\n    width:28px;\n    margin: 0px 4px 0px 4px;\n}\n\n\n@keyframes showActive {\n    0% { transform: rotate(0deg); }\n    25% { transform: rotate(20deg) scale(1.35); }\n    75% { transform: rotate(-20deg) scale(1.35); }\n    100% { transform: rotate(00deg);}\n  }\n\n\n\n@media (max-width: 610px) {\n    .mainPageListItemContentLeft {\n        width:100%;\n    }\n    \n    .mainPageListItemContentRight {\n        justify-content: flex-end;\n        width:100%;\n    }\n  \n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskFormModalStyle.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskFormModalStyle.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.modalFormContainer {\n    display: flex;\n    justify-content: center;    \n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color:rgba(36, 36, 36, 0.9);   \n    transform: translate(-300vw, 0vh);\n    pointer-events: none;\n    transition: 0.4s;\n}\n.formContainerVisible {\n    visibility: visible;\n    transform: translate(0vw, 0vh);\n    pointer-events: all;\n}\n\n\n.formModalListItemEdit {\ndisplay: flex;\nflex-direction: column;\nposition: fixed;\ntop: 3%;\nborder: 5px solid #ffffff;\nbackground: rgb(216, 215, 215);\nborder-radius: 5px;\ncolor: black;\nmin-width: 250px;\nheight: 200px;\ntransition: border 2s;\n}\n\n.formModalLabel {\n    display: flex;\n    font-size: 0.8rem;\n    font-weight: bold;\n    margin: 10px 10px 0px 10px;\n}\n\n.formModalInput {\n    display: flex;\n    margin: 3px 10px 0px 10px;\n}\n\n.formModalDoneButton {\n    display: flex;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    width: 150px;   \n}\n\n.updateHasSavedMessageFormModal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: 10px;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    opacity: 0;\n    width:100px;\n    transition: 3s;\n}\n\n.updateHasSavedMessageFormModalShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.formModalListItemEditSaved {\n    border: 5px solid #30db05;\n}", "",{"version":3,"sources":["webpack://./src/taskFormModalStyle.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sCAAsC;IACtC,iCAAiC;IACjC,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;AACvB;;;AAGA;AACA,aAAa;AACb,sBAAsB;AACtB,eAAe;AACf,OAAO;AACP,yBAAyB;AACzB,8BAA8B;AAC9B,kBAAkB;AAClB,YAAY;AACZ,gBAAgB;AAChB,aAAa;AACb,qBAAqB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,kCAAkC;IAClC,yBAAyB;IACzB,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,UAAU;IACV,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,UAAU;;AAEd;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["\n.modalFormContainer {\n    display: flex;\n    justify-content: center;    \n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color:rgba(36, 36, 36, 0.9);   \n    transform: translate(-300vw, 0vh);\n    pointer-events: none;\n    transition: 0.4s;\n}\n.formContainerVisible {\n    visibility: visible;\n    transform: translate(0vw, 0vh);\n    pointer-events: all;\n}\n\n\n.formModalListItemEdit {\ndisplay: flex;\nflex-direction: column;\nposition: fixed;\ntop: 3%;\nborder: 5px solid #ffffff;\nbackground: rgb(216, 215, 215);\nborder-radius: 5px;\ncolor: black;\nmin-width: 250px;\nheight: 200px;\ntransition: border 2s;\n}\n\n.formModalLabel {\n    display: flex;\n    font-size: 0.8rem;\n    font-weight: bold;\n    margin: 10px 10px 0px 10px;\n}\n\n.formModalInput {\n    display: flex;\n    margin: 3px 10px 0px 10px;\n}\n\n.formModalDoneButton {\n    display: flex;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    width: 150px;   \n}\n\n.updateHasSavedMessageFormModal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: 10px;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    opacity: 0;\n    width:100px;\n    transition: 3s;\n}\n\n.updateHasSavedMessageFormModalShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.formModalListItemEditSaved {\n    border: 5px solid #30db05;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRoundingMethod": () => (/* binding */ getRoundingMethod)
/* harmony export */ });
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function (value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarDays/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var startOfDayLeft = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var startOfDayRight = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/roundingMethods/index.js */ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
  return (0,_lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNow/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNow/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNow)
/* harmony export */ });
/* harmony import */ var _formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistance/index.js */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsToNow ` to `formatDistanceToNow`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *   ```
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */

function formatDistanceToNow(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/listFormModalStyle.css":
/*!************************************!*\
  !*** ./src/listFormModalStyle.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_listFormModalStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./listFormModalStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/listFormModalStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_listFormModalStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_listFormModalStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_listFormModalStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_listFormModalStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/taskFormModalStyle.css":
/*!************************************!*\
  !*** ./src/taskFormModalStyle.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskFormModalStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./taskFormModalStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/taskFormModalStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskFormModalStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskFormModalStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_taskFormModalStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_taskFormModalStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMevents.js":
/*!**************************!*\
  !*** ./src/DOMevents.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomEvents)
/* harmony export */ });
/* harmony import */ var _ListItemObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemObj.js */ "./src/ListItemObj.js");
/* harmony import */ var _dataEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataEvents.js */ "./src/dataEvents.js");
/* harmony import */ var _taskFormModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskFormModal.js */ "./src/taskFormModal.js");
/* harmony import */ var _listFormModal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listFormModal.js */ "./src/listFormModal.js");
/* harmony import */ var _z_img_listKart_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./z_img/listKart.png */ "./src/z_img/listKart.png");
/* harmony import */ var _z_img_menu_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./z_img/menu.png */ "./src/z_img/menu.png");
/* harmony import */ var _z_img_overdueFaceSweat_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./z_img/overdueFaceSweat.png */ "./src/z_img/overdueFaceSweat.png");
/* harmony import */ var _z_img_newLamb_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./z_img/newLamb.png */ "./src/z_img/newLamb.png");
/* harmony import */ var _z_img_1weekCalendar_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./z_img/1weekCalendar.png */ "./src/z_img/1weekCalendar.png");
/* harmony import */ var _z_img_over1WeekTimeMachine_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./z_img/over1WeekTimeMachine.png */ "./src/z_img/over1WeekTimeMachine.png");
/* harmony import */ var _z_img_noDueDateThinking_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./z_img/noDueDateThinking.png */ "./src/z_img/noDueDateThinking.png");
/* harmony import */ var _z_img_completeLanded_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./z_img/completeLanded.png */ "./src/z_img/completeLanded.png");
/* harmony import */ var _z_img_pencil_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./z_img/pencil.png */ "./src/z_img/pencil.png");
/* harmony import */ var _z_img_trash_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./z_img/trash.png */ "./src/z_img/trash.png");
/* harmony import */ var _z_img_checkbox_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./z_img/checkbox.png */ "./src/z_img/checkbox.png");
/* harmony import */ var _z_img_uncheckedbox_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./z_img/uncheckedbox.png */ "./src/z_img/uncheckedbox.png");




















function DomEvents() {  

    const dataEventsObj = (0,_dataEvents_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    const listItemObject = (0,_ListItemObj_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const taskFormModalObject = (0,_taskFormModal_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const listFormModalObject = (0,_listFormModal_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

const initialSetUp = () => {

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content")
    const theBody = document.querySelector("body");
    theBody.appendChild(contentDiv);  
    
    const mainContainerDiv = document.createElement("section");
    mainContainerDiv.classList.add("mainContainerDiv");
    contentDiv.appendChild(mainContainerDiv);

    const leftMenuNav = document.createElement("div");
    leftMenuNav.classList.add("leftMenu");
    mainContainerDiv.appendChild(leftMenuNav);
    
    const burgerFlyOutButton = document.createElement(`button`);
    burgerFlyOutButton.classList.add("burgerFlyOutButton");
    leftMenuNav.appendChild(burgerFlyOutButton);

    const burgerFlyOutImgEle = new Image();
    burgerFlyOutImgEle.classList.add("burgerFlyOut");
    burgerFlyOutImgEle.alt = "Show Menu";
    burgerFlyOutImgEle.src = _z_img_menu_png__WEBPACK_IMPORTED_MODULE_5__;
    burgerFlyOutButton.appendChild(burgerFlyOutImgEle);
    burgerFlyOutButton.addEventListener(`click`, (e) => {
        toggleLeftMenuShow(`flyOut`);
    });

    const leftMenuProjectItemList = document.createElement("nav");
    leftMenuProjectItemList.classList.add("leftMenuProjectItemList");
    leftMenuNav.appendChild(leftMenuProjectItemList);
   
    const mainPageListContainer = document.createElement("div");
    mainPageListContainer.classList.add("mainPageListContainer");
    mainContainerDiv.appendChild(mainPageListContainer);

    const mainPageListContentNavBar = document.createElement("nav");
    mainPageListContentNavBar.classList.add("mainPageListContentNavBar");
    mainPageListContainer.appendChild(mainPageListContentNavBar);

    const mainPageListContent = document.createElement("section");
    mainPageListContent.classList.add("mainPageListContent");
    mainPageListContainer.appendChild(mainPageListContent);
    
    addTimeBasedBreakPoints();


    const navAddNewItem = document.createElement("button");
    navAddNewItem.textContent = "New List ++";
    navAddNewItem.classList.add("navAddNewItem");
    leftMenuProjectItemList.insertBefore(navAddNewItem, leftMenuProjectItemList.firstChild);
    
    if (localStorage.length == 0 ) {
        addDefaultToDoList();
    }
    
    const LeftMenuListItems = dataEventsObj.getListItemDetails("isParent", null);
    for (let i = 0; i < LeftMenuListItems.length; i++) {
        const thisItem = dataEventsObj.createListObjectFromStorage(LeftMenuListItems[i]);
        const leftMenuProjectItem = addListItemToMenu(thisItem, true);
        showLeftMenuSelected(leftMenuProjectItem, thisItem, true);
        if (thisItem.selected == true) {
            thisItem.displayChildList();
        }
    }


    taskFormModalObject.createForm();
    listFormModalObject.createForm();

}

function addDefaultToDoList() {
    const newListItem = listItemObject.newListItem(
        NaN, 
        "To Do List", 
        "", 
        1, 
        false, 
        'parent', 
        true, 
        true,
        false);

    newListItem.addItemtoDB();
}

const repositionNewListButton = (e) => {
    const newListButton = document.querySelector(`.navAddNewItem`); 
    const leftMenu = document.querySelector(`.leftMenuProjectItemList`);
    leftMenu.insertBefore(newListButton, leftMenu.firstChild);
}

const addTimeBasedBreakPoints = () => {

    const mainPageListContent = document.querySelector(`.mainPageListContent`);

    const mainPageListContentNewItem = document.createElement("div");
    mainPageListContentNewItem.classList.add("contentBreakPoint");
    mainPageListContentNewItem.classList.add("mainPageListContentNewItem");
    mainPageListContent.appendChild(mainPageListContentNewItem);

    const mainPageListContentNewItemHeadingContainer = document.createElement(`div`);
    mainPageListContentNewItemHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentNewItem.appendChild(mainPageListContentNewItemHeadingContainer);

    const mainPageListContentNewItemImg = new Image();
    mainPageListContentNewItemImg.classList.add(`contentBreakPointImg`);
    mainPageListContentNewItemImg.alt = "New";
    mainPageListContentNewItemImg.src = _z_img_newLamb_png__WEBPACK_IMPORTED_MODULE_7__;
    mainPageListContentNewItemHeadingContainer.appendChild(mainPageListContentNewItemImg);
    
    const mainPageListContentNewItemHeadingText = document.createElement(`h2`);
    mainPageListContentNewItemHeadingText.textContent = "New";
    mainPageListContentNewItemHeadingText.classList.add(`breakPointHeadingText`);
    mainPageListContentNewItemHeadingContainer.appendChild(mainPageListContentNewItemHeadingText);

    const mainPageListContentOverdue = document.createElement("div");
    mainPageListContentOverdue.classList.add("contentBreakPoint");
    mainPageListContentOverdue.classList.add("mainPageListContentOverdue");
    mainPageListContent.appendChild(mainPageListContentOverdue);

    const mainPageListContentOverdueItemHeadingContainer = document.createElement(`div`);
    mainPageListContentOverdueItemHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentOverdue.appendChild(mainPageListContentOverdueItemHeadingContainer);

    const mainPageListContentOverdueImg = new Image();
    mainPageListContentOverdueImg.classList.add(`contentBreakPointImg`);
    mainPageListContentOverdueImg.alt = "Overdue";
    mainPageListContentOverdueImg.src = _z_img_overdueFaceSweat_png__WEBPACK_IMPORTED_MODULE_6__;
    mainPageListContentOverdueItemHeadingContainer.appendChild(mainPageListContentOverdueImg);
  
    const mainPageListContentOverdueHeading = document.createElement(`h2`);
    mainPageListContentOverdueHeading.textContent = "Overdue";
    mainPageListContentOverdueHeading.classList.add(`breakPointHeading`);
    mainPageListContentOverdueItemHeadingContainer.appendChild(mainPageListContentOverdueHeading);

    const mainPageListContentNextWeek = document.createElement("div");
    mainPageListContentNextWeek.classList.add("contentBreakPoint");
    mainPageListContentNextWeek.classList.add("mainPageListContentNextWeek");
    mainPageListContent.appendChild(mainPageListContentNextWeek);

    const mainPageListContentNextWeekHeadingContainer = document.createElement(`div`);
    mainPageListContentNextWeekHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentNextWeek.appendChild(mainPageListContentNextWeekHeadingContainer);

    const mainPageListContentNextWeekImg = new Image();
    mainPageListContentNextWeekImg.classList.add(`contentBreakPointImg`);
    mainPageListContentNextWeekImg.alt = "Due this week";
    mainPageListContentNextWeekImg.src = _z_img_1weekCalendar_png__WEBPACK_IMPORTED_MODULE_8__;
    mainPageListContentNextWeekHeadingContainer.appendChild(mainPageListContentNextWeekImg);

    const mainPageListContentNextWeekHeading = document.createElement(`h2`);
    mainPageListContentNextWeekHeading.textContent = "In the next week";
    mainPageListContentNextWeekHeading.classList.add(`breakPointHeading`);
    mainPageListContentNextWeekHeadingContainer.appendChild(mainPageListContentNextWeekHeading);

    
    const mainPageListContentAfterNextWeek = document.createElement("div");
    mainPageListContentAfterNextWeek.classList.add("contentBreakPoint");
    mainPageListContentAfterNextWeek.classList.add("mainPageListContentAfterNextWeek");
    mainPageListContent.appendChild(mainPageListContentAfterNextWeek);

    const mainPageListContentAfterNextWeekHeadingContainer = document.createElement(`div`);
    mainPageListContentAfterNextWeekHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentAfterNextWeek.appendChild(mainPageListContentAfterNextWeekHeadingContainer);

    const mainPageListContentAfterNextWeekImg = new Image();
    mainPageListContentAfterNextWeekImg.classList.add(`contentBreakPointImg`);
    mainPageListContentAfterNextWeekImg.alt = "Due over a week away";
    mainPageListContentAfterNextWeekImg.src = _z_img_over1WeekTimeMachine_png__WEBPACK_IMPORTED_MODULE_9__;
    mainPageListContentAfterNextWeekHeadingContainer.appendChild(mainPageListContentAfterNextWeekImg);

    const mainPageListContentAfterNextWeekHeading = document.createElement(`h2`);
    mainPageListContentAfterNextWeekHeading.textContent = "More than a week away";
    mainPageListContentAfterNextWeekHeading.classList.add(`breakPointHeading`);
    mainPageListContentAfterNextWeekHeadingContainer.appendChild(mainPageListContentAfterNextWeekHeading);

    const mainPageListContentNoDateSet = document.createElement("div");
    mainPageListContentNoDateSet.classList.add("contentBreakPoint");
    mainPageListContentNoDateSet.classList.add("mainPageListContentNoDateSet");
    mainPageListContent.appendChild(mainPageListContentNoDateSet);

    const mainPageListContentNoDateSetHeadingContainer = document.createElement(`div`);
    mainPageListContentNoDateSetHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentNoDateSet.appendChild(mainPageListContentNoDateSetHeadingContainer);

    const mainPageListContentNoDateSetImg = new Image();
    mainPageListContentNoDateSetImg.classList.add(`contentBreakPointImg`);
    mainPageListContentNoDateSetImg.alt = "Due over a week away";
    mainPageListContentNoDateSetImg.src = _z_img_noDueDateThinking_png__WEBPACK_IMPORTED_MODULE_10__;
    mainPageListContentNoDateSetHeadingContainer.appendChild(mainPageListContentNoDateSetImg);

    const mainPageListContentNoDateSetHeading = document.createElement(`h2`);
    mainPageListContentNoDateSetHeading.textContent = "No due date";
    mainPageListContentNoDateSetHeading.classList.add(`breakPointHeading`);
    mainPageListContentNoDateSetHeadingContainer.appendChild(mainPageListContentNoDateSetHeading);

    const mainPageListContentComplete = document.createElement("div");
    mainPageListContentComplete.classList.add("contentBreakPoint");
    mainPageListContentComplete.classList.add("mainPageListContentComplete");
    mainPageListContent.appendChild(mainPageListContentComplete);




    const mainPageListContentCompleteHeadingContainer = document.createElement(`div`);
    mainPageListContentCompleteHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentComplete.appendChild(mainPageListContentCompleteHeadingContainer);

    const mainPageListContentCompleteImg = new Image();
    mainPageListContentCompleteImg.classList.add(`contentBreakPointImg`);
    mainPageListContentCompleteImg.alt = "Due over a week away";
    mainPageListContentCompleteImg.src = _z_img_completeLanded_png__WEBPACK_IMPORTED_MODULE_11__;
    mainPageListContentCompleteHeadingContainer.appendChild(mainPageListContentCompleteImg);

    const mainPageListContentCompleteHeading = document.createElement(`h2`);
    mainPageListContentCompleteHeading.textContent = "Completed";
    mainPageListContentCompleteHeading.classList.add(`breakPointHeading`);
    mainPageListContentCompleteHeadingContainer.appendChild(mainPageListContentCompleteHeading);
}

const displayListItemChildren = (listItem) => {
    const listMenuChildren = dataEventsObj.getListItemDetails("getListItemChildren", listItem.ID);
    const mainPageListContent = document.querySelector(".mainPageListContent");
    // remove the current content before populating
    while (mainPageListContent.firstChild) {
        mainPageListContent.removeChild(mainPageListContent.firstChild);
    }
    
    addTimeBasedBreakPoints();

    const previousHeading = document.querySelector(".listTitle");
    if ( previousHeading != null ) {
        previousHeading.remove();
    }

    const mainPageListContentNavBar = document.querySelector(".mainPageListContentNavBar");
    const parentTitle = listItem.title;
    const pageTitle = document.createElement("h2");
    pageTitle.classList.add("listTitle");
    pageTitle.textContent = parentTitle;
    mainPageListContentNavBar.appendChild(pageTitle);
    

    // if this is the selected menu, show the children
    if (listItem.selected == true ) {
        if (listMenuChildren.length > 0 ) {
            for (let item in listMenuChildren) {
                const childListItemObject = dataEventsObj.createListObjectFromStorage(listMenuChildren[item]);
                createMainPageListingForm(childListItemObject);
            }   
        // if there are no children to display, create a new one ready for editing:
        } else {
                createEmptyListItem(listItem.ID);
        }
    const previousButton = document.querySelector(".buttonAddAnotherMainPageListItem");
    if ( previousButton != null ) {
        previousButton.remove();
    }
    
    const buttonAddAnotherListItem = document.createElement("button");
    buttonAddAnotherListItem.classList.add("buttonAddAnotherMainPageListItem");
    buttonAddAnotherListItem.textContent = "+ Add Task";
    buttonAddAnotherListItem.alt = "Add a task to this list";
    mainPageListContentNavBar.appendChild(buttonAddAnotherListItem);
    buttonAddAnotherListItem.addEventListener("click", function(e) {
        createEmptyListItem(listItem.ID);
        });
    }
}
const createEmptyListItem = (parentID) => {
    const additionalListItem = listItemObject.newListItem(
    NaN, 
    "", 
    "", 
    1, 
    false, 
    parentID, 
    false,
    false,
    false);

    additionalListItem.addItemtoDB();

    const newEmptyItemForm = createMainPageListingForm(additionalListItem);
    newEmptyItemForm.querySelector('input').focus();

    }

const showBreakPointClass = (e) => {
    if (!e.classList.contains(`contentBreakPointShow`)) {
        e.classList.add(`contentBreakPointShow`);
    }
}

const refreshBreakPointHeading = (e) => {
    // After a card is created, it is appended to the breakpoint section as the first child.  
    // Therefore,  after creation, we need to move the header back to the top of the section.
      const moveThisHeader = e.querySelector(`.breakPointHeading`);
      e.insertBefore(moveThisHeader, e.firstChild);
}

const createMainPageListingForm = (listItem) => {

    const dueDate = listItem.daysLeftToDue();
    let appendToThis = document.querySelector(".mainPageListContent");
    
    if ( listItem.completed == true ) {
        appendToThis = document.querySelector(`.mainPageListContentComplete`);
        showBreakPointClass(appendToThis);
    } else if ( listItem.committed == false ) {
        appendToThis = document.querySelector(`.mainPageListContentNewItem`);
        showBreakPointClass(appendToThis);
    } else if ( dueDate.daysUntilDue < 0 ) {
        appendToThis = document.querySelector(`.mainPageListContentOverdue`);
        showBreakPointClass(appendToThis);
    } else if ( dueDate.daysUntilDue > 0 && dueDate.daysUntilDue <= 7 ) {
        appendToThis = document.querySelector(`.mainPageListContentNextWeek`);
        showBreakPointClass(appendToThis);
    } else if ( dueDate.daysUntilDue > 7) {
        appendToThis = document.querySelector(`.mainPageListContentAfterNextWeek`);
        showBreakPointClass(appendToThis);
    } else if ( dueDate.daysUntilDue == 0) {
        appendToThis = document.querySelector(`.mainPageListContentNoDateSet`);
        showBreakPointClass(appendToThis);
    }
   
    const mainPageListItemCard = document.createElement("div");
    mainPageListItemCard.classList.add("mainPageListItemCard");
    appendToThis.insertBefore(mainPageListItemCard, appendToThis.firstChild)

    refreshBreakPointHeading(appendToThis);

    const mainPageListItemContentLeft = document.createElement("div");
    mainPageListItemContentLeft.classList.add("mainPageListItemContentLeft");
    mainPageListItemCard.appendChild(mainPageListItemContentLeft);

    let listItemForm = document.createElement("form");
    listItemForm.classList.add("mainPageListItemForm");
    listItemForm.setAttribute("data-parentList", listItem.parentList);
    listItemForm.setAttribute("data-itemid", listItem.ID);
    listItemForm.setAttribute("method", "post");
    listItemForm.setAttribute("action", "#");
    
    mainPageListItemContentLeft.appendChild(listItemForm);
    
    
    listItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        });

 
    let inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "List Item Title");
    inputTitle.classList.add("listFormTitleText");

     if ( listItem.title == "" ) {
        // inputTitle.placeholder = `${listItem.ID} - Task Title `;
        inputTitle.placeholder = `Task Title `;
    } else {
        // inputTitle.value =  `${listItem.ID} - ` + listItem.title;
        inputTitle.value =  listItem.title;
    }
    
    listItemForm.appendChild(inputTitle);
     
    let formDisplayDueDate = document.createElement("button");
    formDisplayDueDate.textContent = `${dueDate.daysUntilDueWords}`;
    formDisplayDueDate.classList.add("formDisplayDueDate");
    mainPageListItemContentLeft.appendChild(formDisplayDueDate);
    if ( listItem.title.length > 0 ) {
        formDisplayDueDate.classList.add("formDisplayDueDateShow");
        if ( listItem.completed == true ) {
            formDisplayDueDate.classList.add("formDisplayDueDateCompleted");
        }
    }
    


    const mainPageListItemContentRight = document.createElement("div");
    mainPageListItemContentRight.classList.add("mainPageListItemContentRight");
    mainPageListItemCard.appendChild(mainPageListItemContentRight);

    const checkBoxImgButton = document.createElement(`button`);
    checkBoxImgButton.classList.add(`checkBoxImgButton`);
    checkBoxImgButton.classList.add("listFormActionButton");
    mainPageListItemContentRight.appendChild(checkBoxImgButton);

    
    const checkBoxImgEle = new Image();
    if ( listItem.completed == true ) {
        checkBoxImgEle.src = _z_img_checkbox_png__WEBPACK_IMPORTED_MODULE_14__;
    } else {
        checkBoxImgEle.src = _z_img_uncheckedbox_png__WEBPACK_IMPORTED_MODULE_15__;
    }
    checkBoxImgEle.classList.add(`checkBoxImgEle`);
    checkBoxImgEle.alt = "Checkbox: Mark this entry as complete";
    checkBoxImgButton.appendChild(checkBoxImgEle);
    checkBoxImgButton.addEventListener("click", function (e) {
        const completedlistItemCard = e.target.closest(`.mainPageListItemCard`);
        const completedBreakPoint = document.querySelector(`.mainPageListContentComplete`);
        listItem.completed = !listItem.completed;
        listItem.addItemtoDB();
        const parentStoredItem = dataEventsObj.getListItemDetails("get1Item", listItem.parentList);
        const parentObject = dataEventsObj.createListObjectFromStorage(parentStoredItem);
        parentObject.displayChildList();
        
    });

    const pencilImgButton = document.createElement(`button`);
    pencilImgButton.classList.add(`pencilImgButton`);
    pencilImgButton.classList.add("listFormActionButton");
    mainPageListItemContentRight.appendChild(pencilImgButton);

    const pencilImgEle = new Image();
    pencilImgEle.src = _z_img_pencil_png__WEBPACK_IMPORTED_MODULE_12__;
    pencilImgEle.classList.add(`pencilImgEle`);
    pencilImgEle.alt = "Pencil: Edit this entry";
    pencilImgButton.appendChild(pencilImgEle);

    const trashImgButton = document.createElement(`button`);
    trashImgButton.classList.add(`trashImgButton`);
    trashImgButton.classList.add("listFormActionButton");
    mainPageListItemContentRight.appendChild(trashImgButton);

    const trashImgEle = new Image();
    trashImgEle.src = _z_img_trash_png__WEBPACK_IMPORTED_MODULE_13__;
    trashImgEle.alt = "Bin: Delete this entry";
    trashImgEle.classList.add(`trashImgEle`);
    trashImgButton.appendChild(trashImgEle);

    const updateHasSavedMessage = document.createElement("p");
    updateHasSavedMessage.classList.add("updateHasSavedMessage");
    updateHasSavedMessage.textContent = "Saved";
    updateHasSavedMessage.setAttribute("data-savedtag", listItem.ID);
    mainPageListItemContentRight.appendChild(updateHasSavedMessage);

    inputTitle.addEventListener("input", function (e) {
        
        // write any changes made directly to storage
        if ( e.target.value.length > 0 ) {
        listItem.title = e.target.value;
        listItem.committed = true;
        listItem.addItemtoDB(listItem);
        // not validated as complete but no two-way comms here.  It should really have a test to confirm this has been done correctly:
        const itemSavedMessage = document.querySelector(`p[data-savedtag="${listItem.ID}"]`);
        itemSavedMessage.classList.add("updateHasSavedMessageShow");
        itemSavedMessage.addEventListener('transitionend', function (e) {
            itemSavedMessage.classList.remove("updateHasSavedMessageShow");
        });
        const relatedDueDateText = e.target.closest(`.mainPageListItemContentLeft`).querySelector(`.formDisplayDueDate`);
        relatedDueDateText.classList.add(`formDisplayDueDateShow`);
        }
    });

    mainPageListItemCard.addEventListener("click", function (e) { 
        // if the item that was clicked is being deleted, don't attempt to mark it as selected
        if ( e.target.classList.contains("trashImgButton") || e.target.classList.contains("trashImgEle")) { 
            return;
        }
        markMainPageListingCardAsSelected(e.target.closest('.mainPageListItemCard'));
    });

    trashImgButton.addEventListener("click", function (e) {    
        const cardElement = e.target.closest(`.mainPageListItemCard`);
        if (confirm(`Delete: \n\nTitle: ${listItem.title}`) == true ) {
            
            
            cardElement.remove();
            listItem.deleteFromDB();
        }    
    });

    mainPageListItemCard.addEventListener("mouseenter", (e) => {
        e.target.classList.add("mainPageListItemCardMouseInside");
    });

    mainPageListItemCard.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("mainPageListItemCardMouseInside");
    });

    formDisplayDueDate.addEventListener("click", function (e) {
        taskFormModalObject.updateInputValues(listItem);
        taskFormModalObject.showForm(listItem);
      });
    pencilImgButton.addEventListener("click", function (e) {
    taskFormModalObject.updateInputValues(listItem);
    taskFormModalObject.showForm();
    });
 

      if ( listItem.selected == true ) {
        markMainPageListingCardAsSelected(mainPageListItemCard);
        }
return listItemForm;
  
}

const markMainPageListingCardAsSelected = (mainPageListItemCard) => {
// remove previous selections
    const activeClassesToRemove = document.querySelectorAll(".mainPageListItemCardActive");
    activeClassesToRemove.forEach(e => {
        // remove the DOM class
        e.classList.remove("mainPageListItemCardActive")
        // find the storage ID and remove the Selected state
        const dataItemID = e.querySelector(".mainPageListItemForm").dataset.itemid;
         const storageItem = dataEventsObj.getListItemDetails("get1Item", dataItemID);
         const thisItem = dataEventsObj.createListObjectFromStorage(storageItem);
         thisItem.selected = false;
         thisItem.addItemtoDB();
    });
  // set the row to active state so it's clear which is being edited
        const dataItemID = mainPageListItemCard.querySelector(".mainPageListItemForm").dataset.itemid;
        const storageItem = dataEventsObj.getListItemDetails("get1Item", dataItemID);
        const thisItem = dataEventsObj.createListObjectFromStorage(storageItem);
        thisItem.selected = true;
        thisItem.addItemtoDB();
      mainPageListItemCard.classList.add("mainPageListItemCardActive");
}

const addListItemToMenu = (thisItem) => {
    const leftMenuProjectItemList = document.querySelector(".leftMenuProjectItemList");
    
    const leftMenuProjectItem = document.createElement('button');
    leftMenuProjectItem.classList.add("leftMenuProjectItem");
    leftMenuProjectItem.setAttribute('data-listitemid', thisItem.ID);
    
    leftMenuProjectItemList.insertBefore(leftMenuProjectItem, leftMenuProjectItemList.firstChild);

    const ListImgEle = new Image();
    ListImgEle.classList.add("ListImgEle");
    ListImgEle.alt = "list icon";
    ListImgEle.src = _z_img_listKart_png__WEBPACK_IMPORTED_MODULE_4__;
    ListImgEle.setAttribute('data-listitemid', thisItem.ID);
    leftMenuProjectItem.appendChild(ListImgEle);
    
    const leftMenuItemTitle = document.createElement("p");
    leftMenuItemTitle.classList.add("leftMenuProjectItemText");
    leftMenuItemTitle.textContent = thisItem.title;
    leftMenuItemTitle.setAttribute('data-listitemid', thisItem.ID);
    leftMenuProjectItem.appendChild(leftMenuItemTitle);

    leftMenuProjectItem.addEventListener("click", function (e) {
        listFormModalObject.closeModalForm();
        taskFormModalObject.closeModalForm(`external`)
        deleteUncommittedEntries();
        leftMenuEventListeners(e.target);
    });
    repositionNewListButton();
    return leftMenuProjectItem;

}

const showLeftMenuSelected = (leftMenuProjectItem, thisItem, initialLoad) => {
    const removePreviousSelection = document.querySelectorAll('.leftMenuItemShowAsSelected');
        
        if ( removePreviousSelection != null && initialLoad == false) {
            for (let i = 0; i < removePreviousSelection.length; i++ ) {
            const storageItem = dataEventsObj.getListItemDetails("get1Item", removePreviousSelection[i].dataset.listitemid);
            const removeSelectedFromThis = dataEventsObj.createListObjectFromStorage(storageItem);
            removeSelectedFromThis.selectedStateRemove();
            removePreviousSelection[i].classList.remove("leftMenuItemShowAsSelected");
            }
        }
    const parentButton = leftMenuProjectItem.closest('button');
    if ( thisItem.selected == true ) {
        parentButton.classList.add("leftMenuItemShowAsSelected");
    }
    
}

const leftMenuEventListeners = (clickedElement) => {
    
    const storageItem = dataEventsObj.getListItemDetails("get1Item", clickedElement.dataset.listitemid);

    const thisItem = dataEventsObj.createListObjectFromStorage(storageItem);
        if (thisItem.selected == true) {
            return;
        } else {
            thisItem.selectedStateAdd();
            showLeftMenuSelected(clickedElement, thisItem, false);
            thisItem.displayChildList();
        }
        toggleLeftMenuShow();

}

const deleteUncommittedEntries = () => {
        const deleteUncommittedEntries = dataEventsObj.getListItemDetails("uncommitted");
    
    for (let i = 0; i < deleteUncommittedEntries.length; i++ ) {
        const UncommittedEntry = dataEventsObj.createListObjectFromStorage(deleteUncommittedEntries[i]);
        UncommittedEntry.deleteFromDB();
    }
}

const toggleLeftMenuShow = (action) => {
    const burgerFlyOutButton = document.querySelector(`.burgerFlyOutButton`);
    const navAddNewItem = document.querySelector(`.navAddNewItem`);
    const leftMenu = document.querySelector(".leftMenu");
    const leftMenuProjectItemList = document.querySelector(`.leftMenuProjectItemList`);
    if (action == `flyOut`) {
        burgerFlyOutButton.classList.add(`burgerFlyOutButtonHide`);
        navAddNewItem.classList.add(`navAddNewItemLeftMenuOut`);
        leftMenu.classList.add("leftMenuFlyOut");
        leftMenuProjectItemList.classList.add(`leftMenuProjectItemListShow`);
    } else {
        burgerFlyOutButton.classList.remove(`burgerFlyOutButtonHide`);
        navAddNewItem.classList.remove(`navAddNewItemLeftMenuOut`);
        leftMenu.classList.remove("leftMenuFlyOut");
        leftMenuProjectItemList.classList.remove(`leftMenuProjectItemListShow`);
    }
    
    
   
    
}

const initialEventListeners = () => {

    const leftMenu = document.querySelector(".leftMenu");
    leftMenu.addEventListener("mouseenter", (e) => { 
        toggleLeftMenuShow(`flyOut`);
    }); 
    leftMenu.addEventListener("mouseleave", (e) => { 
        toggleLeftMenuShow(`flyIn`);
    }); 
    // left menu click actions
    const allLeftMenuItems = document.querySelectorAll('.leftMenuProjectItem');
    allLeftMenuItems.forEach(e => e.addEventListener("click", function (e) {
    
        
        leftMenuEventListeners(e.target);
  
      }));

    // new list button actions
    const navAddNewItem = document.querySelector(".navAddNewItem");
    navAddNewItem.addEventListener("click", function(e) {
        // remove all empty DB entries so the next availableID is correct
        
        deleteUncommittedEntries();
     
        const newListItem = listItemObject.newListItem(
            NaN, 
            "", 
            "", 
            1, 
            false, 
            'parent', 
            true, 
            false,
            false);

        newListItem.addItemtoDB();
        listFormModalObject.updateInputValues(newListItem);
        toggleLeftMenuShow();
        listFormModalObject.showForm(newListItem);
    
    });
}


    return { initialSetUp, initialEventListeners, addListItemToMenu, displayListItemChildren, showLeftMenuSelected, deleteUncommittedEntries};
}


/***/ }),

/***/ "./src/ListItemObj.js":
/*!****************************!*\
  !*** ./src/ListItemObj.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListItemObj)
/* harmony export */ });
/* harmony import */ var _dataEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataEvents.js */ "./src/dataEvents.js");
/* harmony import */ var _DOMevents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMevents.js */ "./src/DOMevents.js");





 
function ListItemObj() {

    

    const newListItem = (listItemID, listItemTitle, dueDate, importance, pinned, parentList, selected, committed, completed) => {
        const dataEventsObj = (0,_dataEvents_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        const DOMEventsObj = (0,_DOMevents_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        // let newListItemID = listItemID;
        if ( isNaN(listItemID) ) {
            listItemID = dataEventsObj.findNextListID();
        }
        const listItem = {
            ID: listItemID,
            title: listItemTitle,
            dueDate: dueDate,
            importance: importance,
            pinned: pinned,
            parentList: parentList,
            selected: selected,
            committed, committed,
            completed, completed,
            addItemtoDB() {
                dataEventsObj.addListItemToDB(listItem);
            },
            selectedStateAdd() {
                dataEventsObj.addStateSelected(listItem);
            },
            selectedStateRemove() {
                dataEventsObj.removeStateSelected(listItem);
            },
            displayChildList() {
                DOMEventsObj.displayListItemChildren(listItem);
            },
            daysLeftToDue() {
                const days = dataEventsObj.daysUntilDue(listItem);
                return days;
            },
            deleteFromDB() {
                dataEventsObj.deleteThisObjectFromDB(listItem);
            }
        }
    return listItem;
    }
    

return { newListItem };

}

/***/ }),

/***/ "./src/dataEvents.js":
/*!***************************!*\
  !*** ./src/dataEvents.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dataEvents)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var _ListItemObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemObj.js */ "./src/ListItemObj.js");
 



function dataEvents() {
    const listItemObject = (0,_ListItemObj_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const addListItemToDB = (listItem) => {
        localStorage.setItem(listItem.ID, JSON.stringify(listItem));
    }   

    const deleteThisObjectFromDB = (listItem) => {
        localStorage.removeItem(listItem.ID);
    }

    const addStateSelected = (listItem) => {
        listItem.selected = true;
        addListItemToDB(listItem);
    }
    const removeStateSelected = (listItem) => {
        listItem.selected = false;
        addListItemToDB(listItem);
    }
    
    
    const getListItemDetails = (requestType, itemID) => {
        let storageItemsArray = [];
        const storageKeys = Object.keys(localStorage);
         for (let item in storageKeys ) {
            const itemToAdd = JSON.parse(localStorage.getItem(storageKeys[item]));
            if ( itemToAdd != null ) {
                storageItemsArray.push(itemToAdd);
            }
        }


        if ( requestType == "isParent" ) {
            const parentItems = storageItemsArray.filter(
                function(storageItemsArray) {
                    return storageItemsArray.parentList == "parent" && storageItemsArray.committed == true;
                });
                return parentItems;
        } else if ( requestType == "get1Item" && itemID > -1 ) {
            const get1Item = storageItemsArray.find(storageItemsArray => storageItemsArray.ID == itemID);
                return get1Item;
        } else if ( requestType == "getListItemChildren" ) {
            const childList = storageItemsArray.filter(
                function(storageItemsArray){return storageItemsArray.parentList == itemID}
            );
            const childListSorted = childList.sort(function compareFn(a, b){
                let sortValue = 0;
                const today = new Date();
                let daysA = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(a.dueDate), today);
                let daysB = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(b.dueDate), today);


                if (isNaN(daysA)) {
                    sortValue += -100;
                }
                if (daysA > daysB) {
                    sortValue += -1;
                }
                if (daysA <  daysB) {
                    sortValue += 1;
                }
                return sortValue;
                
            }); 
            return childList;
        } else if ( requestType == "uncommitted") {
            const uncommitted = storageItemsArray.filter(
                function(storageItemsArray){return storageItemsArray.committed == false}
            );
            return uncommitted;
        }
    }

    

    const createListObjectFromStorage = (storedItem) => {
        const thisItem = listItemObject.newListItem(storedItem.ID, storedItem.title, storedItem.dueDate, 
            storedItem.importance, storedItem.pinned, storedItem.parentList, storedItem.selected, storedItem.committed, storedItem.completed);
        return thisItem;
    }

    const findNextListID = () => {    
        const idArray = Object.keys(localStorage);
        let nextID = 0;
        if (idArray.length > 0) {
            nextID = idArray.reduce(function(a, b) {
                return Math.max(a, b);
            }, -Infinity) + 1;
        }
        return nextID;
    }

    const daysUntilDue = (listItem) => {
        const dueDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(listItem.dueDate);
        let days = {};
        if (listItem.dueDate == "" ) {
            days.daysUntilDue = '0';
            days.daysUntilDueWords = `Set a due date...`;
        }
        if (listItem.dueDate != "" ) {
            const difference = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(dueDate, new Date())
                if ( difference < 0 ) {
                    days.daysUntilDue = '-1';
                    days.daysUntilDueWords = `Due ${(0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(dueDate, { addSuffix: true })}`;
                    
                } else {
                    days.daysUntilDue = difference;
                    days.daysUntilDueWords = `Due ${(0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(dueDate, { addSuffix: true })}`;
                }
        }
        return days;
         
    }

       
    

    
    return { findNextListID, addListItemToDB, getListItemDetails, createListObjectFromStorage, addStateSelected, removeStateSelected, daysUntilDue, deleteThisObjectFromDB };
    
    }

/***/ }),

/***/ "./src/listFormModal.js":
/*!******************************!*\
  !*** ./src/listFormModal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listformModal)
/* harmony export */ });
/* harmony import */ var _dataEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataEvents.js */ "./src/dataEvents.js");
/* harmony import */ var _DOMevents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMevents.js */ "./src/DOMevents.js");



function listformModal() {
   
  const dataEventsObj = (0,_dataEvents_js__WEBPACK_IMPORTED_MODULE_0__["default"])();


    const createForm = () => {    
      

        // clear out any previous modals that have been created
        const modalsToDelete = document.querySelectorAll(".listModalFormContainer");
        modalsToDelete.forEach(e => e.remove());
      
        //create the modal form
        const mainContainerDiv = document.querySelector(".mainContainerDiv");

        
        const formContainer = document.createElement("div");
        formContainer.classList.add("listModalFormContainer");
        
        mainContainerDiv.appendChild(formContainer);

        const formModalForm = document.createElement("form");
        formModalForm.classList.add("listFormModalListItemEdit");
        formModalForm.setAttribute("name", "modalForm");
        formModalForm.setAttribute("data-parentList", NaN);
        formModalForm.setAttribute("data-itemID", NaN);
        formModalForm.setAttribute("method", "post");
        formModalForm.setAttribute("action", "#");
        formContainer.appendChild(formModalForm);

        const inputTitleLabel = document.createElement("label");
        inputTitleLabel.setAttribute("for", "title");
        inputTitleLabel.classList.add(`listFormModalLabel`);
        inputTitleLabel.textContent = `List Title`;
        formModalForm.appendChild(inputTitleLabel);

        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.required = true;
        inputTitle.classList.add("listFormTitle");
        inputTitle.placeholder = "List Title";
        inputTitle.classList.add("listFormModalInput");
        inputTitle.setAttribute("id", "listFormTitle");
        inputTitle.setAttribute("name", "title");
        formModalForm.appendChild(inputTitle);

        const formModalDoneButton = document.createElement("button");
        formModalDoneButton.classList.add("listFormModalDoneButton");
        formModalDoneButton.textContent = "Done";
        formModalForm.appendChild(formModalDoneButton);

        const updateHasSavedMessage = document.createElement("div");
        updateHasSavedMessage.classList.add("listUpdateHasSavedMessageFormModal");
        updateHasSavedMessage.textContent = "Saved";
        formModalForm.appendChild(updateHasSavedMessage);

        inputTitle.addEventListener("input", function (e) {
          if (e.target.value.length > 0 ) {
            const listItemID = e.target.closest(`form`).dataset.itemid;
            const storageItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
            const listItem = dataEventsObj.createListObjectFromStorage(storageItem);

            listItem.title = inputTitle.value;
            listItem.committed = true;
            // not validated as complete but no two-way comms here
            listItem.addItemtoDB(listItem);
            
            updateHasSavedMessage.classList.add("listUpdateHasSavedMessageFormModalShow");
            formModalForm.classList.add("listFormModalListItemEditSaved");
          }
        });

        updateHasSavedMessage.addEventListener('transitionend', formModalSavedRemove);
          function formModalSavedRemove (e) {
              e.target.classList.remove("listUpdateHasSavedMessageFormModalShow");
              formModalForm.classList.remove("listFormModalListItemEditSaved");
        }
       

        formContainer.addEventListener('submit', (e) => { 
          e.preventDefault(); 
          });


        formContainer.addEventListener("click", (e) => {
          const clickOutsideModal = !e.target.closest('.listFormModalListItemEdit');
          if ( clickOutsideModal == true ) {
            closeModalForm()
          };
        });
        window.addEventListener('keydown', formModalEscape);
        function formModalEscape(e) {
          if ( e.key == "Escape" ) {
            closeModalForm()
          }
        }
        formModalDoneButton.addEventListener("click", (e) => {
            closeModalForm();
        });
    }

    const closeModalForm = () => {
        const DOMEventsObj = (0,_DOMevents_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        const formContainer = document.querySelector(`.listModalFormContainer`);
        console.log(formContainer.classList);
        if ( formContainer.classList.contains(`listFormContainerVisible`) ) {
          console.log(formContainer.classList);
                // update the main page listing view to reflect any changes upon closure
        const form = document.querySelector(`.listFormModalListItemEdit`)
        const listItemID = form.dataset.itemid;
        console.log(listItemID);
        const storedListItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
        const listItem = dataEventsObj.createListObjectFromStorage(storedListItem);

          if (listItem.committed == true ) {         
            const leftMenuProjectItem = DOMEventsObj.addListItemToMenu(listItem);
            DOMEventsObj.showLeftMenuSelected(leftMenuProjectItem, listItem, false);
            listItem.displayChildList();
          }
          formContainer.classList.remove("listFormContainerVisible");
      }

    }
    
   


    const updateInputValues = (listItem) => {
      const formModalForm = document.querySelector(".listFormModalListItemEdit");
      const inputTitle = document.getElementById("listFormTitle");
      inputTitle.value = "";
      formModalForm.setAttribute("data-parentList", listItem.parentList);
      formModalForm.setAttribute("data-itemID", listItem.ID);
    }

    const showForm = () => {
      const inputTitle = document.getElementById("listFormTitle");
      inputTitle.focus();
      const formContainer = document.querySelector(`.listModalFormContainer`);
      formContainer.classList.add("listFormContainerVisible");
    }
    

    return { createForm, updateInputValues, showForm, closeModalForm }
}  

/***/ }),

/***/ "./src/taskFormModal.js":
/*!******************************!*\
  !*** ./src/taskFormModal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskformModal)
/* harmony export */ });
/* harmony import */ var _dataEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataEvents.js */ "./src/dataEvents.js");


function taskformModal() {
   
    const dataEventsObj = (0,_dataEvents_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    const createForm = () => {    
      

        // clear out any previous modals that have been created
        const modalsToDelete = document.querySelectorAll(".modalFormContainer");
        modalsToDelete.forEach(e => e.remove());
      
        //create the modal form
        const mainContainerDiv = document.querySelector(".mainContainerDiv");

        
        const formContainer = document.createElement("div");
        formContainer.classList.add("modalFormContainer");
        
        mainContainerDiv.appendChild(formContainer);

        const formModalForm = document.createElement("form");
        formModalForm.classList.add("formModalListItemEdit");
        formModalForm.setAttribute("name", "modalForm");
        formModalForm.setAttribute("data-parentList", NaN);
        formModalForm.setAttribute("data-itemID", NaN);
        formModalForm.setAttribute("method", "post");
        formModalForm.setAttribute("action", "#");
        formContainer.appendChild(formModalForm);

        const inputTitleLabel = document.createElement("label");
        inputTitleLabel.setAttribute("for", "title");
        inputTitleLabel.classList.add(`formModalLabel`);
        inputTitleLabel.textContent = `Note (required)`;
        formModalForm.appendChild(inputTitleLabel);

        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.required = true;
        inputTitle.classList.add("taskFormTitle");
        inputTitle.classList.add("formModalInput");
        inputTitle.setAttribute("id", "taskFormTitle");
        inputTitle.setAttribute("name", "title");
        inputTitle.value = "n/a";
        formModalForm.appendChild(inputTitle);
      
        const inputDueDateLabel = document.createElement("label");
        inputDueDateLabel.setAttribute("for", "dueDate");
        inputDueDateLabel.classList.add(`formModalLabel`);
        inputDueDateLabel.textContent = "Due Date (optional)";
        formModalForm.appendChild(inputDueDateLabel);
       

        let inputDueDate = document.createElement("input");
        inputDueDate.setAttribute("type", "date");        
        inputDueDate.setAttribute("id", "listFormDueDate");
        inputDueDate.setAttribute("name", "dueDate");
        inputDueDate.classList.add("listFormDueDate");
        inputDueDate.classList.add("formModalInput");
        inputDueDate.setAttribute("value", "");
        formModalForm.appendChild(inputDueDate);

        const formModalDoneButton = document.createElement("button");
        formModalDoneButton.classList.add("formModalDoneButton");
        formModalDoneButton.textContent = "Done";
        formModalForm.appendChild(formModalDoneButton);

        const updateHasSavedMessage = document.createElement("div");
        updateHasSavedMessage.classList.add("updateHasSavedMessageFormModal");
        updateHasSavedMessage.textContent = "Saved";
        formModalForm.appendChild(updateHasSavedMessage);

   

        formModalForm.addEventListener("input", function (e) {
          const listItemID = e.target.closest(`form`).dataset.itemid;
          const storageItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
          const listItem = dataEventsObj.createListObjectFromStorage(storageItem);

          listItem.title = inputTitle.value;
          listItem.dueDate = inputDueDate.value;
          listItem.committed = true;
          listItem.addItemtoDB(listItem);
          // not validated as complete but no two-way comms here:
          updateHasSavedMessage.classList.add("updateHasSavedMessageFormModalShow");
          formModalForm.classList.add("formModalListItemEditSaved");
        });

        updateHasSavedMessage.addEventListener('transitionend', formModalSavedRemove);
          function formModalSavedRemove (e) {
              e.target.classList.remove("updateHasSavedMessageFormModalShow");
              formModalForm.classList.remove("formModalListItemEditSaved");
              // window.removeEventListener('transitionend', formModalSavedRemove)
        }
       

        formContainer.addEventListener('submit', (e) => { 
          e.preventDefault(); 
          });


        formContainer.addEventListener("click", (e) => {
          const clickOutsideModal = !e.target.closest('.formModalListItemEdit');
          if ( clickOutsideModal == true ) {
            closeModalForm()
          };
        });
        window.addEventListener('keydown', formModalEscape);
        function formModalEscape(e) {
          if ( e.key == "Escape" ) {
            closeModalForm()
          }
        }
        formModalDoneButton.addEventListener("click", (e) => {
            closeModalForm()
        });

    }


    const closeModalForm = (source) => {
      // update the main page listing view to reflect any changes upon closure
      const formContainer = document.querySelector(`.modalFormContainer`);
      
      if ( source != `external` ) {
        updatePageUponClosure();
      }
      
      formContainer.classList.remove("formContainerVisible");
    }
    
    const updatePageUponClosure = () => {
      const listItemID = document.querySelector(`.formModalListItemEdit`).dataset.itemid;
      const storedListItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
      const listItem = dataEventsObj.createListObjectFromStorage(storedListItem);
      const listItemParentObject = dataEventsObj.getListItemDetails("get1Item", listItem.parentList);
      const parentObject = dataEventsObj.createListObjectFromStorage(listItemParentObject);
      parentObject.displayChildList();
    }

    const updateInputValues = (listItem) => {
      const formModalForm = document.querySelector(".formModalListItemEdit");
      const inputTitle = document.getElementById("taskFormTitle");
      const inputDueDate = document.getElementById("listFormDueDate");
      inputTitle.value = listItem.title;
      inputDueDate.value = listItem.dueDate;
      formModalForm.setAttribute("data-parentList", listItem.parentList);
      formModalForm.setAttribute("data-itemID", listItem.ID);
      
    }

    const showForm = () => {
      const inputTitle = document.getElementById("taskFormTitle");
      inputTitle.focus();
      const formContainer = document.querySelector(`.modalFormContainer`); 
      formContainer.classList.add("formContainerVisible");
    
    }
    

    return { createForm, updateInputValues, showForm, closeModalForm }
}  

/***/ }),

/***/ "./src/z_img/1weekCalendar.png":
/*!*************************************!*\
  !*** ./src/z_img/1weekCalendar.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "319a85031255c4db50c7.png";

/***/ }),

/***/ "./src/z_img/checkbox.png":
/*!********************************!*\
  !*** ./src/z_img/checkbox.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33c217c8c748af0ac16b.png";

/***/ }),

/***/ "./src/z_img/completeLanded.png":
/*!**************************************!*\
  !*** ./src/z_img/completeLanded.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d328df32ee5e90706b6.png";

/***/ }),

/***/ "./src/z_img/listKart.png":
/*!********************************!*\
  !*** ./src/z_img/listKart.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e2f5ff1c39f8f122698.png";

/***/ }),

/***/ "./src/z_img/menu.png":
/*!****************************!*\
  !*** ./src/z_img/menu.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5aceff78ea544b02ece.png";

/***/ }),

/***/ "./src/z_img/newLamb.png":
/*!*******************************!*\
  !*** ./src/z_img/newLamb.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e1f51864d694fc3f984.png";

/***/ }),

/***/ "./src/z_img/noDueDateThinking.png":
/*!*****************************************!*\
  !*** ./src/z_img/noDueDateThinking.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5cc9ca02bbcc06df2b3.png";

/***/ }),

/***/ "./src/z_img/over1WeekTimeMachine.png":
/*!********************************************!*\
  !*** ./src/z_img/over1WeekTimeMachine.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b997e08ae4e6c90ed484.png";

/***/ }),

/***/ "./src/z_img/overdueFaceSweat.png":
/*!****************************************!*\
  !*** ./src/z_img/overdueFaceSweat.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "480df0598fa953a878bb.png";

/***/ }),

/***/ "./src/z_img/pencil.png":
/*!******************************!*\
  !*** ./src/z_img/pencil.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88b192400d7bb86d91b0.png";

/***/ }),

/***/ "./src/z_img/trash.png":
/*!*****************************!*\
  !*** ./src/z_img/trash.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c50cc8375e71ea3741e1.png";

/***/ }),

/***/ "./src/z_img/uncheckedbox.png":
/*!************************************!*\
  !*** ./src/z_img/uncheckedbox.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7266b467350ad44c62f7.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _taskFormModalStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFormModalStyle.css */ "./src/taskFormModalStyle.css");
/* harmony import */ var _listFormModalStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listFormModalStyle.css */ "./src/listFormModalStyle.css");
/* harmony import */ var _DOMevents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMevents.js */ "./src/DOMevents.js");








const DomEventsFunctions = (0,_DOMevents_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
DomEventsFunctions.initialSetUp();
DomEventsFunctions.initialEventListeners();







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLDREQUFnQjtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDBEQUFZO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsdURBQVk7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNB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QkFBMEIsMERBQVU7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEtBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZHFCO0FBQ2E7QUFDQTs7O0FBR0s7O0FBRXZDLDJCQUEyQix5REFBUztBQUNwQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdEZvcm1Nb2RhbFN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0Zvcm1Nb2RhbFN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZVRvTm93L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdEZvcm1Nb2RhbFN0eWxlLmNzcz9mZmRjIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tGb3JtTW9kYWxTdHlsZS5jc3M/NGUyNCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTWV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9MaXN0SXRlbU9iai5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXRhRXZlbnRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xpc3RGb3JtTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0Zvcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubGlzdE1vZGFsRm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgzNiwgMzYsIDM2LCAwLjkpOyAgIFxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAwdncsIDB2aCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4ubGlzdEZvcm1Db250YWluZXJWaXNpYmxlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3LCAwdmgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG5cXG4ubGlzdEZvcm1Nb2RhbExpc3RJdGVtRWRpdCB7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IDIwJTtcXG5ib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmO1xcbmJhY2tncm91bmQ6IHJnYigyMTYsIDIxNSwgMjE1KTtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuY29sb3I6IGJsYWNrO1xcbm1pbi13aWR0aDogMjUwcHg7XFxuaGVpZ2h0OiAyMDBweDtcXG50cmFuc2l0aW9uOiBib3JkZXIgMnM7XFxufVxcblxcbi5saXN0Rm9ybU1vZGFsTGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xcbn1cXG5cXG4ubGlzdEZvcm1Nb2RhbElucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAzcHggMTBweCAwcHggMTBweDtcXG59XFxuXFxuLmxpc3RGb3JtTW9kYWxEb25lQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgd2lkdGg6IDE1MHB4OyAgIFxcbn1cXG5cXG4ubGlzdFVwZGF0ZUhhc1NhdmVkTWVzc2FnZUZvcm1Nb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTg2LCAzMCk7XFxuICAgIGNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIHRyYW5zaXRpb246IDNzO1xcbn1cXG5cXG4ubGlzdFVwZGF0ZUhhc1NhdmVkTWVzc2FnZUZvcm1Nb2RhbFNob3cge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG59XFxuXFxuLmxpc3RGb3JtTW9kYWxMaXN0SXRlbUVkaXRTYXZlZCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzMGRiMDU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9saXN0Rm9ybU1vZGFsU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7OztBQUdBO0FBQ0EsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2YsUUFBUTtBQUNSLHlCQUF5QjtBQUN6Qiw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmxpc3RNb2RhbEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzYsIDM2LCAzNiwgMC45KTsgICBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwMHZ3LCAwdmgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmxpc3RGb3JtQ29udGFpbmVyVmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dywgMHZoKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuXFxuLmxpc3RGb3JtTW9kYWxMaXN0SXRlbUVkaXQge1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiAyMCU7XFxuYm9yZGVyOiA1cHggc29saWQgI2ZmZmZmZjtcXG5iYWNrZ3JvdW5kOiByZ2IoMjE2LCAyMTUsIDIxNSk7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmNvbG9yOiBibGFjaztcXG5taW4td2lkdGg6IDI1MHB4O1xcbmhlaWdodDogMjAwcHg7XFxudHJhbnNpdGlvbjogYm9yZGVyIDJzO1xcbn1cXG5cXG4ubGlzdEZvcm1Nb2RhbExhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDtcXG59XFxuXFxuLmxpc3RGb3JtTW9kYWxJbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogM3B4IDEwcHggMHB4IDEwcHg7XFxufVxcblxcbi5saXN0Rm9ybU1vZGFsRG9uZUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxNTBweDsgICBcXG59XFxuXFxuLmxpc3RVcGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDE4NiwgMzApO1xcbiAgICBjb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAzcztcXG59XFxuXFxuLmxpc3RVcGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWxTaG93IHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgXFxufVxcblxcbi5saXN0Rm9ybU1vZGFsTGlzdEl0ZW1FZGl0U2F2ZWQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzBkYjA1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIC0tLS0tLS0gZW5kIG9mIENTUyBSZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLSBlbmQgb2YgQ1NTIFJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tIGVuZCBvZiBDU1MgUmVzZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxvZ29Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5uYXZUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi51cGRhdGVIYXNTYXZlZE1lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxODYsIDMwKTtcXG4gICAgY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgd2lkdGg6MTQwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMDtcXG59XFxuLnVwZGF0ZUhhc1NhdmVkTWVzc2FnZVNob3cge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG59XFxuXFxuLm5hdkFkZE5ld0l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOjE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4NiwgODcsIDg2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxODYsIDMwKTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgbWFyZ2luOiAwcHggMHB4IDVweCA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5uYXZBZGROZXdJdGVtOmhvdmVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbi5uYXZBZGROZXdJdGVtTGVmdE1lbnVPdXQge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi5tYWluQ29udGFpbmVyRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcblxcblxcbi5sZWZ0TWVudSB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE4LCAxMTgsIDExNSk7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG5cXG4ubGVmdE1lbnVGbHlPdXQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5sZWZ0TWVudUZseU91dDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTsgXFxufVxcbi5sZWZ0TWVudUZseU91dDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjNWM1OTU5OyBcXG59XFxuLmxlZnRNZW51Rmx5T3V0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NywgNzYsIDc2KTsgXFxufVxcbiAgLmxlZnRNZW51Rmx5T3V0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjUsIDIyMiwgMjIyKTsgXFxufVxcblxcbi5idXJnZXJGbHlPdXRCdXR0b24ge1xcblxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgICBcXG59XFxuLmJ1cmdlckZseU91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOjMwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1cmdlckZseU91dEJ1dHRvbkhpZGUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwdncsIDB2aCk7XFxufVxcblxcblxcbi5sZWZ0TWVudVByb2plY3RJdGVtTGlzdCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDB2dywgMHZoKTsgICBcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmxlZnRNZW51UHJvamVjdEl0ZW1MaXN0U2hvdyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dywgMHZoKTsgICBcXG59XFxuXFxuLmxlZnRNZW51UHJvamVjdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDoxODBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MiwgMTUyLCAxNTIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA2cHggNnB4IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4ubGVmdE1lbnVQcm9qZWN0SXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTg2LCAzMCk7XFxufVxcblxcbi5MaXN0SW1nRWxlIHtcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmxlZnRNZW51UHJvamVjdEl0ZW1UZXh0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubGVmdE1lbnVJdGVtU2hvd0FzU2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTIxLCAxMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig3NSwgNzUsIDc1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4ubWFpblBhZ2VMaXN0Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0Q29udGVudE5hdkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xcbiAgICBnYXA6IDNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5saXN0VGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmJ1dHRvbkFkZEFub3RoZXJNYWluUGFnZUxpc3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDoxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkxLCAxOTEsIDE5MSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAxMjEsIDExKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDBweCAwcHggNXB4IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLmJ1dHRvbkFkZEFub3RoZXJNYWluUGFnZUxpc3RJdGVtOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxODYsIDMwKTtcXG59XFxuXFxuLm1haW5QYWdlTGlzdENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNvbnRlbnRCcmVha1BvaW50IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMHZ3LCAwdmgpOyAgIFxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBoZWlnaHQ6MHB4O1xcbn1cXG4uY29udGVudEJyZWFrUG9pbnRTaG93IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0NywgMTQ3LCAxNDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3LCAwdmgpO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG59XFxuLmNvbnRlbnRCcmVha1BvaW50SW1nIHtcXG4gICAgd2lkdGg6MjNweDtcXG59XFxuXFxuLmJyZWFrUG9pbnRIZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0SXRlbUNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig5OSwgOTcsIDk3KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLm1haW5QYWdlTGlzdEl0ZW1DYXJkTW91c2VJbnNpZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1OTU5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluUGFnZUxpc3RJdGVtQ2FyZEFjdGl2ZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1OTU5O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5tYWluUGFnZUxpc3RJdGVtQ29udGVudExlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmZvcm1EaXNwbGF5RHVlRGF0ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6ICNiNmFjYWM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IDEuNXM7XFxufVxcblxcbi5mb3JtRGlzcGxheUR1ZURhdGVTaG93IHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZvcm1EaXNwbGF5RHVlRGF0ZUNvbXBsZXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZm9ybURpc3BsYXlEdWVEYXRlOmhvdmVyIHtcXG4gICAgY29sb3I6ICNiNmFjYWM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0SXRlbUZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4ubGlzdEZvcm1UaXRsZVRleHQge1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4ubGlzdEZvcm1UaXRsZVRleHQ6aG92ZXJ7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggZG90dGVkIHdoaXRlO1xcbn1cXG5cXG4ubGlzdEZvcm1UaXRsZVRleHQ6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggZG90dGVkIHdoaXRlO1xcbn1cXG5cXG4ubGlzdEZvcm1BY3Rpb25CdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBwYWRkaW5nOjBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5saXN0Rm9ybUFjdGlvbkJ1dHRvbjpob3ZlciB7XFxuICAgIGFuaW1hdGlvbjogc2hvd0FjdGl2ZSAycztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxufVxcbi5jaGVja0JveEltZ0VsZSB7XFxuICAgIHdpZHRoOjI1cHg7XFxuICAgIG1hcmdpbjogMHB4IDJweCAwcHggNHB4O1xcbn1cXG5cXG4ucGVuY2lsSW1nRWxlIHtcXG4gICAgd2lkdGg6MjVweDtcXG4gICAgbWFyZ2luOiAwcHggMnB4IDBweCA0cHg7XFxufVxcblxcbi50cmFzaEltZ0VsZSB7XFxuICAgIHdpZHRoOjI4cHg7XFxuICAgIG1hcmdpbjogMHB4IDRweCAwcHggNHB4O1xcbn1cXG5cXG5cXG5Aa2V5ZnJhbWVzIHNob3dBY3RpdmUge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAgIDI1JSB7IHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKSBzY2FsZSgxLjM1KTsgfVxcbiAgICA3NSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpIHNjYWxlKDEuMzUpOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwMGRlZyk7fVxcbiAgfVxcblxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MTBweCkge1xcbiAgICAubWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRMZWZ0IHtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tYWluUGFnZUxpc3RJdGVtQ29udGVudFJpZ2h0IHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICB9XFxuICBcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNm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SSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixNQUFNLG9DQUFvQyxFQUFFO0lBQzVDLE1BQU0scUNBQXFDLEVBQUU7SUFDN0MsT0FBTyx3QkFBd0IsQ0FBQztFQUNsQzs7OztBQUlGO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsVUFBVTtJQUNkOztFQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogLS0tLS0tLSBlbmQgb2YgQ1NTIFJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tIGVuZCBvZiBDU1MgUmVzZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0gZW5kIG9mIENTUyBSZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubG9nb0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLm5hdlRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnVwZGF0ZUhhc1NhdmVkTWVzc2FnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDE4NiwgMzApO1xcbiAgICBjb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoxNDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IDJzO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG4udXBkYXRlSGFzU2F2ZWRNZXNzYWdlU2hvdyB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIFxcbn1cXG5cXG4ubmF2QWRkTmV3SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6MTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDg2LCA4NywgODYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDE4NiwgMzApO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBtYXJnaW46IDBweCAwcHggNXB4IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLm5hdkFkZE5ld0l0ZW06aG92ZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuLm5hdkFkZE5ld0l0ZW1MZWZ0TWVudU91dCB7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLm1haW5Db250YWluZXJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuXFxuLmxlZnRNZW51IHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvdmVyZmxvdzogbm9uZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTgsIDExOCwgMTE1KTtcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcblxcbi5sZWZ0TWVudUZseU91dCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuLmxlZnRNZW51Rmx5T3V0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcXG59XFxuLmxlZnRNZW51Rmx5T3V0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICM1YzU5NTk7IFxcbn1cXG4ubGVmdE1lbnVGbHlPdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc3LCA3NiwgNzYpOyBcXG59XFxuICAubGVmdE1lbnVGbHlPdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIyNSwgMjIyLCAyMjIpOyBcXG59XFxuXFxuLmJ1cmdlckZseU91dEJ1dHRvbiB7XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgIFxcbn1cXG4uYnVyZ2VyRmx5T3V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6MzBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnVyZ2VyRmx5T3V0QnV0dG9uSGlkZSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDowcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDB2dywgMHZoKTtcXG59XFxuXFxuXFxuLmxlZnRNZW51UHJvamVjdEl0ZW1MaXN0IHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMHZ3LCAwdmgpOyAgIFxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4ubGVmdE1lbnVQcm9qZWN0SXRlbUxpc3RTaG93IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3LCAwdmgpOyAgIFxcbn1cXG5cXG4ubGVmdE1lbnVQcm9qZWN0SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOjE4MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUyLCAxNTIsIDE1Mik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDZweCA2cHggMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbi5sZWZ0TWVudVByb2plY3RJdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxODYsIDMwKTtcXG59XFxuXFxuLkxpc3RJbWdFbGUge1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4ubGVmdE1lbnVQcm9qZWN0SXRlbVRleHQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5sZWZ0TWVudUl0ZW1TaG93QXNTZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAxMjEsIDExKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDc1LCA3NSwgNzUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5tYWluUGFnZUxpc3RDb250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tYWluUGFnZUxpc3RDb250ZW50TmF2QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOjEwcHg7XFxuICAgIGdhcDogM3B4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxpc3RUaXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uYnV0dG9uQWRkQW5vdGhlck1haW5QYWdlTGlzdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTEsIDE5MSwgMTkxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDEyMSwgMTEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMHB4IDBweCA1cHggNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4uYnV0dG9uQWRkQW5vdGhlck1haW5QYWdlTGlzdEl0ZW06aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDE4NiwgMzApO1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0Q29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudEJyZWFrUG9pbnQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwdncsIDB2aCk7ICAgXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGhlaWdodDowcHg7XFxufVxcbi5jb250ZW50QnJlYWtQb2ludFNob3cge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTQ3LCAxNDcsIDE0NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwdncsIDB2aCk7XFxuICAgIGhlaWdodDoxMDAlO1xcbn1cXG4uY29udGVudEJyZWFrUG9pbnRJbWcge1xcbiAgICB3aWR0aDoyM3B4O1xcbn1cXG5cXG4uYnJlYWtQb2ludEhlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5tYWluUGFnZUxpc3RJdGVtQ2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDk5LCA5NywgOTcpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0SXRlbUNhcmRNb3VzZUluc2lkZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzU5NTk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW5QYWdlTGlzdEl0ZW1DYXJkQWN0aXZlIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YzU5NTk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLm1haW5QYWdlTGlzdEl0ZW1Db250ZW50TGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluUGFnZUxpc3RJdGVtQ29udGVudFJpZ2h0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uZm9ybURpc3BsYXlEdWVEYXRlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBjb2xvcjogI2I2YWNhYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogMS41cztcXG59XFxuXFxuLmZvcm1EaXNwbGF5RHVlRGF0ZVNob3cge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZm9ybURpc3BsYXlEdWVEYXRlQ29tcGxldGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5mb3JtRGlzcGxheUR1ZURhdGU6aG92ZXIge1xcbiAgICBjb2xvcjogI2I2YWNhYztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tYWluUGFnZUxpc3RJdGVtRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5saXN0Rm9ybVRpdGxlVGV4dCB7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxufVxcblxcbi5saXN0Rm9ybVRpdGxlVGV4dDpob3ZlcntcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgd2hpdGU7XFxufVxcblxcbi5saXN0Rm9ybVRpdGxlVGV4dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgd2hpdGU7XFxufVxcblxcbi5saXN0Rm9ybUFjdGlvbkJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIHBhZGRpbmc6MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpc3RGb3JtQWN0aW9uQnV0dG9uOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiBzaG93QWN0aXZlIDJzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuLmNoZWNrQm94SW1nRWxlIHtcXG4gICAgd2lkdGg6MjVweDtcXG4gICAgbWFyZ2luOiAwcHggMnB4IDBweCA0cHg7XFxufVxcblxcbi5wZW5jaWxJbWdFbGUge1xcbiAgICB3aWR0aDoyNXB4O1xcbiAgICBtYXJnaW46IDBweCAycHggMHB4IDRweDtcXG59XFxuXFxuLnRyYXNoSW1nRWxlIHtcXG4gICAgd2lkdGg6MjhweDtcXG4gICAgbWFyZ2luOiAwcHggNHB4IDBweCA0cHg7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgc2hvd0FjdGl2ZSB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMjUlIHsgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpIHNjYWxlKDEuMzUpOyB9XFxuICAgIDc1JSB7IHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZykgc2NhbGUoMS4zNSk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDAwZGVnKTt9XFxuICB9XFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAgIC5tYWluUGFnZUxpc3RJdGVtQ29udGVudExlZnQge1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1haW5QYWdlTGlzdEl0ZW1Db250ZW50UmlnaHQge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgIH1cXG4gIFxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tb2RhbEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzYsIDM2LCAzNiwgMC45KTsgICBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwMHZ3LCAwdmgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmZvcm1Db250YWluZXJWaXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3LCAwdmgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG5cXG4uZm9ybU1vZGFsTGlzdEl0ZW1FZGl0IHtcXG5kaXNwbGF5OiBmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxucG9zaXRpb246IGZpeGVkO1xcbnRvcDogMyU7XFxuYm9yZGVyOiA1cHggc29saWQgI2ZmZmZmZjtcXG5iYWNrZ3JvdW5kOiByZ2IoMjE2LCAyMTUsIDIxNSk7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmNvbG9yOiBibGFjaztcXG5taW4td2lkdGg6IDI1MHB4O1xcbmhlaWdodDogMjAwcHg7XFxudHJhbnNpdGlvbjogYm9yZGVyIDJzO1xcbn1cXG5cXG4uZm9ybU1vZGFsTGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xcbn1cXG5cXG4uZm9ybU1vZGFsSW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDNweCAxMHB4IDBweCAxMHB4O1xcbn1cXG5cXG4uZm9ybU1vZGFsRG9uZUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxNTBweDsgICBcXG59XFxuXFxuLnVwZGF0ZUhhc1NhdmVkTWVzc2FnZUZvcm1Nb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTg2LCAzMCk7XFxuICAgIGNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIHRyYW5zaXRpb246IDNzO1xcbn1cXG5cXG4udXBkYXRlSGFzU2F2ZWRNZXNzYWdlRm9ybU1vZGFsU2hvdyB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIFxcbn1cXG5cXG4uZm9ybU1vZGFsTGlzdEl0ZW1FZGl0U2F2ZWQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzBkYjA1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdGFza0Zvcm1Nb2RhbFN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZixPQUFPO0FBQ1AseUJBQXlCO0FBQ3pCLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IscUJBQXFCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubW9kYWxGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgIFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDM2LCAzNiwgMzYsIDAuOSk7ICAgXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMDB2dywgMHZoKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5mb3JtQ29udGFpbmVyVmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dywgMHZoKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuXFxuLmZvcm1Nb2RhbExpc3RJdGVtRWRpdCB7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IDMlO1xcbmJvcmRlcjogNXB4IHNvbGlkICNmZmZmZmY7XFxuYmFja2dyb3VuZDogcmdiKDIxNiwgMjE1LCAyMTUpO1xcbmJvcmRlci1yYWRpdXM6IDVweDtcXG5jb2xvcjogYmxhY2s7XFxubWluLXdpZHRoOiAyNTBweDtcXG5oZWlnaHQ6IDIwMHB4O1xcbnRyYW5zaXRpb246IGJvcmRlciAycztcXG59XFxuXFxuLmZvcm1Nb2RhbExhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDtcXG59XFxuXFxuLmZvcm1Nb2RhbElucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAzcHggMTBweCAwcHggMTBweDtcXG59XFxuXFxuLmZvcm1Nb2RhbERvbmVCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMTUwcHg7ICAgXFxufVxcblxcbi51cGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDE4NiwgMzApO1xcbiAgICBjb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAzcztcXG59XFxuXFxuLnVwZGF0ZUhhc1NhdmVkTWVzc2FnZUZvcm1Nb2RhbFNob3cge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG59XFxuXFxuLmZvcm1Nb2RhbExpc3RJdGVtRWRpdFNhdmVkIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzMwZGIwNTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGRpcnR5T2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGRpcnR5T2JqZWN0ID0gZGlydHlPYmplY3QgfHwge307XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGlydHlPYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpcnR5T2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBkaXJ0eU9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KGRpcnR5T2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIGRpcnR5T2JqZWN0KTtcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJ2YXIgcm91bmRpbmdNYXAgPSB7XG4gIGNlaWw6IE1hdGguY2VpbCxcbiAgcm91bmQ6IE1hdGgucm91bmQsXG4gIGZsb29yOiBNYXRoLmZsb29yLFxuICB0cnVuYzogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbiAgfSAvLyBNYXRoLnRydW5jIGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUVcblxufTtcbnZhciBkZWZhdWx0Um91bmRpbmdNZXRob2QgPSAndHJ1bmMnO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdW5kaW5nTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gbWV0aG9kID8gcm91bmRpbmdNYXBbbWV0aG9kXSA6IHJvdW5kaW5nTWFwW2RlZmF1bHRSb3VuZGluZ01ldGhvZF07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwOyIsImltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZkRheUxlZnQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gTUlMTElTRUNPTkRTX0lOX0RBWSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aERpZmYgPSBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGF0ZUxlZnQpLmdldFRpbWUoKSAtIHRvRGF0ZShkYXRlUmlnaHQpLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzTGFzdERheU9mTW9udGggZnJvbSBcIi4uL2lzTGFzdERheU9mTW9udGgvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyB1c2luZyB0cnVuYyBhcyBhIGRlZmF1bHQgcm91bmRpbmcgbWV0aG9kLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5Nb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTQsIDAsIDMxKSlcbiAqIC8vPT4gN1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHNpZ24gPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKTtcbiAgdmFyIHJlc3VsdDsgLy8gQ2hlY2sgZm9yIHRoZSBkaWZmZXJlbmNlIG9mIGxlc3MgdGhhbiBtb250aFxuXG4gIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgIHJlc3VsdCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IDEgJiYgZGF0ZUxlZnQuZ2V0RGF0ZSgpID4gMjcpIHtcbiAgICAgIC8vIFRoaXMgd2lsbCBjaGVjayBpZiB0aGUgZGF0ZSBpcyBlbmQgb2YgRmViIGFuZCBhc3NpZ24gYSBoaWdoZXIgZW5kIG9mIG1vbnRoIGRhdGVcbiAgICAgIC8vIHRvIGNvbXBhcmUgaXQgd2l0aCBKYW5cbiAgICAgIGRhdGVMZWZ0LnNldERhdGUoMzApO1xuICAgIH1cblxuICAgIGRhdGVMZWZ0LnNldE1vbnRoKGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBzaWduICogZGlmZmVyZW5jZSk7IC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBtb250aHMgLSBkaWZmIGluIGNhbGVuZGFyIG1vbnRocykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBtb250aCBpcyBub3QgZnVsbFxuICAgIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gICAgdmFyIGlzTGFzdE1vbnRoTm90RnVsbCA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduOyAvLyBDaGVjayBmb3IgY2FzZXMgb2Ygb25lIGZ1bGwgY2FsZW5kYXIgbW9udGhcblxuICAgIGlmIChpc0xhc3REYXlPZk1vbnRoKHRvRGF0ZShkaXJ0eURhdGVMZWZ0KSkgJiYgZGlmZmVyZW5jZSA9PT0gMSAmJiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IDEpIHtcbiAgICAgIGlzTGFzdE1vbnRoTm90RnVsbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIE51bWJlcihpc0xhc3RNb250aE5vdEZ1bGwpKTtcbiAgfSAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cblxuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldFJvdW5kaW5nTWV0aG9kIH0gZnJvbSBcIi4uL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ndHJ1bmMnXSAtIGEgcm91bmRpbmcgbWV0aG9kIChgY2VpbGAsIGBmbG9vcmAsIGByb3VuZGAgb3IgYHRydW5jYClcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGdldFJvdW5kaW5nTWV0aG9kKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5yb3VuZGluZ01ldGhvZCkoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMCk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTlVURVNfSU5fREFZID0gMTQ0MDtcbnZhciBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUyA9IDI1MjA7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IDQzMjAwO1xudmFyIE1JTlVURVNfSU5fVFdPX01PTlRIUyA9IDg2NDAwO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICAgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICAgICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyAgICB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyAgICB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyAgICB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGRpc3RhbmNlSW5Xb3JkcyBgIHRvIGBmb3JtYXREaXN0YW5jZWBcbiAqICAgdG8gbWFrZSBpdHMgbmFtZSBjb25zaXN0ZW50IHdpdGggYGZvcm1hdGAgYW5kIGBmb3JtYXRSZWxhdGl2ZWAuXG4gKlxuICogLSBUaGUgb3JkZXIgb2YgYXJndW1lbnRzIGlzIHN3YXBwZWQgdG8gbWFrZSB0aGUgZnVuY3Rpb25cbiAqICAgY29uc2lzdGVudCB3aXRoIGBkaWZmZXJlbmNlSW4uLi5gIGZ1bmN0aW9ucy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzKFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMyLCAwKSxcbiAqICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gKiAgICkgLy89PiAnaW4gYWJvdXQgMSBob3VyJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2UoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMyLCAwKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIHsgYWRkU3VmZml4OiB0cnVlIH1cbiAqICAgKSAvLz0+ICdpbiBhYm91dCAxIGhvdXInXG4gKiAgIGBgYFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcblxuICBpZiAoIWxvY2FsZS5mb3JtYXREaXN0YW5jZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdERpc3RhbmNlIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKTtcblxuICBpZiAoaXNOYU4oY29tcGFyaXNvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICB2YXIgbG9jYWxpemVPcHRpb25zID0gY2xvbmVPYmplY3Qob3B0aW9ucyk7XG4gIGxvY2FsaXplT3B0aW9ucy5hZGRTdWZmaXggPSBCb29sZWFuKG9wdGlvbnMuYWRkU3VmZml4KTtcbiAgbG9jYWxpemVPcHRpb25zLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRoczsgLy8gMCB1cCB0byAyIG1pbnNcblxuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCBudWxsLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG5cbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7IC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIHZhciBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpOyAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcblxuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnb3ZlclhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDkgbW9udGhzIHVwIHRvIE4geWVhciAxMiBtb250aHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWxtb3N0WFllYXJzJywgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBkaXN0YW5jZUluV29yZHMgZnJvbSBcIi4uL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVRvTm93XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSB0byBub3cgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGRpc3RhbmNlSW5Xb3Jkc1RvTm93IGAgdG8gYGZvcm1hdERpc3RhbmNlVG9Ob3dgXG4gKiAgIHRvIG1ha2UgaXRzIG5hbWUgY29uc2lzdGVudCB3aXRoIGBmb3JtYXRgIGFuZCBgZm9ybWF0UmVsYXRpdmVgLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBkaXN0YW5jZUluV29yZHNUb05vdyhuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgeyBhZGRTdWZmaXg6IHRydWUgfSlcbiAqICAgLy89PiAnaW4gNiBtb250aHMnXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KVxuICogICAvLz0+ICdpbiA2IG1vbnRocydcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IHNwZWNpZmllcyBpZiBub3cgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBwYXNzZWQgZGF0ZVxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSwgd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMiBKdWx5IDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMilcbiAqIClcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiBub3cgaXMgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNSAwMDowMDoxNSwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICB7aW5jbHVkZVNlY29uZHM6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNiwgd2l0aCBhIHN1ZmZpeD9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93KFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAge2FkZFN1ZmZpeDogdHJ1ZX1cbiAqIClcbiAqIC8vPT4gJ2luIGFib3V0IDEgeWVhcidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEF1Z3VzdCAyMDE2IGluIEVzcGVyYW50bz9cbiAqIHZhciBlb0xvY2FsZSA9IHJlcXVpcmUoJ2RhdGUtZm5zL2xvY2FsZS9lbycpXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgNywgMSksXG4gKiAgIHtsb2NhbGU6IGVvTG9jYWxlfVxuICogKVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZVRvTm93KGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gZGlzdGFuY2VJbldvcmRzKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgZGlydHlPcHRpb25zKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZkRheSBmcm9tIFwiLi4vZW5kT2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gXCIuLi9lbmRPZk1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0xhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMjggRmVicnVhcnkgMjAxNCB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqIHZhciByZXN1bHQgPSBpc0xhc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDEsIDI4KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTGFzdERheU9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gZW5kT2ZEYXkoZGF0ZSkuZ2V0VGltZSgpID09PSBlbmRPZk1vbnRoKGRhdGUpLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBwcmV2aW91cyBgcGFyc2VgIGltcGxlbWVudGF0aW9uIHdhcyByZW5hbWVkIHRvIGBwYXJzZUlTT2AuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgcGFyc2UoJzIwMTYtMDEtMDEnKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBwYXJzZUlTTygnMjAxNi0wMS0wMScpXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgdmFsaWRhdGVzIHNlcGFyYXRlIGRhdGUgYW5kIHRpbWUgdmFsdWVzIGluIElTTy04NjAxIHN0cmluZ3NcbiAqICAgYW5kIHJldHVybnMgYEludmFsaWQgRGF0ZWAgaWYgdGhlIGRhdGUgaXMgaW52YWxpZC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgcGFyc2VJU08oJzIwMTgtMTMtMzInKVxuICogICAvLz0+IEludmFsaWQgRGF0ZVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IGRvZXNuJ3QgZmFsbCBiYWNrIHRvIGBuZXcgRGF0ZWAgY29uc3RydWN0b3JcbiAqICAgaWYgaXQgZmFpbHMgdG8gcGFyc2UgYSBzdHJpbmcgYXJndW1lbnQuIEluc3RlYWQsIGl0IHJldHVybnMgYEludmFsaWQgRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzID09IG51bGwgPyAyIDogdG9JbnRlZ2VyKG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyk7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlzdEZvcm1Nb2RhbFN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlzdEZvcm1Nb2RhbFN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrRm9ybU1vZGFsU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrRm9ybU1vZGFsU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBMaXN0SXRlbU9iaiBmcm9tICcuL0xpc3RJdGVtT2JqLmpzJztcbmltcG9ydCBkYXRhRXZlbnRzIGZyb20gXCIuL2RhdGFFdmVudHMuanNcIjtcbmltcG9ydCB0YXNrRm9ybU1vZGFsIGZyb20gXCIuL3Rhc2tGb3JtTW9kYWwuanNcIjtcbmltcG9ydCBsaXN0Rm9ybU1vZGFsIGZyb20gXCIuL2xpc3RGb3JtTW9kYWwuanNcIjtcblxuaW1wb3J0IExpc3RJbWcgZnJvbSAnLi96X2ltZy9saXN0S2FydC5wbmcnO1xuaW1wb3J0IE1lbnVJbWcgZnJvbSAnLi96X2ltZy9tZW51LnBuZyc7XG5pbXBvcnQgRmFjZVN3ZWF0SW1nIGZyb20gJy4vel9pbWcvb3ZlcmR1ZUZhY2VTd2VhdC5wbmcnO1xuaW1wb3J0IE5ld0xhbWJJbWcgZnJvbSAnLi96X2ltZy9uZXdMYW1iLnBuZyc7XG5pbXBvcnQgQVdlZWtBd2F5SW1nIGZyb20gJy4vel9pbWcvMXdlZWtDYWxlbmRhci5wbmcnO1xuaW1wb3J0IE92ZXJBV2Vla0F3YXlJbWcgZnJvbSAnLi96X2ltZy9vdmVyMVdlZWtUaW1lTWFjaGluZS5wbmcnO1xuaW1wb3J0IE5vRHVlRGF0ZUltZyBmcm9tICcuL3pfaW1nL25vRHVlRGF0ZVRoaW5raW5nLnBuZyc7XG5pbXBvcnQgQ29tcGxldGVkSW1nIGZyb20gJy4vel9pbWcvY29tcGxldGVMYW5kZWQucG5nJztcblxuaW1wb3J0IFBlbmNpbEltZyBmcm9tICcuL3pfaW1nL3BlbmNpbC5wbmcnO1xuaW1wb3J0IFRyYXNoSW1nIGZyb20gJy4vel9pbWcvdHJhc2gucG5nJztcbmltcG9ydCBDaGVja0JveEltZyBmcm9tICcuL3pfaW1nL2NoZWNrYm94LnBuZyc7XG5pbXBvcnQgQ2hlY2tCb3hVbmNoZWNrZWRJbWcgZnJvbSAnLi96X2ltZy91bmNoZWNrZWRib3gucG5nJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb21FdmVudHMoKSB7ICBcblxuICAgIGNvbnN0IGRhdGFFdmVudHNPYmogPSBkYXRhRXZlbnRzKCk7XG4gICAgY29uc3QgbGlzdEl0ZW1PYmplY3QgPSBMaXN0SXRlbU9iaigpO1xuICAgIGNvbnN0IHRhc2tGb3JtTW9kYWxPYmplY3QgPSB0YXNrRm9ybU1vZGFsKCk7XG4gICAgY29uc3QgbGlzdEZvcm1Nb2RhbE9iamVjdCA9IGxpc3RGb3JtTW9kYWwoKTtcblxuY29uc3QgaW5pdGlhbFNldFVwID0gKCkgPT4ge1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGVudFwiKVxuICAgIGNvbnN0IHRoZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICB0aGVCb2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpOyAgXG4gICAgXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIG1haW5Db250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcIm1haW5Db250YWluZXJEaXZcIik7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyRGl2KTtcblxuICAgIGNvbnN0IGxlZnRNZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0TWVudU5hdi5jbGFzc0xpc3QuYWRkKFwibGVmdE1lbnVcIik7XG4gICAgbWFpbkNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChsZWZ0TWVudU5hdik7XG4gICAgXG4gICAgY29uc3QgYnVyZ2VyRmx5T3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYnV0dG9uYCk7XG4gICAgYnVyZ2VyRmx5T3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXJnZXJGbHlPdXRCdXR0b25cIik7XG4gICAgbGVmdE1lbnVOYXYuYXBwZW5kQ2hpbGQoYnVyZ2VyRmx5T3V0QnV0dG9uKTtcblxuICAgIGNvbnN0IGJ1cmdlckZseU91dEltZ0VsZSA9IG5ldyBJbWFnZSgpO1xuICAgIGJ1cmdlckZseU91dEltZ0VsZS5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyRmx5T3V0XCIpO1xuICAgIGJ1cmdlckZseU91dEltZ0VsZS5hbHQgPSBcIlNob3cgTWVudVwiO1xuICAgIGJ1cmdlckZseU91dEltZ0VsZS5zcmMgPSBNZW51SW1nO1xuICAgIGJ1cmdlckZseU91dEJ1dHRvbi5hcHBlbmRDaGlsZChidXJnZXJGbHlPdXRJbWdFbGUpO1xuICAgIGJ1cmdlckZseU91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIChlKSA9PiB7XG4gICAgICAgIHRvZ2dsZUxlZnRNZW51U2hvdyhgZmx5T3V0YCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsZWZ0TWVudVByb2plY3RJdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbGVmdE1lbnVQcm9qZWN0SXRlbUxpc3QuY2xhc3NMaXN0LmFkZChcImxlZnRNZW51UHJvamVjdEl0ZW1MaXN0XCIpO1xuICAgIGxlZnRNZW51TmF2LmFwcGVuZENoaWxkKGxlZnRNZW51UHJvamVjdEl0ZW1MaXN0KTtcbiAgIFxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFnZUxpc3RDb250YWluZXJcIik7XG4gICAgbWFpbkNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250YWluZXIpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5hdkJhci5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0Q29udGVudE5hdkJhclwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE5hdkJhcik7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0Q29udGVudFwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudCk7XG4gICAgXG4gICAgYWRkVGltZUJhc2VkQnJlYWtQb2ludHMoKTtcblxuXG4gICAgY29uc3QgbmF2QWRkTmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmF2QWRkTmV3SXRlbS50ZXh0Q29udGVudCA9IFwiTmV3IExpc3QgKytcIjtcbiAgICBuYXZBZGROZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJuYXZBZGROZXdJdGVtXCIpO1xuICAgIGxlZnRNZW51UHJvamVjdEl0ZW1MaXN0Lmluc2VydEJlZm9yZShuYXZBZGROZXdJdGVtLCBsZWZ0TWVudVByb2plY3RJdGVtTGlzdC5maXJzdENoaWxkKTtcbiAgICBcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA9PSAwICkge1xuICAgICAgICBhZGREZWZhdWx0VG9Eb0xpc3QoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgTGVmdE1lbnVMaXN0SXRlbXMgPSBkYXRhRXZlbnRzT2JqLmdldExpc3RJdGVtRGV0YWlscyhcImlzUGFyZW50XCIsIG51bGwpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTGVmdE1lbnVMaXN0SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGhpc0l0ZW0gPSBkYXRhRXZlbnRzT2JqLmNyZWF0ZUxpc3RPYmplY3RGcm9tU3RvcmFnZShMZWZ0TWVudUxpc3RJdGVtc1tpXSk7XG4gICAgICAgIGNvbnN0IGxlZnRNZW51UHJvamVjdEl0ZW0gPSBhZGRMaXN0SXRlbVRvTWVudSh0aGlzSXRlbSwgdHJ1ZSk7XG4gICAgICAgIHNob3dMZWZ0TWVudVNlbGVjdGVkKGxlZnRNZW51UHJvamVjdEl0ZW0sIHRoaXNJdGVtLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXNJdGVtLnNlbGVjdGVkID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXNJdGVtLmRpc3BsYXlDaGlsZExpc3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdGFza0Zvcm1Nb2RhbE9iamVjdC5jcmVhdGVGb3JtKCk7XG4gICAgbGlzdEZvcm1Nb2RhbE9iamVjdC5jcmVhdGVGb3JtKCk7XG5cbn1cblxuZnVuY3Rpb24gYWRkRGVmYXVsdFRvRG9MaXN0KCkge1xuICAgIGNvbnN0IG5ld0xpc3RJdGVtID0gbGlzdEl0ZW1PYmplY3QubmV3TGlzdEl0ZW0oXG4gICAgICAgIE5hTiwgXG4gICAgICAgIFwiVG8gRG8gTGlzdFwiLCBcbiAgICAgICAgXCJcIiwgXG4gICAgICAgIDEsIFxuICAgICAgICBmYWxzZSwgXG4gICAgICAgICdwYXJlbnQnLCBcbiAgICAgICAgdHJ1ZSwgXG4gICAgICAgIHRydWUsXG4gICAgICAgIGZhbHNlKTtcblxuICAgIG5ld0xpc3RJdGVtLmFkZEl0ZW10b0RCKCk7XG59XG5cbmNvbnN0IHJlcG9zaXRpb25OZXdMaXN0QnV0dG9uID0gKGUpID0+IHtcbiAgICBjb25zdCBuZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hdkFkZE5ld0l0ZW1gKTsgXG4gICAgY29uc3QgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGVmdE1lbnVQcm9qZWN0SXRlbUxpc3RgKTtcbiAgICBsZWZ0TWVudS5pbnNlcnRCZWZvcmUobmV3TGlzdEJ1dHRvbiwgbGVmdE1lbnUuZmlyc3RDaGlsZCk7XG59XG5cbmNvbnN0IGFkZFRpbWVCYXNlZEJyZWFrUG9pbnRzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYWluUGFnZUxpc3RDb250ZW50YCk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcImNvbnRlbnRCcmVha1BvaW50XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbVwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtSGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtSGVhZGluZ0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtSW1nLmNsYXNzTGlzdC5hZGQoYGNvbnRlbnRCcmVha1BvaW50SW1nYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1JbWcuYWx0ID0gXCJOZXdcIjtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbUltZy5zcmMgPSBOZXdMYW1iSW1nO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtSGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbUltZyk7XG4gICAgXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1IZWFkaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgyYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1IZWFkaW5nVGV4dC50ZXh0Q29udGVudCA9IFwiTmV3XCI7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1IZWFkaW5nVGV4dC5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ1RleHRgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbUhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1IZWFkaW5nVGV4dCk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRCcmVha1BvaW50XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZVwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSXRlbUhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZUl0ZW1IZWFkaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYGJyZWFrUG9pbnRIZWFkaW5nYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWUuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWVJdGVtSGVhZGluZ0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSW1nLmNsYXNzTGlzdC5hZGQoYGNvbnRlbnRCcmVha1BvaW50SW1nYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWVJbWcuYWx0ID0gXCJPdmVyZHVlXCI7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWVJbWcuc3JjID0gRmFjZVN3ZWF0SW1nO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSXRlbUhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWVJbWcpO1xuICBcbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoMmApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3ZlcmR1ZVwiO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSGVhZGluZy5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSXRlbUhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWVIZWFkaW5nKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50QnJlYWtQb2ludFwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWsuY2xhc3NMaXN0LmFkZChcIm1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla1wiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vlayk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtIZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrSGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vlay5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtIZWFkaW5nQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla0ltZy5jbGFzc0xpc3QuYWRkKGBjb250ZW50QnJlYWtQb2ludEltZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla0ltZy5hbHQgPSBcIkR1ZSB0aGlzIHdlZWtcIjtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtJbWcuc3JjID0gQVdlZWtBd2F5SW1nO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla0hlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrSW1nKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoMmApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkluIHRoZSBuZXh0IHdlZWtcIjtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtIZWFkaW5nLmNsYXNzTGlzdC5hZGQoYGJyZWFrUG9pbnRIZWFkaW5nYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrSGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtIZWFkaW5nKTtcblxuICAgIFxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2Vlay5jbGFzc0xpc3QuYWRkKFwiY29udGVudEJyZWFrUG9pbnRcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWsuY2xhc3NMaXN0LmFkZChcIm1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrXCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnQuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWspO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtIZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtIZWFkaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYGJyZWFrUG9pbnRIZWFkaW5nYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWsuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtIZWFkaW5nQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrSW1nID0gbmV3IEltYWdlKCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtJbWcuY2xhc3NMaXN0LmFkZChgY29udGVudEJyZWFrUG9pbnRJbWdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2Vla0ltZy5hbHQgPSBcIkR1ZSBvdmVyIGEgd2VlayBhd2F5XCI7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtJbWcuc3JjID0gT3ZlckFXZWVrQXdheUltZztcbiAgICBtYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2Vla0hlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtJbWcpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaDJgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2Vla0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1vcmUgdGhhbiBhIHdlZWsgYXdheVwiO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrSGVhZGluZy5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrSGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2Vla0hlYWRpbmcpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldC5jbGFzc0xpc3QuYWRkKFwiY29udGVudEJyZWFrUG9pbnRcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldC5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldFwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXQpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldEhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXQuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldEhlYWRpbmdDb250YWluZXIpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXRJbWcuY2xhc3NMaXN0LmFkZChgY29udGVudEJyZWFrUG9pbnRJbWdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SW1nLmFsdCA9IFwiRHVlIG92ZXIgYSB3ZWVrIGF3YXlcIjtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SW1nLnNyYyA9IE5vRHVlRGF0ZUltZztcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SW1nKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXRIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaDJgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SGVhZGluZy50ZXh0Q29udGVudCA9IFwiTm8gZHVlIGRhdGVcIjtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SGVhZGluZy5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXRIZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXRIZWFkaW5nKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50QnJlYWtQb2ludFwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGUuY2xhc3NMaXN0LmFkZChcIm1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZVwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZSk7XG5cblxuXG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVIZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlSGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZS5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVIZWFkaW5nQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZUltZy5jbGFzc0xpc3QuYWRkKGBjb250ZW50QnJlYWtQb2ludEltZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZUltZy5hbHQgPSBcIkR1ZSBvdmVyIGEgd2VlayBhd2F5XCI7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlSW1nLnNyYyA9IENvbXBsZXRlZEltZztcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVIZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZUltZyk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaDJgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIjtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoYGJyZWFrUG9pbnRIZWFkaW5nYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlSGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVIZWFkaW5nKTtcbn1cblxuY29uc3QgZGlzcGxheUxpc3RJdGVtQ2hpbGRyZW4gPSAobGlzdEl0ZW0pID0+IHtcbiAgICBjb25zdCBsaXN0TWVudUNoaWxkcmVuID0gZGF0YUV2ZW50c09iai5nZXRMaXN0SXRlbURldGFpbHMoXCJnZXRMaXN0SXRlbUNoaWxkcmVuXCIsIGxpc3RJdGVtLklEKTtcbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluUGFnZUxpc3RDb250ZW50XCIpO1xuICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBjb250ZW50IGJlZm9yZSBwb3B1bGF0aW5nXG4gICAgd2hpbGUgKG1haW5QYWdlTGlzdENvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBtYWluUGFnZUxpc3RDb250ZW50LnJlbW92ZUNoaWxkKG1haW5QYWdlTGlzdENvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIFxuICAgIGFkZFRpbWVCYXNlZEJyZWFrUG9pbnRzKCk7XG5cbiAgICBjb25zdCBwcmV2aW91c0hlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RUaXRsZVwiKTtcbiAgICBpZiAoIHByZXZpb3VzSGVhZGluZyAhPSBudWxsICkge1xuICAgICAgICBwcmV2aW91c0hlYWRpbmcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblBhZ2VMaXN0Q29udGVudE5hdkJhclwiKTtcbiAgICBjb25zdCBwYXJlbnRUaXRsZSA9IGxpc3RJdGVtLnRpdGxlO1xuICAgIGNvbnN0IHBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBwYWdlVGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3RUaXRsZVwiKTtcbiAgICBwYWdlVGl0bGUudGV4dENvbnRlbnQgPSBwYXJlbnRUaXRsZTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmF2QmFyLmFwcGVuZENoaWxkKHBhZ2VUaXRsZSk7XG4gICAgXG5cbiAgICAvLyBpZiB0aGlzIGlzIHRoZSBzZWxlY3RlZCBtZW51LCBzaG93IHRoZSBjaGlsZHJlblxuICAgIGlmIChsaXN0SXRlbS5zZWxlY3RlZCA9PSB0cnVlICkge1xuICAgICAgICBpZiAobGlzdE1lbnVDaGlsZHJlbi5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBsaXN0TWVudUNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRMaXN0SXRlbU9iamVjdCA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKGxpc3RNZW51Q2hpbGRyZW5baXRlbV0pO1xuICAgICAgICAgICAgICAgIGNyZWF0ZU1haW5QYWdlTGlzdGluZ0Zvcm0oY2hpbGRMaXN0SXRlbU9iamVjdCk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBjaGlsZHJlbiB0byBkaXNwbGF5LCBjcmVhdGUgYSBuZXcgb25lIHJlYWR5IGZvciBlZGl0aW5nOlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNyZWF0ZUVtcHR5TGlzdEl0ZW0obGlzdEl0ZW0uSUQpO1xuICAgICAgICB9XG4gICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbkFkZEFub3RoZXJNYWluUGFnZUxpc3RJdGVtXCIpO1xuICAgIGlmICggcHJldmlvdXNCdXR0b24gIT0gbnVsbCApIHtcbiAgICAgICAgcHJldmlvdXNCdXR0b24ucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGJ1dHRvbkFkZEFub3RoZXJMaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uQWRkQW5vdGhlckxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJidXR0b25BZGRBbm90aGVyTWFpblBhZ2VMaXN0SXRlbVwiKTtcbiAgICBidXR0b25BZGRBbm90aGVyTGlzdEl0ZW0udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIjtcbiAgICBidXR0b25BZGRBbm90aGVyTGlzdEl0ZW0uYWx0ID0gXCJBZGQgYSB0YXNrIHRvIHRoaXMgbGlzdFwiO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROYXZCYXIuYXBwZW5kQ2hpbGQoYnV0dG9uQWRkQW5vdGhlckxpc3RJdGVtKTtcbiAgICBidXR0b25BZGRBbm90aGVyTGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY3JlYXRlRW1wdHlMaXN0SXRlbShsaXN0SXRlbS5JRCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmNvbnN0IGNyZWF0ZUVtcHR5TGlzdEl0ZW0gPSAocGFyZW50SUQpID0+IHtcbiAgICBjb25zdCBhZGRpdGlvbmFsTGlzdEl0ZW0gPSBsaXN0SXRlbU9iamVjdC5uZXdMaXN0SXRlbShcbiAgICBOYU4sIFxuICAgIFwiXCIsIFxuICAgIFwiXCIsIFxuICAgIDEsIFxuICAgIGZhbHNlLCBcbiAgICBwYXJlbnRJRCwgXG4gICAgZmFsc2UsXG4gICAgZmFsc2UsXG4gICAgZmFsc2UpO1xuXG4gICAgYWRkaXRpb25hbExpc3RJdGVtLmFkZEl0ZW10b0RCKCk7XG5cbiAgICBjb25zdCBuZXdFbXB0eUl0ZW1Gb3JtID0gY3JlYXRlTWFpblBhZ2VMaXN0aW5nRm9ybShhZGRpdGlvbmFsTGlzdEl0ZW0pO1xuICAgIG5ld0VtcHR5SXRlbUZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xuXG4gICAgfVxuXG5jb25zdCBzaG93QnJlYWtQb2ludENsYXNzID0gKGUpID0+IHtcbiAgICBpZiAoIWUuY2xhc3NMaXN0LmNvbnRhaW5zKGBjb250ZW50QnJlYWtQb2ludFNob3dgKSkge1xuICAgICAgICBlLmNsYXNzTGlzdC5hZGQoYGNvbnRlbnRCcmVha1BvaW50U2hvd2ApO1xuICAgIH1cbn1cblxuY29uc3QgcmVmcmVzaEJyZWFrUG9pbnRIZWFkaW5nID0gKGUpID0+IHtcbiAgICAvLyBBZnRlciBhIGNhcmQgaXMgY3JlYXRlZCwgaXQgaXMgYXBwZW5kZWQgdG8gdGhlIGJyZWFrcG9pbnQgc2VjdGlvbiBhcyB0aGUgZmlyc3QgY2hpbGQuICBcbiAgICAvLyBUaGVyZWZvcmUsICBhZnRlciBjcmVhdGlvbiwgd2UgbmVlZCB0byBtb3ZlIHRoZSBoZWFkZXIgYmFjayB0byB0aGUgdG9wIG9mIHRoZSBzZWN0aW9uLlxuICAgICAgY29uc3QgbW92ZVRoaXNIZWFkZXIgPSBlLnF1ZXJ5U2VsZWN0b3IoYC5icmVha1BvaW50SGVhZGluZ2ApO1xuICAgICAgZS5pbnNlcnRCZWZvcmUobW92ZVRoaXNIZWFkZXIsIGUuZmlyc3RDaGlsZCk7XG59XG5cbmNvbnN0IGNyZWF0ZU1haW5QYWdlTGlzdGluZ0Zvcm0gPSAobGlzdEl0ZW0pID0+IHtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBsaXN0SXRlbS5kYXlzTGVmdFRvRHVlKCk7XG4gICAgbGV0IGFwcGVuZFRvVGhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblBhZ2VMaXN0Q29udGVudFwiKTtcbiAgICBcbiAgICBpZiAoIGxpc3RJdGVtLmNvbXBsZXRlZCA9PSB0cnVlICkge1xuICAgICAgICBhcHBlbmRUb1RoaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlYCk7XG4gICAgICAgIHNob3dCcmVha1BvaW50Q2xhc3MoYXBwZW5kVG9UaGlzKTtcbiAgICB9IGVsc2UgaWYgKCBsaXN0SXRlbS5jb21taXR0ZWQgPT0gZmFsc2UgKSB7XG4gICAgICAgIGFwcGVuZFRvVGhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbWApO1xuICAgICAgICBzaG93QnJlYWtQb2ludENsYXNzKGFwcGVuZFRvVGhpcyk7XG4gICAgfSBlbHNlIGlmICggZHVlRGF0ZS5kYXlzVW50aWxEdWUgPCAwICkge1xuICAgICAgICBhcHBlbmRUb1RoaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWVgKTtcbiAgICAgICAgc2hvd0JyZWFrUG9pbnRDbGFzcyhhcHBlbmRUb1RoaXMpO1xuICAgIH0gZWxzZSBpZiAoIGR1ZURhdGUuZGF5c1VudGlsRHVlID4gMCAmJiBkdWVEYXRlLmRheXNVbnRpbER1ZSA8PSA3ICkge1xuICAgICAgICBhcHBlbmRUb1RoaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrYCk7XG4gICAgICAgIHNob3dCcmVha1BvaW50Q2xhc3MoYXBwZW5kVG9UaGlzKTtcbiAgICB9IGVsc2UgaWYgKCBkdWVEYXRlLmRheXNVbnRpbER1ZSA+IDcpIHtcbiAgICAgICAgYXBwZW5kVG9UaGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrYCk7XG4gICAgICAgIHNob3dCcmVha1BvaW50Q2xhc3MoYXBwZW5kVG9UaGlzKTtcbiAgICB9IGVsc2UgaWYgKCBkdWVEYXRlLmRheXNVbnRpbER1ZSA9PSAwKSB7XG4gICAgICAgIGFwcGVuZFRvVGhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0YCk7XG4gICAgICAgIHNob3dCcmVha1BvaW50Q2xhc3MoYXBwZW5kVG9UaGlzKTtcbiAgICB9XG4gICBcbiAgICBjb25zdCBtYWluUGFnZUxpc3RJdGVtQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBhZ2VMaXN0SXRlbUNhcmQuY2xhc3NMaXN0LmFkZChcIm1haW5QYWdlTGlzdEl0ZW1DYXJkXCIpO1xuICAgIGFwcGVuZFRvVGhpcy5pbnNlcnRCZWZvcmUobWFpblBhZ2VMaXN0SXRlbUNhcmQsIGFwcGVuZFRvVGhpcy5maXJzdENoaWxkKVxuXG4gICAgcmVmcmVzaEJyZWFrUG9pbnRIZWFkaW5nKGFwcGVuZFRvVGhpcyk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RJdGVtQ29udGVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5QYWdlTGlzdEl0ZW1Db250ZW50TGVmdC5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRMZWZ0XCIpO1xuICAgIG1haW5QYWdlTGlzdEl0ZW1DYXJkLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdEl0ZW1Db250ZW50TGVmdCk7XG5cbiAgICBsZXQgbGlzdEl0ZW1Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgbGlzdEl0ZW1Gb3JtLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFnZUxpc3RJdGVtRm9ybVwiKTtcbiAgICBsaXN0SXRlbUZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1wYXJlbnRMaXN0XCIsIGxpc3RJdGVtLnBhcmVudExpc3QpO1xuICAgIGxpc3RJdGVtRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWl0ZW1pZFwiLCBsaXN0SXRlbS5JRCk7XG4gICAgbGlzdEl0ZW1Gb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgbGlzdEl0ZW1Gb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIiNcIik7XG4gICAgXG4gICAgbWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKGxpc3RJdGVtRm9ybSk7XG4gICAgXG4gICAgXG4gICAgbGlzdEl0ZW1Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiBcbiAgICBsZXQgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkxpc3QgSXRlbSBUaXRsZVwiKTtcbiAgICBpbnB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0Rm9ybVRpdGxlVGV4dFwiKTtcblxuICAgICBpZiAoIGxpc3RJdGVtLnRpdGxlID09IFwiXCIgKSB7XG4gICAgICAgIC8vIGlucHV0VGl0bGUucGxhY2Vob2xkZXIgPSBgJHtsaXN0SXRlbS5JRH0gLSBUYXNrIFRpdGxlIGA7XG4gICAgICAgIGlucHV0VGl0bGUucGxhY2Vob2xkZXIgPSBgVGFzayBUaXRsZSBgO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlucHV0VGl0bGUudmFsdWUgPSAgYCR7bGlzdEl0ZW0uSUR9IC0gYCArIGxpc3RJdGVtLnRpdGxlO1xuICAgICAgICBpbnB1dFRpdGxlLnZhbHVlID0gIGxpc3RJdGVtLnRpdGxlO1xuICAgIH1cbiAgICBcbiAgICBsaXN0SXRlbUZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgIFxuICAgIGxldCBmb3JtRGlzcGxheUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGZvcm1EaXNwbGF5RHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke2R1ZURhdGUuZGF5c1VudGlsRHVlV29yZHN9YDtcbiAgICBmb3JtRGlzcGxheUR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImZvcm1EaXNwbGF5RHVlRGF0ZVwiKTtcbiAgICBtYWluUGFnZUxpc3RJdGVtQ29udGVudExlZnQuYXBwZW5kQ2hpbGQoZm9ybURpc3BsYXlEdWVEYXRlKTtcbiAgICBpZiAoIGxpc3RJdGVtLnRpdGxlLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIGZvcm1EaXNwbGF5RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZm9ybURpc3BsYXlEdWVEYXRlU2hvd1wiKTtcbiAgICAgICAgaWYgKCBsaXN0SXRlbS5jb21wbGV0ZWQgPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIGZvcm1EaXNwbGF5RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZm9ybURpc3BsYXlEdWVEYXRlQ29tcGxldGVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RJdGVtQ29udGVudFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUGFnZUxpc3RJdGVtQ29udGVudFJpZ2h0LmNsYXNzTGlzdC5hZGQoXCJtYWluUGFnZUxpc3RJdGVtQ29udGVudFJpZ2h0XCIpO1xuICAgIG1haW5QYWdlTGlzdEl0ZW1DYXJkLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdEl0ZW1Db250ZW50UmlnaHQpO1xuXG4gICAgY29uc3QgY2hlY2tCb3hJbWdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKTtcbiAgICBjaGVja0JveEltZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKGBjaGVja0JveEltZ0J1dHRvbmApO1xuICAgIGNoZWNrQm94SW1nQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0Rm9ybUFjdGlvbkJ1dHRvblwiKTtcbiAgICBtYWluUGFnZUxpc3RJdGVtQ29udGVudFJpZ2h0LmFwcGVuZENoaWxkKGNoZWNrQm94SW1nQnV0dG9uKTtcblxuICAgIFxuICAgIGNvbnN0IGNoZWNrQm94SW1nRWxlID0gbmV3IEltYWdlKCk7XG4gICAgaWYgKCBsaXN0SXRlbS5jb21wbGV0ZWQgPT0gdHJ1ZSApIHtcbiAgICAgICAgY2hlY2tCb3hJbWdFbGUuc3JjID0gQ2hlY2tCb3hJbWc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tCb3hJbWdFbGUuc3JjID0gQ2hlY2tCb3hVbmNoZWNrZWRJbWc7XG4gICAgfVxuICAgIGNoZWNrQm94SW1nRWxlLmNsYXNzTGlzdC5hZGQoYGNoZWNrQm94SW1nRWxlYCk7XG4gICAgY2hlY2tCb3hJbWdFbGUuYWx0ID0gXCJDaGVja2JveDogTWFyayB0aGlzIGVudHJ5IGFzIGNvbXBsZXRlXCI7XG4gICAgY2hlY2tCb3hJbWdCdXR0b24uYXBwZW5kQ2hpbGQoY2hlY2tCb3hJbWdFbGUpO1xuICAgIGNoZWNrQm94SW1nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRsaXN0SXRlbUNhcmQgPSBlLnRhcmdldC5jbG9zZXN0KGAubWFpblBhZ2VMaXN0SXRlbUNhcmRgKTtcbiAgICAgICAgY29uc3QgY29tcGxldGVkQnJlYWtQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVgKTtcbiAgICAgICAgbGlzdEl0ZW0uY29tcGxldGVkID0gIWxpc3RJdGVtLmNvbXBsZXRlZDtcbiAgICAgICAgbGlzdEl0ZW0uYWRkSXRlbXRvREIoKTtcbiAgICAgICAgY29uc3QgcGFyZW50U3RvcmVkSXRlbSA9IGRhdGFFdmVudHNPYmouZ2V0TGlzdEl0ZW1EZXRhaWxzKFwiZ2V0MUl0ZW1cIiwgbGlzdEl0ZW0ucGFyZW50TGlzdCk7XG4gICAgICAgIGNvbnN0IHBhcmVudE9iamVjdCA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKHBhcmVudFN0b3JlZEl0ZW0pO1xuICAgICAgICBwYXJlbnRPYmplY3QuZGlzcGxheUNoaWxkTGlzdCgpO1xuICAgICAgICBcbiAgICB9KTtcblxuICAgIGNvbnN0IHBlbmNpbEltZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJ1dHRvbmApO1xuICAgIHBlbmNpbEltZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKGBwZW5jaWxJbWdCdXR0b25gKTtcbiAgICBwZW5jaWxJbWdCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3RGb3JtQWN0aW9uQnV0dG9uXCIpO1xuICAgIG1haW5QYWdlTGlzdEl0ZW1Db250ZW50UmlnaHQuYXBwZW5kQ2hpbGQocGVuY2lsSW1nQnV0dG9uKTtcblxuICAgIGNvbnN0IHBlbmNpbEltZ0VsZSA9IG5ldyBJbWFnZSgpO1xuICAgIHBlbmNpbEltZ0VsZS5zcmMgPSBQZW5jaWxJbWc7XG4gICAgcGVuY2lsSW1nRWxlLmNsYXNzTGlzdC5hZGQoYHBlbmNpbEltZ0VsZWApO1xuICAgIHBlbmNpbEltZ0VsZS5hbHQgPSBcIlBlbmNpbDogRWRpdCB0aGlzIGVudHJ5XCI7XG4gICAgcGVuY2lsSW1nQnV0dG9uLmFwcGVuZENoaWxkKHBlbmNpbEltZ0VsZSk7XG5cbiAgICBjb25zdCB0cmFzaEltZ0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJ1dHRvbmApO1xuICAgIHRyYXNoSW1nQnV0dG9uLmNsYXNzTGlzdC5hZGQoYHRyYXNoSW1nQnV0dG9uYCk7XG4gICAgdHJhc2hJbWdCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpc3RGb3JtQWN0aW9uQnV0dG9uXCIpO1xuICAgIG1haW5QYWdlTGlzdEl0ZW1Db250ZW50UmlnaHQuYXBwZW5kQ2hpbGQodHJhc2hJbWdCdXR0b24pO1xuXG4gICAgY29uc3QgdHJhc2hJbWdFbGUgPSBuZXcgSW1hZ2UoKTtcbiAgICB0cmFzaEltZ0VsZS5zcmMgPSBUcmFzaEltZztcbiAgICB0cmFzaEltZ0VsZS5hbHQgPSBcIkJpbjogRGVsZXRlIHRoaXMgZW50cnlcIjtcbiAgICB0cmFzaEltZ0VsZS5jbGFzc0xpc3QuYWRkKGB0cmFzaEltZ0VsZWApO1xuICAgIHRyYXNoSW1nQnV0dG9uLmFwcGVuZENoaWxkKHRyYXNoSW1nRWxlKTtcblxuICAgIGNvbnN0IHVwZGF0ZUhhc1NhdmVkTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHVwZGF0ZUhhc1NhdmVkTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidXBkYXRlSGFzU2F2ZWRNZXNzYWdlXCIpO1xuICAgIHVwZGF0ZUhhc1NhdmVkTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiU2F2ZWRcIjtcbiAgICB1cGRhdGVIYXNTYXZlZE1lc3NhZ2Uuc2V0QXR0cmlidXRlKFwiZGF0YS1zYXZlZHRhZ1wiLCBsaXN0SXRlbS5JRCk7XG4gICAgbWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRSaWdodC5hcHBlbmRDaGlsZCh1cGRhdGVIYXNTYXZlZE1lc3NhZ2UpO1xuXG4gICAgaW5wdXRUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIHdyaXRlIGFueSBjaGFuZ2VzIG1hZGUgZGlyZWN0bHkgdG8gc3RvcmFnZVxuICAgICAgICBpZiAoIGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIGxpc3RJdGVtLnRpdGxlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGxpc3RJdGVtLmNvbW1pdHRlZCA9IHRydWU7XG4gICAgICAgIGxpc3RJdGVtLmFkZEl0ZW10b0RCKGxpc3RJdGVtKTtcbiAgICAgICAgLy8gbm90IHZhbGlkYXRlZCBhcyBjb21wbGV0ZSBidXQgbm8gdHdvLXdheSBjb21tcyBoZXJlLiAgSXQgc2hvdWxkIHJlYWxseSBoYXZlIGEgdGVzdCB0byBjb25maXJtIHRoaXMgaGFzIGJlZW4gZG9uZSBjb3JyZWN0bHk6XG4gICAgICAgIGNvbnN0IGl0ZW1TYXZlZE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBwW2RhdGEtc2F2ZWR0YWc9XCIke2xpc3RJdGVtLklEfVwiXWApO1xuICAgICAgICBpdGVtU2F2ZWRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJ1cGRhdGVIYXNTYXZlZE1lc3NhZ2VTaG93XCIpO1xuICAgICAgICBpdGVtU2F2ZWRNZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaXRlbVNhdmVkTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwidXBkYXRlSGFzU2F2ZWRNZXNzYWdlU2hvd1wiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlbGF0ZWREdWVEYXRlVGV4dCA9IGUudGFyZ2V0LmNsb3Nlc3QoYC5tYWluUGFnZUxpc3RJdGVtQ29udGVudExlZnRgKS5xdWVyeVNlbGVjdG9yKGAuZm9ybURpc3BsYXlEdWVEYXRlYCk7XG4gICAgICAgIHJlbGF0ZWREdWVEYXRlVGV4dC5jbGFzc0xpc3QuYWRkKGBmb3JtRGlzcGxheUR1ZURhdGVTaG93YCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIG1haW5QYWdlTGlzdEl0ZW1DYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkgeyBcbiAgICAgICAgLy8gaWYgdGhlIGl0ZW0gdGhhdCB3YXMgY2xpY2tlZCBpcyBiZWluZyBkZWxldGVkLCBkb24ndCBhdHRlbXB0IHRvIG1hcmsgaXQgYXMgc2VsZWN0ZWRcbiAgICAgICAgaWYgKCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0cmFzaEltZ0J1dHRvblwiKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0cmFzaEltZ0VsZVwiKSkgeyBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtYXJrTWFpblBhZ2VMaXN0aW5nQ2FyZEFzU2VsZWN0ZWQoZS50YXJnZXQuY2xvc2VzdCgnLm1haW5QYWdlTGlzdEl0ZW1DYXJkJykpO1xuICAgIH0pO1xuXG4gICAgdHJhc2hJbWdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7ICAgIFxuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoYC5tYWluUGFnZUxpc3RJdGVtQ2FyZGApO1xuICAgICAgICBpZiAoY29uZmlybShgRGVsZXRlOiBcXG5cXG5UaXRsZTogJHtsaXN0SXRlbS50aXRsZX1gKSA9PSB0cnVlICkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uZGVsZXRlRnJvbURCKCk7XG4gICAgICAgIH0gICAgXG4gICAgfSk7XG5cbiAgICBtYWluUGFnZUxpc3RJdGVtQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0SXRlbUNhcmRNb3VzZUluc2lkZVwiKTtcbiAgICB9KTtcblxuICAgIG1haW5QYWdlTGlzdEl0ZW1DYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIChlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJtYWluUGFnZUxpc3RJdGVtQ2FyZE1vdXNlSW5zaWRlXCIpO1xuICAgIH0pO1xuXG4gICAgZm9ybURpc3BsYXlEdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0YXNrRm9ybU1vZGFsT2JqZWN0LnVwZGF0ZUlucHV0VmFsdWVzKGxpc3RJdGVtKTtcbiAgICAgICAgdGFza0Zvcm1Nb2RhbE9iamVjdC5zaG93Rm9ybShsaXN0SXRlbSk7XG4gICAgICB9KTtcbiAgICBwZW5jaWxJbWdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdGFza0Zvcm1Nb2RhbE9iamVjdC51cGRhdGVJbnB1dFZhbHVlcyhsaXN0SXRlbSk7XG4gICAgdGFza0Zvcm1Nb2RhbE9iamVjdC5zaG93Rm9ybSgpO1xuICAgIH0pO1xuIFxuXG4gICAgICBpZiAoIGxpc3RJdGVtLnNlbGVjdGVkID09IHRydWUgKSB7XG4gICAgICAgIG1hcmtNYWluUGFnZUxpc3RpbmdDYXJkQXNTZWxlY3RlZChtYWluUGFnZUxpc3RJdGVtQ2FyZCk7XG4gICAgICAgIH1cbnJldHVybiBsaXN0SXRlbUZvcm07XG4gIFxufVxuXG5jb25zdCBtYXJrTWFpblBhZ2VMaXN0aW5nQ2FyZEFzU2VsZWN0ZWQgPSAobWFpblBhZ2VMaXN0SXRlbUNhcmQpID0+IHtcbi8vIHJlbW92ZSBwcmV2aW91cyBzZWxlY3Rpb25zXG4gICAgY29uc3QgYWN0aXZlQ2xhc3Nlc1RvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluUGFnZUxpc3RJdGVtQ2FyZEFjdGl2ZVwiKTtcbiAgICBhY3RpdmVDbGFzc2VzVG9SZW1vdmUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBET00gY2xhc3NcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwibWFpblBhZ2VMaXN0SXRlbUNhcmRBY3RpdmVcIilcbiAgICAgICAgLy8gZmluZCB0aGUgc3RvcmFnZSBJRCBhbmQgcmVtb3ZlIHRoZSBTZWxlY3RlZCBzdGF0ZVxuICAgICAgICBjb25zdCBkYXRhSXRlbUlEID0gZS5xdWVyeVNlbGVjdG9yKFwiLm1haW5QYWdlTGlzdEl0ZW1Gb3JtXCIpLmRhdGFzZXQuaXRlbWlkO1xuICAgICAgICAgY29uc3Qgc3RvcmFnZUl0ZW0gPSBkYXRhRXZlbnRzT2JqLmdldExpc3RJdGVtRGV0YWlscyhcImdldDFJdGVtXCIsIGRhdGFJdGVtSUQpO1xuICAgICAgICAgY29uc3QgdGhpc0l0ZW0gPSBkYXRhRXZlbnRzT2JqLmNyZWF0ZUxpc3RPYmplY3RGcm9tU3RvcmFnZShzdG9yYWdlSXRlbSk7XG4gICAgICAgICB0aGlzSXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgdGhpc0l0ZW0uYWRkSXRlbXRvREIoKTtcbiAgICB9KTtcbiAgLy8gc2V0IHRoZSByb3cgdG8gYWN0aXZlIHN0YXRlIHNvIGl0J3MgY2xlYXIgd2hpY2ggaXMgYmVpbmcgZWRpdGVkXG4gICAgICAgIGNvbnN0IGRhdGFJdGVtSUQgPSBtYWluUGFnZUxpc3RJdGVtQ2FyZC5xdWVyeVNlbGVjdG9yKFwiLm1haW5QYWdlTGlzdEl0ZW1Gb3JtXCIpLmRhdGFzZXQuaXRlbWlkO1xuICAgICAgICBjb25zdCBzdG9yYWdlSXRlbSA9IGRhdGFFdmVudHNPYmouZ2V0TGlzdEl0ZW1EZXRhaWxzKFwiZ2V0MUl0ZW1cIiwgZGF0YUl0ZW1JRCk7XG4gICAgICAgIGNvbnN0IHRoaXNJdGVtID0gZGF0YUV2ZW50c09iai5jcmVhdGVMaXN0T2JqZWN0RnJvbVN0b3JhZ2Uoc3RvcmFnZUl0ZW0pO1xuICAgICAgICB0aGlzSXRlbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXNJdGVtLmFkZEl0ZW10b0RCKCk7XG4gICAgICBtYWluUGFnZUxpc3RJdGVtQ2FyZC5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0SXRlbUNhcmRBY3RpdmVcIik7XG59XG5cbmNvbnN0IGFkZExpc3RJdGVtVG9NZW51ID0gKHRoaXNJdGVtKSA9PiB7XG4gICAgY29uc3QgbGVmdE1lbnVQcm9qZWN0SXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRNZW51UHJvamVjdEl0ZW1MaXN0XCIpO1xuICAgIFxuICAgIGNvbnN0IGxlZnRNZW51UHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsZWZ0TWVudVByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJsZWZ0TWVudVByb2plY3RJdGVtXCIpO1xuICAgIGxlZnRNZW51UHJvamVjdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWxpc3RpdGVtaWQnLCB0aGlzSXRlbS5JRCk7XG4gICAgXG4gICAgbGVmdE1lbnVQcm9qZWN0SXRlbUxpc3QuaW5zZXJ0QmVmb3JlKGxlZnRNZW51UHJvamVjdEl0ZW0sIGxlZnRNZW51UHJvamVjdEl0ZW1MaXN0LmZpcnN0Q2hpbGQpO1xuXG4gICAgY29uc3QgTGlzdEltZ0VsZSA9IG5ldyBJbWFnZSgpO1xuICAgIExpc3RJbWdFbGUuY2xhc3NMaXN0LmFkZChcIkxpc3RJbWdFbGVcIik7XG4gICAgTGlzdEltZ0VsZS5hbHQgPSBcImxpc3QgaWNvblwiO1xuICAgIExpc3RJbWdFbGUuc3JjID0gTGlzdEltZztcbiAgICBMaXN0SW1nRWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0aXRlbWlkJywgdGhpc0l0ZW0uSUQpO1xuICAgIGxlZnRNZW51UHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQoTGlzdEltZ0VsZSk7XG4gICAgXG4gICAgY29uc3QgbGVmdE1lbnVJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZWZ0TWVudUl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKFwibGVmdE1lbnVQcm9qZWN0SXRlbVRleHRcIik7XG4gICAgbGVmdE1lbnVJdGVtVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzSXRlbS50aXRsZTtcbiAgICBsZWZ0TWVudUl0ZW1UaXRsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdGl0ZW1pZCcsIHRoaXNJdGVtLklEKTtcbiAgICBsZWZ0TWVudVByb2plY3RJdGVtLmFwcGVuZENoaWxkKGxlZnRNZW51SXRlbVRpdGxlKTtcblxuICAgIGxlZnRNZW51UHJvamVjdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxpc3RGb3JtTW9kYWxPYmplY3QuY2xvc2VNb2RhbEZvcm0oKTtcbiAgICAgICAgdGFza0Zvcm1Nb2RhbE9iamVjdC5jbG9zZU1vZGFsRm9ybShgZXh0ZXJuYWxgKVxuICAgICAgICBkZWxldGVVbmNvbW1pdHRlZEVudHJpZXMoKTtcbiAgICAgICAgbGVmdE1lbnVFdmVudExpc3RlbmVycyhlLnRhcmdldCk7XG4gICAgfSk7XG4gICAgcmVwb3NpdGlvbk5ld0xpc3RCdXR0b24oKTtcbiAgICByZXR1cm4gbGVmdE1lbnVQcm9qZWN0SXRlbTtcblxufVxuXG5jb25zdCBzaG93TGVmdE1lbnVTZWxlY3RlZCA9IChsZWZ0TWVudVByb2plY3RJdGVtLCB0aGlzSXRlbSwgaW5pdGlhbExvYWQpID0+IHtcbiAgICBjb25zdCByZW1vdmVQcmV2aW91c1NlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sZWZ0TWVudUl0ZW1TaG93QXNTZWxlY3RlZCcpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCByZW1vdmVQcmV2aW91c1NlbGVjdGlvbiAhPSBudWxsICYmIGluaXRpYWxMb2FkID09IGZhbHNlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZVByZXZpb3VzU2VsZWN0aW9uLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgY29uc3Qgc3RvcmFnZUl0ZW0gPSBkYXRhRXZlbnRzT2JqLmdldExpc3RJdGVtRGV0YWlscyhcImdldDFJdGVtXCIsIHJlbW92ZVByZXZpb3VzU2VsZWN0aW9uW2ldLmRhdGFzZXQubGlzdGl0ZW1pZCk7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVTZWxlY3RlZEZyb21UaGlzID0gZGF0YUV2ZW50c09iai5jcmVhdGVMaXN0T2JqZWN0RnJvbVN0b3JhZ2Uoc3RvcmFnZUl0ZW0pO1xuICAgICAgICAgICAgcmVtb3ZlU2VsZWN0ZWRGcm9tVGhpcy5zZWxlY3RlZFN0YXRlUmVtb3ZlKCk7XG4gICAgICAgICAgICByZW1vdmVQcmV2aW91c1NlbGVjdGlvbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdE1lbnVJdGVtU2hvd0FzU2VsZWN0ZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBjb25zdCBwYXJlbnRCdXR0b24gPSBsZWZ0TWVudVByb2plY3RJdGVtLmNsb3Nlc3QoJ2J1dHRvbicpO1xuICAgIGlmICggdGhpc0l0ZW0uc2VsZWN0ZWQgPT0gdHJ1ZSApIHtcbiAgICAgICAgcGFyZW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsZWZ0TWVudUl0ZW1TaG93QXNTZWxlY3RlZFwiKTtcbiAgICB9XG4gICAgXG59XG5cbmNvbnN0IGxlZnRNZW51RXZlbnRMaXN0ZW5lcnMgPSAoY2xpY2tlZEVsZW1lbnQpID0+IHtcbiAgICBcbiAgICBjb25zdCBzdG9yYWdlSXRlbSA9IGRhdGFFdmVudHNPYmouZ2V0TGlzdEl0ZW1EZXRhaWxzKFwiZ2V0MUl0ZW1cIiwgY2xpY2tlZEVsZW1lbnQuZGF0YXNldC5saXN0aXRlbWlkKTtcblxuICAgIGNvbnN0IHRoaXNJdGVtID0gZGF0YUV2ZW50c09iai5jcmVhdGVMaXN0T2JqZWN0RnJvbVN0b3JhZ2Uoc3RvcmFnZUl0ZW0pO1xuICAgICAgICBpZiAodGhpc0l0ZW0uc2VsZWN0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpc0l0ZW0uc2VsZWN0ZWRTdGF0ZUFkZCgpO1xuICAgICAgICAgICAgc2hvd0xlZnRNZW51U2VsZWN0ZWQoY2xpY2tlZEVsZW1lbnQsIHRoaXNJdGVtLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzSXRlbS5kaXNwbGF5Q2hpbGRMaXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlTGVmdE1lbnVTaG93KCk7XG5cbn1cblxuY29uc3QgZGVsZXRlVW5jb21taXR0ZWRFbnRyaWVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkZWxldGVVbmNvbW1pdHRlZEVudHJpZXMgPSBkYXRhRXZlbnRzT2JqLmdldExpc3RJdGVtRGV0YWlscyhcInVuY29tbWl0dGVkXCIpO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlVW5jb21taXR0ZWRFbnRyaWVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICBjb25zdCBVbmNvbW1pdHRlZEVudHJ5ID0gZGF0YUV2ZW50c09iai5jcmVhdGVMaXN0T2JqZWN0RnJvbVN0b3JhZ2UoZGVsZXRlVW5jb21taXR0ZWRFbnRyaWVzW2ldKTtcbiAgICAgICAgVW5jb21taXR0ZWRFbnRyeS5kZWxldGVGcm9tREIoKTtcbiAgICB9XG59XG5cbmNvbnN0IHRvZ2dsZUxlZnRNZW51U2hvdyA9IChhY3Rpb24pID0+IHtcbiAgICBjb25zdCBidXJnZXJGbHlPdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYnVyZ2VyRmx5T3V0QnV0dG9uYCk7XG4gICAgY29uc3QgbmF2QWRkTmV3SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uYXZBZGROZXdJdGVtYCk7XG4gICAgY29uc3QgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRNZW51XCIpO1xuICAgIGNvbnN0IGxlZnRNZW51UHJvamVjdEl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxlZnRNZW51UHJvamVjdEl0ZW1MaXN0YCk7XG4gICAgaWYgKGFjdGlvbiA9PSBgZmx5T3V0YCkge1xuICAgICAgICBidXJnZXJGbHlPdXRCdXR0b24uY2xhc3NMaXN0LmFkZChgYnVyZ2VyRmx5T3V0QnV0dG9uSGlkZWApO1xuICAgICAgICBuYXZBZGROZXdJdGVtLmNsYXNzTGlzdC5hZGQoYG5hdkFkZE5ld0l0ZW1MZWZ0TWVudU91dGApO1xuICAgICAgICBsZWZ0TWVudS5jbGFzc0xpc3QuYWRkKFwibGVmdE1lbnVGbHlPdXRcIik7XG4gICAgICAgIGxlZnRNZW51UHJvamVjdEl0ZW1MaXN0LmNsYXNzTGlzdC5hZGQoYGxlZnRNZW51UHJvamVjdEl0ZW1MaXN0U2hvd2ApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1cmdlckZseU91dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKGBidXJnZXJGbHlPdXRCdXR0b25IaWRlYCk7XG4gICAgICAgIG5hdkFkZE5ld0l0ZW0uY2xhc3NMaXN0LnJlbW92ZShgbmF2QWRkTmV3SXRlbUxlZnRNZW51T3V0YCk7XG4gICAgICAgIGxlZnRNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0TWVudUZseU91dFwiKTtcbiAgICAgICAgbGVmdE1lbnVQcm9qZWN0SXRlbUxpc3QuY2xhc3NMaXN0LnJlbW92ZShgbGVmdE1lbnVQcm9qZWN0SXRlbUxpc3RTaG93YCk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgXG4gICAgXG59XG5cbmNvbnN0IGluaXRpYWxFdmVudExpc3RlbmVycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0TWVudVwiKTtcbiAgICBsZWZ0TWVudS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoZSkgPT4geyBcbiAgICAgICAgdG9nZ2xlTGVmdE1lbnVTaG93KGBmbHlPdXRgKTtcbiAgICB9KTsgXG4gICAgbGVmdE1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHsgXG4gICAgICAgIHRvZ2dsZUxlZnRNZW51U2hvdyhgZmx5SW5gKTtcbiAgICB9KTsgXG4gICAgLy8gbGVmdCBtZW51IGNsaWNrIGFjdGlvbnNcbiAgICBjb25zdCBhbGxMZWZ0TWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxlZnRNZW51UHJvamVjdEl0ZW0nKTtcbiAgICBhbGxMZWZ0TWVudUl0ZW1zLmZvckVhY2goZSA9PiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIFxuICAgICAgICBcbiAgICAgICAgbGVmdE1lbnVFdmVudExpc3RlbmVycyhlLnRhcmdldCk7XG4gIFxuICAgICAgfSkpO1xuXG4gICAgLy8gbmV3IGxpc3QgYnV0dG9uIGFjdGlvbnNcbiAgICBjb25zdCBuYXZBZGROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZBZGROZXdJdGVtXCIpO1xuICAgIG5hdkFkZE5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBlbXB0eSBEQiBlbnRyaWVzIHNvIHRoZSBuZXh0IGF2YWlsYWJsZUlEIGlzIGNvcnJlY3RcbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZVVuY29tbWl0dGVkRW50cmllcygpO1xuICAgICBcbiAgICAgICAgY29uc3QgbmV3TGlzdEl0ZW0gPSBsaXN0SXRlbU9iamVjdC5uZXdMaXN0SXRlbShcbiAgICAgICAgICAgIE5hTiwgXG4gICAgICAgICAgICBcIlwiLCBcbiAgICAgICAgICAgIFwiXCIsIFxuICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICBmYWxzZSwgXG4gICAgICAgICAgICAncGFyZW50JywgXG4gICAgICAgICAgICB0cnVlLCBcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgZmFsc2UpO1xuXG4gICAgICAgIG5ld0xpc3RJdGVtLmFkZEl0ZW10b0RCKCk7XG4gICAgICAgIGxpc3RGb3JtTW9kYWxPYmplY3QudXBkYXRlSW5wdXRWYWx1ZXMobmV3TGlzdEl0ZW0pO1xuICAgICAgICB0b2dnbGVMZWZ0TWVudVNob3coKTtcbiAgICAgICAgbGlzdEZvcm1Nb2RhbE9iamVjdC5zaG93Rm9ybShuZXdMaXN0SXRlbSk7XG4gICAgXG4gICAgfSk7XG59XG5cblxuICAgIHJldHVybiB7IGluaXRpYWxTZXRVcCwgaW5pdGlhbEV2ZW50TGlzdGVuZXJzLCBhZGRMaXN0SXRlbVRvTWVudSwgZGlzcGxheUxpc3RJdGVtQ2hpbGRyZW4sIHNob3dMZWZ0TWVudVNlbGVjdGVkLCBkZWxldGVVbmNvbW1pdHRlZEVudHJpZXN9O1xufVxuIiwiXG5cbmltcG9ydCBkYXRhRXZlbnRzIGZyb20gXCIuL2RhdGFFdmVudHMuanNcIjtcbmltcG9ydCBEb21FdmVudHMgZnJvbSBcIi4vRE9NZXZlbnRzLmpzXCI7XG5cbiBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RJdGVtT2JqKCkge1xuXG4gICAgXG5cbiAgICBjb25zdCBuZXdMaXN0SXRlbSA9IChsaXN0SXRlbUlELCBsaXN0SXRlbVRpdGxlLCBkdWVEYXRlLCBpbXBvcnRhbmNlLCBwaW5uZWQsIHBhcmVudExpc3QsIHNlbGVjdGVkLCBjb21taXR0ZWQsIGNvbXBsZXRlZCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhRXZlbnRzT2JqID0gZGF0YUV2ZW50cygpO1xuICAgICAgICBjb25zdCBET01FdmVudHNPYmogPSBEb21FdmVudHMoKTtcbiAgICAgICAgLy8gbGV0IG5ld0xpc3RJdGVtSUQgPSBsaXN0SXRlbUlEO1xuICAgICAgICBpZiAoIGlzTmFOKGxpc3RJdGVtSUQpICkge1xuICAgICAgICAgICAgbGlzdEl0ZW1JRCA9IGRhdGFFdmVudHNPYmouZmluZE5leHRMaXN0SUQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaXN0SXRlbSA9IHtcbiAgICAgICAgICAgIElEOiBsaXN0SXRlbUlELFxuICAgICAgICAgICAgdGl0bGU6IGxpc3RJdGVtVGl0bGUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgaW1wb3J0YW5jZTogaW1wb3J0YW5jZSxcbiAgICAgICAgICAgIHBpbm5lZDogcGlubmVkLFxuICAgICAgICAgICAgcGFyZW50TGlzdDogcGFyZW50TGlzdCxcbiAgICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICAgICAgICAgIGNvbW1pdHRlZCwgY29tbWl0dGVkLFxuICAgICAgICAgICAgY29tcGxldGVkLCBjb21wbGV0ZWQsXG4gICAgICAgICAgICBhZGRJdGVtdG9EQigpIHtcbiAgICAgICAgICAgICAgICBkYXRhRXZlbnRzT2JqLmFkZExpc3RJdGVtVG9EQihsaXN0SXRlbSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRTdGF0ZUFkZCgpIHtcbiAgICAgICAgICAgICAgICBkYXRhRXZlbnRzT2JqLmFkZFN0YXRlU2VsZWN0ZWQobGlzdEl0ZW0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkU3RhdGVSZW1vdmUoKSB7XG4gICAgICAgICAgICAgICAgZGF0YUV2ZW50c09iai5yZW1vdmVTdGF0ZVNlbGVjdGVkKGxpc3RJdGVtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNwbGF5Q2hpbGRMaXN0KCkge1xuICAgICAgICAgICAgICAgIERPTUV2ZW50c09iai5kaXNwbGF5TGlzdEl0ZW1DaGlsZHJlbihsaXN0SXRlbSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF5c0xlZnRUb0R1ZSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXlzID0gZGF0YUV2ZW50c09iai5kYXlzVW50aWxEdWUobGlzdEl0ZW0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlbGV0ZUZyb21EQigpIHtcbiAgICAgICAgICAgICAgICBkYXRhRXZlbnRzT2JqLmRlbGV0ZVRoaXNPYmplY3RGcm9tREIobGlzdEl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgcmV0dXJuIGxpc3RJdGVtO1xuICAgIH1cbiAgICBcblxucmV0dXJuIHsgbmV3TGlzdEl0ZW0gfTtcblxufSIsIiBcbmltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cywgZm9ybWF0RGlzdGFuY2VUb05vdywgaW50ZXJ2YWxUb0R1cmF0aW9uLCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBMaXN0SXRlbU9iaiBmcm9tICcuL0xpc3RJdGVtT2JqLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0YUV2ZW50cygpIHtcbiAgICBjb25zdCBsaXN0SXRlbU9iamVjdCA9IExpc3RJdGVtT2JqKCk7XG5cbiAgICBjb25zdCBhZGRMaXN0SXRlbVRvREIgPSAobGlzdEl0ZW0pID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obGlzdEl0ZW0uSUQsIEpTT04uc3RyaW5naWZ5KGxpc3RJdGVtKSk7XG4gICAgfSAgIFxuXG4gICAgY29uc3QgZGVsZXRlVGhpc09iamVjdEZyb21EQiA9IChsaXN0SXRlbSkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsaXN0SXRlbS5JRCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkU3RhdGVTZWxlY3RlZCA9IChsaXN0SXRlbSkgPT4ge1xuICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIGFkZExpc3RJdGVtVG9EQihsaXN0SXRlbSk7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZVN0YXRlU2VsZWN0ZWQgPSAobGlzdEl0ZW0pID0+IHtcbiAgICAgICAgbGlzdEl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgYWRkTGlzdEl0ZW1Ub0RCKGxpc3RJdGVtKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgY29uc3QgZ2V0TGlzdEl0ZW1EZXRhaWxzID0gKHJlcXVlc3RUeXBlLCBpdGVtSUQpID0+IHtcbiAgICAgICAgbGV0IHN0b3JhZ2VJdGVtc0FycmF5ID0gW107XG4gICAgICAgIGNvbnN0IHN0b3JhZ2VLZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcbiAgICAgICAgIGZvciAobGV0IGl0ZW0gaW4gc3RvcmFnZUtleXMgKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVG9BZGQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VLZXlzW2l0ZW1dKSk7XG4gICAgICAgICAgICBpZiAoIGl0ZW1Ub0FkZCAhPSBudWxsICkge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VJdGVtc0FycmF5LnB1c2goaXRlbVRvQWRkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKCByZXF1ZXN0VHlwZSA9PSBcImlzUGFyZW50XCIgKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRJdGVtcyA9IHN0b3JhZ2VJdGVtc0FycmF5LmZpbHRlcihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihzdG9yYWdlSXRlbXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmFnZUl0ZW1zQXJyYXkucGFyZW50TGlzdCA9PSBcInBhcmVudFwiICYmIHN0b3JhZ2VJdGVtc0FycmF5LmNvbW1pdHRlZCA9PSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRJdGVtcztcbiAgICAgICAgfSBlbHNlIGlmICggcmVxdWVzdFR5cGUgPT0gXCJnZXQxSXRlbVwiICYmIGl0ZW1JRCA+IC0xICkge1xuICAgICAgICAgICAgY29uc3QgZ2V0MUl0ZW0gPSBzdG9yYWdlSXRlbXNBcnJheS5maW5kKHN0b3JhZ2VJdGVtc0FycmF5ID0+IHN0b3JhZ2VJdGVtc0FycmF5LklEID09IGl0ZW1JRCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldDFJdGVtO1xuICAgICAgICB9IGVsc2UgaWYgKCByZXF1ZXN0VHlwZSA9PSBcImdldExpc3RJdGVtQ2hpbGRyZW5cIiApIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTGlzdCA9IHN0b3JhZ2VJdGVtc0FycmF5LmZpbHRlcihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihzdG9yYWdlSXRlbXNBcnJheSl7cmV0dXJuIHN0b3JhZ2VJdGVtc0FycmF5LnBhcmVudExpc3QgPT0gaXRlbUlEfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTGlzdFNvcnRlZCA9IGNoaWxkTGlzdC5zb3J0KGZ1bmN0aW9uIGNvbXBhcmVGbihhLCBiKXtcbiAgICAgICAgICAgICAgICBsZXQgc29ydFZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRheXNBID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHBhcnNlSVNPKGEuZHVlRGF0ZSksIHRvZGF5KTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5c0IgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMocGFyc2VJU08oYi5kdWVEYXRlKSwgdG9kYXkpO1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oZGF5c0EpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRWYWx1ZSArPSAtMTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF5c0EgPiBkYXlzQikge1xuICAgICAgICAgICAgICAgICAgICBzb3J0VmFsdWUgKz0gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXlzQSA8ICBkYXlzQikge1xuICAgICAgICAgICAgICAgICAgICBzb3J0VmFsdWUgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRWYWx1ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pOyBcbiAgICAgICAgICAgIHJldHVybiBjaGlsZExpc3Q7XG4gICAgICAgIH0gZWxzZSBpZiAoIHJlcXVlc3RUeXBlID09IFwidW5jb21taXR0ZWRcIikge1xuICAgICAgICAgICAgY29uc3QgdW5jb21taXR0ZWQgPSBzdG9yYWdlSXRlbXNBcnJheS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oc3RvcmFnZUl0ZW1zQXJyYXkpe3JldHVybiBzdG9yYWdlSXRlbXNBcnJheS5jb21taXR0ZWQgPT0gZmFsc2V9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIHVuY29tbWl0dGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICBjb25zdCBjcmVhdGVMaXN0T2JqZWN0RnJvbVN0b3JhZ2UgPSAoc3RvcmVkSXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0aGlzSXRlbSA9IGxpc3RJdGVtT2JqZWN0Lm5ld0xpc3RJdGVtKHN0b3JlZEl0ZW0uSUQsIHN0b3JlZEl0ZW0udGl0bGUsIHN0b3JlZEl0ZW0uZHVlRGF0ZSwgXG4gICAgICAgICAgICBzdG9yZWRJdGVtLmltcG9ydGFuY2UsIHN0b3JlZEl0ZW0ucGlubmVkLCBzdG9yZWRJdGVtLnBhcmVudExpc3QsIHN0b3JlZEl0ZW0uc2VsZWN0ZWQsIHN0b3JlZEl0ZW0uY29tbWl0dGVkLCBzdG9yZWRJdGVtLmNvbXBsZXRlZCk7XG4gICAgICAgIHJldHVybiB0aGlzSXRlbTtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kTmV4dExpc3RJRCA9ICgpID0+IHsgICAgXG4gICAgICAgIGNvbnN0IGlkQXJyYXkgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xuICAgICAgICBsZXQgbmV4dElEID0gMDtcbiAgICAgICAgaWYgKGlkQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbmV4dElEID0gaWRBcnJheS5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChhLCBiKTtcbiAgICAgICAgICAgIH0sIC1JbmZpbml0eSkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0SUQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGF5c1VudGlsRHVlID0gKGxpc3RJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBwYXJzZUlTTyhsaXN0SXRlbS5kdWVEYXRlKTtcbiAgICAgICAgbGV0IGRheXMgPSB7fTtcbiAgICAgICAgaWYgKGxpc3RJdGVtLmR1ZURhdGUgPT0gXCJcIiApIHtcbiAgICAgICAgICAgIGRheXMuZGF5c1VudGlsRHVlID0gJzAnO1xuICAgICAgICAgICAgZGF5cy5kYXlzVW50aWxEdWVXb3JkcyA9IGBTZXQgYSBkdWUgZGF0ZS4uLmA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpc3RJdGVtLmR1ZURhdGUgIT0gXCJcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZHVlRGF0ZSwgbmV3IERhdGUoKSlcbiAgICAgICAgICAgICAgICBpZiAoIGRpZmZlcmVuY2UgPCAwICkge1xuICAgICAgICAgICAgICAgICAgICBkYXlzLmRheXNVbnRpbER1ZSA9ICctMSc7XG4gICAgICAgICAgICAgICAgICAgIGRheXMuZGF5c1VudGlsRHVlV29yZHMgPSBgRHVlICR7Zm9ybWF0RGlzdGFuY2VUb05vdyhkdWVEYXRlLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KX1gO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXlzLmRheXNVbnRpbER1ZSA9IGRpZmZlcmVuY2U7XG4gICAgICAgICAgICAgICAgICAgIGRheXMuZGF5c1VudGlsRHVlV29yZHMgPSBgRHVlICR7Zm9ybWF0RGlzdGFuY2VUb05vdyhkdWVEYXRlLCB7IGFkZFN1ZmZpeDogdHJ1ZSB9KX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF5cztcbiAgICAgICAgIFxuICAgIH1cblxuICAgICAgIFxuICAgIFxuXG4gICAgXG4gICAgcmV0dXJuIHsgZmluZE5leHRMaXN0SUQsIGFkZExpc3RJdGVtVG9EQiwgZ2V0TGlzdEl0ZW1EZXRhaWxzLCBjcmVhdGVMaXN0T2JqZWN0RnJvbVN0b3JhZ2UsIGFkZFN0YXRlU2VsZWN0ZWQsIHJlbW92ZVN0YXRlU2VsZWN0ZWQsIGRheXNVbnRpbER1ZSwgZGVsZXRlVGhpc09iamVjdEZyb21EQiB9O1xuICAgIFxuICAgIH0iLCJpbXBvcnQgZGF0YUV2ZW50cyBmcm9tIFwiLi9kYXRhRXZlbnRzLmpzXCI7XG5pbXBvcnQgRE9NZXZlbnRzIGZyb20gXCIuL0RPTWV2ZW50cy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0Zm9ybU1vZGFsKCkge1xuICAgXG4gIGNvbnN0IGRhdGFFdmVudHNPYmogPSBkYXRhRXZlbnRzKCk7XG5cblxuICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7ICAgIFxuICAgICAgXG5cbiAgICAgICAgLy8gY2xlYXIgb3V0IGFueSBwcmV2aW91cyBtb2RhbHMgdGhhdCBoYXZlIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBtb2RhbHNUb0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdE1vZGFsRm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgbW9kYWxzVG9EZWxldGUuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICAgICAgXG4gICAgICAgIC8vY3JlYXRlIHRoZSBtb2RhbCBmb3JtXG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5Db250YWluZXJEaXZcIik7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0TW9kYWxGb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICBcbiAgICAgICAgbWFpbkNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCBmb3JtTW9kYWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uY2xhc3NMaXN0LmFkZChcImxpc3RGb3JtTW9kYWxMaXN0SXRlbUVkaXRcIik7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1vZGFsRm9ybVwiKTtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmVudExpc3RcIiwgTmFOKTtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWl0ZW1JRFwiLCBOYU4pO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiI1wiKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtTW9kYWxGb3JtKTtcblxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGlucHV0VGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgaW5wdXRUaXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoYGxpc3RGb3JtTW9kYWxMYWJlbGApO1xuICAgICAgICBpbnB1dFRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBgTGlzdCBUaXRsZWA7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZUxhYmVsKTtcblxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwibGlzdEZvcm1UaXRsZVwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5wbGFjZWhvbGRlciA9IFwiTGlzdCBUaXRsZVwiO1xuICAgICAgICBpbnB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0Rm9ybU1vZGFsSW5wdXRcIik7XG4gICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0Rm9ybVRpdGxlXCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcblxuICAgICAgICBjb25zdCBmb3JtTW9kYWxEb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZm9ybU1vZGFsRG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdEZvcm1Nb2RhbERvbmVCdXR0b25cIik7XG4gICAgICAgIGZvcm1Nb2RhbERvbmVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5hcHBlbmRDaGlsZChmb3JtTW9kYWxEb25lQnV0dG9uKTtcblxuICAgICAgICBjb25zdCB1cGRhdGVIYXNTYXZlZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB1cGRhdGVIYXNTYXZlZE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImxpc3RVcGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWxcIik7XG4gICAgICAgIHVwZGF0ZUhhc1NhdmVkTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiU2F2ZWRcIjtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5hcHBlbmRDaGlsZCh1cGRhdGVIYXNTYXZlZE1lc3NhZ2UpO1xuXG4gICAgICAgIGlucHV0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbUlEID0gZS50YXJnZXQuY2xvc2VzdChgZm9ybWApLmRhdGFzZXQuaXRlbWlkO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmFnZUl0ZW0gPSBkYXRhRXZlbnRzT2JqLmdldExpc3RJdGVtRGV0YWlscyhcImdldDFJdGVtXCIsIGxpc3RJdGVtSUQpO1xuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkYXRhRXZlbnRzT2JqLmNyZWF0ZUxpc3RPYmplY3RGcm9tU3RvcmFnZShzdG9yYWdlSXRlbSk7XG5cbiAgICAgICAgICAgIGxpc3RJdGVtLnRpdGxlID0gaW5wdXRUaXRsZS52YWx1ZTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmNvbW1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgICAvLyBub3QgdmFsaWRhdGVkIGFzIGNvbXBsZXRlIGJ1dCBubyB0d28td2F5IGNvbW1zIGhlcmVcbiAgICAgICAgICAgIGxpc3RJdGVtLmFkZEl0ZW10b0RCKGxpc3RJdGVtKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlSGFzU2F2ZWRNZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJsaXN0VXBkYXRlSGFzU2F2ZWRNZXNzYWdlRm9ybU1vZGFsU2hvd1wiKTtcbiAgICAgICAgICAgIGZvcm1Nb2RhbEZvcm0uY2xhc3NMaXN0LmFkZChcImxpc3RGb3JtTW9kYWxMaXN0SXRlbUVkaXRTYXZlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZUhhc1NhdmVkTWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZm9ybU1vZGFsU2F2ZWRSZW1vdmUpO1xuICAgICAgICAgIGZ1bmN0aW9uIGZvcm1Nb2RhbFNhdmVkUmVtb3ZlIChlKSB7XG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJsaXN0VXBkYXRlSGFzU2F2ZWRNZXNzYWdlRm9ybU1vZGFsU2hvd1wiKTtcbiAgICAgICAgICAgICAgZm9ybU1vZGFsRm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwibGlzdEZvcm1Nb2RhbExpc3RJdGVtRWRpdFNhdmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgXG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4geyBcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IFxuICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBjbGlja091dHNpZGVNb2RhbCA9ICFlLnRhcmdldC5jbG9zZXN0KCcubGlzdEZvcm1Nb2RhbExpc3RJdGVtRWRpdCcpO1xuICAgICAgICAgIGlmICggY2xpY2tPdXRzaWRlTW9kYWwgPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWxGb3JtKClcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmb3JtTW9kYWxFc2NhcGUpO1xuICAgICAgICBmdW5jdGlvbiBmb3JtTW9kYWxFc2NhcGUoZSkge1xuICAgICAgICAgIGlmICggZS5rZXkgPT0gXCJFc2NhcGVcIiApIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWxGb3JtKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9ybU1vZGFsRG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWxGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlTW9kYWxGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBET01FdmVudHNPYmogPSBET01ldmVudHMoKTtcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saXN0TW9kYWxGb3JtQ29udGFpbmVyYCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1Db250YWluZXIuY2xhc3NMaXN0KTtcbiAgICAgICAgaWYgKCBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhgbGlzdEZvcm1Db250YWluZXJWaXNpYmxlYCkgKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QpO1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgbWFpbiBwYWdlIGxpc3RpbmcgdmlldyB0byByZWZsZWN0IGFueSBjaGFuZ2VzIHVwb24gY2xvc3VyZVxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3RGb3JtTW9kYWxMaXN0SXRlbUVkaXRgKVxuICAgICAgICBjb25zdCBsaXN0SXRlbUlEID0gZm9ybS5kYXRhc2V0Lml0ZW1pZDtcbiAgICAgICAgY29uc29sZS5sb2cobGlzdEl0ZW1JRCk7XG4gICAgICAgIGNvbnN0IHN0b3JlZExpc3RJdGVtID0gZGF0YUV2ZW50c09iai5nZXRMaXN0SXRlbURldGFpbHMoXCJnZXQxSXRlbVwiLCBsaXN0SXRlbUlEKTtcbiAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkYXRhRXZlbnRzT2JqLmNyZWF0ZUxpc3RPYmplY3RGcm9tU3RvcmFnZShzdG9yZWRMaXN0SXRlbSk7XG5cbiAgICAgICAgICBpZiAobGlzdEl0ZW0uY29tbWl0dGVkID09IHRydWUgKSB7ICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBsZWZ0TWVudVByb2plY3RJdGVtID0gRE9NRXZlbnRzT2JqLmFkZExpc3RJdGVtVG9NZW51KGxpc3RJdGVtKTtcbiAgICAgICAgICAgIERPTUV2ZW50c09iai5zaG93TGVmdE1lbnVTZWxlY3RlZChsZWZ0TWVudVByb2plY3RJdGVtLCBsaXN0SXRlbSwgZmFsc2UpO1xuICAgICAgICAgICAgbGlzdEl0ZW0uZGlzcGxheUNoaWxkTGlzdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsaXN0Rm9ybUNvbnRhaW5lclZpc2libGVcIik7XG4gICAgICB9XG5cbiAgICB9XG4gICAgXG4gICBcblxuXG4gICAgY29uc3QgdXBkYXRlSW5wdXRWYWx1ZXMgPSAobGlzdEl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGZvcm1Nb2RhbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RGb3JtTW9kYWxMaXN0SXRlbUVkaXRcIik7XG4gICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Rm9ybVRpdGxlXCIpO1xuICAgICAgaW5wdXRUaXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgICBmb3JtTW9kYWxGb3JtLnNldEF0dHJpYnV0ZShcImRhdGEtcGFyZW50TGlzdFwiLCBsaXN0SXRlbS5wYXJlbnRMaXN0KTtcbiAgICAgIGZvcm1Nb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1pdGVtSURcIiwgbGlzdEl0ZW0uSUQpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdEZvcm1UaXRsZVwiKTtcbiAgICAgIGlucHV0VGl0bGUuZm9jdXMoKTtcbiAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdE1vZGFsRm9ybUNvbnRhaW5lcmApO1xuICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdEZvcm1Db250YWluZXJWaXNpYmxlXCIpO1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7IGNyZWF0ZUZvcm0sIHVwZGF0ZUlucHV0VmFsdWVzLCBzaG93Rm9ybSwgY2xvc2VNb2RhbEZvcm0gfVxufSAgIiwiaW1wb3J0IGRhdGFFdmVudHMgZnJvbSBcIi4vZGF0YUV2ZW50cy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrZm9ybU1vZGFsKCkge1xuICAgXG4gICAgY29uc3QgZGF0YUV2ZW50c09iaiA9IGRhdGFFdmVudHMoKTtcblxuICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7ICAgIFxuICAgICAgXG5cbiAgICAgICAgLy8gY2xlYXIgb3V0IGFueSBwcmV2aW91cyBtb2RhbHMgdGhhdCBoYXZlIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBtb2RhbHNUb0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxGb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICBtb2RhbHNUb0RlbGV0ZS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gICAgICBcbiAgICAgICAgLy9jcmVhdGUgdGhlIG1vZGFsIGZvcm1cbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRhaW5lckRpdlwiKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsRm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgXG4gICAgICAgIG1haW5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgZm9ybU1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtTW9kYWxMaXN0SXRlbUVkaXRcIik7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1vZGFsRm9ybVwiKTtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmVudExpc3RcIiwgTmFOKTtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWl0ZW1JRFwiLCBOYU4pO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiI1wiKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtTW9kYWxGb3JtKTtcblxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGlucHV0VGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgaW5wdXRUaXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoYGZvcm1Nb2RhbExhYmVsYCk7XG4gICAgICAgIGlucHV0VGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IGBOb3RlIChyZXF1aXJlZClgO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGVMYWJlbCk7XG5cbiAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tGb3JtVGl0bGVcIik7XG4gICAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm1Nb2RhbElucHV0XCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0Zvcm1UaXRsZVwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgICAgIGlucHV0VGl0bGUudmFsdWUgPSBcIm4vYVwiO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuICAgICAgXG4gICAgICAgIGNvbnN0IGlucHV0RHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBpbnB1dER1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVEYXRlXCIpO1xuICAgICAgICBpbnB1dER1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKGBmb3JtTW9kYWxMYWJlbGApO1xuICAgICAgICBpbnB1dER1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGUgKG9wdGlvbmFsKVwiO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKGlucHV0RHVlRGF0ZUxhYmVsKTtcbiAgICAgICBcblxuICAgICAgICBsZXQgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7ICAgICAgICBcbiAgICAgICAgaW5wdXREdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdEZvcm1EdWVEYXRlXCIpO1xuICAgICAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZURhdGVcIik7XG4gICAgICAgIGlucHV0RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwibGlzdEZvcm1EdWVEYXRlXCIpO1xuICAgICAgICBpbnB1dER1ZURhdGUuY2xhc3NMaXN0LmFkZChcImZvcm1Nb2RhbElucHV0XCIpO1xuICAgICAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBmb3JtTW9kYWxEb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZm9ybU1vZGFsRG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybU1vZGFsRG9uZUJ1dHRvblwiKTtcbiAgICAgICAgZm9ybU1vZGFsRG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKGZvcm1Nb2RhbERvbmVCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZUhhc1NhdmVkTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHVwZGF0ZUhhc1NhdmVkTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidXBkYXRlSGFzU2F2ZWRNZXNzYWdlRm9ybU1vZGFsXCIpO1xuICAgICAgICB1cGRhdGVIYXNTYXZlZE1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlNhdmVkXCI7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uYXBwZW5kQ2hpbGQodXBkYXRlSGFzU2F2ZWRNZXNzYWdlKTtcblxuICAgXG5cbiAgICAgICAgZm9ybU1vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbUlEID0gZS50YXJnZXQuY2xvc2VzdChgZm9ybWApLmRhdGFzZXQuaXRlbWlkO1xuICAgICAgICAgIGNvbnN0IHN0b3JhZ2VJdGVtID0gZGF0YUV2ZW50c09iai5nZXRMaXN0SXRlbURldGFpbHMoXCJnZXQxSXRlbVwiLCBsaXN0SXRlbUlEKTtcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKHN0b3JhZ2VJdGVtKTtcblxuICAgICAgICAgIGxpc3RJdGVtLnRpdGxlID0gaW5wdXRUaXRsZS52YWx1ZTtcbiAgICAgICAgICBsaXN0SXRlbS5kdWVEYXRlID0gaW5wdXREdWVEYXRlLnZhbHVlO1xuICAgICAgICAgIGxpc3RJdGVtLmNvbW1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgbGlzdEl0ZW0uYWRkSXRlbXRvREIobGlzdEl0ZW0pO1xuICAgICAgICAgIC8vIG5vdCB2YWxpZGF0ZWQgYXMgY29tcGxldGUgYnV0IG5vIHR3by13YXkgY29tbXMgaGVyZTpcbiAgICAgICAgICB1cGRhdGVIYXNTYXZlZE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInVwZGF0ZUhhc1NhdmVkTWVzc2FnZUZvcm1Nb2RhbFNob3dcIik7XG4gICAgICAgICAgZm9ybU1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybU1vZGFsTGlzdEl0ZW1FZGl0U2F2ZWRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZUhhc1NhdmVkTWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZm9ybU1vZGFsU2F2ZWRSZW1vdmUpO1xuICAgICAgICAgIGZ1bmN0aW9uIGZvcm1Nb2RhbFNhdmVkUmVtb3ZlIChlKSB7XG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJ1cGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWxTaG93XCIpO1xuICAgICAgICAgICAgICBmb3JtTW9kYWxGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtTW9kYWxMaXN0SXRlbUVkaXRTYXZlZFwiKTtcbiAgICAgICAgICAgICAgLy8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmb3JtTW9kYWxTYXZlZFJlbW92ZSlcbiAgICAgICAgfVxuICAgICAgIFxuXG4gICAgICAgIGZvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHsgXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgICB9KTtcblxuXG4gICAgICAgIGZvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2xpY2tPdXRzaWRlTW9kYWwgPSAhZS50YXJnZXQuY2xvc2VzdCgnLmZvcm1Nb2RhbExpc3RJdGVtRWRpdCcpO1xuICAgICAgICAgIGlmICggY2xpY2tPdXRzaWRlTW9kYWwgPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWxGb3JtKClcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmb3JtTW9kYWxFc2NhcGUpO1xuICAgICAgICBmdW5jdGlvbiBmb3JtTW9kYWxFc2NhcGUoZSkge1xuICAgICAgICAgIGlmICggZS5rZXkgPT0gXCJFc2NhcGVcIiApIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWxGb3JtKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9ybU1vZGFsRG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWxGb3JtKClcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIGNvbnN0IGNsb3NlTW9kYWxGb3JtID0gKHNvdXJjZSkgPT4ge1xuICAgICAgLy8gdXBkYXRlIHRoZSBtYWluIHBhZ2UgbGlzdGluZyB2aWV3IHRvIHJlZmxlY3QgYW55IGNoYW5nZXMgdXBvbiBjbG9zdXJlXG4gICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1vZGFsRm9ybUNvbnRhaW5lcmApO1xuICAgICAgXG4gICAgICBpZiAoIHNvdXJjZSAhPSBgZXh0ZXJuYWxgICkge1xuICAgICAgICB1cGRhdGVQYWdlVXBvbkNsb3N1cmUoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybUNvbnRhaW5lclZpc2libGVcIik7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHVwZGF0ZVBhZ2VVcG9uQ2xvc3VyZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RJdGVtSUQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9ybU1vZGFsTGlzdEl0ZW1FZGl0YCkuZGF0YXNldC5pdGVtaWQ7XG4gICAgICBjb25zdCBzdG9yZWRMaXN0SXRlbSA9IGRhdGFFdmVudHNPYmouZ2V0TGlzdEl0ZW1EZXRhaWxzKFwiZ2V0MUl0ZW1cIiwgbGlzdEl0ZW1JRCk7XG4gICAgICBjb25zdCBsaXN0SXRlbSA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKHN0b3JlZExpc3RJdGVtKTtcbiAgICAgIGNvbnN0IGxpc3RJdGVtUGFyZW50T2JqZWN0ID0gZGF0YUV2ZW50c09iai5nZXRMaXN0SXRlbURldGFpbHMoXCJnZXQxSXRlbVwiLCBsaXN0SXRlbS5wYXJlbnRMaXN0KTtcbiAgICAgIGNvbnN0IHBhcmVudE9iamVjdCA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKGxpc3RJdGVtUGFyZW50T2JqZWN0KTtcbiAgICAgIHBhcmVudE9iamVjdC5kaXNwbGF5Q2hpbGRMaXN0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlSW5wdXRWYWx1ZXMgPSAobGlzdEl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGZvcm1Nb2RhbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1Nb2RhbExpc3RJdGVtRWRpdFwiKTtcbiAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtVGl0bGVcIik7XG4gICAgICBjb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RGb3JtRHVlRGF0ZVwiKTtcbiAgICAgIGlucHV0VGl0bGUudmFsdWUgPSBsaXN0SXRlbS50aXRsZTtcbiAgICAgIGlucHV0RHVlRGF0ZS52YWx1ZSA9IGxpc3RJdGVtLmR1ZURhdGU7XG4gICAgICBmb3JtTW9kYWxGb3JtLnNldEF0dHJpYnV0ZShcImRhdGEtcGFyZW50TGlzdFwiLCBsaXN0SXRlbS5wYXJlbnRMaXN0KTtcbiAgICAgIGZvcm1Nb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1pdGVtSURcIiwgbGlzdEl0ZW0uSUQpO1xuICAgICAgXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVRpdGxlXCIpO1xuICAgICAgaW5wdXRUaXRsZS5mb2N1cygpO1xuICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tb2RhbEZvcm1Db250YWluZXJgKTsgXG4gICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtQ29udGFpbmVyVmlzaWJsZVwiKTtcbiAgICBcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4geyBjcmVhdGVGb3JtLCB1cGRhdGVJbnB1dFZhbHVlcywgc2hvd0Zvcm0sIGNsb3NlTW9kYWxGb3JtIH1cbn0gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi90YXNrRm9ybU1vZGFsU3R5bGUuY3NzJztcbmltcG9ydCAnLi9saXN0Rm9ybU1vZGFsU3R5bGUuY3NzJztcblxuXG5pbXBvcnQgRG9tRXZlbnRzIGZyb20gJy4vRE9NZXZlbnRzLmpzJztcblxuY29uc3QgRG9tRXZlbnRzRnVuY3Rpb25zID0gRG9tRXZlbnRzKCk7XG5Eb21FdmVudHNGdW5jdGlvbnMuaW5pdGlhbFNldFVwKCk7XG5Eb21FdmVudHNGdW5jdGlvbnMuaW5pdGlhbEV2ZW50TGlzdGVuZXJzKCk7XG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=