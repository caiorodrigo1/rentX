"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRoutes = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const upload_1 = __importDefault(require("../../../../config/upload"));
const CreateCarController_1 = require("../../../../modules/cars/useCases/createCar/CreateCarController");
const CreateCarSpecificationController_1 = require("../../../../modules/cars/useCases/createCarSpecification/CreateCarSpecificationController");
const ListAvailableCarsController_1 = require("../../../../modules/cars/useCases/listAvailableCars/ListAvailableCarsController");
const UploadCarImagesController_1 = require("../../../../modules/cars/useCases/uploadCarImages/UploadCarImagesController");
const ensureAdmin_1 = require("../middlewares/ensureAdmin");
const ensureAuthenticated_1 = require("../middlewares/ensureAuthenticated");
const carsRoutes = (0, express_1.Router)();
exports.carsRoutes = carsRoutes;
const createCarController = new CreateCarController_1.CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController_1.ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController_1.CreateCarSpecificationController();
const uploadCarImagesController = new UploadCarImagesController_1.UploadCarImagesController();
const upload = (0, multer_1.default)(upload_1.default);
carsRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createCarController.handle);
carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post("/specifications/:id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createCarSpecificationController.handle);
carsRoutes.post("/images/:id", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, upload.array("images"), uploadCarImagesController.handle);
