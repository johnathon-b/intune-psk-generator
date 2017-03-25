import { Component } from '@angular/core';
 import 'rxjs/Rx' ;

@Component({
  moduleId:module.id,
  selector: 'ios',
  templateUrl: 'ios.component.html'
})

export class IosComponent { 
  hidden = 'False';
  ssid = '';
  passphrase = '';
  hexSource = '6a6f686e6174686f6e62';
  dataValue1 = 
`<?xml version='1.0' encoding='UTF-8'?>
<!DOCTYPE plist PUBLIC '-//Apple//DTD PLIST 1.0//EN' 'http://www.apple.com/DTDs/PropertyList-1.0.dtd'>
<plist version='1.0'>
<dict>
	<key>PayloadContent</key>
  <array>
    <dict>
      <key>AutoJoin</key>
      <true/>
      <key>EncryptionType</key>
      <string>Any</string>
      <key>HIDDEN_NETWORK</key>
      <`;
  dataValue2 = 
      `/>
      <key>IsHotspot</key>
      <false/>
      <key>Password</key>
      <string>`;
                
  dataValue3 = `</string>
      <key>PayloadDescription</key>
      <string>Configures Wi-Fi settings</string>
      <key>PayloadDisplayName</key>
      <string>WiFi</string>
      <key>PayloadIdentifier</key>
      <string>contoso.ninja.local.6a6f686e6174686f6e62.com.apple.wifi.managed.99-6a6f686e6174686f6e62-99</string>
      <key>PayloadType</key>
      <string>com.apple.wifi.managed</string>
      <key>PayloadUUID</key>
      <string>99-`
      
      dataValue4 = `-99</string>
      <key>PayloadVersion</key>
      <real>1</real>
      <key>ProxyType</key>
      <string>None</string>
      <key>SSID_STR</key>
      <string>`;
              
  dataValue5 = 
          `</string>
    </dict>
  </array>
  <key>PayloadDisplayName</key>
  <string>CNCY</string>
  <key>PayloadIdentifier</key>
  <string>contoso.ninja.local.6a6f686e6174686f6e62</string>
  <key>PayloadRemovalDisallowed</key>
  <false/>
  <key>PayloadType</key>
  <string>Configuration</string>
  <key>PayloadUUID</key>
  <string>6a6f686e6174686f6e62-99-6a6f686e6174686f6e62</string>
  <key>PayloadVersion</key>
  <integer>1</integer>
</dict>
</plist>`;



  onHidden() {
    this.hidden = 'True';    
  }

  onPublic() {
    this.hidden = 'False';    
  }

downloadFile() {
    var xmlData = this.dataValue1 + this.hidden + this.dataValue2 + this.passphrase +  this.dataValue3 + this.ssid + this.dataValue4 + this.hexSource + this.dataValue5;
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([xmlData], { type: 'text/xml' });
    var url= window.URL.createObjectURL(blob);
    a.href = url;
    a.download = this.ssid + ' iOS WiFi PSK Profile.mobileconfig';
    a.click();
}

}
