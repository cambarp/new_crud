import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCrudComponent } from './update-crud.component';

describe('UpdateCrudComponent', () => {
  let component: UpdateCrudComponent;
  let fixture: ComponentFixture<UpdateCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
