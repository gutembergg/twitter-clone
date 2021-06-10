import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { COMPONENTES } from "./components"
import { IonicModule } from "@ionic/angular"
import { DIRECTIVES } from "./directives"

@NgModule({
	declarations: [...COMPONENTES, ...DIRECTIVES],
	imports: [CommonModule, IonicModule],
	exports: [...COMPONENTES, ...DIRECTIVES]
})
export class SharedModule {}
