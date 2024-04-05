const express = require('express');
const router = express.Router();

const {VehicleData} = require('../models');

router.get("/", async (req, res) => {
    try {
        const data = await VehicleData.findAll();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/", async (req, res) => {
    try {
        const data = req.body;
        await VehicleData.create(data);
        res.status(201).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
