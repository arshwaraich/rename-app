import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // file: File;

  // Mock objects for filesOld
  file1 = {
    name: 'RomanKantor',
    ext: 'txt',
    geoLocation: {
        longitude: '15 10.324',
        latitude: '30 -23.456'
    },
    size: {
        value: 15,
        unit: 'kb'
    },
    owner: 'roman',
    lastModifiedTimeStamp: 'Wed 01-01-2019 6:00'
};

file2 = {
  name: 'ArshSingh',
  ext: 'txt',
  geoLocation: {
      longitude: '15 10.324',
      latitude: '30 -23.456'
  },
  size: {
      value: 30,
      unit: 'mb'
  },
  owner: 'arsh',
  lastModifiedTimeStamp: 'Thu 01-01-2019 6:00'
};

file3 = {
  name: 'ChaoyiWu',
  ext: 'txt',
  geoLocation: {
      longitude: '15 10.324',
      latitude: '30 -23.456'
  },
  size: {
      value: 20,
      unit: 'kb'
  },
  owner: 'chaoyi',
  lastModifiedTimeStamp: 'Fri 10-01-2019 6:00'
};

  // Mock Objects for filesNew
  file1new = {
    name: 'RomanKantor',
    ext: 'txt',
    geoLocation: {
        longitude: '15 10.324',
        latitude: '30 -23.456'
    },
    size: {
        value: 15,
        unit: 'kb'
    },
    owner: 'roman',
    lastModifiedTimeStamp: 'Wed 01-01-2019 6:00'
};

file2new = {
  name: 'ArshSingh',
  ext: 'txt',
  geoLocation: {
      longitude: '15 10.324',
      latitude: '30 -23.456'
  },
  size: {
      value: 30,
      unit: 'mb'
  },
  owner: 'arsh',
  lastModifiedTimeStamp: 'Thu 01-01-2019 6:00'
};

file3new = {
  name: 'ChaoyiWu',
  ext: 'txt',
  geoLocation: {
      longitude: '15 10.324',
      latitude: '30 -23.456'
  },
  size: {
      value: 20,
      unit: 'kb'
  },
  owner: 'chaoyi',
  lastModifiedTimeStamp: 'Fri 10-01-2019 6:00'
};

// arrays of mock objects
filesOld = [this.file1, this.file2, this.file3];
filesNew = [this.file1new, this.file2new, this.file3new];
// filesNew = [];

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


  swapChar(indexOld, indexNew) {

    // check which direction is the swap
    if (indexOld > indexNew) {
      for (const file of this.filesNew) {
        // check if any of the indexes out of the filename limit
        if (indexOld > file.name.length - 1) {
          indexOld = file.name.length - 1;
        } else if (indexNew > file.name.length - 1) {
          indexNew = file.name.length - 1;
        }
        console.log(file.name.length);
        console.log('New index: ' + indexNew + ' Old index: ' + indexOld);
        const tempString = file.name[indexOld];
        let str = '';
        // check for a special case when index is 0
        if (indexNew === 0 && indexOld !== 0) {
          str = tempString + file.name.substr(0, indexNew + 1) +
          file.name.substr(indexNew + 1, indexOld - 1) +
          file.name.substr(indexOld + tempString.length);
        } else {
          str = file.name.substr(0, indexNew) + tempString +
          file.name.substr(indexNew, indexOld - indexNew) +
          file.name.substr(indexOld + tempString.length);
        }

        file.name = str;
        console.log(file.name);
      }
  } else { // when swaping in a different direction
    for (const file of this.filesNew) {
      // check if any of the indexes out of the filename limit
      if (indexOld > file.name.length - 1) {
        indexOld = file.name.length - 1;
      } else if (indexNew > file.name.length - 1) {
        indexNew = file.name.length - 1;
      }

      console.log('fileName lenght: ' + file.name.length);
      console.log('New index: ' + indexNew + ' Old index: ' + indexOld);
      const tempString = file.name[indexOld];
      let str = '';

      // check for a special case when index is 0
      if (indexOld === 0) {
        str = file.name.substr(1, indexNew) + tempString +
        file.name.substr(indexNew + tempString.length);
      } else {
        str = file.name.substr(0, indexOld) +
        file.name.substr(indexOld + 1, indexNew - indexOld) + tempString +
        file.name.substr(indexNew + tempString.length);
      }

      file.name = str;
      console.log(file.name);
    }

  }

  }

  removeChar(index) {
    let tempIndex = 0;
    for (const file of this.filesNew) {
      if (index > file.name.length - 1) {
        if (file.name.length > 1) {
          tempIndex = file.name.length - 1;
          file.name = file.name.slice(0, tempIndex).concat(file.name.slice(tempIndex + 1, file.name.length));
        }
       } else {
         if (file.name.length > 1) {
          tempIndex = index;
          file.name = file.name.slice(0, tempIndex).concat(file.name.slice(tempIndex + 1, file.name.length));
         }
       }
    }
    for (const file of this.filesNew) {
      console.log(file.name);
    }

  }

  onSubmit() {
   this.Strings.push(this.str);
   this.str = '';
  }

  reset() {
    this.Strings = [];
    this.str = '';
    this.largeName = this.largeNameConst;
    for (let i = 0; i < this.filesOld.length; i++) {
      this.filesNew[i] = this.filesOld[i];
    }

  }

  // remove from the strings array
  remove(index) {
    this.Strings = this.Strings.slice(0, index).concat(this.Strings.slice(index + 1, this.Strings.length));
  }

  // remove from the original filename
  removeOriginal(index) {
    // calling updateName to update the names of actual files
    this.largeName = this.largeName.slice(0, index).concat(this.largeName.slice(index + 1, this.largeName.length));
    this.removeChar(index);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.swapChar(event.previousIndex, event.currentIndex);
    } else {
      this.updateNamesWithString(event.previousContainer.data, event.previousIndex, event.currentIndex);
      // retrieve the data that needs to be transfered and store in temp
      const tempPreviousData = event.previousContainer.data[event.previousIndex];
      console.log(tempPreviousData);
      // loop through the data and split it into chars
      for (let i = 0 ; i < tempPreviousData.length; i++) {
        event.previousContainer.data[event.previousIndex] = tempPreviousData.charAt(i);
        console.log(event.previousContainer.data[i]);

        transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex + i, // previous index
                        event.currentIndex + i); // current index
    }
  }
  }

}
