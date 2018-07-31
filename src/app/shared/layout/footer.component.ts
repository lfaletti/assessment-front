import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  today: number = Date.now();
}
