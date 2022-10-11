import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NointernetComponent } from './nointernet.component';

describe('NointernetComponent', () => {
  let component: NointernetComponent;
  let fixture: ComponentFixture<NointernetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NointernetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NointernetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
