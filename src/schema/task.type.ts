import { z } from "zod";

import {
  createTaskSchema,
  updateTaskSchema,
  getTaskSchema,
  deleteTaskSchema,
} from "../schema/task.schema";

export type CreateTaskInput = z.infer<typeof createTaskSchema>;

export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;

export type GetTaskInput = z.infer<typeof getTaskSchema>;

export type DeleteTaskInput = z.infer<typeof deleteTaskSchema>;