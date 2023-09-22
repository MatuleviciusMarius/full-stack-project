const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { userId, groupId } = req.body;
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1Nh8wIHuHf9FOqSAXLXIhX1d",
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/payment/?success=true&userId=${userId}&groupId=${groupId}`,
        cancel_url: `${req.headers.origin}/payment/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
