import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomerService{
    getHello(): string{
        return "Hello World";
    }

    getCustomer(id: number){
        return {
            id,
            name: "test name"
        };
    }
}