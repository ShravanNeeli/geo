// // import { Injectable } from '@angular/core';
// // import { BehaviorSubject } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class SearchService {
// //   private searchTermSubject = new BehaviorSubject<string>('');
// //   searchTerm$ = this.searchTermSubject.asObservable();

// //   updateSearchTerm(term: string) {
// //     this.searchTermSubject.next(term);
// //   }
// // }


// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchService {
//   private searchTermSubject = new BehaviorSubject<string>('');
//   searchTerm$ = this.searchTermSubject.asObservable();

//   updateSearchTerm(term: string) {
//     this.searchTermSubject.next(term);
//   }

//   getCurrentSearchTerm(): string {
//     return this.searchTermSubject.getValue();
//   }
// }
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();

  updateSearchTerm(term: string):void {
    console.log('Updating search term:', term); // Debug log
    this.searchTermSubject.next(term);
  }

  getCurrentSearchTerm(): string {
    return this.searchTermSubject.getValue();
  }
}
