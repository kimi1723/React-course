import { Component, Fragment } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";

const DUMMY_USERS = [
	{ id: "u1", name: "Max" },
	{ id: "u2", name: "Manuel" },
	{ id: "u3", name: "Julie" },
];

class UserFinder extends Component {
	constructor() {
		super();
		this.state = {
			filteredUsers: DUMMY_USERS,
			searchTerm: "",
		};
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: DUMMY_USERS.filter((user) =>
					user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
				),
			});
		}
	}

	searchChangeHandler(e) {
		this.setState({ searchTerm: e.target.value });
	}

	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input type="search" onChange={this.searchChangeHandler.bind(this)} />
				</div>
				<Users users={this.state.filteredUsers} />
			</Fragment>
		);
	}
}

// const UserFinder = () => {
// 	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
// 	const [searchTerm, setSearchTerm] = useState("");

// 	useEffect(() => {
// 		setFilteredUsers(
// 			DUMMY_USERS.filter((user) =>
// 				user.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
// 			),
// 		);
// 	}, [searchTerm]);

// 	const searchChangeHandler = (event) => {
// 		setSearchTerm(event.target.value);
// 	};

// 	return (
// 		<Fragment>
// 			<div className={classes.finder}>
// 				<input type="search" onChange={searchChangeHandler} />
// 			</div>
// 			<Users users={filteredUsers} />
// 		</Fragment>
// 	);
// };

export default UserFinder;
