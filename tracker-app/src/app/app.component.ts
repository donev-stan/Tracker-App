import { Component } from '@angular/core';
import { ThemeService } from 'src/shared/services/theme.service';

@Component({
  selector: 'tracker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  switchTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
