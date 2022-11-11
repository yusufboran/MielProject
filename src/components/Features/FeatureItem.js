import React from 'react';
import { useTranslation } from 'react-i18next';

function FeatureItem(props) {
    const { t } = useTranslation();
    return (
        <div className="col-md-4">
            <div className="icon-box-item">
                <div className="icon-box__icon">
                    <img src={require('../../assets/img/' + props.img)} alt="Businex-Feature"/>
                </div>
                <div className="icon-box__info">
                    <h5>{t( props.title)}</h5>
                    <p>{t( props.text)}</p>
                </div>
            </div>
        </div>
    );
}

export default FeatureItem;