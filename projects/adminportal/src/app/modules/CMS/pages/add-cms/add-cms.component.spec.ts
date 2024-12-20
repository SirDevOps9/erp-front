import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCMSComponent } from './add-cms.component';

describe('AddCMSComponent', () => {
  let component: AddCMSComponent;
  let fixture: ComponentFixture<AddCMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCMSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
