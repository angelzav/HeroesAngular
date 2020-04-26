import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: "app-heroes-search",
  templateUrl: "./heroes-search.component.html",
  styleUrls: ["./heroes-search.component.css"],
})
export class HeroesSearchComponent implements OnInit {
  heroes: any = {};
  texto: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.texto = params["texto"];
      this.heroes = this.heroeService.getHeroesSearch(params["texto"]);
      console.log(this.heroes);
    });
  }

  verHeroe(idx: number) {
    this._router.navigate(["/heroe", idx]);
    //console.log(idx);
  }
}
