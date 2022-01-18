import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { KernelTopService } from '../../shared/service/kernel-top.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    public app: AppComponent,
    private router: Router,
    public _top: KernelTopService
  ) {}

  gHomeActive = true;
  gTxnActive = false;
  gFlowActive = false;
  gSettingActive = false;
  gBbsActive = false;
  gGroupActive = false;
  gCaseSActive = false;
  gTradeSActive = false;
  gCerlogActive = false;
  gStationActive = false;

  ngOnInit(): void {}

  showSubMenu(event) {
    // TdccTodolist;
    if (event == 'TdccTodolist') {
      this.router
        .navigate(['/todolist'], {
          queryParams: { refresh: new Date().getTime() },
        })
        .then((x) => {
          const tmpurl = location.href;
          const hurl = tmpurl.substring(0, tmpurl.lastIndexOf('/')) + '/';
          history.pushState(null, null, hurl);
        });
    }

    // this._top.caseSearchingList = [];
    // this._top.tempRouter = '';
    this.gHomeActive = false;
    this.gTxnActive = false;
    this.gFlowActive = false;
    this.gSettingActive = false;
    this.gBbsActive = false;
    this.gGroupActive = false;
    this.gCaseSActive = false;
    this.gTradeSActive = false;
    this.gCerlogActive = false;
    this.gStationActive = false;
    switch (event) {
      case 'tradelist':
        this.gTxnActive = true;

        break;
      case 'worklist':
        this.gFlowActive = true;
        break;
      case 'setting':
        this.gSettingActive = true;
        break;
      case 'bbs':
        this.gBbsActive = true;
        break;
      case 'group':
        this.gGroupActive = true;
        break;
      case 'casesearching':
        this.gCaseSActive = true;
        break;
      case 'ST033':
        this.gTradeSActive = true;
        break;
      case 'cerlog':
        this.gCerlogActive = true;
        break;
      case 'station':
        this.gStationActive = true;
        break;

      default:
        this.gHomeActive = true;

        break;
    }
    this.app.showSubMenu(event);
  }

  hideSubMenu() {
    this.app.hideSubMenu();
  }

  menuRouter(route) {
    this.hideSubMenu();
    this.router
      .navigate(['/' + route], {
        queryParams: { refresh: new Date().getTime() },
      })
      .then((x) => {
        const tmpurl = location.href;
        const hurl = tmpurl.substring(0, tmpurl.lastIndexOf('/')) + '/';
        history.pushState(null, null, hurl);
      });
  }
}
