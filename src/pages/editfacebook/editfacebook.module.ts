import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditfacebookPage } from './editfacebook';

@NgModule({
  declarations: [
    EditfacebookPage,
  ],
  imports: [
    IonicPageModule.forChild(EditfacebookPage),
  ],
  exports: [
    EditfacebookPage
  ]
})
export class EditprofilePageModule {}
