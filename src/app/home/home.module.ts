import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { HomeRoutingModule } from "./home-routing.module"
import { HomeComponent } from "./home.component"
import { IonicModule } from "@ionic/angular"
import { FormsModule } from "@angular/forms"
import { SharedModule } from "../shared/shared.module"

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		IonicModule,
		FormsModule,
		SharedModule
	]
})
export class HomeModule {}
