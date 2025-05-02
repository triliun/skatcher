import { Icon } from "@iconify/react/dist/iconify.js";
import realEstate from "/real-estate-3.jpg?url";
import React from "react";

const Provide = () => {
	return (
		<section id="provide" className="flex items-center justify-center py-14 scroll-mt-20 bg-white">
			<div className="flex md:flex-row-reverse md:justify-between gap-10 px-10 max-w-[1160px] w-full">
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
						<h2 className="font-semibold text-sm lg:text-lg text-amberDark">Provide</h2>
						<h3 className="font-semibold leading-snug text-3xl lg:text-4xl text-charcoal">
							We Provide Many Features and Property Benefits
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
						<div className="flex flex-col gap-3">
							{Array.from({ length: 3 }).map((_, i) => (
								<span key={`provide-${i}`} className="flex items-start gap-3">
									<Icon icon="bi:check-lg" className="size-5" />
									Lorem ipsum dolor sit amet, consectetuer
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default React.memo(Provide);
