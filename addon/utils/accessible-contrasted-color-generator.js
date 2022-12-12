import Color from 'color';

// See this link that explains why we had to implement lightenBy and darkenBy  https://github.com/Qix-/color/issues/53#issuecomment-487822576
function lightenBy(color, ratio) {
  const lightness = color.lightness();
  return color.lightness(lightness + (100 - lightness) * ratio);
}

function darkenBy(color, ratio) {
  const lightness = color.lightness();
  return color.lightness(lightness - lightness * ratio);
}

export default function (hex) {
  const color = Color(hex);
  let newColor = color;
  let contrast;
  do {
    if (color.luminosity() < 0.5) {
      newColor = lightenBy(newColor, 0.05);
    } else {
      newColor = darkenBy(newColor, 0.05);
    }
    contrast = color.contrast(newColor);

    // newColor.luminosity() can return 0.9999..99 when newColor is white but reinstanciating Color with the hexacode #FFFFFF returns 1
  } while (contrast < 4.5 && Color(newColor.hex()).luminosity() < 1);
  return newColor.hex();
}
