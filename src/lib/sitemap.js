import Api from "./axios";
const { SitemapStream, streamToPromise } = require('sitemap');

const GenerateSitemap = async () => {
    const smStream = new SitemapStream({
        hostname: process.env.NEXT_PUBLIC_URL
    });

    // Add static routes
    const staticRoutes = ['/', '/about-me', '/skills'];
    staticRoutes.forEach((route) => {
        smStream.write({ url: route, changefreq: 'daily', priority: 0.8 });
    });

    const articlesResponse = await Api.get(`/articles/all`);
    const categoriesResponse = await Api.get(`/categories`);
    const typesResponse = await Api.get(`/allTags`);

// Check if responses contain valid data
    if (Array.isArray(articlesResponse.data.all.original.data)) {
        const articles = articlesResponse.data.all.original.data;

        // Add articles to sitemap
        articles.forEach((article) => {
            smStream.write({
                url: `/${article.slug}`, // Modify the URL pattern accordingly
                changefreq: 'daily',
                priority: 0.8
            });
        });
    }

    if (Array.isArray(categoriesResponse.data.data.data)) {
        const categories = categoriesResponse.data.data.data;

        // Add categories to sitemap
        categories.forEach((category) => {
            smStream.write({
                url: `/category/${category.slug}`, // Modify the URL pattern accordingly
                changefreq: 'daily',
                priority: 0.8
            });
        });
    }

    // if (Array.isArray(typesResponse.data.data)) {
    //     const types = typesResponse.data.data;
    //
    //     // Add types (tags) to sitemap
    //     types.forEach((tag) => {
    //         smStream.write({
    //             url: `/tag/${tag.slug}`, // Modify the URL pattern accordingly
    //             changefreq: 'daily',
    //             priority: 0.8
    //         });
    //     });
    // }

    smStream.end();
    const sitemap = await streamToPromise(smStream);
    return sitemap.toString();
};

export default GenerateSitemap;