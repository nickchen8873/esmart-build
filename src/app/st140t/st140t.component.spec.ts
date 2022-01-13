import { ComponentFixture, TestBed } from '@angular/core/testing';

import { St140tComponent } from './st140t.component';

describe('St140tComponent', () => {
  let component: St140tComponent;
  let fixture: ComponentFixture<St140tComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ St140tComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(St140tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
