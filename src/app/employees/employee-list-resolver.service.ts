import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { ResolvedEmployeeList } from './resolved-employeelist.model';

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[] | string> {
    constructor(private _employeeService: EmployeeService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string> {
        return this._employeeService.getemployees()
        .pipe(catchError((err: string) => of(err)));
    }
}