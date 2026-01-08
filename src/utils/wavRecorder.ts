export type WavRecorderController = {
  stop: () => Promise<Blob>;
};

const floatTo16BitPCM = (output: DataView, offset: number, input: Float32Array) => {
  for (let i = 0; i < input.length; i++) {
    const s = Math.max(-1, Math.min(1, input[i]));
    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += 2;
  }
};

const writeString = (view: DataView, offset: number, str: string) => {
  for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
};

const encodeWav = (samples: Float32Array, sampleRate: number, numChannels = 1): Blob => {
  // 16-bit PCM
  const bytesPerSample = 2;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = samples.length * bytesPerSample;

  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeString(view, 8, "WAVE");

  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true); // PCM header size
  view.setUint16(20, 1, true); // PCM format
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true); // bits per sample

  writeString(view, 36, "data");
  view.setUint32(40, dataSize, true);

  floatTo16BitPCM(view, 44, samples);

  return new Blob([view], { type: "audio/wav" });
};

/**
 * Records mic audio using WebAudio (works even when MediaRecorder is not available).
 * Captures mono 16-bit PCM and returns a WAV Blob on stop.
 */
export const createWavRecorder = (stream: MediaStream): WavRecorderController => {
  const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
  const ctx: AudioContext = new AudioCtx();

  const source = ctx.createMediaStreamSource(stream);
  // ScriptProcessor is deprecated but still supported on iOS Safari/WKWebView.
  const processor = ctx.createScriptProcessor(4096, 1, 1);

  const chunks: Float32Array[] = [];
  let totalLength = 0;
  let stopped = false;

  processor.onaudioprocess = (e: AudioProcessingEvent) => {
    if (stopped) return;
    const input = e.inputBuffer.getChannelData(0);
    const copy = new Float32Array(input.length);
    copy.set(input);
    chunks.push(copy);
    totalLength += copy.length;
  };

  source.connect(processor);

  // Keep processor alive without sending audio to speakers
  const silentGain = ctx.createGain();
  silentGain.gain.value = 0;
  processor.connect(silentGain);
  silentGain.connect(ctx.destination);

  const stop = async () => {
    if (stopped) return new Blob([], { type: "audio/wav" });
    stopped = true;

    try {
      processor.disconnect();
      source.disconnect();
    } catch {
      // ignore
    }

    try {
      await ctx.close();
    } catch {
      // ignore
    }

    const merged = new Float32Array(totalLength);
    let offset = 0;
    for (const c of chunks) {
      merged.set(c, offset);
      offset += c.length;
    }

    return encodeWav(merged, ctx.sampleRate, 1);
  };

  return { stop };
};
