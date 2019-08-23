import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class UploadService {
  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}

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

    return this.httpClient.delete(endpoint).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  getData(): Observable<object> {
    const endpoint = "https://angularfirebase-a19eb.firebaseio.com/data.json";

    return this.httpClient.get(endpoint).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
      // here specify the position
      verticalPosition: "top"
    });
  }
}
