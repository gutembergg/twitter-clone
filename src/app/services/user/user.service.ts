import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { BehaviorSubject, Observable } from "rxjs"
import { map } from "rxjs/operators"
import { User } from "src/app/interfaces/user"

@Injectable({
	providedIn: "root"
})
export class UserService {
	users$: User[]

	userSubject$: BehaviorSubject<any> = new BehaviorSubject([])
	_users$: Observable<User[]> = this.userSubject$.asObservable()

	constructor(private _http: HttpClient) {
		this.getUsers()
	}

	getUsers() {
		this._http
			.get(
				"https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/tweets.json"
			)
			.pipe(map((user) => Object.entries(user)))
			.subscribe((res) => this.userSubject$.next(res[0][1]))
	}
}
