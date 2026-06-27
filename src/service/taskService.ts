import * as taskRepository from "../repository/taskRepository";

export const createTask = async (data: any) => {
  return await taskRepository.createTask(data);
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