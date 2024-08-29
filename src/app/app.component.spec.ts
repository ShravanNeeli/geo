import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    // Create a mock AuthService
    const authServiceMock = jasmine.createSpyObj('AuthService', ['autoLogin']);

    // Configure the testing module
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        RouterTestingModule  // Import RouterTestingModule to handle <router-outlet>
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    // Create component and test fixture
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();  // Trigger initial data binding
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should call autoLogin on ngOnInit', () => {
    // Verify that autoLogin is called on ngOnInit
    expect(authService.autoLogin).toHaveBeenCalled();
  });

});
