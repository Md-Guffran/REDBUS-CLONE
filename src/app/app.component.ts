import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  currentLanguage: string = 'en';
  dropdownOpen: boolean = false;
  languages: { code: string, label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
  ];
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
    // this.translate.use(this.currentLanguage);
  }
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  switchLanguage(languageCode: string) {
    this.currentLanguage = languageCode;
    this.translate.use(languageCode);
    this.dropdownOpen = false;
  }
  changeLanguage(event: any) {
    const selectedLang = event.target.value;
    this.translate.use(selectedLang);

  
}


}