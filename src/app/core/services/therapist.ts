import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Models
import { ModelTherapist } from '../models/therapist';

@Injectable({
    providedIn: 'root'
})

export class ServiceTherapist {

    API_URL = 'https://brave-marvelous-marquis.glitch.me/api/terapeuta'

    constructor(
        public router: Router,
        private http: HttpClient
    ) { }

    getByCompany(company: string) {
        return this.http.get(`${this.API_URL}/getAdminActive/${company}`);
    }
}