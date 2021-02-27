import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { E2Page } from './e2.page';

describe('E2Page', () => {
  let component: E2Page;
  let fixture: ComponentFixture<E2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(E2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
