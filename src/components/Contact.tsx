import style from "./Contact.module.css";

const Contact = () => {
  return (
    <section>
      {/* Container for the entire contact section */}
      <div className={style.container}>
        {/* Description section with heading and introductory text */}
        <div className={style.description}>
          <h2 className={style.headingSecondary}>Contact us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            harum, vel quia possimus delectus autem cupiditate est perferendis
            animi, reiciendis facere! Quae, nisi nobis assumenda perspiciatis
            omnis consequatur sequi doloribus.
          </p>
        </div>

        {/* Form section with contact form fields */}
        <div className={`${style.contactForm} ${style.mb}`}>
          <form>
            {/* Row for first and last name inputs */}
            <div className={style.row}>
              <div className={style.input50}>
                <input type="text" placeholder="First Name" />
              </div>
              <div className={style.input50}>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            {/* Row for email and subject inputs */}
            <div className={style.row}>
              <div className={style.input50}>
                <input type="email" placeholder="Email" />
              </div>
              <div className={style.input50}>
                <input type="text" placeholder="Subject" />
              </div>
            </div>

            {/* Row for message textarea */}
            <div className={style.row}>
              <div className={style.input100}>
                <textarea placeholder="Message"></textarea>
              </div>
            </div>

            {/* Row for submit button */}
            <div className={style.row}>
              <div className={style.input100}>
                <input type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
