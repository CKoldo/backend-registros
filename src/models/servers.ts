import express, { Application, Request, Response } from "express";
import cors from "cors";
import routesProducto from "../routes/producto";
import db from "../db/connection";


class Server {
  private app: Application;
  private port: string;
  constructor() {
    //console.log(process.env.PORT);
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.middleware();
    this.routes();
    this.dbConnect();
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        msg: "hola mundo",
      });
    });
    this.app.use("/api/productos", routesProducto);
  }

  middleware() {
    this.app.use(express.json());

    //CORS
    this.app.use(cors());
  }

  async dbConnect() {
    try {
      await db.authenticate();
      console.log("Database Conected");
    } catch (error) {
        console.log(error);
    }
  }

}
export default Server;
