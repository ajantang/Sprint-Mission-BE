import express, { Router } from "express";

const postRouter: Router = express.Router();

postRouter
  .post("/")
  .get("/")
  .get("/:postId")
  .patch("/:postId")
  .delete("/:postId")
  .patch("/:postId/favorite")
  .delete("/:postId/favorite");

export default postRouter;
