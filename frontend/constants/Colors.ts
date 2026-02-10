/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#212222";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#0f172a",
    background: "hsl(0, 0%, 100%)",
    card: "hsl(210, 60%, 90%)",
    tabTint: tintColorLight,
    icon: "hsl(206, 6%, 44%)",
    tabIconDefault: "hsl(206, 6%, 44%)",
    tabIconSelected: tintColorLight,
    wrapperBackground: "hsl(210, 40%, 98%)", // #EEE5BF
    buttonBackground: "#2563eb",
    border: "hsl(214, 95%, 93%)",
  },
  dark: {
    text: "#e2e8f0",
    background: "hsl(199, 20%, 16%)",
    card: "hsl(229, 75%, 12%)",
    tabTint: tintColorDark,
    icon: "hsl(207, 6%, 63%)",
    tabIconDefault: "hsl(207, 6%, 63%)",
    tabIconSelected: tintColorDark,
    wrapperBackground: "hsl(229, 84%, 5%)",
    buttonBackground: "hsl(217, 91%, 60%)",
    border: "hsl(224, 64%, 33%)",
  },
};

// #006452 - login + signup button color
// #FF614D - error text color
// #00C271 - success color
