import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailJSResponseStatus } from '@emailjs/browser';
// import * as emailjs from 'emailjs';
// import * as SomeLibrary from 'some-library';
import * as emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
   
form : FormGroup = this.fb.group({
  from_name:'',
  to_name:'admin',
  from_email:'',
  sujet:'',
  subjectif:'',
  message:'',
});


constructor(private fb:FormBuilder  , private router:Router ) {}
contactForm!: FormGroup;
async send() {
  emailjs.init('QhWT60xdv3oiYCVQX');
  let response = await emailjs.send("service_h1t1w3f","template_chbljq8", {
    from_name: this.contactForm.value.from_name,
    to_name: this.form.value.to_name,
    from_email: this.contactForm.value.from_email,
    sujet:  this.contactForm.value.sujet,
    message: this.contactForm.value.message,
  });
  alert('Successful');
  this.contactForm.reset(); 
}
// async send() {
//   emailjs.init('QhWT60xdv3oiYCVQX');
//   let response = await emailjs.send("service_h1t1w3f", "template_chbljq8", {
//     from_name: this.contactForm.value.from_name,
//     from_email: this.contactForm.value.from_email,
//     sujet: this.contactForm.value.sujet,
//     message: this.contactForm.value.message,
//   });
//   alert('Message envoyé avec succès');
//   this.contactForm.reset(); 
// }














ngOnInit(): void {
  this.contactForm = this.fb.group({
    from_name: ['', Validators.required],
    to_name: ['', Validators.required], 
    from_email: ['', [Validators.required, Validators.email]],
    sujet: ['', Validators.required],
    subjectif: ['', Validators.required], 
    message: ['', Validators.required]
  });
}
 
}








// async send() {
//   emailjs.init('QhWT60xdv3oiYCVQX')
//   let response= await emailjs.send("service_h1t1w3f","template_chbljq8", {
//     from_name: this.form.value.from_name,
//     to_name: this.form.value.to_name,
//     from_email: this.form.value.from_email,
//     sujet:this.form.value.sujet,
//     subjectif: this.form.value.subjectif, 
//     message: this.form.value.message,
//   });
//   alert('successful '); 
//   this.form.reset();
// }