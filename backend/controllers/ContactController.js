const Contact = require("../models/ContactModel");

const getAllContacts = async (req, res) => {
  try {
    const data = await Contact.find({});

    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({
      message: "NOT FOUND ANY CONTACTS",
    });
  }
};

const createNewContact = async (req, res) => {
  try {
    const { name, email, description } = req.body;
    const contact = new Contact({
      name,
      email,
      description,
    });
    const createdContact = await contact.save();
    res.status(201).json(createdContact);
  } catch (err) {
    res.status(404).json({
      message: "Email already exists",
    });
  }
};

module.exports = { getAllContacts, createNewContact };
