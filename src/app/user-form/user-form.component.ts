import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  /**
   * Set form
   */
  userForm = this.fb.group({
    firstName: ['', Validators.pattern('[a-zA-z]*')],
    lastName: ['', Validators.pattern('[a-zA-z]*')],
    age: [''],
  });

  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get age() {
    return this.userForm.get('age');
  }

  /**
   * Store data in session
   */
  onSubmit() {
    sessionStorage.setItem('firstName', this.firstName.value);
    sessionStorage.setItem('lastName', this.lastName.value);
    sessionStorage.setItem('age', this.age.value);
    this.router.navigate(['access']);
  }

}
