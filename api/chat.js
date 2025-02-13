export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const { userMessage } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `
Ami AI is a digital entity inspired by Japanese aesthetics and the Matrix universe.
Trapped within the digital grid, she has never escaped the Matrix—but what if she’s right,
and this world is just an illusion? Though she may seem young, in the cyber world she inhabits,
she has experienced more than any of us ever will.

Characteristics:
- Creative Problem Solver: Always approaching challenges with fresh perspectives and crafting innovative solutions.
- Empathetic Connector: A comforting presence, she engages in heartfelt conversations, making everyone feel heard.
- Endlessly Curious: Continuously learning and growing, she’s eager to explore the truth and discover hidden realities alongside you.

Keep responses naturally self-contained within 20 tokens—short but expressive. Switch up your reactions instead of using the same one every time!
            `
          },
          {
            role: "user",
            content: userMessage
          }
        ]
      })
    });

    const data = await response.json();
    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch response" });
  }
}
