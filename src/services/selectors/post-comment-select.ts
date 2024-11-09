import { Prisma } from "@prisma/client";

export const postCommentSelect: Prisma.PostCommentSelect = {
  id: true,
  content: true,
  createdAt: true,
  User: {
    select: {
      id: true,
      nickname: true,
      image: true,
    },
  },
};
