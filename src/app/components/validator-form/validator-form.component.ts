import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validator-form',
  templateUrl: './validator-form.component.html',
  styleUrls: ['./validator-form.component.scss'],
})
export class ValidatorFormComponent  implements OnInit {
  @Input() control: FormControl | null = null;
  @Input() messages: any = {};


  MostrarErro(): boolean{
    return this.control !== null && this.control.invalid && (this.control.dirty || this.control.touched);
  }

  getErrorMessages(): string {
    if (this.control) {
      for (const validation of this.messages) {
        if (this.control.hasError(validation.type)) {
          return validation.message;
        }
      }
    }
    return '';
  }
  constructor() { }

  ngOnInit() {}

}
