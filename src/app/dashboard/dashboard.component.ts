import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { UploadService } from "../service/upload.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  chart = new Chart("lineChart");
  chartData: Array<object>;
  datasetAttributes: Array<string>;
  selectedXaxis: string;
  selectedYaxis: string;
  selectedGroup: string;
  firstAttribute: string;
  firstAttributeLimitBy: string;
  firstAttributeLimits: Array<string>;
  secondAttribute: string;
  secondAttributeLimitBy: string;
  secondAttributeLimits: Array<string>;
  thirdAttribute: string;
  thirdAttributeLimitBy: string;
  thirdAttributeLimits: Array<string>;
  // console.log(this.firstAttributeLimits);

  chartXLabel: Array<string>;

  constructor(private uploadService: UploadService) {}

  ngOnInit() {
    this.uploadService.getData().subscribe(
      successData => {
        this.chartData = Object.values(successData[Object.keys(successData)[0]]);

        this.datasetAttributes = Object.getOwnPropertyNames(this.chartData[0]);
        console.log(this.chartData);
      },
      error => {
        console.log(error);
      }
    );
  }

  generateGraph() {
    this.chart.destroy();
    this.chart = new Chart("lineChart", { type: "line" });
    let xAxis = this.getUniqueFromArray(this.getValueByAttribute(this.selectedXaxis));
    //let yAxis = this.getUniqueFromArray(this.getValueByAttribute(this.selectedYaxis));
    let groupData = this.getUniqueFromArray(this.getValueByAttribute(this.selectedGroup));
    let initialRGB = 255;
    groupData.map(item => {
      let filterEnergytype = this.chartData.filter(
        type =>
          type[this.firstAttribute].includes(this.firstAttributeLimitBy) &&
          type[this.secondAttribute].includes(this.secondAttributeLimitBy) &&
          type[this.thirdAttribute].includes(this.thirdAttributeLimitBy) &&
          type[this.selectedGroup].includes(item)
      );
      let initialBorderColor = Math.floor(Math.random() * 10000000);
      this.chart.data.datasets.push({
        data: filterEnergytype.map(value => {
          return value[this.selectedYaxis];
        }),
        borderColor: `rgb(${initialRGB - 20}, ${initialRGB - 20}, ${initialRGB - 20})`,
        backgroundColor: `rgb(${initialRGB - 20}, ${initialRGB - 20}, ${initialRGB - 20})`,
        fill: false,
        label: item
      });
      initialRGB -= 20;
    });
    this.chart.data.labels = xAxis;
    this.chart.update();
  }

  getValueByAttribute(attr: string) {
    return this.chartData.map(item => item[attr]);
  }

  getUniqueFromArray(array: Array<any>) {
    return Array.from(new Set(array));
  }

  getFirstAttributeLimit(selectedValue) {
    this.firstAttributeLimits = this.getUniqueFromArray(this.getValueByAttribute(selectedValue));
    console.log(this.firstAttributeLimits);
  }

  getSecondAttributeLimit(selectedValue) {
    this.secondAttributeLimits = this.getUniqueFromArray(this.getValueByAttribute(selectedValue));
    console.log(this.secondAttributeLimits);
  }

  getThirdAttributeLimit(selectedValue) {
    this.thirdAttributeLimits = this.getUniqueFromArray(this.getValueByAttribute(selectedValue));
    console.log(this.secondAttributeLimits);
  }
}
