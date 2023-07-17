import { Role } from "./role";

export class User {

  id!: any;
    username!: String;
    password! : String;
    email!: String;
    genre!: String;
    role!:Role;
    roles!: [any];
  
}
/*function Id(target: User, propertyKey: "id"): void {
  throw new Error("Function not implemented.");
}*/

