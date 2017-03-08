import {Role} from './Role'


export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    roles: Role[];
    permissions: any[];
    isSuperUser: boolean;
}