import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactConfigApi, ContactElement } from './shared';

@Component({
  selector: 'cv-container-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CvContainerContactComponent implements OnInit {

  title: string;
  contactList: Array<ContactElement>;

  constructor(private contactConfigApi: ContactConfigApi) { }

  ngOnInit() {
    this.contactConfigApi.getTitle().subscribe(val => this.title = val);

    // this.contactConfigApi.getContactlist().subscribe(val => this.contactList = val);

    this.contactConfigApi.getContactlist().subscribe(val => {

      val.forEach(item => {

        console.log('item:::', item);

        this.contactList.push({
          icon: item.icon,
          iconClass: item.iconClass ? item.iconClass : item.iconClass = 'material-icons md-12',
          contactText: item.contactText
        });
      });
      
      console.log('list:::', this.contactList)

    });
  }
}
