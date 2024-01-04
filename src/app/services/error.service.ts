import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private toastr: ToastrService) {}

  handleError(error: any) {
    console.error('Error:', error);
    this.toastr.error('An error occurred. Please try again later.');
  }
}
