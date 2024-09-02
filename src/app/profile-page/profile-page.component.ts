import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
    constructor(private router: Router) {}

    goToPage(pageName: string){
      this.router.navigate([pageName]);
    }


}
