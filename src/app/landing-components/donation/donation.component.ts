import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {PageScrollConfig} from 'ng2-page-scroll';
import {
  IPayPalConfig,
  ICreateOrderRequest
} from 'ngx-paypal';
import { ModalFunctions } from 'src/app/shared-functions/modal-functions';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})

export class DonationComponent implements OnInit {
  showAmountField: Boolean = false;
  public payPalConfig ? : IPayPalConfig;
  public showSuccess;
  formSubmitted:Boolean = false;
  userpayment:FormGroup;
  showPaymentButton: Boolean = false;
  constructor(public http:HttpClient, public modal: ModalFunctions) { }

  ngOnInit() {
    this.initConfig();
    this.userpayment= new FormGroup({
      name:new FormControl(null,{validators:[Validators.required]}),
      email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
      amount:new FormControl(null,{validators:[Validators.required]}),
    });
    PageScrollConfig.defaultScrollOffset = 100;
    PageScrollConfig.defaultEasingLogic = {
        ease: (t: number, b: number, c: number, d: number): number => {
            // easeInOutExpo easing
            if (t === 0) return b;
            if (t === d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    };
  }
  private initConfig(): void {
    // console.log(this.userpayment.value.amount,'$$$$$$')
    // this.formSubmitted = true;
    // if(this.userpayment.invalid){
    //   return;
    // }
    this.payPalConfig = {
    currency: 'USD',
    clientId: 'AQ71En39h4f3YYyjU9vdy1O2Ar64jS7-RoaR6j6YpfdoJLSKpWzGrpcDEWkBll9VaakgHW1LKAWoxe4w',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: `${this.userpayment.value.amount}`,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: `${this.userpayment.value.amount}`
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'USD',
                value: `${this.userpayment.value.amount}`,
              },
            }
          ]
        }
      ]
    },
    // advanced: {
    //   commit: 'true'
    // },
    // style: {
    //   label: 'paypal',
    //   layout: 'vertical'
    // },
    onApprove: (data, actions) => {
     // console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then(details => {
        //console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },

    onClientAuthorization: (data) => {
     // console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
      this.modal.hideBtnLoader();
      this.modal.openModal("#paymentSuccessful");
      this.userpayment.reset();
      this.showPaymentButton = false;
      this.http.post<{status:string,msg:string}>('http://18.223.24.178:7000/pay',this.userpayment.value)
      .subscribe(result=>{
        //console.log(result);
      })
    },
    onCancel: (data, actions) => {
      //console.log('OnCancel', data, actions);
      this.modal.hideBtnLoader();
      this.modal.openModal("#paymentFailed");
      this.userpayment.reset();
      this.showPaymentButton = false;
    },
    onError: err => {
      //console.log('OnError', err);
      this.modal.hideBtnLoader();
      this.modal.openModal("#paymentFailed");
      this.userpayment.reset();
      this.showPaymentButton = false;
    },
    onClick: (data, actions) => {
      //console.log(this.userpayment.value.amount,'$$$$$$')
     // console.log('onClick', data, actions);
    },
  };
  }

  validateForm(){
    this.formSubmitted = true;
    if(!(this.userpayment.get('name').invalid || this.userpayment.get('email').invalid || this.userpayment.get('amount').invalid)){
      this.showPaymentButton = true;
      this.formSubmitted = false;
    }
    else
    this.showPaymentButton = false;
  }

  enterAmount(amount){
    //console.log(amount)
    //console.log(amount.value)
    if(amount.value === 'other')
    this.showAmountField = true;
    else
    {
      this.showAmountField = false;
      this.userpayment.patchValue({
        amount:amount.value
      })
    }
  }
}
