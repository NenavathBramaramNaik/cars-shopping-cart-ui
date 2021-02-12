export class ProductItem {
  public _id: number;
  public make: string;
  public model: string;
  public year_model: number;
  public price: number;
  public imageUrl: string;
  public date: string;
  public licensed: boolean;
  public warehouse_name: String;
  public location: String;

  constructor(_id: number, licensed:boolean, warehouse_name: String, location: String, make: string,model: string, year_model:number, price: number, imageUrl: string,date: string ) {
    this._id = _id;
    this.make = make;
    this.model = model;
    this.year_model = year_model;
    this.price = price;
    this.imageUrl = imageUrl;
    this.date = date;
    this.licensed = licensed;
    this.imageUrl = 'https://media.ed.edmunds-media.com/tesla/model-s/2016/oem/2016_tesla_model-s_sedan_p90d_fq_oem_2_1280.jpg';
    this.warehouse_name = warehouse_name;
    this.location = location;
  }
}
