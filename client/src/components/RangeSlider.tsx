import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider({
  setSliderValue,
}: {
  setSliderValue: any;
}) {
  const [value, setValue] = React.useState<number[]>([10, 100]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    const val = value[1] * 10;
    const sliderVal = `${val}`;
    console.log("Value is--" + sliderVal);
    setSliderValue(sliderVal);
  };

  return (
    <div>
      <div className="propertyPriceField">
        <div className="value1">{value[0] * 10}k</div>
        <div className="value2">{value[1] * 10}k</div>
      </div>
      <div className="sliderBox">
        <Box sx={{ width: 250 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </div>
    </div>
  );
}
