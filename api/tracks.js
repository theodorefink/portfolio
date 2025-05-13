export default async function handler(req, res) {
    const client_id = 'AXHkknI02RnaQ0vVJ3FK3pVcoToTlmFK';
    const user_id = '505619184';
  
    try {
      const response = await fetch(`https://api-v2.soundcloud.com/users/${user_id}/tracks?client_id=${client_id}&limit=5`);
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch tracks' });
    }
  }
  