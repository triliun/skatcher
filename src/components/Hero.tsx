import { Icon } from "@iconify/react/dist/iconify.js";
import realEstate1 from "/real-estate-4.jpg?url";
import realEstate2 from "/real-estate-3.jpg?url";
import realEstate3 from "/real-estate-2.jpg?url";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ImageLink } from "../types/types";
import clsx from "clsx";

const imageUrl: ImageLink[] = [
	{
		src: realEstate1,
		label: "real estated img",
	},
	{
		src: realEstate2,
		label: "real estated img",
	},
	{
		src: realEstate3,
		label: "real estated img",
	},
];

const Hero = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const [isAtStart, setIsAtStart] = useState(true);
	const [isAtEnd, setIsAtEnd] = useState(false);

	const updateScrollPosition = () => {
		if (!scrollRef.current) return;

		const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
		setIsAtStart(scrollLeft <= 0);
		setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // -1 to handle rounding errors
	};

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		scrollContainer.addEventListener("scroll", updateScrollPosition);
		updateScrollPosition(); // initial check

		return () => {
			scrollContainer.removeEventListener("scroll", updateScrollPosition);
		};
	}, []);

	const scrollLeft = useCallback(() => {
		scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
	}, []);

	const scrollRight = useCallback(() => {
		scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
	}, []);

	return (
		<section id="home" className="flex flex-col items-center gap-16 w-full scroll-mt-20">
			<div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 px-10 py-20 max-w-[1160px] w-full">
				<div className="relative flex flex-col gap-10 max-w-sm lg:max-w-lg">
					<h1 className="text-4xl lg:text-5xl font-semibold">Discover Modern Singel Property</h1>
					<p className="text-sm">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
						dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
					</p>
					<div className="flex flex-col md:flex-row gap-3 lg:max-w-sm">
						<button
							type="button"
							aria-label="Overview"
							className="px-10 py-4 w-full rounded-md font-semibold transition-colors bg-amberDark hover:bg-amberDark/70"
						>
							Overview
						</button>
						<button
							type="button"
							aria-label="Learn More"
							className="px-10 py-4 w-full rounded-md font-semibold transition-colors border bg-transparent hover:bg-amberDark hover:border-amberDark"
						>
							Learn More
						</button>
					</div>
				</div>
				<div className="relative max-w-[295px] md:max-w-[425px] w-full">
					<div className="absolute inset-0 max-w-[295px] aspect-[295/250] md:max-w-[425px] md:aspect-[425/653] rounded-xl shadow-lg">
						<button
							type="button"
							onClick={scrollLeft}
							className={clsx(
								"absolute z-10 top-1/2 -left-5 text-xl p-2.5 rounded-full bg-amberDark",
								{
									hidden: isAtStart,
								},
							)}
						>
							<Icon icon="dashicons:arrow-left-alt2" />
						</button>
						<button
							type="button"
							onClick={scrollRight}
							className={clsx(
								"absolute z-10 top-1/2 -right-5 text-xl p-2.5 rounded-full bg-amberDark",
								{
									hidden: isAtEnd,
								},
							)}
						>
							<Icon icon="dashicons:arrow-right-alt2" />
						</button>
						<div
							ref={scrollRef}
							className="flex overflow-x-auto overflow-w-hidden snap-x snap-center snap-mandatory w-full h-full rounded-xl"
						>
							{imageUrl.map((img) => (
								<img
									key={`hero-${img.src}`}
									src={img.src}
									width={425}
									height={653}
									loading="lazy"
									alt={`Preview ${img.label}`}
									className="object-cover snap-center w-full min-w-full"
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center w-full text-charcoal bg-white">
				<div className="flex items-center justify-evenly md:justify-start gap-4 md:gap-24 lg:gap-28 px-10 pb-10 pt-40 md:py-12 max-w-[1160px] w-full">
					<div className="flex flex-col items-center gap-1 w-max">
						<div className="flex items-center gap-2">
							<Icon
								icon="majesticons:map-marker-area"
								className="size-8 lg:size-11 text-amberDark"
							/>
							<span className="text-2xl lg:text-4xl font-semibold">4.500</span>
						</div>
						<p className="text-sm lg:text-lg">Our Square Feets</p>
					</div>
					<div className="flex flex-col items-center gap-1 w-max">
						<div className="flex items-center gap-2">
							<Icon icon="ant-design:star-filled" className="size-8 lg:size-11 text-amberDark" />
							<span className="text-2xl lg:text-4xl font-semibold">5.00</span>
						</div>
						<p className="text-sm lg:text-lg">Rates by 1.100</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default React.memo(Hero);
