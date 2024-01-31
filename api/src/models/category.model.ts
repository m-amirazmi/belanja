import { model, Document, Schema } from "mongoose";
import slugify from "slugify";

enum CategoryType {
  earn = "earn",
  spend = "spend",
}

interface ICategory extends Document {
  name: string;
  slug: string;
  type: CategoryType;
  icon: string;
}

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String },
  type: { type: String, enum: Object.values(CategoryType), required: true },
  icon: { type: String },
});

categorySchema.pre<ICategory>("save", function (next) {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, { lower: true });
  }
  next();
});

const Category = model<ICategory>("Category", categorySchema);
export default Category;
