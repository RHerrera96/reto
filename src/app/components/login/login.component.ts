import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario : FormGroup;
  bandera = false;
  items : Observable<any[]>;
  constructor(private f : FormBuilder, firestore: AngularFirestore) { 
    this.formulario = this.f.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
    this.items = firestore.collection('prueba').valueChanges();
  }

  ngOnInit(): void {
  }

  iniciarSesion(){
    console.log(this.formulario);
    if(this.formulario.invalid){
      this.bandera = true;
    }
  }
}
