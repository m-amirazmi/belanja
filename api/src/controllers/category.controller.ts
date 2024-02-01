import { Request, Response } from "express";
import Category from "../models/category.model";

const index = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find({});
    return res.json(categories);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).send("Internal Server Error");
  }
};

const store = async (req: Request, res: Response) => {
  try {
    const { name, type, icon } = req.body;
    const newCategory = new Category({ name, type, icon });
    const savedCategory = await newCategory.save();
    return res.status(201).json(savedCategory);
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).send("Internal Server Error");
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.json(category);
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).send("Internal Server Error");
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { icon } = req.body;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    category.icon = icon;
    const updatedCategory = await category.save();
    return res.json(updatedCategory);
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).send("Internal Server Error");
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    await category.deleteOne();
    return res.json({ message: "Category removed successfully" });
  } catch (error) {
    console.error("Error removing category:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default { index, store, show, update, destroy };
