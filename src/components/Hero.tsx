import Link from "next/link";
import style from "@/components/Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home">
      {/* Container div for the entire hero section */}
      <div className={style.container}>
        {/* Main hero section div */}
        <div className={style.hero}>
          {/* Content div for text and call-to-action button */}
          <div className={style.content}>
            <h1 className={style.headingPrimary}>
              We are here to help you build your dream project
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut odit,
              magni doloremque ratione itaque necessitatibus illo aliquid
              suscipit tempore blanditiis reprehenderit illum, dolorum
              exercitationem cupiditate modi voluptas? Magni, nobis ipsam.
            </p>

            <Link href="contact" className={style.btn}>
              contact now
            </Link>
          </div>

          {/* Div for the hero image */}
          <div className={style.heroImg}>
            <Image
              src="/images/hero.jpg"
              alt="Hero Image"
              width={550}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
