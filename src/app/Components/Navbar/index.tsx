'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { auth } from '@/firebase/client';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

function Navbar() {
	const isLogin = false;
	const [signInWithGoogle, userCred, loading, error] =
		useSignInWithGoogle(auth);
	console.log(userCred);

	return (
		<nav className="flex justify-between items-center mb-16 w-full">
			<Link href="/" className="flex gap-2 items-center">
				<Image
					src="/logo.svg"
					alt="logo"
					width="40"
					height="40"
					className="m-3 ml-10"
				/>
				<p className="font-bold text-2xl md:block hidden">Promptopia</p>
			</Link>
			{/* Desktio navigations */}
			<div className="sm:flex hidden">
				{isLogin ? (
					<div className="flex justify-between items-center gap-3 mx-24">
						<Link
							href="/create-prompt"
							className="hidden md:block"
							style={{
								backgroundColor: 'black',
								color: 'white',
								borderRadius: '60px',
								padding: '10px 30px',
								fontSize: '15px',
							}}>
							Create Post
						</Link>
						<button
							className=""
							style={{
								border: '1px solid black',
								color: 'black',
								borderRadius: '60px',
								padding: '10px 30px',
								fontSize: '15px',
							}}>
							Sign Out
						</button>
						<Link href="/profile">
							<Image
								src="/user-profile.svg"
								alt="user-profile-image"
								width="40"
								height="40"
								className="rounded-full p-2"
								style={{ border: '1px solid black' }}
							/>
						</Link>
					</div>
				) : (
					<>
						<button onClick={() => signInWithGoogle()}>Sign In</button>
					</>
				)}
			</div>

			{/* mobile navigations */}
			<div className="md:hidden flex m-3">
				{isLogin ? (
					<Image
						src="/user-profile.svg"
						alt="user-profile-image"
						width="40"
						height="40"
						className="rounded-full p-2"
						style={{ border: '1px solid black' }}
					/>
				) : (
					<>
						<button>Sign In</button>
					</>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
