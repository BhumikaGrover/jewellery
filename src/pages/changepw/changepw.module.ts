import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangepwPage } from './changepw';

@NgModule({
  declarations: [
    ChangepwPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangepwPage),
  ],
  exports: [
    ChangepwPage
  ]
})
export class ChangepwPageModule {}
