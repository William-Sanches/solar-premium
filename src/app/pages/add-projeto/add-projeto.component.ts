import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Projetos } from 'src/app/models/projetos';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-add-projeto',
  templateUrl: './add-projeto.component.html',
  styleUrls: ['./add-projeto.component.scss']
})
export class AddProjetoComponent {

  public formulario: FormGroup;
  private service: ProjetosService;
  private router: Router;

  constructor(formBuilder: FormBuilder, service: ProjetosService, router: Router) {
    this.formulario = formBuilder.group({
      capa: ['https://drive.google.com/uc?export=view&id=', [Validators.required]],
      geracao: ['', [Validators.required]],
      local: ['', [Validators.required]],
      npaineis: ['', [Validators.required]],
      winversor: ['', [Validators.required]],
      wpaineis: ['', [Validators.required]]
    });
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if(this.formulario.valid){
      let projeto: Projetos = this.formulario.value;
      this.service.insert(projeto).then((res) => {
        console.log(res);
        this.router.navigate(["/adm-panel"]);
      });
    } else {
      window.alert("Preencha todos os campos!");
    }
  }

}
