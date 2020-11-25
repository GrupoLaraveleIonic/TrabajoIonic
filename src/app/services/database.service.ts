import { Injectable } from "@angular/core";
import { firebaseConfig } from "../../environments/environment";
import { AngularFireModule } from "@angular/fire";

import {
  AngularFirestoreModule,
  AngularFirestoreCollection,
  AngularFirestore,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { worksheet } from "../models/worksheets.interface";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  private worksheetCollection: AngularFirestoreCollection<worksheet>;
  private worksheets: Observable<worksheet[]>;

  constructor(db: AngularFirestore) {
    this.worksheetCollection = db.collection<worksheet>("worksheet")
  }

// private userid;
// private worksheetCollection: AngularFirestoreCollection<worksheet>;
// private worksheets: Observable<worksheet[]>;

// constructor(db: AngularFirestore, authService: AuthService) {
//   authService.getUserAuth().subscribe(response => this.userid = response.uid);
//   this.worksheetCollection = db.collection<worksheet>("worksheet").where("userid", "==" , this.userid);
// }

  getWorksheets() {
    return (this.worksheets = this.worksheetCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const id = a.payload.doc.id;
          const data = a.payload.doc.data();
          // data.date = data.date.toDate();
          return { id, ...data };
        });
      })
    ));
  }
}
