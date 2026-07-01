import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass-light">
            Get in touch
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-4xl">
            Request a Quote
          </h2>
          <p className="mt-4 max-w-md font-body text-sm text-steel md:text-base">
            Send a message with details about your project and we&apos;ll
            follow up directly — no account or sign-up needed.
          </p>

          <div className="mt-8 space-y-3 font-mono text-sm text-steel">
            <p>
              <span className="text-brass-light">Phone:</span>{" "}
              <a href="tel:+17868514038" className="hover:text-bone">
                (786) 851-4038
              </a>
            </p>
            <p>
              <span className="text-brass-light">Email:</span>{" "}
              <a
                href="mailto:jbgeneralsolutionserv@gmail.com"
                className="hover:text-bone"
              >
                jbgeneralsolutionserv@gmail.com
              </a>
            </p>
            <p>
              <span className="text-brass-light">Service Area:</span> Killeen
              &amp; Central Texas
            </p>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
