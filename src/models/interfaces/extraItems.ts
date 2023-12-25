// theater
export interface IExtraItems{
    uid?:string;
      itemsName: string;
      details: string;
      price:number;
    //   itemType:string;
    }
    
    export class ExtraItems implements IExtraItems{
      public  uid?:string;
      public itemsName: string;
      public details: string;
      public price:number;
      public itemType:string;
  
  
      constructor(
        itemsName: string,
          details: string,
          price:number,
          itemType:string,
      ) {
          this.itemsName=itemsName,
          this.details=details,
          this.price=price,
          this.itemType=itemType
      }
    }