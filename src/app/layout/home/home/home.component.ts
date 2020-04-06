import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    // this.alertService
    //   .show({ title: 'Esti sigur ca doresti sa golesti cosul de cumparaturi?', showCancelButton: true, cancelButtonText: 'Anuleaza' })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }
}
