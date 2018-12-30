import {UserRoute} from "../routes/users";

export class User {
    email: string;
    password: string;
    id? : string;
}

export class UserService {

    static predefinedUsers: Array<User>;

    constructor() {
        if (!UserService.predefinedUsers) {
            UserService.predefinedUsers = [
                {
                    id: 'sf212',
                    email: 'lirontza@elf.com',
                    password: 'lirontza'
                },
                {
                    id: 'sad4564',
                    email: 'erez@elf.com',
                    password: 'erez'
                }
            ];
        }
    }

    getUser(email: string, password: string, callback: (Error, User?) => void) : void {
        let user : User = null;
        if (UserService.predefinedUsers[0].email === email) {
            user = UserService.predefinedUsers[0];
        }
        if (UserService.predefinedUsers[1].email === email) {
            user = UserService.predefinedUsers[1];
        }

        callback(null, user);
    }

    getUserById(userId: string, callback: (err: Error, user?: User) => void) {
        let user : User = null;
        if (UserService.predefinedUsers[0].id === userId) {
            user = UserService.predefinedUsers[0];
        }
        if (UserService.predefinedUsers[1].id === userId) {
            user = UserService.predefinedUsers[1];
        }

        callback(null, user);
    }
}