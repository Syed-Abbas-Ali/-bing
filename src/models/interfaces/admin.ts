export interface IAdmin{
    id?: number;
    uid?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role?: string;
  }
  
  export class Admin implements IAdmin {
    public id?: number;
    public uid?: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role?: string;

    constructor(
    
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      role?: string,
      id?: number,
      uid?: string,
    ) {
      this.id = id;
      this.uid = uid;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.role = role;
    }
  }