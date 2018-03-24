import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search-template',
    templateUrl: './component.html',
    styleUrls: ['./component.scss']
})

export class SearchTemplateComponent implements OnInit {
    
    public message: string = '';

    constructor() { }

    setMessage(newMessage: string) {
        this.message = newMessage;
    }

    clearMessage() {
        this.message = '';
    }

    ngOnInit() { }

}