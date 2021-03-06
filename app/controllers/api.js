const router = require("express").Router();
const {NewCustomers} = require("../models");

const APIENTRY = "/api"

router.post(APIENTRY + "/add/user", async (req, res)=>{
  const {address, email, date} = req.body;
  if (address && email) {
    const a = await NewCustomers.find({address})
    const e= await NewCustomers.find({email})
    if (a && e) {
      if (a.length===0 && e.length===0) {
        const user = new NewCustomers({ address, email, date});
        await user.save();
        return res.json({status:'ok'});
      }
      return res.json({status:'exist'});
    }
  }
  res.json({status:'fail'});
});

router.post(APIENTRY + "/get/user", async (req, res)=>{
  
  const rows = await NewCustomers.find()
  if (rows) {
    const data = [];
    for(let v of rows) {
      const {address, email, date} = v;
      data.push({address, email, date})
    }
    return res.json({status:'ok', data})
  }
  res.json({status:'fail'})
});

module.exports = router;
