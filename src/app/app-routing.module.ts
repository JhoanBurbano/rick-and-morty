import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    redirectTo: "characters"
  },
  {
    path: "characters",
    loadChildren: () =>
      import("./modules/characters/characters.module").then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: "locations",
    loadChildren: () =>
      import("./modules/location/location.module").then(
        (m) => m.LocationModule
      ),
  },
  {
    path: "episodes",
    loadChildren: () =>
      import("./modules/episode/episode.module").then((m) => m.EpisodeModule),
  },
  { path: "**", pathMatch:"full", redirectTo: "/characters" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
