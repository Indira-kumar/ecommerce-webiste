import {Router} from "express";
import {verifyToken} from "../middlewares/verifyToken.js";
import {authorizeAdmin, authorizeShopper} from "../middlewares/authorize.js";

const privateRoute = Router();
privateRoute.get("/", verifyToken, authorizeShopper,  (req, res) => {
  console.log(req.user);
  res.json({ message: "You have accessed a private route" });
});

export default privateRoute;
