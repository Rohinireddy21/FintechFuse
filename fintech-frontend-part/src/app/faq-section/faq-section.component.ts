import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css']
})
export class FaqSectionComponent {
  constructor(private router: Router) { }

  back() {
    this.router.navigate(['/help-support']);
  }
}
