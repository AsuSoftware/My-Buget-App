import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MemoryStorageService } from '../services/memory-storage.service';

@Component({
  selector: 'app-add-buget',
  templateUrl: './add-buget.page.html',
  styleUrls: ['./add-buget.page.scss'],
})
export class AddBugetPage implements OnInit {

  buget = 0;

  constructor(private modalController: ModalController, private memory: MemoryStorageService) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  saveBuget(): void {
    if (this.buget > 0) {
      this.memory.saveBuget(this.buget);
    }
    this.memory.getProduct.emit('hello');
    // close modal
    this.closeModal();
  }

}
