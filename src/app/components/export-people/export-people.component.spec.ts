import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPeopleComponent } from './export-people.component';

describe('ExportPeopleComponent', () => {
  let component: ExportPeopleComponent;
  let fixture: ComponentFixture<ExportPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
