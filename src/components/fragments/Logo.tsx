import clsx from "clsx";
import logo from "/logo.svg?url";

interface Props {
	className?: string;
	title?: string;
	logoUrl?: string;
}

const Logo: React.FC<Props> = ({ className, title = "Skatcher", logoUrl = logo }) => {
	return (
		<a
			href="/"
			aria-label="Go to Home page"
			title="Go to Home page"
			className={clsx("flex items-center gap-2 md:gap-3", className)}
		>
			<img
				src={logoUrl}
				width={20}
				height={20}
				loading="lazy"
				alt="Logo Skatcher"
				aria-hidden="true"
				className="size-4 md:size-5"
			/>
			<span className="font-montserrat font-semibold italic text-lg md:text-[22px]">{title}</span>
		</a>
	);
};

export default Logo;
