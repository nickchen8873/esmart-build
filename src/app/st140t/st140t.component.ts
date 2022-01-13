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
import { KernelTopService } from '../kernel-top.service';

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
  ) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  formName = new FormControl('');
  invalidForm!: FormGroup;
  example = { name: '', phone: '', password: '' };
  password: String = '';
  flowcontrollerLock: Boolean = false;
  gOutputContentShow: Boolean = false;
  gShowMsg: Boolean = false;
  gInputContentShow: Boolean = true;

  actypeOptions: option[] = [{ name: '30' }, { name: '31' }];

  cities: City[];
  selectedCity: City;
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
    alert(this._top.KINBR + this._top.KINWS + this._top.TLRNO);
  }

  //*建立表單
  creatForm() {
    this.invalidForm = this.formBuilder.group({
      _ACNTNO: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
          Validators.minLength(2),
        ]),
      ],
      _ACNTNA: ['', Validators.required],
      _IDNO: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
          Validators.minLength(2),
        ]),
      ],
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
      _MZIP: ['', Validators.required],
      _ATRNY: ['', Validators.required],
      _BANKCD: ['', Validators.required],
      _QPSWD: ['', Validators.required],
      _DBRNO: ['', Validators.required],
      _DACTNO: ['', Validators.required],
      _DPICD: ['', Validators.required],
      _MOBILE: ['', Validators.required],
      _EMAIL: ['', Validators.required],
      _MPSBK: ['', Validators.required],

      // name: ['', Validators.required],
      // phone: [
      //   '',
      //   Validators.compose([
      //     Validators.required,
      //     Validators.maxLength(10),
      //     Validators.minLength(10),
      //   ]),
      // ],
      // password: [
      //   '',
      //   Validators.compose([
      //     Validators.required,
      //     Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}'),
      //   ]),
      // ],
    });
  }

  confirm() {
    // this.ST140T.phone = this.ST140T.phone;

    // var sTimText = {};
    // const Header = {};
    // Header['brno'] = this.ST140T.name;
    // Header['tlrno'] = this.ST140T.phone;
    // Header['password'] = this.ST140T.password;
    // sTimText['Header'] = Header;
    // sTimText['Basic'] = Header;
    // sTimText['Text'] = Header;

    // this.postJsonDao(JSON.stringify(sTimText)).subscribe(
    //   (data) => {
    //     console.log(data);
    //   },

    //   (error) => {},

    //   () => {}
    // );

    // if (this.invalidForm.invalid) {
    //   alert('表單漏填囉!');
    // } else {
    //   alert('驗證成功');
    // }

    this.router.navigate(['todolist']);
  }

  goKeyboardEvent(evt) {
    if (evt.code == 'NumpadEnter') {
      let currElIndex: number;
      let nextEl: any;
      let formLength: number;

      formLength = evt.srcElement.form.length;
      currElIndex = Number(evt.srcElement.id);

      if (currElIndex == formLength) {
        nextEl = document.getElementById('0');
        nextEl.focus();
      } else {
        nextEl = document.getElementById(String(currElIndex + 1));
        if (nextEl.nodeName == 'P-DROPDOWN') {
          nextEl.click();
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

interface City {
  name: string;
  code: string;
}
