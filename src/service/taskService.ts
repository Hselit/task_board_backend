import * as taskRepository from "../repository/taskRepository";

import { getSocketServer } from "../socket/socketService";


export const createTask = async (data: any) => {
  const task = await taskRepository.createTask(data);
   emit("task:created", task);

  return task;
};

export const getAllTasks = async () => {
  return await taskRepository.getAllTasks();
};

export const getTaskById = async (id: number) => {
  return await taskRepository.getTaskById(id);
};

export const updateTask = async (id: number, data: any) => {
  return await taskRepository.updateTask(id, data);
};

export const deleteTask = async (id: number) => {
  return await taskRepository.deleteTask(id);
};

const emit = (event: string, data: unknown) => {
  getSocketServer().emit(event, data);
};