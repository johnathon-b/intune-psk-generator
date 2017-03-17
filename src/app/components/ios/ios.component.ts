import { Component } from '@angular/core';

export class NetworkInfo{
  ssid: any;
  passphrase: any;
  hidden: any;
}

@Component({
  moduleId:module.id,
  selector: 'ios',
  templateUrl: 'ios.component.html'
})

export class IosComponent { 
  network: NetworkInfo = {
    ssid: '',
    hidden: 'True',
    passphrase: ''
  };

}
