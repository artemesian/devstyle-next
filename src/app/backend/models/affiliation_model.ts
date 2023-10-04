require("dotenv").config();
import mongoose, { Document, Model, Schema } from "mongoose";
import DiffPlugin from "mongoose-history-diff";
import { IAffiliation } from "../lib/interfaces";

const AffiliationSchema: Schema<IAffiliation> = new mongoose.Schema(
  {
    ambassadorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ambassador",
      required: true,
    },
    affiliateCode: {
      type: String,
      required: true,
    },
    affiliateLink: {
      type: String,
      required: true,
    },
    clicksCount: {
      type: Number,
      default: 0,
      require: false,
    },
  },
  { timestamps: true }
);

AffiliationSchema.plugin(DiffPlugin);

export default mongoose.models.Affiliation ||
  mongoose.model("Affiliation", AffiliationSchema);
