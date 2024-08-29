

// // import { Component, OnInit } from '@angular/core';
// // import { ActivatedRoute } from '@angular/router';
// // import { UploadService } from '../services/uploadservice';
// // import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// // @Component({
// //   selector: 'app-content-details',
// //   templateUrl: './content-details.component.html',
// //   styleUrls: ['./content-details.component.css']
// // })
// // export class ContentDetailComponent implements OnInit {
// //   imageId: string | null = null;
// //   imageDetails: any = {};

// //   constructor(
// //     private route: ActivatedRoute,
// //     private uploadService: UploadService,
// //     private sanitizer: DomSanitizer
// //   ) {}

// //   ngOnInit(): void {
// //     this.imageId = this.route.snapshot.paramMap.get('id');
// //     if (this.imageId) {
// //       this.loadImageDetails(this.imageId);
// //     }
// //   }

// //   loadImageDetails(id: string) {
// //     this.uploadService.getFormData().subscribe((data: any) => {
// //       const formDataArray = this.transformData(data);
// //       this.imageDetails = formDataArray.find(item => item.id === id) || {};
// //     });
// //   }

// //   private transformData(data: any): any[] {
// //     const formDataArray: any[] = [];
// //     if (data && typeof data === 'object') {
// //       for (const key in data) {
// //         if (data.hasOwnProperty(key)) {
// //           formDataArray.push({ id: key, ...data[key] });
// //         }
// //       }
// //     }
// //     return formDataArray;
// //   }

// //   getSanitizedVideoUrl(url: string): SafeResourceUrl {
// //     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
// //   }
// // }

// // import { Component, OnInit } from '@angular/core';
// // import { ActivatedRoute } from '@angular/router';
// // import { UploadService } from '../services/uploadservice';
// // import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// // @Component({
// //   selector: 'app-content-details',
// //   templateUrl: './content-details.component.html',
// //   styleUrls: ['./content-details.component.css']
// // })
// // export class ContentDetailComponent implements OnInit {
// //   imageId: string | null = null;
// //   imageDetails: any = {};
// //   sanitizedYouTubeTrailerUrl: SafeResourceUrl | null = null;

// //   constructor(
// //     private route: ActivatedRoute,
// //     private uploadService: UploadService,
// //     private sanitizer: DomSanitizer
// //   ) {}

// //   ngOnInit(): void {
// //     this.imageId = this.route.snapshot.paramMap.get('id');
// //     if (this.imageId) {
// //       this.loadImageDetails(this.imageId);
// //     }
// //   }

// //   loadImageDetails(id: string) {
// //     this.uploadService.getFormData().subscribe((data: any) => {
// //       const formDataArray = this.transformData(data);
// //       this.imageDetails = formDataArray.find(item => item.id === id) || {};
// //       if (this.imageDetails.youtubeTrailerUrl) {
// //         this.sanitizedYouTubeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageDetails.youtubeTrailerUrl);
// //       }
// //     });
// //   }

// //   private transformData(data: any): any[] {
// //     const formDataArray: any[] = [];
// //     if (data && typeof data === 'object') {
// //       for (const key in data) {
// //         if (data.hasOwnProperty(key)) {
// //           formDataArray.push({ id: key, ...data[key] });
// //         }
// //       }
// //     }
// //     return formDataArray;
// //   }

// //   getSanitizedVideoUrl(): SafeResourceUrl | null {
// //     return this.sanitizedYouTubeTrailerUrl;
// //   }
// // }


// // import { Component, OnInit } from '@angular/core';
// // import { ActivatedRoute } from '@angular/router';
// // import { UploadService } from '../services/uploadservice';
// // import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// // @Component({
// //   selector: 'app-content-details',
// //   templateUrl: './content-details.component.html',
// //   styleUrls: ['./content-details.component.css']
// // })
// // export class ContentDetailComponent implements OnInit {
// //   imageId: string | null = null;
// //   imageDetails: any = {};
// //   sanitizedYouTubeTrailerUrl: SafeResourceUrl | null = null;

// //   constructor(
// //     private route: ActivatedRoute,
// //     private uploadService: UploadService,
// //     private sanitizer: DomSanitizer
// //   ) {}

// //   ngOnInit(): void {
// //     this.imageId = this.route.snapshot.paramMap.get('id');
// //     if (this.imageId) {
// //       this.loadImageDetails(this.imageId);
// //     }
// //   }

// //   loadImageDetails(id: string) {
// //     this.uploadService.getFormData().subscribe((data: any) => {
// //       const formDataArray = this.transformData(data);
// //       this.imageDetails = formDataArray.find(item => item.id === id) || {};
// //       if (this.imageDetails.youtubeTrailerUrl) {
// //         this.sanitizedYouTubeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.imageDetails.youtubeTrailerUrl);
// //       } else {
// //         this.sanitizedYouTubeTrailerUrl = null; // Handle case where youtubeTrailerUrl is missing
// //       }
// //     });
// //   }

// //   private transformData(data: any): any[] {
// //     const formDataArray: any[] = [];
// //     if (data && typeof data === 'object') {
// //       for (const key in data) {
// //         if (data.hasOwnProperty(key)) {
// //           formDataArray.push({ id: key, ...data[key] });
// //         }
// //       }
// //     }
// //     return formDataArray;
// //   }

// //   getSanitizedVideoUrl(): SafeResourceUrl | null {
// //     return this.sanitizedYouTubeTrailerUrl;
// //   }
// // }


// // import { Component, OnInit } from '@angular/core';
// // import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// // import { ActivatedRoute } from '@angular/router';
// // import { UploadService } from '../services/uploadservice';

// // @Component({
// //   selector: 'app-content-detail',
// //   templateUrl: './content-details.component.html',
// //   styleUrls: ['./content-details.component.css']
// // })
// // export class ContentDetailComponent implements OnInit {
// //   imageDetails: any;
// //   sanitizedYouTubeTrailerUrl: SafeResourceUrl | null = null;

// //   constructor(
// //     private uploadService: UploadService,
// //     private route: ActivatedRoute,
// //     private sanitizer: DomSanitizer
// //   ) {}

// //   ngOnInit(): void {
// //     const id = this.route.snapshot.paramMap.get('id');
// //     if (id) {
// //       this.uploadService.getFormData().subscribe(
// //         data => {
// //           this.imageDetails = data[id] || {};
// //           this.sanitizeYouTubeTrailerUrl();
// //         },
// //         error => {
// //           console.error('Error fetching data', error);
// //           this.imageDetails = {};
// //           this.sanitizedYouTubeTrailerUrl = null;
// //         }
// //       );
// //     } else {
// //       console.error('ID is null or undefined');
// //       this.imageDetails = {};
// //       this.sanitizedYouTubeTrailerUrl = null;
// //     }
// //   }

// //   sanitizeYouTubeTrailerUrl(): void {
// //     const url = this.imageDetails?.youtubeTrailerUrl || '';
// //     this.sanitizedYouTubeTrailerUrl = url
// //       ? this.sanitizer.bypassSecurityTrustResourceUrl(url)
// //       : null;
// //   }

// //   onImageError(): void {
// //     console.error('Image failed to load');
// //   }
// // }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from '../services/uploadservice';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailComponent implements OnInit {
  imageDetails: any = {};
  sanitizedYouTubeTrailerUrl: SafeResourceUrl | null = null;
  isLoading: boolean = true;

  constructor(
    private uploadService: UploadService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.uploadService.getFormData(id).subscribe({
        next: (data) => {
          this.imageDetails = data[id] || {};
          this.sanitizeYouTubeTrailerUrl();
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching data', err);
          this.imageDetails = {};
          this.sanitizedYouTubeTrailerUrl = null;
          this.isLoading = false;
        }
      });
    } else {
      this.imageDetails = {};
      this.sanitizedYouTubeTrailerUrl = null;
      this.isLoading = false;
    }
  }

  sanitizeYouTubeTrailerUrl(): void {
    const url = this.imageDetails.youtubeTrailerUrl;
    if (url && url.startsWith('https://www.youtube.com/embed/')) {
      this.sanitizedYouTubeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      this.sanitizedYouTubeTrailerUrl = null;
    }
  }

  onImageError(): void {
    console.error('Image failed to load');
  }
}
