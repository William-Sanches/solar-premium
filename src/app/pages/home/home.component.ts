import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FeedbacksService } from 'src/app/services/feedbacks.service';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public listaProjetos: any = [];
  public listaFeedbacks: any = [];

  private service: ProjetosService;
  private serviceFb: FeedbacksService;

  constructor(service: ProjetosService, servicefb: FeedbacksService) {
    this.service = service;
    this.serviceFb = servicefb;
  }
  /* constructor() {

  } */

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
  }

  customOptions: OwlOptions = {
    loop: true,
    center: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayMouseleaveTimeout: 1,
    dots: true,
    navSpeed: 400,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      540: {
        items: 1.5
      },
      700: {
        items: 2
      },
      1050: {
        items: 3
      },
      1400: {
        items: 4
      }
    },
    nav: false
  }

}
