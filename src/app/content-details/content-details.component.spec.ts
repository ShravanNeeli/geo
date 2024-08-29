// // import { ComponentFixture, TestBed } from '@angular/core/testing';
// // import { of, throwError } from 'rxjs';
// // import { ActivatedRoute } from '@angular/router';
// // import { ContentDetailComponent } from './content-details.component';
// // import { UploadService } from '../services/uploadservice';
// // import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// // import { NO_ERRORS_SCHEMA } from '@angular/core';

// // describe('ContentDetailComponent', () => {
// //   let component: ContentDetailComponent;
// //   let fixture: ComponentFixture<ContentDetailComponent>;
// //   let mockUploadService: jasmine.SpyObj<UploadService>;
// //   let mockSanitizer: jasmine.SpyObj<DomSanitizer>;
// //   let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

// //   // Mock data
// //   const mockData = {
// //     youtubeTrailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
// //     someOtherField: 'test'
// //   };

// //   beforeEach(() => {
// //     // Create mock services with spies
// //     mockUploadService = jasmine.createSpyObj('UploadService', ['getFormData']);
// //     mockSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
// //     mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);

// //     // Set up the return values for the spies
// //     (mockUploadService.getFormData as jasmine.Spy).and.returnValue(of(mockData));
// //     (mockSanitizer.bypassSecurityTrustResourceUrl as jasmine.Spy).and.returnValue('sanitizedUrl' as SafeResourceUrl);
// //     (mockActivatedRoute.snapshot as any).paramMap = jasmine.createSpyObj('paramMap', ['get']);
// //     (mockActivatedRoute.snapshot.paramMap.get as jasmine.Spy).and.returnValue('1'); // Mock ID

// //     TestBed.configureTestingModule({
// //       declarations: [ContentDetailComponent],
// //       providers: [
// //         { provide: UploadService, useValue: mockUploadService },
// //         { provide: DomSanitizer, useValue: mockSanitizer },
// //         { provide: ActivatedRoute, useValue: mockActivatedRoute }
// //       ],
// //       schemas: [NO_ERRORS_SCHEMA] // Ignore unknown elements and attributes
// //     }).compileComponents();

// //     fixture = TestBed.createComponent(ContentDetailComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges(); // Trigger initial data binding
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });

// //   it('should call getFormData on UploadService', () => {
// //     expect(mockUploadService.getFormData).toHaveBeenCalledWith('1');
// //   });

// //   it('should set imageDetails and sanitize YouTube trailer URL on successful data fetch', () => {
// //     fixture.detectChanges(); // Ensure ngOnInit is called

// //     expect(component.imageDetails).toEqual(mockData);
// //     expect(component.sanitizedYouTubeTrailerUrl).toBe('sanitizedUrl');
// //   });

// //   it('should handle errors from getFormData and reset values', () => {
// //     (mockUploadService.getFormData as jasmine.Spy).and.returnValue(throwError(() => new Error('Error')));
// //     fixture.detectChanges(); // Ensure ngOnInit is called

// //     expect(component.imageDetails).toEqual({});
// //     expect(component.sanitizedYouTubeTrailerUrl).toBeNull();
// //   });

// //   it('should set sanitizedYouTubeTrailerUrl to null for invalid YouTube URLs', () => {
// //     component.imageDetails.youtubeTrailerUrl = 'invalid-url';
// //     component.sanitizeYouTubeTrailerUrl(); // Manually call the method

// //     expect(component.sanitizedYouTubeTrailerUrl).toBeNull();
// //   });

// //   it('should handle image load errors', () => {
// //     spyOn(console, 'error'); // Spy on console error to check if it was called
// //     component.onImageError(); // Manually trigger the image error handler

// //     expect(console.error).toHaveBeenCalledWith('Image failed to load');
// //   });
// // });


// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ContentDetailComponent } from './content-details.component';
// import { UploadService } from '../services/uploadservice';
// import { ActivatedRoute } from '@angular/router';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { Observable, of } from 'rxjs';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

// describe('ContentDetailComponent', () => {
//   let component: ContentDetailComponent;
//   let fixture: ComponentFixture<ContentDetailComponent>;
//   let mockUploadService: jasmine.SpyObj<UploadService>;
//   let mockSanitizer: jasmine.SpyObj<DomSanitizer>;
//   let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

//   // Define mock data
//   const mockData = {
//     '1': {
//       youtubeTrailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       name: 'Test Image',
//       category: 'Test Category',
//       category2: 'Test Category2',
//       imageUrl: 'https://example.com/image.jpg'
//     }
//   };

//   beforeEach(() => {
//     // Create spy objects for services
//     mockUploadService = jasmine.createSpyObj('UploadService', ['getFormData']);
//     mockSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
//     mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);

//     // Set up return values for spies
//     (mockUploadService.getFormData as jasmine.Spy).and.returnValue(of(mockData));
//     (mockSanitizer.bypassSecurityTrustResourceUrl as jasmine.Spy).and.returnValue('sanitizedUrl' as SafeResourceUrl);
//     (mockActivatedRoute.snapshot as any).paramMap = jasmine.createSpyObj('paramMap', ['get']);
//     (mockActivatedRoute.snapshot.paramMap.get as jasmine.Spy).and.returnValue('1'); // Mock ID

//     TestBed.configureTestingModule({
//       declarations: [ContentDetailComponent],
//       providers: [
//         { provide: UploadService, useValue: mockUploadService },
//         { provide: DomSanitizer, useValue: mockSanitizer },
//         { provide: ActivatedRoute, useValue: mockActivatedRoute }
//       ],
//       schemas: [NO_ERRORS_SCHEMA] // Ignore unknown elements and attributes
//     }).compileComponents();

//     fixture = TestBed.createComponent(ContentDetailComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should set imageDetails and sanitize YouTube trailer URL on successful data fetch', () => {
//     fixture.detectChanges(); // Ensure ngOnInit is called

//     // Debug output
//     console.log('Component imageDetails:', component.imageDetails);
//     console.log('Component sanitizedYouTubeTrailerUrl:', component.sanitizedYouTubeTrailerUrl);

//     // Validate imageDetails
//     expect(component.imageDetails).toEqual(mockData['1']);

//     // Validate sanitizedYouTubeTrailerUrl
//     expect(component.sanitizedYouTubeTrailerUrl).toBe('sanitizedUrl');
//   });

//   it('should display loading template when data is being fetched', () => {
//     // Simulate data fetch with a delay
//     mockUploadService.getFormData.and.returnValue(new Observable(observer => {
//       setTimeout(() => {
//         observer.next(mockData);
//         observer.complete();
//       }, 100); // Simulate a delay
//     }));

//     fixture.detectChanges(); // Trigger initial data binding and ngOnInit

//     const compiled = fixture.nativeElement as HTMLElement;

//     // Expect the loading template to be displayed initially
//     expect(compiled.querySelector('.loading-container')).toBeTruthy();

//     // Simulate the passage of time to allow for async operations to complete
//     fixture.whenStable().then(() => {
//       fixture.detectChanges(); // Update the DOM after async operations
//       // Expect the loading template to be hidden after data fetch
//       expect(compiled.querySelector('.loading-container')).toBeNull();
//     });
//   });

//   it('should display image details when data is available', () => {
//     fixture.detectChanges(); // Ensure ngOnInit is called

//     const compiled = fixture.nativeElement as HTMLElement;

//     // Expect the image details to be displayed
//     expect(compiled.querySelector('.image-details-container')).toBeTruthy();
//     expect(compiled.querySelector('h1')?.textContent).toContain('Test Image');
//     expect(compiled.querySelector('p')?.textContent).toContain('Category: Test Category');
//     expect(compiled.querySelector('p')?.textContent).toContain('Category2: Test Category2');
//     expect(compiled.querySelector('img')?.getAttribute('src')).toBe('https://example.com/image.jpg');
//   });

//   it('should set sanitizedYouTubeTrailerUrl to null for invalid YouTube URLs', () => {
//     // Mock data with invalid URL
//     const invalidData = {
//       '1': {
//         youtubeTrailerUrl: 'https://www.example.com/not-a-youtube-url',
//         someOtherField: 'test'
//       }
//     };

//     (mockUploadService.getFormData as jasmine.Spy).and.returnValue(of(invalidData));
//     fixture.detectChanges(); // Ensure ngOnInit is called

//     expect(component.sanitizedYouTubeTrailerUrl).toBeNull();
//   });

//   it('should handle image load errors', () => {
//     spyOn(console, 'error'); // Spy on console.error

//     // Simulate image error
//     component.onImageError();

//     // Verify error handling
//     expect(console.error).toHaveBeenCalledWith('Image failed to load');
//   });
// });
