import mongoose, { Document, Model, Schema } from "mongoose";

export interface IGrocery extends Document {
  name: string;
  brand: string;
  price: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

const GrocerySchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    brand: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Grocery ||
  (mongoose.model("Grocery", GrocerySchema) as Model<IGrocery>);
