import { Router } from "express";
import { getStudent } from "../controller/student.controller.js";

const studentRouter = Router();

studentRouter.get("/all" , getStudent ) ;
studentRouter.post("/" , postStudent)


export { studentRouter };