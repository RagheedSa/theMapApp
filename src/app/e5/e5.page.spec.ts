import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { E5Page } from './e5.page';

describe('E5Page', () => {
  let component: E5Page;
  let fixture: ComponentFixture<E5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(E5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
