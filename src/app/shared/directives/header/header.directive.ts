import {
	AfterViewInit,
	Directive,
	HostListener,
	Input,
	Renderer2
} from "@angular/core"
import { DomController, isPlatform } from "@ionic/angular"

@Directive({
	selector: "[appHeader]"
})
export class HeaderDirective implements AfterViewInit {
	@Input("appHeader") header: any

	private headerHeight = isPlatform("ios") ? 44 : 56
	private children: any

	constructor(private renderer: Renderer2, private domCtrl: DomController) {}

	ngAfterViewInit() {
		console.log("this.header: ", this.header)
		this.header = this.header.el
		this.children = this.header.children
	}

	@HostListener("ionScroll", ["$event"]) onScrollContent($event) {
		const scrollTop: number = $event.detail.scrollTop

		let newPosition = -scrollTop

		if (newPosition < -this.headerHeight) {
			newPosition = -this.headerHeight
			console.log("position: ", newPosition)
		}

		let newOpacity = 1 - newPosition / -this.headerHeight

		this.domCtrl.write(() => {
			this.renderer.setStyle(this.header, "top", `${newPosition}px`)
			for (let child of this.children) {
				this.renderer.setStyle(child, "opacity", newOpacity)
			}
		})
	}
}
