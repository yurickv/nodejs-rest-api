const express = require("express");
const router = express.Router();
const ctrl = require("../../controlers/controllers");

const { validateBody } = require("../../middlewares");
const { validSchema } = require("../../helpers");

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(validSchema), ctrl.add);

router.put("/:id", validateBody(validSchema), ctrl.change);

router.delete("/:id", ctrl.del);

module.exports = router;
