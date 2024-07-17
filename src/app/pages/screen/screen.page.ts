import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.page.html',
  styleUrls: ['./screen.page.scss'],
})
export class ScreenPage implements OnInit {

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['admin']);
    }, 1500);
  }

}
