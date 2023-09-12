const express = require("express");
const router = express.Router();
const ctrl = require("../../controlers/controllers");

const { validateBody, isValidId } = require("../../middlewares");
const { validSchema } = require("../../helpers");
const { updateFaviriteSchema } = require("../../models/contact");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(validSchema), ctrl.add);

router.put("/:id", isValidId, validateBody(validSchema), ctrl.change);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateFaviriteSchema),
  ctrl.updateFavorite
); //оновлюємо 1 поле

router.delete("/:id", isValidId, ctrl.del);

module.exports = router;
