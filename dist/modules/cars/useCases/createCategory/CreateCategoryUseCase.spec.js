"use strict";

var _AppError = require("../../../../shared/errors/AppError");

var _CategoriesRepositoryInMemory = require("../../repositories/in-memory/CategoriesRepositoryInMemory");

var _CreateCategoryUseCase = require("./CreateCategoryUseCase");

let createCategoryUseCase;
let categoriesRepositoryInMemory;
describe("CreateCategory", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new _CategoriesRepositoryInMemory.CategoriesRepositoryInMemory();
    createCategoryUseCase = new _CreateCategoryUseCase.CreateCategoryUseCase(categoriesRepositoryInMemory);
  });
  it("Should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test"
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    });
    const cateogryCreated = await categoriesRepositoryInMemory.findByName(category.name);
    expect(cateogryCreated).toHaveProperty("id");
  });
  it("Should not be able to create a new category when the name already exists", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test"
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    });
    await expect(createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    })).rejects.toEqual(new _AppError.AppError("Category already exists!"));
  });
});