import { Router } from "express";
import { loginUser, registerUser, updateUser } from "../controllers/usercontroller";
const userRoute = Router()
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.patch("/:id", updateUser);
export default userRoute