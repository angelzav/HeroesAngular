import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: "app-heroes-search",
  templateUrl: "./heroes-search.component.html",
  styleUrls: ["./heroes-search.component.css"],
})
export class HeroesSearchComponent implements OnInit {
  heroes: Heroe[] = [];
  texto: string;
  @Input() index: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      //this.texto = params["texto"];
      this.heroes = this.heroeService.getHeroesSearch(params["texto"]);
      console.log(this.heroes);
    });
  }

  verHeroe() {
    this._router.navigate(["/heroe", this.index]);
    console.log(this.index);
  }
}
