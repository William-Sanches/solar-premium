import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Projetos } from '../models/projetos';


@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private firestore:AngularFirestore;

  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;
  }

  findAll(): Observable<any> {
    return this.firestore.collection("projetos").snapshotChanges();
  }

  insert(projeto: Projetos): Promise<any> {
    return this.firestore.collection("projetos").add(projeto);
  }

  remove(id: string): Promise<any> {
    return this.firestore.collection("projetos").doc(id).delete();
  }

  findById(id: string): Observable<any>{
    return this.firestore.collection("projetos").doc(id).get();
  }

  update(id: string, projeto: Projetos): Promise<any> {
    return this.firestore.collection("projetos").doc(id).update(projeto);
  }

}
