import PropTypes from "prop-types";

export const WeatherForecast = ({ weather = {} }) => {
    if (!weather || !weather.weather) {
        return <p>Yükleniyor...</p>
    }

    const descriptions = weather.weather.map(data => data.description).join(", ");
    const date = new Date(weather.dt * 1000).toLocaleDateString()
    return (
        <>
            <h1>{weather.name}</h1>
            <h4>{descriptions}</h4>
            <h4>{weather.main.temp} Derece</h4>
            <h4>{date}</h4>
        </>
    );
};


WeatherForecast.propTypes = {
    weather: PropTypes.shape({
        name: PropTypes.string,
        main: PropTypes.shape({
            temp: PropTypes.number,
        }),
        dt: PropTypes.number,
    }),
};