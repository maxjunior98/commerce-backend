import { Controller, Get, Param } from "@nestjs/common";
import { CustomerService } from "src/services/customer.service";

@Controller()
export class CustomerController{
    constructor(private readonly customerService: CustomerService){}

    @Get('customer/:id')
    getCustomer(@Param('id') id: string){
        return this.customerService.getCustomer(Number(id));
    }
}