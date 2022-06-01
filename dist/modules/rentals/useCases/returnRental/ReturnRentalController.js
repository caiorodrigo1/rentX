"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReturnRentalController = void 0;

var _tsyringe = require("tsyringe");

var _ReturnRentalUseCase = require("./ReturnRentalUseCase");

class ReturnRentalController {
  async handle(request, response) {
    const {
      id: user_id
    } = request.user;
    const {
      id
    } = request.params;

    const returnRentalUseCase = _tsyringe.container.resolve(_ReturnRentalUseCase.ReturnRentalUseCase);

    const rental = await returnRentalUseCase.execute({
      id,
      user_id
    });
    return response.status(200).json(rental);
  }

}

exports.ReturnRentalController = ReturnRentalController;