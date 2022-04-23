const routes = (handler) => [
  {
    method: "POST",
    path: "/songs",
    handler: handler.postSongHandler,
  },
  {
    method: "GET",
    path: "/songs",
    handler: handler.getSongsHandler,
  },
  {
    metdhod: "GET",
    path: "/songs/{id}",
    handler: handler.getSongByIdHandler,
  },
  {
    method: "PUT",
    path: "/songs/{id}",
    handler: handler.putSongByIdHandler,
  },
  {
    method: "DELETE",
    path: "/songs/{id}",
    handler: handler.deleteSongByIdHandler,
  },
];
