const express = require('express');
const router = express.Router();
const { Review } = require('../models');

// Get all reviews for a specific product
router.get('/product/:productId', async (req, res) => {
    try {
        const reviews = await Review.findAll({
            where: { productId: req.params.productId }
        });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new review for a product
router.post('/', async (req, res) => {
    try {
        const review = await Review.create(req.body);
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
