import styles from './Image.module.sass'
import * as React from "react";


type ImageCustomProps = {
    url?: string;
    alt?: string;
}

const fallbackImage = 'https://powerful4x4.co.nz/wp-content/uploads/2022/11/No-Image-Placeholder.svg.png'

const ImageCustom = ({url, alt}: ImageCustomProps) => {

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = fallbackImage;
    }

    return (
        <div className={styles.avatar}>
            <img src={url || fallbackImage} alt={alt || 'Image'} onError={handleError} />
        </div>
    )
}

export default ImageCustom;