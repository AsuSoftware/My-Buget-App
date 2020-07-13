import { MemoryStorageService } from './../services/memory-storage.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { ModalController } from '@ionic/angular';
import { AddProductPage } from './../add-product/add-product.page';
import { AddBugetPage } from '../add-buget/add-buget.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  products: Products[];
  buget = 0;
  total = 0;

  constructor(private modalController: ModalController, private memory: MemoryStorageService) { }

  async openModal() {
    if (this.buget > 0) {
      const modal = await this.modalController.create({
        component: AddProductPage
      });
      return await modal.present();
    }
  }

  async openBugetModal() {
    const modal = await this.modalController.create({
      component: AddBugetPage
    });
    return await modal.present();
  }

  ngOnInit() {
    console.log('1');
    this.showInfo();
    this.memory.getProduct.subscribe(data => {
      this.showInfo();
    });
  }

  showInfo(): void {
    // mostra il buget
    this.buget = this.memory.getBuget();
    // mostra i prodotti salvati nello storage
    this.products = this.memory.showProducts();
    // mostra il totale salvato nello storage
    this.total = this.memory.getTotal();
  }


  deleteProduct(i: number): void {
    console.log('index: ' + i);
    this.memory.deleteProduct(i);
    this.products.splice(i, 1);
  }

}
