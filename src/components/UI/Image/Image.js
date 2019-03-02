import React from 'react';

const image = (props) => {
    /** 
     * relative path is path fragment to file located in 'Public' folder 
     * eg: public/avatar/eric.jpg, relative path is 'avatat'
    */
    const urlPartial = props.relativePath + '/';
    const imageName = props.url.split('/');
    const imageUrl = urlPartial + imageName.pop();
    return (
        <img className={props.classes} src={process.env.PUBLIC_URL + imageUrl} alt={props.altText}/>
    );
}

export default image;