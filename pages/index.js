import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/Date';
import Layout, { siteTitle } from '../components/Layout';
import { getSordetedPostsData } from '../lib/posts';
import utilStyles from '../styles/Utils.module.css';

export const getStaticProps = async () => {
  const allPostsData = getSordetedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

const Home = ({ allPostsData }) => {
  console.log(allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi i am learning NextJs</p>
        <p>
          (This is a sample website - you’ll be building a site like this on){' '}
          <a href="https://nextjs.org/learn">our NextJs tutorial</a>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export default Home;


