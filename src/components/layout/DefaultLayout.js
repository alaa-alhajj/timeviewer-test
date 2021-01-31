import React from 'react';
import TopBanner from "./TopBanner"
import Header from "./Header"
import {Image, Icon} from "semantic-ui-react";
import Helper from "../../utils/helper";

/**
 * Default site layout component
 */

export default class DefaultLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wrapperClass: props.wrapperClass,
            children: props.children,
            openedMenu: false,
            notifications: {
                waitingListCount: "١٤",
                notificationsList: [
                    {
                        time: "منذ ١٥ دقيقة",
                        username: "مستخدم 1",
                        userImage: "./images/user-menu.png"
                    }, {
                        time: "منذ ١٥ دقيقة",
                        username: "مستخدم 2",
                        userImage: "./images/user-menu.png"
                    }, {
                        time: "منذ ١٥ دقيقة",
                        username: "مستخدم 3",
                        userImage: "./images/user-menu.png"
                    }, {
                        time: "منذ ١٥ دقيقة",
                        username: "مستخدم 3",
                        userImage: "./images/user-menu.png"
                    }, {
                        time: "منذ ١٥ دقيقة",
                        username: "مستخدم 3",
                        userImage: "./images/user-menu.png"
                    }, {
                        time: "منذ ١٥ دقيقة",
                        username: "مستخدم 3",
                        userImage: "./images/user-menu.png"
                    }, {
                        time: "منذ ١٥ دقيقة",
                        username: "مستخدم 3",
                        userImage: "./images/user-menu.png"
                    }
                ],
            },
            userData: {
                isLoggedIn: true,
                name: "مالك محمد",
                siteName: "العيادة الرقمية",
                authorName: "لـ د. هند الناهض",
                authorStatus: "مشغول بإستشارة"
            }
        }
    }

    toggleMenu = () => {
        this.setState({openedMenu: !this.state.openedMenu})
    }

    render() {
        let {wrapperClass, children} = this.state


        let waitingListCount = !Helper.empty(this.state.notifications) ? this.state.notifications.waitingListCount : 0
        return (
            <div className={`${wrapperClass} ${this.state.openedMenu ? 'side-menu-opened' : ''}`}>

                <div className={'mainWrap'}>

                    <Header userData={this.state.userData} toggleMenu={this.toggleMenu}
                            openedMenu={this.state.openedMenu}
                            waitingListCount={waitingListCount}/>
                    <div className={'main-content'}>
                        <TopBanner props={this.state.userData}/>
                        {children}
                    </div>
                </div>

                <div className={`side-menu`}>
                    <div className={'menu-head'} onClick={() => this.toggleMenu()}>
                                          <span className={'waiting-count'}>
                                {waitingListCount}
                                </span>
                        قائمة الأنتظار
                    </div>
                    <div className={`notifications-list`}>
                        {
                            this.state.notifications.notificationsList.map((notification, index) => {
                                return (
                                    <div className={'notification-item'} key={index}>
                                        <Image src={notification.userImage}/>
                                        <div className={'notification-content'}>
                                            <span className={'time'}>{notification.time}</span>
                                            <span className={'notification-username'}>{notification.username}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className={'menu-footer'}>
                        <div className={'copyright-text'}>
                            جميع الحقوق محفوظة
                            تايم فيوير © ٢٠١٣ - ٢٠٢٠
                        </div>
                        <div className={'social-accounts'}>
                            <a href={'https://www.google.com/'} target={"_blank"} rel="noreferrer"><Icon name={'instagram'}/></a>
                            <a href={'https://www.google.com/'} target={"_blank"} rel="noreferrer"><Icon name={'twitter'}/></a>
                            <a href={'https://www.google.com/'} target={"_blank"} rel="noreferrer"><Icon name={'facebook official'}/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


