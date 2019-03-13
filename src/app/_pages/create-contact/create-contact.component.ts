import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  @ViewChild('f_name') f_name: ElementRef;
  @ViewChild('l_name') l_name: ElementRef;
  @ViewChild('company') company: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('cell_phone') cell_phone: ElementRef;
  @ViewChild('office_phone') office_phone: ElementRef;
  @ViewChild('dof') dof: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public createContact() {
    // tslint:disable-next-line: prefer-const
        let obj = {
                    id: 1,
                    f_name: this.f_name.nativeElement.value,
                    l_name: this.l_name.nativeElement.value,
                    company: this.company.nativeElement.value,
                    email: this.email.nativeElement.value,
                    cell_phone: this.cell_phone.nativeElement.value,
                    office_phone: this.office_phone.nativeElement.value,
                    dof: this.dof.nativeElement.value
                  };
        console.log('obj: ', obj);
        // this.contacts.splice(this.contactObj.id, 1, obj);
      }

}
