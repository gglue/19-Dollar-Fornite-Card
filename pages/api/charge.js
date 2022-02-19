import Stripe from "stripe";
const stripe = new Stripe(process.env.secret);

async function Charge(req, res){
    const {id, amount} = req.body;

    try{
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "CAD",
            description: "19 dollar fortnite card",
            payment_method: id,
            confirm: true
        });

        return res.status(200).json({
            confirm: "goodjob"
        });
    }
    
    catch (error){
        return res.status(400).json({
            message: error.message
        })
    }

}

export default Charge;