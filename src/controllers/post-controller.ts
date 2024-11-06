import { Request, Response, NextFunction } from "express";
import { User } from "@prisma/client";

import authService from "../services/auth-service";
import { CustomError } from "../utils/error";

import { userSignUpData, userTokenInfo } from "../types/user-types";

async function createPost(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
  } catch (err) {
    next(err);
  }
}

async function getPostList(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
  } catch (err) {
    next(err);
  }
}

async function getPost(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
  } catch (err) {
    next(err);
  }
}

async function modifyPost(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
  } catch (err) {
    next(err);
  }
}

async function deletePost(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
  } catch (err) {
    next(err);
  }
}

async function increasePostFavorite(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
  } catch (err) {
    next(err);
  }
}

async function decreasePostFavorite(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPostList,
  getPost,
  modifyPost,
  deletePost,
  increasePostFavorite,
  decreasePostFavorite,
};
