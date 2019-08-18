import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

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
import { UploadComponent } from "./upload/upload.component";
import { HttpClientModule } from "@angular/common/http";
import { DataComponent } from "./data/data.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
      declarations: [
        AppComponent,
        UploadComponent,
        DataComponent,
        DashboardComponent
      ]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
