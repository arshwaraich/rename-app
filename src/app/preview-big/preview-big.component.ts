import { Component, OnInit } from '@angular/core';
import { File} from '../classes/file';
import {Location} from '@angular/common';

@Component({
    selector: 'app-preview-big',
    templateUrl: './preview-big.component.html',
    styleUrls: ['./preview-big.component.css']
})
export class PreviewBigComponent implements OnInit {
    ogFiles: File[];
    newFiles: File[];

    constructor(
        private location: Location
    ) {}

    ngOnInit() {
        this.getFileNames();
    }

    getFileNames(): void {
        this.ogFiles = JSON.parse(sessionStorage.getItem('files'));
        this.newFiles = JSON.parse(sessionStorage.getItem('newfiles'));
    }

    goBack(): void {
        this.location.back();
    }

}
