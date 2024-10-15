import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { Constants } from '../config/constants';

const apiUrl = Constants.API_ENDPOINT;
const httpLink = {
  getAllProducts: `${apiUrl}/products/getProducts`,
  deleteEmployeeById: `${apiUrl}/api/employee/deleteEmployeeById`,
  getEmployeeDetailById: `${apiUrl}/api/employee/getEmployeeDetailById`,
  saveEmployee: `${apiUrl}/api/employee/saveEmployee`
};

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) {}

  public getAllProducts(): Observable<any> {
    return this.webApiService.get(httpLink.getAllProducts);
  }

  // Uncomment and implement these methods if needed
  // public deleteEmployeeById(employeeId: string): Observable<any> {
  //   return this.webApiService.post(`${httpLink.deleteEmployeeById}?employeeId=${employeeId}`, null);
  // }

  // public getEmployeeDetailById(employeeId: string): Observable<any> {
  //   return this.webApiService.get(`${httpLink.getEmployeeDetailById}?employeeId=${employeeId}`);
  // }

  // public saveEmployee(model: any): Observable<any> {
  //   return this.webApiService.post(httpLink.saveEmployee, model);
  // }
}