import {
	AfterViewInit,
	Directive,
	HostListener,
	Input,
	Renderer2
} from "@angular/core"
import { DomController, isPlatform } from "@ionic/angular"

@Directive({
	selector: "[appStickSegment]"
})
export class StickSegmentDirective implements AfterViewInit {
	@Input("appStickSegment") segment: any

	private headerHeight = isPlatform("ios") ? 44 : 56

	constructor(private renderer: Renderer2, private domCtrl: DomController) {}

	ngAfterViewInit() {
		this.segment = this.segment.el
	}

	@HostListener("IonScroll", ["$event"]) onScroll($event) {
		this.domCtrl.write(() => {
			const scrollTop: number = $event.detail.scrollTop

			let newPosition = -scrollTop

			if (newPosition < -this.headerHeight) {
				newPosition = -this.headerHeight
			}

			this.domCtrl.write(() => {
				this.renderer.setStyle(this.segment, "top", `${newPosition}px`)
			})
		})
	}
}
