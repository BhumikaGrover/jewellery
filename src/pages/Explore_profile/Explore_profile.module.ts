import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Explore_profilePage } from './Explore_profile';

@NgModule({
  declarations: [
    Explore_profilePage,
  ],
  imports: [
    IonicPageModule.forChild(Explore_profilePage),
  ],
  exports: [
    Explore_profilePage
  ]
})
export class Tab5PageModule {}
