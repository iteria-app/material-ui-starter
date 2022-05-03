import NetlifyGraph from './netlifyGraph';

export const handler = async function (event, context) {
  console.log(event.netlifyGraphToken);

  const { errors, data } = await NetlifyGraph.fetchFetchHeadOid(
    {
      /* variables */
    },
    { accessToken: event.netlifyGraphToken }
  );

  console.log(errors);
  console.log(data);

  return {
    statusCode: errors ? 500 : 200,
    body: { errors, data },
    headers: { 'Content-Type': 'application/json' }
  };
};
