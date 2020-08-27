const mongoose = require('mongoose')
const express  = require('express')
const router   = express.Router()



const schema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40
    }, 
    LastName: {
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 40
    }, 
    Balance: {
        type: Number,
        required: true
    }
});

const List = mongoose.model('courses', schema)


router.get('/', async (req, res) => {
    const result = await List.find().sort('Name')
    res.send(result)
})

router.post('/', async (req, res) => {
    const Person = new List({
        Name: req.body.name,
        LastName: req.body.lName,
        Balance: req.body.balance
    })
    try{
        const result = await Person.save()
        res.send(result)
    }catch (err){
        for (Err in err.errors){
            console.log(field.errors[Err])
        }
    }
})

router.put('/:id', async (req, res) => {
    const Person = await List.findByIdAndUpdate(req.params.id, {Name: req.body.name, LastName: req.body.lName, Balance: req.body.balance})
    if(!Person) return res.send("Wrong id!!!!")

    res.send(Person)
})

router.delete('/:id', async (req, res) => {
    const Person = await List.deleteOne({_id: req.params.id})
    if(!Person) return res.send('Wrong id!!!')
    res.send(Person)
})

router.get('/:id', async (req, res) => {
    const Person = await List.findById({_id: req.params.id})
    if(!Person) return res.send("Wrong id")

    res.send(Person)
})

module.exports = router;