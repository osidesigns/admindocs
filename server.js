const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;


// Declare "Static" folder
app.use(express.static(path.join(__dirname, 'public')));


// Use "app.use()" to access routes because of Middleware
app.use('/api/customers', require('./routes/api/customers'));
app.use('/api/customers', require('./routes/api/customers'));

// Set server listening port
app.listen(port, console.log(`Server running on port: ${port}`));

