import express from "express"
import bodyParser from "body-parser";
import rootRouter from "../router/rootRouter";

const PORT = 4000

const app = express()

app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views")
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use("/", rootRouter)
// app.use("/user", userRouter)
// app.use("/data", dataRouter)

const handleServerListening = () => {
    console.log(`✔ Server listening on port http://localhost:${PORT}`)
}

app.listen(PORT, handleServerListening)