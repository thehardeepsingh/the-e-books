import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductService } from 'src/app/services/product/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  wishlistNumber: any; 
  products: any;   
  searchBox: string = '';
  filteredProducts: any[] = [];
  constructor(private WishlistService: WishlistService, private productServices: ProductService, private auth:AuthService) { }
  // this function check wishlist length
  ngDoCheck() {
    this.wishlistNumber = this.WishlistService.getWishlistCount();
  }
  ngOnInit() {
    this.getProductData();
  }
  // this function for searching products 
  getProductData() {
    // this.productServices.getProducts().subscribe((data: any) => {
    //   this.products = data;
    //   console.log(this.products)
    // });

   }
   getAllProducts(){
    this.auth.getHData().subscribe((data:any) => {
      this.products = data;
    })
  }
   searchData() {
    this.auth.setSearchBoxValue(this.searchBox);
    this.filterProducts();
  }

  filterProducts() {
    const searchTermLowerCase = this.searchBox.toLowerCase();
    const allProducts = this.auth.getAllProducts(); // Get the products from the API or another source

    const filteredProducts = allProducts.filter((product: any) =>
      product.name.toLowerCase().includes(searchTermLowerCase)
    );
    this.auth.setFilteredProducts(filteredProducts);
  }
  }
 

 
