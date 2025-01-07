const express = require('express');
const app = express();
const returnRoute = require(`./routes/return.js`);

app.use(`/return`, returnRoute)

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
