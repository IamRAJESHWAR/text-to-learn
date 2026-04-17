// Gemini API integration for translation and TTS
const axios = require('axios');

async function translateToHinglish(text) {
  const apiKey = process.env.GEMINI_API_KEY;
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
  const prompt = `Translate the following English text to Hinglish (Hindi written in English script):\n${text}`;
  const response = await axios.post(url, {
    contents: [{ parts: [{ text: prompt }] }]
  }, {
    params: { key: apiKey }
  });
  return response.data.candidates[0].content.parts[0].text;
}

async function hinglishTTS(text) {
  const apiKey = process.env.GEMINI_API_KEY;
  const url = 'https://texttospeech.googleapis.com/v1/text:synthesize';
  const response = await axios.post(url, {
    input: { text },
    voice: { languageCode: 'hi-IN', name: 'hi-IN-Wavenet-A' },
    audioConfig: { audioEncoding: 'LINEAR16' }
  }, {
    params: { key: apiKey }
  });
  return Buffer.from(response.data.audioContent, 'base64');
}

module.exports = { translateToHinglish, hinglishTTS };
