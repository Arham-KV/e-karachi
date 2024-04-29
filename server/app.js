const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("//add your stripe secret key here");

app.use(express.json());
app.use(cors());

// checkout api
app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body;

    // console.log(products);

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "USD",
            product_data: {
                name: product.title,
                images: [product.imageUrl]
            },
            unit_amount: product.price * 100,
        },
        quantity: 1
    }));

    console.log(lineItems[0]);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/success",
            cancel_url: "http://localhost:5173/cancel",
        });

        res.json({ id: session.id, paymentStatus: "success" })
    }
    catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).send("Error creating checkout session");
    }
    // localStorage.setItem('paymentStatus', JSON.stringify(1))

});


app.listen(7000, () => {
    console.log("server start")
})


