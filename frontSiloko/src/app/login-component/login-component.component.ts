import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertBannerService } from '../share/services_share/alert-banner.service';
import { ValidatorsMessage } from '../validatorsMessage';



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


  public formG: FormGroup;

  public messageError: ValidatorsMessage;

  constructor(private formBuilder: FormBuilder, private alert: AlertBannerService, private router: Router) {
    this.formG = this.generateForm();
    this.messageError = new ValidatorsMessage();
  }

  private generateForm(): FormGroup {
    return this.formBuilder.group({
      'email': new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'code': new FormControl('', [Validators.required]),
      'rol': new FormControl('rol1', [Validators.required])
    })
  }


  ngOnInit(): void {

  }

  public getFc(name) {
    return this.formG.get(name);
  }

  public hasErros(name) {
    return (this.getFc(name).dirty || this.getFc(name).touched) && this.getFc(name).errors;
  }



  public onSubmit(): void {
    if (this.formG.invalid) {
      this.alert.messageLogin(true).then(() => {
        this.formG.reset();
        this.formG = this.generateForm();
      });
    } else {

      if (this.getFc("rol").value === "rol1") {
        this.alert.messageLogin(false).then(() => {
          this.formG.reset();
          this.formG = this.generateForm();
          this.router.navigateByUrl("/siloko/home");
        });
      } else if (this.getFc("rol").value === "rol2") {
        this.alert.messageLogin(false).then(() => {
          this.formG.reset();
          this.formG = this.generateForm();
          this.router.navigateByUrl("/almacen/home");
        });
      } else if (this.getFc("rol").value === "rol3") {
        this.alert.messageLogin(false).then(() => {
          this.formG.reset();
          this.formG = this.generateForm();
          this.router.navigateByUrl("/cliente/home");
        });
      } else {

        this.alert.messageLogin(true).then(() => {
          this.formG.reset();
          this.formG = this.generateForm();
        });

      }



    }

  }


}
