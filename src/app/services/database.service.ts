import { Injectable } from '@angular/core';
import { firebaseConfig} from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { worksheet } from '../models/worksheets.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private worksheetCollection: AngularFirestoreCollection<worksheet>;
  private worksheets: Observable<worksheet[]>;
  constructor(db: AngularFirestore) {
    this.worksheetCollection = db.collection<worksheet>('worksheet');
    this.worksheets = this.worksheetCollection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a=>{
          const id = a.payload.doc.id;
          const data = a.payload.doc.data();
          return {id, ...data};
        });
      }
    ));
   }
   getWorksheets() {
    return this.worksheets;
   }
}
