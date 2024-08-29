import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { of, throwError } from 'rxjs';
import { UploadService } from '../services/uploadservice';
import { UploadComponent } from './upload.component';

// Mock service and storage
class MockUploadService {
  uploadFormData(data: any) {
    return of({ success: true });
  }
}

class MockAngularFireStorage {
  ref() {
    return this;
  }
  upload() {
    return {
      percentageChanges: () => of(50), // Observable simulating upload progress
      snapshotChanges: () => of({}), // Observable simulating snapshot changes
    };
  }
  getDownloadURL() {
    return of('https://example.com/downloadURL'); // Observable simulating download URL
  }
}

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;
  let uploadService: UploadService;
  let storage: AngularFireStorage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [UploadComponent],
      providers: [
        { provide: UploadService, useClass: MockUploadService },
        { provide: AngularFireStorage, useClass: MockAngularFireStorage }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    uploadService = TestBed.inject(UploadService);
    storage = TestBed.inject(AngularFireStorage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onFileChange and set selectedFile', () => {
    const file = new File([''], 'filename.png');
    const event = { target: { files: [file] } };
    component.onFileChange(event);
    expect(component.selectedFile).toBe(file);
  });

  it('should format YouTube URL correctly', () => {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const formattedUrl = component.formatYouTubeUrl(url);
    expect(formattedUrl).toBe('https://www.youtube.com/embed/dQw4w9WgXcQ');
  });

  it('should submit form data successfully', () => {
    const form = {
      valid: true,
      value: {
        name: 'Test Name',
        category: 'Test Category',
        category2: 'Test Category 2',
        youtubeTrailer: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      }
    } as NgForm;

    spyOn(uploadService, 'uploadFormData').and.callThrough();
    spyOn(component, 'formatYouTubeUrl').and.callThrough();

    component.onFileChange({ target: { files: [new File([''], 'test.png')] } });
    component.onSubmit(form);

    // Ensure that the uploadFormData was called
    expect(uploadService.uploadFormData).toHaveBeenCalled();
    expect(component.formatYouTubeUrl).toHaveBeenCalledWith('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

    // Check if component properties are set correctly
    expect(component.uploadPercent).toBe(50);
    expect(component.downloadURL).toBe('https://example.com/downloadURL');
  });

  it('should handle YouTube URL formatting when URL is invalid', () => {
    const invalidUrl = 'invalid-url';
    const formattedUrl = component.formatYouTubeUrl(invalidUrl);
    expect(formattedUrl).toBe('');
  });
});
