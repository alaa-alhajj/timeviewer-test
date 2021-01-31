import React from "react";
import {Icon} from 'semantic-ui-react';
import TabContent from "./TabContent";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";

export default class SiteTabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabsConfig: this.props.tabsConfig,
            activeTab: this.props.activeTab,
            activeTabIndex: this.props.activeTabIndex
        };
    }


    handleTabChange = (event, data, index) => {
        let tabsConfig = this.state.tabsConfig
        let activeTab = tabsConfig[index]
        activeTab.open = false
        this.setState({activeTab: data.title, activeTabIndex: index, tabsConfig: tabsConfig});
    };


    render() {
        let tabsConfig = this.state.tabsConfig;
        return (
            tabsConfig.length ?
                <>
                    <div className={'tabs-container'}>
                        <div className={'tab-list'}>
                            {
                                tabsConfig.map((tab, index) =>
                                    <div
                                        id={tab.key}
                                        name={tab.key}
                                        key={index}
                                        index={index}
                                        className={`tab-list-item ${this.state.activeTab === tab.title ? 'tab-list-active' : ''}`}
                                        onClick={(e, data) => this.handleTabChange(e, tab, index)}
                                        ref={(ref) => {
                                            this[tab.key] = ref
                                        }}>
                                        {
                                            tab.open ?
                                                <Icon name={'arrow left'}/>
                                                : null
                                        }
                                        {tab.title}
                                    </div>
                                )
                            }
                        </div>
                        {/*show calc icons*/}
                        <div className={'calculation-icons'}>
                            <div className={'single-calculation'}>
                                <Image src={'./images/voice-icon.png'}/>
                                <div className={'info'}>
                                    <strong>تجربة الصوت </strong>
                                    <span>جيد جدآ</span>
                                </div>
                            </div>
                            <div className={'single-calculation'}>
                                <Image src={'./images/camera-icon.png'}/>
                                <div className={'info'}>
                                    <strong>تجربة الكاميرا</strong>
                                    <span>لم تقم باختبارها</span>
                                </div>
                            </div>
                            <div className={'single-calculation'}>
                                <Image src={'./images/wifi-icon.png'}/>
                                <div className={'info'}>
                                    <strong>سرعة الأنترنت</strong>
                                    <span>Mbps ٣٦</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={"ui segment"}>
                        <div className="active-tab-content">
                            <TabContent
                                viewSingleAlbum={tabsConfig[this.state.activeTabIndex].open}
                                openCourse={this.props.openCourse}
                                activeTabIndex={this.state.activeTabIndex}
                                data={tabsConfig[this.state.activeTabIndex].content ? tabsConfig[this.state.activeTabIndex].content : null
                                }/>
                        </div>
                    </div>

                </>
                :
                null
        )
    }
}