import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UploadComponent } from "./upload/upload.component";
import { DataComponent } from "./data/data.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "upload",
    component: UploadComponent
  },
  {
    path: "data",
    component: DataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
