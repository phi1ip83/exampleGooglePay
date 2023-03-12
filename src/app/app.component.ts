import { Component } from '@angular/core';
import { ReadyToPayChangeResponse } from '@google-pay/button-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pay';

  amount = '100.00';
  buttonType:any = 'buy';
  buttonColor:any = 'default';
  buttonLocale = '';
  existingPaymentMethodRequired = false;

  paymentRequest:any = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
  };

  onLoadPaymentData = (event: any): void => {
    console.log('load payment data', event.detail);
  };

  onError = (event: ErrorEvent): void => {
    console.error('error', event.error);
  };

  onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = paymentData => {
    console.log('payment authorized', paymentData);

    return {
      transactionState: 'SUCCESS',
    };
  };

  onReadyToPayChange = (event: any): void => {
    console.log('ready to pay change', event.detail);
  };

  onClick = (event: Event): void => {
    console.log('click');
  };

  onClickPreventDefault = (event: Event): void => {
    console.log('prevent default');
    event.preventDefault();
  };
}
