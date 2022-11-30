import { Employee } from 'src/app/models/employee.model';

export class ResolvedEmployeeList {
    constructor(public employeeList: Employee[],public error: any = null) {}
}