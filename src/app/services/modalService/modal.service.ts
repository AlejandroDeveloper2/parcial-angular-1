import { Injectable } from '@angular/core';

import { Subject } from '../../interfaces/Subject';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isModalVisible: boolean = false;
  mode: string = '';

  constructor() {}

  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }

  setModalMode(mode: string): void {
    this.mode = mode;
  }
}
