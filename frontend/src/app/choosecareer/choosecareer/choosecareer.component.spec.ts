import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosecareerComponent } from './choosecareer.component';

describe('ChoosecareerComponent', () => {
  let component: ChoosecareerComponent;
  let fixture: ComponentFixture<ChoosecareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosecareerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosecareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
