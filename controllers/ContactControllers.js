const Contact = require("../models/User");


// GET :  RETURN ALL USERS 


exports.getContact = async(req,res) => {
    try {
        const result = await Contact.find({})
        return res.status(200).json({message:"Getting Contacts Successfully", response:result})

    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"Sorry We Can Not Get Contacts"})
    }
}


// POST :  ADD A NEW USER TO THE DATABASE 

exports.postContact = async(req,res) => {
    try {
        const {name,age,email,phone} = req.body
        if (!name || !age || !email || !phone){
            return res.status(400).send({message:"Please enter fields"})
        }
        const CheckExistEmail = await Contact.findOne({email:email})
        if (CheckExistEmail){
            return res.status(400).send({message:"Contact already exist"})
        }
        const CheckExistPhone = await Contact.findOne({phone:phone})
        if (CheckExistPhone){
            return res.status(400).send({message:"Phone already exist"})
        }
        const newContact = new Contact({name,age,email,phone})
        await newContact.save()
        return res.status (201).send({message:"New contact created successfully", response:newContact})

    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"Sorry we can not add new contact"})
    }
}


// PUT : EDIT A USER BY ID 

exports.updateContactByID = async(req,res) => {
    try {
        await Contact.updateOne({_id:req.params.id},{$set:{...req.body}})
        return res.status(200).json({message:"Contact Updated By ID Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"Sorry We Can Not Update Contact By ID"})
    }
}


// DELETE : REMOVE A USER BY ID 


exports.deleteContactByID = async(req,res) => {
    try {
        const {id} = req.params
        await Contact.deleteOne({_id:id})
        return res.status(200).json({message:"User Deleted by ID Successfully"})

    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"Sorry We Can Not Delete Contact By ID"})
    }
}



