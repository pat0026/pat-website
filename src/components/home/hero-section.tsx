export default function HeroSection() {
  return (
    <div className="hero min-h-screen bg-[url(/images/Portfolio_bg.jpg)] bg-fixed bg-[right_-4rem_center]  md:bg-center">
      <div className="hero-overlay  bg-blend-multiply"></div>
      <div className="hero-content text-slate-100 text-center text-shadow-md text-shadow-slate-600 ">
        <div className="max-w-md ">
          <h1 className="text-5xl font-bold">Hi There!</h1>
          <h1 className="mb-5 text-5xl font-bold">Patrick Here!</h1>
          <p>
            I&apos;m a developer, devops engineer and a life long learner who is
            aspiring to continue learning and developing new skills until the
            end of time.
          </p>
        </div>
      </div>
    </div>
  );
}
