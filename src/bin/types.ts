import { genSalt } from 'bcrypt';
let Salt: string = '';

const generate = async () => {
    Salt = await genSalt(13);
};

export const salt = Salt;

export const socketEvents = {
    disconnect: 'disconnect'
};
