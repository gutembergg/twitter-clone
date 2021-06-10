import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { IonicModule } from "@ionic/angular"
import { AngularFireModule } from "@angular/fire"
import { AngularFirestoreModule } from "@angular/fire/firestore"
import { environment } from "src/environments/environment"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		IonicModule.forRoot(),
		HttpClientModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		ReactiveFormsModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
