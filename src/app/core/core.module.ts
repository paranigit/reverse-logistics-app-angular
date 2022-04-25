import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterCategoryPipe } from './pipes/filter-category.pipe';



@NgModule({
  declarations: [
    FilterCategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterCategoryPipe
  ]
})
export class CoreModule { }
