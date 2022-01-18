import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { KernelTopService } from '../../shared/service/kernel-top.service';
import { KernelTopService } from 'src/app/shared/service/kernel-top.service';

@Component({
  selector: 'app-st140t',
  templateUrl: './st140t.component.html',
  styleUrls: ['./st140t.component.scss'],
})
export class St140tComponent implements OnInit {
  @Output() showFileArea: EventEmitter<any> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    public transport: HttpClient,
    private router: Router,
    public _top: KernelTopService
  ) {}

  formName = new FormControl('');
  invalidForm!: FormGroup;
  example = { name: '', phone: '', password: '' };
  password: String = '';
  flowcontrollerLock: Boolean = false;
  gOutputContentShow: Boolean = false;
  gShowMsg: Boolean = false;
  gInputContentShow: Boolean = true;

  ACTYPE: option[] = [{ name: '30' }, { name: '31' }];
  ADDR_AREA: AREA[];
  selectedCity: AREA;
  // 欄位資料變數
  ST140T = {
    _ACNTNO: '', // 1.保管機構帳號
    _ACNTNA: '', // 2.集保戶名
    _IDNO: '', // 3.身分證字號
    _BUSNO: '', // 4.營利事業編號
    _ACTYPE: '', // 5.戶別(txpdropdown)
    _ACTYPEX: '', // 5.戶別(txpInputText)
    _BORNDT: '', // 6.出生日期
    _TELNO1: '', // 7.電話號碼1
    _TELNO2: '', // 8.電話號碼2
    _RESIADRH: '', // 9.戶籍地址縣市
    _RESIADRB: '', // 9.戶籍地址
    _MAILADRH: '', // 10.通訊地址縣市
    _MAILADRB: '', // 10.通訊地址
    _MZIP: '', // 11.郵遞區號
    _ATRNY: '', // 12.法定代理人
    _BANKCD: '', // 13.證金代號
    _QPSWD: '', // 14.查詢密碼
    _DBRNO: '', // 15.款項帳號(銀行代號)
    _DACTNO: '', // 15.款項帳號
    _DPICD: '', // 16.投信投顧代號
    _MOBILE: '', // 17.手機號碼
    _EMAIL: '', // 18.email
    _MPSBK: '', // 19.開立手機存摺
  };

  ngOnInit(): void {
    this.creatForm();
    this.invalidForm;
    // this.ST140T._MPSBK = this._top.KINBR + this._top.KINWS + this._top.TLRNO;
  }
  ngAfterViewInit() {
    try {
      let splitArea = this._top.appJSON.AREA.split(';');
      this.ADDR_AREA = [];
      splitArea.forEach((element) => {
        this.ADDR_AREA.push({ name: element });
      });
    } catch (error) {
      console.log('error by this._top.appJSON');
    }
  }
  //*建立表單
  creatForm() {
    this.invalidForm = this.formBuilder.group({
      _ACNTNO: ['', Validators.required],
      _ACNTNA: ['', Validators.required],
      _IDNO: ['', Validators.required],
      _BUSNO: ['', Validators.required],
      _ACTYPE: ['', Validators.required],
      _ACTYPEX: ['', Validators.required],
      _BORNDT: ['', Validators.required],
      _TELNO1: ['', Validators.required],
      _TELNO2: ['', Validators.required],
      _RESIADRH: ['', Validators.required],
      _RESIADRB: ['', Validators.required],
      _MAILADRH: ['', Validators.required],
      _MAILADRB: ['', Validators.required],
      _MZIP: ['', Validators.minLength(3)],
      _ATRNY: ['', Validators.required],
      _BANKCD: ['', Validators.required],
      _QPSWD: ['', Validators.required],
      _DBRNO: ['', Validators.required],
      _DACTNO: ['', Validators.required],
      _DPICD: ['', Validators.required],
      _MOBILE: ['', Validators.required],
      _EMAIL: ['', Validators.email],
      _MPSBK: ['', Validators.required],
    });
  }

  confirm() {
    alert('發送140交易');
  }

  goKeyboardEvent(evt) {
    if (evt.code == 'NumpadEnter') {
      let currElIndex: number;
      let nextEl: any;
      let formLength: number;

      formLength = evt.srcElement.form.length;
      currElIndex = Number(evt.currentTarget.id);

      if (currElIndex == 22) {
        nextEl = document.getElementById('0');
        nextEl.focus();
      } else {
        nextEl = document.getElementById(String(currElIndex + 1));
        if (nextEl.nodeName == 'P-DROPDOWN') {
          nextEl.childNodes[0].childNodes[3].focus();
        } else {
          nextEl.focus();
        }
      }
    } else if (evt.code == 'Enter') {
      this.confirm();
    }
  }

  postJsonDao(jsonDao): Observable<any> {
    const httpOptions = this.getDefaultHttpOptions();

    const headers = httpOptions.headers.append('Accept', 'application/json');

    return this.transport.post(
      'http://localhost:8080/SpringSecurityDemo/login',

      jsonDao,

      this.getDefaultHttpOptions()
    );
  }

  getDefaultHttpOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
      }),
    };

    return httpOptions;
  }

  showFileAreaControll(e) {
    this.showFileArea.emit(e);
  }

  _isScroll() {
    let ele = <HTMLElement>document.querySelector("div[id='main-wrap']");
    if (ele) {
      if (ele.scrollTop > 10) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}

interface option {
  name: string;
}

interface AREA {
  name: string;
}
