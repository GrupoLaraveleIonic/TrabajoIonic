import { Component, OnInit } from "@angular/core";
import { worksheet } from "../../models/worksheets.interface";
import { DatabaseService } from "../../services/database.service";

import { Observable } from "rxjs";
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  selector: "app-pagina2",
  templateUrl: "./pagina2.page.html",
  styleUrls: ["./pagina2.page.scss"],
})
export class Pagina2Page implements OnInit {
  customPickerOptions;

  public range = { desde: null, hasta: null };

  private loading = false;

  constructor(private database: DatabaseService, private authService: AuthService ) {
    this.database.getWorksheets().subscribe((res) => {
      this.worksheets = res;
      console.log(res);
    });
  }

  worksheets: worksheet[];

  ngOnInit() {}

  filterRange() {
    // PARA QUE FILTRE SIEMPRE QUE HAYA DOS FECHAS INSERTADAS
    if (this.range.desde !== null && this.range.hasta !== null) {
      this.worksheets = this.worksheets.filter(
        (worksheet) =>
          worksheet.date >= this.range.desde &&
          worksheet.date <= this.range.hasta
      );
    }
  }
  rangeDesde(event) {
    this.range.desde = event.detail.value;
    if (this.range.hasta != null && this.range.desde > this.range.hasta) {
      this.range.desde = null;
    }
    this.filterRange();
  }
  rangeHasta(event) {
    this.range.hasta = event.detail.value;
    if (this.range.desde != null && this.range.hasta < this.range.desde) {
      this.range.hasta = null;
    }
    this.filterRange();
  }
}
