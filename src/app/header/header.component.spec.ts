import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { SearchService } from '../services/search.service';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let searchService: jasmine.SpyObj<SearchService>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;

  beforeEach(async () => {
    const searchServiceSpy = jasmine.createSpyObj('SearchService', ['updateSearchTerm']);
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['logOut']);
    
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule, FormsModule ],
      providers: [
        { provide: SearchService, useValue: searchServiceSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    searchService = TestBed.inject(SearchService) as jasmine.SpyObj<SearchService>;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true)); // Mock router navigation
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu when toggleMenu is called', () => {
    component.isMenuOpen = true;
    component.toggleMenu();
    expect(component.isMenuOpen).toBeFalse();
    
    component.toggleMenu();
    expect(component.isMenuOpen).toBeTrue();
  });

  it('should call searchService.updateSearchTerm when handleSearch is called', () => {
    component.searchTerm = 'test';
    component.handleSearch();
    expect(searchService.updateSearchTerm).toHaveBeenCalledWith('test');
  });

  it('should navigate to /upload when upload is called', () => {
    component.upload();
    expect(router.navigate).toHaveBeenCalledWith(['/upload']);
  });

  it('should call authService.logOut when viewProfile is called', () => {
    component.viewProfile();
    expect(authService.logOut).toHaveBeenCalled();
  });
});
