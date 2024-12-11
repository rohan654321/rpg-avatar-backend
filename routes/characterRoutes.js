const express = require("express");
const Character = require("../models/character");

const router = express.Router();

// Get all characters
router.get("/", async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new character
router.post("/", async (req, res) => {
  const { name, strength, agility, intelligence, avatar } = req.body;

  try {
    const character = new Character({
      name,
      strength,
      agility,
      intelligence,
      avatar,
    });
    const savedCharacter = await character.save();
    res.status(201).json(savedCharacter);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Randomly generate RPG stats
router.get("/random", (req, res) => {
  const randomStats = {
    strength: Math.floor(Math.random() * 20) + 1,
    agility: Math.floor(Math.random() * 20) + 1,
    intelligence: Math.floor(Math.random() * 20) + 1,
  };
  res.json(randomStats);
});

module.exports = router;
