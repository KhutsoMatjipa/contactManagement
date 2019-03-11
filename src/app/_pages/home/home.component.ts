import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/_services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contacts: any[] = [];
  contactObj:
    {id: number, f_name: String, l_name: String, company: String, email: String, cell_phone: String, office_phone: String, dof: String};
  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts()
      .subscribe((res: any []) => {
        this.contacts = res;
        console.log('Contacts: ', res);

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
      });
  }

  viewContact($contact) {
    this.contactObj = $contact;
  }

  public deleteContact(contactId) {

    console.log('Deleting contact ID: ', contactId);

    return this.contactService.deleteContact(contactId);
  }

  public updateContact(contact:
    {id: number, f_name: String, l_name: String, company: String, email: String, cell_phone: String, office_phone: String, dof: String}) {
// tslint:disable-next-line: prefer-const
    let newContact:
    {id: number, f_name: String, l_name: String, company: String,
      email: String, cell_phone: String, office_phone: String, dof: String
    } = {id: contact.id, f_name: 'Khutso Fanny', l_name: 'Matjipa', company: 'Company',
     email: 'example@email.com', cell_phone: '+27712345678', office_phone: '+27112345678', dof: '19-04-1994'};

     console.log('update: ', contact);
     console.log('update: ', newContact);

    return this.contactService.updateContact(newContact);
  }

  public createContact(contact) {

    console.log('create: ', contact);

    return this.contactService.createContact(contact);
}

}
