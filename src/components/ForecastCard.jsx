import {Link} from "react-router";
import {useTranslation} from "react-i18next";

const ForecastCard = ({day}) => {

    const {t} = useTranslation();

    const dateString = day.date;
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);


    date.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    tomorrow.setHours(0,0,0,0);

    const formatDate = (d) =>{
        return new Intl.DateTimeFormat('et-EE').format(d);
    }

    const displayDate = () =>{
        if (formatDate(date)===formatDate(today)) return t('today');
        if (formatDate(date)===formatDate(tomorrow)) return t('tomorrow');

        return formatDate(date);
    }


    return (
        <Link
            to={`/details/${day.date}`}
            state={{passedDay: day}}
        >
            <div className="card">
                <div className="card-left">
                    <div className="text-m"><img src={`https:${day.day.condition?.icon}`} alt="weather icon"/></div>
                    <div className="text-s">
                        <p className="text-m m-0 text-bold">{displayDate()}</p>
                        <p className="text-m mt-1 text-secondary">{day.day.condition.text}</p>
                    </div>
                </div>
                <div className="card-right">
                    <p className="text-m text-bold">{day.day.maxtemp_c}°C</p>
                    <p className="text-m text-secondary">{day.day.mintemp_c}°C</p>
                </div>
            </div>
        </Link>
    );
}
export default ForecastCard;