import { NgModule } from "@angular/core";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
    declarations:[
        SpinnerComponent,
        AlertComponent
    ],
    imports:[],
    providers:[],
    exports:[
        SpinnerComponent,
        AlertComponent
    ]
})
export class sharedModule{}