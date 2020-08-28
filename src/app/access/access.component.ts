import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
  firstName: string;
  lastName: string;
  age: number;
  underage: boolean | null;

  constructor() { }

  ngOnInit(): void {
    this.getDataFromSession();
  }

  /**
   * Restore data from session
   */
  getDataFromSession() {
    this.firstName = sessionStorage.getItem('firstName');
    this.lastName = sessionStorage.getItem('lastName');
    const ageString = sessionStorage.getItem('age');
    this.age = Number(ageString);
  }

  /**
   * Check if user is an adult
   * @param age
   */
  checkAge(age: number) {
    this.underage = age < 18;
  }

}
