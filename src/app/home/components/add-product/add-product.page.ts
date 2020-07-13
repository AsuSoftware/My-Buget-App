import { MemoryStorageService } from './../services/memory-storage.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Products } from '../interfaces/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  product: Products;
  productName = '';
  quantityProduct: number;
  priceProduct: number;

  constructor(private modalController: ModalController, private memory: MemoryStorageService) { }

  ngOnInit() { }

  async closeModal() {
    await this.modalController.dismiss();
  }

  saveProduct() {
    // save product
    this.product = {
      title: this.productName,
      quantity: this.quantityProduct,
      price: this.priceProduct
    };
    console.log(this.product);
    this.memory.addProduct(this.product);
    this.memory.getProduct.emit('hello');
    // close modal
    this.closeModal();
  }

}
