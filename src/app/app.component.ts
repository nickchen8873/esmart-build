import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private router: Router) {}
  menuClick: boolean;
  resetMenu: boolean;

  title = 'esmart';
  gFullScreen = false;
  displaySubMenu = true;
  displayTdccTodolistSub: boolean;
  displayTxnListSub: boolean;
  displayFlowListSub: boolean;
  displaySettingSub: boolean;
  displayBbsSub: boolean;

  txnModel = [
    {
      label: '1.客戶資料異動作業',
      icon: '',
      expanded: true,
      items: [
        {
          label: '140 開戶基本資料建檔',
          command: (event) => {
            this.router.navigate(['st140t']);
          },
        },
        // {
        //   label: '146 客戶基本資料變更',
        //   command: (event) => {
        //     this.addTxItem(0, event.item.label);
        //   },
        // },
        // {
        //   label: '155 解約/未簽約帳戶註銷',
        //   command: (event) => {
        //     this.addTxItem(0, event.item.label);
        //   },
        // },
        // {
        //   label: '156 保管機構往來登記',
        //   command: (event) => {
        //     this.addTxItem(0, event.item.label);
        //   },
        // },
        // {
        //   label: '157 保管機構往來登記變更',
        //   command: (event) => {
        //     this.addTxItem(0, event.item.label);
        //   },
        // },
        // {
        //   label: '160 基本資料查詢',
        //   command: (event) => {
        //     this.addTxItem(0, event.item.label);
        //   },
        // },
        // {
        //   label: '179 信託/全委/英文戶名資料維護',
        //   command: (event) => {
        //     this.addTxItem(0, event.item.label);
        //   },
        // },
      ],
    },
  ];

  onMenuClick($event) {
    this.menuClick = true;
    this.resetMenu = false;
  }

  hideSubMenu() {
    this.displaySubMenu = false;
  }

  addTxItem(placeholder: number, txcode: string) {}

  showSubMenu(subList) {
    this.displaySubMenu = true;
    this.displayTdccTodolistSub = false;
    this.displayTxnListSub = false;
    this.displayFlowListSub = false;
    this.displaySettingSub = false;
    this.displayBbsSub = false;
    switch (subList) {
      case 'TdccTodolist':
        this.displayTdccTodolistSub = true;

        return;
      case 'tradelist':
        this.displayTxnListSub = true;

        return;
      case 'worklist':
        this.displayFlowListSub = true;

        return;
      case 'setting':
        this.displaySettingSub = true;
        return;
      case 'bbs':
        this.displayBbsSub = true;
        return;
      default:
        this.hideSubMenu();
        return;
    }
  }
}
