import * as React from "react";

import Head from "next/head";

import { motion } from "framer-motion";

import Color from "../components/Color";
import Notification, {
  ClickNotificationArea,
} from "../components/Notification";
import { hexToRGB, RGBToHSL } from "../util/color";
import Profile from "../components/Profile";

const colors = [
  { name: "AliceBlue", value: "#F0F8FF" },
  { name: "AntiqueWhite", value: "#FAEBD7" },
  { name: "Aqua", value: "#00FFFF" },
  { name: "Aquamarine", value: "#7FFFD4" },
  { name: "Azure", value: "#F0FFFF" },
  { name: "Beige", value: "#F5F5DC" },
  { name: "Bisque", value: "#FFE4C4" },
  { name: "Black", value: "#000000" },
  { name: "BlanchedAlmond", value: "#FFEBCD" },
  { name: "Blue", value: "#0000FF" },
  { name: "BlueViolet", value: "#8A2BE2" },
  { name: "Brown", value: "#A52A2A" },
  { name: "BurlyWood", value: "#DEB887" },
  { name: "CadetBlue", value: "#5F9EA0" },
  { name: "Chartreuse", value: "#7FFF00" },
  { name: "Chocolate", value: "#D2691E" },
  { name: "Coral", value: "#FF7F50" },
  { name: "CornflowerBlue", value: "#6495ED" },
  { name: "Cornsilk", value: "#FFF8DC" },
  { name: "Crimson", value: "#DC143C" },
  { name: "Cyan", value: "#00FFFF" },
  { name: "DarkBlue", value: "#00008B" },
  { name: "DarkCyan", value: "#008B8B" },
  { name: "DarkGoldenRod", value: "#B8860B" },
  { name: "DarkGray", value: "#A9A9A9" },
  { name: "DarkGrey", value: "#A9A9A9" },
  { name: "DarkGreen", value: "#006400" },
  { name: "DarkKhaki", value: "#BDB76B" },
  { name: "DarkMagenta", value: "#8B008B" },
  { name: "DarkOliveGreen", value: "#556B2F" },
  { name: "Darkorange", value: "#FF8C00" },
  { name: "DarkOrchid", value: "#9932CC" },
  { name: "DarkRed", value: "#8B0000" },
  { name: "DarkSalmon", value: "#E9967A" },
  { name: "DarkSeaGreen", value: "#8FBC8F" },
  { name: "DarkSlateBlue", value: "#483D8B" },
  { name: "DarkSlateGrey", value: "#2F4F4F" },
  { name: "DarkTurquoise", value: "#00CED1" },
  { name: "DarkViolet", value: "#9400D3" },
  { name: "DeepPink", value: "#FF1493" },
  { name: "DeepSkyBlue", value: "#00BFFF" },
  { name: "DimGray", value: "#696969" },
  { name: "DimGrey", value: "#696969" },
  { name: "DodgerBlue", value: "#1E90FF" },
  { name: "FireBrick", value: "#B22222" },
  { name: "FloralWhite", value: "#FFFAF0" },
  { name: "ForestGreen", value: "#228B22" },
  { name: "Fuchsia", value: "#FF00FF" },
  { name: "Gainsboro", value: "#DCDCDC" },
  { name: "GhostWhite", value: "#F8F8FF" },
  { name: "Gold", value: "#FFD700" },
  { name: "GoldenRod", value: "#DAA520" },
  { name: "Gray", value: "#808080" },
  { name: "Grey", value: "#808080" },
  { name: "Green", value: "#008000" },
  { name: "GreenYellow", value: "#ADFF2F" },
  { name: "HoneyDew", value: "#F0FFF0" },
  { name: "HotPink", value: "#FF69B4" },
  { name: "IndianRed", value: "#CD5C5C" },
  { name: "Indigo", value: "#4B0082" },
  { name: "Ivory", value: "#FFFFF0" },
  { name: "Khaki", value: "#F0E68C" },
  { name: "Lavender", value: "#E6E6FA" },
  { name: "LavenderBlush", value: "#FFF0F5" },
  { name: "LawnGreen", value: "#7CFC00" },
  { name: "LemonChiffon", value: "#FFFACD" },
  { name: "LightBlue", value: "#ADD8E6" },
  { name: "LightCoral", value: "#F08080" },
  { name: "LightCyan", value: "#E0FFFF" },
  { name: "LightGoldenRodYellow", value: "#FAFAD2" },
  { name: "LightGray", value: "#D3D3D3" },
  { name: "LightGrey", value: "#D3D3D3" },
  { name: "LightGreen", value: "#90EE90" },
  { name: "LightPink", value: "#FFB6C1" },
  { name: "LightSalmon", value: "#FFA07A" },
  { name: "LightSeaGreen", value: "#20B2AA" },
  { name: "LightSkyBlue", value: "#87CEFA" },
  { name: "LightSlateGray", value: "#778899" },
  { name: "LightSlateGrey", value: "#778899" },
  { name: "LightSteelBlue", value: "#B0C4DE" },
  { name: "LightYellow", value: "#FFFFE0" },
  { name: "Lime", value: "#00FF00" },
  { name: "LimeGreen", value: "#32CD32" },
  { name: "Linen", value: "#FAF0E6" },
  { name: "Magenta", value: "#FF00FF" },
  { name: "Maroon", value: "#800000" },
  { name: "MediumAquaMarine", value: "#66CDAA" },
  { name: "MediumBlue", value: "#0000CD" },
  { name: "MediumOrchid", value: "#BA55D3" },
  { name: "MediumPurple", value: "#9370D8" },
  { name: "MediumSeaGreen", value: "#3CB371" },
  { name: "MediumSlateBlue", value: "#7B68EE" },
  { name: "MediumSpringGreen", value: "#00FA9A" },
  { name: "MediumTurquoise", value: "#48D1CC" },
  { name: "MediumVioletRed", value: "#C71585" },
  { name: "MidnightBlue", value: "#191970" },
  { name: "MintCream", value: "#F5FFFA" },
  { name: "MistyRose", value: "#FFE4E1" },
  { name: "Moccasin", value: "#FFE4B5" },
  { name: "NavajoWhite", value: "#FFDEAD" },
  { name: "Navy", value: "#000080" },
  { name: "OldLace", value: "#FDF5E6" },
  { name: "Olive", value: "#808000" },
  { name: "OliveDrab", value: "#6B8E23" },
  { name: "Orange", value: "#FFA500" },
  { name: "OrangeRed", value: "#FF4500" },
  { name: "Orchid", value: "#DA70D6" },
  { name: "PaleGoldenRod", value: "#EEE8AA" },
  { name: "PaleGreen", value: "#98FB98" },
  { name: "PaleTurquoise", value: "#AFEEEE" },
  { name: "PaleVioletRed", value: "#D87093" },
  { name: "PapayaWhip", value: "#FFEFD5" },
  { name: "PeachPuff", value: "#FFDAB9" },
  { name: "Peru", value: "#CD853F" },
  { name: "Pink", value: "#FFC0CB" },
  { name: "Plum", value: "#DDA0DD" },
  { name: "PowderBlue", value: "#B0E0E6" },
  { name: "Purple", value: "#800080" },
  { name: "Red", value: "#FF0000" },
  { name: "RosyBrown", value: "#BC8F8F" },
  { name: "RoyalBlue", value: "#4169E1" },
  { name: "SaddleBrown", value: "#8B4513" },
  { name: "Salmon", value: "#FA8072" },
  { name: "SandyBrown", value: "#F4A460" },
  { name: "SeaGreen", value: "#2E8B57" },
  { name: "SeaShell", value: "#FFF5EE" },
  { name: "Sienna", value: "#A0522D" },
  { name: "Silver", value: "#C0C0C0" },
  { name: "SkyBlue", value: "#87CEEB" },
  { name: "SlateBlue", value: "#6A5ACD" },
  { name: "SlateGray", value: "#708090" },
  { name: "SlateGrey", value: "#708090" },
  { name: "Snow", value: "#FFFAFA" },
  { name: "SpringGreen", value: "#00FF7F" },
  { name: "SteelBlue", value: "#4682B4" },
  { name: "Tan", value: "#D2B48C" },
  { name: "Teal", value: "#008080" },
  { name: "Thistle", value: "#D8BFD8" },
  { name: "Tomato", value: "#FF6347" },
  { name: "Turquoise", value: "#40E0D0" },
  { name: "Violet", value: "#EE82EE" },
  { name: "Wheat", value: "#F5DEB3" },
  { name: "White", value: "#FFFFFF" },
  { name: "WhiteSmoke", value: "#F5F5F5" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "YellowGreen", value: "#9ACD32" },
];

function sortByLightness(a, b) {
  const aHSL = RGBToHSL(...hexToRGB(a.value));
  const bHSL = RGBToHSL(...hexToRGB(b.value));

  return aHSL.l > bHSL.l ? -1 : 1;
}

function sortByHue(a, b) {
  const aHSL = RGBToHSL(...hexToRGB(a.value));
  const bHSL = RGBToHSL(...hexToRGB(b.value));

  if (aHSL.h === bHSL.h) {
    if (aHSL.s === bHSL.s) return aHSL.l > bHSL.l ? 1 : -1;

    return aHSL.s > bHSL.s ? 1 : -1;
  }

  return aHSL.h > bHSL.h ? 1 : -1;
}

const colorsWithHSL = colors.map((color) => ({
  ...color,
  hsl: RGBToHSL(...hexToRGB(color.value)),
}));

export default function Home() {
  const [sortBy, setSortBy] = React.useState("hue");
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const sortFunctions = {
    hue: sortByHue,
    lightness: sortByLightness,
  };

  const sortedColors = [...colorsWithHSL];
  sortedColors.sort(sortFunctions[sortBy]);

  function handleCopy() {}

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const item = {
    hidden: {
      scale: 1.1,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-gradient-to-br from-gray-800 to-gray-900">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-end w-full pr-4">
        <Profile />
      </div>

      <main className="w-full px-4 md:px-10 lg:px-20 py-10">
        <h1 className="text-7xl font-bold pb-10 text-gray-50">
          All the colors of CSS
        </h1>
        <select
          className="p-2 m-4 ml-0 rounded-md"
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
          value={sortBy}
        >
          <option value="hue">Hue</option>
          <option value="lightness">Lightness</option>
        </select>
        <motion.div
          className="flex flex-wrap gap-5 pb-10"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {sortedColors.map((color) => (
            <motion.div variants={item} onClick={handleCopy} key={color.name}>
              <ClickNotificationArea onClick={handleCopy}>
                <Color {...color} />
              </ClickNotificationArea>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
