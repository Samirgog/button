export function validateInitData(initData: string, botToken: string) {
  const urlSearchParams = new URLSearchParams(initData);
  const data = Object.fromEntries(urlSearchParams.entries());

  console.log({ initData, botToken, urlSearchParams, data });

  const checkString = Object.keys(data)
    ?.filter((key) => key !== "hash")
    ?.map((key) => `${key}=${data[key]}`)
    ?.sort()
    ?.join("\n");

  console.log({ checkString });

  //   const secretKey = crypto.createHmac("sha256", "WebAppData").update(botToken).digest();
  //   const signature = crypto.createHmac("sha256", secretKey).update(checkString).digest("hex");

  //   return data.hash === signature;
}
