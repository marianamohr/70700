const { Router } = require("express");
const orderController = require("../controllers/orders.controller");

const router = Router();

router.get("/", orderController.getOrders);
router.post("/", orderController.createOrder);

router.get("/:oid", orderController.getOrderById);
router.put("/:oid", orderController.resolveOrder);

module.exports = router;
