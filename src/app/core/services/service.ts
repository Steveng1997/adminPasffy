import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// Models
import { ModelManager } from '../models/manager';

@Injectable({
    providedIn: 'root'
})

export class serviceServices {

    API_URL = 'https://brave-marvelous-marquis.glitch.me/api/servicio'

    constructor(
        public router: Router,
        private http: HttpClient
    ) { }

    getByCompany(company: string) {
        return this.http.get(`${this.API_URL}/getCompany/${company}`);
    }
}