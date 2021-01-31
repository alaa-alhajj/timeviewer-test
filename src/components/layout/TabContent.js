import React from 'react';
import Helper from "../../utils/helper";
import {Image} from "semantic-ui-react";

/**
 * Site header/nav component
 */


export default class TabContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            activeItem: !Helper.empty(props.data.mainContent) ? props.data.mainContent[0] : null,
            activeItemLink: !Helper.empty(props.data.mainContent) ? props.data.mainContent[0].link : null,
            activeItemTitle: !Helper.empty(props.data.mainContent) ? props.data.mainContent[0].title : null,
            activeItemType: !Helper.empty(props.data.mainContent) ? props.data.mainContent[0].type : null,
            viewSingleAlbum: props.viewSingleAlbum,
            activeAlbum: null
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if ((this.props.data.mainContent !== prevProps.data.mainContent)) {
            this.setState({
                activeItem: !Helper.empty(this.props.data.mainContent) ? this.props.data.mainContent[0] : null,
                activeItemLink: !Helper.empty(this.props.data.mainContent) ? this.props.data.mainContent[0].link : null,
                activeItemTitle: !Helper.empty(this.props.data.mainContent) ? this.props.data.mainContent[0].title : null,
                activeItemType: !Helper.empty(this.props.data.mainContent) ? this.props.data.mainContent[0].type : null,
                viewSingleAlbum: this.props.viewSingleAlbum
            })
        }
        if ((this.props.data !== prevProps.data)) {
            this.setState({
                data: this.props.viewSingleAlbum ? this.state.activeAlbum.albumDetails : this.props.data,
                viewSingleAlbum: this.props.viewSingleAlbum
            })
        }
        if ((this.props.viewSingleAlbum !== prevProps.viewSingleAlbum)) {
            this.setState({
                viewSingleAlbum: this.props.viewSingleAlbum,
                data: this.props.viewSingleAlbum ? this.state.activeAlbum.albumDetails : this.props.data
            })
        }
    }

    openThumbnail = (item) => {
        this.setState({
            activeItem: item,
            activeItemType: item.type,
            activeItemLink: item.link,
            activeItemTitle: item.title
        })
    }

    openCourse = (item, activeTabIndex) => {
        this.setState({
            viewSingleAlbum: true,
            activeAlbum: item,
            data: item.albumDetails,
            activeItem: item.albumDetails.innerContent[0].mainContent[0]
        })
        this.props.openCourse(item, activeTabIndex);
    }

    showSideThumbnails = (thumbnails) => {
        let {data} = this.state
        let showFullWidth = !Helper.empty(data.showFullWidth) ? data.showFullWidth : false
        let thumbnailsBlock = []
        thumbnails.forEach((content, contentIndex) => {
            let thumbImage = !Helper.empty(content.coverImage) ? `url(${content.coverImage})` : '';
            thumbnailsBlock.push(
                <div className={'single-thumbnail'} key={contentIndex}
                     onClick={() => showFullWidth ? this.openCourse(content, this.props.activeTabIndex) : this.openThumbnail(content)}>
                    <div className={'thumbnail-cover'}
                         style={{backgroundImage: thumbImage}}>
                        <div className={'cover-type'}>
                            <span className={'videos-count'}>{content.videosCount}</span>
                            {Helper.getFileIcon(content.type, showFullWidth)}
                        </div>
                        <span
                            className={'file-type'}>{content.type !== "video" ? content.type : ''}</span>
                    </div>
                    <div className={'thumbnail-title'}>
                        {content.title}
                    </div>
                    <div className={'thumbnail-info'}>
                        <div className={'price-info'}>
                            <span className={'price'}>{content.price}</span>
                            <span className={'price-unit'}>{` ${content.priceUnit}`}</span>
                        </div>
                        {
                            content.downloadableTimes ?
                                <div className={'downloadable-times'}>
                                    <span>{content.downloadableTimes}</span>
                                    <Image src={"./images/download-icon.png"}/>
                                </div>
                                : null
                        }
                    </div>
                </div>
            )
        })
        return thumbnailsBlock;
    }

    render() {
        let {data, viewSingleAlbum, activeItem} = this.state
        let showFullWidth = !Helper.empty(data.showFullWidth) ? data.showFullWidth : false
        let content = data

        let activeItemLink = !Helper.empty(activeItem) ? activeItem.link : null
        let activeItemTitle = !Helper.empty(activeItem) ? activeItem.title : null
        let activeItemType = !Helper.empty(activeItem) ? activeItem.type : null

        return (
            <div className={'tab-content'}>
                {
                    !showFullWidth ?
                        <div className={'right-side-content'}>
                            <div className="video-container">
                                {
                                    !Helper.empty(activeItemLink) ?

                                        activeItemType === "video" ?

                                            <iframe frameBorder="0" scrolling="auto"
                                                    title={activeItemTitle}
                                                    src={activeItemLink} allowFullScreen=""
                                                    allow="autoplay; encrypted-media"></iframe>

                                            :
                                            <div className={'file-preview'}>
                                                <div className={'shopping-block'}>
                                                    <span>تحميل / شراء</span>
                                                    <Image src={"./images/shopping-icon.png"}
                                                           className={'shopping-icon'}/>
                                                </div>
                                                <div className={'file-info'}>
                                                    <div className={'cover-type-info'}>
                                                        {Helper.getFileIcon(activeItemType, showFullWidth)}
                                                        <span className={'cover-type'}>{activeItemType}</span>
                                                    </div>

                                                    <div className={'file-title'}>
                                                        {activeItemTitle}
                                                    </div>
                                                    <div className={'file-price'}>
                                                        <span className={'price'}>{activeItem.price}</span>
                                                        <span
                                                            className={'price-unit'}>{` ${activeItem.priceUnit}`}</span>
                                                    </div>
                                                    {
                                                        activeItem.downloadableTimes ?
                                                            <div className={'downloadable-times'}>
                                                                <span>{activeItem.downloadableTimes}</span>
                                                                <Image src={"./images/download-icon.png"}/>
                                                            </div>
                                                            : null
                                                    }

                                                </div>
                                            </div>
                                        : null
                                }
                            </div>
                        </div>
                        : null
                }

                <div
                    className={`${(showFullWidth && !viewSingleAlbum) ? 'full-width-content' : 'left-side-content'}`}>
                    {
                        !Helper.empty(content.introContent) ?
                            <div className={'intro-text'}>
                                <div className={'intro-text-scrollable'}>
                                    {
                                        content.introTitle ?
                                            <div className={'intro-title'}> {content.introTitle}</div>
                                            : null
                                    }

                                    {content.introContent}
                                </div>
                            </div>
                            : null
                    }
                    {
                        !Helper.empty(content.experiences) ?
                            <div className={'experiences-block'}>
                                <h5>الخبرات</h5>
                                {
                                    content.experiences.map((experience, index) => {
                                        return (
                                            <div className={'single-experience'} key={index}>{experience.title}</div>)
                                    })
                                }
                            </div>
                            : null
                    }

                    {
                        ((content.showSideThumbnails || showFullWidth) && !viewSingleAlbum) ?
                            !Helper.empty(content.mainContent) ?
                                <div className={'all-thumbnails'}>
                                    {this.showSideThumbnails(content.mainContent)}
                                </div>
                                :
                                !Helper.empty(content.innerContent) ?
                                    content.innerContent.map((section, index) => {
                                        return (<div className={'single-section'} key={index}>
                                            <div className={'section-title'}>
                                                {section.sectionTitle}
                                            </div>
                                            <div className={'all-thumbnails'}>
                                                {this.showSideThumbnails(section.mainContent)}
                                            </div>
                                        </div>)
                                    })
                                    : null
                            : null
                    }
                </div>


            </div>
        );
    }
};



