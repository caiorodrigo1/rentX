"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarsImagesRepository = void 0;

var _typeorm = require("typeorm");

var _CarImages = require("../entities/CarImages");

class CarsImagesRepository {
  constructor() {
    this.respository = void 0;
    this.respository = (0, _typeorm.getRepository)(_CarImages.CarImage);
  }

  async create(car_id, image_name) {
    const carImage = this.respository.create({
      car_id,
      image_name
    });
    await this.respository.save(carImage);
    return carImage;
  }

}

exports.CarsImagesRepository = CarsImagesRepository;