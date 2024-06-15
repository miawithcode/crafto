import Container from "@/components/container/Container";
import LogoNoBg from "@/components/icons/LogoNoBg";

const Hero = () => {
  return (
    <section className="relative py-8 md:py-16">
      <Container>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="leading-relax text-balance text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
              <span className="inline-block bg-gradient-to-r from-rose to-purple bg-clip-text py-2 text-transparent">
                Empowering
              </span>{" "}
              frontend developers to build{" "}
              <span>
                <LogoNoBg />
              </span>{" "}
              aesthetic websites.
            </h1>
          </div>

          <div className="md:text-md max-w-prose leading-tight tracking-tight text-textMuted lg:text-lg">
            <p>
              Handpicked high-quality design resources that assist you in making
              beautiful websites, even without a designer in team.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
