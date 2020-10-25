import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorContainerComponent } from './creator-container.component';

describe('CreatorContainerComponent', () => {
  let component: CreatorContainerComponent;
  let fixture: ComponentFixture<CreatorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
