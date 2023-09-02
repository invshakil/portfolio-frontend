import React from 'react';
import Disqus from 'disqus-react';

const DisqusComments = ({ shortname, identifier, title, url, theme }) => {
    const disqusConfig = {
        url,
        identifier,
        title,
        theme: theme === 'dark' ? 'dark' : 'light',
    };

    return <Disqus.DiscussionEmbed shortname={shortname} config={disqusConfig} />;
};

export default DisqusComments;