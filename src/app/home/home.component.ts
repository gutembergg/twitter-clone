import { Component, OnInit } from "@angular/core"
import { tap } from "rxjs/operators"
import { UserService } from "../services/user/user.service"

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	users$: any
	constructor(private userservice: UserService) {}

	ngOnInit() {
		this.users$ = this.userservice._users$
			.pipe(tap((user) => console.log("user: ", user)))
			.subscribe((res) => (this.users$ = res))
	}
}
