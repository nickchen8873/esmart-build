import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { KernelTopService } from '../kernel-top.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    public transport: HttpClient,
    private router: Router,
    public _top: KernelTopService,
    public app: AppComponent
  ) {}

  formName = new FormControl('');
  invalidForm!: FormGroup;
  LOGIN = { brno: '', tlrno: '', password: '' };
  password: String = '';
  showPassword = false;

  ngOnInit(): void {
    this.app.gFullScreen = true;
    this.creatForm();
    this.invalidForm;
  }

  //*建立表單
  creatForm() {
    this.invalidForm = this.formBuilder.group({
      brno: ['', Validators.required],
      tlrno: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(2),
          Validators.minLength(2),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          // Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}'),
        ]),
      ],
    });
  }

  confirm() {
    if (this.invalidForm.invalid) {
      alert('表單資料格式有誤');
    } else {
      alert('登入成功');
      this.app.gFullScreen = false;

      this._top.KINBR = this.LOGIN.brno;
      this._top.KINWS = '01';
      this._top.TLRNO = this.LOGIN.tlrno;
      this.router.navigate(['todolist']);
    }
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
        nextEl.focus();
      }
    } else if (evt.code == 'Enter') {
      this.confirm();
    }
  }

  fillPwdBlank() {
    let pwdLength = this.LOGIN.password.length;
    let leftWordNum = 16 - pwdLength;
    for (let i = 0; i < leftWordNum; i++) {
      this.LOGIN.password = this.LOGIN.password + ' ';
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
}
