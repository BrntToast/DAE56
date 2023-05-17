import { useState } from 'react';
let passwordType = 'password';
function Signup() {
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');

	function handleSubmit(e) {
		e.preventDefault();

		console.log(
			'User Registered: ',
			username,
			password
		);
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Username</label>
				<br />
				<input
					placeholder="Enter Username"
					type="text"
					value={username}
					onChange={(e) =>
						setUsername(e.target.value)
					}
				/>
				<br />
				<label>Password</label>
				<br />
				<input
					placeholder="Password"
					type={passwordType}
					value={password}
					onChange={(e) =>
						setPassword(e.target.value)
					}
				/>
				<button onClick={() => {}}>
					Show Password
				</button>
				<br />
				<button>Register</button>
			</form>
		</div>
	);
}

export default Signup;
