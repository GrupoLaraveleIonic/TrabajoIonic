import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { worksheet } from "../models/worksheets.interface";
import {assistance} from "../models/assistance.interface";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  private worksheetCollection: AngularFirestoreCollection<worksheet>;
  private worksheets: Observable<worksheet[]>;
  constructor(db: AngularFirestore, au: AuthService) {
    this.worksheetCollection = db.collection<worksheet>("worksheet");
    this.worksheets = this.worksheetCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data() as worksheet;
          return { ...data };
        });
      })
    );
  }
  getWorksheets() {
    return this.worksheets;
  }
}
