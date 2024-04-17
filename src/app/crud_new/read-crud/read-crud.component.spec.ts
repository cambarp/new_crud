import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCrudComponent } from './read-crud.component';

describe('ReadCrudComponent', () => {
  let component: ReadCrudComponent;
  let fixture: ComponentFixture<ReadCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
