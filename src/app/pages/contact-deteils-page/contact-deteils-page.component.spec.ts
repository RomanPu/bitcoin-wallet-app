import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDeteilsPageComponent } from './contact-deteils-page.component';

describe('ContactDeteilsPageComponent', () => {
  let component: ContactDeteilsPageComponent;
  let fixture: ComponentFixture<ContactDeteilsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactDeteilsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDeteilsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
