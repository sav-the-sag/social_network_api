// imports
const { Schema, model } = require("mongoose");

// User schema
const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
    });