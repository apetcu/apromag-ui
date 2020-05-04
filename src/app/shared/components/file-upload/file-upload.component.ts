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
  currentImages: Array<Image>;
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
    if (value) {
      this.propagateChange(value);
    }
  }

  onRemoveImage(index: number): void {
    this.files.splice(index, 1);
    this.propagateChange(this.files);
  }

  onDeleteCurrentImage(id: number, index: number): void {
    this.onDeleteImage.next(id);
    this.currentImages.splice(index, 1);
  }
}
