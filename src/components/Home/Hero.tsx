import { Button } from "../ui/button";
import { ArrowRight, Utensils } from "lucide-react";
import { siteData } from "../../data/siteData";

const Hero = () => {
  return (
    <section
      id="start"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />
      {/* Darker Overlay for Text Contrast */}
      <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" />

      {/* Background Shapes/Gradients over the image */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 z-0 mix-blend-overlay" />

      <div className="container relative z-10 px-4 pt-16 text-center">
        {/* <div className="inline-flex items-center justify-center px-6 py-2 mb-8 rounded-full bg-white/10 border border-white/20 shadow-lg text-white text-sm font-bold tracking-wide animate-in fade-in slide-in-from-bottom-4 duration-1000 hover:scale-105 transition-transform cursor-default backdrop-blur-md">
          <Beer className="w-4 h-4 mr-2 text-primary" />
          <span className="text-white">Craftowe Nowości na Kranie!</span>
        </div> */}

        <h1 className="text-7xl md:text-9xl font-display font-bold tracking-tight text-white mb-6 drop-shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 leading-[0.9]">
          BISTRO <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              BURGER
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-4 bg-white/10 -rotate-2 rounded-full z-0 blur-sm"></span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-white/90 mb-12 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 drop-shadow-md">
          Autorskie burgery, rzemieślnicze piwo i klimat, który karmi zmysły.
          <span className="font-semibold text-white block mt-2">
            {" "}
            Wpadnij i zjedz dobrze.
          </span>
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button
            size="lg"
            className="h-16 px-12 text-xl font-display tracking-wide rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(222,124,0,0.5)] hover:shadow-[0_0_25px_rgba(222,124,0,0.7)] hover:-translate-y-1 transition-all border-none"
            onClick={() =>
              document
                .getElementById(
                  siteData.navItems.find((item) => item.label === "Menu")?.id ||
                  "menu",
                )
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Utensils className="mr-2 h-5 w-5" /> Zobacz Menu
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-16 px-8 text-xl font-display tracking-wide rounded-full bg-transparent hover:bg-white/10 border-2 border-white text-white hover:border-white transition-all backdrop-blur-sm"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Zarezerwuj Stolik <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
