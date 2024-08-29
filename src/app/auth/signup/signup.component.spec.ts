import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { SignupComponent } from './signup.component';
import { AuthService } from '../../services/auth.service';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['signup']);

    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
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
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call AuthService.signup and navigate on form submission', () => {
    // Arrange
    const mockForm = {
      value: { email: 'test@example.com', password: 'password' },
      resetForm: jasmine.createSpy('resetForm') // Mock the resetForm method
    } as unknown as NgForm;

    authService.signup.and.returnValue(of({}));

    // Act
    component.onSubmit(mockForm);

    // Assert
    expect(authService.signup).toHaveBeenCalledWith('test@example.com', 'password');
    expect(router.navigate).toHaveBeenCalledWith(['']);
    expect(mockForm.resetForm).toHaveBeenCalled(); // Check if resetForm was called
  });
});
