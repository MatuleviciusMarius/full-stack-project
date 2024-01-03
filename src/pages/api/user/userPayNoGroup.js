import getOrders from "@/utils/getOrders";

export default async (req, res) => {
  try {
    const orders = await getOrders();
    res.status(200).json({ orders: orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};
