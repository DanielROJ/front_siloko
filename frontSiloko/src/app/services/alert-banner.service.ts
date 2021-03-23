import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

/**
 * Esta clase permite mostrar mensajes emergentes de alertas y configuraciones en diferentes vistas
 */
export class AlertBannerService {

  constructor() { }



public messageError(text:string):void{
  Swal.fire(

  )

}


/**
 * Me
 * @param text 
 * @param error 
 */
public messageLogin(error:boolean):Promise<Object>{

  if(error === false){
   return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ingreso de sesión con exito',
      buttonsStyling:false,
      timer: 1500
    })
  }else{

    return Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Ingreso de sesión fallido',
      text:"Revisar campos Correo electronico / codigo",
      buttonsStyling:false,
      timer: 2000
    })

  }
}




}
