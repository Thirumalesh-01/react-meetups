(() => {
var exports = {};
exports.id = 929;
exports.ids = [929];
exports.modules = {

/***/ 5459:
/***/ ((module) => {

// Exports
module.exports = {
	"details": "MeetUpItemDetails_details__QXX3S"
};


/***/ }),

/***/ 3780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _meetid_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/meetups/MeetUpItemDetails.module.css
var MeetUpItemDetails_module = __webpack_require__(5459);
var MeetUpItemDetails_module_default = /*#__PURE__*/__webpack_require__.n(MeetUpItemDetails_module);
;// CONCATENATED MODULE: ./components/meetups/MeetUpItemDetails.js


const MeetUpItemDetails = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (MeetUpItemDetails_module_default()).details,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.image,
                alt: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("address", {
                children: props.address
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: props.description
            })
        ]
    });
};
/* harmony default export */ const meetups_MeetUpItemDetails = (MeetUpItemDetails);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
;// CONCATENATED MODULE: ./pages/[meetid]/index.js
//-->> Here comes the description of like showing the each entity when user clicks the button
//-->> so we try to use the semantic way of aligning the things
//-->> Thus we use the section tag here, and that contains h1,img, and address tags





const { ObjectId  } = __webpack_require__(8013);
function eachItemDisplay(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Hotel Details"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "Info of specific meetup",
                        description: "MeetUP Info"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetUpItemDetails, {
                image: props.meetupsDetailing.image,
                title: props.meetupsDetailing.title,
                address: props.meetupsDetailing.address,
                description: props.meetupsDetailing.description
            })
        ]
    });
}
//-->> [meetid]
// here this page or the folder is very crucial as we see here that it is more specifically
// dynamic in nature so /{} , this things or the params must be prepreloaded
//-->> we here the StaticPath or the ServerPath Concept we typically use
//-->> SO, we create the paths which is the array, that contains the respective params
//-->> here the params are nothing but the ids which we get
async function getStaticPaths(context) {
    const client = await external_mongodb_.MongoClient.connect("mongodb://0.0.0.0:27017");
    const db = client.db();
    const myData = db.collection("meetups");
    const idInfo = await myData.find({}, {
        _id: 1
    }).toArray();
    client.close();
    return {
        fallback: "blocking",
        paths: idInfo.map((current)=>({
                params: {
                    meetid: current._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    const meetid = context.params.meetid;
    //.meetid , since this is the [meetid] which is the name of the folder
    const client = await external_mongodb_.MongoClient.connect("mongodb://0.0.0.0:27017");
    const db = client.db();
    const myData = db.collection("meetups");
    const idInfo = await myData.findOne({
        _id: new ObjectId(meetid)
    });
    client.close();
    return {
        props: {
            meetupsDetailing: {
                image: idInfo.image,
                address: idInfo.address,
                description: idInfo.description,
                title: idInfo.title,
                id: idInfo._id.toString()
            }
        }
    };
}
/* harmony default export */ const _meetid_ = (eachItemDisplay);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3780));
module.exports = __webpack_exports__;

})();