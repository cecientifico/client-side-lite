import {writable} from "svelte/store";

export const firebaseConfig = {
  apiKey: "AIzaSyC61tYlJA9lrS5_qfJKSaVpW8CpLWaCcFo",
  authDomain: "reciclage-game-416af.firebaseapp.com",
  projectId: "reciclage-game-416af",
  storageBucket: "reciclage-game-416af.appspot.com",
  messagingSenderId: "766413579133",
  appId: "1:766413579133:web:c1a6f325721afeb10ea214",
  measurementId: "G-J4GJ778B27",
};

export const currentGame = writable({
  game: '',
  data: {},
})

export const isMusic = writable(false);

export const currentTrash = writable("");
export const trashItems = {
  trashs: {
    eletronic: [
      "eletronico",
      "eletronico-1",
      "eletronico-2",
      "eletronico-3",
      "eletronico-4",
    ],
    glass: ["vidro", "vidro-1", "vidro-2", "vidro-3", "vidro-4"],
    metal: ["metal", "metal-1", "metal-2", "metal-3", "metal-4"],
    organic: [
      "organico",
      "organico-1",
      "organico-2",
      "organico-3",
      "organico-4",
    ],
    paper: ["papel", "papel-1", "papel-2", "papel-3", "papel-4"],
    plastic: [
      "plastico",
      "plastico-1",
      "plastico-2",
      "plastico-3",
      "plastico-4",
    ],
  },
};
export const trashItemsToMemory = {
  trashs: {
    eletronic: [
      "eletronico",
      "eletronico-1",
      "eletronico-2",
      "eletronico-3",
      "eletronico-4",
    ],
    glass: ["vidro", "vidro-1", "vidro-2", "vidro-3", "vidro-4"],
    metal: ["metal", "metal-1", "metal-2", "metal-3", "metal-4"],
    organic: [
      "organico",
      "organico-1",
      "organico-2",
      "organico-3",
      "organico-4",
    ],
    paper: ["papel", "papel-1", "papel-2", "papel-3", "papel-4"],
    plastic: [
      "plastico",
      "plastico-1",
      "plastico-2",
      "plastico-3",
      "plastico-4",
    ],
  },
};
// export const connectionAPI = "https://backend-rg-game.herokuapp.com";
export const connectionAPI = "http://localhost:3000";
export const musics = {
  musics: [
    'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/background_musics%2Fmusic.mp3?alt=media&token=4979e8f9-7061-48d7-b2b3-04d2e0e0a108',
    'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/background_musics%2Fmusic_1.mp3?alt=media&token=1feecb3a-3dcd-4e25-abe3-27ce71d55343',
    'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/background_musics%2Fmusic_2.mp3?alt=media&token=00294963-2013-49cc-b576-8c0fea012712',
    'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/background_musics%2Fmusic_3.mp3?alt=media&token=b967cc2c-e022-45af-a0e6-0a2649fb8574',
    'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/background_musics%2Fmusic_4.mp3?alt=media&token=5751814f-b572-4127-a7e4-997be4ba7d83',
    'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/background_musics%2Fmusic_5.mp3?alt=media&token=037b4290-116d-4439-8422-55410916545b',
    'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/background_musics%2Fmusic_6.mp3?alt=media&token=5b34255f-34ba-4373-a752-a1d85b34e982',
    'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/background_musics%2Fmusic_7.mp3?alt=media&token=b366cce2-f28c-45b0-ae01-a41dbce3deb2',
    'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/background_musics%2Fmusic_8.mp3?alt=media&token=c48edd95-bab9-48fe-89e1-41484bf49e57',
    'https://firebasestorage.googleapis.com/v0/b/reciclage-game-416af.appspot.com/o/background_musics%2Fmusic_9.mp3?alt=media&token=6e1177e7-d7fd-463b-9f6d-fd0532b9718f',
  ],
  index: 0,
  loading: false,
}