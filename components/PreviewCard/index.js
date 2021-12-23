import React from "react";
import styles from './style.module.scss';

const PreviewCard = ({
                         url, title, thumbnailURL, description,
                         price, daysLeft, avatarURL, usernameURL,
                         username
                     }) => {
    return (
        <div className={styles.previewCard}>
            <a className={styles.cardImageBox}
               href={url}
            >
                <img className={styles.cardImage}
                     src={thumbnailURL}
                     alt={title}
                     loading={'lazy'}
                />
            </a>
            <h2 className={styles.cardHeading}>
                <a href={url}>
                    {title}
                </a>
            </h2>
            <p className={styles.cardBody}>
                {description}
            </p>
            <div className={styles.cardIndicator}>
                <span className={styles.ethereumText}>
                    <img className={styles.icon}
                         src={'/img/icon-ethereum.svg'}
                         alt={'ethereum'}
                         loading={'lazy'}
                    />
                    {price} ETH
                </span>
                <span className={styles.daysLeftText}>
                    <img className={styles.icon}
                         src={'/img/icon-clock.svg'}
                         alt={'clock'}
                         loading={'lazy'}
                    />
                    {daysLeft} days left
                </span>
            </div>

            <hr/>

            <div className={styles.creationWrapper}>
                <img className={styles.avatar}
                     src={avatarURL}
                     alt={username}
                     loading={'lazy'}
                />
                Creation of&nbsp;
                <a className={styles.usernameText}
                   href={usernameURL}>
                    {username}
                </a>
            </div>
        </div>
    );
};

export default PreviewCard;
