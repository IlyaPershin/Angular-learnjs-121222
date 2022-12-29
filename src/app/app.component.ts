import { Component, ViewChild, ElementRef } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';
import { PopupComponent } from './shared/popup/popup.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	readonly applicationConfig = applicationConfigMock;

	// isSidenavOpened = false;

	// onMenuClick() {
	// 	this.isSidenavOpened = !this.isSidenavOpened;
	// }

	@ViewChild('popup')
	private popup: PopupComponent | undefined;

	@ViewChild('popupTextInput', {read: ElementRef, static: false})
	private popupTextInput: ElementRef | undefined;

	@ViewChild('popupText', {read: ElementRef, static: false})
	private popupText: ElementRef | undefined;
	
	openPopup() {
		if (!this.popup?.visible) {
			let text: String = this.popupTextInput?.nativeElement.value
			if (this.popupText && text != '') {
				this.popupText.nativeElement.innerHTML = this.popupTextInput?.nativeElement.value;
				this.popup?.toggle();
			}
		} else {
			this.popup?.toggle();
		}
	}
}
