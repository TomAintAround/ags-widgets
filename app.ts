import app from "ags/gtk4/app"
import style from "./style.scss"
import Bar from "./widgets/Bar"

const widgets = [Bar]

app.start({
	css: style,
	main() {
		widgets.map((widget) => app.get_monitors().map(widget))
	},
})
