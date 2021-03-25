import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/src/sweetalert2.js'
@Injectable({
  providedIn: 'root'
})

/**
 * Esta clase permite mostrar mensajes emergentes de alertas y configuraciones en diferentes vistas
 */
export class AlertBannerService {


  public messageErrorSystem():Promise<Object>{
    return Swal.fire({
      position: 'top-end',
      toast:true,
      icon: 'error',
      title: 'El servidor no se encuentra disponible',
      text:"Por favor envio un correo al area de soporte : german.rojas@segurosbolivar.com",
      background:"#212121",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 6000
    })
  }

  public messageErrorTransaction(text:string):Promise<Object>{
    return Swal.fire({
      position: 'top-end',
      toast:true,
      icon: 'error',
      title: 'Error, no se pudo ejecutar la transacción',
      text:text,
      background:"#212121",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 6000
    })
  } 

  public messageSuccesTransaction():Promise<Object>{
    return Swal.fire({
      position: 'top-end',
      toast:true,
      icon: 'success',
      title: 'La transacción se ejecuto correctamente',
      background:"#212121",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000
    })
  } 


public messageErrorNofound(text:string):Promise<Object>{
  return Swal.fire({
    position: 'top-end',
    toast:true,
    icon: 'error',
    title: 'No se encontro el elemento: '+text,
    background:"#212121",
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 1250
  })
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
      toast:true,
      icon: 'success',
      title: 'Ingreso de sesión con exito',
      showConfirmButton: false,
      confirmButtonColor:'#F8D12F',
      timer: 1500
    })
    
  }else{

    return Swal.fire({
      position: 'top-end',
      toast:true,
      icon: 'error',
      title: 'Fallo ingreso de sesión',
      text:"Verifique los campos Correo electronico / codigo",
      background:"#212121",
      confirmButtonText:"Hecho",
      confirmButtonColor:'#F8D12F',
      timerProgressBar: true,
      timer: 5000
    })

  }
}




}
