type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"

export const getResponsiveSpacing = (
  size: SpacingSize,
  type: "margin" | "padding" = "padding",
  direction?: "x" | "y" | "t" | "r" | "b" | "l",
) => {
  const prefix = type === "margin" ? "m" : "p"
  const directionSuffix = direction ? `-${direction}` : ""

  const baseClass = `${prefix}${directionSuffix}`

  const spacingMap: Record<SpacingSize, string> = {
    xs: `${baseClass}-1 sm:${baseClass}-1.5 md:${baseClass}-2`,
    sm: `${baseClass}-2 sm:${baseClass}-3 md:${baseClass}-4`,
    md: `${baseClass}-3 sm:${baseClass}-4 md:${baseClass}-6`,
    lg: `${baseClass}-4 sm:${baseClass}-6 md:${baseClass}-8`,
    xl: `${baseClass}-6 sm:${baseClass}-8 md:${baseClass}-10 lg:${baseClass}-12`,
    "2xl": `${baseClass}-8 sm:${baseClass}-10 md:${baseClass}-12 lg:${baseClass}-16`,
    "3xl": `${baseClass}-10 sm:${baseClass}-12 md:${baseClass}-16 lg:${baseClass}-20`,
    "4xl": `${baseClass}-12 sm:${baseClass}-16 md:${baseClass}-20 lg:${baseClass}-24 xl:${baseClass}-32`,
  }

  return spacingMap[size]
}

export const getResponsiveFontSize = (size: SpacingSize) => {
  const fontSizeMap: Record<SpacingSize, string> = {
    xs: "text-xs sm:text-sm",
    sm: "text-sm sm:text-base",
    md: "text-base sm:text-lg md:text-xl",
    lg: "text-lg sm:text-xl md:text-2xl",
    xl: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    "2xl": "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    "3xl": "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    "4xl": "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
  }

  return fontSizeMap[size]
}

export const getResponsiveWidth = (size: SpacingSize) => {
  const widthMap: Record<SpacingSize, string> = {
    xs: "w-full sm:w-3/4 md:w-2/3 lg:w-1/2",
    sm: "w-full sm:w-4/5 md:w-3/4 lg:w-2/3",
    md: "w-full md:w-4/5 lg:w-3/4",
    lg: "w-full lg:w-4/5 xl:w-3/4",
    xl: "w-full xl:w-4/5 2xl:w-3/4",
    "2xl": "w-full 2xl:w-4/5",
    "3xl": "w-full",
    "4xl": "w-full",
  }

  return widthMap[size]
}

