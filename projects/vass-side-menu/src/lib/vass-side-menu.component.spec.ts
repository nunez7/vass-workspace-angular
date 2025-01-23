import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VassSideMenuComponent } from './vass-side-menu.component';

describe('VassSideMenuComponent', () => {
  let component: VassSideMenuComponent;
  let fixture: ComponentFixture<VassSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VassSideMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VassSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
