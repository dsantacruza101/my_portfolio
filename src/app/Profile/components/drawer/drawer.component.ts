import { Component } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';


@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  visible = false;
  placement: NzDrawerPlacement = 'left';
  public drawerItems = [
    { label: 'Home', icon: 'home', url: 'home'},
    { label: 'About', icon: 'profile', url: 'about'},
    { label: 'Projects', icon: 'project', url: 'projects'},
    { label: 'Skills', icon: 'code', url: 'skills'},
    { label: 'Contact', icon: 'contacts', url: 'contact'},
  ]

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
