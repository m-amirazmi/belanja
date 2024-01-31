import { Request, Response } from "express";

const index = async (req: Request, res: Response) => {
  // Logic Here...
  return res.json({ message: "Show all" });
};

const store = async (req: Request, res: Response) => {
  // Logic Here...
  return res.json({ message: "Create" });
};

const show = async (req: Request, res: Response) => {
  // Logic Here...
  const { id } = req.params;
  return res.json({ message: "Show one", id });
};
const update = async (req: Request, res: Response) => {
  // Logic Here...
  const { id } = req.params;
  return res.json({ message: "Update one", id });
};

const destroy = async (req: Request, res: Response) => {
  // Logic Here...
  const { id } = req.params;
  return res.json({ message: "Remove one", id });
};

export default { index, store, show, update, destroy };
