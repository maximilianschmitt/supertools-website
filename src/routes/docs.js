const _ = require("lodash");
const fm = require("front-matter");
const fs = require("fs-extra");
const path = require("path");
const marked = require("marked");

const CWD = process.cwd();
const DOCS_DIR = "docs";
const categorySlugs = fs.readdirSync(DOCS_DIR);
const postsByCategorySlug = categorySlugs.reduce((accu, categorySlug) => {
    const postFileNames = fs
        .readdirSync(path.join(DOCS_DIR, categorySlug))
        .filter(postFileName => postFileName !== "index.json")
        .filter(postFileName => postFileName !== "images");

    const posts = postFileNames.map(postFileName => {
        const rawPostContent = fs.readFileSync(
            path.join(DOCS_DIR, categorySlug, postFileName),
            "utf8"
        );
        const { attributes, body } = fm(rawPostContent);

        const slug = path.basename(postFileName, ".md");

        const post = {
            slug,
            categorySlug,
            body: marked(body),
            title: attributes.title,
            position: attributes.position
        };
        post.href = `/docs/${categorySlug}/${post.slug}`;

        if (post.position == null) {
            throw new Error(
                `Please provide position for post ${CWD}/${DOCS_DIR}/${categorySlug}/${postFileName}`
            );
        }

        return post;
    });

    accu[categorySlug] = _.orderBy(posts, "position");

    return accu;
}, {});
const unsortedCategories = categorySlugs.map(categorySlug => {
    const category = require(`${CWD}/${DOCS_DIR}/${categorySlug}/index.json`);
    category.slug = categorySlug;
    category.posts = postsByCategorySlug[categorySlug];

    if (category.position == null) {
        throw new Error(
            `Please provide position for category ${categorySlug}: ${CWD}/${DOCS_DIR}/${categorySlug}/index.json`
        );
    }

    return category;
});
const categories = _.orderBy(unsortedCategories, "position", ["asc"]);

const docs = app => {
    app.get(["/docs", "/docs/:categorySlug/:postSlug"], (req, res, next) => {
        const { categorySlug, postSlug } = req.params;

        let activePost;
        if (categorySlug && postSlug) {
            activePost = postsByCategorySlug[categorySlug].find(
                post => post.slug === postSlug
            );
        } else {
            const category = categories[0];
            if (!category) {
                return next();
            }

            activePost = category.posts[0];
        }
        if (!activePost) {
            return next();
        }
        const category = categories.find(
            category => category.slug === activePost.categorySlug
        );
        const activePostIndex = category.posts.findIndex(
            post => post.slug === activePost.slug
        );
        const nextPost =
            activePostIndex < category.posts.length - 1
                ? category.posts[activePostIndex + 1]
                : null;
        const previousPost =
            activePostIndex > 0 ? category.posts[activePostIndex - 1] : null;

        const data = {
            categories,
            activePost,
            nextPost,
            previousPost
        };

        res.render("docs", data);
    });
};

module.exports = docs;
