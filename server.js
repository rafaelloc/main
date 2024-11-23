import express from "express"; // conecta com o 'servidor'
import routes from "./src/routes/postsRoutes.js";

const app = express(); // se comunica com o servidor
app.use(express.static("uploads"))
routes(app)

app.listen(3000, () => { // inicia o servidor na porta 3000
    console.log("Servidor escutando...");
});