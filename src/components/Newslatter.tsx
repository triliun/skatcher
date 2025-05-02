import React from "react";

const Newslatter = () => {
	return (
		<section
			id="newsletter"
			className="flex items-center justify-center py-14 scroll-mt-20 text-charcoal bg-white"
		>
			<div className="flex items-center flex-col md:flex-row md:justify-between gap-10 px-10 max-w-[1160px] w-full">
				<h2 className="shrink-0 font-semibold text-3xl lg:text-4xl max-w-lg">
					Subscribe to Our Newsletter
				</h2>
				<div className="flex flex-col md:flex-row gap-2 md:max-w-lg w-full">
					<input
						type="email"
						placeholder="Insert Your E-mail Address Here"
						className=" px-5 py-4 w-full outline-none rounded-lg border-2 border-gray-350 focus:border-amberDark"
					/>
					<button
						type="submit"
						aria-label="Overview"
						className=" px-10 py-4 w-full rounded-md font-semibold transition-colors text-white bg-amberDark hover:bg-amberDark/70"
					>
						Subscribe
					</button>
				</div>
			</div>
		</section>
	);
};

export default React.memo(Newslatter);
