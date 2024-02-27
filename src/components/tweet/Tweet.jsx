import './Tweet.css';
import PropTypes from 'prop-types';
import { Heart } from '@phosphor-icons/react';

export function Tweet(props){

    return(
            // <Link to="/status" className="tweet">
            <div className="tweet">
                <img src="./src/assets/profile.png" alt="Sapé" />

                <div className="tweet-content">
                    <div className="tweet-content-header">
                        <strong>Sapé Agro</strong>
                        <span>@sapé_farm</span>
                    </div>
                    <p>
                        {props.content}
                    </p>
                    
                    <div className="tweet-content-footer">
                        <button type="button">
                            <Heart/>
                            20
                        </button>
                        {/* <button type="button">
                            20
                        </button>
                        <button type="button">
                            20
                        </button> */}
                    </div>
                </div> 
            </div>
                
            // </Link>
    )
}
Tweet.propTypes = {
    content: PropTypes.string.isRequired,
  };