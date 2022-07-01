var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/get_topbar", function (req, res, next) {
    res.send({
        status: 200,
        list: [
            {
                name: 1,
                title: "首页",
            },
            {
                name: 2,
                title: "签到",
            },
            {
                name: 3,
                title: "前端",
            },
            {
                name: 4,
                title: "后端",
            },
            {
                name: 5,
                title: "关于",
            },
            {
                name: 6,
                title: "更多",
            },
        ],
    });
});

module.exports = router;
