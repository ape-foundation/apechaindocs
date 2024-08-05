//components/YouTube.tsx
export default function YouTube ({ id } : { id : string }){
    return (
      <div>
        <iframe
          className="aspect-video w-full"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube Video Player"
          width="100%"
          height="300px"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    );
  };