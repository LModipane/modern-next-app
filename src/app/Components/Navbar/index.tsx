'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { auth } from '@/firebase/client';
import { signOut } from 'firebase/auth';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';

function Navbar() {
	const [signInWithGoogle] = useSignInWithGoogle(auth);
	const [user, isLoading] = useAuthState(auth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    //styles objects  
	const black_btn = {
		backgroundColor: 'black',
		color: 'white',
		borderRadius: '60px',
		padding: '10px 30px',
		fontSize: '15px',
	};
	const menuItem = {
		margin: '5px',
		fontSize: '18px',
	};
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
			<div className="hidden md:block">
				{user && !isLoading ? (
					<div className="flex justify-between items-center gap-3 mx-24">
						<Link
							href="/create-prompt"
							className="hidden md:block"
							style={black_btn}>
							Create Post
						</Link>
						<button
							className=""
							onClick={() => signOut(auth)}
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
								src={`${user?.photoURL}`}
								alt="user-profile-image"
								width="40"
								height="40"
								className="rounded-full"
							/>
						</Link>
					</div>
				) : (
					<div className="">
						{isLoading ? (
							'Loading...'
						) : (
							<button onClick={() => signInWithGoogle()}>Sign In</button>
						)}
					</div>
				)}
			</div>

			{/* mobile navigations */}
			<div className="md:hidden m-3">
				{user && !isLoading ? (
					<div className="">
						<Image
							src={`${user?.photoURL}`}
							alt="user-profile-image"
							width="40"
							height="40"
							className="rounded-full"
							onClick={() => setIsMenuOpen(prev => !prev)}
						/>
						{isMenuOpen && (
							<div
								className=" m-2 bg-white drop-shadow-md flex flex-col gap-2 p-5 "
								style={{
									width: '200px',
									position: 'absolute',
									right: '0px',
									border: '1px solid black',
									borderRadius: '30px',
								}}>
								<Link
									href="/profile"
									onClick={() => setIsMenuOpen(false)}
									style={menuItem}>
									My Profile
								</Link>
								<Link
									href="/create-prompt"
									onClick={() => setIsMenuOpen(false)}
									style={menuItem}>
									Create Propmt
								</Link>
								<button
									className="mt-5"
									style={black_btn}
									type="button"
									onClick={() => {
										setIsMenuOpen(false);
										signOut(auth);
									}}>
									Sign Out
								</button>
							</div>
						)}
					</div>
				) : (
					<div className="">
						{isLoading ? (
							'Loading...'
						) : (
							<button onClick={() => signInWithGoogle()}>Sign In</button>
						)}
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
