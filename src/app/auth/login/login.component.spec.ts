import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy }
      ]
    }).compileComponents();

    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate'); // Spy on router navigation
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to signup page on toSignup call', () => {
    component.toSignup();
    expect(router.navigate).toHaveBeenCalledWith(['/signup']);
  });

  it('should call AuthService.login and navigate on form submission', () => {
    // Arrange
    const form = { value: { email: 'test@example.com', password: 'password' } } as NgForm;
    authService.login.and.returnValue(of({}));

    // Act
    component.onsubmit(form);

    // Assert
    expect(authService.login).toHaveBeenCalledWith('test@example.com', 'password');
    expect(router.navigate).toHaveBeenCalledWith(['/header']);
  });
});
