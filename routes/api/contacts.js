const express = require("express");
const router = express.Router();
const ctrl = require("../../controlers/controllers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { validSchema } = require("../../helpers");
const { updateFaviriteSchema } = require("../../models/contact");

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(validSchema), ctrl.add);

router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(validSchema),
  ctrl.change
);

router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(updateFaviriteSchema),
  ctrl.updateFavorite
); //оновлюємо 1 поле

router.delete("/:id", authenticate, isValidId, ctrl.del);

module.exports = router;
