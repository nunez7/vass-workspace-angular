import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VassSideMenuComponent } from './vass-side-menu.component';
import { provideRouter } from '@angular/router';

describe('VassSideMenuComponent', () => {
  let component: VassSideMenuComponent;
  let fixture: ComponentFixture<VassSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VassSideMenuComponent],
      providers: [provideRouter([])]  
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VassSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSingIn when button is clicked', () => {
    spyOn(component.signIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-login]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.signIn.emit).toHaveBeenCalled();
  });

  it('should call onSignOut when button is clicked', () => {
    spyOn(component.signOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);

    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector(
      '[data-logout]'
    ) as HTMLButtonElement;

    expect(button).toBeTruthy();

    button.click();

    expect(component.signOut.emit).toHaveBeenCalled();
  });
});
