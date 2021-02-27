import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { E3Page } from './e3.page';

describe('E3Page', () => {
  let component: E3Page;
  let fixture: ComponentFixture<E3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(E3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
