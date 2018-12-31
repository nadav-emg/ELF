
import {User, UserService} from "./user-service";
import * as passport from "passport";

export class PassportService {
    private userService: UserService;
    private static passport: passport.Authenticator = null;

    constructor() {
        this.userService = new UserService();
    }

    private initializePassport() {
        let authenticator = new passport.Authenticator();

        // tell passport how to serialize the user
        authenticator.serializeUser<User, string>((user, done) => {
            console.log('Inside serializeUser callback. User id is save to the session file store here')
            done(null, user.id);
        });
        authenticator.deserializeUser<User, string>((userId, done) => {
            console.log('Inside deserializeUser callback');
            console.log(`The user id passport saved in the session file store is: ${userId}`);

            this.userService.getUserById(userId, done);
        });

        return authenticator;
    }

    getPassport() {
        if (PassportService.passport === null) {
            PassportService.passport = this.initializePassport();
        }

        return PassportService.passport;
    }
}