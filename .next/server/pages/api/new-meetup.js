"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 5705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb/lib"
const lib_namespaceObject = require("mongodb/lib");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js

async function handlingInfo(req, res) {
    const client = await lib_namespaceObject.MongoClient.connect("mongodb://0.0.0.0:27017");
    const db = client.db();
    const myCollection = db.collection("meetups");
    if (req.method = "POST") {
        const meetupInfo = req.body;
        myCollection.insertOne(meetupInfo);
    }
    res.send({
        message: "Successful"
    });
}
/* harmony default export */ const new_meetup = (handlingInfo);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5705));
module.exports = __webpack_exports__;

})();