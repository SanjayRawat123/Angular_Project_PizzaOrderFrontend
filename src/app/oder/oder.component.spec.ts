import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderComponent } from './oder.component';

describe('OderComponent', () => {
  let component: OderComponent;
  let fixture: ComponentFixture<OderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
