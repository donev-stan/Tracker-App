import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { ThemeService } from 'src/shared/services/theme.service';

@Component({
  selector: 'tracker-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
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

  switchTheme({ value }: { value: string }) {
    this.themeService.switchTheme(value);
  }
}
