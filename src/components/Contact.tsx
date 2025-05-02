import React from "react";
import realEstate from "/real-estate-1.jpg?url";

const Contact = () => {
	return (
		<section id="contact" className="flex items-center justify-center py-14 scroll-mt-20 bg-white">
			<div className="flex md:justify-between gap-10 px-10 max-w-[1160px] w-full">
				<div className="flex flex-col flex-wrap gap-5 md:max-w-lg w-full">
					<div className="flex flex-col gap-5">
						<h2 className="font-semibold text-sm lg:text-lg text-amberDark">Get In Touch</h2>
						<h3 className="font-semibold leading-snug text-3xl lg:text-4xl text-charcoal">
							Let Us Know by Sent Your Message For More Information
						</h3>
					</div>
					<div className="flex flex-col gap-5 text-gray-450 text-sm lg:text-base">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
							dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
						</p>
					</div>
					<img
						src={realEstate}
						width={505}
						height={367}
						loading="lazy"
						alt="real estate"
						className="md:hidden aspect-[295/214] object-cover w-full rounded-lg shadow-lg"
					/>
					<form className="flex flex-col gap-8 text-charcoal">
						<div className="flex flex-col gap-3">
							<label htmlFor="email" className="font-medium text-base lg:text-lg ">
								E-mail Address
							</label>
							<input
								id="email"
								type="email"
								placeholder="Insert Your E-mail Address Here"
								className="px-5 py-4 w-full outline-none rounded-lg border-2 border-gray-350 focus:border-amberDark"
							/>
						</div>
						<div className="flex flex-col gap-3">
							<label htmlFor="message" className="font-medium text-base lg:text-lg ">
								Message
							</label>
							<textarea
								id="message"
								placeholder="Insert Your Message Here"
								className="px-5 py-4 min-h-40 w-full outline-none rounded-lg border-2 border-gray-350 focus:border-amberDark"
							/>
						</div>
						<button
							type="submit"
							aria-label="Overview"
							className="px-10 py-4 w-full rounded-md font-semibold transition-colors text-white bg-amberDark hover:bg-amberDark/70"
						>
							Send Message
						</button>
					</form>
				</div>
				<img
					src={realEstate}
					width={505}
					height={367}
					loading="lazy"
					alt="real estate"
					className="hidden md:block md:max-w-xs lg:max-w-[505px] lg:aspect-[505/694] object-cover w-full rounded-lg shadow-lg"
				/>
			</div>
		</section>
	);
};

export default React.memo(Contact);
