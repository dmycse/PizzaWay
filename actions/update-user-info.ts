'use server';

import { getUserSession } from "@/lib";
import { Prisma } from "@prisma/client";
import { prisma } from "@/prisma/prisma-client";
import { hashSync } from "bcryptjs";

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  console.log('body', body)
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error('User not found');
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
      },
    });

  } catch (err) {
    console.log('Error [UPDATE_USER]', err);
    throw err;
  }
}