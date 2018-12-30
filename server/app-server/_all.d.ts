/// <reference path="./node_modules/typescript/lib/lib.es6.d.ts" />


import { User } from "./src/services/user-service";

declare namespace Express {
    export interface Request {
        user?: User

        login?: (user: User, fn: (Error) => Response) => void;
    }
}