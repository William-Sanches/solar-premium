import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss']
})
export class AdmComponent {

  public formLogin: FormGroup;
  private router: Router;
  private auth: AuthService;

  constructor(formBuilder: FormBuilder, router: Router, auth: AuthService) {
    this.formLogin = formBuilder.group({
      email: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.router = router;
    this.auth = auth;
  }

  ngOnInit(): void {
  }

  public login(): void{
    if(this.formLogin.valid) {
      let data = this.formLogin.value;
      this.auth.login(data.email, data.senha).then (() => {
        window.localStorage.setItem('token', 'true');
        this.router.navigate(['/adm-panel']);
      }).catch(() => {
        window.alert("Erro ao efetuar login!");
      });
    }
  }

}
