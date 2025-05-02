import clsx from "clsx";
import { FooterLink } from "../../types/types";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
	title: string;
	className?: string;
	links: FooterLink[];
}

const FooterLinks: React.FC<Props> = ({ title, className, links }) => {
	return (
		<div className={clsx("flex flex-col gap-5 text-nowrap text-sm max-w-md", className)}>
			<h3 className="font-semibold text-xl">{title}</h3>
			<div className="flex flex-col gap-3">
				{links.map((link) => (
					<a
						key={`footer-${link.label}`}
						href={link.href}
						aria-label={link.ariaLabel}
						title={link.ariaLabel}
						className="flex items-center gap-3 transition-all hover:translate-x-2 active:translate-x-2"
					>
						<Icon icon="fa6-solid:angle-right" />
						{link.label}
					</a>
				))}
			</div>
		</div>
	);
};

export default FooterLinks;
