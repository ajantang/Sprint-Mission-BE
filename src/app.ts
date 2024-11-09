import express, { Express } from "express";

import { PORT } from "./config";
import authRouter from "./routes/auth-route";
import userRouter from "./routes/user-route";
import postRouter from "./routes/post-route";
import postCommentRouter from "./routes/post-comment-route";
import productRouter from "./routes/product-route";
import productCommentRouter from "./routes/product-comment-route";
import imageRouter from "./routes/image-route";
import {
  logErrors,
  clientErrorHandler,
  serverErrorHandler,
} from "./middlewares/error";

const app: Express = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/posts", postRouter);
app.use("/post-comment", postCommentRouter);
app.use("/products", productRouter);
app.use("/product-comment", productCommentRouter);
app.use("/image", imageRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(serverErrorHandler);

app.listen(PORT, () => console.log(`Server is listening port : ${PORT}`));
