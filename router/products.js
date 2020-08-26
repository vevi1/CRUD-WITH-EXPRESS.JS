const express          = require('express')
const router           = new express.Router()
const Product          = require('../model/product')

//   route for inserting data ========================>
router.post('/save', async (req, res) => {
  const product = new Product(req.body)
  try{
    await product.save()
    res.status(201).send(product)
  } catch(e){
    res.status(400).send(e)
  }
})
router.get('/users/:id', async(req, res) => {
  const _id = req.params.id

  try{
      const product = await Product.findById(_id)
      if(!product){
         return  res.status(404).send()
      }
      res.send(product)
  } catch(e){
      res.status(500).send()
  }
})
// route for updating a data ==========================>
router.patch('/update/:id', async(req, res) => {
  try{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body)
    await product.save()
      res.send(product)
  }catch(e){
    res.status(500).send()
  }
})

// route for deleting a data ============================>
router.delete('/remove/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) res.status(404).send("No item found")
    res.status(200).send()
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router