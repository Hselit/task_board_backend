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
  const task = await taskRepository.updateTask(id, data);
  emit("task:updated",task);
    console.log("Socket Update emitted", task);
  return task;
};

export const deleteTask = async (id: number) => {
  const task = await taskRepository.deleteTask(id);
    console.log("Socket delete emitted", task);
  emit("task:deleted",task)
};

const emit = (event: string, data: unknown) => {
  getSocketServer().emit(event, data);
};