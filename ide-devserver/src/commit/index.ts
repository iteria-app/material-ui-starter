export const fetchHeadOid = async function(){

    const resp = await fetch(`/.netlify/functions/GetFetchHeadOid`,
      {
          method: "POST",
      });
  
    const textResponse = await resp.json();
    return textResponse.gitHub.repository.defaultBranchRef.target.oid;
  
}

export const executeCommit = async function(commitMessage: string, filesystem: any){
  
    const headOid = await fetchHeadOid();
    console.log(filesystem);
  
    const resp = await fetch(`/.netlify/functions/ExecuteCommitAddition`,
      {
          method: "POST",
          headers: {
              headOid: headOid,
              commitMessage: commitMessage
          }
      });
  
    const textResponse = await resp.json();
    if(textResponse.ExecuteCommitErrors){
      alert("commit failed :(")
    } else {
      alert("commit successful :)")
    }
    return textResponse;
}