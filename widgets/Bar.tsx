import app from "ags/gtk4/app"
import { Astal, Gtk, Gdk } from "ags/gtk4"

export default function Bar(gdkmonitor: Gdk.Monitor) {
	const { RIGHT, TOP, BOTTOM } = Astal.WindowAnchor

	/* eslint-disable react/react-in-jsx-scope, react/no-unknown-property */
	return (
		<window
			visible
			class="Bar"
			gdkmonitor={gdkmonitor}
			exclusivity={Astal.Exclusivity.EXCLUSIVE}
			anchor={RIGHT | TOP | BOTTOM}
			application={app}
		>
			<centerbox
				orientation={Gtk.Orientation.VERTICAL}
				cssName="centerbox"
			>
				<box $type="center">tmp</box>
			</centerbox>
		</window>
		/* eslint-enable */
	)
}
