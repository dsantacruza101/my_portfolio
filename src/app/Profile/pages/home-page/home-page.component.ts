import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { environment as env } from 'src/environments/environment.dev';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  public size: NzButtonSize = 'large';
  public cv: string = env.cv_spanish;
  public github: string = env.github_link;
  public linkedIn: string = env.linkedIn_link;
  public email: string = env.email;

  onClickShowOption(option: string) {
    if (option === 'resume') {
      window.open(this.cv, '_blank');
    }

    if (option === 'github') {
      window.open(this.github, '_blank');
    }

    if (option === 'linkedIn') {
      window.open(this.linkedIn, '_blank');
    }

    if (option === 'email') {
      window.open(this.email, '_blank');
    }
  }
}
