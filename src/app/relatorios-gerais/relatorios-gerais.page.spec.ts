import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelatoriosGeraisPage } from './relatorios-gerais.page';

describe('RelatoriosGeraisPage', () => {
  let component: RelatoriosGeraisPage;
  let fixture: ComponentFixture<RelatoriosGeraisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatoriosGeraisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelatoriosGeraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
