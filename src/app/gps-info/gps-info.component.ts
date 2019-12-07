import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-gps-info',
  templateUrl: './gps-info.component.html',
  styleUrls: ['./gps-info.component.css']
})
export class GpsInfoComponent implements OnInit {

  // arrays of mock objects
  filesOld = [];
  filesNew = [];
  historyfiles = [];
  curr = 0;

  // Chars to display in the original container in drag and drop
  largeName = [];

  // Chars to display in the potential strings container in drag and drop
  Strings = ['Latitude', 'Longitude', 'City', 'Country'];
  str: string;

  ngOnInit() {
    this.filesOld = JSON.parse(sessionStorage.getItem('newfiles'));
    console.log(this.filesOld);
    if (this.filesNew.length === 0) {
      for (let i = 0; i < this.filesOld.length; i++) {
        this.filesNew[i] = this.filesOld[i];
      }
    }
    this.largeName = JSON.parse(sessionStorage.getItem('largeName'));
    this.historyfiles = JSON.parse(sessionStorage.getItem('historyfiles'));
    this.curr = JSON.parse(sessionStorage.getItem('HISTORYFILESCURR'));
  }

  updateNamesWithString(newString, indexOld, indexNew) {
    for (const file of this.filesNew) {
      let fullString = '';
      let newStringPart = '';
      let indexN = 0;

      for (let i = 0; i < indexNew; i++) {
        if (this.isItemInStorage(i)) {
          if (this.largeName[i] === 'Latitude' ) {
            indexN += file.geoLocation ? file.geoLocation.latitude.length : 0;
          } else if (this.largeName[i] === 'Longitude') {
            indexN += file.geoLocation ? file.geoLocation.longitude.length : 0;
          } else if (this.largeName[i] === 'City') {
            indexN += file.geoLocation ? file.geoLocation.city.length : 0;
          } else if (this.largeName[i] === 'Country') {
            indexN += file.geoLocation ? file.geoLocation.country.length : 0;
          } else {
            indexN += this.largeName[i].length;
          }
        } else {
          indexN += this.largeName[i].length;
        }
      }

      if (file.geoLocation) {

        if (newString[indexOld] === 'Latitude') {
          newStringPart = file.geoLocation.latitude;
        } else if (newString[indexOld] === 'Longitude') {
          newStringPart = file.geoLocation.longitude;
        } else if (newString[indexOld] === 'City') {
          newStringPart = file.geoLocation.city;
        } else if (newString[indexOld] === 'Country') {
          newStringPart = file.geoLocation.country;
        }

        if (indexN > file.name.length) {
          indexN = file.name.length;
        }
        if (indexN === 0) {
          fullString = newStringPart + file.name.substr(0, file.name.length);
        } else {
          fullString = file.name.substr(0, indexN) + newStringPart +
            file.name.substr(indexN, file.name.length);
        }
        file.name = fullString;
        console.log(file.name);
      }
    }
  }


  removeStr(index, size) {
    let tempIndex = 0;
    for (const file of this.filesNew) {
      if (index > file.name.length - 1) {
        if (file.name.length > 1) {
          tempIndex = file.name.length - 1;
          file.name = file.name.slice(0, tempIndex).concat(file.name.slice(tempIndex + size, file.name.length));
        }
      } else {
        if (file.name.length > 1) {
          tempIndex = index;
          file.name = file.name.slice(0, tempIndex).concat(file.name.slice(tempIndex + size, file.name.length));
        }
      }
    }
    for (const file of this.filesNew) {
      console.log(file.name);
    }

  }

  drop(event: CdkDragDrop < string[] > ) {
    if (event.previousContainer === event.container) {
      // Do nothing
    } else {
      this.updateNamesWithString(event.previousContainer.data, event.previousIndex, event.currentIndex);
      // retrieve the data that needs to be transfered and store in temp
      const tempPreviousData = event.previousContainer.data[event.previousIndex];
      sessionStorage.setItem(tempPreviousData, JSON.stringify(
        {
          value: tempPreviousData
        }
      ));
      console.log(tempPreviousData);
      this.largeName.splice(event.currentIndex, 0, tempPreviousData);

      if ((this.historyfiles.length - 1) === this.curr) {
        this.historyfiles.push({
          files: this.filesNew,
          largeName: this.largeName
        });
      } else {
        this.historyfiles = this.historyfiles.splice(this.curr + 1);
        this.historyfiles.push({
          files: this.filesNew,
          largeName: this.largeName
        });
      }
      this.curr = this.historyfiles.length - 1;
      sessionStorage.setItem('newfiles', JSON.stringify(this.filesNew));
      sessionStorage.setItem('largeName', JSON.stringify(this.largeName));
      sessionStorage.setItem('HISTORYFILESCURR', JSON.stringify(this.curr));
      sessionStorage.setItem('historyfiles', JSON.stringify(this.historyfiles));

    }
  }

  isItemInStorage(index) {
    const val = sessionStorage.getItem(this.largeName[index]);
    return val !== null;
  }

  undo(): void {
    this.curr = this.curr - 1;
    this.filesNew = this.historyfiles[this.curr].files;
    this.largeName = this.historyfiles[this.curr].largeName;

    sessionStorage.setItem('newfiles', JSON.stringify(this.filesNew));
    sessionStorage.setItem('largeName', JSON.stringify(this.largeName));
    sessionStorage.setItem('HISTORYFILESCURR', JSON.stringify(this.curr));
  }

  redo(): void {
    this.curr = this.curr + 1;
    this.filesNew = this.historyfiles[this.curr].files;
    this.largeName = this.historyfiles[this.curr].largeName;

    sessionStorage.setItem('newfiles', JSON.stringify(this.filesNew));
    sessionStorage.setItem('largeName', JSON.stringify(this.largeName));
    sessionStorage.setItem('HISTORYFILESCURR', JSON.stringify(this.curr));
  }
}
