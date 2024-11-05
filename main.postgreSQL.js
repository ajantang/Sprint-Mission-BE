import express from "express";
import cors from "cors";
import { PORT } from "./src/config.js";

import authRouter from "./dist/routes/auth-router.js";
import userRouter from "./dist/routes/users.js";
// import productRouter from "./routes/products.js";
// import imageRouter from "./routes/image.js";
// import productCommentRouter from "./routes/product-comment.js";
// import postRouter from "./routes/postRouter.js";

import {
  logErrors,
  clientErrorHandler,
  errorHandler,
} from "./src/middlewares/error.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);
// app.use("/products", productRouter);
// app.use("/uploads", express.static("uploads"));
// app.use("/images", imageRouter);
// app.use("/product", productCommentRouter);
// app.use("/posts", postRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
