require('dotenv/config');
const app = require('./app');
const {connect} = require('mongoose');

// connect(process.env.MONGODB_URL)
//     .then(() => {
//         console.log("MongoDB database connection successfully.");
//     })
//     .catch(err => {
//         console.log(err.message);
//         console.log('MongoDB database connection failed.');
//     });

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});