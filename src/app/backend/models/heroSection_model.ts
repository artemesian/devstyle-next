require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import DiffPlugin from "mongoose-history-diff";
import { IHeroSection } from "../lib/interfaces";

const heroSectionSchema: Schema<IHeroSection> = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    image: {},

    show: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

heroSectionSchema.plugin(DiffPlugin);

export default mongoose.models.HeroSection ||
  mongoose.model("HeroSection", heroSectionSchema);
