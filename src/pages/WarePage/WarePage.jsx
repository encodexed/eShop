import { useParams } from "react-router-dom";

const WarePage = () => {
	const { slug } = useParams();

	return <div>Product page for {slug}</div>;
};

export default WarePage;
