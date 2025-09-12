import {useTranslation} from "react-i18next";

const DetailedCard = ({id, label, value, unit, icon}) => {

    const {t} = useTranslation();

    return (
        <div className="forecast-grid-item">
            <p>{icon}</p>
            <label htmlFor={id} className="text-m text-secondary">{t(`${label}`)}</label>
            <div id={id} className="text-m">{value} {unit}</div>
        </div>
    )
}
export default DetailedCard;