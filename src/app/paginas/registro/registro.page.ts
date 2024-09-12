import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator,FormControl, Validators } from '@angular/forms';
import { AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro:FormGroup;
  constructor(public fb:FormBuilder, public alertController: AlertController, public route:Router) { 
    this.formularioRegistro=this.fb.group({
      'nombre': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required),
      'confirmPassword': new FormControl('',Validators.required),
    })

  }
    async registrarse(){
      var f = this.formularioRegistro.value;

      if(this.formularioRegistro.invalid){
        const alert = await this.alertController.create({
          header: 'Alerta',
          message: 'Informacion erronea o incompleta',
          buttons: ['OK'],
        });
    
        await alert.present();
        return;
      }else{
        var usuario={
          nombre: f.nombre,
          password: f.password
        }
        this.route.navigate(['./login']);
      }

      localStorage.setItem('usuario',JSON.stringify(usuario));
    }
  ngOnInit() {
  }

}
