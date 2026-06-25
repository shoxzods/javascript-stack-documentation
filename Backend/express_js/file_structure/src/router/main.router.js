import { Router } from "express";
import { studentRouter } from "./student.router.js";

// mainRouter
const mainRouter = Router();

// student router
mainRouter.use("/student" , studentRouter);

export default mainRouter;