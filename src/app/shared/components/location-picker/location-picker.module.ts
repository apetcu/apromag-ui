import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationPickerComponent } from './location-picker.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LocationPickerComponent],
  exports: [LocationPickerComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class LocationPicker {}
