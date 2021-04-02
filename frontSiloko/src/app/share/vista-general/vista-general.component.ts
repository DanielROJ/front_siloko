import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-general',
  templateUrl: './vista-general.component.html',
  styleUrls: ['./vista-general.component.css']
})
export class VistaGeneralComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  home(){
    this.router.navigateByUrl("/")
  }

}
