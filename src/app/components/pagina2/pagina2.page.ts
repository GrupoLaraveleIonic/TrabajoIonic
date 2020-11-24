import { Component, OnInit } from '@angular/core';
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
  constructor(private dataService: DataService) { }

  usuarios: Observable<any>;

  ngOnInit() {
// prueba
    this.usuarios = this.dataService.getUsuarios();

    this.customPickerOptions =  {
      buttons: [{
      text: 'Guardar',
      handler: ( evento ) => console.log(evento)
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancelar', // Este role hace que si pinchamos fuera se ejecute
        handler: () => {
        console.log('Cancelar clicked');
        }
        }
      ]
     };
  }
      selecFecha(event) {
        console.log('Date', new Date(event.detail.value));
       }

  }

