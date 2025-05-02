import Logo from "./fragments/Logo";
import SocialLinks from "./fragments/SocialLink";
import FooterLinks from "./fragments/FooterLink";
import { FooterLink } from "../types/types";
import React from "react";

const companyLinks: FooterLink[] = [
	{
		label: "123 Avenue, New York",
		href: "#",
	},
	{
		label: "+(1600) 456 7890",
		href: "#",
	},
	{
		label: "yourid@example.com",
		href: "#",
	},
	{
		label: "9:00 AM - 7:00 PM",
		href: "#",
	},
	{
		label: "@officialpage",
		href: "#",
	},
];

const featuresLinks: FooterLink[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About",
		href: "#about",
	},
	{
		label: "Provide",
		href: "#provide",
	},
	{
		label: "Benefits",
		href: "#benefits",
	},
	{
		label: "Contact",
		href: "#contact",
	},
];

const helpCenterLinks: FooterLink[] = [
	{
		label: "Call Center",
		href: "#",
	},
	{
		label: "Official Pages",
		href: "#",
	},
	{
		label: "Frequently Asked Question",
		href: "#",
	},
	{
		label: "History Background",
		href: "#",
	},
	{
		label: "Newsletter Subscription",
		href: "#",
	},
];

const Footer = () => {
	return (
		<section
			id="footer"
			className="flex items-center justify-center pb-10 pt-24 scroll-mt-20 text-white bg-charcoal"
		>
			<div className="flex flex-col justify-between gap-10 px-10 max-w-[1160px] w-full">
				<div className="flex flex-wrap md:justify-between gap-10 w-full">
					<div className="flex flex-col gap-5 text-sm w-full md:max-w-2xl lg:max-w-sm">
						<Logo />
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
							dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
							nascetur ridiculus mus.
						</p>
						<SocialLinks className="sm:flex" />
					</div>
					<FooterLinks title="Company" links={companyLinks} />
					<FooterLinks title="Features" links={featuresLinks} />
					<FooterLinks title="Help Center" links={helpCenterLinks} className="hidden md:flex" />
				</div>

				<div className="flex justify-between pt-12 text-sm w-full">
					<a
						href="#"
						aria-label="Terms & Condition"
						title="Terms & Condition"
						className="hidden md:block hover:text-amberDark active:text-amberDark"
					>
						Terms & Condition
					</a>
					<span> © 2025 Skatcher. All Rights Reserved</span>
					<a
						href="#"
						aria-label="Privacy & Policy"
						title="Privacy & Policy"
						className="hidden md:block hover:text-amberDark active:text-amberDark"
					>
						Privacy & Policy
					</a>
				</div>
			</div>
		</section>
	);
};

export default React.memo(Footer);
