const express = require("express");
const { valideteBody } = require("../../middlewares/validateBody");
const { schemas } = require("../../models/user");
const ctrl = require("../../controlers/usersCtrl");

const router = express.Router();
module.exports = router;

router.post("/register", valideteBody(schemas.registerSchema), ctrl.register);
