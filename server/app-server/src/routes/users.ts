import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import { Passport } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {User, UserService} from "../services/user-service";

/**
 * / route
 *
 * @class User
 */
export class UserRoute extends BaseRoute {

    private static passport = new Passport();
    private userService: UserService;

    /**
     * Create the routes.
     *
     * @class UserRoute
     * @method create
     * @static
     */
    public static create(router: Router) {

        console.log("[UserRoute::create] Creating user route.");

        let userService = new UserService();

        UserRoute.passport.use(new LocalStrategy(
            { usernameField: 'email' },
            (email, password, done) => {
                console.log('Inside local strategy callback')
                // here is where you make a call to the database
                // to find the user based on their username or email address
                // for now, we'll just pretend we found that it was users[0]

                userService.getUser(email, password, (error, user) => {
                    if (error) {
                        console.log('Local strategy faced an error');
                    } else {
                        if (user) {
                            console.log(`Local strategy found the requested user: ${email}`);
                        } else {
                            console.log(`Local strategy could not find requested user ${email}`);
                        }
                    }

                    done(error, user);
                });
            }
        ));

        router.get("/login", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().getLoggedInUser(req, res, next);
        });

        router.post("/login", (req: Request, res: Response, next: NextFunction) => {
            new UserRoute().login(req, res, next);
        });

        router.get('/authrequired', (req, res) => {
            console.log('Inside GET /authrequired callback');
            console.log(`User authenticated? ${req.isAuthenticated()}`);
            if(req.isAuthenticated()) {
                res.send('you hit the authentication endpoint\n');
            } else {
                res.send('you are not authenticated!');
                // res.redirect('/')
            }
        })

    }

    /**
     * Constructor
     *
     * @class IndexRoute
     * @constructor
     */
    constructor() {
        super();

        this.userService = new UserService();
    }

    /**
     * The login route.
     *
     * @class UserRoute
     * @method login
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public getLoggedInUser(req: Request, res: Response, next: NextFunction) {
        console.log('Inside GET /login callback function');
        console.log(req.sessionID);

        //set options
        let options: Object = {
            "message": `You got the login page\n`
        };

        //render template
        this.render(req, res, "index", options);
    }

    /**
     * The login route.
     *
     * @class UserRoute
     * @method postLogin
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public login(req: Request, res: Response, next: NextFunction) {
        console.log('Inside POST /login callback function');
        console.log(req.body);

        UserRoute.passport.authenticate('local', (err, user, info) => {
            console.log('Inside passport.authenticate() callback');
            console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
            console.log(`req.user: ${JSON.stringify(req.user)}`);
            req.login(user, (err) => {
                console.log('Inside req.login() callback');
                console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
                console.log(`req.user: ${JSON.stringify(req.user)}`);

                //set options
                let options: Object = {
                    "message": `You were authenticated & logged in!`
                };

                //render template
                this.render(req, res, "index", options);
            });
        })(req, res, next);
    }
}