import { Document } from "mongoose";

export enum CategoryType {
  earn = "earn",
  spend = "spend",
}

export interface ICategory extends Document {
  name: string;
  slug: string;
  type: CategoryType;
  icon: string;
}

export interface IRecord extends Document {
  amount: number;
  category: ICategory["_id"];
  remark: string;
}
