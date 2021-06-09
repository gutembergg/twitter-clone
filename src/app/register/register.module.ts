import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { RegisterRoutingModule } from "./register-routing.module"
import { RegisterComponent } from "./register.component"
import { ReactiveFormsModule } from "@angular/forms"
import { IonicModule } from "@ionic/angular"

@NgModule({
	declarations: [RegisterComponent],
	imports: [
		CommonModule,
		RegisterRoutingModule,
		ReactiveFormsModule,
		IonicModule
	]
})
export class RegisterModule {}
