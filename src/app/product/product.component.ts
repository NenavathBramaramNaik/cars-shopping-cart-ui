import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductItem } from './product.model';
import { ProductService } from './../_services/product.service';
import { Component, OnInit, EventEmitter, Output, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  items: ProductItem[];
  constructor(private productService:ProductService,private dialog: MatDialog) {
    this.products = [];
    this.items = [];
   }

   @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number
  }>();

  ngOnInit(): void {
    this.getAllWarehouseDetails();
  }

  private getAllWarehouseDetails(){
    this.productService.getAllWarehouseDetails().pipe().subscribe(data => {
      data.forEach(whouse => {
          this.getProductItems(whouse.cars.vehicles, whouse.name, whouse.cars.location);
      });
      console.log(this.items)
      console.log("------- ");
      console.log(JSON.stringify(this.sortData()));
    });
  }

  private getProductItems(vehicles: any[], whouseName: String, location: String){
    vehicles.forEach(vehicle => {
      vehicle["location"] = location;
      vehicle["warehouse_name"] = whouseName;
      this.items.push(vehicle);
    });
  }

  private sortData() {
    return this.items.sort((a, b) => {
      return <any>new Date(a.year_model) - <any>new Date(b.year_model);
    });
  }

  onCartUpdated(id: number) {
    console.log("id == "+id);
    const index = this.items.findIndex(elem => elem._id == id);
    console.log("index = "+index);
    console.log(this.items[index].make);
    this.cartUpdated.emit({
        productId: this.items[index]._id,
        productName: this.items[index].make,
        productPrice: this.items[index].price
      });
}

open(item:any){
  console.log("clicked.."+item.price);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = item;
  this.dialog.open(ProductdetailComponent, dialogConfig);

}

}
