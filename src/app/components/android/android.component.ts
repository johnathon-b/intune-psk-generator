import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'android',
  templateUrl: 'android.component.html'
})
export class AndroidComponent { 
  hidden = 'False';
  ssid = '';
  passphrase = '';
  encryption = 'AES';

  dataValue1 = 
`<?xml version="1.0"?>
<WLANProfile xmlns="http://www.microsoft.com/networking/WLAN/profile/v1">
	<name></name>
		<SSIDConfig>
		<SSID>
			<hex>53534944</hex>
			<name>`;

  dataValue2 = 
`</name>
		</SSID>
	<nonBroadcast>`;

  dataValue3 = 
`</nonBroadcast>
	</SSIDConfig>',
	<connectionType>ESS</connectionType>
	<connectionMode>auto</connectionMode>
	<MSM>
		<security>
			<authEncryption>
				<authentication>WPA2PSK</authentication>
				<encryption>`;

  dataValue4 = 
`</encryption>
				<useOneX>false</useOneX>
			</authEncryption>
			<sharedKey>
				<keyType>passPhrase</keyType>
				<protected>true</protected>
				<keyMaterial>`;
        
  dataValue5 = 
`</keyMaterial>
			</sharedKey>
		</security>
	</MSM>
</WLANProfile>`; 


    onHidden() {
    this.hidden = 'True';    
  }

  onPublic() {
    this.hidden = 'False';    
  }

  onAes() {
    this.encryption = 'AES';    
  }

  onTkip() {
    this.encryption = 'TKIP';    
  }


downloadFile() {
    var xmlData = this.dataValue1 + this.ssid + this.dataValue2 + this.hidden +  this.dataValue3 + this.encryption + this.dataValue4 + this.passphrase + this.dataValue5;
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([xmlData], { type: 'text/xml' });
    var url= window.URL.createObjectURL(blob);
    a.href = url;
    a.download = this.ssid + ' Android WiFi PSK Profile.xml';
    a.click();
}
}
