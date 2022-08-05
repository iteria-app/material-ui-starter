import fetch from 'node-fetch'

exports.handler = async (event) => {
  
  const commitData = JSON.parse(event.body)
  const actions : {action: string, content: string, file_path: string}[] = []
  console.log(encodeURIComponent(commitData.projectPath))
  for (const [path, file] of Object.entries(commitData.changedFiles)) {
    if (file.data != null) {
      if(file.newFile)
        actions.push({action: "create", content: file.data, file_path: path})
        else 
          actions.push({action: "update", content: file.data, file_path: path})
    } else {
        actions.push({action: "delete", content: file.data, file_path: path})
    }
  }

  const body = {
    id: encodeURIComponent(commitData.projectPath),
    branch: commitData.branch,
    commit_message: commitData.commitMessage,
    actions: actions
  
  }

  const requestOptions = {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          "PRIVATE-TOKEN": commitData.token,
      },
      body: JSON.stringify(body),
  };

  const res = await fetch(`https://gitlab.com/api/v4/projects/${encodeURIComponent(commitData.projectPath)}/repository/commits`, requestOptions)
  const result = await res.json()
  console.log(result)

  if (result.errors) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, errors: result.errors })
    } 
  } else {
    return {
      statusCode: 200,
      body:  JSON.stringify({ success: true, errors: '' })
    } 
  }
}