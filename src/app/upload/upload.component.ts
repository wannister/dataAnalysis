import { Component, OnInit } from "@angular/core";
import { UploadService } from '../service/upload.service';

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.css"]
})
export class UploadComponent implements OnInit {
  fileToUpload: File = null;

  constructor(private uploadService: UploadService) {}

  ngOnInit() {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.uploadService.postFile(this.fileToUpload).subscribe(data => {
      console.log("success");// do something, if upload success
      }, error => {
        console.log(error);
      });
  }
}
