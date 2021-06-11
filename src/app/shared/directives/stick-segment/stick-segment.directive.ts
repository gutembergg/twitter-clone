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
		console.log("---000>ooo", this.segment)
	}

	@HostListener("ionScroll", ["$event"]) onScroll($event: any) {
		const scrollTop: number = $event.detail.scrollTop

		let newPosition = -scrollTop
		console.log("---000>", newPosition)

		if (newPosition < -this.headerHeight) {
			newPosition = -this.headerHeight
		}

		this.domCtrl.write(() => {
			this.renderer.setStyle(this.segment, "top", `${newPosition}px`)
		})
	}
}
