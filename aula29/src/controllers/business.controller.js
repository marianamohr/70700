const businessDao = require("../DAO/business.dao")

const getBusiness = async (req, res) => {
  const business = await businessDao.getBusiness()
  res.send({ status: "success", result: business });
};

const getBusinessById = async (req, res) => {
  res.send({ status: "success", result: "getBusinessById" });
};

const createBusiness = async (req, res) => {
  const business = req.body;
  const businessCreated = await businessDao.createBusiness(business)
  res.send({ status: "success", result: businessCreated });
};

const addProduct = async (req, res) => {
  res.send({ status: "success", result: "addProduct" });
};

module.exports = {
  getBusiness,
  getBusinessById,
  createBusiness,
  addProduct,
};
