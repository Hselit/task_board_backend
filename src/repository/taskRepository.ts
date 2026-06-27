import { prisma } from "../utils/prisma";

export const createTask = async (data: any) => {
  return prisma.$transaction(async (tx) => {
    const lastTask = await tx.card.findFirst({
      where: {
        listId: data.listId,
      },
      orderBy: {
        position: "desc",
      },
    });

    const position = lastTask ? lastTask.position + 1 : 1;

    return tx.card.create({
      data: {
        ...data,
        position,
      },
      include: {
        list: true,
      },
    });
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

export const updateTask = async (
  id: number,
  data: any
) => {
  return prisma.$transaction(async (tx) => {
    const task = await tx.card.findUnique({
      where: {
        id,
      },
    });

    if (!task) {
      throw new Error("Task not found");
    }

    if (task.version !== data.version) {
      throw new Error("VERSION_CONFLICT");
    }

    return tx.card.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        description: data.description,
        version: {
          increment: 1,
        },
      },
      include: {
        list: true,
      },
    });
  });
};

export const deleteTask = async (id: number) => {
  return prisma.$transaction(async (tx) => {
    const task = await tx.card.findUnique({
      where: { id },
    });

    if (!task) {
      throw new Error("Task not found");
    }

    await tx.card.delete({
      where: { id },
    });

    await tx.card.updateMany({
      where: {
        listId: task.listId,
        position: {
          gt: task.position,
        },
      },
      data: {
        position: {
          decrement: 1,
        },
      },
    });

    return task;
  });
};