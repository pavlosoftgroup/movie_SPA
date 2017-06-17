export class User {

    public email: string;
    public name: string;
    public password: string;
    public _id: string = '';
    public status: number = 0;

}
export class UserStatus{
    constructor(
        public  userId: string,
        public date: string,
        public status: string,
    ){}
}