import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { UploadService } from "../service/upload.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  chart = [];
  chartData: Array<object>;
  datasetAttributes: Array<string>;
  selected: string;
  chartXLabel: Array<string>;

  constructor(private uploadService: UploadService) {}

  ngOnInit() {
    this.uploadService.getData().subscribe(
      successData => {
        this.chartData = Object.values(
          successData[Object.keys(successData)[0]]
        );

        this.datasetAttributes = Object.getOwnPropertyNames(this.chartData[0]);
        console.log(this.datasetAttributes);
      },
      error => {
        console.log(error);
      }
    );
  }

  testClick() {
    console.log(this.selected);

    this.chart = new Chart("lineChart", {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "#3cba9f",
            fill: false
          },
          {
            data: [1, 2, 3, 4, 5, 6],
            borderColor: "#ffcc00",
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
  }
}
