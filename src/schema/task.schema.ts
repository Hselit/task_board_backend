import { z } from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    name: z.string().trim().min(1, "Task name is required").max(100, "Task name cannot exceed 100 characters"),
    description: z.string().trim().max(500, "Description cannot exceed 500 characters").optional(),
    listId: z.number().int().positive(),
  }),
});

export const updateTaskSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
  body: z.object({
    name: z.string().trim().min(1).max(100).optional(),
    description: z.string().trim().max(500).optional(),
    listId: z.number().int().positive().optional(),
    position: z.number().int().min(1).optional(),
    version: z.number().int().positive().optional(),
  }),
});

export const getTaskSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  }),
});

export const deleteTaskSchema = getTaskSchema;