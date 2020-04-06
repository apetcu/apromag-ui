import { Directive, Input, HostBinding } from '@angular/core';
@Directive({
  selector: 'img[default]',
  host: {
    '(error)': 'updateUrl()',
    '(load)': 'load()',
    '[src]': 'src'
  }
})
export class DefaultImageDirective {
  @Input()
  src: string;
  @Input()
  default: string = 'assets/images/default_profile.png';
  @HostBinding('class')
  className;

  updateUrl() {
    this.src = this.default;
  }
  load() {
    this.className = 'image-loaded';
  }
}
