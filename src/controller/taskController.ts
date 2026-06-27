import { Request, Response, NextFunction } from "express";
import * as taskService from "../service/taskService";
import { MESSAGES } from "../utils/message";

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await taskService.createTask(req.body);

    res.status(201).json({
      message: MESSAGES.TASK_CREATED_SUCCESS,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await taskService.getAllTasks();

    res.status(200).json({
      message: MESSAGES.TASK_FETCHED_SUCCESS,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const task = await taskService.getTaskById(id);

    if (!task) {
      return res.status(404).json({
        message: MESSAGES.TASK_NOT_FOUND,
      });
    }

    res.status(200).json({
      message: MESSAGES.TASK_FETCHED_SUCCESS,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const task = await taskService.updateTask(id, req.body);

    res.status(200).json({
      message: MESSAGES.TASK_FETCHED_SUCCESS,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    await taskService.deleteTask(id);

    res.status(200).json({
      message: MESSAGES.TASK_DELETED_SUCCESS,
    });
  } catch (error) {
    next(error);
  }
};



