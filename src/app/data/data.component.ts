import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { UploadService } from "../service/upload.service";

import _ from "lodash";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"]
})
export class DataComponent implements OnInit {
  operationalData = new MatTableDataSource<any>();
  displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private uploadService: UploadService) {}

  ngOnInit() {
    this.uploadService.getData().subscribe(
      successData => {
        this.operationalData.data = Object.values(successData[Object.keys(successData)[0]]);
        this.operationalData.paginator = this.paginator;
        this.displayedColumns = Object.getOwnPropertyNames(this.operationalData.data[0]);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit(): void {}
}
