import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<section className="w-full flex-center flex-col">
				<h1 className="text-center mt-5 text-5xl font-extrabold text-black sm:text-6xl leading-normal">
					Discover & Share
					<br className="" />
					<span className="text-orange-600">AI-Powered Prompts</span>
				</h1>
				<p className="dec text-center">
					Promptopia is an open source AI prompting tool for modern world to
					discover, create and share creative prompts
				</p>
      </section>
      {/* feed */}
		</main>
	);
}
