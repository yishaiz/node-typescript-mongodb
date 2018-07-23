import * as express    from "express";
import * as bodyParser from "body-parser";

import { Routes }    from "./routes/userRoutes";
import * as mongoose from "mongoose";
import config        from "./app.config";


class App {

    public app : express.Application;
    public routePrv : Routes = new Routes();

    // public mongoUrl : string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';
    public mongoUrl : string = config.connectionString;

    constructor () {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config () : void {

        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended : false }));
        this.app.use(express.static('public'));
    }

    private mongoSetup () : void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
}

export default new App().app;