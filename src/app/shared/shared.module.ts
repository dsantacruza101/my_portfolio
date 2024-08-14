import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay'
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@NgModule({
  declarations: [
    Error404PageComponentComponent
  ],
  imports: [
    NzResultModule,
    BrowserModule,
    ScrollingModule,
    OverlayModule,
    NzPopoverModule,

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
    NzPopoverModule,
    NzToolTipModule,
    NzSwitchModule,

    // Reactive Form

    FormsModule,
    ReactiveFormsModule,

    BrowserModule,
    ScrollingModule,
    OverlayModule,

  ],
  providers: [

  ]
})
export class SharedModule { }
