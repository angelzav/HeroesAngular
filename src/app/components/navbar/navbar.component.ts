import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  heroesSearch: any = {};

  constructor(private _router: Router, private _heroeService: HeroesService) {}

  ngOnInit(): void {}

  buscarHeroe(texto: string) {
    this._router.navigate(["/heroes-serach", texto]);
  }
}
