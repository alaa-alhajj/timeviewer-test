import React from 'react';
import {Grid, Image, Container} from 'semantic-ui-react'

import Rating from 'react-rating'

/**
 * Top banner component
 */
export default class TopBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props.props
        }
    }

    render() {
        let props = this.state.props
        return (
            <Container fluid className={'custom-container top-banner'}>
                <Grid verticalAlign='middle' padded>


                    <Grid.Column mobile={16} tablet={5} computer={5}>
                        <div className={'intro-info'}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19"
                                 className={'home-icon'}>
                                <path id="icons8-home_1_" fill="#435f95"
                                      d="M12 2a1 1 0 0 0-.711.3L1.2 11.1a.5.5 0 0 0 .3.9H4v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8h2.5a.5.5 0 0 0 .3-.9L12.717 2.3h-.006A1 1 0 0 0 12 2z"
                                      data-name="icons8-home (1)" transform="translate(-1 -2)"/>
                            </svg>

                            <Image src='./images/hind.png' className={'hind-img'} alt={'hind-img'}/>

                            <div className={'author-info'}>
                                <div className={'site-name'}>{props.siteName}</div>
                                <div className={'author-name'}>{props.authorName}</div>
                                <div className={'evaluate'}>
                                    <Rating
                                        stop={4}
                                        emptySymbol={<img src="./images/star-empty.png" className="star-icon"
                                                          alt={'star-icon'}/>}
                                        fullSymbol={<img src="./images/star-full.png" className="star-icon"
                                                         alt={'star-icon'}/>}
                                    />
                                    تقييم
                                </div>
                            </div>
                            <div className={'author-status'}>{props.authorStatus}</div>
                        </div>
                    </Grid.Column>


                    <Grid.Column mobile={16} tablet={11} computer={11}>
                        <div className={'flex-display'}>
                            <div className={'user-info info-icon-red'}>
                                <Image src='./images/info-icon-white.png' className={'info-icon show-on-mobile-only'}
                                       alt={'info-icon'}/>
                            </div>
                            <Image circular src='./images/user-icon.png' className={'user-icon show-on-mobile-only'}
                                   alt={'user-icon'}/>
                            <Image src='./images/logo.png' className={'logo'} alt={'logo'}/>
                        </div>
                    </Grid.Column>

                </Grid>
            </Container>
        );
    }
}



