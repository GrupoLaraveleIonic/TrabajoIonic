import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { firebaseConfig} from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { worksheet } from '../models/worksheets.interface';

=======
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { worksheet } from '../models/worksheets.interface';
>>>>>>> Stashed changes
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private worksheetCollection: AngularFirestoreCollection<worksheet>;
<<<<<<< Updated upstream
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
=======
  private worksheet: Observable<worksheet[]>;
  userUid: string;
  getFichas(){
    return this.db.collection('fichas').snapshotChanges().pipe(map( todos =>{

      return todos.map(t => {

        const datos = t.payload.doc.data() as todo;
        return datos;
      }
        )
    }
      ))
  } }
  constructor(private db: AngularFirestore) {
  }

>>>>>>> Stashed changes
