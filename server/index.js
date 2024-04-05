const express = require('express');

const app = express();

const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

const vehicleDataRouter = require('./routes/Data');

app.use('/vehicalData', vehicleDataRouter);

db.sequelize.sync().then(() => {
    app.listen(3007, () => {
        console.log("Server is running on port 3007...");
    });
});
