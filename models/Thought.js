// imports
const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Thought schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  });

// increases reaction count in Thought model object when reactions are added to a thought
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });
  
// creates Thought model with thoughtSchema
const Thought = model("thought", thoughtSchema);
  
// exports
module.exports = Thought;