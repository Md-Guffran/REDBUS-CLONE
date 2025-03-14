const express=require("express")
const router=express.Router();
const customercontroller=require("../controller/customer")
const Customer = require('../models/customer');

router.post("/customer",customercontroller.addnewcustomer,async (req, res) => {
    try {
      const customer = new Customer(req.body);
      await customer.save();
      res.status(201).send(customer);
    } catch (error) {
      res.status(400).send(error);
    }
  });

module.exports=router;