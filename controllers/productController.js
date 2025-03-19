import { Router } from "express";
import Product from "../models/product";

const router = Router();

router.post('/product', async (req, res) => {
    const data = new Product({
        name: req.body.paid,
        price: req.body.price,
        image: req.body.image,
        active: req.body.active,
        stock: req.body.stock,
        created: new Date(),
        category: req.body.category
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error })
    }
})

router.get('/product', async (req, res) => {
    try {
        const data = await Product.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})

router.get('/product/:id', async (req, res) => {
    try {
        const data = await Product.findById(req.params.id);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})


router.delete('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Order.findByIdAndDelete(id);
        const data = await Order.find();
        res.send(data);
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})

router.put('/product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Product.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})

export default router;