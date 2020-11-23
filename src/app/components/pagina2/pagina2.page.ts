import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  customPickerOptions;
  customDate;
  fechaDesde: Date = new Date();
  fechaHasta: Date = new Date();
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
      text: 'Save',
      handler: ( evento ) => console.log(evento)
      }, {
      text: 'Log',
      handler: () => {
      console.log('Clicked Log. Do not Dismiss.');
      return false;
      }
      }]
    };


  // selecFecha(event){
  //   console.log('Date', new Date(event.detail.value));
  // }
  }
}
