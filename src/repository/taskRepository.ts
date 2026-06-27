import { prisma } from "../utils/prisma";

export const createTask = async (data: any) => {
  return await prisma.card.create({
    data,
    include: {
      list: true,
    },
  });
};

export const getAllTasks = async () => {
  return await prisma.card.findMany({
    include: {
      list: true,
    },
    orderBy: [
      {
        listId: "asc",
      },
      {
        position: "asc",
      },
    ],
  });
};

export const getTaskById = async (id: number) => {
  return await prisma.card.findUnique({
    where: {
      id,
    },
    include: {
      list: true,
    },
  });
};

export const updateTask = async (id: number, data: any) => {
  return await prisma.card.update({
    where: {
      id,
    },
    data,
    include: {
      list: true,
    },
  });
};

export const deleteTask = async (id: number) => {
  return await prisma.card.delete({
    where: {
      id,
    },
  });
};