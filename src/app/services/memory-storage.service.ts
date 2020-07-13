import { element } from 'protractor';
import { Products } from './../interfaces/products';
import { Memory } from './../interfaces/memory';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class MemoryStorageService {

  @Output() public getProduct = new EventEmitter<any>();

  memory: Products[] = [];
  product: Products;
  buget = 0;
  total = 0;

  constructor() { }

  addProduct(product: Products): void {
    this.memory.push(product);
    this.buget -= (product.price * product.quantity);
    this.total += (product.price * product.quantity);
    this.saveToLocalStorage();
    this.saveBuget(this.buget);
    this.saveTotal(this.total);
    console.log('ceva');
  }

  // mi fa vedere i prodoti del storage
  showProducts(): Products[] {
    const y = localStorage.getItem('data');
    if (y !== null) {
      console.log(y);
      this.memory = JSON.parse(y);
      console.log(this.memory);
    }
    return this.memory;
  }

  deleteProduct(index: number): void {
    const y = localStorage.getItem('data');
    this.memory = JSON.parse(y);
    console.log(this.memory[index]);
    this.buget += (this.memory[index].price * this.memory[index].quantity);
    this.total -= (this.memory[index].price * this.memory[index].quantity);
    this.memory.splice(index, 1);
    this.saveToLocalStorage();
    this.saveBuget(this.buget);
    this.saveTotal(this.total);
    this.getProduct.emit('hello');
  }

  saveToLocalStorage(): void {
    const x = JSON.stringify(this.memory);
    localStorage.setItem('data', x);
  }

  saveBuget(buget: number): void {
    this.buget = buget;
    const x = JSON.stringify(buget);
    localStorage.setItem('userBuget', x);
  }

  saveTotal(total: number): void {
    const x = JSON.stringify(total);
    localStorage.setItem('total', x);
  }

  getBuget(): number {

    const y = localStorage.getItem('userBuget');
    if (y !== null) {
      console.log(y);
      this.buget = JSON.parse(y);
    }
    return this.buget;
  }

  getTotal(): number {
    const y = localStorage.getItem('total');
    if (y !== null) {
      console.log(y);
      this.total = JSON.parse(y);
    }
    return this.total;
  }
}
