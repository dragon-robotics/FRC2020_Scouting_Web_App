import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchScoutingFormComponent } from './match-scouting-form.component';

describe('MatchScoutingFormComponent', () => {
  let component: MatchScoutingFormComponent;
  let fixture: ComponentFixture<MatchScoutingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchScoutingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchScoutingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
