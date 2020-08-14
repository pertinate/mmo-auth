import { hash } from 'bcrypt';
import { salt } from './types';

export default class Player {
    username: string;
    password: string;

    constructor(username: string) {
        this.username = username;
    }

    generatePasswordHash = (password: string) => {
        return new Promise((resolve, reject) => {
            hash(password, salt)
                .then(result => {
                    this.password = result;
                })
                .catch(error => console.error('failed to hash password', error));
        });
    };
}
