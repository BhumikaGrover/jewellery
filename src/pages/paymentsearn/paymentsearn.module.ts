import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentsearnPage } from './paymentsearn';

@NgModule({
  declarations: [
    PaymentsearnPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentsearnPage),
  ],
  exports: [
    PaymentsearnPage
  ]
})
export class PaymentsearnPageModule {}
