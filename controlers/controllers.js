const contacts = require("../models/contacts");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await contacts.listContacts();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.getContactById(id);

  if (!result) {
    throw HttpError(404, "Not Found");

    // const error = new Error("Not found");
    // error.status = 404;
    // throw error;

    // return res.status(404).json({ message: "Not Found" });
  }

  res.status(200).json(result);
};

const add = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const del = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) throw HttpError(404, "Not Found");

  res.status(200).json({ message: "contact deleted" });
};

const change = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);

  if (!result) throw HttpError(404, "Not Found");

  res.status(200).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  del: ctrlWrapper(del),
  change: ctrlWrapper(change),
};

// _____old version______//

// const del = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await contacts.removeContact(id);
//     if (!result) throw HttpError(404, "Not Found");

//     res.status(200).json({ message: "contact deleted" });
//   } catch (error) {
//     next(error);
//   }
// };

// const change = async (req, res) => {
//   const { error } = addSchema.validate(req.body);
//   if (error) {
//     throw HttpError(404, error.message);
//   }

//   const { id } = req.params;
//   const result = await contacts.updateContact(id, req.body);

//   if (!result) throw HttpError(404, "Not Found");

//   res.status(200).json(result);
// };
