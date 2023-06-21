import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlistCount: number= 0 ;
  constructor() { }
  // this is add count wishlist 
  setWishlistCount(count: any): void {
    this.wishlistCount = count;
  }
  // this is show count wishlist 
  getWishlistCount(): any  {
    this.wishlistCount; 
    return this.wishlistCount;
  }
}
