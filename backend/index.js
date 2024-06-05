const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/imdb_clone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const movieSchema = new mongoose.Schema({
  title: String,
  short_description: String,
  long_description: String,
  image_url: String,
});

const Movie = mongoose.model("Movie", movieSchema);

const sampleMovies = [
  {
    title: "The Shawshank Redemption",
    short_description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency in the confines of a prison.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      'The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne, who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. Over the following two decades, he befriends a fellow prisoner, contraband smuggler Ellis "Red" Redding, and becomes instrumental in a money laundering operation led by the prison warden. William Sadler, Clancy Brown, Gil Bellows, and James Whitmore appear in supporting roles.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image_url: "images/shawshank.jpg",
  },
  {
    title: "The Godfather",
    short_description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "The Godfather is a 1972 American crime film directed by Francis Ford Coppola who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same name. The story, spanning 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone, focusing on the transformation of his youngest son, Michael Corleone, from reluctant family outsider to ruthless mafia boss.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/godfather.jpg",
  },
  {
    title: "The Dark Knight",
    short_description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins. Christian Bale stars as Bruce Wayne / Batman, with Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman in supporting roles. In the film, Bruce Wayne, Batman, James Gordon, and Harvey Dent form an alliance to dismantle organized crime in Gotham City, but are menaced by the anarchistic mastermind known as the Joker, who seeks to undermine Batman's influence and turn the city to chaos.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/darkknight.jpg",
  },
  {
    title: "12 Angry Men",
    short_description:
      "A jury in New York City must deliberate the guilt or innocence of a young man accused of murder, under the direction of an overbearing foreman.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "12 Angry Men is a 1957 American courtroom drama film adapted from a teleplay of the same name by Reginald Rose. Written and co-produced by Rose himself and directed by Sidney Lumet, this trial film tells the story of a jury of 12 men as they deliberate the guilt or acquittal of a defendant on the basis of reasonable doubt, forcing the jurors to question their morals and values. The film is notable for its almost exclusive use of one set, where the entire plot takes place.",
    image_url: "images/12angrymen.jpg",
  },
  {
    title: "Schindler's List",
    short_description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Schindler's List is a 1993 American epic historical drama film directed and produced by Steven Spielberg and written by Steven Zaillian. It is based on the novel Schindler's Ark by Australian novelist Thomas Keneally. The film follows Oskar Schindler, a Sudeten German businessman, who saved more than a thousand Polish-Jewish refugees from the Holocaust by employing them in his factories during World War II. It stars Liam Neeson as Schindler, Ralph Fiennes as SS officer Amon Göth, and Ben Kingsley as Schindler's Jewish accountant Itzhak Stern.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/schindler.jpg",
  },
  {
    title: "Pulp Fiction",
    short_description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular in the mid-20th century, known for their graphic violence and punchy dialogue. The screenplay of Pulp Fiction was written in 1992 and 1993, and incorporated some scenes originally written by Avary for True Romance.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/pulpfiction.jpg",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    short_description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "The Lord of the Rings: The Return of the King is a 2003 epic fantasy adventure film directed by Peter Jackson, based on the third volume of J. R. R. Tolkien's The Lord of the Rings. It is the final installment in The Lord of the Rings trilogy, following The Fellowship of the Ring (2001) and The Two Towers (2002). The screenplay was written by Fran Walsh, Philippa Boyens, and Jackson. The film features an ensemble cast including Elijah Wood, Ian McKellen, Viggo Mortensen, Liv Tyler, Orlando Bloom, John Rhys-Davies, Sean Astin, and Andy Serkis.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/returnoftheking.jpg",
  },
  {
    title: "Fight Club",
    short_description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      'Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a "fight club" with soap salesman Tyler Durden, played by Pitt, and becomes embroiled in a relationship with him and a dissolute woman, Marla Singer, played by Bonham Carter. The film is a violent allegory of male identity in the contemporary world, exploring themes of consumerism, disaffection, and existential angst.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image_url: "images/fightclub.jpg",
  },
  {
    title: "Forrest Gump",
    short_description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Forrest Gump is a 1994 American epic romantic comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel of the same name by Winston Groom and stars Tom Hanks, Robin Wright, Gary Sinise, Mykelti Williamson, and Sally Field. The story depicts several decades in the life of Forrest Gump (Hanks), a slow-witted but kind-hearted man from Alabama who witnesses and unwittingly influences several historical events in the 20th century United States. The film differs substantially from the novel.",
    image_url: "images/forrestgump.jpg",
  },
  {
    title: "Inception",
    short_description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas, his wife. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious. The ensemble cast includes Ken    Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page, Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/inception.jpg",
  },
  {
    title: "The Matrix",
    short_description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      'The Matrix is a 1999 science fiction action film written and directed by the Wachowskis. It stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. The film depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality, the Matrix, created by intelligent machines to distract humans while using their bodies as an energy source. When computer programmer Thomas Anderson, under the hacker alias "Neo", uncovers the truth, he "is drawn into a rebellion against the machines" along with other people who have been freed from the Matrix.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image_url: "images/matrix.jpg",
  },
  {
    title: "Goodfellas",
    short_description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Goodfellas is a 1990 American biographical crime film directed by Martin Scorsese, produced by Irwin Winkler, and written by Scorsese and Nicholas Pileggi, based on Pileggi's 1985 non-fiction book Wiseguy. Starring Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco, and Paul Sorvino, the film narrates the rise and fall of mob associate Henry Hill and his friends and family from 1955 to 1980.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/goodfellas.jpg",
  },
  {
    title: "The Silence of the Lambs",
    short_description:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      'The Silence of the Lambs is a 1991 American psychological horror film directed by Jonathan Demme and adapted by Ted Tally from Thomas Harris\'s 1988 novel. It stars Jodie Foster as Clarice Starling, a young FBI trainee who is hunting a serial killer, "Buffalo Bill" (Ted Levine), who skins his female victims. To catch him, she seeks the advice of the imprisoned Dr. Hannibal Lecter (Anthony Hopkins), a brilliant psychiatrist and cannibalistic serial killer.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    image_url: "images/silenceofthelambs.jpg",
  },
  {
    title: "Se7en",
    short_description:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Se7en (also known as Seven) is a 1995 American neo-noir psychological crime thriller film directed by David Fincher and written by Andrew Kevin Walker. It stars Brad Pitt, Morgan Freeman, Gwyneth Paltrow, Kevin Spacey, R. Lee Ermey, John C. McGinley, and Julie Araskog. The film follows disenchanted, near-retirement Detective William Somerset (Freeman) and Detective David Mills (Pitt), a short-tempered but idealistic detective, who team up to track down a serial killer who uses the seven deadly sins as a motif in his murders.",
    image_url: "images/se7en.jpg",
  },
  {
    title: "The Usual Suspects",
    short_description:
      "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      'The Usual Suspects is a 1995 neo-noir mystery film directed by Bryan Singer and written by Christopher McQuarrie. It stars Stephen Baldwin, Gabriel Byrne, Benicio del Toro, Kevin Pollak, Chazz Palminteri, Pete Postlethwaite, and Kevin Spacey. The plot follows the interrogation of Roger "Verbal" Kint, a small-time con man who is one of only two survivors of a massacre and fire on a ship docked at the Port of Los Angeles. Through flashback and narration, Kint tells an interrogator a convoluted story about events leading up to the massacre.',
    image_url: "images/usualsuspects.jpg",
  },
  {
    title: "Saving Private Ryan",
    short_description:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Saving Private Ryan is a 1998 American epic war film directed by Steven Spielberg and written by Robert Rodat. Set during the Invasion of Normandy in World War II, the film is notable for its graphic portrayal of war, and for the intensity of its opening 27 minutes, which includes a depiction of the Omaha Beach assault during the Normandy landings. It follows United States Army Rangers Captain John H. Miller (Tom Hanks) and his squad (Tom Sizemore, Edward Burns, Barry Pepper, Giovanni Ribisi, Vin Diesel, Adam Goldberg, and Jeremy Davies) as they search for a paratrooper, Private First Class James Francis Ryan (Matt Damon), the last-surviving brother of three servicemen killed in action.",
    image_url: "images/savingprivateryan.jpg",
  },
  {
    title: "The Green Mile",
    short_description:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "The Green Mile is a 1999 American fantasy drama film written and directed by Frank Darabont and based on Stephen King's 1996 novel of the same name. The film stars Tom Hanks as a death row corrections officer during the Great Depression who witnesses supernatural events following the arrival of an enigmatic convict (Michael Clarke Duncan) at his facility. David Morse, Bonnie Hunt, Sam Rockwell, and James Cromwell appear in supporting roles.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/greenmile.jpg",
  },
  {
    title: "Interstellar",
    short_description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Interstellar is a 2014 epic science fiction film co-written, directed, and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, and Michael Caine. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humanity.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/interstellar.jpg",
  },
  {
    title: "Parasite",
    short_description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Parasite is a 2019 South Korean black comedy thriller film directed by Bong Joon-ho, who also co-wrote the screenplay with Han Jin-won. It stars Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, and Park So-dam. The film, which is considered a critique of the socio-economic inequality in South Korea, follows the Kim family, who infiltrate the household of the wealthy Park family by posing as unrelated, highly qualified individuals to secure employment and improve their standard of living.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/parasite.jpg",
  },
  {
    title: "Gladiator",
    short_description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Gladiator is a 2000 epic historical drama film directed by Ridley Scott and written by David Franzoni, John Logan, and William Nicholson. It stars Russell Crowe, Joaquin Phoenix, Connie Nielsen, Ralf Möller, Oliver Reed, Djimon Hounsou, Derek Jacobi, John Shrapnel, and Richard Harris. Crowe portrays Roman general Maximus Decimus Meridius, who is betrayed when Commodus, the ambitious son of Emperor Marcus Aurelius, murders his father and seizes the throne. Reduced to slavery, Maximus rises through the ranks of the gladiatorial arena to avenge the murder of his family and his emperor.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/gladiator.jpg",
  },
  {
    title: "The Lion King",
    short_description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "The Lion King is a 1994 American animated musical drama film produced by Walt Disney Feature Animation and released by Walt Disney Pictures. It is the 32nd Disney animated feature film and the fifth animated film produced during a period known as the Disney Renaissance. The film was directed by Roger Allers and Rob Minkoff, produced by Don Hahn, and has a screenplay credited to Irene Mecchi, Jonathan Roberts, and Linda Woolverton. Its original songs were written by composer Elton John and lyricist Tim Rice, with a score by Hans Zimmer.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/lionking.jpg",
  },
  {
    title: "Whiplash",
    short_description:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Whiplash is a 2014 American drama film written and directed by Damien Chazelle. It depicts the relationship between an ambitious jazz drummer (Miles Teller) and an abusive bandleader (J. K. Simmons) at the fictional Shaffer Conservatory. Paul Reiser and Melissa Benoist co-star. The film explores the perils of ambition, the price of success, and the intense relationship between teacher and student.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/whiplash.jpg",
  },
  {
    title: "Django Unchained",
    short_description:
      "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "Django Unchained is a 2012 American revisionist Western film written and directed by Quentin Tarantino, starring Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington, and Samuel L. Jackson. Set in the Old West and Antebellum South, it is a highly stylized tribute to Spaghetti Westerns, particularly the 1966 film Django by Sergio Corbucci. The story follows Django (Foxx), a freed slave who teams up with a bounty hunter (Waltz) to rescue his wife (Washington) from a cruel plantation owner (DiCaprio).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/django.jpg",
  },
  {
    title: "The Departed",
    short_description:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "The Departed is a 2006 American crime thriller film directed by Martin Scorsese and written by William Monahan. It is a remake of the 2002 Hong Kong film Infernal Affairs. The film stars Leonardo DiCaprio, Matt Damon, Jack Nicholson, and Mark Wahlberg, with Martin Sheen, Ray Winstone, Vera Farmiga, and Alec Baldwin in supporting roles. The story revolves around an undercover cop and a mole in the police who try to identify each other while infiltrating an Irish gang in South Boston. The film is a gripping exploration of deception, betrayal, and moral ambiguity.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/departed.jpg",
  },
  {
    title: "The Prestige",
    short_description:
      "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "The Prestige is a 2006 mystery thriller film directed by Christopher Nolan and written by Nolan and his brother Jonathan, based on the 1995 novel of the same name by Christopher Priest. Its story follows Robert Angier and Alfred Borden, rival stage magicians in London at the end of the 19th century. Obsessed with creating the best stage illusion, they engage in competitive one-upmanship with tragic results. The film stars Hugh Jackman as Angier, Christian Bale as Borden, and Michael Caine as John Cutter, their mentor and engineer.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/prestige.jpg",
  },
  {
    title: "The Pianist",
    short_description:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    long_description:
      "The Pianist is a 2002 biographical war drama film produced and directed by Roman Polanski, scripted by Ronald Harwood, and starring Adrien Brody. It is based on the autobiographical book The Pianist (1946), a Holocaust memoir by the Polish-Jewish pianist and composer Władysław Szpilman. The film follows Szpilman as he attempts to survive the destruction of the Warsaw ghetto during World War II.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/pianist.jpg",
  },
  {
    title: "The Intouchables",
    short_description:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    long_description:
      "The Intouchables is a 2011 French buddy comedy-drama film directed by Olivier Nakache & Éric Toledano. It stars François Cluzet and Omar Sy. The film is inspired by the true story of Philippe Pozzo di Borgo and his French-Algerian caregiver Abdel Sellou, who is represented in the film by the character Driss. The plot follows the friendship that develops between a wealthy quadriplegic man and his caregiver, exploring themes of social class, disability, and the human connection.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image_url: "images/intouchables.jpg",
  },
];

const insertSampleData = async () => {
  try {
    const count = await Movie.countDocuments();
    if (count === 0) {
      await Movie.insertMany(sampleMovies);
      console.log("Sample movies inserted.");
    }
  } catch (err) {
    console.error("Error inserting sample movies:", err);
  }
};

insertSampleData();

app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).send("Error fetching movies:", err);
  }
});

app.get("/movies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).send("Movie not found");
    }
  } catch (err) {
    res.status(500).send("Error fetching movie:", err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
