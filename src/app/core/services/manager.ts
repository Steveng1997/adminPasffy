import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Models
import { ModelManager } from '../models/manager';

@Injectable({
  providedIn: 'root'
})

export class ServiceManager {

  API_URL = 'https://brave-marvelous-marquis.glitch.me/api/encargada'

  constructor(
    public router: Router,
    private http: HttpClient
  ) { }

  getUsuarios() {
    return this.http.get(`${this.API_URL}/getAdmin`);
  }

  getByCompany(company: string) {
    return this.http.get(`${this.API_URL}/getAdminActive/${company}`);
  }

  companyByDistinct(company: string) {
    return this.http.get(`${this.API_URL}/companyDistinct/${company}`);
  }
}