import { Router } from "express";
import category from "../controllers/category.controller";

const router = Router();
router.get("/", category.index);
router.post("/", category.store);
router.get("/:id", category.show);
router.put("/:id", category.update);
router.delete("/:id", category.destroy);

export default router;
