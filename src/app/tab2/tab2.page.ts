import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

  export class Tab2Page {

    constructor(private authService: AuthenticationService, private router: Router) {}
   
    async logout() {
      await this.authService.logout();
      this.router.navigateByUrl('/', { replaceUrl: true });
    }
 
      btnClicked(){
      console.log("btn Clicked");
      this.router.navigate(['events'])
      }

      btnClicked1(){
        console.log("btn Clicked1");
        this.router.navigate(['login'])
        }
      
}
