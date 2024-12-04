import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UOMListComponent } from './uom-list.component';

describe('UOMListComponent', () => {
  let component: UOMListComponent;
  let fixture: ComponentFixture<UOMListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UOMListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UOMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
