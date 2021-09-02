"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Auth0({
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    domain: process.env.AUTH0_DOMAIN
  }), // Passwordless / email sign in
  next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Email({
    server: process.env.MAIL_SERVER,
    from: 'NextAuth.js <no-reply@example.com>'
  })],
  // Optional SQL or MongoDB database to persist users
  database: {
    type: "mysql",
    database: process.env.DATABASE_URL
  },
  synchronize: true
}));

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsaUVBQWVBLGdEQUFRLENBQUM7QUFDdEJFLEVBQUFBLFNBQVMsRUFBRSxDQUNURCxnRUFBQSxDQUFnQjtBQUNkRyxJQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQURSO0FBRWRDLElBQUFBLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG1CQUZaO0FBR2RDLElBQUFBLE1BQU0sRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLO0FBSE4sR0FBaEIsQ0FEUyxFQU1UO0FBQ0FWLEVBQUFBLGdFQUFBLENBQWdCO0FBQ2RZLElBQUFBLE1BQU0sRUFBRVIsT0FBTyxDQUFDQyxHQUFSLENBQVlRLFdBRE47QUFFZEMsSUFBQUEsSUFBSSxFQUFFO0FBRlEsR0FBaEIsQ0FQUyxDQURXO0FBYXRCO0FBQ0FDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUUsT0FERTtBQUVSRCxJQUFBQSxRQUFRLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWTtBQUZkLEdBZFk7QUFpQnBCQyxFQUFBQSxXQUFXLEVBQUU7QUFqQk8sQ0FBRCxDQUF2Qjs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9wcm92aWRlcnNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xyXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBQcm92aWRlcnMuQXV0aDAoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSDBfRE9NQUlOXHJcbiAgICB9KSxcclxuICAgIC8vIFBhc3N3b3JkbGVzcyAvIGVtYWlsIHNpZ24gaW5cclxuICAgIFByb3ZpZGVycy5FbWFpbCh7XHJcbiAgICAgIHNlcnZlcjogcHJvY2Vzcy5lbnYuTUFJTF9TRVJWRVIsXHJcbiAgICAgIGZyb206ICdOZXh0QXV0aC5qcyA8bm8tcmVwbHlAZXhhbXBsZS5jb20+J1xyXG4gICAgfSksXHJcbiAgXSxcclxuICAvLyBPcHRpb25hbCBTUUwgb3IgTW9uZ29EQiBkYXRhYmFzZSB0byBwZXJzaXN0IHVzZXJzXHJcbiAgZGF0YWJhc2U6IHtcclxuICAgIHR5cGU6IFwibXlzcWxcIixcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkx9LFxyXG4gICAgc3luY2hyb25pemU6IHRydWVcclxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiKTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJBdXRoMCIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkFVVEgwX0NMSUVOVF9TRUNSRVQiLCJkb21haW4iLCJBVVRIMF9ET01BSU4iLCJFbWFpbCIsInNlcnZlciIsIk1BSUxfU0VSVkVSIiwiZnJvbSIsImRhdGFiYXNlIiwidHlwZSIsIkRBVEFCQVNFX1VSTCIsInN5bmNocm9uaXplIl0sInNvdXJjZVJvb3QiOiIifQ==