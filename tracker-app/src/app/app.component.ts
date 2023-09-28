import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { ThemeService } from 'src/shared/services/theme.service';

@Component({
  selector: 'tracker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  groupedThemes: SelectItemGroup[];

  constructor(private themeService: ThemeService) {
    this.groupedThemes = [
      {
        label: 'Bootstrap',
        items: [
          { label: 'Dark Blue', value: 'bootstrap4-dark-blue' },
          { label: 'Dark Purple', value: 'bootstrap4-dark-purple' },
          { label: 'Light Blue', value: 'bootstrap4-light-blue' },
          { label: 'Light Purple', value: 'bootstrap4-light-purple' },
        ],
      },
      {
        label: 'Material',
        items: [
          { label: 'Dark Indigo', value: 'md-dark-indigo' },
          { label: 'Dark Purple', value: 'md-dark-deeppurple' },
          { label: 'Light Indigo', value: 'md-light-indigo' },
          { label: 'Light Purple', value: 'md-light-deeppurple' },
        ],
      },
    ];
  }

  ngOnInit() {
    this.themeService.switchTheme('bootstrap4-dark-blue');
  }

  switchTheme({ value }: { value: string }) {
    this.themeService.switchTheme(value);
  }
}
