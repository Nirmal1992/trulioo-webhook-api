// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    res.status(200).json({
      challenge: req?.body?.callenge || "",
    });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
