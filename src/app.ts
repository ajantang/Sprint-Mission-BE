import express, { Express } from "express";

import { PORT } from "./config";
import authRouter from "./routes/auth-route";
import {
  logErrors,
  clientErrorHandler,
  serverErrorHandler,
} from "./middlewares/error";

const app: Express = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(serverErrorHandler);

app.listen(PORT, () => console.log(`Server is listening port : ${PORT}`));
