import {
  Component,
  OnInit
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {

  // arrays of mock objects
  filesOld = [];
  filesNew = [];

  // Chars to display in the original container in drag and drop
  largeName = [];
  largeNameConst = [];

  // Chars to display in the potential strings container in drag and drop
  Strings = [];
  str: string;

  // look for largest name in the old filesname list
  // go through that name and put into the array letter by letter
  largestName() {
    let largestFileName = this.filesOld[0].name;
    for (const file of this.filesOld) {
      if (largestFileName.length < file.name.length) {
        largestFileName = file.name;
      }
    }
    for (const char of largestFileName) {
      this.largeName.push(char);
      this.largeNameConst.push(char);
    }
  }

  ngOnInit() {
    this.filesOld = JSON.parse(sessionStorage.getItem('newFileNames'));
    console.log(this.filesOld);
    if (this.filesNew.length === 0) {
      for (let i = 0; i < this.filesOld.length; i++) {
        this.filesNew[i] = this.filesOld[i];
      }
    }
    this.largestName();
  }


  updateNamesWithString(newString, indexOld, indexNew) {
    for (const file of this.filesNew) {
      let fullString = '';
      if (indexNew > file.name.length) {
        indexNew = file.name.length;
      }
      if (indexNew === 0) {
        fullString = newString[indexOld] + file.name.substr(0, file.name.length);
      } else {
        fullString = file.name.substr(0, indexNew) + newString[indexOld] +
          file.name.substr(indexNew, file.name.length);
      }
      file.name = fullString;
      console.log(file.name);
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

  // remove from the strings array
  remove(index) {
    this.Strings = this.Strings.slice(0, index).concat(this.Strings.slice(index + 1, this.Strings.length));
  }

  // remove from the original filename
  removeOriginal(index) {
    // calling updateName to update the names of actual files
    this.removeStr(index, this.largeName[index].length);
    this.largeName = this.largeName.slice(0, index).concat(this.largeName.slice(index + 1, this.largeName.length));
  }

  drop(event: CdkDragDrop < string[] > ) {
    if (event.previousContainer === event.container) {
      // Do nothing
    } else {
      this.updateNamesWithString(event.previousContainer.data, event.previousIndex, event.currentIndex);
      // retrieve the data that needs to be transfered and store in temp
      const tempPreviousData = event.previousContainer.data[event.previousIndex];
      console.log(tempPreviousData);
      this.largeName.splice(event.currentIndex, 0, tempPreviousData);
    }
  }

  checkItemInLargename(index) {
    return this.largeNameConst.indexOf(this.largeName[index]) <= -1;
  }

}
