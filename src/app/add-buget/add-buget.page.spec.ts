import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBugetPage } from './add-buget.page';

describe('AddBugetPage', () => {
  let component: AddBugetPage;
  let fixture: ComponentFixture<AddBugetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBugetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBugetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
