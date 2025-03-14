const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createNewContact,
} = require("../controllers/ContactController");

router.route("/").get(getAllContacts).post(createNewContact);

module.exports = router;
