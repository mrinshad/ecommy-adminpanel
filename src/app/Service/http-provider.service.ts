import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { Constants } from '../config/constants';

const apiUrl = Constants.API_ENDPOINT;
const httpLink = {
  getAllApprovedProducts: `${apiUrl}/products/getApprovedProducts`,
  getAllProducts: `${apiUrl}/products/getProducts`,
  approveProduct: `${apiUrl}/products/approveProduct`,
  rejectProduct: `${apiUrl}/products/rejectProduct`,
};

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) {}

  // Products
  public getAllApprovedProducts(): Observable<any> {
    return this.webApiService.get(httpLink.getAllApprovedProducts);
  }

  public getAllProducts(): Observable<any> {
    return this.webApiService.get(httpLink.getAllProducts);
  }

  public approveProduct(product_id:any):Observable<any>{
    return this.webApiService.post(httpLink.approveProduct,product_id)
  }

  public rejectProduct(product_id:any):Observable<any>{
    return this.webApiService.post(httpLink.rejectProduct,product_id);
  }

  
  // public deleteEmployeeById(employeeId: string): Observable<any> {
  //   return this.webApiService.post(`${httpLink.deleteEmployeeById}?employeeId=${employeeId}`, null);
  // }
}