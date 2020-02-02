import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';

// Tag Input
import { TagEmailModel, loadEmails, getEmails } from './TagEmailHelper';

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent implements OnInit {

  // Input tag
  public validators = [ Validators.email ];
  public errorMessages = {
    email : 'Introducir un email valido'
  };
  public separatorsKeysEmail = [ ';', ' ' ];
  public emails: TagEmailModel[] = [];
  public txtEmails = 'email@example.com;email@example.com;email@example.com;email@example.com';

  constructor() { }

  ngOnInit() {
    // this.emails = this.txtEmails.split(';');
    this.emails = loadEmails(this.txtEmails);
  }

  onEmailAdded(event) {
    console.log(this.emails);
    this.txtEmails = getEmails(this.emails);
    console.log(this.txtEmails);
  }
}
