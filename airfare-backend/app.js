const express = require('express');
const app = express();
const returnRoute = require(`./routes/return.js`);
const oneWayRoute = require(`./routes/oneway.js`);

app.use(`/return`, returnRoute)

app.use(`/oneway`, oneWayRoute)

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
