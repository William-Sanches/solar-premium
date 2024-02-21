import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Banners } from 'src/app/models/banners';
import { BannersService } from 'src/app/services/banners.service';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.scss']
})
export class AddBannerComponent implements OnInit {

  public formulario: FormGroup;
  private service: BannersService;
  private router: Router;

  constructor(formBuilder: FormBuilder, service: BannersService, router: Router) {
    this.formulario = formBuilder.group({
      foto: ['https://drive.google.com/uc?export=view&id=', [Validators.required]]
    });
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if(this.formulario.valid){
      let banner: Banners = this.formulario.value;
      this.service.insert(banner).then((res) => {
        console.log(res);
        this.router.navigate(["/adm-panel"]);
      });
    } else {
      window.alert("Preencha todos os campos!");
    }
  }

}
