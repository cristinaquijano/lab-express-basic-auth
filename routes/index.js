const router = require("express").Router();
const {isLoggedIn} = require("../middleware/routeGuard")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/private", isLoggedIn, (req,res) => {
  res.render("private", {user: req.session.currentUser})
})

module.exports = router;
