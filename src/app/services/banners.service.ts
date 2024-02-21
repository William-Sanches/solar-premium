import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Banners } from '../models/banners';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  private firestore:AngularFirestore;

  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;
  }

  findAll(): Observable<any> {
    return this.firestore.collection("banners").snapshotChanges();
  }

  insert(banner: Banners): Promise<any> {
    return this.firestore.collection("banners").add(banner);
  }

  remove(id: string): Promise<any> {
    return this.firestore.collection("banners").doc(id).delete();
  }

}
