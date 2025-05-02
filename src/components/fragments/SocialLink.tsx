import { Icon } from "@iconify/react/dist/iconify.js";
import { SocialLink } from "../../types/types";
import clsx from "clsx";

interface Props {
	className?: string;
	socialLinks?: SocialLink[];
}

const socialLink: SocialLink[] = [
	{
		label: "Google",
		href: "https://google.com",
		ariaLabel: "Visit our Google page",
		icon: <Icon icon="bxl:google" aria-hidden="true" />,
	},
	{
		label: "Facebook",
		href: "https://facebook.com",
		ariaLabel: "Visit our Facebook page",
		icon: <Icon icon="bxl:facebook-circle" aria-hidden="true" />,
	},
	{
		label: "Twitter",
		href: "https://twitter.com",
		ariaLabel: "Visit our Twitter page",
		icon: <Icon icon="bxl:twitter" aria-hidden="true" />,
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com",
		ariaLabel: "Visit our LinkedIn page",
		icon: <Icon icon="bxl:linkedin-square" aria-hidden="true" />,
	},
];

const SocialLinks: React.FC<Props> = ({ socialLinks = socialLink, className }) => {
	return (
		<div
			role="region"
			aria-label="Social media links"
			className={clsx("hidden md:flex items-center gap-2 text-lg", className)}
		>
			{socialLinks.map((social) => (
				<a
					key={`social-${social.href}`}
					href={social.href}
					aria-label={social.ariaLabel}
					title={social.ariaLabel}
					target="_blank"
					rel="noopener noreferrer"
					className="transition-colors hover:text-amberDark active:text-amberDark"
				>
					{social.icon}
				</a>
			))}
		</div>
	);
};

export default SocialLinks;
