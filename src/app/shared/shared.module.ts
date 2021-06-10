import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { COMPONENTES } from "./components"
import { IonicModule } from "@ionic/angular"

@NgModule({
	declarations: [...COMPONENTES],
	imports: [CommonModule, IonicModule],
	exports: [...COMPONENTES]
})
export class SharedModule {}
