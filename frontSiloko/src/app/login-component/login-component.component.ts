import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AlertBannerService } from '../services/alert-banner.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


  public formG : FormGroup;


  constructor(private formBuilder:FormBuilder, private alert:AlertBannerService) {
    this.formG = this.generateForm();
   }

   private generateForm():FormGroup{
     return this.formBuilder.group({
      'email': new FormControl('',[Validators.required]),
      'code': new FormControl('',[Validators.required]),
      'rol':new FormControl('',[Validators.required])
     })
   }







  ngOnInit(): void {

}


public onSubmit():void{
 this.alert.messageLogin(false).then(()=>{
   console.log("todo esta ok")
 });
}


}
