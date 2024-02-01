import { Request, Response } from "express";
import Category from "../models/category.model";
import Record from "../models/record.model";
import { ICategory, IRecord } from "../utils/types";

const index = async (req: Request, res: Response) => {
  try {
    const records: IRecord[] = await Record.find({}).populate("category");
    return res.json(records);
  } catch (error) {
    console.error("Error fetching records:", error);
    res.status(500).send("Internal Server Error");
  }
};

const store = async (req: Request, res: Response) => {
  try {
    const { amount, remark, category_id } = req.body;
    const categoryExists: ICategory | null = await Category.findById(
      category_id
    );
    if (!categoryExists) {
      return res.status(404).json({ message: "Category not found" });
    }
    const newRecord: IRecord = new Record({
      amount,
      remark,
      category: category_id,
    });
    const savedRecord = await newRecord.save();
    res.status(201).json(savedRecord);
  } catch (error) {
    console.error("Error creating record:", error);
    res.status(500).send("Internal Server Error");
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const records = await Record.findById(id).populate("category");
    return res.json(records);
  } catch (error) {
    console.error("Error fetching records:", error);
    res.status(500).send("Internal Server Error");
  }
};
const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { amount, remark } = req.body;
    const record: IRecord | null = await Record.findById(id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    record.amount = amount;
    record.remark = remark;
    const updatedRecord = await record.save();
    return res.json(updatedRecord);
  } catch (error) {
    console.error("Error updating record:", error);
    res.status(500).send("Internal Server Error");
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const record = await Record.findById(id);
    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }
    await record.deleteOne();
    return res.json({ message: "Record removed successfully" });
  } catch (error) {
    console.error("Error removing Record:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default { index, store, show, update, destroy };
