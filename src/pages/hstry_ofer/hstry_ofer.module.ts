import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hstry_oferPage } from '../hstry_ofer/hstry_ofer';

@NgModule({
  declarations: [
    Hstry_oferPage,
  ],
  imports: [
    IonicPageModule.forChild(Hstry_oferPage),
  ],
  exports: [
    Hstry_oferPage
  ]
})
export class Tab1PageModule {}
