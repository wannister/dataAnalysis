import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UploadService {

  constructor(private httpClient: HttpClient) {}

  postFile(fileToUpload: any): Observable<object> {
    const endpoint = "https://angularfirebase-a19eb.firebaseio.com/data.json";

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

  deleteData(): Observable<object> {
    const endpoint = "https://angularfirebase-a19eb.firebaseio.com/data.json";

    return this.httpClient
      .delete(endpoint)
      .pipe(
        catchError(error => {
          return error;
        })
      );
  }

  getData(): Observable<object> {
    const endpoint = "https://angularfirebase-a19eb.firebaseio.com/data.json";

    return this.httpClient
      .get(endpoint)
      .pipe(
        catchError(error => {
          return error;
        })
      );
  }
}
