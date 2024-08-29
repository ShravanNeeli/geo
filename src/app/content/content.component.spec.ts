import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ContentComponent } from './content.component';
import { UploadService } from '../services/uploadservice';
import { SearchService } from '../services/search.service';

// Mock services
class MockUploadService {
  getFormData() {
    return of([]);
  }
}

class MockSearchService {
  searchTerm$ = of('');
}

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let uploadService: UploadService;
  let searchService: SearchService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentComponent ],
      providers: [
        { provide: UploadService, useClass: MockUploadService },
        { provide: SearchService, useClass: MockSearchService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    uploadService = TestBed.inject(UploadService);
    searchService = TestBed.inject(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.formData).toEqual([]);
    expect(component.filteredData).toEqual([]);
    expect(component.selectedCategory).toBe('all');
    expect(component.searchTerm).toBe('');
    expect(component.currentPage).toBe(0);
    expect(component.pageSize).toBe(200);
  });

  it('should call loadFormData on category selection', () => {
    spyOn(component, 'loadFormData').and.callThrough();
    component.onCategorySelect('horror');
    expect(component.selectedCategory).toBe('horror');
    expect(component.searchTerm).toBe('');
    expect(component.loadFormData).toHaveBeenCalled();
  });

  it('should call loadFormData on next page', () => {
    spyOn(component, 'loadFormData').and.callThrough();
    component.onNextPage();
    expect(component.currentPage).toBe(1);
    expect(component.loadFormData).toHaveBeenCalled();
  });

  it('should call loadFormData on previous page', () => {
    component.currentPage = 1;
    spyOn(component, 'loadFormData').and.callThrough();
    component.onPreviousPage();
    expect(component.currentPage).toBe(0);
    expect(component.loadFormData).toHaveBeenCalled();
  });

  it('should call applyFilters after data is loaded', () => {
    spyOn(component, 'applyFilters').and.callThrough();
    component.loadFormData();
    expect(component.applyFilters).toHaveBeenCalled();
  });

  it('should filter data based on category and search term', () => {
    component.formData = [
      { id: '1', name: 'Movie 1', category: 'horror' },
      { id: '2', name: 'Movie 2', category: 'comedy' }
    ];
    component.selectedCategory = 'horror';
    component.searchTerm = 'Movie 1';
    component.applyFilters();
    expect(component.filteredData.length).toBe(1);
    expect(component.filteredData[0].name).toBe('Movie 1');
  });

  it('should show no data message when filteredData is empty', () => {
    component.filteredData = [];
    fixture.detectChanges();
    const noDataMessage = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(noDataMessage.textContent).toBe('No data available.');
  });
});
