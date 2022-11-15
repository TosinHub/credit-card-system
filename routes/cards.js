const express = require('express');
const router = express.Router();

const dbConnect = require('../model/db')

router.post('/', async (req, res, next)=>{
  const {name,card_number,trans_limit} = req.body

  
  const addCard = await dbConnect.insert(name, card_number,trans_limit)
   if(addCard){
          res.status(201).json({
            success: true,
            message: "Users card successfully added"
          })
   }else{
    res.status(201).json({
      success: false,
      message: "Problem adding data"
    })
   }

})

/* GET cards listing. */
router.get('/', async (req, res, next) => {
    console.log("here")
  const   result = await dbConnect.fetch()
    console.log(result)
  if(result){
    res.status(200).json(result)
}
});

module.exports = router;
