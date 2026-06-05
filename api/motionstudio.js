export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 800,
        temperature: 0.7,
        messages: [
          {
            role: 'system',
            content: 'You are a motion design expert who understands CSS animations, UX timing, and emotional design. Always respond with valid JSON only — no markdown, no backticks, no preamble.'
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(500).json({ error: 'Groq API error', detail: err });
    }

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content || '';

    return res.status(200).json({ result });

  } catch (err) {
    return res.status(500).json({ error: 'Server error', detail: err.message });
  }
}
