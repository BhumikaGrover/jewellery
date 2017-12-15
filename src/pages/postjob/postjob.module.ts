import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostjobPage } from './postjob';

@NgModule({
  declarations: [
    PostjobPage,
  ],
  imports: [
    IonicPageModule.forChild(PostjobPage),
  ],
  exports: [
    PostjobPage
  ]
})
export class PostjobPageModule {}
