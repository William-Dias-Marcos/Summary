
import ytdl from "ytdl-core";
import fs from 'fs';
import { error } from "console";

export const download = (videoId) => {

    const videoUrl = "https://www.youtube.com/shorts/" + videoId;
    console.log("download: " + videoId);

    ytdl(videoId, {quality: "lowestaudio", filter: "audioonly"})
    .on("info", (info) => {
        const seconds = info.formats[0].approxDurationMs / 1000
        
        if(seconds > 60){
            throw new Error("A duração desse vídeo é maior que 60 segundos.")
        }

    })
    .on("end", () => {
        console.log("Download do vídeo finalizado")
    })
    .on("error", (error) => {
        console.log("Não foi possível fazer o download, ", error);
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
};
