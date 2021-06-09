import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { TabsComponent } from "./tabs.component"

const routes: Routes = [
	{
		path: "",
		component: TabsComponent,
		children: [
			{
				path: "home",
				loadChildren: () =>
					import("../home/home.module").then((m) => m.HomeModule)
			},
			{
				path: "register",
				loadChildren: () =>
					import("../register/register.module").then((m) => m.RegisterModule)
			},
			{
				path: "",
				redirectTo: "home",
				pathMatch: "full"
			}
		]
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TabsRoutingModule {}
