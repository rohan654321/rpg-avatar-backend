const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  strength: { type: Number, default: 10 },
  agility: { type: Number, default: 10 },
  intelligence: { type: Number, default: 10 },
  avatar: { type: String }, // Avatar customization details (JSON or URL)
});

module.exports = mongoose.model("Character", CharacterSchema);
