import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/appError";
import routes from "./routes/routes";
const app = express();

app.use(express.json());
app.use(routes);

app.listen(5001);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3000);
