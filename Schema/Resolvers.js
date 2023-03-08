// const { users } = require("../MOCK_DATA");

const { Animes } = require("../Data");

const resolvers = {
  Query: {
    // here we put all the queries we have
    getAllAnimes() {
      return Animes;
    },
    getAnimeById(parent, args) {
      return Animes.filter((anime) => anime.id === args.id);
    },
    getAnimeByName(parent, args) {
      return Animes.filter((anime) => anime.name === args.name);
    },
  },
  Mutation: {
    createAnime(parent, args) {
      const Anime = {
        id: Animes.length + 1,
        name: args.name,
        episodes: args.episodes,
      };
      Animes.push(Anime);
      return Anime;
    },
  },
};

module.exports = { resolvers };
