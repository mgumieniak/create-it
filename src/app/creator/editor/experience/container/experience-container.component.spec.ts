import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceContainerComponent } from './experience-container.component';

describe('ExperienceContainerComponent', () => {
  let component: ExperienceContainerComponent;
  let fixture: ComponentFixture<ExperienceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
