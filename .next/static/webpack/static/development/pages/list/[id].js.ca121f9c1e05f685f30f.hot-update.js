webpackHotUpdate("static\\development\\pages\\list\\[id].js",{

/***/ "./pages/list/[id].js":
/*!****************************!*\
  !*** ./pages/list/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Lists_CarList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Lists/CarList */ "./components/Lists/CarList.js");
/* harmony import */ var _configuration_model_apiSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../configuration/model/apiSettings */ "./configuration/model/apiSettings.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Lists_CatalogList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Lists/CatalogList */ "./components/Lists/CatalogList.js");

var _jsxFileName = "E:\\VisualProjects\\CarCatalogApp\\CarCatalogClient\\pages\\list\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var Post = function Post(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  if (router.query.id === "car") {
    return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Cars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(_components_Lists_CarList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      cars: props.objects,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  }

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Catalogs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_Lists_CatalogList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    catalogs: props.objects,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

Post.getInitialProps = function _callee(context) {
  var path, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          path = Object(_configuration_model_apiSettings__WEBPACK_IMPORTED_MODULE_5__["default"])().concat("/".concat(context.query.id));

          if (context.catalogId !== undefined) {
            path = path.concat("/catalog/".concat(context.catalogId));
          }

          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(path));

        case 4:
          res = _context.sent;
          _context.next = 7;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 7:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", {
            objects: data
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.ca121f9c1e05f685f30f.hot-update.js.map