import { Router } from "express";
import MaintenanceController from '../controllers/maintenance.controller';
import { Authorize } from "../middlewares/authorize";

class MaintenaceRoutes {
    public router: Router;
    protected authenticateService: Authorize

    constructor() {
        this.router = Router();
        this.initializeRoutes = this.initializeRoutes.bind(this);
        this.authenticateService = new Authorize();
        this.initializeRoutes();
    }
    private initializeRoutes(): void {
        this.router.post('/accept/:maintenanceId', this.authenticateService.authorize,  MaintenanceController.acceptMaintenanceOffer);
        this.router.post('/completed/:maintenanceId', this.authenticateService.authorize,  MaintenanceController.updateMaintenanceToCompleted);
        this.router.get('/', MaintenanceController.getAllMaintenances);
        this.router.get('/:id', this.authenticateService.authorize, MaintenanceController.getMaintenanceById);
        this.router.post('/', this.authenticateService.authorize,  MaintenanceController.createMaintenance);
        this.router.put('/:id', this.authenticateService.authorize, MaintenanceController.updateMaintenance);
        this.router.delete('/:id', this.authenticateService.authorize, MaintenanceController.deleteMaintenance);
    }

 

}

export default new MaintenaceRoutes().router;
