import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentSectionComponent } from './home-content-section.component';

describe('HomeContentSectionComponent', () => {
  let component: HomeContentSectionComponent;
  let fixture: ComponentFixture<HomeContentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContentSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
