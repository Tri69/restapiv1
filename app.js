const express = require("express");
const cors = require("cors")
const app = express();
const port = 3002;
const router = require("./src/router/useRouter");

app.use(cors());

app.set('view engine', 'ejs');

app.use("/", router);

app.listen(port, () =>  {
	console.log("server running")
});