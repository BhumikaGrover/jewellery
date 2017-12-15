import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})

export class GalleryPage {

  array;
  @ViewChild(Slides) slides: Slides;
  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.array = navParams.get('photogallery');
    console.log('---- '+JSON.stringify(this.array));
    setTimeout(() => { this.slides.slideTo(navParams.get('index'), 700); }, 500);
    //this.slides.slideTo(navParams.get('index'), 500);
  }

  ionViewDidEnter() {
   //this.slides.slideTo(this.itemIndex, 500);
 }


  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

dismiss() {
    this.viewCtrl.dismiss();
  }
}
