import { Module } from "@nestjs/common";
import { CustomerController } from "src/controllers/customer.controller";
import { CustomerService } from "src/services/customer.service";

@Module({
    imports: [],
    controllers: [CustomerController],
    providers: [CustomerService]
})
export class CustomerModule{

}