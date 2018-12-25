import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { v4 as uuid } from "uuid";

/**
 * / route
 *
 * @class User
 */
export class IndexRoute extends BaseRoute {

    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static create(router: Router) {
        //log
        console.log("[IndexRoute::create] Creating index route.");

        //add home page route
        router.get("/", (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });
    }

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * The home page route.
     *
     * @class IndexRoute
     * @method index
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public index(req: Request, res: Response, next: NextFunction) {
        //set custom title
        this.title = "Home | Tour of Heros";

        const uniqueId: string = uuid();

        //set options
        let options: Object = {
            "message": `Hello user ${uniqueId}, Welcome to the Tour of Heros`
        };

        //render template
        this.render(req, res, "index", options);
    }
}