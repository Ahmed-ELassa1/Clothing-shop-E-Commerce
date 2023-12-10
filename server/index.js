// const env = require("enn")
// const express = require("express")
require("dotenv").config()
const key ="pk_test_51MlFy0BJDiZaC2Tr7I8wFG7Vu5IzrUqwGSot9uWwVm7ukjO5IG7XhhxSsaKsrN3zlzv52PLZ5CLcvKheKwXwvL2O00UR9UhomX"
const stripe = require("stripe")(key)
const bodyParser = require("body-parser")
const cors = require("cors")



const app = express()

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res)=>{
    let {amount, id} = req.body

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Payment",
            payment_method: id,
            confirm: true
        })

        res.json({
            message: "Payment was successful",
            success: true
        })
    } catch (error) {
        console.log("Error", error)
        res.json({
            message: "Payment Failed",
            success: false
        })
    }
})



app.listen(process.env.PORT || 4000, ()=>{
    console.log("Server is running")
})