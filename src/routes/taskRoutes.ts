import { Router } from "express";
import { validate } from "../middleware/validator";
import { createTask, getAllTasks, deleteTask, updateTask,getTaskById } from "../controller/taskController";

const router = Router();

router.get("/", getAllTasks);

router.get("/:id", validate(), getTaskById);

router.post("/", validate(), createTask);

router.put("/:id", validate(), updateTask);

router.delete("/:id", validate(), deleteTask);

export default router;