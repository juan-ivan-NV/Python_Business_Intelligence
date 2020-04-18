const express = require('express')


function businessAPI(app) {
 
  const router = express.Router()
 
  app.use('/api/business', router)

  router.get('/', (req,res)=>{
    res.send('Hi')
  })


}


module.exports = {
  businessAPI 
}