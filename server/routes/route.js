const express=require("express")
const router=express.Router();
const routecontroller=require("../controller/route")
const Route = require('../models/route');

router.get("/routes/:departure/:arrival/:date",
    routecontroller.getoneroute
);
router.post('/routes', async (req, res) => {
    try {
      const route = new Route(req.body);
      await route.save();
      res.status(201).send(route);
    } catch (error) {
      res.status(400).send(error);
    }
  });
module.exports=router;