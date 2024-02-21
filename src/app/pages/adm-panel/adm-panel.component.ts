import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannersService } from 'src/app/services/banners.service';
import { FeedbacksService } from 'src/app/services/feedbacks.service';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-adm-panel',
  templateUrl: './adm-panel.component.html',
  styleUrls: ['./adm-panel.component.scss']
})
export class AdmPanelComponent implements OnInit {

  public listaProjetos: any = [];
  public listaFeedbacks: any = [];
  public listaBanners: any = [];

  private service: ProjetosService;
  private serviceFb: FeedbacksService;
  private serviceBn: BannersService;
  private router: Router;

  constructor(service: ProjetosService, servicefb: FeedbacksService, serviceBn: BannersService, router: Router) {
    this.service = service;
    this.serviceFb = servicefb;
    this.serviceBn = serviceBn;
    this.router = router;
  }


  ngOnInit(): void {
    this.service.findAll().subscribe((projetos) => {
      this.listaProjetos = [];
      for (let p of projetos) {
        let dados = p.payload.doc.data();
        this.listaProjetos.push({
          id: p.payload.doc.id,
          capa: dados['capa'],
          geracao: dados['geracao'],
          local: dados['local'],
          npaineis: dados['npaineis'],
          winversor: dados['winversor'],
          wpaineis: dados['wpaineis']
        });
      }
    });

    this.serviceFb.findAll().subscribe((feedbacks) => {
      this.listaFeedbacks = [];
      for (let f of feedbacks) {
        let fb = f.payload.doc.data();
        this.listaFeedbacks.push({
          id: f.payload.doc.id,
          foto: fb['foto'],
          comentario: fb['comentario'],
          nome: fb['nome']
        });
      }
    });

    this.serviceBn.findAll().subscribe((banners) => {
      this.listaBanners = [];
      for (let b of banners) {
        let bn = b.payload.doc.data();
        this.listaBanners.push({
          id: b.payload.doc.id,
          foto: bn['foto']
        });
      }
    });
  }

  excluirProjeto(id: string): void {
    if (window.confirm("Deseja, realmente, excluir o registro?")) {
      this.service.remove(id);
    }
  }

  excluirBanner(id: string): void {
    if (window.confirm("Deseja, realmente, excluir o registro?")) {
      this.serviceBn.remove(id);
    }
  }

}
