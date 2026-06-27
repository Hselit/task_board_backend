import { Router } from "express";
import { validate } from "../middleware/validator";
import { createTask, getAllTasks, deleteTask, updateTask,getTaskById } from "../controller/taskController";
import { createTaskSchema, deleteTaskSchema, getTaskSchema, updateTaskSchema } from "../schema/task.schema"

const router = Router();

router.get("/", getAllTasks);

router.post("/", validate(createTaskSchema), createTask);

router.get("/:id", validate(getTaskSchema), getTaskById);

router.put("/:id", validate(updateTaskSchema), updateTask);

router.delete("/:id", validate(deleteTaskSchema), deleteTask);

export default router;