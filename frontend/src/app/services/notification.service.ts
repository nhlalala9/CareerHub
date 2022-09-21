import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showError(ErrorMessage: any) {
    this.toastr.error(ErrorMessage,'Error',{positionClass: 'toast-top-center',progressBar: true,timeOut: 2000, easeTime: 300, easing: 'ease-in'});
  }
}
