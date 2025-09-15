export default function UnderDevelopment() {
  return (
    <div className="min-h-full bg-base-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-base-content text-balance">
            I'm Building Something Great!
          </h1>
          <p className="text-xl md:text-2xl text-base-content/70 text-pretty">
            This page will be right back with you. I'm working hard to bring you
            an amazing experience.
          </p>
        </div>

        {/* Status Card - Using Daisy UI card component */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl justify-center">
              🚧 Under Development
            </h2>
            <p className="text-base-content/70">
              I'm crafting something special. Stay tuned for updates and be the
              first to know when we launch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
