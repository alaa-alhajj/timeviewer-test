import React from 'react';
import {Container, Grid, Image, Icon} from 'semantic-ui-react'

/**
 * Site header/nav component
 */
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: props.userData,
            mainMenuOpened: false
        }
    }

    openMainMenu = () => {
        this.setState({
            mainMenuOpened: !this.state.mainMenuOpened
        })
    }

    render() {
        let {userData} = this.state
        if (userData.isLoggedIn) {
            return (
                <>
                    <Container fluid>
                        <Grid verticalAlign='middle' padded className="site-header">
                            <Grid.Column mobile={16} tablet={1} computer={1} className={'hide-on-mobile'}>
                                <Image src='./images/info-icon.png' className={'info-icon'}/>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={5} computer={5} className={'hide-on-mobile'}>
                                <div className={'user-info'}>
                                    <Image circular src='./images/user-icon.png' className={'user-icon'}/>
                                    <span className={'welcome-text'}>
                                      مرحباً بك
                                    </span>
                                    <strong className={'username'}> {userData.name}</strong>
                                </div>
                            </Grid.Column>
                            <Grid.Column mobile={10} tablet={10} computer={10}>
                            <span className={'waiting-list-button'} onClick={() => this.props.toggleMenu()}>
                                 <div className={'waiting-list-text'}>
                                <Icon name={`arrow ${this.props.openedMenu ? 'right' : 'left'}`}></Icon>
                                     {

                                         !this.props.openedMenu ?
                                             <>
                                             <span className={'waiting-count'}>
                                {this.props.waitingListCount}
                                </span>
                                                 قائمة الأنتظار
                                             </>
                                             : null
                                     }
 </div>
                            </span>
                            </Grid.Column>
                            <Grid.Column mobile={6} tablet={2} computer={2} className={'show-on-mobile-only'}>
                                <Image src={'./images/menu-icon.png'}
                                       className={`menu-icon  ${this.state.mainMenuOpened ? 'opened' : ''}`}
                                       onClick={this.openMainMenu}/>
                            </Grid.Column>
                        </Grid>
                    </Container>
                    <div className={`main-menu ${this.state.mainMenuOpened ? 'opened' : ''}`}>
                        <ul>
                            <li className="menu-item"><a href="./">الرئيسية</a></li>
                            <li className="menu-item"><a href="./">نبذه عنا</a></li>
                            <li className="menu-item"><a href="./">الخبراء</a></li>
                            <li className="menu-item"><a href="./">سؤال وجواب</a></li>
                            <li className="menu-item"><a href="./">اختبارات كورونا</a></li>
                            <li className="menu-item"><a href="./">أتصل بنا</a></li>
                            <li className="menu-item"><a href="./">أنضم كخبير</a></li>
                        </ul>
                    </div>
                    <div className={'fixed-btn'}>
                        حجز عيادة (20 دينار كويتي)
                    </div>
                </>
            );
        }
        return null;
    }
}

