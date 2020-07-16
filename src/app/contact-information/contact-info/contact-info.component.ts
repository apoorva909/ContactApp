import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {


  showData:boolean
  submitted = false;
  contactForm = new FormGroup({});
  constructor(private fb:FormBuilder) { }

  

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    })
  }

  get contactFormGetter(){
    return this.contactForm;
  }

  submitData() {
    if(!this.contactForm.pristine && this.contactForm.valid) {
      this.showData = true;
    }
  }

}
