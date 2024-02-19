// imports
const router = require("express").Router();
const apiRoutes = require("./api");

// middleware
router.use("/api", apiRoutes);

router.use((req, res) => res.send("Wrong route!"));

// exports
module.exports = router;