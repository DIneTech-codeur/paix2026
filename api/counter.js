
let globalCount = 23847; // valeur initiale

export default function handler(req, res) {

  if (req.method === 'GET') {
    return res.status(200).json({ count: globalCount });
  }

  if (req.method === 'POST') {
    globalCount++;
    return res.status(200).json({ count: globalCount });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
