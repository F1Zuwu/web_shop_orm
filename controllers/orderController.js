import Order from '../models/order.js';

const router = Router();

router.post('/createOrder', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Funktsioon kasutaja tellimuste kuvamiseks
router.get('/getOrders', async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId }).populate('cartProducts').populate('user');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;