import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class KernelTopService {
  // private _top: Map<Object, Object>;
  KINBR: string;
  TLRNO: string;
  KINWS: string;

  appJSON: appJson;
  constructor(_http: HttpClient) {
    // this._top = new Map<Object, Object>();
    // _http.get('assets/ubf/dat/menu.json').subscribe((data) => {
    _http.get('assets/sysJson/app.json').subscribe((data: appJson) => {
      this.appJSON = data;
      console.log(this.appJSON);
    });
  }
}
export interface appJson {
  TLR_LEVEL: string;
  ACCTTYPE: string;
  VLDACTYPE: string;
  YNOPTION: string;
  NATION: string;
  AREA: string;
}
