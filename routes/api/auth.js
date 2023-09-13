const express = require("express");
const { valideteBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");
const ctrl = require("../../controlers/usersCtrl");

const router = express.Router();

router.post("/register", valideteBody(schemas.registerSchema), ctrl.register);

router.post("/login", valideteBody(schemas.registerSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
