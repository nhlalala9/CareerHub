import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpmechooseComponent } from './helpmechoose.component';

describe('HelpmechooseComponent', () => {
  let component: HelpmechooseComponent;
  let fixture: ComponentFixture<HelpmechooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpmechooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpmechooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
