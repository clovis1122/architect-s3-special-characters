// learn more about HTTP functions here: https://arc.codes/http
import arc from "@architect/functions";

export async function handler(req) {
  return {
    statusCode: 200,
    headers: {
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/html; charset=utf8",
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
</head>
<body>
<img width="100" alt="architect logo" src="${arc.static("logo+.svg")}" />
</body>
</html>
`,
  };
}
