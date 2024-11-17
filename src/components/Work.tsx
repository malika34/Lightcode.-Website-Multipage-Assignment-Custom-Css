import Image from "next/image";
import style from "@/components/Work.module.css";

const Work: React.FC = () => {
  return (
    <section id="work">
      {/* Container for the entire work section */}
      <div className={style.container}>
        {/* Description section containing heading and paragraph */}
        <div className={style.description}>
          <h2 className={style.headingSecondary}>Some of our works</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            harum, vel quia possimus delectus autem cupiditate est perferendis
            animi, reiciendis facere! Quae, nisi nobis assumenda perspiciatis
            omnis consequatur sequi doloribus.
          </p>
        </div>

        {/* Work images section with margin-bottom styling */}
        <div className={`${style.work} ${style.mb}`}>
          <Image
            src="/images/work-1.jpg"
            alt="Work Image 1"
            width={500}
            height={500}
          />
          <Image
            src="/images/work-2.jpg"
            alt="Work Image 2"
            width={500}
            height={500}
          />
          <Image
            src="/images/work-3.jpg"
            alt="Work Image 3"
            width={500}
            height={500}
          />
          <Image
            src="/images/work-4.jpg"
            alt="Work Image 4"
            width={500}
            height={500}
          />
          <Image
            src="/images/work-5.jpg"
            alt="Work Image 5"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
