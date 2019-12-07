import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rename-app';

  constructor() {
    // * hard-coded original file
    const ogFiles = [{
        name: 'apple',
        ext: 'jpg',
        geoLocation: {
            longitude: '35.6895000',
            latitude: '139.6917100',
            city: 'Tokyo',
            country: 'Japan'
        },
        size: {
            value: 80.0,
            unit: 'KB',
        },
        owner: 'A',
        lastModifiedTimeStamp: '1558710195' // unixtimestamp
      },
      {
          name: 'growlist',
          ext: 'txt',
          geoLocation: null,
          size: {
              value: 10.0,
              unit: 'KB',
          },
          owner: 'A',
          lastModifiedTimeStamp: '1575384224'
      },
      {
          name: 'cats',
          ext: 'pdf',
          geoLocation: null,
          size: {
              value: 2100.0,
              unit: 'KB',
          },
          owner: 'C',
          lastModifiedTimeStamp: '1545696000'
      },
      {
          name: 'note1',
          ext: 'docx',
          geoLocation: null,
          size: {
              value: 160.0,
              unit: 'KB',
          },
          owner: 'C',
          lastModifiedTimeStamp: '1569788482'
      },
      {
          name: 'note2',
          ext: 'docx',
          geoLocation: null,
          size: {
              value: 250.0,
              unit: 'KB',
          },
          owner: 'R',
          lastModifiedTimeStamp: '1571998812'
      },
      {
          name: 'city',
          ext: 'jpg',
          geoLocation: {
              longitude: '-79.4163000',
              latitude: '43.7001100',
              city: 'Toronto',
              country: 'Canada'
          },
          size: {
              value: 800.3,
              unit: 'KB',
          },
          owner: 'E',
          lastModifiedTimeStamp: '1571998812'
      }];

    if (!sessionStorage.getItem('newfiles')) {
        sessionStorage.setItem('newfiles', JSON.stringify(ogFiles));
    }
    sessionStorage.setItem('files', JSON.stringify(ogFiles));
  }
}
