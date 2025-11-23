import { useState, useRef, useEffect } from "react";
import { Radio as RadioIcon, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export const Radio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // English learning radio stations (24/7 streams)
  const radioStations = [
    {
      name: "BBC World Service",
      url: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
      description: "Notícias e programas em inglês britânico / British English news and programs"
    },
    {
      name: "NPR News",
      url: "https://npr-ice.streamguys1.com/live.mp3",
      description: "Notícias e histórias em inglês americano / American English news and stories"
    },
    {
      name: "Voice of America",
      url: "https://voa-ingest.akamaized.net/hls/live/2035206/151_127L/playlist.m3u8",
      description: "Inglês claro para aprendizes / Clear English for learners"
    }
  ];

  const [currentStation, setCurrentStation] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const changeStation = (index: number) => {
    const wasPlaying = isPlaying;
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    setCurrentStation(index);
    if (wasPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
          <RadioIcon className="h-10 w-10 text-primary" />
          Rádio Inglês To Go / English Radio 24/7
        </h1>
        <p className="text-muted-foreground text-lg">
          Pratique seu inglês ouvindo rádios ao vivo 24 horas / Practice your English listening to live radio 24/7
        </p>
      </div>

      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <CardContent className="p-8">
          <div className="space-y-6">
            {/* Current Station Display */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg">
                <RadioIcon className={`h-12 w-12 text-white ${isPlaying ? 'animate-pulse' : ''}`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {radioStations[currentStation].name}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {radioStations[currentStation].description}
                </p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={togglePlay}
                className="h-16 w-16 rounded-full"
                variant={isPlaying ? "secondary" : "default"}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </Button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-4 px-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="shrink-0"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </Button>
              <Slider
                value={[volume]}
                onValueChange={(value) => setVolume(value[0])}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground w-12 text-right">
                {volume}%
              </span>
            </div>

            {/* Station Selection */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground text-center">
                Escolha uma Estação / Choose a Station:
              </p>
              <div className="grid gap-2">
                {radioStations.map((station, index) => (
                  <button
                    key={index}
                    onClick={() => changeStation(index)}
                    className={`p-3 rounded-lg border-2 transition-all text-left ${
                      currentStation === index
                        ? 'border-primary bg-primary/10 shadow-md'
                        : 'border-border hover:border-primary/50 hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <RadioIcon className={`h-5 w-5 ${
                        currentStation === index ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{station.name}</p>
                        <p className="text-xs text-muted-foreground">{station.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="bg-muted/50 rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground">
                💡 <strong>Dica / Tip:</strong> Ouça diariamente para melhorar sua compreensão auditiva e pronúncia / 
                Listen daily to improve your listening comprehension and pronunciation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={radioStations[currentStation].url}
        onError={(e) => {
          console.error("Audio error:", e);
          setIsPlaying(false);
        }}
      />
    </div>
  );
};
