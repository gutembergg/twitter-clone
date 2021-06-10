import { Component, OnInit } from "@angular/core"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { CameraService } from "../services/camera/camera.service"
import { UserService } from "../services/user/user.service"

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
	avatar: any

	form: FormGroup

	constructor(
		private cameraService: CameraService,
		private formBuider: FormBuilder,
		private userService: UserService
	) {}

	ngOnInit() {
		this.form = this.formBuider.group({
			name: ["", Validators.required]
		})
	}

	async takePhoto() {
		const avatarUrl = await this.cameraService.takePhoto()
		this.avatar = avatarUrl
		console.log("avatar: ", this.avatar)
	}

	onSubmit() {
		const user = {
			...this.form.value,
			img: this.avatar
		}
		console.log("User: ", user)

		this.userService.registerUsers(user)
	}
}
