import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';

@Component({
  selector: 'app-e3',
  templateUrl: './e3.page.html',
  styleUrls: ['./e3.page.scss'],
})
export class E3Page implements OnInit {

  constructor(private router: Router, private popover: PopoverController) { }

  ngOnInit() {
  }


  btnClicked() {
    console.log("btn Clicked");
    this.router.navigate(['events'])
  }
  btnClicked1() {
    console.log("btn Clicked");
    this.router.navigate(['events'])
  }

  CreatePopover() {
    this.popover.create({
      component: PopovercomponentPage,
      showBackdrop: false
    }).then((popoverElement) => {
      popoverElement.present();
    })
  }

}
