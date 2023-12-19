export interface IAdmin{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  export class Admin implements IAdmin {
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;


    constructor(
    
      firstName: string,
      lastName: string,
      email: string,
      password: string,
  
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
    }
  }


  // login
  export interface IAdminLogin{
    email: string;
    password: string;
  }
  
  export class AdminLogin implements IAdminLogin {
    public email: string;
    public password: string;


    constructor(
      email: string,
      password: string,
  
    ) {
      this.email = email;
      this.password = password;
    }
  }