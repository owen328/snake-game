import express from "express";


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.json({
        status: "success",
    });
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server started on port " + port);
});