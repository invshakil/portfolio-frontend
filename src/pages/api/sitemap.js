import GenerateSitemap from '../../lib/sitemap';
export default async function handler(req, res) {
    const sitemap = await GenerateSitemap();
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
}