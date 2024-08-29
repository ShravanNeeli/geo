// // import { Component } from '@angular/core';
// // import { Router } from '@angular/router';
// // import { SearchService } from '../services/search.service';

// // @Component({
// //   selector: 'app-header',
// //   templateUrl: './header.component.html',
// //   styleUrls: ['./header.component.css']
// // })
// // export class HeaderComponent {
// //   isMenuOpen=true;
// //   toggleMenu(){
// //     this.isMenuOpen=!this.isMenuOpen
// //   }
 
// //   openSettings(){this.router.navigate(['/upload'])}
// //   viewProfile(){}


// //  searchTerm: string = '';



// //  handleSearch() {
// //   this.searchService.updateSearchTerm(this.searchTerm);
// // }

// // constructor(private router: Router, private searchService: SearchService) {}
// // }
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { SearchService } from '../services/search.service';
// import { AuthService } from '../services/auth.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {
//   isMenuOpen = true;
//   searchTerm: string = '';

//   constructor(private router: Router,
//      private searchService: SearchService,
//      private authserive:AuthService
//     ) {}

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//   }

//   openSettings() {
//     this.router.navigate(['/upload']);
//   }

//   viewProfile() {
//   this.authserive.logOut()
//   }

//   handleSearch() {
//     this.searchService.updateSearchTerm(this.searchTerm);
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = true;
  searchTerm: string = '';

  constructor(private router: Router,
              private searchService: SearchService,
              private authService: AuthService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  upload() {
    this.router.navigate(['/upload']);
  }

  viewProfile() {
    this.authService.logOut();
  }

  handleSearch() {
    
    this.searchService.updateSearchTerm(this.searchTerm); // Trigger search
  }
}
