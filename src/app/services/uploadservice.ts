



// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UploadService {
//   private baseUrl = 'https://angulargeo-47916-default-rtdb.firebaseio.com/data/formEntries.json';

//   constructor(private http: HttpClient) {}

//   uploadFormData(data: any): Observable<any> {
//     return this.http.post(this.baseUrl, data);
//   }

//   getFormData(searchTerm: string = '', category: string = 'all', start: number = 0, limit: number = 200): Observable<any> {
//     let params = new HttpParams();
//     if (searchTerm) {
//       params = params.set('searchTerm', searchTerm);
//     }
//     if (category && category !== 'all') {
//       params = params.set('category', category);
//     }
//     params = params.set('start', start.toString());
//     params = params.set('limit', limit.toString());

//     return this.http.get(this.baseUrl, { params });
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private baseUrl = 'https://angulargeo-47916-default-rtdb.firebaseio.com/data/formEntries.json';

  constructor(private http: HttpClient) {}

  uploadFormData(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  getFormData(searchTerm: string = '', category: string = 'all', start: number = 0, limit: number = 200): Observable<any> {
    let params = new HttpParams();
    if (searchTerm) {
      params = params.set('searchTerm', searchTerm);
    }
    if (category && category !== 'all') {
      params = params.set('category', category);
    }
    params = params.set('start', start.toString());
    params = params.set('limit', limit.toString());

    return this.http.get(this.baseUrl, { params });
  }
}
