import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPlaceDialogComponent } from './create-new-place-dialog.component';

describe('CreateNewPlaceDialogComponent', () => {
  let component: CreateNewPlaceDialogComponent;
  let fixture: ComponentFixture<CreateNewPlaceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewPlaceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewPlaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
