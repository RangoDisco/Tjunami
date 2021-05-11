export class Article {
  id: number;
  name: string;
  price: number;
  img: string;

  constructor(name: string, price: number, img: string) {
    this.id = Math.floor(Math.random() * 1000);
    this.name = name;
    this.price = price;
    this.img = img;
  }
}
