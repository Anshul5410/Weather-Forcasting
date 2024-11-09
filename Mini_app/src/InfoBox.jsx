import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";

export default function InfoBox ({ info }) {
    let COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://plus.unsplash.com/premium_photo-1681140029717-094dacd4b0f8?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://plus.unsplash.com/premium_photo-1671229652411-4468b946b787?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className="CardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia 
                component="img" 
                alt= {info.city} 
                height="140" 
                image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                />
            <CardContent> 
                <Typography gutterBottom variant="h5" component="div"> 
                    {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>Min Temp: {info.tempMin}</p>
                    <p>Max Temp: {info.tempMax}</p>
                    <p>
                        The weather can be described as <i> {info.weather} </i> and it feels like {info.feelsLike}&deg;C.
                    </p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}