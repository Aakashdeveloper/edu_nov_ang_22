import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusListPageComponent } from './bus-list-page.component';

describe('BusListPageComponent', () => {
  let component: BusListPageComponent;
  let fixture: ComponentFixture<BusListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
