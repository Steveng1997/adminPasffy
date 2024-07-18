import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import Swal from 'sweetalert2';
import { Platform } from '@ionic/angular';

// Model
import { ModelManager } from 'src/app/core/models/manager';

// Services
import { ServiceManager } from 'src/app/core/services/manager';
import { serviceServices } from 'src/app/core/services/service';
import { ServiceTherapist } from 'src/app/core/services/therapist';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})

export class ManagerPage implements OnInit {

  page!: number
  manager: any
  therapistCount = 0
  managerCount = 0
  serviceCount = 0

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private platform: Platform,
    // private ionLoaderService: IonLoaderService,
    private serviceManager: ServiceManager,
    private serviceTherapist: ServiceTherapist,
    private serviceService: serviceServices
  ) { }


  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.serviceManager.getUsuarios().subscribe((rp: any) => {
      this.manager = rp

      if (rp) {

        for (let o = 0; o < rp.length; o++) {
          let company = rp[o].company
          this.serviceManager.companyByDistinct(company).subscribe((rp: any) => {
            this.serviceManager.getByCompany(company).subscribe((resp: any) => {
              this.manager[o]['countManager'] = resp.length

              this.serviceTherapist.getByCompany(company).subscribe((resp: any) => {
                this.manager[o]['countTherapist'] = resp.length

                this.serviceService.getByCompany(company).subscribe((rp: any) => {
                  this.manager[o]['serviceCount'] = rp.length
                })
              })
            })
          })
        }
      }
    })
  }

  aqui(event: any) {
    debugger
  }
}
