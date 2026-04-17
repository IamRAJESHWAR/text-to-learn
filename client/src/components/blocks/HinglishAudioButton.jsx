import React, { useState } from 'react';
import { API_BASE_URL } from '../../utils/api';

const HinglishAudioButton = ({ text }) => {
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE_URL}/api/hinglish-tts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error('TTS failed');
      const blob = await res.blob();
      setAudioUrl(URL.createObjectURL(blob));
    } catch (err) {
      setError('Audio generation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Generating...' : 'Play Hinglish Audio'}
      </button>
      {audioUrl && <audio controls src={audioUrl} autoPlay />}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default HinglishAudioButton;
