import RenderBlocks from '@/utils/RenderBlocks';
import React from 'react';
import axios from 'axios';

export default function Page({ page }) {
  return (
    <div>
      <RenderBlocks layout={page.layout} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const pageReq = await axios(`/api/pages?limit=100`);
  const pageData = pageReq.data;

  const returnObj = {
    paths: pageData.docs.map(({ slug, id }) => {
      return {
        params: { slug: slug !== 'index' ? slug.split('/') : false },
      };
    }),
    fallback: false,
  };
  return returnObj;
};

export const getStaticProps = async (ctx) => {
  const slug = ctx.params?.slug || 'index';

  //fetch page
  const pageReq = await axios(`/api/pages?where[slug][equals]=${slug}`);
  let pageData = pageReq.data.docs[0];

  return {
    props: {
      page: pageData,
    },
  };
};
