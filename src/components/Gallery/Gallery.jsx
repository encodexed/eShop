import styles from "./Gallery.module.scss";
import { useState } from "react";

const Gallery = ({ imageLinks }) => {
	const [displayedImageSrc, setDisplayedImageSrc] = useState(imageLinks[0]);

	return (
		<div className={styles.gallery}>
			<div className={styles.gallery__displayed_image}>
				<img
					className={styles.gallery__displayed_image__img}
					src={displayedImageSrc}
					alt='A screenshot'
				/>
			</div>
			<div className={styles.gallery__screenshot__list}>
				{imageLinks.map((image) => {
					return (
						<div key={image} className={styles.gallery__screenshot__container}>
							<div className={styles.gallery__thumbnail__container}>
								<img
									onClick={() => setDisplayedImageSrc(image)}
									className={styles.gallery__thumbnail}
									src={image}
									alt='A thumbnail'
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Gallery;
