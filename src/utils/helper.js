import React from "react";
import {Image} from "semantic-ui-react";


export default class Helper {
    static empty(value) {
        return (typeof value === "undefined" || typeof value === 'undefined' || typeof value == undefined || value === null || value === '' || value === "" || value.length === 0 || value === 'undefined')
    }

    static getFileIcon(type, isFullWidth) {
        let icon = ''
        if (type) {
            switch (type) {
                case "word":
                case "pdf":
                    icon = "file-icon.png"
                    break;
                case "audio":
                    icon = "audio-icon.png"
                    break;
                default:
                    icon = isFullWidth ? "video-icon-colored.png" : "video-icon.png"
                    break;
            }
            return <Image src={`/images/${icon}`}/>
        } else {
            return null
        }
    }
}
