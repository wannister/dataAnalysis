import { Component, OnInit } from "@angular/core";
import { UploadService } from "../service/upload.service";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"]
})
export class UploadComponent implements OnInit {
  fileToUpload: File;
  reader = new FileReader();

  constructor(private uploadService: UploadService) {}

  ngOnInit() {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.reader.readAsText(this.fileToUpload);
  }

  uploadFileToActivity() {
    this.uploadService.deleteData().subscribe(
      data => {
        console.log(data); // do something, if upload success
      },
      error => {
        console.log(error);
      }
    );

    this.uploadService.postFile(this.reader.result).subscribe(
      data => {
        console.log(data); // do something, if upload success
      },
      error => {
        console.log(error);
      }
    );
  }
}
