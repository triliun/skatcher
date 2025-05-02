import React from "react";
import realEstate from "/real-estate-4.jpg?url";

const About = () => {
	return (
		<section
			id="about"
			className="flex items-center justify-center py-14 md:pt-32 scroll-mt-20 bg-white"
		>
			<div className="flex md:justify-between gap-10 px-10 max-w-[1160px] w-full">
				<img
					src={realEstate}
					width={505}
					height={367}
					loading="lazy"
					alt="real estate"
					className="hidden md:block max-w-[295px] aspect-square lg:max-w-[505px] lg:aspect-[505/367] object-cover w-full rounded-lg shadow-lg"
				/>
				<div className="flex flex-col flex-wrap gap-5 md:max-w-lg w-full">
					<div className="flex flex-col gap-5">
						<h2 className="font-semibold text-sm lg:text-lg text-amberDark">About Us</h2>
						<h3 className="font-semibold leading-snug text-3xl lg:text-4xl text-charcoal">
							Discover an Extraordinary Property With Us
						</h3>
					</div>
					<img
						src={realEstate}
						width={505}
						height={367}
						loading="lazy"
						alt="real estate"
						className="md:hidden aspect-[295/214] object-cover w-full rounded-lg shadow-lg"
					/>
					<div className="flex flex-col gap-5 text-gray-450 text-sm lg:text-base">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
							dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
						</p>
						<p className="pl-4 lg:pl-8 italic border-l-2 border-gray-450">
							Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
							massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
							In enim justo, rhoncus ut, imperdiet a.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default React.memo(About);
