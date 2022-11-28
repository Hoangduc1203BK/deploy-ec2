import Express from "express";
import { HelloworldRouter } from "./router/helloworld.router.js";

const Main = async () => {
  const app = new Express();
  const port = 4000;
  app.use(Express.json());

  app.use("/get-data", HelloworldRouter());

  app.listen(port, (err) => {
    if(err) throw err;
    console.log('App listening on port ' + port);
  });
};

Main().catch(err => {
    throw err;
});
