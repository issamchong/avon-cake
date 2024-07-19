const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('avon-3d-experience/dist'));
const port = process.env.PORT || 8080;
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});
