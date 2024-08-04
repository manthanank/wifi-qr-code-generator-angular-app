import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wifi-qr-code-generator-angular-app';

  ssid: any;
  password: any;
  auth: any;
  wifiString: any;

  makeCode() {
    this.wifiString =
      'WIFI:S:' + this.ssid + ';T:' + this.auth + ';P:' + this.password + ';;';
  }

  isButtonDisabled() {
    return !this.ssid || !this.password || !this.auth;
  }
}
