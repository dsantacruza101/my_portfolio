import { Component } from '@angular/core';

import { NzButtonSize } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  size: NzButtonSize = 'large'

}
