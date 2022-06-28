import { Component } from '@angular/core';
 
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
 
 
 
@Component({
 
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
 
})
 
export class AppComponent {
 
public menuItems: MenuItemModel[] = [
 
    {
 
        text: 'File',
 
        items: [
 
            {text: 'Open'},
 
            {text: 'Save'},
 
            {text: 'Exit'}
 
        ]
 
    },
 
    {
 
        text: 'Edit',
 
        items: [
 
            {text: 'Cut'},
 
            {text: 'Copy'},
 
            {text: 'Paste'}
 
        ]
 
    },
 
    {
 
        text: 'View',
 
        items: [
 
            {text: 'Toolbar'},
 
            {text: 'Sidebar'}
 
        ]
 
    },
 
    {
 
        text: 'Tools',
 
        items: [
 
            {text: 'Spelling & Grammar'},
 
            {text: 'Customize'},
 
            {text: 'Options'}
 
        ]
 
    },
 
       {text: 'Go'},
 
       {text: 'Help'}
 
];
 
}
 


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/