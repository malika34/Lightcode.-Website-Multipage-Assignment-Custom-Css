import Image from "next/image";
import style from "@/components/Services.module.css";

const Services = () => {
  return (
    <section id="services">
      {/* Container for the entire services section */}
      <div className={style.container}>
        {/* Description section with heading and introductory paragraph */}
        <div className={style.description}>
          <h2 className={style.headingSecondary}>Services that we provide</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            harum, vel quia possimus delectus autem cupiditate est perferendis
            animi, reiciendis facere! Quae, nisi nobis assumenda perspiciatis
            omnis consequatur sequi doloribus.
          </p>
        </div>

        {/* Container for all service cards */}
        <div className={style.cards}>
          {/* Individual service card for Marketing */}
          <div className={style.card}>
            <div className={style.icon}>
              <Image
                src="/images/img-1.png"
                alt="Image 1"
                width={100}
                height={100}
              />
            </div>
            <h3 className={style.headingTertiary}>Marketing</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              ipsam earum eaque facere saepe neque.
            </p>
          </div>

          {/* Individual service card for App Development */}
          <div className={style.card}>
            <div className={style.icon}>
              <Image
                src="/images/img-2.png"
                alt="Image 2"
                width={100}
                height={100}
              />
            </div>
            <h3 className={style.headingTertiary}>App Development</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              ipsam earum eaque facere saepe neque.
            </p>
          </div>

          {/* Individual service card for Error Fixing */}
          <div className={style.card}>
            <div className={style.icon}>
              <Image
                src="/images/img-3.png"
                alt="Image 3"
                width={100}
                height={100}
              />
            </div>
            <h3 className={style.headingTertiary}>Error Fixing</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              ipsam earum eaque facere saepe neque.
            </p>
          </div>

          {/* Individual service card for Design */}
          <div className={style.card}>
            <div className={style.icon}>
              <Image
                src="/images/img-4.png"
                alt="Image 4"
                width={100}
                height={100}
              />
            </div>
            <h3 className={style.headingTertiary}>Design</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              ipsam earum eaque facere saepe neque.
            </p>
          </div>

          {/* Individual service card for Development */}
          <div className={style.card}>
            <div className={style.icon}>
              <Image
                src="/images/img-5.png"
                alt="Image 5"
                width={100}
                height={100}
              />
            </div>
            <h3 className={style.headingTertiary}>Development</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              ipsam earum eaque facere saepe neque.
            </p>
          </div>

          {/* Individual service card for SEO */}
          <div className={style.card}>
            <div className={style.icon}>
              <Image
                src="/images/img-6.png"
                alt="Image 6"
                width={100}
                height={100}
              />
            </div>
            <h3 className={style.headingTertiary}>SEO</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              ipsam earum eaque facere saepe neque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
