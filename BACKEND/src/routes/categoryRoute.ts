import { Router } from "express";
import { addCategory, getCategories, getCategory } from "../controllers/categorycontroller";
import { verifyTokens } from "../middlewares";
const categoryRoute =Router()

categoryRoute.post("", verifyTokens, addCategory)
categoryRoute.get("",verifyTokens, getCategories)
categoryRoute.get("/:id",verifyTokens, getCategory)
 export default categoryRoute;