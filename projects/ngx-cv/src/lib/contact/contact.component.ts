import { Component, OnInit } from '@angular/core';
import { ContactConfigApi, ContactElement } from './shared';

@Component({
  selector: 'fw-container-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class FwContainerContactComponent implements OnInit {

  title: string;
  contactList: Array<ContactElement>;

  constructor(private contactConfigApi: ContactConfigApi) { }

  ngOnInit() {
    // Get configurated title.
    this.contactConfigApi.getTitle().subscribe(val => this.title = val);
    
    // Get defined contact elements.
    this.contactConfigApi.getContactlist().subscribe(val => this.contactList = val);
  }
}
