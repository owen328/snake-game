import express from "express";
import * as socketIO from "socket.io";
import * as http from "node:http";


const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.json({
        status: "success",
    });
});

const server = http.createServer(app);

const io = new socketIO.Server(server);

io.on("connection", socket => {
    console.log('a user connected');
});


const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log("Server started on port " + port);
});