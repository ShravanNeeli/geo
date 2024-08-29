
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { AngularFireStorage } from '@angular/fire/compat/storage';
// import { finalize } from 'rxjs/operators';
// import { UploadService } from '../services/uploadservice';

// @Component({
//   selector: 'app-upload',
//   templateUrl: './upload.component.html',
//   styleUrls: ['./upload.component.css']
// })
// export class UploadComponent {
//   selectedFile: File | null = null;
//   uploadPercent: number | null = null;
//   downloadURL: string | null = null;
//   // formData: any[] = []; // 


//   // storage: An instance of AngularFireStorage used for interacting with Firebase Storage.
//   constructor(private uploadService: UploadService, private storage: AngularFireStorage) {}


// //    Triggered when the user selects a file.
// // Sets the selectedFile property to the file chosen by the user.
//   onFileChange(event: any) {
//     this.selectedFile = event.target.files[0] as File;
//   }

//   onSubmit(form: NgForm) {
//     if (form.valid && this.selectedFile) {
//    //File Path: Creates a path for the file in Firebase Storage (images/filename).
//    //fileRef: Creates a reference to this path. This reference allows you to interact with the file after it has been uploaded.
//   // Upload Task: Initiates the upload task using this.storage.upload(filePath, this.selectedFile). 
//       const filePath = `images/${this.selectedFile.name}`;
//       const fileRef = this.storage.ref(filePath);
//       const task = this.storage.upload(filePath, this.selectedFile);
//   // percentageChanges(): Observes the upload progress percentage and updates uploadPercent.
//       task.percentageChanges().subscribe(percent => {
//         this.uploadPercent = percent || 0;
//       });
//       //snapshotChanges(): Observes the upload task’s progress and state changes.
//         //finalize(): Executes code when the upload completes (successfully or with an error).
//         // It fetches the download URL of the uploaded file.
//       // getDownloadURL(): Retrieves the URL of the uploaded file.
//        //formData: Creates an object with form values and the file URL. 
//       task.snapshotChanges().pipe(
//         finalize(() => {
//           fileRef.getDownloadURL().subscribe(url => {
//             this.downloadURL = url;
//             const formData = {
//               name: form.value.name,
//               category: form.value.category,
//               category2: form.value.category2,
//               imageUrl: this.downloadURL
//             };

//             this.uploadService.uploadFormData(formData).subscribe() ;
//           });
//         })
//       ).subscribe();
//     }
//   }

 
// }

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { UploadService } from '../services/uploadservice';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadPercent: number | null = null;
  downloadURL: string | null = null;

  constructor(private uploadService: UploadService, private storage: AngularFireStorage) {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.selectedFile) {
      const filePath = `images/${this.selectedFile.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedFile);

      task.percentageChanges().subscribe(percent => {
        this.uploadPercent = percent || 0;
      });

      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            this.downloadURL = url;

            // Format and include the YouTube trailer URL
            const formattedYouTubeUrl = this.formatYouTubeUrl(form.value.youtubeTrailer);

            const formData = {
              name: form.value.name,
              category: form.value.category,
              category2: form.value.category2,
              imageUrl: this.downloadURL,
              youtubeTrailerUrl: formattedYouTubeUrl // Ensure URL is correctly formatted
            };

            console.log('Form Data to be submitted:', formData); // Debugging output

            this.uploadService.uploadFormData(formData).subscribe(
              response => {
                console.log('Upload successful', response);
              },
              error => {
                console.error('Upload failed', error);
              }
            );
          });
        })
      ).subscribe();
    }
  }

  formatYouTubeUrl(url: string): string {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    return ''; // Return empty if URL is not valid
  }
}
