import Button from "./Button";
import CircleImage from "./CircleImage";
export default function Card({ user, className }) {
	return (
		<div
			className={`flex flex-col items-center gap-3 shadow-2xl rounded-2xl py-8 px-12 ${className}`}
		>
			<CircleImage image={user}></CircleImage>
			<div>{user.name}</div>
			<Button>View Profile</Button>
		</div>
	);
}
