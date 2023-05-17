import Head from "next/head";
function PageHead({ headTitle, description }) {
    return (
        <>
            <Head>
            <meta name='description' content={description} />
                <title>
                    {headTitle ? headTitle : "Web3School - Learn | Build | Deploy"}
                </title>
                <link rel="icon" href="/assets/imgs/template/favicon.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </Head>
        </>
    );
}
export default PageHead;
