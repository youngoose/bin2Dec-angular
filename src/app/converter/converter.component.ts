import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  bin2DecForm = new FormGroup({
    binary: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-1]+$/)
    ]),
    decimal: new FormControl()
  });

  get binary() {
    return this.bin2DecForm.controls.binary;
  }

  get decimal() {
    return this.bin2DecForm.controls.decimal;
  }

  convert() {
    if (this.binary.invalid) {
      alert('Please enter a valid binary number');
      this.bin2DecForm.reset();
      return;
    }
    this.decimal.setValue(parseInt(this.binary.value, 2));
  }

  clear() {
    this.bin2DecForm.reset();
  }
}
