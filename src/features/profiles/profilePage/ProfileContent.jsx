import { Tab } from "semantic-ui-react";
import AboutTab from "./AboutTab";
import PhotosTab from "./PhotosTab";

export default function ProfileContent({ profile, isCurrentUser }) {
	const panes = [
		{
			menuItem: "About",
			render: () => (
				<AboutTab profile={profile} isCurrentUser={isCurrentUser} />
			),
		},
		{
			menuItem: "Photos",
			render: () => (
				<PhotosTab profile={profile} isCurrentUser={isCurrentUser} />
			),
		},
	];
	return (
		<Tab
			menu={{ fluid: true, vertical: true }}
			menuPosition='right'
			panes={panes}
		/>
	);
}
