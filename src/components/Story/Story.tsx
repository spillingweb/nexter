import styles from "./Story.module.scss";
import Button from "../UI/Button";
import Heading from "../UI/Heading";
import Story1 from "../../assets/img/story-1.jpeg";
import Story2 from "../../assets/img/story-2.jpeg";

const Story = () => {
  return (
    <>
      <div className={styles.storyPicture}>
        <img src={Story1} alt="Couple sunset" className={styles.story1} />
        <img
          src={Story2}
          alt="Luxury house with pool"
          className={styles.story2}
        />
      </div>
      <div className={styles.storyContent}>
        <Heading level={3} classes="mb-sm">
          Happy costumers
        </Heading>
        <Heading level={2} color="dark" classes="mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          facilis accusamus laudantium, tempora id cum vel. Labore error
          ratione, quae inventore nemo odit eius tempora tempore aperiam et
          corporis ex?
        </p>
        <Button>Find your own home</Button>
      </div>
    </>
  );
};

export default Story;
