 
import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/uploadservice';
import { SearchService } from '../services/search.service';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  formData: any[] = [];
  filteredData: any[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';
  currentPage: number = 0;
  pageSize: number = 200;

  constructor(private uploadService: UploadService, private searchService: SearchService) {}

  ngOnInit() {
    this.setupSearchSubscription();
    // this.setupCategorySubscription();
    this.loadFormData(); // Initial load
  }

  loadFormData() {
    const start = this.currentPage * this.pageSize;
    this.uploadService.getFormData(this.searchTerm, this.selectedCategory, start, this.pageSize).subscribe((data: any) => {
      this.formData = this.transformData(data);
      this.applyFilters(); // Apply filters after data is loaded
    });
  }

  setupSearchSubscription() {
    this.searchService.searchTerm$.pipe(
      debounceTime(300),
      switchMap(term => {
        this.searchTerm = term;
        this.selectedCategory = 'all'; // Ignore category filter during search
        this.currentPage = 0; // Reset page to 0 on new search
        return this.uploadService.getFormData(this.searchTerm, this.selectedCategory, this.currentPage * this.pageSize, this.pageSize);
      })
    ).subscribe(data => {
      this.formData = this.transformData(data);
      this.applyFilters(); // Apply filters after data is loaded
    });
  }

  // setupCategorySubscription() {
  //   // Setup subscription to category change logic
  //   // This is done in the method onCategorySelect directly in this case
  // }

  transformData(data: any): any[] {
    const formDataArray: any[] = [];
    if (data && typeof data === 'object') {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          formDataArray.push({ id: key, ...data[key] });
        }
      }
    }
    return formDataArray;
  }

  applyFilters() {
    const normalizedSearchTerm = this.searchTerm.toLowerCase();

    this.filteredData = this.formData.filter(item => {
      const matchesCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;
      const matchesSearch = normalizedSearchTerm === '' || item.name.toLowerCase().includes(normalizedSearchTerm);
      return matchesCategory && matchesSearch;
    });
  }

  onCategorySelect(category: string) {
    this.selectedCategory = category;
    this.searchTerm = ''; // Clear search term when changing category
    this.currentPage = 0; // Reset page to 0 on new category selection
    this.loadFormData(); // Load data based on new category
  }

  onNextPage() {
    this.currentPage++;
    this.loadFormData(); // Load the next page of data
  }

  onPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadFormData(); // Load the previous page of data
    }
  }
}