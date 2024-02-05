import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavBarComponent } from "./components/side-nav-bar/side-nav-bar.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { CardsComponent } from "./components/cards/cards.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ApiGitService } from './services/api-git.service';
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [ApiGitService],
    imports: [RouterOutlet, SideNavBarComponent, SearchBarComponent, CardsComponent, HttpClientModule, ThemeToggleComponent]
})
export class AppComponent {
  title = 'ladra-search';

}
