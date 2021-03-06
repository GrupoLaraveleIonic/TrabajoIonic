import { Component, OnInit, ViewChild } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { CalendarComponent } from "ionic2-calendar";
import { AuthService } from "../../services/auth.service";
import { DatabaseService } from "../../services/database.service"

@Component({
  selector: "app-pagina4",
  templateUrl: "./pagina4.page.html",
  styleUrls: ["./pagina4.page.scss"],
})
export class Pagina4Page implements OnInit {
  eventSource = [];

  isToday: boolean;
  viewTitle;
  calendar = {
    mode: "month",
    currentDate: new Date(),
  };
  selectedDate = new Date();
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  userUid: string;

  today() {
    this.calendar.currentDate = new Date();
  }
  next() {
    this.myCal.slideNext();
  }
  back() {
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    console.log(
      "Event selected:" +
        event.startTime +
        "-" +
        event.endTime +
        "," +
        event.title
    );
  }

  onTimeSelected(ev) {
    this.selectedDate = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  onRangeChanged(ev) {
    // Borrar esto
    console.log(
      "range changed: startTime: " + ev.startTime + ", endTime: " + ev.endTime
    );
  }

  constructor(private db: AngularFirestore, private authservice: AuthService, au: DatabaseService) {
    this.db.collection(`events`).snapshotChanges().subscribe(colSnap => {
			this.eventSource = [];
			colSnap.forEach(snap => {
				const event: any = snap.payload.doc.data();
				event.id = snap.payload.doc.id;
				event.startTime = event.startTime.toDate();
				event.endTime = event.endTime.toDate();
				this.eventSource.push(event);
			});
		});
      
  }

  addNewFJ() {
    let start = this.selectedDate;
    let end = this.selectedDate;
    let event = {
      justificado: false,
      startTime: start,
      endTime: end,
      userid: this.userUid,
    };
    this.db.collection("events").add(event);
  }
  addNewFI() {
    let start = this.selectedDate;
    let end = this.selectedDate;
    end.setHours(start.getHours());
    let event = {
      justificado: false,
      startTime: start,
      endTime: end,
      userid: this.userUid,
    };
    this.db.collection("events").add(event);
  }

  markDisabled = (date: Date) => {
    // Hace disabled sabados y domingos
    return date.getDay() == 6 || date.getDay() == 0;
  };
  ngOnInit() {
    this.authservice.getUserAuth().subscribe((user) => {
      this.userUid = user.uid;
    });
  }
}
