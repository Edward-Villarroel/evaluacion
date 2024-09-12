import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { ToastController ,AlertController} from '@ionic/angular';



@Component({
  
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
   imageURL:string="";
   nombre:string="";
   usuario:string="";
   contrasena:string="";
   cerrar:string="";
  constructor( public mensaje:ToastController, private route:Router, public alerta:AlertController) {
    this.updateImage();
    this.msg();
   }
   
    updateImage(){
      if (localStorage.getItem('ingresado')=='true'){
        this.imageURL='assets/icon/logo_duoc.png';
      }else{
        this.imageURL='assets/icon/usuario.png'
      }
    }
    async mensajeExito(){
        const toast= await this.mensaje.create({
          message:'inicio de sesion exitoso',
          duration:2000
        });
        toast.present();
        

    }
    async presentAlert() {
      const alert = await this.alerta.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK']
      });
    
      await alert.present();
    }
    ingresar(){
    
        this.route.navigate(['/home']);
      }
    
    async msg(){
      if (localStorage.getItem('ingresado')=='true'){
        this.cerrar='cerrar sesion';
      }else {
        this.cerrar='';
      }
    }
    
    async cerrarSesion(){

        localStorage.setItem('ingresado','false');
        this.route.navigate(['/landing-page']);
    }
  ngOnInit() {
  }
  
}
