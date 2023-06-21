import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getAllProducts() {
    throw new Error('Method not implemented.');
  }
  constructor(private http:HttpClient) { }
// this is use for sign in 
  signIn() { 
    return this.http.get(environment.apiPath +'admin');
  }
// this is user for sign up
 signUp(data:any) {
  return this.http.post(environment.apiPath +'user', data);
 }

 getHData() {
  return this.http.get(environment.apiPath + 'product')
 }
 searchBoxValue:string= '';
 filteredProducts: string= '';

 setSearchBoxValue(value: any) {
   this.searchBoxValue = value;
 }

 setFilteredProducts(products: any):void {
   this.filteredProducts = products;
 }

}
