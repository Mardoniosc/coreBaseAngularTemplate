import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.css']
})
export class PerfilUserComponent implements OnInit {

  imgUser = "../../../../../assets/admin.png"

  constructor() { }

  ngOnInit() {
  }

  atualizarPerfil(){
    alert('Perfil Atualizado')
  }

  guardarImagem(event){
    const file = event.target.files[0]
    console.log(file)
  }
}
