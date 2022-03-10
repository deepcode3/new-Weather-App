import clear_night_small from "../Assets/icon_clear_night_small.svg";
import clear_night from "../Assets/icon_clear_night.svg";
import mostly_cloudy_small from "../Assets/icon_mostly_cloudy_small.svg";
import mostly_cloudy_big from "../Assets/icon_mostly_cloudy_big.svg";
import mostly_sunny_small from "../Assets/icon_mostly_sunny_small.svg";
import mostly_sunny from "../Assets/icon_mostly_sunny.svg";
import partly_cloudy_small from "../Assets/icon_partly_cloudy_small.svg";
import partially_cloudy_big from "../Assets/icon_partially_cloudy_big.svg";
import rain_small from "../Assets/icon_rain_small.svg";
import rain_big from "../Assets/icon_rain_big.svg";
import thunderstrom_big from "../Assets/icon_thunderstorm_big.svg";
import thunderstrom_small from "../Assets/icon_thunderstorm_small.svg";
import styled from "styled-components";

const WeatherIcon = (props) => {
  const { weather } = props;
  const icon = null;
  if (200 <= weather?.weather[0]?.id <= 232) {
    icon = thunderstrom_big;
  } else if (300 <= weather?.weather[0]?.id <= 622) {
    icon = rain_big;
  } else if (701 <= weather?.weather[0]?.id <= 781) {
    icon = partially_cloudy_big;
  } else if (800 === weather?.weather[0]?.id) {
    icon = mostly_sunny;
  } else if (801 <= weather?.weather[0]?.id <= 804) {
    icon = mostly_cloudy_big;
  } else {
    icon = mostly_sunny;
  }

  return <></>;
};
export default WeatherIcon;
const Image = styled.img`
  height: 84px;
  width: 80px;
  display: flex;
`;
