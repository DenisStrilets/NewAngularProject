

export class UserSendModel{
    constructor(
    public email:string,
    public password:string,
    public name:string,
    public location:string,

    public role?:string,

    public exist?:boolean
    ){}
    
    }
