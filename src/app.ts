import express, { Express } from "express";

import { PORT } from "./config";
import authRouter from "./routes/auth-route";
import postRouter from "./routes/post-route";
import productRouter from "./routes/product-route";
import {
  logErrors,
  clientErrorHandler,
  serverErrorHandler,
} from "./middlewares/error";

const app: Express = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/products", productRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(serverErrorHandler);

app.listen(PORT, () => console.log(`Server is listening port : ${PORT}`));
