const Loader = ({
  size = "medium",
  variant = "circle",
  color = "#4076f0",
  text = "Loading...",
}: any) => {
  const sizeClasses: any = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };
  const colorClasses: any = {
    blue: "border-blue-500",
    indigo: "border-indigo-500",
    purple: "border-purple-500",
    pink: "border-pink-500",
    red: "border-red-500",
    orange: "border-orange-500",
    yellow: "border-yellow-500",
    green: "border-green-500",
    teal: "border-teal-500",
  };

  // Spinner Loader
  const SpinnerLoader = () => (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-t-2 border-b-2 ${colorClasses[color]} rounded-full animate-spin`}
      ></div>
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  );

  // Dots Loader
  const DotsLoader = () => (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`${sizeClasses[size].split(" ")[0]} ${
              sizeClasses[size].split(" ")[1]
            } bg-${color}-500 rounded-full animate-bounce`}
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  );

  // Bar Loader
  const BarLoader = () => (
    <div className="flex flex-1 flex-col items-center justify-center w-full">
      <div className={`w-full h-2 bg-gray-200 rounded-full overflow-hidden`}>
        <div
          className={`h-full bg-${color}-500 rounded-full animate-progress`}
        ></div>
      </div>
      {text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
    </div>
  );

  // Circle Loader
  const CircleLoader = () => (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className={`${sizeClasses[size]} relative`}>
        <div
          className={`w-full h-full border-2 border-indigo-500 rounded-full opacity-20`}
        ></div>
        <div
          className={`absolute top-0 left-0 w-full h-full border-2 border-indigo-500 rounded-full border-t-transparent animate-spin`}
        ></div>
      </div>
      {text && <p className="mt-2 text-sm text-stone-50">{text}</p>}
    </div>
  );

  // Return the selected loader variant
  switch (variant) {
    case "spinner":
      return <SpinnerLoader />;
    case "dots":
      return <DotsLoader />;
    case "bar":
      return <BarLoader />;
    case "circle":
      return <CircleLoader />;
    default:
      return <SpinnerLoader />;
  }
};

export default Loader;
