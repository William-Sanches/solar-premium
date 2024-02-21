import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  private router: Router;
  private auth: AuthService;

  constructor(router: Router, auth: AuthService) {
    this.router = router;
    this.auth = auth;
  }

  ngOnInit(): void {
    this.auth.logout().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/adm']);
    }).catch(() => {
      window.alert("Erro ao efetuar logout!");
      this.router.navigate(['/home']);
    });
    
  }

}
