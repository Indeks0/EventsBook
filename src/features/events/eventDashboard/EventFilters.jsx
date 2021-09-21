import { Header, Menu } from "semantic-ui-react";
import Calendar from "react-calendar";

export default function EventFilters({ predicate, setPredicate, loading }) {
	return (
		<>
			<Header icon='calendar' attached color='teal' content='Select date' />
			<Calendar
				onChange={(date) => setPredicate("startDate", date)}
				value={predicate.get("startDate") || new Date()}
				tileDisabled={() => loading}
			/>
		</>
	);
}
