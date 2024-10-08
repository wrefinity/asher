import { Router } from "express";
import { Authorize } from "../middlewares/authorize";
import upload from "../configs/multer";
import { uploadToCloudinary } from "../middlewares/multerCloudinary";
import PropertyController from "../controllers/property.controller";
import ApartmentRouter from "./appartment";
class PropertyRouter {
    public router: Router;
    authenticateService: Authorize

    constructor() {
        this.router = Router()
        this.authenticateService = new Authorize()
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.use("/apartments", ApartmentRouter);
        this.router.post('/property', PropertyController.createProperty)
        this.router.get('/property', PropertyController.getProperty)
    }
}

export default new PropertyRouter().router