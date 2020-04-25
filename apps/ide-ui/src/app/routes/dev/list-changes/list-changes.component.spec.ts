import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChangesComponent } from './list-changes.component';

describe('ListChangesComponent', () => {
  let component: ListChangesComponent;
  let fixture: ComponentFixture<ListChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
