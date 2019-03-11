import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  SERVER_URL: String = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public getContacts() {
    return this.httpClient.get(this.SERVER_URL + 'contacts');
  }

  public getContact(contactId) {
    return this.httpClient.get(this.SERVER_URL + 'contacts/' + `${contactId}`);
  }
  public createContact(contact:
  {id: number, f_name: String, l_name: String, company: String, email: String, cell_phone: String, office_phone: String, dof: String}) {

      return this.httpClient.post(`${this.SERVER_URL}`  + 'contacts/', contact);
  }

  public deleteContact(contactId) {
      return this.httpClient.delete(`${this.SERVER_URL + 'contacts'}/${contactId}`);
  }
  public updateContact(contact:
  {id: number, f_name: String, l_name: String, company: String, email: String, cell_phone: String, office_phone: String, dof: String}) {
      return this.httpClient.put(this.SERVER_URL + 'contacts/' + `${contact.id}`, contact);
  }

}
