import { React, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {  Alert } from "react-bootstrap";
import { useSignupMutation } from "../../../services/appApi";

const Signup = () => {
	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signup, { error, isLoading, isError }] = useSignupMutation();

    function handleSignup(e) {
        e.preventDefault();
        signup({ name, email, password });
    }

	return (
		<>

		 <div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSignup}>
						<h1>Create Account</h1>
						{isError && <Alert variant="danger">{error.data}</Alert>}
						<input
							type="text"
							placeholder="Enter Your Name"
							name="name"
							required
							className={styles.input}
							value={name} 
							onChange={(e) => setName(e.target.value)} 
						/>

						<input
							type="email"
							placeholder="Enter Your Email"
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
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
		</>
	);
};

export default Signup;
