import { model, Schema } from "mongoose";
import slugify from "slugify";
import { CategoryType, ICategory } from "../utils/types";

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String },
    type: { type: String, enum: Object.values(CategoryType), required: true },
    icon: { type: String },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

categorySchema.pre<ICategory>("save", function (next) {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, { lower: true });
  }
  next();
});

const Category = model<ICategory>("Category", categorySchema);
export default Category;
