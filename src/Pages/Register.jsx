import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = use(AuthContext)
    const handleRegisterWithEmailPassword = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;
        console.log(email, password, photoURL)

        const passwordSize = /^.{6,}$/;
        if (!passwordSize.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must be bigger than 6 characters",
            });
            return;
        }
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
        if (!passwordPattern.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password should contain at least one Upper-Case and one Lower-Case",
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result);
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                })
                const newUser = {
                    name,
                    email,
                    photoURL
                }
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after new Sign In', data)
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Successfully created an user",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-20 max-w-sm shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleRegisterWithEmailPassword}>
                    <fieldset className="fieldset">
                        {/* Name Field  */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" />
                        {/* Email Field  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        {/* PhhotoURL Field  */}
                        <label className="label">PhotoURL</label>
                        <input type="text" name='photoURL' className="input" />
                        {/* Password Field  */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <button className="btn btn-primary mt-4 ">Register</button>
                    </fieldset>
                </form>
                {/* Google */}
                <button type="button" className="btn w-full mt-3 bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>

                <p>Already have an account? <Link className='text-purple-800' to={'/logIn'}>LogIn</Link></p>

            </div>
        </div>
    );
};

export default Register;