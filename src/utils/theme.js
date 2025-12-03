export const darkTheme = {
  bg: "bg-black",
  text: "text-white",
  textSecondary: "text-gray-400",
  cardBg: "bg-white/5",
  border: "border-white/10",
  hover: "hover:bg-white/10",
  gradient1: "from-purple-900/20",
  gradient2: "to-cyan-900/20",
  navBg: "bg-black/80",
  inputBg: "bg-white/5",
};

export const lightTheme = {
  bg: "bg-gray-50",
  text: "text-gray-900",
  textSecondary: "text-gray-600",
  cardBg: "bg-white",
  border: "border-gray-200",
  hover: "hover:bg-gray-100",
  gradient1: "from-purple-100",
  gradient2: "to-cyan-100",
  navBg: "bg-white/80",
  inputBg: "bg-gray-100",
};

export const getTheme = (darkMode) => (darkMode ? darkTheme : lightTheme);
