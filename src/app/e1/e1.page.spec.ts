import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { E1Page } from './e1.page';

describe('E1Page', () => {
  let component: E1Page;
  let fixture: ComponentFixture<E1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(E1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
