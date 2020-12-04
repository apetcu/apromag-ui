import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FileUploadComponent)
    }
  ]
})
export class FileUploadComponent implements OnInit, ControlValueAccessor {
  @Input()
  currentImages: Array<Image> = [];

  @Input()
  maxFiles: number = 5;

  @Output()
  onDeleteImage: EventEmitter<number> = new EventEmitter<number>(null);

  files: File[] = [];
  sendableFormData: FormData; //populated via ngfFormData directive
  dragFiles: any;
  validComboDrag: any;
  lastInvalids: any;
  fileDropDisabled: any;
  maxSize: any;
  propagateChange: (_: any) => {};
  onTouched: (_: any) => {};

  constructor() {}

  ngOnInit(): void {}

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(value: any): void {
    const allowedImagesLength = this.maxFiles - this.currentImages.length;
    if (value) {
      this.files = this.files.slice(0, allowedImagesLength);
      this.propagateChange(this.files);
    } else {
      this.files = [];
    }
  }

  onRemoveImage($event: Event, index: number): void {
    $event.stopPropagation();

    this.files.splice(index, 1);
    this.propagateChange(this.files);
  }

  onDeleteCurrentImage(id: number, index: number): void {
    this.onDeleteImage.next(id);
    this.currentImages.splice(index, 1);
  }
}
