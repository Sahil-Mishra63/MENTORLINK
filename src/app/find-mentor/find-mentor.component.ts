import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-mentor',
  templateUrl: './find-mentor.component.html',
  styleUrl: './find-mentor.component.scss'
})
export class FindMentorComponent {
  constructor(private router: Router) {}

  // goToPage(pageName: string){
  //   this.router.navigate([pageName]);
  // }

navigateToExt(): void{
    window.location.href = ('http://127.0.0.1:3000');
}

}
