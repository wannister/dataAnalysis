import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  MatTableModule,
  MatPaginator,
  MatTableDataSource
} from "@angular/material";

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styleUrls: ["./data.component.css"]
})
export class DataComponent implements OnInit {
  operationalData = new MatTableDataSource<any>();
  displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const endpoint = "http://localhost:3000/data";
    this.httpClient.get(endpoint).subscribe(
      successData => {
        this.operationalData.data = Object.values(successData);
        this.operationalData.paginator = this.paginator;
        this.displayedColumns = Object.getOwnPropertyNames(
          this.operationalData.data[0]
        );
      },
      error => {
        console.log(error);
      }
    );
    this.httpClient.get(endpoint + "?REF_DATE=2011").subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit(): void {}
}
