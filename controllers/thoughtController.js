// imports
const { User, Thought } = require("../models");

// Get all thoughts
const thoughtController = {
    async getThoughts(req, res) {
      try {
        const thoughts = await Thought.find();
        return res.status(200).json(thoughts);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    
};