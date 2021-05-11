export class Article {
  id: number;
  name: string;
  price: number;
  img: string;
  imgWith: string;

  constructor(name: string, price: number, img: string, imgWith: string) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.price = price;
    this.img = img;
    this.imgWith = imgWith;
  }
}
