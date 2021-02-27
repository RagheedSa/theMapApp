import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-events',
    templateUrl: './events.page.html',
    styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

    constructor(
        private router: Router
    ) { }

    btnClicked() {
        console.log("btn Clicked");
        this.router.navigate(['e1'])
    }
    btnClicked1() {
        console.log("btn Clicked");
        this.router.navigate(['e2'])
    }
    btnClicked2() {
        console.log("btn Clicked");
        this.router.navigate(['e3'])
    }
    btnClicked3() {
        console.log("btn Clicked");
        this.router.navigate(['e4'])
    }
    btnClicked4() {
        console.log("btn Clicked");
        this.router.navigate(['e5'])
    }

    ngOnInit() {
    }

}