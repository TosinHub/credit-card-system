const dbConnect = require('../model/db')

const {validateLuhn, validateNum} = require('../validate')




exports.addCard = async (req, res, next)=>{
    const {name,card_number,trans_limit} = req.body
    //check if the name is not empty
    if(!name){
        
      res.status(201).json({
        success: false,
        message: "Name cannot be empty"
      })
      //Check if credit card is numeric
    }else if(validateNum(card_number)){
      res.status(201).json({
        success: false,
        message: "Card Number must be numeric"
      })
      //check if it is a valid credit card
     }else if(!validateLuhn(card_number)){
      res.status(201).json({
        success: false,
        message: "Please enter a valid credit card number"
      })
     }else{
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
     }
  }


  exports.getCards = async (req, res, next) => {

    const result = await dbConnect.fetch()
      
    if(result){
      res.status(200).json({
        success: true,
        data: result
      })
  }
  }