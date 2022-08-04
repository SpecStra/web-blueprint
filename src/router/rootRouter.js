import express from "express"
import {getHome} from "../controller/rootController";

const rootRouter = express.Router()

rootRouter.get("/", getHome)

export default rootRouter