const express = require("express");
const router = express.Router();
const ctrl = require("../../controlers/controllers");

const { validateBody } = require("../../middlewares");
const { validSchema } = require("../../helpers");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(validSchema), ctrl.add);

router.put("/:contactId", validateBody(validSchema), ctrl.change);

router.delete("/:contactId", ctrl.del);

module.exports = router;
