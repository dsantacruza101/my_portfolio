import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Error404PageComponentComponent } from './error404-page-component/error404-page-component.component';

// NZ Modules

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzResultModule } from 'ng-zorro-antd/result';


@NgModule({
  declarations: [
    Error404PageComponentComponent
  ],
  imports: [
    NzResultModule,
  ],
  exports: [
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzImageModule,
    NzSpaceModule,
    NzCardModule,
    NzDrawerModule,
    NzListModule,
    NzDescriptionsModule,
    NzFormModule,
    NzInputModule,

    // Reactive Form

    ReactiveFormsModule

  ]
})
export class SharedModule { }
