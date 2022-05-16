import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { INIT, select, Store } from "@ngrx/store";
import { pipe } from "rxjs";
import { CharactersService } from "src/app/modules/characters/characters.service";
import { character } from "src/app/modules/characters/interfaces/characters.interface";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit {
  @Input() img: string | undefined;
  @Input() name: string | undefined;
  @Input() status: string | undefined;
  @Input() species: string | undefined;
  @Input() gender: string | undefined;
  @Input() air_date: string | undefined;
  @Input() episode: string | undefined;
  @Input() characters: Array<string> = [];
  @Input() created: string | undefined;
  @Input() id: number = 0;
  @Input() typeLocation: string | undefined;
  @Input() dimension: string | undefined;
  @Input() type: "character" | "episode" | "location" | "" = "";
  isVisible: boolean = false;
  query:string= "";
  listCaharacters:Array<character> =[]

  constructor(private router: Router, private store: Store, private charactersServices: CharactersService) {}

  ngOnInit(): void {
    if (this.type !== "character") {
      this.query = this.characters.map((c:string)=>(c.split('character/')[1])).join(',')
      this.charactersServices.getMultiCharacters(this.query).subscribe(
        (res: Array<character> | character )=>{
          this.listCaharacters = Array.isArray(res)? res : [res];
        }
      )
    }
  }

  
  getDetails(id: number) {
    if (this.type === "character") {
      this.router.navigate(["/characters/details", id]);
    }
  }

  changeVisible() {
    if(!this.isVisible){
      setTimeout(()=>this.isVisible ? this.changeVisible() : null,6000)
    }
    this.isVisible = !this.isVisible;
  }
}
