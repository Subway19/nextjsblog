import Link from "next/link";

import { Layout, Bio, SEO} from "@components/common";
import { getSortedPosts } from "@utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <h4 className="mb-2">
            <h4 className="mb-2">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="text-3xl font-bold text-yellow-600 font-display">
                  {title}
                </a>
              </Link>
            </h4>
            <span className="text-sm">{date}</span>
          </h4>
          <section>
            <p className="mb-8 text-lg">{description}</p>
          </section>
        </article>
      ))}
      <Bio className="my-14" />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
