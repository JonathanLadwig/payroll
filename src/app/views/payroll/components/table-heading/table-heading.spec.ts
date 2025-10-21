import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeading } from './table-heading';

describe('TableHeading', () => {
  let component: TableHeading;
  let fixture: ComponentFixture<TableHeading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHeading]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
