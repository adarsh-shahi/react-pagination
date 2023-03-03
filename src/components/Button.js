export default function Button({ children, className, ...rest }) {
	return (
		<button
			{...rest}
			className={
				"bg-blue-500 rounded-full text-white py-1 px-3 text-sm " + className
			}
		>
			{children}
		</button>
	);
}
