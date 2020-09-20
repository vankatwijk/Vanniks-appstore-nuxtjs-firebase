const express = require('express')

const router = express.Router()

const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})


router.post('/track-data',(req,res) =>{
  console.log('Store data!', req.body.data);
  res.status(200).json({message: "Success!"});
})


module.exports ={
  path: '/api',
  handler: router
}
