import { Component, OnInit } from '@angular/core';
import { worksheet } from "../../models/worksheets.interface"
import { DatabaseService } from "../../services/database.service"

import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  customPickerOptions;
  fechaDesde: Date = new Date();
  fechaHasta: Date = new Date();
  constructor(private database: DatabaseService) { }

  worksheets: worksheet[];

  ngOnInit() {
    this.database.getWorksheets().subscribe(res=> {
      this.worksheets=res;
      console.log(res);
    });

  }

}