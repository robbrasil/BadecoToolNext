"use strict";
(() => {
var exports = {};
exports.id = "pages/api/getentriesbyusers/[userid]";
exports.ids = ["pages/api/getentriesbyusers/[userid]"];
exports.modules = {

/***/ "./pages/api/getentriesbyusers/[userid]/index.ts":
/*!*******************************************************!*\
  !*** ./pages/api/getentriesbyusers/[userid]/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

async function handle(req, res) {
  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient(); // const router = useRouter();
  // console.log(router);

  const {
    userid
  } = req.query;
  const posts = await prisma.entries.findMany({
    where: {
      user_id: parseInt(userid)
    }
  });
  res.json(posts);
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/getentriesbyusers/[userid]/index.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dldGVudHJpZXNieXVzZXJzL1t1c2VyaWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdlLGVBQWVDLE1BQWYsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM3QyxRQUFNQyxNQUFNLEdBQUcsSUFBSUosd0RBQUosRUFBZixDQUQ2QyxDQUU3QztBQUNBOztBQUNBLFFBQU07QUFBRUssSUFBQUE7QUFBRixNQUFhSCxHQUFHLENBQUNJLEtBQXZCO0FBRUEsUUFBTUMsS0FBSyxHQUFHLE1BQU1ILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxRQUFmLENBQXdCO0FBQzFDQyxJQUFBQSxLQUFLLEVBQUU7QUFDSEMsTUFBQUEsT0FBTyxFQUFFQyxRQUFRLENBQUNQLE1BQUQ7QUFEZDtBQURtQyxHQUF4QixDQUFwQjtBQUtBRixFQUFBQSxHQUFHLENBQUNVLElBQUosQ0FBU04sS0FBVDtBQUNEOzs7Ozs7Ozs7O0FDZkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0ZW50cmllc2J5dXNlcnMvW3VzZXJpZF0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcclxuICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8gY29uc29sZS5sb2cocm91dGVyKTtcclxuICBjb25zdCB7IHVzZXJpZCB9ID0gcmVxLnF1ZXJ5O1xyXG5cclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHByaXNtYS5lbnRyaWVzLmZpbmRNYW55KHtcclxuICAgIHdoZXJlOiB7XHJcbiAgICAgICAgdXNlcl9pZDogcGFyc2VJbnQodXNlcmlkKSxcclxuICAgIH0sXHJcbiAgfSlcclxuICByZXMuanNvbihwb3N0cylcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJ1c2VyaWQiLCJxdWVyeSIsInBvc3RzIiwiZW50cmllcyIsImZpbmRNYW55Iiwid2hlcmUiLCJ1c2VyX2lkIiwicGFyc2VJbnQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==