import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pagina3Page } from './pagina3.page';

describe('Pagina3Page', () => {
  let component: Pagina3Page;
  let fixture: ComponentFixture<Pagina3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pagina3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
