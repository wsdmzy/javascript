import Head from 'next/head';
import Header from './Header'
export default ({ title, children }) => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>Next-Antd-Scafflod</title>
    </Head>
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
      body {
        font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
      }
      .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
    <Header title={title} ></Header>
    <div className='content-container'>
      {children}
    </div>
  </div>
);
