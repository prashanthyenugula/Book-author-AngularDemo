import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpriceComponent } from './searchprice.component';

describe('SearchpriceComponent', () => {
  let component: SearchpriceComponent;
  let fixture: ComponentFixture<SearchpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchpriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
