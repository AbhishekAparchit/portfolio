import { Injectable } from '@angular/core';
import { getFirestore, collection, addDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private db = getFirestore();

  async sendMessage(data: any) {
    return addDoc(collection(this.db, "contacts"), data);
  }
}