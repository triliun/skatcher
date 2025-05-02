import { Icon } from "@iconify/react/dist/iconify.js";
import { BenefitText, BenefitCard } from "../types/types";
import React from "react";

const benefitText: BenefitText[] = [
	{
		title: "Awesome Features",
		text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
	},
	{
		title: "Luxurious Interior Design",
		text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
	},
	{
		title: "Modern Concept",
		text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque.",
	},
];

const benefitCard: BenefitCard[] = [
	{
		title: "Air Conditioned",
		text: "Lorem ipsum dolor sit amet, consectetuer.",
		icon: <Icon icon="ic:baseline-ac-unit" className="inline size-10" />,
	},
	{
		title: "Free Wifi",
		text: "Lorem ipsum dolor sit amet, consectetuer.",
		icon: <Icon icon="fa-solid:wifi" className="inline size-10" />,
	},
	{
		title: "Swimming Pool",
		text: "Lorem ipsum dolor sit amet, consectetuer.",
		icon: <Icon icon="fa-solid:swimming-pool" className="inline size-10" />,
	},
	{
		title: "Television",
		text: "Lorem ipsum dolor sit amet, consectetuer.",
		icon: <Icon icon="bi:tv" className="inline size-10" />,
	},
];

const Benefit = () => {
	return (
		<section
			id="benefits"
			className="flex items-center justify-center py-24 scroll-mt-20 text-gray-450 bg-white"
		>
			<div className="flex flex-col-reverse md:flex-row md:justify-between gap-10 px-10 max-w-[1160px] w-full">
				<div className="grid grid-cols-2 gap-2 justify-center lg:gap-4 md:min-w-80">
					{benefitCard.map((card) => (
						<div
							key={`ben-card-${card.title}`}
							className="flex flex-col items-center text-center lg:text-start lg:items-start shrink-0 gap-4 max-w-[245px] max-h-[280px] size-full p-8 cursor-pointer rounded-lg transition border border-gray-350 group hover:shadow-2xl active:shadow-2xl hover:border-transparent active:border-transparent"
						>
							<button className="shrink-0 size-16 lg:size-20 rounded-full transition border border-gray-350 text-amberDark group-hover:text-white group-active:text-white group-hover:bg-amberDark group-active:bg-amberDark">
								{card.icon}
							</button>
							<div className="space-y-3">
								<span className="font-semibold text-base lg:text-lg text-charcoal">
									{card.title}
								</span>
								<p className="text-sm lg:text-base">{card.text}</p>
							</div>
							<Icon
								icon="akar-icons:arrow-right"
								className="hidden lg:block text-base text-amberDark"
							/>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-5 lg:max-w-lg w-full">
					<div className="flex flex-col gap-5">
						<h2 className="font-semibold text-sm lg:text-lg text-amberDark">Benefits</h2>
						<h3 className="font-semibold leading-snug text-3xl lg:text-4xl text-charcoal">
							Explore More About Our Property & Benefits
						</h3>
					</div>
					<div className="flex flex-col gap-5 text-gray-450 text-sm lg:text-base">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
							dolor. Aenean massa.
						</p>
					</div>
					{benefitText.map((ben) => (
						<div key={`benefit-${ben.title}`} className="flex flex-col gap-2 text-sm lg:text-base">
							<h4 className="text-base lg:text-lg text-charcoal">{ben.title}</h4>
							<p>{ben.text}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default React.memo(Benefit);
