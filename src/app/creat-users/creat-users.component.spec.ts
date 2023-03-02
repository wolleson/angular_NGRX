import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatUsersComponent } from './creat-users.component';

describe('CreatUsersComponent', () => {
  let component: CreatUsersComponent;
  let fixture: ComponentFixture<CreatUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
