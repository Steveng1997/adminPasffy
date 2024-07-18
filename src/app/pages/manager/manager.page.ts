import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

// Model
import { ModelManager } from 'src/app/core/models/manager';

// Services
import { ServiceManager } from 'src/app/core/services/manager';
import { serviceServices } from 'src/app/core/services/service';
import { ServiceTherapist } from 'src/app/core/services/therapist';
import { IonLoaderService } from 'src/app/core/services/ion-loader.service';

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

  count = 0
  mivar: boolean = false;

  managerModel: ModelManager = {
    activo: true
  }

  constructor(
    public router: Router,
    private platform: Platform,
    private ionLoaderService: IonLoaderService,
    private serviceManager: ServiceManager,
    private serviceTherapist: ServiceTherapist,
    private serviceService: serviceServices
  ) { }


  async ngOnInit() {
    await this.getAll()
  }

  getAll() {
    this.ionLoaderService.simpleLoader()
    this.serviceManager.getUsuarios().subscribe((rp: any) => {
      this.manager = rp

      for (let o = 0; o < rp.length; o++) {
        let company = rp[o].company
        this.serviceManager.getByCompany(company).subscribe((resp: any) => {
          this.manager[o]['countManager'] = resp.length

          this.serviceTherapist.getByCompany(company).subscribe((resp: any) => {
            this.manager[o]['countTherapist'] = resp.length

            this.serviceService.getByCompany(company).subscribe((rp: any) => {
              this.manager[o]['serviceCount'] = rp.length
              this.count++

              if (this.count == this.manager.length)
                this.ionLoaderService.dismissLoader()
            })
          })
        })
      }
    })
  }

  checkBox(event: any, id: number) {
    if (event.target.checked === true) {
      this.managerModel.activo = false
      this.serviceManager.updateActive(id, this.managerModel).subscribe((resp: any) => { })
    } else {
      this.managerModel.activo = true
      this.serviceManager.updateActive(id, this.managerModel).subscribe((resp: any) => { })
    }
  }
}
