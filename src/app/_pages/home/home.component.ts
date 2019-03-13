import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactsService } from 'src/app/_services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myPhoto: any;
  contacts: any[] = [];
  contactObj: {
    id: number, f_name: '',
    l_name: '', company: '',
    email: '', cell_phone: '',
    office_phone: '', dof: ''
  };

  contactrt: {
    id: number, f_name: '',
    l_name: '', company: '',
    email: '', cell_phone: '',
    office_phone: '', dof: ''
  };

  @ViewChild('f_name') f_name: ElementRef;
  @ViewChild('l_name') l_name: ElementRef;
  @ViewChild('company') company: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('cell_phone') cell_phone: ElementRef;
  @ViewChild('office_phone') office_phone: ElementRef;
  @ViewChild('dof') dof: ElementRef;

  @ViewChild('f_namecrt') f_namecrt: ElementRef;
  @ViewChild('l_namecrt') l_namecrt: ElementRef;
  @ViewChild('companycrt') companycrt: ElementRef;
  @ViewChild('emailcrt') emailcrt: ElementRef;
  @ViewChild('cell_phonecrt') cell_phonecrt: ElementRef;
  @ViewChild('office_phonecrt') office_phonecrt: ElementRef;
  @ViewChild('dofcrt') dofcrt: ElementRef;

  constructor() { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contacts = [
      {
        id: 0,
        f_name: 'Khutso',
        l_name: 'Matjipa',
        company: 'myCompany',
        email: 'example@email.com',
        cell_phone: '0712345678',
        office_phone: '0112345678',
        dof: '19-04-1994'
      },
      {
        id: 1,
        f_name: 'Tebogo',
        l_name: 'Kgari',
        company: 'myCompany',
        email: 'example2@email.com',
        cell_phone: '0715623478',
        office_phone: '0115623478',
        dof: '06-06-1997'
      }
    ];
    // for (let i = 0; i < res.length; i++) {
    //   let obj = {
    //     id: res[i].id,
    //     f_name: res[i].f_name,
    //     l_name: res[i].l_name,
    //     company: res[i].company,
    //     email: res[i].email,
    //     cell_phone: res[i].cell_phone,
    //     office_phone: res[i].office_phone,
    //     dof: res[i].dof,
    //   }
    // }
  }

  viewContact($contact) {
    this.contactObj = $contact;
    this.f_name.nativeElement.value = $contact.f_name;
    this.l_name.nativeElement.value = $contact.l_name;
    this.company.nativeElement.value = $contact.company;
    this.email.nativeElement.value = $contact.email;
    this.cell_phone.nativeElement.value = $contact.cell_phone;
    this.office_phone.nativeElement.value = $contact.office_phone;
    this.dof.nativeElement.value = $contact.dof;
    console.log('contactObj: ', this.contactObj);
  }

  public deleteContact(contactId) {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log('out');
      if (this.contacts[i].id === contactId) {
        console.log('in');
        this.contacts.splice(i, 1);
      }
    }
  }

  public updateContact() {
    // tslint:disable-next-line: prefer-const
    let obj = {
      id: this.contactObj.id,
      f_name: this.f_name.nativeElement.value,
      l_name: this.l_name.nativeElement.value,
      company: this.company.nativeElement.value,
      email: this.email.nativeElement.value,
      cell_phone: this.cell_phone.nativeElement.value,
      office_phone: this.office_phone.nativeElement.value,
      dof: this.dof.nativeElement.value
    };
    console.log('obj: ', obj);
    this.contacts.splice(this.contactObj.id, 1, obj);
  }

  public createContact() {
    const obj = {
      id: this.contacts.length,
      f_name: this.f_namecrt.nativeElement.value,
      l_name: this.l_namecrt.nativeElement.value,
      company: this.companycrt.nativeElement.value,
      email: this.emailcrt.nativeElement.value,
      cell_phone: this.cell_phonecrt.nativeElement.value,
      office_phone: this.office_phonecrt.nativeElement.value,
      dof: this.dofcrt.nativeElement.value
    };
    console.log('obj: ', obj);
    this.contacts.splice(this.contacts.length, 0, obj);
  }
}
