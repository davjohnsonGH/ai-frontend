'use client'

import { RealtimeAgent, RealtimeSession } from '@openai/agents/realtime';
import DSButton from '@repo/design-system/button/button'
import React, { useState } from 'react';

export default function Agent() {

  const enableAssistant = async () => {

      const res = await fetch('/api/create-secret', {
        method: "POST",
      });

      if (!res.ok) {
        console.error("Request failed:", res.status);
        return;
      }

      const data = await res.json();
      const ephemeral_key = data.value

      const agent = new RealtimeAgent({
        name: 'Assistant',
        instructions: 'You are a helpful assistant. Speak clearly and briefly. Confirm understanding before taking actions.',
        
      });
      const session = new RealtimeSession(agent);
      // Automatically connects your microphone and audio output in the browser via WebRTC.
      try {
        await session.connect({
          apiKey: ephemeral_key,
        });
        console.log('You are connected!');
      } catch (e) {
        console.error(e);
      }
  };

  return (
    <div>
      <DSButton
        id="test"
        onClick={enableAssistant}>
      </DSButton>
    </div>
  );
}

