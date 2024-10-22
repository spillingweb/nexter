import styles from './Gallery.module.scss';
import GalleryImage from './GalleryImage';
import { DUMMY_GALLERY_IMAGES } from '../../data/galleryImages';


const Gallery = () => {
    return (
        <section id='gallery' className={styles.gallery}>
            {DUMMY_GALLERY_IMAGES.map(image => (
                <GalleryImage key={image.id} image={image.img} index={image.id}/>
            ))}
        </section>
    )
}

export default Gallery;