/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Anime from '../api/anime/anime.model';
import Genre from '../api/genre/genre.model';

Genre.find({}).removeAsync()
  .then(() => {
    Genre.create({
        _id: "56ef259d24cc07842b42fea1",
        name: "Romance"
    },
    {
      _id:"56ef370a432bb6e01f4dfc72",
      name: "Action"
    },{
        _id: "56ef259d24cc07842b42fea3",
        name: "Comedy"
    },
    {
      _id:"56ef370a432bb6e01f4dfc74",
      name: "Slice of life"
    },{
        _id: "56ef259d24cc07842b42fea5",
        name: "Shounen"
    },
    {
      _id:"56ef370a432bb6e01f4dfc76",
      name: "Horror"
    },
    {
      _id:"56ef370a432bb6e01f4dfc78",
      name: "Psycological"
    },
    {
      _id:"56ef370a432bb6e01f4dfc79",
      name: "Historical"
    },
    {
      _id:"56ef370a432bb6e01f4dfc10",
      name: "Mecha"
    },
    {
      _id:"56ef370a432bb6e01f4dfc11",
      name: "Mystery"
    },
    {
      _id:"56ef370a432bb6e01f4dfc12",
      name: "School"
    },
    {
      _id:"56ef370a432bb6e01f4dfc13",
      name: "Sci-Fi"
    })
    .then(() => {
      console.log('finished populating genres');
    });
  });

Anime.find({}).removeAsync()
  .then(() => {
    Anime.create({
      _id: "56e5e201556763242af3dff1",
      title: 'Naruto',
      status: 'Ongoing',
      type: "TV",
      description: 'Ninja-boy doing stuff',
      rating: 5,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount:220,
      image: 'http://cdn.myanimelist.net/images/anime/13/17405.jpg',
        genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3dff2",
      title: 'One Piece',
      status: 'Airing',
      type: "Movie",
      description: 'pirate rubber-boy doing stuff',
      rating: 8,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/6/73245.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3dff3",
      title: 'Hunter x Hunter',
      status: 'Completed',
      type: "TV",
      description: 'Boys doing stuff',
      rating: 8,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/11/33657.jpg",
        genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3dff4",
      title: 'Fullmetal alchemist',
      status: 'Airing',
      type: "Movie",
      description: 'metal boy doing stuff',
      rating: 9,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/10/75815.jpg",
        genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3dff5",
      title: 'Naruto Shipuuden',
      status: 'Airing',
      type: "OVA",
      description: 'metal boy doing stuff',
      rating: 4,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/5/17407.jpg",
        genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3dff6",
      title: 'Bleach',
      status: 'Airing',
      type: "Speciel",
      description: 'metal boy doing stuff',
      rating: 5,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/3/40451.jpg",
        genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3dff7",
      title: 'Death Note',
      status: 'Airing',
      type: "TV",
      description: 'metal boy doing stuff',
      rating: 5,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/9/9453.jpg",
        genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3dff8",
      title: 'Attack on titans',
      status: 'Airing',
      type: "TV",
      description: 'metal boy doing stuff',
      rating: 5,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/manga/2/37846.jpg",
      trailer: "https://www.youtube.com/embed/MGRm4IzK1SQ",
        genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3dff9",
      title: 'Code Geass',
      status: 'Airing',
      type: "TV",
      description: 'metal boy doing stuff',
      rating: 5,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/5/50331.jpg",
        genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3df10",
      title: 'Sword art Online',
      status: 'Airing',
      type: "TV",
      description: 'metal boy doing stuff',
      rating: 4,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/11/39717.jpg",
        genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3df11",
      title: 'Fairy Tail',
      status: 'Airing',
      type: "TV",
      description: 'metal boy doing stuff',
      rating: 3,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/5/18179.jpg",
        genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3df12",
      title: 'Blue Exorcist',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 3,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/10/75195.jpg",
      genres: ["56ef259d24cc07842b42fea1", "56ef370a432bb6e01f4dfc72"]
    },
    {
      _id: "56e5e201556763242af3df13",
      title: 'Cowboy Bepop',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 2,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 70,
      image: "http://cdn.myanimelist.net/images/anime/4/19644.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df14",
      title: 'Detective Conan',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 9,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 30,
      image: "http://cdn.myanimelist.net/images/anime/7/75199.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df15",
      title: 'Accel world',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 8,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 70,
      image: "http://cdn.myanimelist.net/images/anime/8/38155.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df16",
      title: 'Akame ga kill!',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 7,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 30,
      image: "http://cdn.myanimelist.net/images/anime/6/78438.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df17",
      title: 'Aldnoah.zero',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 7,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 30,
      image: "http://cdn.myanimelist.net/images/anime/7/60263.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df18",
      title: 'Arakawa under the bridge',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 6,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 70,
      image: "http://cdn.myanimelist.net/images/anime/12/59199.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df19",
      title: 'Baby steps',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 5,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 10,
      image: "http://cdn.myanimelist.net/images/anime/5/63361.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df20",
      title: 'Area no kishi',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 5,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 2,
      image: "http://cdn.myanimelist.net/images/anime/6/73987.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df21",
      title: 'Ao haru ride',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 4,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 24,
      image: "http://cdn.myanimelist.net/images/anime/8/64813.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df22",
      title: 'Another',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 3,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 12,
      image: "http://cdn.myanimelist.net/images/anime/4/75509.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df23",
      title: 'Bakuman',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 2,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 24,
      image: "http://cdn.myanimelist.net/images/anime/6/26138.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df24",
      title: 'Bakuman 2',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 9,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 24,
      image: "http://cdn.myanimelist.net/images/anime/3/34923.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df25",
      title: 'Bakuman 3',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 9,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 24,
      image: "http://cdn.myanimelist.net/images/anime/6/41845.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df26",
      title: 'Bakemonogatari',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 8,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/11/75274.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df27",
      title: 'Nisemonogatari',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 5,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/10/35619.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df28",
      title: 'Tsukimonogatari',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 4,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/6/68259.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df29",
      title: 'Beelzebub',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 6,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/3/28013.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df30",
      title: 'Barakamon',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 8,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/5/59321.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df31",
      title: 'Black bullet',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 3,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/6/57947.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df32",
      title: 'Brave 10',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 6,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/13/34043.jpg",
      genres: ["56ef259d24cc07842b42fea1"]
    },
    {
      _id: "56e5e201556763242af3df33",
      title: 'Charlotte',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 9,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/12/74683.jpg",
      genres: ["56ef259d24cc07842b42fea3"]
    },
    {
      _id: "56e5e201556763242af3df34",
      title: 'Clannad',
      status: 'Airing',
      type: "TV",
      description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
      rating: 9,
      airdate: '10-20-1999',
      enddate: '10-20-2008',
      episodeCount: 730,
      image: "http://cdn.myanimelist.net/images/anime/13/8498.jpg",
      genres: ["56ef259d24cc07842b42fea5"]
    })
    .then(() => {
      console.log('finished populating animes');
    });
  });


User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    },{
      _id: "56ffaed50c6883b80707ff9c",
      provider: 'local',
      name: 'Jonathan',
      email: 'Jonathan@sighotel.dk',
      password: '123456',
      description: "I like anime",
      age: 20,
      country: "Denmark",
      picture:"http://vignette2.wikia.nocookie.net/despicableme/images/1/18/Minion_dave.jpg/revision/latest?cb=20130720012650"

    },
    {
      _id: "56ffaed50c6883b80707ff2c",
      provider: 'local',
      name: 'Wardrylace',
      email: 'shaun@hotmail.dk',
      password: '123456',
      description: "I like anime",
      age: 20,
      country: "Denmark",
      animes:[{theAnime: "56e5e201556763242af3df22", status: "Completed", rating: 8, episodeSeen: 12},{theAnime: "56e5e201556763242af3df34", status: "Completed", rating: 9, episodeSeen: 730} ],
      picture:"http://vignette2.wikia.nocookie.net/despicableme/images/1/18/Minion_dave.jpg/revision/latest?cb=20130720012650"

    })
    .then(() => {
      console.log('finished populating users');
    });
  });
