import { Component, OnInit } from '@angular/core';
import { File} from '../classes/file';

@Component({
    selector: 'app-preview-big',
    templateUrl: './preview-big.component.html',
    styleUrls: ['./preview-big.component.css']
})
export class PreviewBigComponent implements OnInit {
    ogFiles: File[];
    newFiles: File[];

    constructor() { 
        //* hard-coded original file
        this.ogFiles = [{
            name: 'apple',
            ext: 'jpg',
            geoLocation: {
                longitude: '95.33276',
                latitude: '7.43563',
            },
            size: {
                value: 80.0,
                unit: 'KB',
            },
            owner: 'A',
            lastModifiedTimeStamp: '1558710195' // unixtimestamp
        },
        {
            name: 'grocery list',
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
            name: 'school note 201909',
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
            name: 'school note 201910',
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
                longitude: '115.74803',
                latitude: '31.03070'
            },
            size: {
                value: 800.3,
                unit: 'KB',
            },
            owner: 'E',
            lastModifiedTimeStamp: '1571998812'
        }];
        
        sessionStorage.setItem("oldFileNames", JSON.stringify(this.ogFiles));
    }

    ngOnInit() {
        this.getNewFileNames();
    }

    getNewFileNames() : void {
        this.newFiles = JSON.parse(sessionStorage.getItem("newFileNames"));
        if (this.newFiles == null) {
            this.newFiles = this.ogFiles;
        }
    }

}
