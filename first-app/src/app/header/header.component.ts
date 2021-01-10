import { Component, Output, EventEmitter } from "@angular/core"

@Component({
    selector: "app-header",
    templateUrl: "header.component.html"
})
export class HeaderComponent{
    @Output() menuItemSelected = new EventEmitter<string>();

    menuClicked(itemClicked: string){
        this.menuItemSelected.emit(itemClicked);
    }
}