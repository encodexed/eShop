import DataSlice from "../DataSlice/DataSlice";

const PlatformOrderInfo = ({ orderData, price, discountFactor }) => {
	console.log("orderData", orderData);
	console.log("price", price);
	console.log("discountFactor", discountFactor);

	return (
		<>
			{!!orderData.pc && (
				<DataSlice
					listing='PC'
					value={`${orderData.pc} ${orderData.pc === 1 ? "copy" : "copies"}`}
				/>
			)}
			{!!orderData.playstation && (
				<DataSlice
					listing='Playstation'
					value={`${orderData.playstation} ${
						orderData.playstation === 1 ? "copy" : "copies"
					}`}
				/>
			)}
			{!!orderData.xbox && (
				<DataSlice
					listing='Xbox'
					value={`${orderData.xbox} ${
						orderData.xbox === 1 ? "copy" : "copies"
					}`}
				/>
			)}
			{!!orderData.nSwitch && (
				<DataSlice
					listing='Nintendo Switch'
					value={`${orderData.nSwitch} ${
						orderData.nSwitch === 1 ? "copy" : "copies"
					}`}
				/>
			)}
		</>
	);
};

export default PlatformOrderInfo;
