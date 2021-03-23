const wordLists = {

    // source: wordfrequency.info
    top1000: {
        description: "top 1000 English word forms",
        words: ["the", "be", "and", "a", "of", "to", "in", "you", "it", "have", "to", "that", "for", "do", "he", "with", "on", "this", "we", "that", "not", "but", "they", "say", "at", "what", "his", "from", "go", "or", "by", "get", "she", "my", "can", "as", "know", "if", "me", "your", "all", "who", "about", "their", "will", "so", "would", "make", "just", "up", "think", "time", "there", "see", "her", "as", "out", "one", "come", "people", "take", "year", "him", "them", "some", "want", "how", "when", "which", "now", "like", "other", "could", "our", "into", "here", "then", "than", "look", "way", "more", "these", "no", "thing", "well", "because", "also", "two", "use", "tell", "good", "first", "man", "day", "find", "give", "more", "new", "one", "us", "any", "those", "very", "her", "need", "back", "there", "should", "even", "only", "many", "really", "work", "life", "why", "right", "down", "on", "try", "let", "something", "too", "call", "woman", "may", "still", "through", "mean", "after", "never", "no", "world", "in", "feel", "yeah", "great", "last", "child", "oh", "over", "ask", "when", "as", "school", "state", "much", "talk", "out", "keep", "leave", "put", "like", "help", "big", "where", "same", "all", "own", "while", "start", "three", "high", "every", "another", "become", "most", "between", "happen", "family", "over", "old", "yes", "house", "show", "again", "student", "so", "seem", "might", "part", "hear", "its", "place", "problem", "where", "believe", "country", "always", "week", "point", "hand", "off", "play", "turn", "few", "group", "such", "against", "run", "guy", "about", "case", "question", "work", "night", "live", "game", "number", "write", "bring", "without", "money", "lot", "most", "book", "system", "government", "next", "city", "company", "story", "today", "job", "move", "must", "bad", "friend", "during", "begin", "love", "each", "hold", "different", "little", "before", "ever", "word", "fact", "right", "read", "anything", "nothing", "sure", "small", "month", "program", "maybe", "right", "under", "business", "home", "kind", "stop", "pay", "study", "since", "issue", "name", "idea", "room", "percent", "far", "away", "law", "actually", "large", "though", "provide", "lose", "power", "kid", "war", "understand", "head", "mother", "real", "best", "team", "eye", "long", "long", "side", "water", "young", "wait", "okay", "both", "yet", "after", "meet", "service", "area", "important", "person", "hey", "thank", "much", "someone", "end", "change", "however", "only", "around", "hour", "everything", "national", "four", "line", "girl", "around", "watch", "until", "father", "sit", "create", "information", "car", "learn", "least", "already", "kill", "minute", "party", "include", "stand", "together", "back", "follow", "health", "remember", "often", "reason", "speak", "ago", "set", "black", "member", "community", "once", "social", "news", "allow", "win", "body", "lead", "continue", "whether", "enough", "spend", "level", "able", "almost", "boy", "university", "before", "stay", "add", "later", "change", "five", "probably", "center", "among", "face", "public", "die", "food", "else", "history", "buy", "result", "morning", "off", "parent", "office", "course", "send", "research", "walk", "door", "white", "several", "court", "home", "grow", "better", "open", "moment", "including", "consider", "both", "such", "little", "within", "second", "late", "street", "free", "better", "everyone", "policy", "table", "sorry", "care", "low", "human", "please", "hope", "true", "process", "teacher", "data", "offer", "death", "whole", "experience", "plan", "easy", "education", "build", "expect", "fall", "himself", "age", "hard", "sense", "across", "show", "early", "college", "music", "appear", "mind", "class", "police", "use", "effect", "season", "tax", "heart", "son", "art", "possible", "serve", "break", "although", "end", "market", "even", "air", "force", "require", "foot", "up", "listen", "agree", "according", "anyone", "baby", "wrong", "love", "cut", "decide", "full", "behind", "pass", "interest", "sometimes", "security", "eat", "report", "control", "rate", "local", "suggest", "report", "nation", "sell", "action", "support", "wife", "decision", "receive", "value", "base", "pick", "phone", "thanks", "event", "drive", "strong", "reach", "remain", "explain", "site", "hit", "pull", "church", "model", "perhaps", "relationship", "six", "fine", "movie", "field", "raise", "less", "player", "couple", "million", "themselves", "record", "especially", "difference", "light", "development", "federal", "former", "role", "pretty", "myself", "view", "price", "effort", "nice", "quite", "along", "voice", "finally", "department", "either", "toward", "leader", "because", "photo", "wear", "space", "project", "return", "position", "special", "million", "film", "need", "major", "type", "town", "article", "road", "form", "chance", "drug", "economic", "situation", "choose", "practice", "cause", "happy", "science", "join", "teach", "early", "develop", "share", "yourself", "carry", "clear", "brother", "matter", "dead", "image", "star", "cost", "simply", "post", "society", "picture", "piece", "paper", "energy", "personal", "building", "open", "doctor", "activity", "exactly", "media", "miss", "evidence", "product", "realize", "save", "arm", "technology", "catch", "comment", "look", "term", "color", "cover", "describe", "guess", "choice", "source", "mom", "soon", "director", "international", "rule", "campaign", "ground", "election", "face", "uh", "check", "page", "fight", "itself", "test", "patient", "produce", "certain", "whatever", "half", "video", "support", "throw", "third", "care", "rest", "recent", "available", "step", "ready", "opportunity", "official", "oil", "call", "organization", "character", "single", "current", "likely", "county", "future", "dad", "whose", "less", "shoot", "industry", "second", "list", "general", "stuff", "figure", "attention", "forget", "risk", "no", "focus", "short", "fire", "dog", "red", "hair", "point", "condition", "wall", "daughter", "before", "deal", "author", "truth", "upon", "husband", "period", "series", "order", "officer", "close", "land", "note", "computer", "thought", "economy", "goal", "bank", "behavior", "sound", "deal", "certainly", "nearly", "increase", "act", "north", "well", "blood", "culture", "medical", "ok", "everybody", "top", "difficult", "close", "language", "window", "response", "population", "lie", "tree", "park", "worker", "draw", "plan", "drop", "push", "earth", "cause", "per", "private", "tonight", "race", "than", "letter", "other", "gun", "simple", "course", "wonder", "involve", "poor", "each", "answer", "nature", "administration", "common", "no", "hard", "message", "song", "enjoy", "similar", "attack", "past", "hot", "seek", "amount", "analysis", "store", "defense", "bill", "like", "cell", "away", "performance", "hospital", "bed", "board", "protect", "century", "summer", "material", "individual", "recently", "example", "represent", "fill", "state", "place", "animal", "fail", "factor", "natural", "sir", "agency", "usually", "significant", "help", "ability", "mile", "statement", "entire", "floor", "serious", "career", "dollar", "vote", "compare", "south", "forward", "subject", "financial", "identify", "beautiful", "decade", "bit", "reduce", "sister", "quality", "quickly", "act", "press", "worry", "accept", "enter", "mention", "sound", "thus", "plant", "movement", "scene", "section", "treatment", "wish", "benefit", "interesting", "west", "candidate", "approach", "determine", "resource", "claim", "answer", "prove", "sort", "enough", "size", "somebody", "knowledge", "rather", "hang", "sport", "loss", "argue", "left", "note", "meeting", "skill", "card", "feeling", "despite", "degree", "crime", "that", "sign", "occur", "imagine", "vote", "near", "king", "box", "present", "figure", "seven", "foreign", "laugh", "disease", "lady", "beyond", "discuss", "finish", "design", "concern", "ball", "east", "recognize", "apply", "prepare", "network", "huge", "success", "district", "cup", "name", "physical", "growth", "rise", "hi", "standard", "force", "sign", "fan", "theory", "staff", "hurt", "legal", "september", "set", "outside", "strategy", "clearly", "property", "lay", "final", "authority", "perfect", "method", "region", "since", "impact", "indicate", "safe", "committee", "supposed", "dream", "training", "central", "option", "eight", "particularly", "completely", "opinion", "main", "ten", "interview", "exist", "remove", "dark", "play", "union", "professor", "pressure", "purpose", "stage", "blue", "herself", "sun", "pain", "artist", "employee", "avoid", "account", "release", "fund", "environment", "treat", "specific", "version", "shot", "hate", "reality", "visit", "club", "justice", "river", "brain", "memory", "rock", "talk", "camera", "global", "various", "arrive", "notice", "bit", "detail", "challenge", "argument", "lot", "nobody", "weapon", "best", "station", "island", "absolutely", "instead", "discussion", "instead", "affect", "design", "little", "anyway", "respond", "control", "trouble", "conversation", "manage", "close", "date", "public", "army", "top", "post", "charge", "seat", "assume", "writer", "perform", "credit", "green", "marriage", "operation", "indeed", "sleep", "necessary", "reveal", "agent", "access", "bar", "debate"],
    },

    pronounsSubject: {
        description: "pronouns (subject)",
        words: ["I", "you", "he", "she", "it", "we", "they"],
    },

    pronounsObject: {
        description: "pronouns (object)",
        words: ["me", "you", "him", "her", "it", "us", "them"],
    },

    pronounsPossessive: {
        description: "pronouns (possessive)",
        words: ["mine", "yours", "his", "hers", "its", "ours", "theirs"],
    },

    pronounsReflexive: {
        description: "pronouns (reflexive)",
        words: ["myself", "yourself", "himself", "herself", "itself", "ourselves", "yourselves", "themselves"],
    },

    pronounsDemonstrative: {
        description: "pronouns (demonstrative)",
        words: ["this", "that", "these", "those"],
    },

    pronounsRelative: {
        description: "pronouns (relative)",
        words: ["that", "what", "whatever", "which", "whichever", "who", "whoever", "whom", "whomever", "whose"],
    },

    pokemonGen1: {
        description: "Pokémon Gen 1 (#1-151)",
        words: ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"],
    },

    pokemonGen2: {
        description: "Pokémon Gen 2 (#152-251)",
        words: ["Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi"],
    },

    pokemonGen3: {
        description: "Pokémon Gen 3 (#252-386)",
        words: ["Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys"],
    },
}