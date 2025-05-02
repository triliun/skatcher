import React from "react";
import realEstate from "/real-estate-4.jpg?url";

const Overview = () => {
	return (
		<section
			id="overview"
			className="flex items-center justify-center py-24 scroll-mt-20 bg-charcoal"
		>
			<div className="flex px-10 max-w-[1160px] w-full">
				<div className="flex flex-col flex-wrap gap-5 md:gap-6 w-full">
					<h2 className="font-semibold text-sm lg:text-lg">Overview</h2>
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-20">
						<h3 className="font-semibold leading-snug text-3xl md:text-2xl lg:text-4xl">
							See Our Property Benefits by Preview Video Below
						</h3>
						<p className="text-sm lg:text-base md:max-w-sm lg:max-w-lg">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
							dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
						</p>
					</div>
					<img
						src={realEstate}
						width={1160}
						height={400}
						loading="lazy"
						alt="real estate"
						className="max-w-[1160px] aspect-[295/190] md:aspect-[1160/400] object-cover w-full rounded-lg shadow-lg"
					/>
					<div className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-20">
						<div className="flex flex-col gap-3 max-w-lg">
							<h3 className="font-semibold text-base lg:text-lg">Awesome Features</h3>
							<p className="text-sm lg:text-base">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
								dolor. Aenean massa. Cum sociis natoque.
							</p>
						</div>
						<div className="flex flex-col gap-3 max-w-lg">
							<h3 className="font-semibold text-base lg:text-lg">Luxury Property</h3>
							<p className="text-sm lg:text-base">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
								dolor. Aenean massa. Cum sociis natoque.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default React.memo(Overview);
