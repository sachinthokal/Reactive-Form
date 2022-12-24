import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Reactive-Form';

  Uname: string = 'Sachin';
  Pass: string = '12345';
  Mob: number = 88171399;

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
    checkme: new FormControl('', [Validators.required]),
  });

  onFormSubmit() {
    console.log('Name ' + this.userForm.value['username']);
    console.log(this.userForm.value);
    console.log('Validation Status: ' + this.userForm.status);
  }
}
