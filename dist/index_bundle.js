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
___CSS_LOADER_EXPORT___.push([module.id, "\n.listModalFormContainer {\n    display: flex;\n    justify-content: center;    \n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color:rgba(36, 36, 36, 0.9);   \n    transform: translate(0vw, -100vh);\n    pointer-events: none;\n    transition: 0.4s;\n}\n.listFormContainerVisible {\n    transform: translate(0vw, 0vh);\n    pointer-events: all;\n}\n\n\n.listFormModalListItemEdit {\ndisplay: flex;\nflex-direction: column;\nposition: fixed;\ntop: 20%;\nborder: 5px solid #ffffff;\nbackground: rgb(216, 215, 215);\nborder-radius: 5px;\ncolor: black;\nmin-width: 250px;\nheight: 200px;\ntransition: border 2s;\n}\n\n.listFormModalLabel {\n    display: flex;\n    font-size: 0.8rem;\n    font-weight: bold;\n    margin: 10px 10px 0px 10px;\n}\n\n.listFormModalInput {\n    display: flex;\n    margin: 3px 10px 0px 10px;\n}\n\n.listFormModalDoneButton {\n    display: flex;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    width: 150px;   \n}\n\n.listUpdateHasSavedMessageFormModal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: 10px;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    opacity: 0;\n    width:100px;\n    transition: 3s;\n}\n\n.listUpdateHasSavedMessageFormModalShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.listFormModalListItemEditSaved {\n    border: 5px solid #30db05;\n}", "",{"version":3,"sources":["webpack://./src/listFormModalStyle.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sCAAsC;IACtC,iCAAiC;IACjC,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,8BAA8B;IAC9B,mBAAmB;AACvB;;;AAGA;AACA,aAAa;AACb,sBAAsB;AACtB,eAAe;AACf,QAAQ;AACR,yBAAyB;AACzB,8BAA8B;AAC9B,kBAAkB;AAClB,YAAY;AACZ,gBAAgB;AAChB,aAAa;AACb,qBAAqB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,kCAAkC;IAClC,yBAAyB;IACzB,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,UAAU;IACV,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,UAAU;;AAEd;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["\n.listModalFormContainer {\n    display: flex;\n    justify-content: center;    \n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color:rgba(36, 36, 36, 0.9);   \n    transform: translate(0vw, -100vh);\n    pointer-events: none;\n    transition: 0.4s;\n}\n.listFormContainerVisible {\n    transform: translate(0vw, 0vh);\n    pointer-events: all;\n}\n\n\n.listFormModalListItemEdit {\ndisplay: flex;\nflex-direction: column;\nposition: fixed;\ntop: 20%;\nborder: 5px solid #ffffff;\nbackground: rgb(216, 215, 215);\nborder-radius: 5px;\ncolor: black;\nmin-width: 250px;\nheight: 200px;\ntransition: border 2s;\n}\n\n.listFormModalLabel {\n    display: flex;\n    font-size: 0.8rem;\n    font-weight: bold;\n    margin: 10px 10px 0px 10px;\n}\n\n.listFormModalInput {\n    display: flex;\n    margin: 3px 10px 0px 10px;\n}\n\n.listFormModalDoneButton {\n    display: flex;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    width: 150px;   \n}\n\n.listUpdateHasSavedMessageFormModal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: 10px;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    opacity: 0;\n    width:100px;\n    transition: 3s;\n}\n\n.listUpdateHasSavedMessageFormModalShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.listFormModalListItemEditSaved {\n    border: 5px solid #30db05;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n\nbody {\n    background-color: rgb(41, 41, 41);\n    color: white;\n}\n\n.nav {\n    display: flex;\n    justify-content: space-between;\n}\n\n.logoContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n}\n\n.navTitle {\n    display: flex;\n}\n\n.updateHasSavedMessage {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border: 1px solid white;\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    width:140px;\n    opacity: 0;\n    z-index: -1;\n    transition: 2s;\n    position: fixed;\n    right: 0;\n}\n.updateHasSavedMessageShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.navAddNewItem {\n    display: flex;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width:150px;\n    border-radius: 3px;\n    border: 1px solid rgb(86, 87, 86);\n    background-color: rgb(22, 186, 30);\n    color: rgb(255, 255, 255);\n    margin: 0px 0px 5px 5px;\n    transition: 0.5s;\n}\n.navAddNewItem:hover {\n    border-width: 2px;\n}\n\n.navAddNewItemLeftMenuOut {\n    margin-top: 0px;\n}\n\n.mainContainerDiv {\n    display: flex;\n    flex-wrap: nowrap;\n}\n\n\n.leftMenu {\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    position: fixed;\n    top: 0;\n    left: 0;\n    overflow: none;\n    width: 50px;\n    height: 100vh;\n    background-color: rgb(118, 118, 115);\n    transition: 1s;\n}\n\n\n.leftMenuFlyOut {\n    width: 200px;\n    background-color: rgb(230, 230, 230);\n    overflow: auto;\n}\n.leftMenuFlyOut::-webkit-scrollbar {\n    width: 10px;\n    background: #f1f1f1; \n}\n.leftMenuFlyOut::-webkit-scrollbar-track {\n    background: #5c5959; \n}\n.leftMenuFlyOut::-webkit-scrollbar-thumb {\n    background: rgb(77, 76, 76); \n}\n  .leftMenuFlyOut::-webkit-scrollbar-thumb:hover {\n    background: rgb(225, 222, 222); \n}\n\n.burgerFlyOutButton {\n\n    align-self: center;\n    border: 0px;\n    background-color:rgba(0, 0, 0, 0);\n    margin-top: 10px;\n    transition: 0.5s;\n    cursor: pointer;   \n}\n.burgerFlyOut {\n    display: flex;\n    width:30px;\n    align-self: center;\n    transition: 0.5s;\n    \n    cursor: pointer;\n}\n.burgerFlyOutButtonHide {\n    width: 0px;\n    height:0px;\n    transform: translate(-100vw, 0vh);\n}\n\n\n.leftMenuProjectItemList {\n    list-style-type: none;\n    padding-left: 0px;\n    transform: translate(-100vw, 0vh);   \n    transition: 0.5s;\n}\n\n.leftMenuProjectItemListShow {\n    transform: translate(0vw, 0vh);   \n}\n\n.leftMenuProjectItem {\n    display: flex;\n    align-items: center;\n    text-align: left;\n    width:180px;\n    border: 1px solid rgb(152, 152, 152);\n    background-color: rgb(43, 42, 42);\n    color: rgb(255, 255, 255);\n    border-radius: 0px 6px 6px 0px;\n    margin-top: 1px;\n    padding: 5px;\n    cursor: pointer;\n    margin-top: 3px;\n}\n\n.leftMenuProjectItem:hover {\n    background-color: rgb(22, 186, 30);\n}\n\n.ListImgEle {\n    width:20px;\n    height: 20px;\n    margin-right: 5px;\n}\n\n.leftMenuProjectItemText {\n    font-size: 1rem;\n}\n\n.leftMenuItemShowAsSelected {\n    background-color: rgb(5, 121, 11);\n    border: 1px solid rgb(75, 75, 75);\n    color: white;\n\n}\n\n.mainPageListContainer {\n    margin-left: 100px;\n    height: 100vh;\n}\n\n.mainPageListContentNavBar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top:10px;\n    gap: 3px;\n    font-weight: bold;\n}\n\n.listTitle {\n    color: white;\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.buttonAddAnotherMainPageListItem {\n    display: flex;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width:100px;\n    border-radius: 3px;\n    border: 1px solid rgb(191, 191, 191);\n    background-color: rgb(5, 121, 11);\n    color: white;\n    margin: 0px 0px 5px 5px;\n    transition: 0.5s;\n}\n.buttonAddAnotherMainPageListItem:hover {\n    border-color: white;\n    background-color: rgb(22, 186, 30);\n}\n\n.mainPageListContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width:85vw;\n    overflow: auto;\n    padding: 10px;\n}\n\n.contentBreakPoint {\n    width: 80vw;\n    transform: translate(-100vw, 0vh);   \n    transition: 0.5s;\n    height:0px;\n}\n.contentBreakPointShow {\n    border: 1px solid rgb(147, 147, 145);\n    border-radius: 3px;\n    margin-top: 2vh;\n    transform: translate(0vw, 0vh);\n    height:100%;\n}\n.contentBreakPointImg {\n    width:23px;\n}\n\n.breakPointHeading {\n    display: flex; \n    align-items: center;\n    gap: 4px;\n    font-weight: bold;\n    padding: 5px;\n}\n\n.mainPageListItemCard {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    width: 100%;\n    border-bottom: 1px solid rgb(99, 97, 97);\n    transition: 0.2s;\n}\n\n.mainPageListItemCardMouseInside {\n    background-color: #5c5959;\n    cursor: pointer;\n}\n\n.mainPageListItemCardActive {\n    /* border: 1px solid white; */\n    background-color: #5c5959;\n    border-radius: 3px;\n}\n\n.mainPageListItemContentLeft {\n    display: flex;\n    flex-direction: column;\n}\n\n.mainPageListItemContentRight {\n    display: flex;\n    margin-right: 10px;\n}\n\n.formDisplayDueDate {\n    margin-left: 25px;\n    font-size: 0.8rem;\n    color: #b6acac;\n    background-color: rgba(0, 0, 0, 0);\n    border: 0;\n    text-align: left;\n    opacity: 0;\n    transform: 1.5s;\n}\n\n.formDisplayDueDateShow {\n    opacity: 1;\n}\n\n.formDisplayDueDateCompleted {\n    text-decoration: line-through;\n}\n\n.formDisplayDueDate:hover {\n    color: #b6acac;\n    text-decoration: underline;\n}\n\n.mainPageListItemForm {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n\n.listFormTitleText {\n    border: 0px;\n    background-color:rgba(0, 0, 0, 0);\n    color: white;\n    resize: none;\n    margin-left: 4px;\n    width: 60vw;\n    height: 1.2rem;\n}\n\n.listFormTitleText:hover{\n    border-left: 2px dotted white;\n}\n\n.listFormTitleText:focus{\n    outline: none;\n    border-left: 2px dotted white;\n}\n\n.listFormActionButton {\n    background-color: rgba(0, 0, 0, 0);\n    padding:0px;\n    border: 0;\n    cursor: pointer;\n}\n.listFormActionButton:hover {\n    animation: showActive 2s;\n    animation-iteration-count: infinite;\n}\n.checkBoxImgEle {\n    width:25px;\n    margin: 0px 2px 0px 4px;\n}\n\n.pencilImgEle {\n    width:25px;\n    margin: 0px 2px 0px 4px;\n}\n\n.trashImgEle {\n    width:28px;\n    margin: 0px 4px 0px 4px;\n}\n\n\n@keyframes showActive {\n    0% { transform: rotate(0deg); }\n    25% { transform: rotate(20deg) scale(1.35); }\n    75% { transform: rotate(-20deg) scale(1.35); }\n    100% { transform: rotate(00deg);}\n  }\n\n\n\n@media (max-width: 610px) {\n    .mainPageListItemContentLeft {\n        width:100%;\n    }\n    \n    .mainPageListItemContentRight {\n        justify-content: flex-end;\n        width:100%;\n    }\n  \n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n/* ------- end of CSS Reset ------------------------------------------------------------------- */\n\nbody {\n    background-color: rgb(41, 41, 41);\n    color: white;\n}\n\n.nav {\n    display: flex;\n    justify-content: space-between;\n}\n\n.logoContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n}\n\n.navTitle {\n    display: flex;\n}\n\n.updateHasSavedMessage {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border: 1px solid white;\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    width:140px;\n    opacity: 0;\n    z-index: -1;\n    transition: 2s;\n    position: fixed;\n    right: 0;\n}\n.updateHasSavedMessageShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.navAddNewItem {\n    display: flex;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width:150px;\n    border-radius: 3px;\n    border: 1px solid rgb(86, 87, 86);\n    background-color: rgb(22, 186, 30);\n    color: rgb(255, 255, 255);\n    margin: 0px 0px 5px 5px;\n    transition: 0.5s;\n}\n.navAddNewItem:hover {\n    border-width: 2px;\n}\n\n.navAddNewItemLeftMenuOut {\n    margin-top: 0px;\n}\n\n.mainContainerDiv {\n    display: flex;\n    flex-wrap: nowrap;\n}\n\n\n.leftMenu {\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    position: fixed;\n    top: 0;\n    left: 0;\n    overflow: none;\n    width: 50px;\n    height: 100vh;\n    background-color: rgb(118, 118, 115);\n    transition: 1s;\n}\n\n\n.leftMenuFlyOut {\n    width: 200px;\n    background-color: rgb(230, 230, 230);\n    overflow: auto;\n}\n.leftMenuFlyOut::-webkit-scrollbar {\n    width: 10px;\n    background: #f1f1f1; \n}\n.leftMenuFlyOut::-webkit-scrollbar-track {\n    background: #5c5959; \n}\n.leftMenuFlyOut::-webkit-scrollbar-thumb {\n    background: rgb(77, 76, 76); \n}\n  .leftMenuFlyOut::-webkit-scrollbar-thumb:hover {\n    background: rgb(225, 222, 222); \n}\n\n.burgerFlyOutButton {\n\n    align-self: center;\n    border: 0px;\n    background-color:rgba(0, 0, 0, 0);\n    margin-top: 10px;\n    transition: 0.5s;\n    cursor: pointer;   \n}\n.burgerFlyOut {\n    display: flex;\n    width:30px;\n    align-self: center;\n    transition: 0.5s;\n    \n    cursor: pointer;\n}\n.burgerFlyOutButtonHide {\n    width: 0px;\n    height:0px;\n    transform: translate(-100vw, 0vh);\n}\n\n\n.leftMenuProjectItemList {\n    list-style-type: none;\n    padding-left: 0px;\n    transform: translate(-100vw, 0vh);   \n    transition: 0.5s;\n}\n\n.leftMenuProjectItemListShow {\n    transform: translate(0vw, 0vh);   \n}\n\n.leftMenuProjectItem {\n    display: flex;\n    align-items: center;\n    text-align: left;\n    width:180px;\n    border: 1px solid rgb(152, 152, 152);\n    background-color: rgb(43, 42, 42);\n    color: rgb(255, 255, 255);\n    border-radius: 0px 6px 6px 0px;\n    margin-top: 1px;\n    padding: 5px;\n    cursor: pointer;\n    margin-top: 3px;\n}\n\n.leftMenuProjectItem:hover {\n    background-color: rgb(22, 186, 30);\n}\n\n.ListImgEle {\n    width:20px;\n    height: 20px;\n    margin-right: 5px;\n}\n\n.leftMenuProjectItemText {\n    font-size: 1rem;\n}\n\n.leftMenuItemShowAsSelected {\n    background-color: rgb(5, 121, 11);\n    border: 1px solid rgb(75, 75, 75);\n    color: white;\n\n}\n\n.mainPageListContainer {\n    margin-left: 100px;\n    height: 100vh;\n}\n\n.mainPageListContentNavBar {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top:10px;\n    gap: 3px;\n    font-weight: bold;\n}\n\n.listTitle {\n    color: white;\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.buttonAddAnotherMainPageListItem {\n    display: flex;\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width:100px;\n    border-radius: 3px;\n    border: 1px solid rgb(191, 191, 191);\n    background-color: rgb(5, 121, 11);\n    color: white;\n    margin: 0px 0px 5px 5px;\n    transition: 0.5s;\n}\n.buttonAddAnotherMainPageListItem:hover {\n    border-color: white;\n    background-color: rgb(22, 186, 30);\n}\n\n.mainPageListContent {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width:85vw;\n    overflow: auto;\n    padding: 10px;\n}\n\n.contentBreakPoint {\n    width: 80vw;\n    transform: translate(-100vw, 0vh);   \n    transition: 0.5s;\n    height:0px;\n}\n.contentBreakPointShow {\n    border: 1px solid rgb(147, 147, 145);\n    border-radius: 3px;\n    margin-top: 2vh;\n    transform: translate(0vw, 0vh);\n    height:100%;\n}\n.contentBreakPointImg {\n    width:23px;\n}\n\n.breakPointHeading {\n    display: flex; \n    align-items: center;\n    gap: 4px;\n    font-weight: bold;\n    padding: 5px;\n}\n\n.mainPageListItemCard {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    width: 100%;\n    border-bottom: 1px solid rgb(99, 97, 97);\n    transition: 0.2s;\n}\n\n.mainPageListItemCardMouseInside {\n    background-color: #5c5959;\n    cursor: pointer;\n}\n\n.mainPageListItemCardActive {\n    /* border: 1px solid white; */\n    background-color: #5c5959;\n    border-radius: 3px;\n}\n\n.mainPageListItemContentLeft {\n    display: flex;\n    flex-direction: column;\n}\n\n.mainPageListItemContentRight {\n    display: flex;\n    margin-right: 10px;\n}\n\n.formDisplayDueDate {\n    margin-left: 25px;\n    font-size: 0.8rem;\n    color: #b6acac;\n    background-color: rgba(0, 0, 0, 0);\n    border: 0;\n    text-align: left;\n    opacity: 0;\n    transform: 1.5s;\n}\n\n.formDisplayDueDateShow {\n    opacity: 1;\n}\n\n.formDisplayDueDateCompleted {\n    text-decoration: line-through;\n}\n\n.formDisplayDueDate:hover {\n    color: #b6acac;\n    text-decoration: underline;\n}\n\n.mainPageListItemForm {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n\n.listFormTitleText {\n    border: 0px;\n    background-color:rgba(0, 0, 0, 0);\n    color: white;\n    resize: none;\n    margin-left: 4px;\n    width: 60vw;\n    height: 1.2rem;\n}\n\n.listFormTitleText:hover{\n    border-left: 2px dotted white;\n}\n\n.listFormTitleText:focus{\n    outline: none;\n    border-left: 2px dotted white;\n}\n\n.listFormActionButton {\n    background-color: rgba(0, 0, 0, 0);\n    padding:0px;\n    border: 0;\n    cursor: pointer;\n}\n.listFormActionButton:hover {\n    animation: showActive 2s;\n    animation-iteration-count: infinite;\n}\n.checkBoxImgEle {\n    width:25px;\n    margin: 0px 2px 0px 4px;\n}\n\n.pencilImgEle {\n    width:25px;\n    margin: 0px 2px 0px 4px;\n}\n\n.trashImgEle {\n    width:28px;\n    margin: 0px 4px 0px 4px;\n}\n\n\n@keyframes showActive {\n    0% { transform: rotate(0deg); }\n    25% { transform: rotate(20deg) scale(1.35); }\n    75% { transform: rotate(-20deg) scale(1.35); }\n    100% { transform: rotate(00deg);}\n  }\n\n\n\n@media (max-width: 610px) {\n    .mainPageListItemContentLeft {\n        width:100%;\n    }\n    \n    .mainPageListItemContentRight {\n        justify-content: flex-end;\n        width:100%;\n    }\n  \n  }"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.modalFormContainer {\n    display: flex;\n    justify-content: center;    \n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color:rgba(36, 36, 36, 0.9);   \n    transform: translate(0vw, -100vh);\n    pointer-events: none;\n    transition: 0.4s;\n}\n.formContainerVisible {\n    visibility: visible;\n    transform: translate(0vw, 0vh);\n    pointer-events: all;\n}\n\n\n.formModalListItemEdit {\ndisplay: flex;\nflex-direction: column;\nposition: fixed;\ntop: 20%;\nborder: 5px solid #ffffff;\nbackground: rgb(216, 215, 215);\nborder-radius: 5px;\ncolor: black;\nmin-width: 250px;\nheight: 200px;\ntransition: border 2s;\n}\n\n.formModalLabel {\n    display: flex;\n    font-size: 0.8rem;\n    font-weight: bold;\n    margin: 10px 10px 0px 10px;\n}\n\n.formModalInput {\n    display: flex;\n    margin: 3px 10px 0px 10px;\n}\n\n.formModalDoneButton {\n    display: flex;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    width: 150px;   \n}\n\n.updateHasSavedMessageFormModal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: 10px;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    opacity: 0;\n    width:100px;\n    transition: 3s;\n}\n\n.updateHasSavedMessageFormModalShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.formModalListItemEditSaved {\n    border: 5px solid #30db05;\n}", "",{"version":3,"sources":["webpack://./src/taskFormModalStyle.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sCAAsC;IACtC,iCAAiC;IACjC,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;AACvB;;;AAGA;AACA,aAAa;AACb,sBAAsB;AACtB,eAAe;AACf,QAAQ;AACR,yBAAyB;AACzB,8BAA8B;AAC9B,kBAAkB;AAClB,YAAY;AACZ,gBAAgB;AAChB,aAAa;AACb,qBAAqB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iBAAiB;IACjB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,kCAAkC;IAClC,yBAAyB;IACzB,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;IACX,UAAU;IACV,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,UAAU;;AAEd;;AAEA;IACI,yBAAyB;AAC7B","sourcesContent":["\n.modalFormContainer {\n    display: flex;\n    justify-content: center;    \n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color:rgba(36, 36, 36, 0.9);   \n    transform: translate(0vw, -100vh);\n    pointer-events: none;\n    transition: 0.4s;\n}\n.formContainerVisible {\n    visibility: visible;\n    transform: translate(0vw, 0vh);\n    pointer-events: all;\n}\n\n\n.formModalListItemEdit {\ndisplay: flex;\nflex-direction: column;\nposition: fixed;\ntop: 20%;\nborder: 5px solid #ffffff;\nbackground: rgb(216, 215, 215);\nborder-radius: 5px;\ncolor: black;\nmin-width: 250px;\nheight: 200px;\ntransition: border 2s;\n}\n\n.formModalLabel {\n    display: flex;\n    font-size: 0.8rem;\n    font-weight: bold;\n    margin: 10px 10px 0px 10px;\n}\n\n.formModalInput {\n    display: flex;\n    margin: 3px 10px 0px 10px;\n}\n\n.formModalDoneButton {\n    display: flex;\n    align-self: center;\n    align-items: center;\n    justify-content: center;\n    margin-top: 10px;\n    width: 150px;   \n}\n\n.updateHasSavedMessageFormModal {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: center;\n    margin-top: 10px;\n    background-color: rgb(22, 186, 30);\n    color: rgb(249, 249, 249);\n    border-radius: 5px;\n    padding: 3px 3px 3px 3px;\n    height:20px;\n    opacity: 0;\n    width:100px;\n    transition: 3s;\n}\n\n.updateHasSavedMessageFormModalShow {\n    z-index: 1;\n    opacity: 1;\n    \n}\n\n.formModalListItemEditSaved {\n    border: 5px solid #30db05;\n}"],"sourceRoot":""}]);
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
    leftMenuItemTitle.textContent = thisItem.title + " (" + thisItem.ID + ")";
    leftMenuItemTitle.setAttribute('data-listitemid', thisItem.ID);
    leftMenuProjectItem.appendChild(leftMenuItemTitle);

    leftMenuProjectItem.addEventListener("click", function (e) {
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
         

        const closeModalForm = () => {
          const DOMEventsObj = (0,_DOMevents_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
          // update the main page listing view to reflect any changes upon closure
            const form = document.querySelector(`.listFormModalListItemEdit`)
            const listItemID = form.dataset.itemid;
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
    

    return { createForm, updateInputValues, showForm }
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
         

        const closeModalForm = () => {
          // update the main page listing view to reflect any changes upon closure
          const listItemID = document.querySelector(`.formModalListItemEdit`).dataset.itemid;
          const storedListItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
          const listItem = dataEventsObj.createListObjectFromStorage(storedListItem);
          const listItemParentObject = dataEventsObj.getListItemDetails("get1Item", listItem.parentList);
          const parentObject = dataEventsObj.createListObjectFromStorage(listItemParentObject);
          parentObject.displayChildList();
          formContainer.classList.remove("formContainerVisible");
        }
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
    

    return { createForm, updateInputValues, showForm }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1QixTQUFTLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSw4bkJBQThuQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLGdKQUFnSixtQkFBbUIsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFVBQVUscUJBQXFCLEdBQUcsaUJBQWlCLGlCQUFpQixHQUFHLDJEQUEyRCxnQkFBZ0Isa0JBQWtCLEdBQUcsU0FBUyw4QkFBOEIsc0JBQXNCLEdBQUcsd1RBQXdULHdDQUF3QyxtQkFBbUIsR0FBRyxVQUFVLG9CQUFvQixxQ0FBcUMsR0FBRyxvQkFBb0Isb0JBQW9CLDBCQUEwQixnQkFBZ0IsR0FBRyxlQUFlLG9CQUFvQixHQUFHLDRCQUE0QixvQkFBb0IsMEJBQTBCLDhCQUE4Qix5Q0FBeUMsZ0NBQWdDLDhCQUE4Qix5QkFBeUIsK0JBQStCLGtCQUFrQixrQkFBa0IsaUJBQWlCLGtCQUFrQixxQkFBcUIsc0JBQXNCLGVBQWUsR0FBRyw4QkFBOEIsaUJBQWlCLGlCQUFpQixTQUFTLG9CQUFvQixvQkFBb0Isc0JBQXNCLDhCQUE4QiwwQkFBMEIsbUJBQW1CLGtCQUFrQix5QkFBeUIsd0NBQXdDLHlDQUF5QyxnQ0FBZ0MsOEJBQThCLHVCQUF1QixHQUFHLHdCQUF3Qix3QkFBd0IsR0FBRywrQkFBK0Isc0JBQXNCLEdBQUcsdUJBQXVCLG9CQUFvQix3QkFBd0IsR0FBRyxpQkFBaUIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLHNCQUFzQixhQUFhLGNBQWMscUJBQXFCLGtCQUFrQixvQkFBb0IsMkNBQTJDLHFCQUFxQixHQUFHLHVCQUF1QixtQkFBbUIsMkNBQTJDLHFCQUFxQixHQUFHLHNDQUFzQyxrQkFBa0IsMkJBQTJCLEdBQUcsNENBQTRDLDJCQUEyQixHQUFHLDRDQUE0QyxtQ0FBbUMsR0FBRyxvREFBb0Qsc0NBQXNDLEdBQUcseUJBQXlCLDJCQUEyQixrQkFBa0Isd0NBQXdDLHVCQUF1Qix1QkFBdUIseUJBQXlCLEdBQUcsaUJBQWlCLG9CQUFvQixpQkFBaUIseUJBQXlCLHVCQUF1Qiw0QkFBNEIsR0FBRywyQkFBMkIsaUJBQWlCLGlCQUFpQix3Q0FBd0MsR0FBRyxnQ0FBZ0MsNEJBQTRCLHdCQUF3QiwyQ0FBMkMsdUJBQXVCLEdBQUcsa0NBQWtDLHdDQUF3QyxHQUFHLDBCQUEwQixvQkFBb0IsMEJBQTBCLHVCQUF1QixrQkFBa0IsMkNBQTJDLHdDQUF3QyxnQ0FBZ0MscUNBQXFDLHNCQUFzQixtQkFBbUIsc0JBQXNCLHNCQUFzQixHQUFHLGdDQUFnQyx5Q0FBeUMsR0FBRyxpQkFBaUIsaUJBQWlCLG1CQUFtQix3QkFBd0IsR0FBRyw4QkFBOEIsc0JBQXNCLEdBQUcsaUNBQWlDLHdDQUF3Qyx3Q0FBd0MsbUJBQW1CLEtBQUssNEJBQTRCLHlCQUF5QixvQkFBb0IsR0FBRyxnQ0FBZ0Msb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLHVCQUF1QixlQUFlLHdCQUF3QixHQUFHLGdCQUFnQixtQkFBbUIsd0JBQXdCLHdCQUF3QixHQUFHLHVDQUF1QyxvQkFBb0Isc0JBQXNCLDhCQUE4QiwwQkFBMEIsbUJBQW1CLGtCQUFrQix5QkFBeUIsMkNBQTJDLHdDQUF3QyxtQkFBbUIsOEJBQThCLHVCQUF1QixHQUFHLDJDQUEyQywwQkFBMEIseUNBQXlDLEdBQUcsMEJBQTBCLG9CQUFvQiw2QkFBNkIsa0NBQWtDLDhCQUE4QixpQkFBaUIscUJBQXFCLG9CQUFvQixHQUFHLHdCQUF3QixrQkFBa0IsMkNBQTJDLHVCQUF1QixpQkFBaUIsR0FBRywwQkFBMEIsMkNBQTJDLHlCQUF5QixzQkFBc0IscUNBQXFDLGtCQUFrQixHQUFHLHlCQUF5QixpQkFBaUIsR0FBRyx3QkFBd0IscUJBQXFCLDBCQUEwQixlQUFlLHdCQUF3QixtQkFBbUIsR0FBRywyQkFBMkIsb0JBQW9CLDBCQUEwQixzQkFBc0IscUNBQXFDLDBCQUEwQiwyQkFBMkIsd0JBQXdCLGtCQUFrQiwrQ0FBK0MsdUJBQXVCLEdBQUcsc0NBQXNDLGdDQUFnQyxzQkFBc0IsR0FBRyxpQ0FBaUMsa0NBQWtDLGtDQUFrQyx5QkFBeUIsR0FBRyxrQ0FBa0Msb0JBQW9CLDZCQUE2QixHQUFHLG1DQUFtQyxvQkFBb0IseUJBQXlCLEdBQUcseUJBQXlCLHdCQUF3Qix3QkFBd0IscUJBQXFCLHlDQUF5QyxnQkFBZ0IsdUJBQXVCLGlCQUFpQixzQkFBc0IsR0FBRyw2QkFBNkIsaUJBQWlCLEdBQUcsa0NBQWtDLG9DQUFvQyxHQUFHLCtCQUErQixxQkFBcUIsaUNBQWlDLEdBQUcsMkJBQTJCLG9CQUFvQiwwQkFBMEIsMEJBQTBCLEdBQUcsMEJBQTBCLGtCQUFrQix3Q0FBd0MsbUJBQW1CLG1CQUFtQix1QkFBdUIsa0JBQWtCLHFCQUFxQixHQUFHLDZCQUE2QixvQ0FBb0MsR0FBRyw2QkFBNkIsb0JBQW9CLG9DQUFvQyxHQUFHLDJCQUEyQix5Q0FBeUMsa0JBQWtCLGdCQUFnQixzQkFBc0IsR0FBRywrQkFBK0IsK0JBQStCLDBDQUEwQyxHQUFHLG1CQUFtQixpQkFBaUIsOEJBQThCLEdBQUcsbUJBQW1CLGlCQUFpQiw4QkFBOEIsR0FBRyxrQkFBa0IsaUJBQWlCLDhCQUE4QixHQUFHLDZCQUE2QixXQUFXLDBCQUEwQixZQUFZLHVDQUF1QyxZQUFZLHdDQUF3QyxhQUFhLDBCQUEwQixLQUFLLG1DQUFtQyxvQ0FBb0MscUJBQXFCLE9BQU8sMkNBQTJDLG9DQUFvQyxxQkFBcUIsT0FBTyxTQUFTLG1CQUFtQjtBQUNybXBCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlFQUFpRSxvQkFBb0Isa0NBQWtDLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsZ0RBQWdELHdDQUF3QywyQkFBMkIsdUJBQXVCLEdBQUcseUJBQXlCLDBCQUEwQixxQ0FBcUMsMEJBQTBCLEdBQUcsOEJBQThCLGdCQUFnQix5QkFBeUIsa0JBQWtCLFdBQVcsNEJBQTRCLGlDQUFpQyxxQkFBcUIsZUFBZSxtQkFBbUIsZ0JBQWdCLHdCQUF3QixHQUFHLHFCQUFxQixvQkFBb0Isd0JBQXdCLHdCQUF3QixpQ0FBaUMsR0FBRyxxQkFBcUIsb0JBQW9CLGdDQUFnQyxHQUFHLDBCQUEwQixvQkFBb0IseUJBQXlCLDBCQUEwQiw4QkFBOEIsdUJBQXVCLHNCQUFzQixHQUFHLHFDQUFxQyxvQkFBb0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsdUJBQXVCLHlDQUF5QyxnQ0FBZ0MseUJBQXlCLCtCQUErQixrQkFBa0IsaUJBQWlCLGtCQUFrQixxQkFBcUIsR0FBRyx5Q0FBeUMsaUJBQWlCLGlCQUFpQixTQUFTLGlDQUFpQyxnQ0FBZ0MsR0FBRyxPQUFPLHlGQUF5RixLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLGlEQUFpRCxvQkFBb0Isa0NBQWtDLHNCQUFzQixhQUFhLGNBQWMsZUFBZSxnQkFBZ0IsZ0RBQWdELHdDQUF3QywyQkFBMkIsdUJBQXVCLEdBQUcseUJBQXlCLDBCQUEwQixxQ0FBcUMsMEJBQTBCLEdBQUcsOEJBQThCLGdCQUFnQix5QkFBeUIsa0JBQWtCLFdBQVcsNEJBQTRCLGlDQUFpQyxxQkFBcUIsZUFBZSxtQkFBbUIsZ0JBQWdCLHdCQUF3QixHQUFHLHFCQUFxQixvQkFBb0Isd0JBQXdCLHdCQUF3QixpQ0FBaUMsR0FBRyxxQkFBcUIsb0JBQW9CLGdDQUFnQyxHQUFHLDBCQUEwQixvQkFBb0IseUJBQXlCLDBCQUEwQiw4QkFBOEIsdUJBQXVCLHNCQUFzQixHQUFHLHFDQUFxQyxvQkFBb0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsdUJBQXVCLHlDQUF5QyxnQ0FBZ0MseUJBQXlCLCtCQUErQixrQkFBa0IsaUJBQWlCLGtCQUFrQixxQkFBcUIsR0FBRyx5Q0FBeUMsaUJBQWlCLGlCQUFpQixTQUFTLGlDQUFpQyxnQ0FBZ0MsR0FBRyxtQkFBbUI7QUFDdjhIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZHdDO0FBQ3pCO0FBQ2YsU0FBUyw0REFBTSxHQUFHO0FBQ2xCOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1plO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWndDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGlCQUFpQiw0REFBTTtBQUN2QixrQkFBa0IsNERBQU07QUFDeEI7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSixjQUFjLDBCQUEwQjtBQUN4QyxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RId0Y7QUFDL0M7QUFDUztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsdUJBQXVCLGdFQUFVO0FBQ2pDLHdCQUF3QixnRUFBVTtBQUNsQyxpREFBaUQseUZBQStCO0FBQ2hGLG1EQUFtRCx5RkFBK0IsbUJBQW1CO0FBQ3JHO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEd0M7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxpQkFBaUIsNERBQU07QUFDdkIsa0JBQWtCLDREQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkN3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsUUFBUTtBQUNyQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsU0FBUyw0REFBTSx1QkFBdUIsNERBQU07QUFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3dDO0FBQ3dDO0FBQ2hDO0FBQ1M7QUFDRztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsUUFBUTtBQUNyQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGlCQUFpQiw0REFBTTtBQUN2QixrQkFBa0IsNERBQU07QUFDeEIsYUFBYSxnRUFBVTtBQUN2Qiw0QkFBNEIsZ0ZBQTBCO0FBQ3RELGNBQWM7O0FBRWQ7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdFQUFnRTtBQUNoRTs7QUFFQSw2QkFBNkIsZ0VBQVUsaUNBQWlDOztBQUV4RSxRQUFRLHNFQUFnQixDQUFDLDREQUFNLHdDQUF3QyxnRUFBVTtBQUNqRjtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRDRFO0FBQ25CO0FBQ1k7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsUUFBUTtBQUNyQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw4RUFBd0I7QUFDckMsU0FBUyxnRkFBaUI7QUFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ3dDO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ2dEO0FBQ2dCO0FBQ0U7QUFDYjtBQUNiO0FBQ2U7QUFDd0M7QUFDdEM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixhQUFhLFFBQVE7QUFDckIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFZTtBQUNmO0FBQ0EsRUFBRSxzRUFBWTtBQUNkLGlDQUFpQyw4REFBYTs7QUFFOUM7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixnRUFBVTs7QUFFN0I7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixxRUFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsNERBQU07QUFDckIsZ0JBQWdCLDREQUFNO0FBQ3RCLElBQUk7QUFDSixlQUFlLDREQUFNO0FBQ3JCLGdCQUFnQiw0REFBTTtBQUN0Qjs7QUFFQSxnQkFBZ0IseUVBQW1CO0FBQ25DLHlCQUF5Qix5RkFBK0IsY0FBYyx5RkFBK0I7QUFDckc7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTs7QUFFTixJQUFJO0FBQ0osd0VBQXdFO0FBQ3hFLElBQUk7QUFDSixxRUFBcUU7QUFDckUsSUFBSTtBQUNKO0FBQ0EseUVBQXlFO0FBQ3pFLElBQUk7QUFDSiwrREFBK0Q7QUFDL0QsSUFBSTtBQUNKO0FBQ0Esa0VBQWtFO0FBQ2xFLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsV0FBVyx3RUFBa0IsdUJBQXVCOztBQUVwRDtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFLElBQUk7QUFDSjtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQSwyRUFBMkU7QUFDM0UsTUFBTTtBQUNOLDBFQUEwRTtBQUMxRSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTnlEO0FBQ0E7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlCQUFpQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxTQUFTLG9FQUFlO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR3dDO0FBQ0k7QUFDSTtBQUNTO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLFNBQVMsOERBQVEscUJBQXFCLGdFQUFVO0FBQ2hEOzs7Ozs7Ozs7Ozs7OztBQzlCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdGQUF3Rjs7QUFFeEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9DZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSix5Q0FBeUMsT0FBTztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDdkY0QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTyxPQUFPLE1BQU07QUFDL0IsV0FBVyxPQUFPLE9BQU8sTUFBTTtBQUMvQixhQUFhLE1BQU0sSUFBSSxNQUFNO0FBQzdCLFlBQVksTUFBTSxJQUFJLE1BQU07QUFDNUI7QUFDQTtBQUNBLFFBQVEsMkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsUUFBUSwyRUFBaUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSCxZQUFZLDJFQUFpQjtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNqQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSx5RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSndDO0FBQ2M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZFQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sc0VBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyxzRUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHNFQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sc0VBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSxzRUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR3dDO0FBQ1I7QUFDUTtBQUNaO0FBQ047O0FBRTFDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQWM7QUFDaEMsY0FBYyxnRUFBVTtBQUN4QixrQkFBa0Isb0VBQWM7QUFDaEMsWUFBWSw4REFBUTtBQUNwQixTQUFTLDJEQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCNEQ7QUFDeEI7QUFDTjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2Q7QUFDQSxnRUFBZ0UsbUVBQVM7O0FBRXpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDeEUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUU7QUFDMUUsZ0NBQWdDLEVBQUUsVUFBVSxFQUFFOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLEVBQUUsU0FBUywrQkFBK0IsT0FBTyxFQUFFLFNBQVMsK0JBQStCO0FBQzlILDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbUVBQWtCLGFBQWEscUVBQW9CO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLG1FQUFrQixhQUFhLHFFQUFvQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDalN3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHdLQUF3Szs7QUFFeEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBZ0g7QUFDaEg7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtR0FBTzs7OztBQUkwRDtBQUNsRixPQUFPLGlFQUFlLG1HQUFPLElBQUksMEdBQWMsR0FBRywwR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQWdIO0FBQ2hIO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUdBQU87Ozs7QUFJMEQ7QUFDbEYsT0FBTyxpRUFBZSxtR0FBTyxJQUFJLDBHQUFjLEdBQUcsMEdBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMkM7QUFDRjtBQUNNO0FBQ0E7O0FBRUo7QUFDSjtBQUNpQjtBQUNYO0FBQ1E7QUFDVztBQUNQO0FBQ0g7O0FBRVg7QUFDRjtBQUNNO0FBQ2E7OztBQUc3Qzs7QUFFZiwwQkFBMEIsMERBQVU7QUFDcEMsMkJBQTJCLDJEQUFXO0FBQ3RDLGdDQUFnQyw2REFBYTtBQUM3QyxnQ0FBZ0MsNkRBQWE7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRDQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLCtDQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHdEQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHFEQUFZO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyw0REFBZ0I7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywwREFBWTtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHVEQUFZO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ2E7QUFDQTs7O0FBR0s7O0FBRXZDLDJCQUEyQix5REFBUztBQUNwQztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdEZvcm1Nb2RhbFN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0Zvcm1Nb2RhbFN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcm91bmRpbmdNZXRob2RzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZW5kT2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZVRvTm93L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbGlzdEZvcm1Nb2RhbFN0eWxlLmNzcz9mZmRjIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Rhc2tGb3JtTW9kYWxTdHlsZS5jc3M/NGUyNCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL0RPTWV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9MaXN0SXRlbU9iai5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kYXRhRXZlbnRzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xpc3RGb3JtTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdGFza0Zvcm1Nb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubGlzdE1vZGFsRm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgzNiwgMzYsIDM2LCAwLjkpOyAgIFxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwdncsIC0xMDB2aCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4ubGlzdEZvcm1Db250YWluZXJWaXNpYmxlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3LCAwdmgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG5cXG4ubGlzdEZvcm1Nb2RhbExpc3RJdGVtRWRpdCB7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IDIwJTtcXG5ib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmO1xcbmJhY2tncm91bmQ6IHJnYigyMTYsIDIxNSwgMjE1KTtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuY29sb3I6IGJsYWNrO1xcbm1pbi13aWR0aDogMjUwcHg7XFxuaGVpZ2h0OiAyMDBweDtcXG50cmFuc2l0aW9uOiBib3JkZXIgMnM7XFxufVxcblxcbi5saXN0Rm9ybU1vZGFsTGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xcbn1cXG5cXG4ubGlzdEZvcm1Nb2RhbElucHV0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAzcHggMTBweCAwcHggMTBweDtcXG59XFxuXFxuLmxpc3RGb3JtTW9kYWxEb25lQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgd2lkdGg6IDE1MHB4OyAgIFxcbn1cXG5cXG4ubGlzdFVwZGF0ZUhhc1NhdmVkTWVzc2FnZUZvcm1Nb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTg2LCAzMCk7XFxuICAgIGNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIHRyYW5zaXRpb246IDNzO1xcbn1cXG5cXG4ubGlzdFVwZGF0ZUhhc1NhdmVkTWVzc2FnZUZvcm1Nb2RhbFNob3cge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG59XFxuXFxuLmxpc3RGb3JtTW9kYWxMaXN0SXRlbUVkaXRTYXZlZCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzMGRiMDU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9saXN0Rm9ybU1vZGFsU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7OztBQUdBO0FBQ0EsYUFBYTtBQUNiLHNCQUFzQjtBQUN0QixlQUFlO0FBQ2YsUUFBUTtBQUNSLHlCQUF5QjtBQUN6Qiw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixnQkFBZ0I7QUFDaEIsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmxpc3RNb2RhbEZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMzYsIDM2LCAzNiwgMC45KTsgICBcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3LCAtMTAwdmgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuLmxpc3RGb3JtQ29udGFpbmVyVmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dywgMHZoKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuXFxuLmxpc3RGb3JtTW9kYWxMaXN0SXRlbUVkaXQge1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiAyMCU7XFxuYm9yZGVyOiA1cHggc29saWQgI2ZmZmZmZjtcXG5iYWNrZ3JvdW5kOiByZ2IoMjE2LCAyMTUsIDIxNSk7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmNvbG9yOiBibGFjaztcXG5taW4td2lkdGg6IDI1MHB4O1xcbmhlaWdodDogMjAwcHg7XFxudHJhbnNpdGlvbjogYm9yZGVyIDJzO1xcbn1cXG5cXG4ubGlzdEZvcm1Nb2RhbExhYmVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDEwcHggMTBweCAwcHggMTBweDtcXG59XFxuXFxuLmxpc3RGb3JtTW9kYWxJbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogM3B4IDEwcHggMHB4IDEwcHg7XFxufVxcblxcbi5saXN0Rm9ybU1vZGFsRG9uZUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxNTBweDsgICBcXG59XFxuXFxuLmxpc3RVcGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDE4NiwgMzApO1xcbiAgICBjb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAzcztcXG59XFxuXFxuLmxpc3RVcGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWxTaG93IHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgXFxufVxcblxcbi5saXN0Rm9ybU1vZGFsTGlzdEl0ZW1FZGl0U2F2ZWQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzBkYjA1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbi8qIC0tLS0tLS0gZW5kIG9mIENTUyBSZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLyogLS0tLS0tLSBlbmQgb2YgQ1NTIFJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tIGVuZCBvZiBDU1MgUmVzZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDEsIDQxLCA0MSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxvZ29Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5uYXZUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi51cGRhdGVIYXNTYXZlZE1lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxODYsIDMwKTtcXG4gICAgY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgd2lkdGg6MTQwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2l0aW9uOiAycztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMDtcXG59XFxuLnVwZGF0ZUhhc1NhdmVkTWVzc2FnZVNob3cge1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBcXG59XFxuXFxuLm5hdkFkZE5ld0l0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOjE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4NiwgODcsIDg2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxODYsIDMwKTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgbWFyZ2luOiAwcHggMHB4IDVweCA1cHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5uYXZBZGROZXdJdGVtOmhvdmVyIHtcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxufVxcblxcbi5uYXZBZGROZXdJdGVtTGVmdE1lbnVPdXQge1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxufVxcblxcbi5tYWluQ29udGFpbmVyRGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcblxcblxcbi5sZWZ0TWVudSB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgb3ZlcmZsb3c6IG5vbmU7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE4LCAxMTgsIDExNSk7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG5cXG4ubGVmdE1lbnVGbHlPdXQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5sZWZ0TWVudUZseU91dDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTsgXFxufVxcbi5sZWZ0TWVudUZseU91dDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAjNWM1OTU5OyBcXG59XFxuLmxlZnRNZW51Rmx5T3V0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHJnYig3NywgNzYsIDc2KTsgXFxufVxcbiAgLmxlZnRNZW51Rmx5T3V0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMjUsIDIyMiwgMjIyKTsgXFxufVxcblxcbi5idXJnZXJGbHlPdXRCdXR0b24ge1xcblxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgICBcXG59XFxuLmJ1cmdlckZseU91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOjMwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJ1cmdlckZseU91dEJ1dHRvbkhpZGUge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBoZWlnaHQ6MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwdncsIDB2aCk7XFxufVxcblxcblxcbi5sZWZ0TWVudVByb2plY3RJdGVtTGlzdCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDB2dywgMHZoKTsgICBcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmxlZnRNZW51UHJvamVjdEl0ZW1MaXN0U2hvdyB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dywgMHZoKTsgICBcXG59XFxuXFxuLmxlZnRNZW51UHJvamVjdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICB3aWR0aDoxODBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE1MiwgMTUyLCAxNTIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDQyLCA0Mik7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA2cHggNnB4IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4ubGVmdE1lbnVQcm9qZWN0SXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTg2LCAzMCk7XFxufVxcblxcbi5MaXN0SW1nRWxlIHtcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLmxlZnRNZW51UHJvamVjdEl0ZW1UZXh0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4ubGVmdE1lbnVJdGVtU2hvd0FzU2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMTIxLCAxMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig3NSwgNzUsIDc1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4ubWFpblBhZ2VMaXN0Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0Q29udGVudE5hdkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xcbiAgICBnYXA6IDNweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5saXN0VGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmJ1dHRvbkFkZEFub3RoZXJNYWluUGFnZUxpc3RJdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDoxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkxLCAxOTEsIDE5MSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAxMjEsIDExKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDBweCAwcHggNXB4IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLmJ1dHRvbkFkZEFub3RoZXJNYWluUGFnZUxpc3RJdGVtOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxODYsIDMwKTtcXG59XFxuXFxuLm1haW5QYWdlTGlzdENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDo4NXZ3O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNvbnRlbnRCcmVha1BvaW50IHtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDB2dywgMHZoKTsgICBcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgaGVpZ2h0OjBweDtcXG59XFxuLmNvbnRlbnRCcmVha1BvaW50U2hvdyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNDcsIDE0NywgMTQ1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dywgMHZoKTtcXG4gICAgaGVpZ2h0OjEwMCU7XFxufVxcbi5jb250ZW50QnJlYWtQb2ludEltZyB7XFxuICAgIHdpZHRoOjIzcHg7XFxufVxcblxcbi5icmVha1BvaW50SGVhZGluZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1haW5QYWdlTGlzdEl0ZW1DYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoOTksIDk3LCA5Nyk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5tYWluUGFnZUxpc3RJdGVtQ2FyZE1vdXNlSW5zaWRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNTk1OTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0SXRlbUNhcmRBY3RpdmUge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNTk1OTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRMZWZ0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5QYWdlTGlzdEl0ZW1Db250ZW50UmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5mb3JtRGlzcGxheUR1ZURhdGUge1xcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGNvbG9yOiAjYjZhY2FjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogMS41cztcXG59XFxuXFxuLmZvcm1EaXNwbGF5RHVlRGF0ZVNob3cge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZm9ybURpc3BsYXlEdWVEYXRlQ29tcGxldGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5mb3JtRGlzcGxheUR1ZURhdGU6aG92ZXIge1xcbiAgICBjb2xvcjogI2I2YWNhYztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5tYWluUGFnZUxpc3RJdGVtRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5saXN0Rm9ybVRpdGxlVGV4dCB7XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxufVxcblxcbi5saXN0Rm9ybVRpdGxlVGV4dDpob3ZlcntcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgd2hpdGU7XFxufVxcblxcbi5saXN0Rm9ybVRpdGxlVGV4dDpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBkb3R0ZWQgd2hpdGU7XFxufVxcblxcbi5saXN0Rm9ybUFjdGlvbkJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIHBhZGRpbmc6MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpc3RGb3JtQWN0aW9uQnV0dG9uOmhvdmVyIHtcXG4gICAgYW5pbWF0aW9uOiBzaG93QWN0aXZlIDJzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG59XFxuLmNoZWNrQm94SW1nRWxlIHtcXG4gICAgd2lkdGg6MjVweDtcXG4gICAgbWFyZ2luOiAwcHggMnB4IDBweCA0cHg7XFxufVxcblxcbi5wZW5jaWxJbWdFbGUge1xcbiAgICB3aWR0aDoyNXB4O1xcbiAgICBtYXJnaW46IDBweCAycHggMHB4IDRweDtcXG59XFxuXFxuLnRyYXNoSW1nRWxlIHtcXG4gICAgd2lkdGg6MjhweDtcXG4gICAgbWFyZ2luOiAwcHggNHB4IDBweCA0cHg7XFxufVxcblxcblxcbkBrZXlmcmFtZXMgc2hvd0FjdGl2ZSB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gICAgMjUlIHsgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpIHNjYWxlKDEuMzUpOyB9XFxuICAgIDc1JSB7IHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZykgc2NhbGUoMS4zNSk7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDAwZGVnKTt9XFxuICB9XFxuXFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAgIC5tYWluUGFnZUxpc3RJdGVtQ29udGVudExlZnQge1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1haW5QYWdlTGlzdEl0ZW1Db250ZW50UmlnaHQge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgICAgIHdpZHRoOjEwMCU7XFxuICAgIH1cXG4gIFxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7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YTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLFNBQVM7SUFDVCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksS0FBSyx1QkFBdUIsRUFBRTtJQUM5QixNQUFNLG9DQUFvQyxFQUFFO0lBQzVDLE1BQU0scUNBQXFDLEVBQUU7SUFDN0MsT0FBTyx3QkFBd0IsQ0FBQztFQUNsQzs7OztBQUlGO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsVUFBVTtJQUNkOztFQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogLS0tLS0tLSBlbmQgb2YgQ1NTIFJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiAtLS0tLS0tIGVuZCBvZiBDU1MgUmVzZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbi8qIC0tLS0tLS0gZW5kIG9mIENTUyBSZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubG9nb0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLm5hdlRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnVwZGF0ZUhhc1NhdmVkTWVzc2FnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDE4NiwgMzApO1xcbiAgICBjb2xvcjogcmdiKDI0OSwgMjQ5LCAyNDkpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoxNDBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IDJzO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG4udXBkYXRlSGFzU2F2ZWRNZXNzYWdlU2hvdyB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIFxcbn1cXG5cXG4ubmF2QWRkTmV3SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6MTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDg2LCA4NywgODYpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDE4NiwgMzApO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBtYXJnaW46IDBweCAwcHggNXB4IDVweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLm5hdkFkZE5ld0l0ZW06aG92ZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDJweDtcXG59XFxuXFxuLm5hdkFkZE5ld0l0ZW1MZWZ0TWVudU91dCB7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG59XFxuXFxuLm1haW5Db250YWluZXJEaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuXFxuLmxlZnRNZW51IHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvdmVyZmxvdzogbm9uZTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTgsIDExOCwgMTE1KTtcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcblxcbi5sZWZ0TWVudUZseU91dCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuLmxlZnRNZW51Rmx5T3V0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxOyBcXG59XFxuLmxlZnRNZW51Rmx5T3V0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6ICM1YzU5NTk7IFxcbn1cXG4ubGVmdE1lbnVGbHlPdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc3LCA3NiwgNzYpOyBcXG59XFxuICAubGVmdE1lbnVGbHlPdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIyNSwgMjIyLCAyMjIpOyBcXG59XFxuXFxuLmJ1cmdlckZseU91dEJ1dHRvbiB7XFxuXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgIFxcbn1cXG4uYnVyZ2VyRmx5T3V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6MzBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnVyZ2VyRmx5T3V0QnV0dG9uSGlkZSB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGhlaWdodDowcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDB2dywgMHZoKTtcXG59XFxuXFxuXFxuLmxlZnRNZW51UHJvamVjdEl0ZW1MaXN0IHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMHZ3LCAwdmgpOyAgIFxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4ubGVmdE1lbnVQcm9qZWN0SXRlbUxpc3RTaG93IHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3LCAwdmgpOyAgIFxcbn1cXG5cXG4ubGVmdE1lbnVQcm9qZWN0SXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHdpZHRoOjE4MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTUyLCAxNTIsIDE1Mik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MywgNDIsIDQyKTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDZweCA2cHggMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbi5sZWZ0TWVudVByb2plY3RJdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxODYsIDMwKTtcXG59XFxuXFxuLkxpc3RJbWdFbGUge1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4ubGVmdE1lbnVQcm9qZWN0SXRlbVRleHQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5sZWZ0TWVudUl0ZW1TaG93QXNTZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAxMjEsIDExKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDc1LCA3NSwgNzUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5tYWluUGFnZUxpc3RDb250YWluZXIge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5tYWluUGFnZUxpc3RDb250ZW50TmF2QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOjEwcHg7XFxuICAgIGdhcDogM3B4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxpc3RUaXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uYnV0dG9uQWRkQW5vdGhlck1haW5QYWdlTGlzdEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOjEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTEsIDE5MSwgMTkxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDEyMSwgMTEpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMHB4IDBweCA1cHggNXB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4uYnV0dG9uQWRkQW5vdGhlck1haW5QYWdlTGlzdEl0ZW06aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDE4NiwgMzApO1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0Q29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOjg1dnc7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudEJyZWFrUG9pbnQge1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMHZ3LCAwdmgpOyAgIFxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBoZWlnaHQ6MHB4O1xcbn1cXG4uY29udGVudEJyZWFrUG9pbnRTaG93IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE0NywgMTQ3LCAxNDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHZ3LCAwdmgpO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG59XFxuLmNvbnRlbnRCcmVha1BvaW50SW1nIHtcXG4gICAgd2lkdGg6MjNweDtcXG59XFxuXFxuLmJyZWFrUG9pbnRIZWFkaW5nIHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0SXRlbUNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig5OSwgOTcsIDk3KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLm1haW5QYWdlTGlzdEl0ZW1DYXJkTW91c2VJbnNpZGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1OTU5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluUGFnZUxpc3RJdGVtQ2FyZEFjdGl2ZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1OTU5O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5tYWluUGFnZUxpc3RJdGVtQ29udGVudExlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRSaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmZvcm1EaXNwbGF5RHVlRGF0ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgY29sb3I6ICNiNmFjYWM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiAxLjVzO1xcbn1cXG5cXG4uZm9ybURpc3BsYXlEdWVEYXRlU2hvdyB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5mb3JtRGlzcGxheUR1ZURhdGVDb21wbGV0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmZvcm1EaXNwbGF5RHVlRGF0ZTpob3ZlciB7XFxuICAgIGNvbG9yOiAjYjZhY2FjO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm1haW5QYWdlTGlzdEl0ZW1Gb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLmxpc3RGb3JtVGl0bGVUZXh0IHtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLmxpc3RGb3JtVGl0bGVUZXh0OmhvdmVye1xcbiAgICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCB3aGl0ZTtcXG59XFxuXFxuLmxpc3RGb3JtVGl0bGVUZXh0OmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItbGVmdDogMnB4IGRvdHRlZCB3aGl0ZTtcXG59XFxuXFxuLmxpc3RGb3JtQWN0aW9uQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgcGFkZGluZzowcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGlzdEZvcm1BY3Rpb25CdXR0b246aG92ZXIge1xcbiAgICBhbmltYXRpb246IHNob3dBY3RpdmUgMnM7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG4uY2hlY2tCb3hJbWdFbGUge1xcbiAgICB3aWR0aDoyNXB4O1xcbiAgICBtYXJnaW46IDBweCAycHggMHB4IDRweDtcXG59XFxuXFxuLnBlbmNpbEltZ0VsZSB7XFxuICAgIHdpZHRoOjI1cHg7XFxuICAgIG1hcmdpbjogMHB4IDJweCAwcHggNHB4O1xcbn1cXG5cXG4udHJhc2hJbWdFbGUge1xcbiAgICB3aWR0aDoyOHB4O1xcbiAgICBtYXJnaW46IDBweCA0cHggMHB4IDRweDtcXG59XFxuXFxuXFxuQGtleWZyYW1lcyBzaG93QWN0aXZlIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAyNSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZykgc2NhbGUoMS4zNSk7IH1cXG4gICAgNzUlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKSBzY2FsZSgxLjM1KTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMDBkZWcpO31cXG4gIH1cXG5cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjEwcHgpIHtcXG4gICAgLm1haW5QYWdlTGlzdEl0ZW1Db250ZW50TGVmdCB7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAubWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRSaWdodCB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgfVxcbiAgXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vZGFsRm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgzNiwgMzYsIDM2LCAwLjkpOyAgIFxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwdncsIC0xMDB2aCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG4uZm9ybUNvbnRhaW5lclZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwdncsIDB2aCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcblxcbi5mb3JtTW9kYWxMaXN0SXRlbUVkaXQge1xcbmRpc3BsYXk6IGZsZXg7XFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5wb3NpdGlvbjogZml4ZWQ7XFxudG9wOiAyMCU7XFxuYm9yZGVyOiA1cHggc29saWQgI2ZmZmZmZjtcXG5iYWNrZ3JvdW5kOiByZ2IoMjE2LCAyMTUsIDIxNSk7XFxuYm9yZGVyLXJhZGl1czogNXB4O1xcbmNvbG9yOiBibGFjaztcXG5taW4td2lkdGg6IDI1MHB4O1xcbmhlaWdodDogMjAwcHg7XFxudHJhbnNpdGlvbjogYm9yZGVyIDJzO1xcbn1cXG5cXG4uZm9ybU1vZGFsTGFiZWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDBweCAxMHB4O1xcbn1cXG5cXG4uZm9ybU1vZGFsSW5wdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDNweCAxMHB4IDBweCAxMHB4O1xcbn1cXG5cXG4uZm9ybU1vZGFsRG9uZUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHdpZHRoOiAxNTBweDsgICBcXG59XFxuXFxuLnVwZGF0ZUhhc1NhdmVkTWVzc2FnZUZvcm1Nb2RhbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMTg2LCAzMCk7XFxuICAgIGNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6MTAwcHg7XFxuICAgIHRyYW5zaXRpb246IDNzO1xcbn1cXG5cXG4udXBkYXRlSGFzU2F2ZWRNZXNzYWdlRm9ybU1vZGFsU2hvdyB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIFxcbn1cXG5cXG4uZm9ybU1vZGFsTGlzdEl0ZW1FZGl0U2F2ZWQge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMzBkYjA1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdGFza0Zvcm1Nb2RhbFN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7QUFDQSxhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZixRQUFRO0FBQ1IseUJBQXlCO0FBQ3pCLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsWUFBWTtBQUNaLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IscUJBQXFCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubW9kYWxGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgIFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDM2LCAzNiwgMzYsIDAuOSk7ICAgXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dywgLTEwMHZoKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxufVxcbi5mb3JtQ29udGFpbmVyVmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDB2dywgMHZoKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuXFxuLmZvcm1Nb2RhbExpc3RJdGVtRWRpdCB7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG50b3A6IDIwJTtcXG5ib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmO1xcbmJhY2tncm91bmQ6IHJnYigyMTYsIDIxNSwgMjE1KTtcXG5ib3JkZXItcmFkaXVzOiA1cHg7XFxuY29sb3I6IGJsYWNrO1xcbm1pbi13aWR0aDogMjUwcHg7XFxuaGVpZ2h0OiAyMDBweDtcXG50cmFuc2l0aW9uOiBib3JkZXIgMnM7XFxufVxcblxcbi5mb3JtTW9kYWxMYWJlbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4IDEwcHg7XFxufVxcblxcbi5mb3JtTW9kYWxJbnB1dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogM3B4IDEwcHggMHB4IDEwcHg7XFxufVxcblxcbi5mb3JtTW9kYWxEb25lQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgd2lkdGg6IDE1MHB4OyAgIFxcbn1cXG5cXG4udXBkYXRlSGFzU2F2ZWRNZXNzYWdlRm9ybU1vZGFsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAxODYsIDMwKTtcXG4gICAgY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDoxMDBweDtcXG4gICAgdHJhbnNpdGlvbjogM3M7XFxufVxcblxcbi51cGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWxTaG93IHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgXFxufVxcblxcbi5mb3JtTW9kYWxMaXN0SXRlbUVkaXRTYXZlZCB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMzMGRiMDU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBkaXJ0eU9iamVjdCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3NpZ24gcmVxdWlyZXMgdGhhdCBpbnB1dCBwYXJhbWV0ZXIgbm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICBkaXJ0eU9iamVjdCA9IGRpcnR5T2JqZWN0IHx8IHt9O1xuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIGRpcnR5T2JqZWN0KSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkaXJ0eU9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gZGlydHlPYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vYXNzaWduL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU9iamVjdChkaXJ0eU9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBkaXJ0eU9iamVjdCk7XG59IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwidmFyIHJvdW5kaW5nTWFwID0ge1xuICBjZWlsOiBNYXRoLmNlaWwsXG4gIHJvdW5kOiBNYXRoLnJvdW5kLFxuICBmbG9vcjogTWF0aC5mbG9vcixcbiAgdHJ1bmM6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG4gIH0gLy8gTWF0aC50cnVuYyBpcyBub3Qgc3VwcG9ydGVkIGJ5IElFXG5cbn07XG52YXIgZGVmYXVsdFJvdW5kaW5nTWV0aG9kID0gJ3RydW5jJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZGluZ01ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIG1ldGhvZCA/IHJvdW5kaW5nTWFwW21ldGhvZF0gOiByb3VuZGluZ01hcFtkZWZhdWx0Um91bmRpbmdNZXRob2RdO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDsiLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgdGltZXN0YW1wTGVmdCA9IHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWUoKSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICB2YXIgdGltZXN0YW1wUmlnaHQgPSBzdGFydE9mRGF5UmlnaHQuZ2V0VGltZSgpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgZGF5IG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHllYXJEaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGhEaWZmID0gZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpO1xuICByZXR1cm4geWVhckRpZmYgKiAxMiArIG1vbnRoRGlmZjtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRhdGVMZWZ0KS5nZXRUaW1lKCkgLSB0b0RhdGUoZGF0ZVJpZ2h0KS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBpc0xhc3REYXlPZk1vbnRoIGZyb20gXCIuLi9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgdXNpbmcgdHJ1bmMgYXMgYSBkZWZhdWx0IHJvdW5kaW5nIG1ldGhvZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCAzMSkpXG4gKiAvLz0+IDdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Nb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7XG4gIHZhciByZXN1bHQ7IC8vIENoZWNrIGZvciB0aGUgZGlmZmVyZW5jZSBvZiBsZXNzIHRoYW4gbW9udGhcblxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICByZXN1bHQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGlmIChkYXRlTGVmdC5nZXRNb250aCgpID09PSAxICYmIGRhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBkYXRlTGVmdC5zZXREYXRlKDMwKTtcbiAgICB9XG5cbiAgICBkYXRlTGVmdC5zZXRNb250aChkYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpOyAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgbW9udGhzIC0gZGlmZiBpbiBjYWxlbmRhciBtb250aHMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgbW9udGggaXMgbm90IGZ1bGxcbiAgICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcblxuICAgIHZhciBpc0xhc3RNb250aE5vdEZ1bGwgPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAtc2lnbjsgLy8gQ2hlY2sgZm9yIGNhc2VzIG9mIG9uZSBmdWxsIGNhbGVuZGFyIG1vbnRoXG5cbiAgICBpZiAoaXNMYXN0RGF5T2ZNb250aCh0b0RhdGUoZGlydHlEYXRlTGVmdCkpICYmIGRpZmZlcmVuY2UgPT09IDEgJiYgY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAxKSB7XG4gICAgICBpc0xhc3RNb250aE5vdEZ1bGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBOdW1iZXIoaXNMYXN0TW9udGhOb3RGdWxsKSk7XG4gIH0gLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG5cblxuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn0iLCJpbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXRSb3VuZGluZ01ldGhvZCB9IGZyb20gXCIuLi9fbGliL3JvdW5kaW5nTWV0aG9kcy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3RydW5jJ10gLSBhIHJvdW5kaW5nIG1ldGhvZCAoYGNlaWxgLCBgZmxvb3JgLCBgcm91bmRgIG9yIGB0cnVuY2ApXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBnZXRSb3VuZGluZ01ldGhvZChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBjbG9uZU9iamVjdCBmcm9tIFwiLi4vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBkaXN0YW5jZUluV29yZHMgYCB0byBgZm9ybWF0RGlzdGFuY2VgXG4gKiAgIHRvIG1ha2UgaXRzIG5hbWUgY29uc2lzdGVudCB3aXRoIGBmb3JtYXRgIGFuZCBgZm9ybWF0UmVsYXRpdmVgLlxuICpcbiAqIC0gVGhlIG9yZGVyIG9mIGFyZ3VtZW50cyBpcyBzd2FwcGVkIHRvIG1ha2UgdGhlIGZ1bmN0aW9uXG4gKiAgIGNvbnNpc3RlbnQgd2l0aCBgZGlmZmVyZW5jZUluLi4uYCBmdW5jdGlvbnMuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3JkcyhcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlKFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gKiAgICkgLy89PiAnaW4gYWJvdXQgMSBob3VyJ1xuICogICBgYGBcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMCwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAwKSxcbiAqICAgeyBpbmNsdWRlU2Vjb25kczogdHJ1ZSB9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnYWJvdXQgMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGNsb25lT2JqZWN0KG9wdGlvbnMpO1xuICBsb2NhbGl6ZU9wdGlvbnMuYWRkU3VmZml4ID0gQm9vbGVhbihvcHRpb25zLmFkZFN1ZmZpeCk7XG4gIGxvY2FsaXplT3B0aW9ucy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuXG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuICB2YXIgb2Zmc2V0SW5TZWNvbmRzID0gKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQpKSAvIDEwMDA7XG4gIHZhciBtaW51dGVzID0gTWF0aC5yb3VuZCgoc2Vjb25kcyAtIG9mZnNldEluU2Vjb25kcykgLyA2MCk7XG4gIHZhciBtb250aHM7IC8vIDAgdXAgdG8gMiBtaW5zXG5cbiAgaWYgKG1pbnV0ZXMgPCAyKSB7XG4gICAgaWYgKG9wdGlvbnMuaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgNSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAxMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDIwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2hhbGZBTWludXRlJywgbnVsbCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIDIgbWlucyB1cCB0byAwLjc1IGhyc1xuXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgIHZhciBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNzUgZGF5cyB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fTU9OVEgpIHtcbiAgICB2YXIgZGF5cyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fREFZKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIGRheXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9UV09fTU9OVEhTKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYTW9udGhzJywgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpOyAvLyAyIG1vbnRocyB1cCB0byAxMiBtb250aHNcblxuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICB2YXIgbmVhcmVzdE1vbnRoID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG5lYXJlc3RNb250aCwgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPSBtb250aHMgJSAxMjtcbiAgICB2YXIgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTsgLy8gTiB5ZWFycyB1cCB0byAxIHllYXJzIDMgbW9udGhzXG5cbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgMyBtb250aHMgdXAgdG8gTiB5ZWFycyA5IG1vbnRoc1xuICAgIH0gZWxzZSBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDkpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ292ZXJYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyA5IG1vbnRocyB1cCB0byBOIHllYXIgMTIgbW9udGhzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2FsbW9zdFhZZWFycycsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgZGlzdGFuY2VJbldvcmRzIGZyb20gXCIuLi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VUb05vd1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGUgYW5kIG5vdyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIHRvIG5vdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgdG8gbm93ICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBkaXN0YW5jZUluV29yZHNUb05vdyBgIHRvIGBmb3JtYXREaXN0YW5jZVRvTm93YFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzVG9Ob3cobmV3IERhdGUoMjAxNCwgNiwgMiksIHsgYWRkU3VmZml4OiB0cnVlIH0pXG4gKiAgIC8vPT4gJ2luIDYgbW9udGhzJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgeyBhZGRTdWZmaXg6IHRydWUgfSlcbiAqICAgLy89PiAnaW4gNiBtb250aHMnXG4gKiAgIGBgYFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBzcGVjaWZpZXMgaWYgbm93IGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgcGFzc2VkIGRhdGVcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDIgSnVseSAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpXG4gKiApXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTUsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAge2luY2x1ZGVTZWNvbmRzOiB0cnVlfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTYsIHdpdGggYSBzdWZmaXg/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhcbiAqICAgbmV3IERhdGUoMjAxNiwgMCwgMSksXG4gKiAgIHthZGRTdWZmaXg6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdpbiBhYm91dCAxIHllYXInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBBdWd1c3QgMjAxNiBpbiBFc3BlcmFudG8/XG4gKiB2YXIgZW9Mb2NhbGUgPSByZXF1aXJlKCdkYXRlLWZucy9sb2NhbGUvZW8nKVxuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vdyhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGRpc3RhbmNlSW5Xb3JkcyhkaXJ0eURhdGUsIERhdGUubm93KCksIGRpcnR5T3B0aW9ucyk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSBcIi4uL2VuZE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tIFwiLi4vZW5kT2ZNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNMYXN0RGF5T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiB2YXIgcmVzdWx0ID0gaXNMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCAxLCAyOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xhc3REYXlPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuIGVuZE9mRGF5KGRhdGUpLmdldFRpbWUoKSA9PT0gZW5kT2ZNb250aChkYXRlKS5nZXRUaW1lKCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgcHJldmlvdXMgYHBhcnNlYCBpbXBsZW1lbnRhdGlvbiB3YXMgcmVuYW1lZCB0byBgcGFyc2VJU09gLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIHBhcnNlKCcyMDE2LTAxLTAxJylcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgcGFyc2VJU08oJzIwMTYtMDEtMDEnKVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IHZhbGlkYXRlcyBzZXBhcmF0ZSBkYXRlIGFuZCB0aW1lIHZhbHVlcyBpbiBJU08tODYwMSBzdHJpbmdzXG4gKiAgIGFuZCByZXR1cm5zIGBJbnZhbGlkIERhdGVgIGlmIHRoZSBkYXRlIGlzIGludmFsaWQuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIHBhcnNlSVNPKCcyMDE4LTEzLTMyJylcbiAqICAgLy89PiBJbnZhbGlkIERhdGVcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyBkb2Vzbid0IGZhbGwgYmFjayB0byBgbmV3IERhdGVgIGNvbnN0cnVjdG9yXG4gKiAgIGlmIGl0IGZhaWxzIHRvIHBhcnNlIGEgc3RyaW5nIGFyZ3VtZW50LiBJbnN0ZWFkLCBpdCByZXR1cm5zIGBJbnZhbGlkIERhdGVgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsID8gMiA6IHRvSW50ZWdlcihvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpc3RGb3JtTW9kYWxTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpc3RGb3JtTW9kYWxTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza0Zvcm1Nb2RhbFN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFza0Zvcm1Nb2RhbFN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTGlzdEl0ZW1PYmogZnJvbSAnLi9MaXN0SXRlbU9iai5qcyc7XG5pbXBvcnQgZGF0YUV2ZW50cyBmcm9tIFwiLi9kYXRhRXZlbnRzLmpzXCI7XG5pbXBvcnQgdGFza0Zvcm1Nb2RhbCBmcm9tIFwiLi90YXNrRm9ybU1vZGFsLmpzXCI7XG5pbXBvcnQgbGlzdEZvcm1Nb2RhbCBmcm9tIFwiLi9saXN0Rm9ybU1vZGFsLmpzXCI7XG5cbmltcG9ydCBMaXN0SW1nIGZyb20gJy4vel9pbWcvbGlzdEthcnQucG5nJztcbmltcG9ydCBNZW51SW1nIGZyb20gJy4vel9pbWcvbWVudS5wbmcnO1xuaW1wb3J0IEZhY2VTd2VhdEltZyBmcm9tICcuL3pfaW1nL292ZXJkdWVGYWNlU3dlYXQucG5nJztcbmltcG9ydCBOZXdMYW1iSW1nIGZyb20gJy4vel9pbWcvbmV3TGFtYi5wbmcnO1xuaW1wb3J0IEFXZWVrQXdheUltZyBmcm9tICcuL3pfaW1nLzF3ZWVrQ2FsZW5kYXIucG5nJztcbmltcG9ydCBPdmVyQVdlZWtBd2F5SW1nIGZyb20gJy4vel9pbWcvb3ZlcjFXZWVrVGltZU1hY2hpbmUucG5nJztcbmltcG9ydCBOb0R1ZURhdGVJbWcgZnJvbSAnLi96X2ltZy9ub0R1ZURhdGVUaGlua2luZy5wbmcnO1xuaW1wb3J0IENvbXBsZXRlZEltZyBmcm9tICcuL3pfaW1nL2NvbXBsZXRlTGFuZGVkLnBuZyc7XG5cbmltcG9ydCBQZW5jaWxJbWcgZnJvbSAnLi96X2ltZy9wZW5jaWwucG5nJztcbmltcG9ydCBUcmFzaEltZyBmcm9tICcuL3pfaW1nL3RyYXNoLnBuZyc7XG5pbXBvcnQgQ2hlY2tCb3hJbWcgZnJvbSAnLi96X2ltZy9jaGVja2JveC5wbmcnO1xuaW1wb3J0IENoZWNrQm94VW5jaGVja2VkSW1nIGZyb20gJy4vel9pbWcvdW5jaGVja2VkYm94LnBuZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9tRXZlbnRzKCkgeyAgXG5cbiAgICBjb25zdCBkYXRhRXZlbnRzT2JqID0gZGF0YUV2ZW50cygpO1xuICAgIGNvbnN0IGxpc3RJdGVtT2JqZWN0ID0gTGlzdEl0ZW1PYmooKTtcbiAgICBjb25zdCB0YXNrRm9ybU1vZGFsT2JqZWN0ID0gdGFza0Zvcm1Nb2RhbCgpO1xuICAgIGNvbnN0IGxpc3RGb3JtTW9kYWxPYmplY3QgPSBsaXN0Rm9ybU1vZGFsKCk7XG5cbmNvbnN0IGluaXRpYWxTZXRVcCA9ICgpID0+IHtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIilcbiAgICBjb25zdCB0aGVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgdGhlQm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTsgIFxuICAgIFxuICAgIGNvbnN0IG1haW5Db250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBtYWluQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGFpbmVyRGl2XCIpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lckRpdik7XG5cbiAgICBjb25zdCBsZWZ0TWVudU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdE1lbnVOYXYuY2xhc3NMaXN0LmFkZChcImxlZnRNZW51XCIpO1xuICAgIG1haW5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQobGVmdE1lbnVOYXYpO1xuICAgIFxuICAgIGNvbnN0IGJ1cmdlckZseU91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJ1dHRvbmApO1xuICAgIGJ1cmdlckZseU91dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyRmx5T3V0QnV0dG9uXCIpO1xuICAgIGxlZnRNZW51TmF2LmFwcGVuZENoaWxkKGJ1cmdlckZseU91dEJ1dHRvbik7XG5cbiAgICBjb25zdCBidXJnZXJGbHlPdXRJbWdFbGUgPSBuZXcgSW1hZ2UoKTtcbiAgICBidXJnZXJGbHlPdXRJbWdFbGUuY2xhc3NMaXN0LmFkZChcImJ1cmdlckZseU91dFwiKTtcbiAgICBidXJnZXJGbHlPdXRJbWdFbGUuYWx0ID0gXCJTaG93IE1lbnVcIjtcbiAgICBidXJnZXJGbHlPdXRJbWdFbGUuc3JjID0gTWVudUltZztcbiAgICBidXJnZXJGbHlPdXRCdXR0b24uYXBwZW5kQ2hpbGQoYnVyZ2VyRmx5T3V0SW1nRWxlKTtcbiAgICBidXJnZXJGbHlPdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCAoZSkgPT4ge1xuICAgICAgICB0b2dnbGVMZWZ0TWVudVNob3coYGZseU91dGApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGVmdE1lbnVQcm9qZWN0SXRlbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIGxlZnRNZW51UHJvamVjdEl0ZW1MaXN0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0TWVudVByb2plY3RJdGVtTGlzdFwiKTtcbiAgICBsZWZ0TWVudU5hdi5hcHBlbmRDaGlsZChsZWZ0TWVudVByb2plY3RJdGVtTGlzdCk7XG4gICBcbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0Q29udGFpbmVyXCIpO1xuICAgIG1haW5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROYXZCYXIuY2xhc3NMaXN0LmFkZChcIm1haW5QYWdlTGlzdENvbnRlbnROYXZCYXJcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnROYXZCYXIpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW5QYWdlTGlzdENvbnRlbnRcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnQpO1xuICAgIFxuICAgIGFkZFRpbWVCYXNlZEJyZWFrUG9pbnRzKCk7XG5cblxuICAgIGNvbnN0IG5hdkFkZE5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5hdkFkZE5ld0l0ZW0udGV4dENvbnRlbnQgPSBcIk5ldyBMaXN0ICsrXCI7XG4gICAgbmF2QWRkTmV3SXRlbS5jbGFzc0xpc3QuYWRkKFwibmF2QWRkTmV3SXRlbVwiKTtcbiAgICBsZWZ0TWVudVByb2plY3RJdGVtTGlzdC5pbnNlcnRCZWZvcmUobmF2QWRkTmV3SXRlbSwgbGVmdE1lbnVQcm9qZWN0SXRlbUxpc3QuZmlyc3RDaGlsZCk7XG4gICAgXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCApIHtcbiAgICAgICAgYWRkRGVmYXVsdFRvRG9MaXN0KCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IExlZnRNZW51TGlzdEl0ZW1zID0gZGF0YUV2ZW50c09iai5nZXRMaXN0SXRlbURldGFpbHMoXCJpc1BhcmVudFwiLCBudWxsKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IExlZnRNZW51TGlzdEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRoaXNJdGVtID0gZGF0YUV2ZW50c09iai5jcmVhdGVMaXN0T2JqZWN0RnJvbVN0b3JhZ2UoTGVmdE1lbnVMaXN0SXRlbXNbaV0pO1xuICAgICAgICBjb25zdCBsZWZ0TWVudVByb2plY3RJdGVtID0gYWRkTGlzdEl0ZW1Ub01lbnUodGhpc0l0ZW0sIHRydWUpO1xuICAgICAgICBzaG93TGVmdE1lbnVTZWxlY3RlZChsZWZ0TWVudVByb2plY3RJdGVtLCB0aGlzSXRlbSwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzSXRlbS5zZWxlY3RlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzSXRlbS5kaXNwbGF5Q2hpbGRMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHRhc2tGb3JtTW9kYWxPYmplY3QuY3JlYXRlRm9ybSgpO1xuICAgIGxpc3RGb3JtTW9kYWxPYmplY3QuY3JlYXRlRm9ybSgpO1xuXG59XG5cbmZ1bmN0aW9uIGFkZERlZmF1bHRUb0RvTGlzdCgpIHtcbiAgICBjb25zdCBuZXdMaXN0SXRlbSA9IGxpc3RJdGVtT2JqZWN0Lm5ld0xpc3RJdGVtKFxuICAgICAgICBOYU4sIFxuICAgICAgICBcIlRvIERvIExpc3RcIiwgXG4gICAgICAgIFwiXCIsIFxuICAgICAgICAxLCBcbiAgICAgICAgZmFsc2UsIFxuICAgICAgICAncGFyZW50JywgXG4gICAgICAgIHRydWUsIFxuICAgICAgICB0cnVlLFxuICAgICAgICBmYWxzZSk7XG5cbiAgICBuZXdMaXN0SXRlbS5hZGRJdGVtdG9EQigpO1xufVxuXG5jb25zdCByZXBvc2l0aW9uTmV3TGlzdEJ1dHRvbiA9IChlKSA9PiB7XG4gICAgY29uc3QgbmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uYXZBZGROZXdJdGVtYCk7IFxuICAgIGNvbnN0IGxlZnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxlZnRNZW51UHJvamVjdEl0ZW1MaXN0YCk7XG4gICAgbGVmdE1lbnUuaW5zZXJ0QmVmb3JlKG5ld0xpc3RCdXR0b24sIGxlZnRNZW51LmZpcnN0Q2hpbGQpO1xufVxuXG5jb25zdCBhZGRUaW1lQmFzZWRCcmVha1BvaW50cyA9ICgpID0+IHtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFpblBhZ2VMaXN0Q29udGVudGApO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50QnJlYWtQb2ludFwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbS5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1cIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudC5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbSk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbUhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBkaXZgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbUhlYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZChgYnJlYWtQb2ludEhlYWRpbmdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbS5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbUhlYWRpbmdDb250YWluZXIpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbUltZy5jbGFzc0xpc3QuYWRkKGBjb250ZW50QnJlYWtQb2ludEltZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtSW1nLmFsdCA9IFwiTmV3XCI7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1JbWcuc3JjID0gTmV3TGFtYkltZztcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV3SXRlbUhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1JbWcpO1xuICAgIFxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtSGVhZGluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoMmApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtSGVhZGluZ1RleHQudGV4dENvbnRlbnQgPSBcIk5ld1wiO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtSGVhZGluZ1RleHQuY2xhc3NMaXN0LmFkZChgYnJlYWtQb2ludEhlYWRpbmdUZXh0YCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1IZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnROZXdJdGVtSGVhZGluZ1RleHQpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50QnJlYWtQb2ludFwiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZS5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWVcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudC5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZSk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZUl0ZW1IZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWVJdGVtSGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSXRlbUhlYWRpbmdDb250YWluZXIpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZUltZy5jbGFzc0xpc3QuYWRkKGBjb250ZW50QnJlYWtQb2ludEltZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSW1nLmFsdCA9IFwiT3ZlcmR1ZVwiO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSW1nLnNyYyA9IEZhY2VTd2VhdEltZztcbiAgICBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZUl0ZW1IZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSW1nKTtcbiAgXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE92ZXJkdWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaDJgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk92ZXJkdWVcIjtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZUhlYWRpbmcuY2xhc3NMaXN0LmFkZChgYnJlYWtQb2ludEhlYWRpbmdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50T3ZlcmR1ZUl0ZW1IZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlSGVhZGluZyk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vlay5jbGFzc0xpc3QuYWRkKFwiY29udGVudEJyZWFrUG9pbnRcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudC5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWspO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla0hlYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZChgYnJlYWtQb2ludEhlYWRpbmdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWsuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrSGVhZGluZ0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtJbWcuY2xhc3NMaXN0LmFkZChgY29udGVudEJyZWFrUG9pbnRJbWdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtJbWcuYWx0ID0gXCJEdWUgdGhpcyB3ZWVrXCI7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrSW1nLnNyYyA9IEFXZWVrQXdheUltZztcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtIZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla0ltZyk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaDJgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmV4dFdlZWtIZWFkaW5nLnRleHRDb250ZW50ID0gXCJJbiB0aGUgbmV4dCB3ZWVrXCI7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrSGVhZGluZy5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla0hlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE5leHRXZWVrSGVhZGluZyk7XG5cbiAgICBcbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWsuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRCcmVha1BvaW50XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2Vla1wiKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50LmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrSGVhZGluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrSGVhZGluZ0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2Vla0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrSW1nLmNsYXNzTGlzdC5hZGQoYGNvbnRlbnRCcmVha1BvaW50SW1nYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtJbWcuYWx0ID0gXCJEdWUgb3ZlciBhIHdlZWsgYXdheVwiO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrSW1nLnNyYyA9IE92ZXJBV2Vla0F3YXlJbWc7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtIZWFkaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrSW1nKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnRBZnRlck5leHRXZWVrSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgyYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtIZWFkaW5nLnRleHRDb250ZW50ID0gXCJNb3JlIHRoYW4gYSB3ZWVrIGF3YXlcIjtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2Vla0hlYWRpbmcuY2xhc3NMaXN0LmFkZChgYnJlYWtQb2ludEhlYWRpbmdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2Vla0hlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudEFmdGVyTmV4dFdlZWtIZWFkaW5nKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRCcmVha1BvaW50XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXQuY2xhc3NMaXN0LmFkZChcIm1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXRcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudC5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0KTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXRIZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldEhlYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZChgYnJlYWtQb2ludEhlYWRpbmdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0LmFwcGVuZENoaWxkKG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXRIZWFkaW5nQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROb0RhdGVTZXRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SW1nLmNsYXNzTGlzdC5hZGQoYGNvbnRlbnRCcmVha1BvaW50SW1nYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldEltZy5hbHQgPSBcIkR1ZSBvdmVyIGEgd2VlayBhd2F5XCI7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldEltZy5zcmMgPSBOb0R1ZURhdGVJbWc7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldEhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldEltZyk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgyYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk5vIGR1ZSBkYXRlXCI7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldEhlYWRpbmcuY2xhc3NMaXN0LmFkZChgYnJlYWtQb2ludEhlYWRpbmdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50Tm9EYXRlU2V0SGVhZGluZyk7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKFwiY29udGVudEJyZWFrUG9pbnRcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVcIik7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudC5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGUpO1xuXG5cblxuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlSGVhZGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGRpdmApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZUhlYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZChgYnJlYWtQb2ludEhlYWRpbmdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGUuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlSGVhZGluZ0NvbnRhaW5lcik7XG5cbiAgICBjb25zdCBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVJbWcuY2xhc3NMaXN0LmFkZChgY29udGVudEJyZWFrUG9pbnRJbWdgKTtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVJbWcuYWx0ID0gXCJEdWUgb3ZlciBhIHdlZWsgYXdheVwiO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZUltZy5zcmMgPSBDb21wbGV0ZWRJbWc7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlSGVhZGluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RDb250ZW50Q29tcGxldGVJbWcpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgyYCk7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkXCI7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlSGVhZGluZy5jbGFzc0xpc3QuYWRkKGBicmVha1BvaW50SGVhZGluZ2ApO1xuICAgIG1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZUhlYWRpbmdDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlSGVhZGluZyk7XG59XG5cbmNvbnN0IGRpc3BsYXlMaXN0SXRlbUNoaWxkcmVuID0gKGxpc3RJdGVtKSA9PiB7XG4gICAgY29uc3QgbGlzdE1lbnVDaGlsZHJlbiA9IGRhdGFFdmVudHNPYmouZ2V0TGlzdEl0ZW1EZXRhaWxzKFwiZ2V0TGlzdEl0ZW1DaGlsZHJlblwiLCBsaXN0SXRlbS5JRCk7XG4gICAgY29uc3QgbWFpblBhZ2VMaXN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblBhZ2VMaXN0Q29udGVudFwiKTtcbiAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgY29udGVudCBiZWZvcmUgcG9wdWxhdGluZ1xuICAgIHdoaWxlIChtYWluUGFnZUxpc3RDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWFpblBhZ2VMaXN0Q29udGVudC5yZW1vdmVDaGlsZChtYWluUGFnZUxpc3RDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBcbiAgICBhZGRUaW1lQmFzZWRCcmVha1BvaW50cygpO1xuXG4gICAgY29uc3QgcHJldmlvdXNIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0VGl0bGVcIik7XG4gICAgaWYgKCBwcmV2aW91c0hlYWRpbmcgIT0gbnVsbCApIHtcbiAgICAgICAgcHJldmlvdXNIZWFkaW5nLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG1haW5QYWdlTGlzdENvbnRlbnROYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5QYWdlTGlzdENvbnRlbnROYXZCYXJcIik7XG4gICAgY29uc3QgcGFyZW50VGl0bGUgPSBsaXN0SXRlbS50aXRsZTtcbiAgICBjb25zdCBwYWdlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgcGFnZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0VGl0bGVcIik7XG4gICAgcGFnZVRpdGxlLnRleHRDb250ZW50ID0gcGFyZW50VGl0bGU7XG4gICAgbWFpblBhZ2VMaXN0Q29udGVudE5hdkJhci5hcHBlbmRDaGlsZChwYWdlVGl0bGUpO1xuICAgIFxuXG4gICAgLy8gaWYgdGhpcyBpcyB0aGUgc2VsZWN0ZWQgbWVudSwgc2hvdyB0aGUgY2hpbGRyZW5cbiAgICBpZiAobGlzdEl0ZW0uc2VsZWN0ZWQgPT0gdHJ1ZSApIHtcbiAgICAgICAgaWYgKGxpc3RNZW51Q2hpbGRyZW4ubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gaW4gbGlzdE1lbnVDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTGlzdEl0ZW1PYmplY3QgPSBkYXRhRXZlbnRzT2JqLmNyZWF0ZUxpc3RPYmplY3RGcm9tU3RvcmFnZShsaXN0TWVudUNoaWxkcmVuW2l0ZW1dKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVNYWluUGFnZUxpc3RpbmdGb3JtKGNoaWxkTGlzdEl0ZW1PYmplY3QpO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gY2hpbGRyZW4gdG8gZGlzcGxheSwgY3JlYXRlIGEgbmV3IG9uZSByZWFkeSBmb3IgZWRpdGluZzpcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVFbXB0eUxpc3RJdGVtKGxpc3RJdGVtLklEKTtcbiAgICAgICAgfVxuICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25BZGRBbm90aGVyTWFpblBhZ2VMaXN0SXRlbVwiKTtcbiAgICBpZiAoIHByZXZpb3VzQnV0dG9uICE9IG51bGwgKSB7XG4gICAgICAgIHByZXZpb3VzQnV0dG9uLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBidXR0b25BZGRBbm90aGVyTGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkFkZEFub3RoZXJMaXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uQWRkQW5vdGhlck1haW5QYWdlTGlzdEl0ZW1cIik7XG4gICAgYnV0dG9uQWRkQW5vdGhlckxpc3RJdGVtLnRleHRDb250ZW50ID0gXCIrIEFkZCBUYXNrXCI7XG4gICAgYnV0dG9uQWRkQW5vdGhlckxpc3RJdGVtLmFsdCA9IFwiQWRkIGEgdGFzayB0byB0aGlzIGxpc3RcIjtcbiAgICBtYWluUGFnZUxpc3RDb250ZW50TmF2QmFyLmFwcGVuZENoaWxkKGJ1dHRvbkFkZEFub3RoZXJMaXN0SXRlbSk7XG4gICAgYnV0dG9uQWRkQW5vdGhlckxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNyZWF0ZUVtcHR5TGlzdEl0ZW0obGlzdEl0ZW0uSUQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5jb25zdCBjcmVhdGVFbXB0eUxpc3RJdGVtID0gKHBhcmVudElEKSA9PiB7XG4gICAgY29uc3QgYWRkaXRpb25hbExpc3RJdGVtID0gbGlzdEl0ZW1PYmplY3QubmV3TGlzdEl0ZW0oXG4gICAgTmFOLCBcbiAgICBcIlwiLCBcbiAgICBcIlwiLCBcbiAgICAxLCBcbiAgICBmYWxzZSwgXG4gICAgcGFyZW50SUQsIFxuICAgIGZhbHNlLFxuICAgIGZhbHNlLFxuICAgIGZhbHNlKTtcblxuICAgIGFkZGl0aW9uYWxMaXN0SXRlbS5hZGRJdGVtdG9EQigpO1xuXG4gICAgY29uc3QgbmV3RW1wdHlJdGVtRm9ybSA9IGNyZWF0ZU1haW5QYWdlTGlzdGluZ0Zvcm0oYWRkaXRpb25hbExpc3RJdGVtKTtcbiAgICBuZXdFbXB0eUl0ZW1Gb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcblxuICAgIH1cblxuY29uc3Qgc2hvd0JyZWFrUG9pbnRDbGFzcyA9IChlKSA9PiB7XG4gICAgaWYgKCFlLmNsYXNzTGlzdC5jb250YWlucyhgY29udGVudEJyZWFrUG9pbnRTaG93YCkpIHtcbiAgICAgICAgZS5jbGFzc0xpc3QuYWRkKGBjb250ZW50QnJlYWtQb2ludFNob3dgKTtcbiAgICB9XG59XG5cbmNvbnN0IHJlZnJlc2hCcmVha1BvaW50SGVhZGluZyA9IChlKSA9PiB7XG4gICAgLy8gQWZ0ZXIgYSBjYXJkIGlzIGNyZWF0ZWQsIGl0IGlzIGFwcGVuZGVkIHRvIHRoZSBicmVha3BvaW50IHNlY3Rpb24gYXMgdGhlIGZpcnN0IGNoaWxkLiAgXG4gICAgLy8gVGhlcmVmb3JlLCAgYWZ0ZXIgY3JlYXRpb24sIHdlIG5lZWQgdG8gbW92ZSB0aGUgaGVhZGVyIGJhY2sgdG8gdGhlIHRvcCBvZiB0aGUgc2VjdGlvbi5cbiAgICAgIGNvbnN0IG1vdmVUaGlzSGVhZGVyID0gZS5xdWVyeVNlbGVjdG9yKGAuYnJlYWtQb2ludEhlYWRpbmdgKTtcbiAgICAgIGUuaW5zZXJ0QmVmb3JlKG1vdmVUaGlzSGVhZGVyLCBlLmZpcnN0Q2hpbGQpO1xufVxuXG5jb25zdCBjcmVhdGVNYWluUGFnZUxpc3RpbmdGb3JtID0gKGxpc3RJdGVtKSA9PiB7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gbGlzdEl0ZW0uZGF5c0xlZnRUb0R1ZSgpO1xuICAgIGxldCBhcHBlbmRUb1RoaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5QYWdlTGlzdENvbnRlbnRcIik7XG4gICAgXG4gICAgaWYgKCBsaXN0SXRlbS5jb21wbGV0ZWQgPT0gdHJ1ZSApIHtcbiAgICAgICAgYXBwZW5kVG9UaGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1haW5QYWdlTGlzdENvbnRlbnRDb21wbGV0ZWApO1xuICAgICAgICBzaG93QnJlYWtQb2ludENsYXNzKGFwcGVuZFRvVGhpcyk7XG4gICAgfSBlbHNlIGlmICggbGlzdEl0ZW0uY29tbWl0dGVkID09IGZhbHNlICkge1xuICAgICAgICBhcHBlbmRUb1RoaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFpblBhZ2VMaXN0Q29udGVudE5ld0l0ZW1gKTtcbiAgICAgICAgc2hvd0JyZWFrUG9pbnRDbGFzcyhhcHBlbmRUb1RoaXMpO1xuICAgIH0gZWxzZSBpZiAoIGR1ZURhdGUuZGF5c1VudGlsRHVlIDwgMCApIHtcbiAgICAgICAgYXBwZW5kVG9UaGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1haW5QYWdlTGlzdENvbnRlbnRPdmVyZHVlYCk7XG4gICAgICAgIHNob3dCcmVha1BvaW50Q2xhc3MoYXBwZW5kVG9UaGlzKTtcbiAgICB9IGVsc2UgaWYgKCBkdWVEYXRlLmRheXNVbnRpbER1ZSA+IDAgJiYgZHVlRGF0ZS5kYXlzVW50aWxEdWUgPD0gNyApIHtcbiAgICAgICAgYXBwZW5kVG9UaGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1haW5QYWdlTGlzdENvbnRlbnROZXh0V2Vla2ApO1xuICAgICAgICBzaG93QnJlYWtQb2ludENsYXNzKGFwcGVuZFRvVGhpcyk7XG4gICAgfSBlbHNlIGlmICggZHVlRGF0ZS5kYXlzVW50aWxEdWUgPiA3KSB7XG4gICAgICAgIGFwcGVuZFRvVGhpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYWluUGFnZUxpc3RDb250ZW50QWZ0ZXJOZXh0V2Vla2ApO1xuICAgICAgICBzaG93QnJlYWtQb2ludENsYXNzKGFwcGVuZFRvVGhpcyk7XG4gICAgfSBlbHNlIGlmICggZHVlRGF0ZS5kYXlzVW50aWxEdWUgPT0gMCkge1xuICAgICAgICBhcHBlbmRUb1RoaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFpblBhZ2VMaXN0Q29udGVudE5vRGF0ZVNldGApO1xuICAgICAgICBzaG93QnJlYWtQb2ludENsYXNzKGFwcGVuZFRvVGhpcyk7XG4gICAgfVxuICAgXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0SXRlbUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5QYWdlTGlzdEl0ZW1DYXJkLmNsYXNzTGlzdC5hZGQoXCJtYWluUGFnZUxpc3RJdGVtQ2FyZFwiKTtcbiAgICBhcHBlbmRUb1RoaXMuaW5zZXJ0QmVmb3JlKG1haW5QYWdlTGlzdEl0ZW1DYXJkLCBhcHBlbmRUb1RoaXMuZmlyc3RDaGlsZClcblxuICAgIHJlZnJlc2hCcmVha1BvaW50SGVhZGluZyhhcHBlbmRUb1RoaXMpO1xuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluUGFnZUxpc3RJdGVtQ29udGVudExlZnQuY2xhc3NMaXN0LmFkZChcIm1haW5QYWdlTGlzdEl0ZW1Db250ZW50TGVmdFwiKTtcbiAgICBtYWluUGFnZUxpc3RJdGVtQ2FyZC5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RJdGVtQ29udGVudExlZnQpO1xuXG4gICAgbGV0IGxpc3RJdGVtRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGxpc3RJdGVtRm9ybS5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0SXRlbUZvcm1cIik7XG4gICAgbGlzdEl0ZW1Gb3JtLnNldEF0dHJpYnV0ZShcImRhdGEtcGFyZW50TGlzdFwiLCBsaXN0SXRlbS5wYXJlbnRMaXN0KTtcbiAgICBsaXN0SXRlbUZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1pdGVtaWRcIiwgbGlzdEl0ZW0uSUQpO1xuICAgIGxpc3RJdGVtRm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpO1xuICAgIGxpc3RJdGVtRm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCIjXCIpO1xuICAgIFxuICAgIG1haW5QYWdlTGlzdEl0ZW1Db250ZW50TGVmdC5hcHBlbmRDaGlsZChsaXN0SXRlbUZvcm0pO1xuICAgIFxuICAgIFxuICAgIGxpc3RJdGVtRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gXG4gICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJMaXN0IEl0ZW0gVGl0bGVcIik7XG4gICAgaW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKFwibGlzdEZvcm1UaXRsZVRleHRcIik7XG5cbiAgICAgaWYgKCBsaXN0SXRlbS50aXRsZSA9PSBcIlwiICkge1xuICAgICAgICAvLyBpbnB1dFRpdGxlLnBsYWNlaG9sZGVyID0gYCR7bGlzdEl0ZW0uSUR9IC0gVGFzayBUaXRsZSBgO1xuICAgICAgICBpbnB1dFRpdGxlLnBsYWNlaG9sZGVyID0gYFRhc2sgVGl0bGUgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpbnB1dFRpdGxlLnZhbHVlID0gIGAke2xpc3RJdGVtLklEfSAtIGAgKyBsaXN0SXRlbS50aXRsZTtcbiAgICAgICAgaW5wdXRUaXRsZS52YWx1ZSA9ICBsaXN0SXRlbS50aXRsZTtcbiAgICB9XG4gICAgXG4gICAgbGlzdEl0ZW1Gb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuICAgICBcbiAgICBsZXQgZm9ybURpc3BsYXlEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmb3JtRGlzcGxheUR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtkdWVEYXRlLmRheXNVbnRpbER1ZVdvcmRzfWA7XG4gICAgZm9ybURpc3BsYXlEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJmb3JtRGlzcGxheUR1ZURhdGVcIik7XG4gICAgbWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKGZvcm1EaXNwbGF5RHVlRGF0ZSk7XG4gICAgaWYgKCBsaXN0SXRlbS50aXRsZS5sZW5ndGggPiAwICkge1xuICAgICAgICBmb3JtRGlzcGxheUR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImZvcm1EaXNwbGF5RHVlRGF0ZVNob3dcIik7XG4gICAgICAgIGlmICggbGlzdEl0ZW0uY29tcGxldGVkID09IHRydWUgKSB7XG4gICAgICAgICAgICBmb3JtRGlzcGxheUR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImZvcm1EaXNwbGF5RHVlRGF0ZUNvbXBsZXRlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuXG4gICAgY29uc3QgbWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRSaWdodC5jbGFzc0xpc3QuYWRkKFwibWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRSaWdodFwiKTtcbiAgICBtYWluUGFnZUxpc3RJdGVtQ2FyZC5hcHBlbmRDaGlsZChtYWluUGFnZUxpc3RJdGVtQ29udGVudFJpZ2h0KTtcblxuICAgIGNvbnN0IGNoZWNrQm94SW1nQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYnV0dG9uYCk7XG4gICAgY2hlY2tCb3hJbWdCdXR0b24uY2xhc3NMaXN0LmFkZChgY2hlY2tCb3hJbWdCdXR0b25gKTtcbiAgICBjaGVja0JveEltZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGlzdEZvcm1BY3Rpb25CdXR0b25cIik7XG4gICAgbWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRSaWdodC5hcHBlbmRDaGlsZChjaGVja0JveEltZ0J1dHRvbik7XG5cbiAgICBcbiAgICBjb25zdCBjaGVja0JveEltZ0VsZSA9IG5ldyBJbWFnZSgpO1xuICAgIGlmICggbGlzdEl0ZW0uY29tcGxldGVkID09IHRydWUgKSB7XG4gICAgICAgIGNoZWNrQm94SW1nRWxlLnNyYyA9IENoZWNrQm94SW1nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrQm94SW1nRWxlLnNyYyA9IENoZWNrQm94VW5jaGVja2VkSW1nO1xuICAgIH1cbiAgICBjaGVja0JveEltZ0VsZS5jbGFzc0xpc3QuYWRkKGBjaGVja0JveEltZ0VsZWApO1xuICAgIGNoZWNrQm94SW1nRWxlLmFsdCA9IFwiQ2hlY2tib3g6IE1hcmsgdGhpcyBlbnRyeSBhcyBjb21wbGV0ZVwiO1xuICAgIGNoZWNrQm94SW1nQnV0dG9uLmFwcGVuZENoaWxkKGNoZWNrQm94SW1nRWxlKTtcbiAgICBjaGVja0JveEltZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVkbGlzdEl0ZW1DYXJkID0gZS50YXJnZXQuY2xvc2VzdChgLm1haW5QYWdlTGlzdEl0ZW1DYXJkYCk7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZEJyZWFrUG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFpblBhZ2VMaXN0Q29udGVudENvbXBsZXRlYCk7XG4gICAgICAgIGxpc3RJdGVtLmNvbXBsZXRlZCA9ICFsaXN0SXRlbS5jb21wbGV0ZWQ7XG4gICAgICAgIGxpc3RJdGVtLmFkZEl0ZW10b0RCKCk7XG4gICAgICAgIGNvbnN0IHBhcmVudFN0b3JlZEl0ZW0gPSBkYXRhRXZlbnRzT2JqLmdldExpc3RJdGVtRGV0YWlscyhcImdldDFJdGVtXCIsIGxpc3RJdGVtLnBhcmVudExpc3QpO1xuICAgICAgICBjb25zdCBwYXJlbnRPYmplY3QgPSBkYXRhRXZlbnRzT2JqLmNyZWF0ZUxpc3RPYmplY3RGcm9tU3RvcmFnZShwYXJlbnRTdG9yZWRJdGVtKTtcbiAgICAgICAgcGFyZW50T2JqZWN0LmRpc3BsYXlDaGlsZExpc3QoKTtcbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICBjb25zdCBwZW5jaWxJbWdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKTtcbiAgICBwZW5jaWxJbWdCdXR0b24uY2xhc3NMaXN0LmFkZChgcGVuY2lsSW1nQnV0dG9uYCk7XG4gICAgcGVuY2lsSW1nQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0Rm9ybUFjdGlvbkJ1dHRvblwiKTtcbiAgICBtYWluUGFnZUxpc3RJdGVtQ29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHBlbmNpbEltZ0J1dHRvbik7XG5cbiAgICBjb25zdCBwZW5jaWxJbWdFbGUgPSBuZXcgSW1hZ2UoKTtcbiAgICBwZW5jaWxJbWdFbGUuc3JjID0gUGVuY2lsSW1nO1xuICAgIHBlbmNpbEltZ0VsZS5jbGFzc0xpc3QuYWRkKGBwZW5jaWxJbWdFbGVgKTtcbiAgICBwZW5jaWxJbWdFbGUuYWx0ID0gXCJQZW5jaWw6IEVkaXQgdGhpcyBlbnRyeVwiO1xuICAgIHBlbmNpbEltZ0J1dHRvbi5hcHBlbmRDaGlsZChwZW5jaWxJbWdFbGUpO1xuXG4gICAgY29uc3QgdHJhc2hJbWdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKTtcbiAgICB0cmFzaEltZ0J1dHRvbi5jbGFzc0xpc3QuYWRkKGB0cmFzaEltZ0J1dHRvbmApO1xuICAgIHRyYXNoSW1nQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0Rm9ybUFjdGlvbkJ1dHRvblwiKTtcbiAgICBtYWluUGFnZUxpc3RJdGVtQ29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHRyYXNoSW1nQnV0dG9uKTtcblxuICAgIGNvbnN0IHRyYXNoSW1nRWxlID0gbmV3IEltYWdlKCk7XG4gICAgdHJhc2hJbWdFbGUuc3JjID0gVHJhc2hJbWc7XG4gICAgdHJhc2hJbWdFbGUuYWx0ID0gXCJCaW46IERlbGV0ZSB0aGlzIGVudHJ5XCI7XG4gICAgdHJhc2hJbWdFbGUuY2xhc3NMaXN0LmFkZChgdHJhc2hJbWdFbGVgKTtcbiAgICB0cmFzaEltZ0J1dHRvbi5hcHBlbmRDaGlsZCh0cmFzaEltZ0VsZSk7XG5cbiAgICBjb25zdCB1cGRhdGVIYXNTYXZlZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB1cGRhdGVIYXNTYXZlZE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInVwZGF0ZUhhc1NhdmVkTWVzc2FnZVwiKTtcbiAgICB1cGRhdGVIYXNTYXZlZE1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlNhdmVkXCI7XG4gICAgdXBkYXRlSGFzU2F2ZWRNZXNzYWdlLnNldEF0dHJpYnV0ZShcImRhdGEtc2F2ZWR0YWdcIiwgbGlzdEl0ZW0uSUQpO1xuICAgIG1haW5QYWdlTGlzdEl0ZW1Db250ZW50UmlnaHQuYXBwZW5kQ2hpbGQodXBkYXRlSGFzU2F2ZWRNZXNzYWdlKTtcblxuICAgIGlucHV0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIFxuICAgICAgICAvLyB3cml0ZSBhbnkgY2hhbmdlcyBtYWRlIGRpcmVjdGx5IHRvIHN0b3JhZ2VcbiAgICAgICAgaWYgKCBlLnRhcmdldC52YWx1ZS5sZW5ndGggPiAwICkge1xuICAgICAgICBsaXN0SXRlbS50aXRsZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsaXN0SXRlbS5jb21taXR0ZWQgPSB0cnVlO1xuICAgICAgICBsaXN0SXRlbS5hZGRJdGVtdG9EQihsaXN0SXRlbSk7XG4gICAgICAgIC8vIG5vdCB2YWxpZGF0ZWQgYXMgY29tcGxldGUgYnV0IG5vIHR3by13YXkgY29tbXMgaGVyZS4gIEl0IHNob3VsZCByZWFsbHkgaGF2ZSBhIHRlc3QgdG8gY29uZmlybSB0aGlzIGhhcyBiZWVuIGRvbmUgY29ycmVjdGx5OlxuICAgICAgICBjb25zdCBpdGVtU2F2ZWRNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgcFtkYXRhLXNhdmVkdGFnPVwiJHtsaXN0SXRlbS5JRH1cIl1gKTtcbiAgICAgICAgaXRlbVNhdmVkTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidXBkYXRlSGFzU2F2ZWRNZXNzYWdlU2hvd1wiKTtcbiAgICAgICAgaXRlbVNhdmVkTWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGl0ZW1TYXZlZE1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZShcInVwZGF0ZUhhc1NhdmVkTWVzc2FnZVNob3dcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZWxhdGVkRHVlRGF0ZVRleHQgPSBlLnRhcmdldC5jbG9zZXN0KGAubWFpblBhZ2VMaXN0SXRlbUNvbnRlbnRMZWZ0YCkucXVlcnlTZWxlY3RvcihgLmZvcm1EaXNwbGF5RHVlRGF0ZWApO1xuICAgICAgICByZWxhdGVkRHVlRGF0ZVRleHQuY2xhc3NMaXN0LmFkZChgZm9ybURpc3BsYXlEdWVEYXRlU2hvd2ApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBtYWluUGFnZUxpc3RJdGVtQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHsgXG4gICAgICAgIC8vIGlmIHRoZSBpdGVtIHRoYXQgd2FzIGNsaWNrZWQgaXMgYmVpbmcgZGVsZXRlZCwgZG9uJ3QgYXR0ZW1wdCB0byBtYXJrIGl0IGFzIHNlbGVjdGVkXG4gICAgICAgIGlmICggZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidHJhc2hJbWdCdXR0b25cIikgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidHJhc2hJbWdFbGVcIikpIHsgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWFya01haW5QYWdlTGlzdGluZ0NhcmRBc1NlbGVjdGVkKGUudGFyZ2V0LmNsb3Nlc3QoJy5tYWluUGFnZUxpc3RJdGVtQ2FyZCcpKTtcbiAgICB9KTtcblxuICAgIHRyYXNoSW1nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkgeyAgICBcbiAgICAgICAgY29uc3QgY2FyZEVsZW1lbnQgPSBlLnRhcmdldC5jbG9zZXN0KGAubWFpblBhZ2VMaXN0SXRlbUNhcmRgKTtcbiAgICAgICAgaWYgKGNvbmZpcm0oYERlbGV0ZTogXFxuXFxuVGl0bGU6ICR7bGlzdEl0ZW0udGl0bGV9YCkgPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmRlbGV0ZUZyb21EQigpO1xuICAgICAgICB9ICAgIFxuICAgIH0pO1xuXG4gICAgbWFpblBhZ2VMaXN0SXRlbUNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcIm1haW5QYWdlTGlzdEl0ZW1DYXJkTW91c2VJbnNpZGVcIik7XG4gICAgfSk7XG5cbiAgICBtYWluUGFnZUxpc3RJdGVtQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwibWFpblBhZ2VMaXN0SXRlbUNhcmRNb3VzZUluc2lkZVwiKTtcbiAgICB9KTtcblxuICAgIGZvcm1EaXNwbGF5RHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGFza0Zvcm1Nb2RhbE9iamVjdC51cGRhdGVJbnB1dFZhbHVlcyhsaXN0SXRlbSk7XG4gICAgICAgIHRhc2tGb3JtTW9kYWxPYmplY3Quc2hvd0Zvcm0obGlzdEl0ZW0pO1xuICAgICAgfSk7XG4gICAgcGVuY2lsSW1nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIHRhc2tGb3JtTW9kYWxPYmplY3QudXBkYXRlSW5wdXRWYWx1ZXMobGlzdEl0ZW0pO1xuICAgIHRhc2tGb3JtTW9kYWxPYmplY3Quc2hvd0Zvcm0oKTtcbiAgICB9KTtcbiBcblxuICAgICAgaWYgKCBsaXN0SXRlbS5zZWxlY3RlZCA9PSB0cnVlICkge1xuICAgICAgICBtYXJrTWFpblBhZ2VMaXN0aW5nQ2FyZEFzU2VsZWN0ZWQobWFpblBhZ2VMaXN0SXRlbUNhcmQpO1xuICAgICAgICB9XG5yZXR1cm4gbGlzdEl0ZW1Gb3JtO1xuICBcbn1cblxuY29uc3QgbWFya01haW5QYWdlTGlzdGluZ0NhcmRBc1NlbGVjdGVkID0gKG1haW5QYWdlTGlzdEl0ZW1DYXJkKSA9PiB7XG4vLyByZW1vdmUgcHJldmlvdXMgc2VsZWN0aW9uc1xuICAgIGNvbnN0IGFjdGl2ZUNsYXNzZXNUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpblBhZ2VMaXN0SXRlbUNhcmRBY3RpdmVcIik7XG4gICAgYWN0aXZlQ2xhc3Nlc1RvUmVtb3ZlLmZvckVhY2goZSA9PiB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgRE9NIGNsYXNzXG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcIm1haW5QYWdlTGlzdEl0ZW1DYXJkQWN0aXZlXCIpXG4gICAgICAgIC8vIGZpbmQgdGhlIHN0b3JhZ2UgSUQgYW5kIHJlbW92ZSB0aGUgU2VsZWN0ZWQgc3RhdGVcbiAgICAgICAgY29uc3QgZGF0YUl0ZW1JRCA9IGUucXVlcnlTZWxlY3RvcihcIi5tYWluUGFnZUxpc3RJdGVtRm9ybVwiKS5kYXRhc2V0Lml0ZW1pZDtcbiAgICAgICAgIGNvbnN0IHN0b3JhZ2VJdGVtID0gZGF0YUV2ZW50c09iai5nZXRMaXN0SXRlbURldGFpbHMoXCJnZXQxSXRlbVwiLCBkYXRhSXRlbUlEKTtcbiAgICAgICAgIGNvbnN0IHRoaXNJdGVtID0gZGF0YUV2ZW50c09iai5jcmVhdGVMaXN0T2JqZWN0RnJvbVN0b3JhZ2Uoc3RvcmFnZUl0ZW0pO1xuICAgICAgICAgdGhpc0l0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgIHRoaXNJdGVtLmFkZEl0ZW10b0RCKCk7XG4gICAgfSk7XG4gIC8vIHNldCB0aGUgcm93IHRvIGFjdGl2ZSBzdGF0ZSBzbyBpdCdzIGNsZWFyIHdoaWNoIGlzIGJlaW5nIGVkaXRlZFxuICAgICAgICBjb25zdCBkYXRhSXRlbUlEID0gbWFpblBhZ2VMaXN0SXRlbUNhcmQucXVlcnlTZWxlY3RvcihcIi5tYWluUGFnZUxpc3RJdGVtRm9ybVwiKS5kYXRhc2V0Lml0ZW1pZDtcbiAgICAgICAgY29uc3Qgc3RvcmFnZUl0ZW0gPSBkYXRhRXZlbnRzT2JqLmdldExpc3RJdGVtRGV0YWlscyhcImdldDFJdGVtXCIsIGRhdGFJdGVtSUQpO1xuICAgICAgICBjb25zdCB0aGlzSXRlbSA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKHN0b3JhZ2VJdGVtKTtcbiAgICAgICAgdGhpc0l0ZW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzSXRlbS5hZGRJdGVtdG9EQigpO1xuICAgICAgbWFpblBhZ2VMaXN0SXRlbUNhcmQuY2xhc3NMaXN0LmFkZChcIm1haW5QYWdlTGlzdEl0ZW1DYXJkQWN0aXZlXCIpO1xufVxuXG5jb25zdCBhZGRMaXN0SXRlbVRvTWVudSA9ICh0aGlzSXRlbSkgPT4ge1xuICAgIGNvbnN0IGxlZnRNZW51UHJvamVjdEl0ZW1MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0TWVudVByb2plY3RJdGVtTGlzdFwiKTtcbiAgICBcbiAgICBjb25zdCBsZWZ0TWVudVByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGVmdE1lbnVQcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwibGVmdE1lbnVQcm9qZWN0SXRlbVwiKTtcbiAgICBsZWZ0TWVudVByb2plY3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0aXRlbWlkJywgdGhpc0l0ZW0uSUQpO1xuICAgIFxuICAgIGxlZnRNZW51UHJvamVjdEl0ZW1MaXN0Lmluc2VydEJlZm9yZShsZWZ0TWVudVByb2plY3RJdGVtLCBsZWZ0TWVudVByb2plY3RJdGVtTGlzdC5maXJzdENoaWxkKTtcblxuICAgIGNvbnN0IExpc3RJbWdFbGUgPSBuZXcgSW1hZ2UoKTtcbiAgICBMaXN0SW1nRWxlLmNsYXNzTGlzdC5hZGQoXCJMaXN0SW1nRWxlXCIpO1xuICAgIExpc3RJbWdFbGUuYWx0ID0gXCJsaXN0IGljb25cIjtcbiAgICBMaXN0SW1nRWxlLnNyYyA9IExpc3RJbWc7XG4gICAgTGlzdEltZ0VsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGlzdGl0ZW1pZCcsIHRoaXNJdGVtLklEKTtcbiAgICBsZWZ0TWVudVByb2plY3RJdGVtLmFwcGVuZENoaWxkKExpc3RJbWdFbGUpO1xuICAgIFxuICAgIGNvbnN0IGxlZnRNZW51SXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGVmdE1lbnVJdGVtVGl0bGUuY2xhc3NMaXN0LmFkZChcImxlZnRNZW51UHJvamVjdEl0ZW1UZXh0XCIpO1xuICAgIGxlZnRNZW51SXRlbVRpdGxlLnRleHRDb250ZW50ID0gdGhpc0l0ZW0udGl0bGUgKyBcIiAoXCIgKyB0aGlzSXRlbS5JRCArIFwiKVwiO1xuICAgIGxlZnRNZW51SXRlbVRpdGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0aXRlbWlkJywgdGhpc0l0ZW0uSUQpO1xuICAgIGxlZnRNZW51UHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQobGVmdE1lbnVJdGVtVGl0bGUpO1xuXG4gICAgbGVmdE1lbnVQcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZGVsZXRlVW5jb21taXR0ZWRFbnRyaWVzKCk7XG4gICAgICAgIGxlZnRNZW51RXZlbnRMaXN0ZW5lcnMoZS50YXJnZXQpO1xuICAgIH0pO1xuICAgIHJlcG9zaXRpb25OZXdMaXN0QnV0dG9uKCk7XG4gICAgcmV0dXJuIGxlZnRNZW51UHJvamVjdEl0ZW07XG5cbn1cblxuY29uc3Qgc2hvd0xlZnRNZW51U2VsZWN0ZWQgPSAobGVmdE1lbnVQcm9qZWN0SXRlbSwgdGhpc0l0ZW0sIGluaXRpYWxMb2FkKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlUHJldmlvdXNTZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVmdE1lbnVJdGVtU2hvd0FzU2VsZWN0ZWQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmICggcmVtb3ZlUHJldmlvdXNTZWxlY3Rpb24gIT0gbnVsbCAmJiBpbml0aWFsTG9hZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVQcmV2aW91c1NlbGVjdGlvbi5sZW5ndGg7IGkrKyApIHtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JhZ2VJdGVtID0gZGF0YUV2ZW50c09iai5nZXRMaXN0SXRlbURldGFpbHMoXCJnZXQxSXRlbVwiLCByZW1vdmVQcmV2aW91c1NlbGVjdGlvbltpXS5kYXRhc2V0Lmxpc3RpdGVtaWQpO1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlU2VsZWN0ZWRGcm9tVGhpcyA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKHN0b3JhZ2VJdGVtKTtcbiAgICAgICAgICAgIHJlbW92ZVNlbGVjdGVkRnJvbVRoaXMuc2VsZWN0ZWRTdGF0ZVJlbW92ZSgpO1xuICAgICAgICAgICAgcmVtb3ZlUHJldmlvdXNTZWxlY3Rpb25baV0uY2xhc3NMaXN0LnJlbW92ZShcImxlZnRNZW51SXRlbVNob3dBc1NlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgY29uc3QgcGFyZW50QnV0dG9uID0gbGVmdE1lbnVQcm9qZWN0SXRlbS5jbG9zZXN0KCdidXR0b24nKTtcbiAgICBpZiAoIHRoaXNJdGVtLnNlbGVjdGVkID09IHRydWUgKSB7XG4gICAgICAgIHBhcmVudEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibGVmdE1lbnVJdGVtU2hvd0FzU2VsZWN0ZWRcIik7XG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBsZWZ0TWVudUV2ZW50TGlzdGVuZXJzID0gKGNsaWNrZWRFbGVtZW50KSA9PiB7XG4gICAgXG4gICAgY29uc3Qgc3RvcmFnZUl0ZW0gPSBkYXRhRXZlbnRzT2JqLmdldExpc3RJdGVtRGV0YWlscyhcImdldDFJdGVtXCIsIGNsaWNrZWRFbGVtZW50LmRhdGFzZXQubGlzdGl0ZW1pZCk7XG5cbiAgICBjb25zdCB0aGlzSXRlbSA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKHN0b3JhZ2VJdGVtKTtcbiAgICAgICAgaWYgKHRoaXNJdGVtLnNlbGVjdGVkID09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXNJdGVtLnNlbGVjdGVkU3RhdGVBZGQoKTtcbiAgICAgICAgICAgIHNob3dMZWZ0TWVudVNlbGVjdGVkKGNsaWNrZWRFbGVtZW50LCB0aGlzSXRlbSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpc0l0ZW0uZGlzcGxheUNoaWxkTGlzdCgpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUxlZnRNZW51U2hvdygpO1xufVxuXG5jb25zdCBkZWxldGVVbmNvbW1pdHRlZEVudHJpZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVVuY29tbWl0dGVkRW50cmllcyA9IGRhdGFFdmVudHNPYmouZ2V0TGlzdEl0ZW1EZXRhaWxzKFwidW5jb21taXR0ZWRcIik7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxldGVVbmNvbW1pdHRlZEVudHJpZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIGNvbnN0IFVuY29tbWl0dGVkRW50cnkgPSBkYXRhRXZlbnRzT2JqLmNyZWF0ZUxpc3RPYmplY3RGcm9tU3RvcmFnZShkZWxldGVVbmNvbW1pdHRlZEVudHJpZXNbaV0pO1xuICAgICAgICBVbmNvbW1pdHRlZEVudHJ5LmRlbGV0ZUZyb21EQigpO1xuICAgIH1cbn1cblxuY29uc3QgdG9nZ2xlTGVmdE1lbnVTaG93ID0gKGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGJ1cmdlckZseU91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5idXJnZXJGbHlPdXRCdXR0b25gKTtcbiAgICBjb25zdCBuYXZBZGROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hdkFkZE5ld0l0ZW1gKTtcbiAgICBjb25zdCBsZWZ0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdE1lbnVcIik7XG4gICAgY29uc3QgbGVmdE1lbnVQcm9qZWN0SXRlbUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGVmdE1lbnVQcm9qZWN0SXRlbUxpc3RgKTtcbiAgICBpZiAoYWN0aW9uID09IGBmbHlPdXRgKSB7XG4gICAgICAgIGJ1cmdlckZseU91dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGBidXJnZXJGbHlPdXRCdXR0b25IaWRlYCk7XG4gICAgICAgIG5hdkFkZE5ld0l0ZW0uY2xhc3NMaXN0LmFkZChgbmF2QWRkTmV3SXRlbUxlZnRNZW51T3V0YCk7XG4gICAgICAgIGxlZnRNZW51LmNsYXNzTGlzdC5hZGQoXCJsZWZ0TWVudUZseU91dFwiKTtcbiAgICAgICAgbGVmdE1lbnVQcm9qZWN0SXRlbUxpc3QuY2xhc3NMaXN0LmFkZChgbGVmdE1lbnVQcm9qZWN0SXRlbUxpc3RTaG93YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnVyZ2VyRmx5T3V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoYGJ1cmdlckZseU91dEJ1dHRvbkhpZGVgKTtcbiAgICAgICAgbmF2QWRkTmV3SXRlbS5jbGFzc0xpc3QucmVtb3ZlKGBuYXZBZGROZXdJdGVtTGVmdE1lbnVPdXRgKTtcbiAgICAgICAgbGVmdE1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImxlZnRNZW51Rmx5T3V0XCIpO1xuICAgICAgICBsZWZ0TWVudVByb2plY3RJdGVtTGlzdC5jbGFzc0xpc3QucmVtb3ZlKGBsZWZ0TWVudVByb2plY3RJdGVtTGlzdFNob3dgKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICBcbiAgICBcbn1cblxuY29uc3QgaW5pdGlhbEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbGVmdE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxlZnRNZW51XCIpO1xuICAgIGxlZnRNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7IFxuICAgICAgICB0b2dnbGVMZWZ0TWVudVNob3coYGZseU91dGApO1xuICAgIH0pOyBcbiAgICBsZWZ0TWVudS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoZSkgPT4geyBcbiAgICAgICAgdG9nZ2xlTGVmdE1lbnVTaG93KGBmbHlJbmApO1xuICAgIH0pOyBcbiAgICAvLyBsZWZ0IG1lbnUgY2xpY2sgYWN0aW9uc1xuICAgIGNvbnN0IGFsbExlZnRNZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGVmdE1lbnVQcm9qZWN0SXRlbScpO1xuICAgIGFsbExlZnRNZW51SXRlbXMuZm9yRWFjaChlID0+IGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgXG5cbiAgICAgICAgbGVmdE1lbnVFdmVudExpc3RlbmVycyhlLnRhcmdldCk7XG4gIFxuICAgICAgfSkpO1xuXG4gICAgLy8gbmV3IGxpc3QgYnV0dG9uIGFjdGlvbnNcbiAgICBjb25zdCBuYXZBZGROZXdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZBZGROZXdJdGVtXCIpO1xuICAgIG5hdkFkZE5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBlbXB0eSBEQiBlbnRyaWVzIHNvIHRoZSBuZXh0IGF2YWlsYWJsZUlEIGlzIGNvcnJlY3RcbiAgICAgICAgZGVsZXRlVW5jb21taXR0ZWRFbnRyaWVzKCk7XG4gICAgIFxuICAgICAgICBjb25zdCBuZXdMaXN0SXRlbSA9IGxpc3RJdGVtT2JqZWN0Lm5ld0xpc3RJdGVtKFxuICAgICAgICAgICAgTmFOLCBcbiAgICAgICAgICAgIFwiXCIsIFxuICAgICAgICAgICAgXCJcIiwgXG4gICAgICAgICAgICAxLCBcbiAgICAgICAgICAgIGZhbHNlLCBcbiAgICAgICAgICAgICdwYXJlbnQnLCBcbiAgICAgICAgICAgIHRydWUsIFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBmYWxzZSk7XG5cbiAgICAgICAgbmV3TGlzdEl0ZW0uYWRkSXRlbXRvREIoKTtcbiAgICAgICAgbGlzdEZvcm1Nb2RhbE9iamVjdC51cGRhdGVJbnB1dFZhbHVlcyhuZXdMaXN0SXRlbSk7XG4gICAgICAgIHRvZ2dsZUxlZnRNZW51U2hvdygpO1xuICAgICAgICBsaXN0Rm9ybU1vZGFsT2JqZWN0LnNob3dGb3JtKG5ld0xpc3RJdGVtKTtcbiAgICBcbiAgICB9KTtcbn1cblxuXG4gICAgcmV0dXJuIHsgaW5pdGlhbFNldFVwLCBpbml0aWFsRXZlbnRMaXN0ZW5lcnMsIGFkZExpc3RJdGVtVG9NZW51LCBkaXNwbGF5TGlzdEl0ZW1DaGlsZHJlbiwgc2hvd0xlZnRNZW51U2VsZWN0ZWQsIGRlbGV0ZVVuY29tbWl0dGVkRW50cmllc307XG59XG4iLCJcblxuaW1wb3J0IGRhdGFFdmVudHMgZnJvbSBcIi4vZGF0YUV2ZW50cy5qc1wiO1xuaW1wb3J0IERvbUV2ZW50cyBmcm9tIFwiLi9ET01ldmVudHMuanNcIjtcblxuIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdEl0ZW1PYmooKSB7XG5cbiAgICBcblxuICAgIGNvbnN0IG5ld0xpc3RJdGVtID0gKGxpc3RJdGVtSUQsIGxpc3RJdGVtVGl0bGUsIGR1ZURhdGUsIGltcG9ydGFuY2UsIHBpbm5lZCwgcGFyZW50TGlzdCwgc2VsZWN0ZWQsIGNvbW1pdHRlZCwgY29tcGxldGVkKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGFFdmVudHNPYmogPSBkYXRhRXZlbnRzKCk7XG4gICAgICAgIGNvbnN0IERPTUV2ZW50c09iaiA9IERvbUV2ZW50cygpO1xuICAgICAgICAvLyBsZXQgbmV3TGlzdEl0ZW1JRCA9IGxpc3RJdGVtSUQ7XG4gICAgICAgIGlmICggaXNOYU4obGlzdEl0ZW1JRCkgKSB7XG4gICAgICAgICAgICBsaXN0SXRlbUlEID0gZGF0YUV2ZW50c09iai5maW5kTmV4dExpc3RJRCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0ge1xuICAgICAgICAgICAgSUQ6IGxpc3RJdGVtSUQsXG4gICAgICAgICAgICB0aXRsZTogbGlzdEl0ZW1UaXRsZSxcbiAgICAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgICAgICBpbXBvcnRhbmNlOiBpbXBvcnRhbmNlLFxuICAgICAgICAgICAgcGlubmVkOiBwaW5uZWQsXG4gICAgICAgICAgICBwYXJlbnRMaXN0OiBwYXJlbnRMaXN0LFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxuICAgICAgICAgICAgY29tbWl0dGVkLCBjb21taXR0ZWQsXG4gICAgICAgICAgICBjb21wbGV0ZWQsIGNvbXBsZXRlZCxcbiAgICAgICAgICAgIGFkZEl0ZW10b0RCKCkge1xuICAgICAgICAgICAgICAgIGRhdGFFdmVudHNPYmouYWRkTGlzdEl0ZW1Ub0RCKGxpc3RJdGVtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RlZFN0YXRlQWRkKCkge1xuICAgICAgICAgICAgICAgIGRhdGFFdmVudHNPYmouYWRkU3RhdGVTZWxlY3RlZChsaXN0SXRlbSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRTdGF0ZVJlbW92ZSgpIHtcbiAgICAgICAgICAgICAgICBkYXRhRXZlbnRzT2JqLnJlbW92ZVN0YXRlU2VsZWN0ZWQobGlzdEl0ZW0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc3BsYXlDaGlsZExpc3QoKSB7XG4gICAgICAgICAgICAgICAgRE9NRXZlbnRzT2JqLmRpc3BsYXlMaXN0SXRlbUNoaWxkcmVuKGxpc3RJdGVtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXlzTGVmdFRvRHVlKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheXMgPSBkYXRhRXZlbnRzT2JqLmRheXNVbnRpbER1ZShsaXN0SXRlbSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVsZXRlRnJvbURCKCkge1xuICAgICAgICAgICAgICAgIGRhdGFFdmVudHNPYmouZGVsZXRlVGhpc09iamVjdEZyb21EQihsaXN0SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICByZXR1cm4gbGlzdEl0ZW07XG4gICAgfVxuICAgIFxuXG5yZXR1cm4geyBuZXdMaXN0SXRlbSB9O1xuXG59IiwiIFxuaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLCBmb3JtYXREaXN0YW5jZVRvTm93LCBpbnRlcnZhbFRvRHVyYXRpb24sIHBhcnNlSVNPIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IExpc3RJdGVtT2JqIGZyb20gJy4vTGlzdEl0ZW1PYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkYXRhRXZlbnRzKCkge1xuICAgIGNvbnN0IGxpc3RJdGVtT2JqZWN0ID0gTGlzdEl0ZW1PYmooKTtcblxuICAgIGNvbnN0IGFkZExpc3RJdGVtVG9EQiA9IChsaXN0SXRlbSkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaXN0SXRlbS5JRCwgSlNPTi5zdHJpbmdpZnkobGlzdEl0ZW0pKTtcbiAgICB9ICAgXG5cbiAgICBjb25zdCBkZWxldGVUaGlzT2JqZWN0RnJvbURCID0gKGxpc3RJdGVtKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxpc3RJdGVtLklEKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRTdGF0ZVNlbGVjdGVkID0gKGxpc3RJdGVtKSA9PiB7XG4gICAgICAgIGxpc3RJdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgYWRkTGlzdEl0ZW1Ub0RCKGxpc3RJdGVtKTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlU3RhdGVTZWxlY3RlZCA9IChsaXN0SXRlbSkgPT4ge1xuICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBhZGRMaXN0SXRlbVRvREIobGlzdEl0ZW0pO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBjb25zdCBnZXRMaXN0SXRlbURldGFpbHMgPSAocmVxdWVzdFR5cGUsIGl0ZW1JRCkgPT4ge1xuICAgICAgICBsZXQgc3RvcmFnZUl0ZW1zQXJyYXkgPSBbXTtcbiAgICAgICAgY29uc3Qgc3RvcmFnZUtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xuICAgICAgICAgZm9yIChsZXQgaXRlbSBpbiBzdG9yYWdlS2V5cyApIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1Ub0FkZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleXNbaXRlbV0pKTtcbiAgICAgICAgICAgIGlmICggaXRlbVRvQWRkICE9IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgc3RvcmFnZUl0ZW1zQXJyYXkucHVzaChpdGVtVG9BZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoIHJlcXVlc3RUeXBlID09IFwiaXNQYXJlbnRcIiApIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEl0ZW1zID0gc3RvcmFnZUl0ZW1zQXJyYXkuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHN0b3JhZ2VJdGVtc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yYWdlSXRlbXNBcnJheS5wYXJlbnRMaXN0ID09IFwicGFyZW50XCIgJiYgc3RvcmFnZUl0ZW1zQXJyYXkuY29tbWl0dGVkID09IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudEl0ZW1zO1xuICAgICAgICB9IGVsc2UgaWYgKCByZXF1ZXN0VHlwZSA9PSBcImdldDFJdGVtXCIgJiYgaXRlbUlEID4gLTEgKSB7XG4gICAgICAgICAgICBjb25zdCBnZXQxSXRlbSA9IHN0b3JhZ2VJdGVtc0FycmF5LmZpbmQoc3RvcmFnZUl0ZW1zQXJyYXkgPT4gc3RvcmFnZUl0ZW1zQXJyYXkuSUQgPT0gaXRlbUlEKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0MUl0ZW07XG4gICAgICAgIH0gZWxzZSBpZiAoIHJlcXVlc3RUeXBlID09IFwiZ2V0TGlzdEl0ZW1DaGlsZHJlblwiICkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRMaXN0ID0gc3RvcmFnZUl0ZW1zQXJyYXkuZmlsdGVyKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHN0b3JhZ2VJdGVtc0FycmF5KXtyZXR1cm4gc3RvcmFnZUl0ZW1zQXJyYXkucGFyZW50TGlzdCA9PSBpdGVtSUR9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgY2hpbGRMaXN0U29ydGVkID0gY2hpbGRMaXN0LnNvcnQoZnVuY3Rpb24gY29tcGFyZUZuKGEsIGIpe1xuICAgICAgICAgICAgICAgIGxldCBzb3J0VmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5c0EgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMocGFyc2VJU08oYS5kdWVEYXRlKSwgdG9kYXkpO1xuICAgICAgICAgICAgICAgIGxldCBkYXlzQiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhwYXJzZUlTTyhiLmR1ZURhdGUpLCB0b2RheSk7XG5cblxuICAgICAgICAgICAgICAgIGlmIChpc05hTihkYXlzQSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc29ydFZhbHVlICs9IC0xMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXlzQSA+IGRheXNCKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRWYWx1ZSArPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRheXNBIDwgIGRheXNCKSB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRWYWx1ZSArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc29ydFZhbHVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTGlzdDtcbiAgICAgICAgfSBlbHNlIGlmICggcmVxdWVzdFR5cGUgPT0gXCJ1bmNvbW1pdHRlZFwiKSB7XG4gICAgICAgICAgICBjb25zdCB1bmNvbW1pdHRlZCA9IHN0b3JhZ2VJdGVtc0FycmF5LmZpbHRlcihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihzdG9yYWdlSXRlbXNBcnJheSl7cmV0dXJuIHN0b3JhZ2VJdGVtc0FycmF5LmNvbW1pdHRlZCA9PSBmYWxzZX1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gdW5jb21taXR0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICAgIGNvbnN0IGNyZWF0ZUxpc3RPYmplY3RGcm9tU3RvcmFnZSA9IChzdG9yZWRJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRoaXNJdGVtID0gbGlzdEl0ZW1PYmplY3QubmV3TGlzdEl0ZW0oc3RvcmVkSXRlbS5JRCwgc3RvcmVkSXRlbS50aXRsZSwgc3RvcmVkSXRlbS5kdWVEYXRlLCBcbiAgICAgICAgICAgIHN0b3JlZEl0ZW0uaW1wb3J0YW5jZSwgc3RvcmVkSXRlbS5waW5uZWQsIHN0b3JlZEl0ZW0ucGFyZW50TGlzdCwgc3RvcmVkSXRlbS5zZWxlY3RlZCwgc3RvcmVkSXRlbS5jb21taXR0ZWQsIHN0b3JlZEl0ZW0uY29tcGxldGVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXNJdGVtO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmROZXh0TGlzdElEID0gKCkgPT4geyAgICBcbiAgICAgICAgY29uc3QgaWRBcnJheSA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG4gICAgICAgIGxldCBuZXh0SUQgPSAwO1xuICAgICAgICBpZiAoaWRBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBuZXh0SUQgPSBpZEFycmF5LnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGEsIGIpO1xuICAgICAgICAgICAgfSwgLUluZmluaXR5KSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5leHRJRDtcbiAgICB9XG5cbiAgICBjb25zdCBkYXlzVW50aWxEdWUgPSAobGlzdEl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHBhcnNlSVNPKGxpc3RJdGVtLmR1ZURhdGUpO1xuICAgICAgICBsZXQgZGF5cyA9IHt9O1xuICAgICAgICBpZiAobGlzdEl0ZW0uZHVlRGF0ZSA9PSBcIlwiICkge1xuICAgICAgICAgICAgZGF5cy5kYXlzVW50aWxEdWUgPSAnMCc7XG4gICAgICAgICAgICBkYXlzLmRheXNVbnRpbER1ZVdvcmRzID0gYFNldCBhIGR1ZSBkYXRlLi4uYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGlzdEl0ZW0uZHVlRGF0ZSAhPSBcIlwiICkge1xuICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkdWVEYXRlLCBuZXcgRGF0ZSgpKVxuICAgICAgICAgICAgICAgIGlmICggZGlmZmVyZW5jZSA8IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGRheXMuZGF5c1VudGlsRHVlID0gJy0xJztcbiAgICAgICAgICAgICAgICAgICAgZGF5cy5kYXlzVW50aWxEdWVXb3JkcyA9IGBEdWUgJHtmb3JtYXREaXN0YW5jZVRvTm93KGR1ZURhdGUsIHsgYWRkU3VmZml4OiB0cnVlIH0pfWA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRheXMuZGF5c1VudGlsRHVlID0gZGlmZmVyZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgZGF5cy5kYXlzVW50aWxEdWVXb3JkcyA9IGBEdWUgJHtmb3JtYXREaXN0YW5jZVRvTm93KGR1ZURhdGUsIHsgYWRkU3VmZml4OiB0cnVlIH0pfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgICAgICAgXG4gICAgfVxuXG4gICAgICAgXG4gICAgXG5cbiAgICBcbiAgICByZXR1cm4geyBmaW5kTmV4dExpc3RJRCwgYWRkTGlzdEl0ZW1Ub0RCLCBnZXRMaXN0SXRlbURldGFpbHMsIGNyZWF0ZUxpc3RPYmplY3RGcm9tU3RvcmFnZSwgYWRkU3RhdGVTZWxlY3RlZCwgcmVtb3ZlU3RhdGVTZWxlY3RlZCwgZGF5c1VudGlsRHVlLCBkZWxldGVUaGlzT2JqZWN0RnJvbURCIH07XG4gICAgXG4gICAgfSIsImltcG9ydCBkYXRhRXZlbnRzIGZyb20gXCIuL2RhdGFFdmVudHMuanNcIjtcbmltcG9ydCBET01ldmVudHMgZnJvbSBcIi4vRE9NZXZlbnRzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3Rmb3JtTW9kYWwoKSB7XG4gICBcbiAgY29uc3QgZGF0YUV2ZW50c09iaiA9IGRhdGFFdmVudHMoKTtcblxuXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHsgICAgXG4gICAgICBcblxuICAgICAgICAvLyBjbGVhciBvdXQgYW55IHByZXZpb3VzIG1vZGFscyB0aGF0IGhhdmUgYmVlbiBjcmVhdGVkXG4gICAgICAgIGNvbnN0IG1vZGFsc1RvRGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0TW9kYWxGb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICBtb2RhbHNUb0RlbGV0ZS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gICAgICBcbiAgICAgICAgLy9jcmVhdGUgdGhlIG1vZGFsIGZvcm1cbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRhaW5lckRpdlwiKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RNb2RhbEZvcm1Db250YWluZXJcIik7XG4gICAgICAgIFxuICAgICAgICBtYWluQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Nb2RhbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKFwibGlzdEZvcm1Nb2RhbExpc3RJdGVtRWRpdFwiKTtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibW9kYWxGb3JtXCIpO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLnNldEF0dHJpYnV0ZShcImRhdGEtcGFyZW50TGlzdFwiLCBOYU4pO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLnNldEF0dHJpYnV0ZShcImRhdGEtaXRlbUlEXCIsIE5hTik7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKTtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCIjXCIpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Nb2RhbEZvcm0pO1xuXG4gICAgICAgIGNvbnN0IGlucHV0VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgaW5wdXRUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuICAgICAgICBpbnB1dFRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZChgbGlzdEZvcm1Nb2RhbExhYmVsYCk7XG4gICAgICAgIGlucHV0VGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IGBMaXN0IFRpdGxlYDtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlTGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGlucHV0VGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBpbnB1dFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJsaXN0Rm9ybVRpdGxlXCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnBsYWNlaG9sZGVyID0gXCJMaXN0IFRpdGxlXCI7XG4gICAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZChcImxpc3RGb3JtTW9kYWxJbnB1dFwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RGb3JtVGl0bGVcIik7XG4gICAgICAgIGlucHV0VGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGZvcm1Nb2RhbERvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBmb3JtTW9kYWxEb25lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJsaXN0Rm9ybU1vZGFsRG9uZUJ1dHRvblwiKTtcbiAgICAgICAgZm9ybU1vZGFsRG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKGZvcm1Nb2RhbERvbmVCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZUhhc1NhdmVkTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHVwZGF0ZUhhc1NhdmVkTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibGlzdFVwZGF0ZUhhc1NhdmVkTWVzc2FnZUZvcm1Nb2RhbFwiKTtcbiAgICAgICAgdXBkYXRlSGFzU2F2ZWRNZXNzYWdlLnRleHRDb250ZW50ID0gXCJTYXZlZFwiO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKHVwZGF0ZUhhc1NhdmVkTWVzc2FnZSk7XG5cbiAgICAgICAgaW5wdXRUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtSUQgPSBlLnRhcmdldC5jbG9zZXN0KGBmb3JtYCkuZGF0YXNldC5pdGVtaWQ7XG4gICAgICAgICAgICBjb25zdCBzdG9yYWdlSXRlbSA9IGRhdGFFdmVudHNPYmouZ2V0TGlzdEl0ZW1EZXRhaWxzKFwiZ2V0MUl0ZW1cIiwgbGlzdEl0ZW1JRCk7XG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKHN0b3JhZ2VJdGVtKTtcblxuICAgICAgICAgICAgbGlzdEl0ZW0udGl0bGUgPSBpbnB1dFRpdGxlLnZhbHVlO1xuICAgICAgICAgICAgbGlzdEl0ZW0uY29tbWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIG5vdCB2YWxpZGF0ZWQgYXMgY29tcGxldGUgYnV0IG5vIHR3by13YXkgY29tbXMgaGVyZVxuICAgICAgICAgICAgbGlzdEl0ZW0uYWRkSXRlbXRvREIobGlzdEl0ZW0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVIYXNTYXZlZE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImxpc3RVcGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWxTaG93XCIpO1xuICAgICAgICAgICAgZm9ybU1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKFwibGlzdEZvcm1Nb2RhbExpc3RJdGVtRWRpdFNhdmVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlSGFzU2F2ZWRNZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmb3JtTW9kYWxTYXZlZFJlbW92ZSk7XG4gICAgICAgICAgZnVuY3Rpb24gZm9ybU1vZGFsU2F2ZWRSZW1vdmUgKGUpIHtcbiAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImxpc3RVcGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWxTaG93XCIpO1xuICAgICAgICAgICAgICBmb3JtTW9kYWxGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJsaXN0Rm9ybU1vZGFsTGlzdEl0ZW1FZGl0U2F2ZWRcIik7XG4gICAgICAgIH1cbiAgICAgICBcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7IFxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgICAgfSk7XG5cblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNsaWNrT3V0c2lkZU1vZGFsID0gIWUudGFyZ2V0LmNsb3Nlc3QoJy5saXN0Rm9ybU1vZGFsTGlzdEl0ZW1FZGl0Jyk7XG4gICAgICAgICAgaWYgKCBjbGlja091dHNpZGVNb2RhbCA9PSB0cnVlICkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbEZvcm0oKVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZvcm1Nb2RhbEVzY2FwZSk7XG4gICAgICAgIGZ1bmN0aW9uIGZvcm1Nb2RhbEVzY2FwZShlKSB7XG4gICAgICAgICAgaWYgKCBlLmtleSA9PSBcIkVzY2FwZVwiICkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbEZvcm0oKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JtTW9kYWxEb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY2xvc2VNb2RhbEZvcm0oKTtcbiAgICAgICAgfSk7XG4gICAgICAgICBcblxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsRm9ybSA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBET01FdmVudHNPYmogPSBET01ldmVudHMoKTtcbiAgICAgICAgICAvLyB1cGRhdGUgdGhlIG1haW4gcGFnZSBsaXN0aW5nIHZpZXcgdG8gcmVmbGVjdCBhbnkgY2hhbmdlcyB1cG9uIGNsb3N1cmVcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdEZvcm1Nb2RhbExpc3RJdGVtRWRpdGApXG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbUlEID0gZm9ybS5kYXRhc2V0Lml0ZW1pZDtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZExpc3RJdGVtID0gZGF0YUV2ZW50c09iai5nZXRMaXN0SXRlbURldGFpbHMoXCJnZXQxSXRlbVwiLCBsaXN0SXRlbUlEKTtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZGF0YUV2ZW50c09iai5jcmVhdGVMaXN0T2JqZWN0RnJvbVN0b3JhZ2Uoc3RvcmVkTGlzdEl0ZW0pO1xuXG4gICAgICAgICAgaWYgKGxpc3RJdGVtLmNvbW1pdHRlZCA9PSB0cnVlICkgeyAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbGVmdE1lbnVQcm9qZWN0SXRlbSA9IERPTUV2ZW50c09iai5hZGRMaXN0SXRlbVRvTWVudShsaXN0SXRlbSk7XG4gICAgICAgICAgICBET01FdmVudHNPYmouc2hvd0xlZnRNZW51U2VsZWN0ZWQobGVmdE1lbnVQcm9qZWN0SXRlbSwgbGlzdEl0ZW0sIGZhbHNlKTtcbiAgICAgICAgICAgIGxpc3RJdGVtLmRpc3BsYXlDaGlsZExpc3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgICBcbiAgICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsaXN0Rm9ybUNvbnRhaW5lclZpc2libGVcIik7XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IHVwZGF0ZUlucHV0VmFsdWVzID0gKGxpc3RJdGVtKSA9PiB7XG4gICAgICBjb25zdCBmb3JtTW9kYWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0Rm9ybU1vZGFsTGlzdEl0ZW1FZGl0XCIpO1xuICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdEZvcm1UaXRsZVwiKTtcbiAgICAgIGlucHV0VGl0bGUudmFsdWUgPSBcIlwiO1xuICAgICAgZm9ybU1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmVudExpc3RcIiwgbGlzdEl0ZW0ucGFyZW50TGlzdCk7XG4gICAgICBmb3JtTW9kYWxGb3JtLnNldEF0dHJpYnV0ZShcImRhdGEtaXRlbUlEXCIsIGxpc3RJdGVtLklEKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RGb3JtVGl0bGVcIik7XG4gICAgICBpbnB1dFRpdGxlLmZvY3VzKCk7XG4gICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3RNb2RhbEZvcm1Db250YWluZXJgKTtcbiAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RGb3JtQ29udGFpbmVyVmlzaWJsZVwiKTtcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4geyBjcmVhdGVGb3JtLCB1cGRhdGVJbnB1dFZhbHVlcywgc2hvd0Zvcm0gfVxufSAgIiwiaW1wb3J0IGRhdGFFdmVudHMgZnJvbSBcIi4vZGF0YUV2ZW50cy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrZm9ybU1vZGFsKCkge1xuICAgXG4gICAgY29uc3QgZGF0YUV2ZW50c09iaiA9IGRhdGFFdmVudHMoKTtcblxuICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7ICAgIFxuICAgICAgXG5cbiAgICAgICAgLy8gY2xlYXIgb3V0IGFueSBwcmV2aW91cyBtb2RhbHMgdGhhdCBoYXZlIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBtb2RhbHNUb0RlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxGb3JtQ29udGFpbmVyXCIpO1xuICAgICAgICBtb2RhbHNUb0RlbGV0ZS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gICAgICBcbiAgICAgICAgLy9jcmVhdGUgdGhlIG1vZGFsIGZvcm1cbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbkNvbnRhaW5lckRpdlwiKTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsRm9ybUNvbnRhaW5lclwiKTtcbiAgICAgICAgXG4gICAgICAgIG1haW5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgZm9ybU1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtTW9kYWxMaXN0SXRlbUVkaXRcIik7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1vZGFsRm9ybVwiKTtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmVudExpc3RcIiwgTmFOKTtcbiAgICAgICAgZm9ybU1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWl0ZW1JRFwiLCBOYU4pO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIik7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiI1wiKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtTW9kYWxGb3JtKTtcblxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGlucHV0VGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgaW5wdXRUaXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoYGZvcm1Nb2RhbExhYmVsYCk7XG4gICAgICAgIGlucHV0VGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IGBOb3RlIChyZXF1aXJlZClgO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGVMYWJlbCk7XG5cbiAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tGb3JtVGl0bGVcIik7XG4gICAgICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm1Nb2RhbElucHV0XCIpO1xuICAgICAgICBpbnB1dFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0Zvcm1UaXRsZVwiKTtcbiAgICAgICAgaW5wdXRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG4gICAgICAgIGlucHV0VGl0bGUudmFsdWUgPSBcIm4vYVwiO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpO1xuICAgICAgXG4gICAgICAgIGNvbnN0IGlucHV0RHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBpbnB1dER1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVEYXRlXCIpO1xuICAgICAgICBpbnB1dER1ZURhdGVMYWJlbC5jbGFzc0xpc3QuYWRkKGBmb3JtTW9kYWxMYWJlbGApO1xuICAgICAgICBpbnB1dER1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGUgKG9wdGlvbmFsKVwiO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKGlucHV0RHVlRGF0ZUxhYmVsKTtcbiAgICAgICBcblxuICAgICAgICBsZXQgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7ICAgICAgICBcbiAgICAgICAgaW5wdXREdWVEYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdEZvcm1EdWVEYXRlXCIpO1xuICAgICAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZURhdGVcIik7XG4gICAgICAgIGlucHV0RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwibGlzdEZvcm1EdWVEYXRlXCIpO1xuICAgICAgICBpbnB1dER1ZURhdGUuY2xhc3NMaXN0LmFkZChcImZvcm1Nb2RhbElucHV0XCIpO1xuICAgICAgICBpbnB1dER1ZURhdGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXREdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBmb3JtTW9kYWxEb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZm9ybU1vZGFsRG9uZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybU1vZGFsRG9uZUJ1dHRvblwiKTtcbiAgICAgICAgZm9ybU1vZGFsRG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuICAgICAgICBmb3JtTW9kYWxGb3JtLmFwcGVuZENoaWxkKGZvcm1Nb2RhbERvbmVCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZUhhc1NhdmVkTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHVwZGF0ZUhhc1NhdmVkTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwidXBkYXRlSGFzU2F2ZWRNZXNzYWdlRm9ybU1vZGFsXCIpO1xuICAgICAgICB1cGRhdGVIYXNTYXZlZE1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlNhdmVkXCI7XG4gICAgICAgIGZvcm1Nb2RhbEZvcm0uYXBwZW5kQ2hpbGQodXBkYXRlSGFzU2F2ZWRNZXNzYWdlKTtcblxuICAgXG5cbiAgICAgICAgZm9ybU1vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbUlEID0gZS50YXJnZXQuY2xvc2VzdChgZm9ybWApLmRhdGFzZXQuaXRlbWlkO1xuICAgICAgICAgIGNvbnN0IHN0b3JhZ2VJdGVtID0gZGF0YUV2ZW50c09iai5nZXRMaXN0SXRlbURldGFpbHMoXCJnZXQxSXRlbVwiLCBsaXN0SXRlbUlEKTtcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKHN0b3JhZ2VJdGVtKTtcblxuICAgICAgICAgIGxpc3RJdGVtLnRpdGxlID0gaW5wdXRUaXRsZS52YWx1ZTtcbiAgICAgICAgICBsaXN0SXRlbS5kdWVEYXRlID0gaW5wdXREdWVEYXRlLnZhbHVlO1xuICAgICAgICAgIGxpc3RJdGVtLmNvbW1pdHRlZCA9IHRydWU7XG4gICAgICAgICAgbGlzdEl0ZW0uYWRkSXRlbXRvREIobGlzdEl0ZW0pO1xuICAgICAgICAgIC8vIG5vdCB2YWxpZGF0ZWQgYXMgY29tcGxldGUgYnV0IG5vIHR3by13YXkgY29tbXMgaGVyZTpcbiAgICAgICAgICB1cGRhdGVIYXNTYXZlZE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInVwZGF0ZUhhc1NhdmVkTWVzc2FnZUZvcm1Nb2RhbFNob3dcIik7XG4gICAgICAgICAgZm9ybU1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybU1vZGFsTGlzdEl0ZW1FZGl0U2F2ZWRcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZUhhc1NhdmVkTWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZm9ybU1vZGFsU2F2ZWRSZW1vdmUpO1xuICAgICAgICAgIGZ1bmN0aW9uIGZvcm1Nb2RhbFNhdmVkUmVtb3ZlIChlKSB7XG4gICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJ1cGRhdGVIYXNTYXZlZE1lc3NhZ2VGb3JtTW9kYWxTaG93XCIpO1xuICAgICAgICAgICAgICBmb3JtTW9kYWxGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtTW9kYWxMaXN0SXRlbUVkaXRTYXZlZFwiKTtcbiAgICAgICAgICAgICAgLy8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmb3JtTW9kYWxTYXZlZFJlbW92ZSlcbiAgICAgICAgfVxuICAgICAgIFxuXG4gICAgICAgIGZvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHsgXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyBcbiAgICAgICAgICB9KTtcblxuXG4gICAgICAgIGZvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2xpY2tPdXRzaWRlTW9kYWwgPSAhZS50YXJnZXQuY2xvc2VzdCgnLmZvcm1Nb2RhbExpc3RJdGVtRWRpdCcpO1xuICAgICAgICAgIGlmICggY2xpY2tPdXRzaWRlTW9kYWwgPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWxGb3JtKClcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmb3JtTW9kYWxFc2NhcGUpO1xuICAgICAgICBmdW5jdGlvbiBmb3JtTW9kYWxFc2NhcGUoZSkge1xuICAgICAgICAgIGlmICggZS5rZXkgPT0gXCJFc2NhcGVcIiApIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWxGb3JtKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9ybU1vZGFsRG9uZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWxGb3JtKClcbiAgICAgICAgfSk7XG4gICAgICAgICBcblxuICAgICAgICBjb25zdCBjbG9zZU1vZGFsRm9ybSA9ICgpID0+IHtcbiAgICAgICAgICAvLyB1cGRhdGUgdGhlIG1haW4gcGFnZSBsaXN0aW5nIHZpZXcgdG8gcmVmbGVjdCBhbnkgY2hhbmdlcyB1cG9uIGNsb3N1cmVcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbUlEID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcm1Nb2RhbExpc3RJdGVtRWRpdGApLmRhdGFzZXQuaXRlbWlkO1xuICAgICAgICAgIGNvbnN0IHN0b3JlZExpc3RJdGVtID0gZGF0YUV2ZW50c09iai5nZXRMaXN0SXRlbURldGFpbHMoXCJnZXQxSXRlbVwiLCBsaXN0SXRlbUlEKTtcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRhdGFFdmVudHNPYmouY3JlYXRlTGlzdE9iamVjdEZyb21TdG9yYWdlKHN0b3JlZExpc3RJdGVtKTtcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbVBhcmVudE9iamVjdCA9IGRhdGFFdmVudHNPYmouZ2V0TGlzdEl0ZW1EZXRhaWxzKFwiZ2V0MUl0ZW1cIiwgbGlzdEl0ZW0ucGFyZW50TGlzdCk7XG4gICAgICAgICAgY29uc3QgcGFyZW50T2JqZWN0ID0gZGF0YUV2ZW50c09iai5jcmVhdGVMaXN0T2JqZWN0RnJvbVN0b3JhZ2UobGlzdEl0ZW1QYXJlbnRPYmplY3QpO1xuICAgICAgICAgIHBhcmVudE9iamVjdC5kaXNwbGF5Q2hpbGRMaXN0KCk7XG4gICAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybUNvbnRhaW5lclZpc2libGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IHVwZGF0ZUlucHV0VmFsdWVzID0gKGxpc3RJdGVtKSA9PiB7XG4gICAgICBjb25zdCBmb3JtTW9kYWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtTW9kYWxMaXN0SXRlbUVkaXRcIik7XG4gICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVRpdGxlXCIpO1xuICAgICAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0Rm9ybUR1ZURhdGVcIik7XG4gICAgICBpbnB1dFRpdGxlLnZhbHVlID0gbGlzdEl0ZW0udGl0bGU7XG4gICAgICBpbnB1dER1ZURhdGUudmFsdWUgPSBsaXN0SXRlbS5kdWVEYXRlO1xuICAgICAgZm9ybU1vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmVudExpc3RcIiwgbGlzdEl0ZW0ucGFyZW50TGlzdCk7XG4gICAgICBmb3JtTW9kYWxGb3JtLnNldEF0dHJpYnV0ZShcImRhdGEtaXRlbUlEXCIsIGxpc3RJdGVtLklEKTtcbiAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IHNob3dGb3JtID0gKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1UaXRsZVwiKTtcbiAgICAgIGlucHV0VGl0bGUuZm9jdXMoKTtcbiAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubW9kYWxGb3JtQ29udGFpbmVyYCk7IFxuICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybUNvbnRhaW5lclZpc2libGVcIik7XG4gICAgXG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIHsgY3JlYXRlRm9ybSwgdXBkYXRlSW5wdXRWYWx1ZXMsIHNob3dGb3JtIH1cbn0gICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vdGFza0Zvcm1Nb2RhbFN0eWxlLmNzcyc7XG5pbXBvcnQgJy4vbGlzdEZvcm1Nb2RhbFN0eWxlLmNzcyc7XG5cblxuaW1wb3J0IERvbUV2ZW50cyBmcm9tICcuL0RPTWV2ZW50cy5qcyc7XG5cbmNvbnN0IERvbUV2ZW50c0Z1bmN0aW9ucyA9IERvbUV2ZW50cygpO1xuRG9tRXZlbnRzRnVuY3Rpb25zLmluaXRpYWxTZXRVcCgpO1xuRG9tRXZlbnRzRnVuY3Rpb25zLmluaXRpYWxFdmVudExpc3RlbmVycygpO1xuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9