const express = require("express");
const app = express();

const port = 3000;
app.get(
    "/",
    (req, res, next) => {
        console.log("hello");
        next();
    },
    (req, res) => {
        res.send(`<div>
        
        <h5> Middleware</h5>
    </div>`);
    }
    );
app.listen(port, () => {
console.log(`Listening to port ${port}`);
});

    