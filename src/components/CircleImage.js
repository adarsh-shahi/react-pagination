export default function CircleImage({ image }) {
	return (
		<img
			style={{ borderRadius: "50%" }}
			className="w-20"
			src={image.src}
			alt={image.alt}
		/>
	);
}
