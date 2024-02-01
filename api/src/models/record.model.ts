import { model, Document, Schema } from "mongoose";
import { IRecord } from "../utils/types";

const recordSchema = new Schema(
  {
    amount: { type: Number, default: 0 },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    remark: { type: String },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const Record = model<IRecord>("Record", recordSchema);
export default Record;
