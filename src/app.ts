import express, { Express } from "express";

import { PORT } from "./config";
import authRouter from "./routes/auth-route";

const app: Express = express();

app.use(express.json());

app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`Server is listening port : ${PORT}`));
