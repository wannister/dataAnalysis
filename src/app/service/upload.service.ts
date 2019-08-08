import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UploadService {
  constructor(private httpClient: HttpClient) {}

  postFile(fileToUpload: File): Observable<object> {
    const endpoint = "http://localhost:3000/data";
    console.log(fileToUpload);

    //let testdata = { test: 123 };
    return this.httpClient
      .post(endpoint, fileToUpload, {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
      })
      .pipe(
        catchError(error => {
          return error;
        })
      );
  }
}
