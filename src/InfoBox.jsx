import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
//cold
import AcUnitIcon from '@mui/icons-material/AcUnit';
//hot
import FlareIcon from '@mui/icons-material/Flare';
//rain
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function InfoBox({ info }) {
  const hot_url =
    "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?b=1&s=170667a&w=0&k=20&c=H7WvPOgOX-iVivqwBE842Wda80r7fAm5ZFalNAO-upk=";
  const cold_url =
    "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?b=1&s=170667a&w=0&k=20&c=n21SIzH1emvYJmePa_kg8r0AcdVu2vTOk327qk4tYzE=";
  const rain_url =
    "https://media.istockphoto.com/id/1225022383/photo/rain-on-umbrella-concept-for-bad-weather-winter-or-protection.jpg?s=1024x1024&w=is&k=20&c=rzo08tkhBeLcTUXmk4HL3U5QuS0pIIklNWTM0t-dbv4=";

  return (
    <div className="InfoBox">
      <div className="CardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? rain_url
                : info.temp > 15
                ? hot_url
                : cold_url
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
              info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                ? <FlareIcon />
                : <AcUnitIcon />
            }
            </Typography>
            <Typography
              variant="variant=h6"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                <i>
                  The Weather can be describe as {info.weather} and Feels Like{" "}
                  {info.feelsLike}&deg;C
                </i>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
export default InfoBox;
