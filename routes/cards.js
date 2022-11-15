const express = require('express');
const router = express.Router();

const dbConnect = require('../model/db')

const {validateLuhn } = require('../validate')

const {body, validationResult } = require('express-validator')

router.post('/', async (req, res, next)=>{
  const {name,card_number,trans_limit} = req.body

   if(isNaN(card_number)){
    res.status(201).json({
      success: false,
      message: "Card Number must be numeric"
    })
   }else if(!validateLuhn(card_number)){
    res.status(201).json({
      success: false,
      message: "Please enter a valid credit card number"
    })
   }



  
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

  const   result = await dbConnect.fetch()
    
  if(result){
    res.status(200).json(result)
}
});

module.exports = router;
