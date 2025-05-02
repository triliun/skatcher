import { Icon } from "@iconify/react";
import { ContactLink, NavLink } from "../types/types";
import { useState } from "react";
import clsx from "clsx";
import Logo from "./fragments/Logo";
import SocialLinks from "./fragments/SocialLink";
import React from "react";

const navLink: NavLink[] = [
	{
		label: "About",
		href: "#about",
		ariaLabel: "Go to About section",
	},
	{
		label: "Services",
		href: "#benefits",
		ariaLabel: "Go to Services section",
	},
	{
		label: "Contact",
		href: "#contact",
		ariaLabel: "Go to Contact section",
	},
];

const contactLink: ContactLink[] = [
	{
		label: "+(1600) 456 7890",
		href: "tel:+16004567890",
		ariaLabel: "Call us at +16004567890",
		icon: <Icon icon="carbon:phone-filled" aria-hidden="true" className="text-xs md:text-lg" />,
	},
	{
		label: "yourid@example.com",
		href: "mailto:yourid@example.com",
		ariaLabel: "Email us at yourid@example.com",
		icon: <Icon icon="dashicons:email-alt" aria-hidden="true" className="text-xs md:text-lg" />,
	},
	{
		label: "123 Fifth Avenue, New York - 1060, USA.",
		href: "https://maps.google.com/?q=123+Fifth+Avenue,+New+York,+1060,+USA",
		ariaLabel: "View our location on Google Maps",
		icon: <Icon icon="carbon:location-filled" aria-hidden="true" className="text-xs md:text-lg" />,
	},
];

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	return (
		<header className="sticky top-0 z-50 text-white bg-charcoal md:bg-charcoal/30 md:backdrop-blur">
			<div className="flex items-center justify-center md:justify-between px-5 w-full h-8 md:h-[60px] bg-charcoal">
				{/* Top Bar - Contact & Social */}
				<div
					role="region"
					aria-label="Contact information"
					className="flex items-center justify-between w-full sm:w-max gap-4 md:gap-7 lg:gap-12 truncate line-clamp-1"
				>
					{contactLink.map((contact) => (
						<a
							key={`contact-${contact.href}`}
							href={contact.href}
							aria-label={contact.ariaLabel}
							title={contact.ariaLabel}
							className="flex items-center gap-1 md:gap-3 cursor-pointer truncate text-xss md:text-xs transition-colors hover:text-amberDark active:text-amberDark"
						>
							{contact.icon}
							<span className="truncate">{contact.label}</span>
						</a>
					))}
				</div>
				<SocialLinks />
			</div>
			{/* Main Header - Logo & Navigation */}
			<div className="flex items-center justify-between px-5 h-[48px] md:h-[67px]">
				<Logo className={clsx({ invisible: isSearchOpen })} />
				<div className="flex items-center gap-2 md:gap-5 lg:gap-12 w-max">
					<nav
						aria-label="Main navigation"
						className={clsx(
							"absolute top-full right-0 z-50 md:static flex flex-col md:flex md:flex-row items-start md:items-center gap-4 md:gap-5 lg:gap-12 md:text-lg p-4 md:p-0 w-full h-screen md:w-max md:h-max bg-charcoal md:bg-transparent",
							{
								hidden: !isMenuOpen,
								block: isMenuOpen,
							},
						)}
					>
						{navLink.map((nav) => (
							<a
								key={`nav-${nav.href}`}
								href={nav.href}
								aria-label={nav.ariaLabel}
								title={nav.ariaLabel}
								className="transition-colors hover:text-amberDark active:text-amberDark"
							>
								{nav.label}
							</a>
						))}
					</nav>
					<div
						role="search"
						className="flex items-center gap-1 rounded-full md:py-1 md:px-5 md:w-[183px] md:h-[46px] md:bg-white"
					>
						<input
							type="text"
							placeholder="Search Here"
							aria-label="Search"
							className={clsx(
								"md:block px-4 py-1 md:p-0 w-full outline-none rounded text-charcoal",
								{
									hidden: !isSearchOpen,
									block: isSearchOpen,
								},
							)}
						/>
						<button
							type="button"
							aria-label="Submit search"
							onClick={toggleSearch}
							className="md:text-lg p-2 rounded md:text-blue-600 bg-amberDark md:bg-transparent"
						>
							<Icon icon="fa:search" aria-hidden="true" />
						</button>
					</div>
					<button
						type="button"
						aria-label="Menu button"
						onClick={toggleMenu}
						className="md:hidden p-2 rounded bg-amberDark"
					>
						{isMenuOpen ? (
							<Icon icon="heroicons-solid:x" />
						) : (
							<Icon icon="heroicons-solid:menu-alt-3" />
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default React.memo(Header);
