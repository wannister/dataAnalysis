import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DataComponent } from "./data.component";
import { MatSelectModule } from "@angular/material/select";
import {
  MatTableModule,
  MatButtonModule,
  MatPaginatorModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("DataComponent", () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSelectModule,
        MatTableModule,
        MatButtonModule,
        MatPaginatorModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [DataComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should return unique elements of array", () => {

    expect(component.getUniqueFromArray([1, 2, 3, 1, 4, 5, 6, 7])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]);
  });
});
