import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitScoutingFormComponent } from './pit-scouting-form.component';

describe('PitScoutingFormComponent', () => {
  let component: PitScoutingFormComponent;
  let fixture: ComponentFixture<PitScoutingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitScoutingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitScoutingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
