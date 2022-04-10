import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MetadataService } from'./service/MetadataService';


import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {BodyComponent} from './components/body/body';
import {DatepickerComponent} from './components/datepicker/datepicker';
import {ServiceComponent} from './components/serviceComponent/serviceComponent';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent, NavComponent, BodyComponent, DatepickerComponent, ServiceComponent, MenuComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, MatNativeDateModule, MatRippleModule, MatGridListModule,
    BrowserAnimationsModule, HttpClientModule,
    MatSliderModule,MatListModule,MatInputModule, MatPaginatorModule, MatTableModule,MatSortModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule, MatDatepickerModule
  ],
  providers: [MetadataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
