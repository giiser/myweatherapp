import ForecastCard from "./ForecastCard.jsx";
import {useTranslation} from "react-i18next";

const LongTermForecast = ({error, loading, days}) => {

    const {t} = useTranslation();



    return (
        <div className="container">
            <div className="card-header">
                <h3 className="text-title mt-1">{t('next')} 3 {t('days')}</h3>
            </div>

            {/*trying out to list forecast cards*/}
            {!error && !loading && (
                <>
                    {days.length > 0? days.map(day => (
                        <ForecastCard key={day.date_epoch} day={day} />
                    )):<p>Failed to load forecast card</p>}
                </>

            )}
        </div>
    );
}
export default LongTermForecast;