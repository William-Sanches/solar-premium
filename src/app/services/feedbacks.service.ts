import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Feedbacks } from '../models/feedbacks';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  private firestore:AngularFirestore;

  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;
  }

  findAll(): Observable<any> {
    return this.firestore.collection("feedbacks").snapshotChanges();
  }

  insert(feedback: Feedbacks): Promise<any> {
    return this.firestore.collection("feedbacks").add(feedback);
  }

  remove(id: string): Promise<any> {
    return this.firestore.collection("feedbacks").doc(id).delete();
  }

  findById(id: string): Observable<any>{
    return this.firestore.collection("feedbacks").doc(id).get();
  }

  update(id: string, feedback: Feedbacks): Promise<any> {
    return this.firestore.collection("feedbacks").doc(id).update(feedback);
  }

}
