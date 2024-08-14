import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit{

  public themeState: boolean = true;

  ngOnInit(): void {

  }

  onThemeStateChange( state: boolean ): void {
    console.log('new state', state);
    this.themeState = state;
    console.log(this.themeState);

  }
}
