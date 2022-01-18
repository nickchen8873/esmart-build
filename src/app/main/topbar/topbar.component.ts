import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KernelTopService } from '../../shared/service/kernel-top.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor(private router: Router, public _top: KernelTopService) {}

  today: Date;
  // 查詢交易
  selectedTransaction: any;
  transaction: any[];
  filteredTransaction: any[];

  ngOnInit(): void {
    this.today = new Date();
    setInterval(() => {
      this.today = new Date();
    }, 1000);

    this.transaction = [
      { name: '140 基本資料開戶', value: 'ST140T' },
      { name: '160 基本資料查詢', value: 'ST160T' },
      { name: '146 基本資料變更', value: 'ST146T' },
      { name: '155 解約/未簽約帳戶註銷', value: 'ST155T' },
      { name: '156 保管機構往來登記', value: 'ST156T' },
      { name: '157 保管機構往來登記變更', value: 'ST157T' },
      { name: '179 信託/全委/英文戶名資料維護', value: 'ST179T' },
      // { name: 'G99F 保管機構買賣帳號查詢', value: 'STG99FT' }, // 不開放user使用
      { name: '033 流水記錄查詢', value: 'ST033' },
      { name: '首頁', value: 'TdccTodolist' },
      { name: 'FOA開戶作業', value: 'FLA001' },
      { name: 'FOR更換保管機構作業', value: 'FLA002' },
      { name: 'FOM通知券商基本資料修改', value: 'FLA003' },
      { name: 'FOC註銷作業', value: 'FLA004' },
      { name: '作業清單查詢', value: 'casesearching' },
      { name: '憑證使用紀錄查詢', value: 'certlog' },
      { name: '設定快速交易', value: 'Cr061' },
    ];
  }

  logoff() {}

  enterTx() {
    // this._top.caseSearchingList = [];
    // this._top.tempRouter = '';
    // this._top.flowcontrollerCaseNo = '';
    if (this.selectedTransaction.value.startsWith('FLA')) {
      // this._top.appMain.addTxItem(0, this.selectedTransaction.value.trim());
    } else if (this.selectedTransaction.value.startsWith('ST')) {
      if (this.selectedTransaction.value.endsWith('T')) {
        // this._top.appMain.addTxItem(0, this.selectedTransaction.value.trim());
      } else {
        this.router.navigate(['/']);
        this.router.navigate([this.selectedTransaction.value.trim()]);
      }
    } else {
      this.router.navigate(['/']);
      this.router.navigate([this.selectedTransaction.value.trim()]);
    }
    // this._top.appTopbar.searchbox.inputFieldValue = '';
    // this._top.appTopbar.searchbox.writeValue('');
  }

  filterTransaction(event) {
    // in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered = [];
    let query = event.query;

    for (let i = 0; i < this.transaction.length; i++) {
      let trans = this.transaction[i];
      if (trans.name.toLowerCase().search(query.toLowerCase()) != -1) {
        filtered.push(trans);
      }
    }

    this.filteredTransaction = filtered;
  }
}
