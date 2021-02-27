import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { E4Page } from './e4.page';

describe('E4Page', () => {
  let component: E4Page;
  let fixture: ComponentFixture<E4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(E4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
