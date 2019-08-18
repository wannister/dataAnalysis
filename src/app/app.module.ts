import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule
} from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UploadComponent } from "./upload/upload.component";
import { HttpClientModule } from "@angular/common/http";
import { DataComponent } from "./data/data.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DataComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
