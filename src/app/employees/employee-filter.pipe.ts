import { Pipe, PipeTransform} from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
    name: 'employeeFilter',
    pure: false
})
export class EmployeeFilterPipe implements PipeTransform{
    private counter = 0;
    transform(employees: Employee[], SearchTerm: string): Employee[] {
        this.counter++;
        console.log('Filter pipe executed count' + this.counter);
        if (!employees || !SearchTerm) {
            return employees;
        }

        return employees.filter(employee =>
             employee.name.toLowerCase().indexOf(SearchTerm.toLowerCase()) !== -1);
        
    }
}