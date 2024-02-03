import Head from 'next/head'

function IndexPage({ pageTitle }) {
    return (
        <div>
            <Head>
                <title>pageTitle</title>
                <meta property="og:title" content={pageTitle} key="title" />
            </Head>
            <Head>
                <meta property="og:title" content={pageTitle} key="title" />
            </Head>
        </div>
    )
}

export default IndexPage