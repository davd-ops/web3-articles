import loadArticles from "../../../lib/load-articles";


export default async function handler(req, res) {
    try {
        const articles = await loadArticles()

        return res.status(200).json(articles)
    } catch (error) {
        return res.status(500).json({
            message: new Error(error).message,
            success: false,
        })
    }
}