import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static numberValid(decimalPlaces: number): ValidatorFn{
    return (control:AbstractControl) : ValidationErrors | null => {

      const value = control.value;

      if (!value) {
        return null;
      }

      const isNumber = !isNaN(value)

      const decimals = this.countDecimals(value)

      console.log(isNumber)
      console.log(decimals)

      return !(isNumber && decimals <= decimalPlaces) ? {numberValid:true}: null;
    }
  }

  static countDecimals = function (value: number) {
    if ((value % 1) != 0)
      return value.toString().split(".")[1].length;
    return 0;
  };

}
