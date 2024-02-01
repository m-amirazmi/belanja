import { Router } from "express";
import record from "../controllers/record.controller";

const router = Router();
router.get("/", record.index);
router.post("/", record.store);
router.get("/:id", record.show);
router.put("/:id", record.update);
router.delete("/:id", record.destroy);

export default router;
