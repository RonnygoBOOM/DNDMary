import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    <!-- Required meta tags always come first -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />


    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css" />

    <!-- Additional CSS must be placed after Bootstrap CSS -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=DM-Sans|Open+Sans" />
    <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css" />
   npm  <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css" />

    <title>Classes</title>

</head>

<body>
    <nav class="navbar navbar-expand-sm navbar-dark sticky-top"
        style="background-image: url(img/wood-background.jpg); background-size: cover; background-repeat: no-repeat;">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="img/CB logo.png" height="30" width="30" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nucampNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="nucampNavbar">
                <ul class="navbar-nav list-unstyled">
                    <li class="nav-item"><a class="nav-link" href="index.html"><i class="fa fa-home fa-lg"></i>
                            Home</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="races.html"><i
                                class="fa fa-users fa-lg"></i>Races</a></li>
                    <li class="nav-item active"><a class="nav-link" href="#"><i class="fa fa-list fa-lg"></i>Classes</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="builder.html"><i
                                class="fa fa-user-plus fa-lg"></i>Character Builder</a></li>
                    <li class="nav-item"><a class="nav-link" href="resources.html"><i
                                class="fa fa-book fa-lg"></i>Resources</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div style="background-image: url(img/parchment2.jpg);
        background-size: cover; background-repeat: no-repeat;">

        <div class="container-fluid">
            <div class="row ml-2">
                <div class="col-md-4 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <button type="button" class="card-header text-center" data-toggle="collapse" data-target="#wizard-dice">Wizard</button>
                            <div class="collapse" id="wizard-dice" src="img/wizard dice.jpg" style="width: 450px; height: 24rem;"></div>
                        <nav>
                            <ul class="nav nav-tabs" id="wizard-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#main" role="tab"
                                        aria-controls="main" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#stuff" role="tab" aria-controls="stuff"
                                        aria-selected="false">Scholars of the Arcane</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#moreStuff" role="tab"
                                        aria-controls="moreStuff" aria-selected="false">Lure of knowledge</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="main" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Wizard-Class.jpg" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Caleb Wizard Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Wizards are supreme magic-users, defined and united as a class by the
                                                spells they cast.<br>

                                                <br>Drawing on the subtle weave of magic that permeates
                                                the cosmos, wizards cast spells of explosive fire, arcing lightning,
                                                subtle deception, and brute-force mind control.<br>

                                                <br>Their magic conjures
                                                monsters from other planes of existence, glimpses the future, or turns
                                                slain foes into zombies.<br>

                                                <br>Their mightiest spells change one substance
                                                into another, call meteors down from the sky, or open portals to other
                                                worlds.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="stuff" role="tabpanel" aria-labelledby="stuff-tab">
                                    <p class="card-text scroll">
                                        Wild and enigmatic, varied in form and function, the power of magic draws
                                        students who seek to master its mysteries. Some aspire to become like the gods,
                                        shaping reality itself.<br>

                                        <br>Though the casting of a typical spell requires merely
                                        the utterance of a few strange words, fleeting gestures, and sometimes a pinch
                                        or clump of exotic materials, these surface components barely hint at the
                                        expertise attained after years of apprenticeship and countless hours of
                                        study.<br>

                                        <br>Wizards live and die by their spells. Everything else is secondary.<br>

                                        <br>They learn new spells as they experiment and grow in experience.<br>

                                        <br>They can also learn them
                                        from other wizards, from ancient tomes or inscriptions, and from ancient
                                        creatures (such as the fey) that are steeped in magic.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="moreStuff" role="tabpanel" aria-labelledby="moreStuff-tab">
                                    <p class="card-text scroll">
                                        Wizards’ lives are seldom mundane.<br>

                                        <br>The closest a wizard is likely to come to an
                                        ordinary life is working as a sage or lecturer in a library or university,
                                        teaching others the secrets of the multiverse.<br>

                                        <br>Other wizards sell their services
                                        as diviners, serve in military forces, or pursue lives of crime or
                                        domination.<br>

                                        <br>But the lure of knowledge and power calls even the most unadventurous
                                        wizards out of the safety of their libraries and laboratories and into crumbling
                                        ruins
                                        and lost cities.<br>

                                        <br>Most wizards believe that their counterparts in ancient
                                        civilizations knew secrets of magic that have been lost to the ages, and
                                        discovering those secrets could unlock the path to a power greater than any
                                        magic available in the present age.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Barbarian</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="barbarian-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#barbMain" role="tab"
                                        aria-controls="barbMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#barbStuff" role="tab"
                                        aria-controls="barbStuff" aria-selected="false">Primal Instinct</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#barbMoreStuff" role="tab"
                                        aria-controls="barbMoreStuff" aria-selected="false">A Life of Danger</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="barbMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Barbarian-Class.jpg" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Barbarian Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Barbarians are defined by their rage and their unbridled,
                                                unquenchable and unthinking fury. <br>

                                                <br>More than a mere emotion, their anger is the
                                                ferocity of a concerned predator, the unrelenting assult of a storm, the
                                                churning turmoil of the sea. <br>

                                                <br>For some, their rage springs from a comunion with
                                                fierce animal spirits. Others draw from a roiling reservoir of anger at
                                                a world full of pain.<br>

                                                <br>For every barbarian, rage is a power that fuels not just a
                                                battle frenzy but also uncanny reflexes, resiliance, and feats of
                                                strength.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="barbStuff" role="tabpanel" aria-labelledby="barbStuff-tab">
                                    <p class="card-text scroll">
                                        People of towns and cities take pride in how their civilized ways set them apart
                                        from animals, as if denying one’s own nature was a mark of superiority. To a
                                        barbarian, though, civilization is no virtue, but a sign of weakness. The strong
                                        embrace their animal nature—keen instincts, primal physicality, and ferocious
                                        rage. Barbarians are uncomfortable when hedged in by walls and crowds. They
                                        thrive in the wilds of their homelands: the tundra, jungle, or grasslands where
                                        their tribes live and hunt. <br>

                                        <br>Barbarians come alive in the chaos of combat. They can enter a berserk state
                                        where rage takes over, giving them superhuman strength and resilience. A
                                        barbarian can draw on this reservoir of fury only a few times without resting,
                                        but those few rages are usually sufficient to defeat whatever threats arise.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="barbMoreStuff" role="tabpanel"
                                    aria-labelledby="barbMoreStuff-tab">
                                    <p class="card-text scroll">
                                        Not every member of the tribes deemed “barbarians” by scions of civilized
                                        society has the barbarian class.<br>

                                        <br>A true barbarian among these people is as
                                        uncommon as a skilled fighter in a town, and he or she plays a similar role as a
                                        protector of the people and a leader in times of war.<br>

                                        <br>Life in the wild places of
                                        the world is fraught with peril: rival tribes, deadly weather, and terrifying
                                        monsters.<br>

                                        <br>Barbarians charge headlong into that danger so that their people don’t
                                        have to.<br>

                                        <br>Their courage in the face of danger makes barbarians perfectly suited for
                                        adventuring.<br>

                                        <br>Wandering is often a way of life for their native tribes, and the
                                        rootless life of the adventurer is little hardship for a barbarian.<br>

                                        <br>Some barbarians miss the close-knit family structures of the tribe, but
                                        eventually
                                        find them replaced by the bonds formed among the members of their adventuring
                                        parties.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5 ">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Bard</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="bard-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#bardMain" role="tab"
                                        aria-controls="bardMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#bardStuff" role="tab"
                                        aria-controls="bardStuff" aria-selected="false">Music & Magic</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#bardMoreStuff" role="tab"
                                        aria-controls="bardMoreStuff" aria-selected="false">Learning from Experience</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="bardMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Bard-Class.jpg" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Bard Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Whether scholar, skald, or scoundrel, a bard weaves magic through words
                                                and music to inspire allies, demoralize foes, manipulate minds, create
                                                illusions, and even heal wounds
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="bardStuff" role="tabpanel" aria-labelledby="bardStuff-tab">
                                    <p class="card-text scroll">
                                        In the worlds of D&D, words and music are not just vibrations of air, but
                                        vocalizations with power all their own.<br>

                                        <br>The bard is a master of song, speech, and the magic they contain.<br>

                                        <br>Bards say that the multiverse was spoken into existence, that the words of
                                        the gods gave
                                        it shape, and that echoes of these primordial Words of Creation still resound
                                        throughout the cosmos.<br>

                                        <br>The music of bards is an attempt to snatch and harness those
                                        echoes, subtly woven into their spells and powers.<br>

                                        <br>The greatest strength of bards is their sheer versatility.<br>

                                        <br>Many bards prefer
                                        to stick to the sidelines in combat, using their magic to inspire their allies
                                        and hinder their foes from a distance. But bards are capable of defending
                                        themselves
                                        in melee if necessary, using their magic to bolster their swords and armor.

                                        <br>Their spells lean toward charms and illusions rather than blatantly
                                        destructive spells.<br>

                                        <br>They have a wide-ranging knowledge of many subjects and a natural
                                        aptitude that lets them do almost anything well.<br>

                                        <br>Bards become masters of the
                                        talents they set their minds to perfecting, from musical performance to esoteric
                                        knowledge.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="bardMoreStuff" role="tabpanel"
                                    aria-labelledby="barbMoreStuff-tab">
                                    <p class="card-text scroll">
                                        True bards are not common in the world.<br>

                                        <br>Not every minstrel singing in a tavern
                                        or jester cavorting in a royal court is a bard.<br>

                                        <br>Discovering the magic hidden in music requires hard study and some measure
                                        of natural talent that most troubadours and jongleurs lack.<br>

                                        <br>It can be hard to spot the difference between
                                        these performers and true bards, though.<br>

                                        <br>A bard’s life is spent wandering across the land gathering lore, telling
                                        stories, and living on the gratitude of
                                        audiences, much like any other entertainer.<br>

                                        <br>But a depth of knowledge, a level of
                                        musical skill, and a touch of magic set bards apart from their fellows.<br>

                                        <br>Only rarely do bards settle in one place for long, and their natural desire
                                        to
                                        travel—to find new tales to tell, new skills to learn, and new discoveries
                                        beyond the horizon—makes an adventuring career a natural calling.<br>

                                        <br>Every
                                        adventure is an opportunity to learn, practice a variety of skills, enter
                                        long-forgotten tombs, discover lost works of magic, decipher old tomes, travel
                                        to strange places, or encounter exotic creatures.<br>

                                        <br>Bards love to accompany heroes to witness their deeds firsthand.<br>

                                        <br>A bard who can tell an awe-inspiring story
                                        from personal experience earns renown among other bards.<br>

                                        <br>Indeed, after telling
                                        so many stories about heroes accomplishing mighty deeds, many bards take these
                                        themes to heart and assume heroic roles themselves.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Cleric</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="cleric-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#clericMain" role="tab"
                                        aria-controls="clericMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#clericStuff" role="tab"
                                        aria-controls="clericStuff" aria-selected="false">Healers & Warrios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#clericMoreStuff" role="tab"
                                        aria-controls="clericMoreStuff" aria-selected="false">Divine Agents</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="clericMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Cleric-Class.jpg" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Cleric Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Clerics are intermediaries between the mortal world and the distant
                                                planes of the gods.<br>

                                                <br>As varied as the gods they serve, clerics strive to
                                                embody the handiwork of their deities.<br>

                                                <br>No ordinary priest, a cleric is imbued with divine magic.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="clericStuff" role="tabpanel"
                                    aria-labelledby="clericStuff-tab">
                                    <p class="card-text scroll">
                                        Divine magic, as the name suggests, is the power of the gods, flowing from them
                                        into the world.<br>

                                        <br>Clerics are conduits for that power, manifesting it as
                                        miraculous effects.<br>

                                        <br>The gods don’t grant this power to everyone who seeks it,
                                        but only to those chosen to fulfill a high calling.<br>

                                        <br>Harnessing divine magic doesn’t rely on study or training.<br>

                                        <br>A cleric might learn formulaic prayers and ancient rites, but the ability to
                                        cast cleric spells
                                        relies on devotion and an intuitive sense of a deity’s wishes.<br>

                                        <br>Clerics combine the helpful magic of healing and inspiring their allies with
                                        spells that harm and hinder foes.<br>

                                        <br>They can provoke awe and dread, lay curses of
                                        plague or poison, and even call down flames from heaven to consume their
                                        enemies.<br>

                                        <br>For those evildoers who will benefit most from a mace to the head,
                                        clerics depend on their combat training to let them wade into melee with the
                                        power of the gods on their side.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="clericMoreStuff" role="tabpanel"
                                    aria-labelledby="clericMoreStuff-tab">
                                    <p class="card-text scroll">
                                        Not every acolyte or officiant at a temple or shrine is a cleric.<br>

                                        <br>Some priests
                                        are called to a simple life of temple service, carrying out their gods’ will
                                        through prayer and sacrifice, not by magic and strength of arms.<br>

                                        <br>In some cities,
                                        priesthood amounts to a political office, viewed as a stepping stone to higher
                                        positions of authority and involving no communion with a god at all.<br>

                                        <br>True clerics are rare in most hierarchies.<br>

                                        <br>When a cleric takes up an adventuring life, it is usually because his or her
                                        god
                                        demands it.<br>

                                        <br>Pursuing the goals of the gods often involves braving dangers beyond
                                        the walls of civilization, smiting evil or seeking holy relics in ancient
                                        tombs.<br>

                                        <br>Many clerics are also expected to protect their deities’ worshipers, which
                                        can mean fighting rampaging orcs, negotiating peace between warring nations, or
                                        sealing a portal that would allow a demon prince to enter the world.<br>

                                        <br>Most adventuring clerics maintain some connection to established temples and
                                        orders of their faiths.<br>

                                        <br>A temple might ask for a cleric’s aid, or a high priest
                                        might be in a position to demand it.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Druid</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="druid-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#druidMain" role="tab"
                                        aria-controls="druidMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#druidStuff" role="tab"
                                        aria-controls="druidStuff" aria-selected="false">Power of nature</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#druidMoreStuff" role="tab"
                                        aria-controls="druidMoreStuff" aria-selected="false">Preserve the Balance</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="druidMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Druid-Class.jpg" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Druid Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Whether calling on the elemental forces of nature or emulating the
                                                creatures of the animal world, druids are an embodiment of nature’s
                                                resilience, cunning, and fury.<br>

                                                <br>They claim no mastery over nature.
                                                Instead, they see themselves as extensions of nature’s indomitable
                                                will.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="druidStuff" role="tabpanel" aria-labelledby="druidStuff-tab">
                                    <p class="card-text scroll">
                                        Druids revere nature above all, gaining their spells and other magical powers
                                        either from the force of nature itself or from a nature deity.<br>

                                        <br>Many druids
                                        pursue a mystic spirituality of transcendent union with nature rather than
                                        devotion to a divine entity, while others serve gods of wild nature, animals, or
                                        elemental forces.<br>

                                        <br>The ancient druidic traditions are sometimes called the Old
                                        Faith, in contrast to the worship of gods in temples and shrines.<br>

                                        <br>Druid spells are oriented toward nature and animals—the power of tooth and
                                        claw,
                                        of sun and moon, of fire and storm.<br>

                                        <br>Druids also gain the ability to take on
                                        animal forms, and some druids make a particular study of this practice, even to
                                        the point where they prefer animal form to their natural form.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="druidMoreStuff" role="tabpanel"
                                    aria-labelledby="druidMoreStuff-tab">
                                    <p class="card-text scroll">
                                        For druids, nature exists in a precarious balance.<br>

                                        <br>The four elements that make
                                        up a world—air, earth, fire, and water—must remain in equilibrium. If one
                                        element were to gain power over the others, the world could be destroyed, drawn
                                        into one of the elemental planes and broken apart into its component
                                        elements.<br>

                                        <br>Thus, druids oppose cults of Elemental Evil and others who promote one
                                        element to the exclusion of others.<br>

                                        <br>Druids are also concerned with the delicate ecological balance that sustains
                                        plant and animal life, and the need for civilized folk to live in harmony with
                                        nature, not in opposition to it.<br>

                                        <br>Druids accept that which is cruel in nature,
                                        and they hate that which is unnatural, including aberrations (such as beholders
                                        and mind flayers) and undead (such as zombies and vampires).<br>

                                        <br>Druids sometimes
                                        lead raids against such creatures, especially when the monsters encroach on the
                                        druids’ territory.<br>

                                        <br>Druids are often found guarding sacred sites or watching over regions of
                                        unspoiled nature. But when a significant danger arises, threatening nature’s
                                        balance or the lands they protect, druids take on a more active role in
                                        combating the threat, as adventurers.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Fighter</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="fighter-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#fighterMain" role="tab"
                                        aria-controls="fighterMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#fighterStuff" role="tab"
                                        aria-controls="fighterStuff" aria-selected="false">Versatile Specialists</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#fighterMoreStuff" role="tab"
                                        aria-controls="fighterMoreStuff" aria-selected="false">Trained for Danger</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="fighterMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Fighter-Class.png" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Fighter Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Fighters are perhaps the most diverse class of characters in the worlds
                                                of Dungeons & Dragons.<br>

                                                <br>Questing knights, conquering overlords, royal
                                                champions, elite foot soldiers, hardened mercenaries, and bandit
                                                kings—as fighters, they all share an unparalleled mastery with weapons
                                                and armor, and a thorough knowledge of the skills of combat.<br>

                                                <br>They are well acquainted with death, both meting it out and staring
                                                it defiantly in the face.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="fighterStuff" role="tabpanel"
                                    aria-labelledby="fighterStuff-tab">
                                    <p class="card-text scroll">
                                        Fighters learn the basics of all combat styles.<br>

                                        <br>Every fighter can swing an axe,
                                        fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap
                                        foes in a net with some degree of skill.<br>

                                        <br>Likewise, a fighter is adept with
                                        shields and every form of armor.<br>

                                        <br>Beyond that basic degree of familiarity, each
                                        fighter specializes in a certain style of combat.<br>

                                        <br>Some concentrate on archery,
                                        some on fighting with two weapons at once, and some on augmenting their martial
                                        skills with magic.<br>

                                        <br>This combination of broad general ability and extensive
                                        specialization makes fighters superior combatants on battlefields and in
                                        dungeons alike.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="fighterMoreStuff" role="tabpanel"
                                    aria-labelledby="fighterMoreStuff-tab">
                                    <p class="card-text scroll">
                                        Not every member of the city watch, the village militia, or the queen’s army is
                                        a fighter.<br>

                                        <br>Most of these troops are relatively untrained soldiers with only the
                                        most basic combat knowledge.<br>

                                        <br>Veteran soldiers, military officers, trained
                                        bodyguards, dedicated knights, and similar figures are fighters.<br>

                                        <br>Some fighters feel drawn to use their training as adventurers.<br>

                                        <br>The dungeon
                                        delving, monster slaying, and other dangerous work common among adventurers is
                                        second nature for a fighter, not all that different from the life he or she left
                                        behind.<br>

                                        <br>There are greater risks, perhaps, but also much greater rewards—few
                                        fighters in the city watch have the opportunity to discover a magic flame tongue
                                        sword, for example.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Monk</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="monk-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#monkMain" role="tab"
                                        aria-controls="monkMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#monkStuff" role="tab"
                                        aria-controls="monkStuff" aria-selected="false">The Magic of Ki</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#monkMoreStuff" role="tab"
                                        aria-controls="monkMoreStuff" aria-selected="false">Training & Asceticism</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="monkMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Monk-Class.jpg" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Monk Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Whatever their discipline, monks are united in their ability to
                                                magically harness the energy that flows in their bodies.<br>

                                                <br>Whether channeled as a striking display of combat prowess or
                                                a subtler focus of defensive ability and speed, this energy infuses
                                                all that a monk does.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="monkStuff" role="tabpanel" aria-labelledby="monkStuff-tab">
                                    <p class="card-text scroll">
                                        Monks make careful study of a magical energy that most monastic traditions call
                                        ki.<br>
                                        <br>This energy is an element of the magic that suffuses the
                                        multiverse—specifically, the element that flows through living bodies.<br>
                                        <br>Monks harness this power within themselves to create magical effects and
                                        exceed their
                                        bodies’ physical capabilities, and some of their special attacks can hinder the
                                        flow of ki in their opponents.<br>
                                        <br>Using this energy, monks channel uncanny speed
                                        and strength into their unarmed strikes.<br>
                                        <br>As they gain experience, their martial
                                        training and their mastery of ki gives them more power over their bodies and the
                                        bodies of their foes.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="monkMoreStuff" role="tabpanel"
                                    aria-labelledby="monkMoreStuff-tab">
                                    <p class="card-text scroll">
                                        Small walled cloisters dot the landscapes of the worlds of D&D, tiny refuges
                                        from the flow of ordinary life, where time seems to stand still.<br>

                                        <br>The monks who live there seek personal perfection through contemplation
                                        and rigorous training.<br>

                                        <br>Many entered the monastery as children, sent to live
                                        there when their parents died, when food couldn’t be found to support them,
                                        or in return for some kindness that the monks had performed for their
                                        families.<br>

                                        <br>Some monks live entirely apart from the surrounding population, secluded
                                        from anything that might impede their spiritual progress.<br>

                                        <br>Others are sworn to isolation, emerging only to serve as spies or assassins
                                        at the command of their leader, a noble patron, or some other mortal or divine
                                        power.<br>

                                        <br>The majority of monks don’t shun their neighbors, making frequent visits to
                                        nearby towns or villages and exchanging their service for food and other
                                        goods.<br>

                                        <br>As versatile warriors, monks often end up protecting their neighbors from
                                        monsters or tyrants.<br>

                                        <br>For a monk, becoming an adventurer means leaving a structured, communal
                                        lifestyle to become a wanderer.<br>

                                        <br>This can be a harsh transition, and monks don’t
                                        undertake it lightly.<br>

                                        <br>Those who leave their cloisters take their work seriously,
                                        approaching their adventures as personal tests of their physical and spiritual
                                        growth.<br>

                                        <br>As a rule, monks care little for material wealth and are driven by a
                                        desire to accomplish a greater mission than merely slaying monsters and
                                        plundering their treasure.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Paladin</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="paladin-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#paladinMain" role="tab"
                                        aria-controls="paladinMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#paladinStuff" role="tab"
                                        aria-controls="paladinStuff" aria-selected="false">Righteous Cause</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#paladinMoreStuff" role="tab"
                                        aria-controls="paladinMoreStuff" aria-selected="false">Beyond Mundane Life</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="paladinMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Paladin-Class.jpg" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Paladin Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Whatever their origin and their mission, paladins are united by their
                                                oaths to stand against the forces of evil.<br>
                                                <br>Whether sworn before a god’s altar and the witness of a priest,
                                                in a sacred glade before nature spirits and fey beings, or in a moment
                                                of desperation and grief with the dead as the only witness, a paladin’s
                                                oath is a powerful bond.<br>

                                                <br>It is a source of power that turns a devout warrior into a blessed
                                                champion.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="paladinStuff" role="tabpanel"
                                    aria-labelledby="paladinStuff-tab">
                                    <p class="card-text scroll">
                                        A paladin swears to uphold justice and righteousness, to stand with the good
                                        things of the world against the encroaching darkness, and to hunt the forces of
                                        evil wherever they lurk.<br>

                                        <br>Different paladins focus on various aspects of the
                                        cause of righteousness, but all are bound by the oaths that grant them power to
                                        do their sacred work.<br>

                                        <br>Although many paladins are devoted to gods of good, a
                                        paladin’s power comes as much from a commitment to justice itself as it does
                                        from a god.<br>

                                        <br>Paladins train for years to learn the skills of combat, mastering a variety
                                        of weapons and armor.<br>

                                        <br>Even so, their martial skills are secondary to the magical
                                        power they wield: power to heal the sick and injured, to smite the wicked and
                                        the undead, and to protect the innocent and those who join them in the fight for
                                        justice.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="paladinMoreStuff" role="tabpanel"
                                    aria-labelledby="paladinMoreStuff-tab">
                                    <p class="card-text scroll">
                                        Almost by definition, the life of a paladin is an adventuring life.<br>

                                        <br>Unless a lasting injury has taken him or her away from adventuring for a
                                        time, every
                                        paladin lives on the front lines of the cosmic struggle against evil.<br>

                                        <br>Fighters are rare enough among the ranks of the militias and armies of the
                                        world, but
                                        even fewer people can claim the true calling of a paladin.<br>

                                        <br>When they do receive the call, these warriors turn from their former
                                        occupations and
                                        take up arms to fight evil.<br>

                                        <br>Sometimes their oaths lead them into the service of the crown as
                                        leaders of elite groups of knights, but even then their loyalty is first to the
                                        cause of righteousness, not to crown and country.<br>

                                        <br>Adventuring paladins take their work seriously. A delve into an ancient ruin
                                        or
                                        dusty crypt can be a quest driven by a higher purpose than the acquisition of
                                        treasure.<br>

                                        <br>Evil lurks in dungeons and primeval forests, and even the smallest
                                        victory against it can tilt the cosmic balance away from oblivion.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Ranger</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="ranger-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#rangerMain" role="tab"
                                        aria-controls="rangerMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#rangerStuff" role="tab"
                                        aria-controls="rangerStuff" aria-selected="false">Deadly Hunters</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#rangerMoreStuff" role="tab"
                                        aria-controls="rangerMoreStuff" aria-selected="false">Indpendent Adventurers</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="rangerMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Ranger-Class.jpg" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Ranger Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Far from the bustle of cities and towns.<br>

                                                <br>Past the hedges that shelter the most distant farms from
                                                the terrors of the wild.<br>

                                                <br>Amid the dense-packed trees of trackless forests and across
                                                wide and empty plains, rangers keep their unending watch.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="rangerStuff" role="tabpanel"
                                    aria-labelledby="rangerStuff-tab">
                                    <p class="card-text scroll">
                                        Warriors of the wilderness, rangers specialize in hunting the monsters that
                                        threaten the edges of civilization—humanoid raiders, rampaging beasts and
                                        monstrosities, terrible giants, and deadly dragons.<br>

                                        <br>They learn to track their quarry as a predator does, moving stealthily
                                        through the wilds and hiding themselves in brush and rubble.<br>

                                        <br>Rangers focus their combat training on techniques that are particularly
                                        useful against their specific favored foes.<br>

                                        <br>Thanks to their familiarity with the wilds, rangers acquire the ability to
                                        cast
                                        spells that harness nature’s power, much as a druid does.<br>

                                        <br>Their spells, like their combat abilities, emphasize speed, stealth, and the
                                        hunt.<br>

                                        <br>A ranger’s talents and abilities are honed with deadly focus on the grim
                                        task of protecting
                                        the borderlands.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="rangerMoreStuff" role="tabpanel"
                                    aria-labelledby="rangerMoreStuff-tab">
                                    <p class="card-text scroll">
                                        Though a ranger might make a living as a hunter, a guide, or a tracker, a
                                        ranger’s true calling is to defend the outskirts of civilization from the
                                        ravages of monsters and humanoid hordes that press in from the wild.<br>

                                        <br>In some
                                        places, rangers gather in secretive orders or join forces with druidic
                                        circles.<br>

                                        <br>Many rangers, though, are independent almost to a fault, knowing that, when
                                        a
                                        dragon or a band of orcs attacks, a ranger might be the first—and possibly the
                                        last—line of defense.<br>

                                        <br>This fierce independence makes rangers well suited to adventuring, since
                                        they
                                        are accustomed to life far from the comforts of a dry bed and a hot bath.<br>

                                        <br>Faced
                                        with city-bred adventurers who grouse and whine about the hardships of the wild,
                                        rangers respond with some mixture of amusement, frustration, and compassion.<br>

                                        <br>But
                                        they quickly learn that other adventurers who can carry their own weight in a
                                        fight against civilization’s foes are worth any extra burden.<br>

                                        <br>Coddled city folk
                                        might not know how to feed themselves or find fresh water in the wild, but they
                                        make up for it in other ways.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Rogue</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="rogue-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#rogueMain" role="tab"
                                        aria-controls="rogueMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#rogueStuff" role="tab"
                                        aria-controls="rogueStuff" aria-selected="false">Skill & Precision</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#rogueMoreStuff" role="tab"
                                        aria-controls="rogueMoreStuff" aria-selected="false">A Stady Living</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="rogueMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Rogue-Class.png" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Rogue Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Rogues rely on skill, stealth, and their foes’ vulnerabilities to get
                                                the upper hand in any situation.<br>

                                                <br>They have a knack for finding the
                                                solution to just about any problem, demonstrating a resourcefulness and
                                                versatility that is the cornerstone of any successful adventuring party.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="rogueStuff" role="tabpanel" aria-labelledby="rogueStuff-tab">
                                    <p class="card-text scroll">
                                        Rogues devote as much effort to mastering the use of a variety of skills as they
                                        do to perfecting their combat abilities, giving them a broad expertise that few
                                        other characters can match.<br>

                                        <br>Many rogues focus on stealth and deception, while
                                        others refine the skills that help them in a dungeon environment, such as
                                        climbing, finding and disarming traps, and opening locks.<br>

                                        <br>When it comes to combat, rogues prioritize cunning over brute strength.<br>

                                        <br>A rogue
                                        would rather make one precise strike, placing it exactly where the attack will
                                        hurt the target most, than wear an opponent down with a barrage of attacks.<br>

                                        <br>Rogues have an almost supernatural knack for avoiding danger, and a few
                                        learn
                                        magical tricks to supplement their other abilities.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="rogueMoreStuff" role="tabpanel"
                                    aria-labelledby="rogueMoreStuff-tab">
                                    <p class="card-text scroll">
                                        Every town and city has its share of rogues.<br>

                                        <br>Most of them live up to the worst
                                        stereotypes of the class, making a living as burglars, assassins, cutpurses, and
                                        con artists.<br>

                                        <br>Often, these scoundrels are organized into thieves’ guilds or crime
                                        families.<br>

                                        <br>Plenty of rogues operate independently, but even they sometimes
                                        recruit apprentices to help them in their scams and heists.<br>

                                        <br>A few rogues make an
                                        honest living as locksmiths, investigators, or exterminators, which can be a
                                        dangerous job in a world where dire rats—and wererats—haunt the sewers.<br>

                                        <br>As adventurers, rogues fall on both sides of the law.<br>

                                        <br>Some are hardened
                                        criminals who decide to seek their fortune in treasure hoards, while others take
                                        up a life of adventure to escape from the law.<br>

                                        <br>Some have learned and perfected
                                        their skills with the explicit purpose of infiltrating ancient ruins and hidden
                                        crypts in search of treasure.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Sorcerer</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="sorcerer-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#sorcererMain" role="tab"
                                        aria-controls="sorcererMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#sorcererStuff" role="tab"
                                        aria-controls="sorcererStuff" aria-selected="false">Raw Magic</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#sorcererMoreStuff" role="tab"
                                        aria-controls="sorcererMoreStuff" aria-selected="false">Unexplained Powers</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="sorcererMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Sorcerer-Class.jpg" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Sorcerer Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Sorcerers carry a magical birthright conferred upon them by an exotic
                                                bloodline, some otherworldly influence, or exposure to unknown cosmic
                                                forces.<br>

                                                <br>One can’t study sorcery as one learns a language, any more than
                                                one can learn to live a legendary life.<br>

                                                <br>No one chooses sorcery; the power chooses the sorcerer.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="sorcererStuff" role="tabpanel"
                                    aria-labelledby="sorcererStuff-tab">
                                    <p class="card-text scroll">
                                        Magic is a part of every sorcerer, suffusing body, mind, and spirit with a
                                        latent power that waits to be tapped.<br>

                                        <br>Some sorcerers wield magic that springs
                                        from an ancient bloodline infused with the magic of dragons.<br>

                                        <br>Others carry a raw,
                                        uncontrolled magic within them, a chaotic storm that manifests in unexpected
                                        ways.<br>

                                        <br>The appearance of sorcerous powers is wildly unpredictable.<br>

                                        <br>Some draconic
                                        bloodlines produce exactly one sorcerer in every generation, but in other lines
                                        of descent every individual is a sorcerer.<br>

                                        <br>Most of the time, the talents of
                                        sorcery appear as apparent flukes.<br>

                                        <br>Some sorcerers can’t name the origin of their
                                        power, while others trace it to strange events in their own lives.<br>

                                        <br>The touch of
                                        a demon, the blessing of a dryad at a baby’s birth, or a taste of the water from
                                        a mysterious spring might spark the gift of sorcery.<br>

                                        <br>So too might the gift of a
                                        deity of magic, exposure to the elemental forces of the Inner Planes or the
                                        maddening chaos of Limbo, or a glimpse into the inner workings of reality.<br>

                                        <br>Sorcerers have no use for the spellbooks and ancient tomes of magic lore
                                        that
                                        wizards rely on, nor do they rely on a patron to grant their spells as warlocks
                                        do.<br>

                                        <br>By learning to harness and channel their own inborn magic, they can discover
                                        new and staggering ways to unleash that power.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="sorcererMoreStuff" role="tabpanel"
                                    aria-labelledby="sorcererMoreStuff-tab">
                                    <p class="card-text scroll">
                                        Sorcerers are rare in the world, and it’s unusual to find a sorcerer who is not
                                        involved in the adventuring life in some way.<br>

                                        <br>People with magical power seething
                                        in their veins soon discover that the power doesn’t like to stay quiet.<br>

                                        <br>A sorcerer’s magic wants to be wielded, and it has a tendency to spill out
                                        in
                                        unpredictable ways if it isn’t called on.<br>

                                        <br>Sorcerers often have obscure or quixotic motivations driving them to
                                        adventure.<br>

                                        <br>Some seek a greater understanding of the magical force that infuses them, or
                                        the
                                        answer to the mystery of its origin.<br>

                                        <br>Others hope to find a way to get rid of it,
                                        or to unleash its full potential.<br>

                                        <br>Whatever their goals, sorcerers are every bit
                                        as useful to an adventuring party as wizards, making up for a comparative lack
                                        of breadth in their magical knowledge with enormous flexibility in using the
                                        spells they know.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 ml-0 mr-0 mt-4 mb-5">
                    <div class="card" style="width: 450px; height: 24rem;">
                        <h5 class="card-header text-center">Warlock</h5>
                        <nav>
                            <ul class="nav nav-tabs" id="warlock-list" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-toggle="tab" href="#warlockMain" role="tab"
                                        aria-controls="warlockMain" aria-selected="true">Main</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#warlockStuff" role="tab"
                                        aria-controls="warlockStuff" aria-selected="false">Sworn & Beholden</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="tab" href="#warlockMoreStuff" role="tab"
                                        aria-controls="warlockMoreStuff" aria-selected="false">Delvers into Secrets</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="card-body" class="card-horizontal">
                            <div class="tab-content">
                                <div class="tab-pane active" id="warlockMain" role="tabpanel">
                                    <div class="row">
                                        <div class="col">
                                            <img src="img/DND-Warlock-Class.jpg" class="card-img"
                                                style="width: 160px; height: 14rem;" alt="Warlock Class">
                                        </div>
                                        <div class="col scroll">
                                            <p class="card-text" style="width: fit-content;">
                                                Warlocks are seekers of the knowledge that lies hidden in the fabric of
                                                the multiverse.<br>

                                                <br>Through pacts made with mysterious beings of
                                                supernatural power, warlocks unlock magical effects both subtle and
                                                spectacular.<br>

                                                <br>Drawing on the ancient knowledge of beings such as fey
                                                nobles, demons, devils, hags, and alien entities of the Far Realm,
                                                warlocks piece together arcane secrets to bolster their own power.<br>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="warlockStuff" role="tabpanel"
                                    aria-labelledby="warlockStuff-tab">
                                    <p class="card-text scroll">
                                        A warlock is defined by a pact with an otherworldly being.<br>

                                        <br>Sometimes the
                                        relationship between warlock and patron is like that of a cleric and a deity,
                                        though the beings that serve as patrons for warlocks are not gods.<br>

                                        <br>A warlock
                                        might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien
                                        entity—beings not typically served by clerics.<br>

                                        <br>More often, though, the
                                        arrangement is similar to that between a master and an apprentice.<br>

                                        <br>The warlock
                                        learns and grows in power, at the cost of occasional services performed on the
                                        patron’s behalf.<br>

                                        <br>The magic bestowed on a warlock ranges from minor but lasting alterations to
                                        the
                                        warlock’s being (such as the ability to see in darkness or to read any language)
                                        to access to powerful spells.<br>

                                        <br>Unlike bookish wizards, warlocks supplement their
                                        magic with some facility at hand-to-hand combat.<br>

                                        <br>They are comfortable in light armor and know how to use simple weapons.<br>
                                    </p>
                                </div>
                                <div class="tab-pane" id="warlockMoreStuff" role="tabpanel"
                                    aria-labelledby="warlockMoreStuff-tab">
                                    <p class="card-text scroll">
                                        Warlocks are driven by an insatiable need for knowledge and power, which compels
                                        them into their pacts and shapes their lives.<br>

                                        <br>This thirst drives warlocks into
                                        their pacts and shapes their later careers as well.<br>

                                        <br>Stories of warlocks binding themselves to fiends are widely known.<br>

                                        <br>But many
                                        warlocks serve patrons that are not fiendish.<br>

                                        <br>Sometimes a traveler in the wilds
                                        comes to a strangely beautiful tower, meets its fey lord or lady, and stumbles
                                        into a pact without being fully aware of it.<br>

                                        <br>And sometimes, while poring over
                                        tomes of forbidden lore, a brilliant but crazed student’s mind is opened to
                                        realities beyond the material world and to the alien beings that dwell in the
                                        outer void.<br>

                                        <br>Once a pact is made, a warlock’s thirst for knowledge and power can’t be
                                        slaked
                                        with mere study and research.<br>

                                        <br>No one makes a pact with such a mighty patron if
                                        he or she doesn’t intend to use the power thus gained.<br>

                                        <br>Rather, the vast majority
                                        of warlocks spend their days in active pursuit of their goals, which typically
                                        means some kind of adventuring.<br>

                                        <br>Furthermore, the demands of their patrons drive warlocks toward
                                        adventure.<br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-4 col-sm-2 offset-1">
                        <div>
                            <h5>Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="aboutus.html">About</a></li>
                                <li><a href="#">Sites</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6 col-sm-5 text-center">
                        <div>
                            <h5>Social</h5>
                            <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i
                                    class="fa fa-instagram"></i></a>
                            <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i
                                    class="fa fa-facebook"></i></a>
                            <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                                    class="fa fa-twitter"></i></a>
                            <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i
                                    class="fa fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="col-sm-4 text-center">
                        <div>
                            <a class="btn btn-link" href="tel:+12065551234"><i class="fa fa-phone"></i>
                                1-206-555-1234<br></a>
                            <a class="btn btn-link" href="mailto:dungeonsanddragons101@gmail.com"><i
                                    class="fa fa-envelope-o"></i>
                                dungeonsanddragons101@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <!-- jQuery must come first, then Popper.js, then the Bootstrap JavaScript plugins.-->
        <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
        <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
        <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

</body>

export default Classes;