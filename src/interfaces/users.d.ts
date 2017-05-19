declare module "IUsers" {
    export interface IUser {
        id: number;
        username: string;
        isActive: boolean;

    }

    export interface IUsers {
        [index: number]: IUser
    }

}