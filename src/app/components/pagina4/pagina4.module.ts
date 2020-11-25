import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina4PageRoutingModule } from './pagina4-routing.module';

import { Pagina4Page } from './pagina4.page';

import { NgCalendarModule  } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/es';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina4PageRoutingModule,
    NgCalendarModule
  ],
  declarations: [Pagina4Page],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ]
})
export class Pagina4PageModule {}
