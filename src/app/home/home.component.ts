import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"
import { User } from "../interfaces/user"
import { UserService } from "../services/user/user.service"

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	users$: any
	users: Observable<User[]>
	segment = "home"

	tweets: any

	slideOptions = {
		slidesPerView: 4,
		spaceBetween: 10,
		slidesOffsetBefore: 0,
		freeMode: true
	}

	constructor(private userservice: UserService) {}

	ngOnInit() {
		this.users$ = this.userservice._users$
			.pipe(tap((user) => console.log("user: ", user)))
			.subscribe((res) => (this.users$ = res))

		this.users = this.userservice.getFirebaseUsers()

		this.tweets = this.userservice.getTweets()
	}
}
