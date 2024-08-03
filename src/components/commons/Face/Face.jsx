import Star from '../Icons/Star';
import './Face.scss';

const Face = () => {
    return (
        <div className="face">
            <div className="head">
                <div className="eyes">
                    <div className="eye">
                        <div className="pupille"></div>
                    </div>
                    <div className="eye">
                        <div className="pupille"></div>
                    </div>
                </div>

                <div className="stars">
                    <div className="st --1">
                        <Star />
                    </div>
                    <div className="st --2">
                        <Star />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Face;
