import { React, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useLoginMutation } from "../../../services/appApi";

const Login = () => {
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { isError, isLoading, error }] = useLoginMutation();
    function handleLogin(e) {
        e.preventDefault();
        login({ email, password });
    }

	return (
		<>
		
		  <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleLogin}>
						<h1>Login to Your Account</h1>
						{isError && <Alert variant="danger">{error.data}</Alert>}
						<input
							type="email"
							placeholder="Email"
							name="email"
							required
							className={styles.input}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							required
							className={styles.input}
							value={password} 
							onChange={(e) => setPassword(e.target.value)}
						/>
						
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" disabled={isLoading} className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>Don't have an account? </h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
		
		</>
	);
};

export default Login;
