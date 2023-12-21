// theater
export interface ITheater{
  uid?:string;
    theaterName: string;
    details: string;
    price:number;
    noOfPersons:number;
    extraPersonCost:number;
  }
  
  export class Theater implements ITheater {
    public  uid?:string;
    public theaterName: string;
    public details: string;
    public price:number;
    public noOfPersons:number;
    public extraPersonCost:number;


    constructor(
        theaterName: string,
        details: string,
        price:number,
        noOfPersons:number,
        extraPersonCost:number,
    ) {
        this.theaterName=theaterName,
        this.details=details,
        this.price=price,
        this.noOfPersons=noOfPersons,
        this.extraPersonCost=extraPersonCost;
    }
  }
  
  export class TheaterUpadte implements ITheater {
    public  uid?:string;
    public theaterName: string;
    public details: string;
    public price:number;
    public noOfPersons:number;
    public extraPersonCost:number;


    constructor(
        theaterName: string,
        details: string,
        price:number,
        noOfPersons:number,
        extraPersonCost:number,
        uid?:string
    ) {
        this.theaterName=theaterName,
        this.details=details,
        this.price=price,
        this.noOfPersons=noOfPersons,
        this.extraPersonCost=extraPersonCost;
        this.uid=uid
    }
  }