import { Injectable } from "@angular/core"
import { AngularFirestore } from "@angular/fire/firestore"
import { AngularFireStorage } from "@angular/fire/storage"
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera"

@Injectable({
	providedIn: "root"
})
export class CameraService {
	constructor(
		private firestore: AngularFirestore,
		private storage: AngularFireStorage
	) {}

	async takePhoto(): Promise<any> {
		const imgUrl = await Camera.getPhoto({
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera,
			quality: 100
		})

		const url = this.saveAvatar(imgUrl.webPath)

		return url
	}

	async saveAvatar(webPath: string) {
		const timestamp = Date.now()
		const blob = await this.readAsBlob(webPath)
		const ref = this.storage.ref(`${timestamp}avatar`)
		await ref.put(blob)

		const url = await ref.getDownloadURL().toPromise()

		return url
	}

	async readAsBlob(webPath: string) {
		const response = await fetch(webPath)
		const blob = await response.blob()

		return blob
	}
}
