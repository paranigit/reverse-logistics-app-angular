import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CustomMaterialsModule } from '../custom-materials/custom-materials.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { SiteHeaderComponent } from './layouts/site-header/site-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RodPredictorComponent } from './layouts/rod-predictor/rod-predictor.component';
import { FilterCategoryPipe } from '../core/pipes/filter-category.pipe';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    PageHomeComponent,
    SiteHeaderComponent,
    RodPredictorComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    HomeRoutingModule,
    CustomMaterialsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ]
})
export class HomeModule { }
