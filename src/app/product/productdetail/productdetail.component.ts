import { ProductItem } from './../product.model';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  @Input() item: ProductItem;
  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductItem, public dialogRef: MatDialogRef<ProductdetailComponent>) {
    this.item = data;
    console.log(data.price);
   }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
