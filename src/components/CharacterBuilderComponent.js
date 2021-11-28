<!DOCTYPE html>
<html lang="en">

<head>
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
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css" />
    <title>Character Builder</title>
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
                    <li class="nav-item"><a class="nav-link" href="classes.html"><i
                                class="fa fa-list fa-lg"></i>Classes</a></li>
                    <li class="nav-item active"><a class="nav-link" href="#.html"><i
                                class="fa fa-user-plus fa-lg"></i>Character Builder</a></li>
                    <li class="nav-item"><a class="nav-link" href="resources.html"><i
                                class="fa fa-book fa-lg"></i>Resources</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div style="background-image: url(img/parchment2.jpg);
background-size: cover; background-repeat: no-repeat;">

        <div
            style="background-image: url(img/wood-background.jpg); background-size: cover; background-repeat: no-repeat;">
            <div class="row row-content">
                <div class="col align-self-center">
                    <h1 class="text-center">Design a Character</h1>
                </div>
            </div>
        </div>
        <div style="background-image: url(img/parchment2.jpg);
background-size: cover; background-repeat: no-repeat;">
            <form>
                <div class="form container">
                    <div class="form-group row">
                        <div class="mt-5 offset-md-2 col-md-4">
                            <h2 class="text-center">Choose a Race</h2>
                            <div class="row form-group">
                                <div class="col-8 mx-auto">
                                    <select class="form-control" name="race" id="race">
                                        <option>Select...</option>
                                        <option name="race" id="Dragonborn">Dragonborn</option>
                                        <option name="race" id="Dwarf">Dwarf</option>
                                        <option name="race" id="Elf">Elf</option>
                                        <option name="race" id="Half-Elf">Half-Elf</option>
                                        <option name="race" id="Half-Orc">Half-Orc</option>
                                        <option name="race" id="Human"> Human</option>
                                        <option name="race" id="Gnome"> Gnome</option>
                                        <option name="race" id="Tiefling">Tiefling</option>
                                        <option name="race" id="Aasimar">Aasimar</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 col-md-4">
                            <h2 class="text-center">Choose a Class</h2>
                            <div class="row form-group">
                                <div class="col-8 mx-auto">
                                    <select class="form-control" name="class" id="class">
                                        <option>Select...</option>
                                        <option name="class" id="Wizard">Wizard</option>
                                        <option name="class" id="Barbarian">Barbarian</option>
                                        <option name="class" id="Bard">Bard</option>
                                        <option name="class" id="Cleric">Cleric</option>
                                        <option name="class" id="Druid">Druid</option>
                                        <option name="class" id="Fighter">Fighter</option>
                                        <option name="class" id="Monk">Monk</option>
                                        <option name="class" id="Paladin">Paladin</option>
                                        <option name="class" id="Ranger">Ranger</option>
                                        <option name="class" id="Rogue">Rogue</option>
                                        <option name="class" id="Sorcerer">Sorcerer</option>
                                        <option name="class" id="Warlock">Warlock</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10">
                            <h2 class="text-center">Choose a Name</h2>
                        <div class="form-group row">

                            <label for="firstName" class="col-md-2 col-form-label">Character Name</label>
                            <div class="col-md-10">
                                <input class="form-control" type="text" id="name" name="name"
                                    placeholder="Character Name" />
                            </div>
                        </div>
                        <h2 class="text-center">Roll for Attributes</h2>
                        <div class="form-group row">
                                <div class="col-md-2">
                                    <label for="strength" class="col-form-label">Strength</label>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input class="form-control" type="strength" class="form-control"
                                                id="strength" name="strength" placeholder="Strength">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <label for="dexterity" class="col-form-label">Dexterity</label>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input class="form-control" type="dexterity" class="form-control"
                                                id="dexterity" name="dexterity" placeholder="Dexterity">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <label for="strength" class="col-form-label">Constitution</label>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input class="form-control" type="Constitution" class="form-control"
                                                id="constitution" name="Constitution" placeholder="Constitution">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <label for="strength" class="col-form-label">Charisma</label>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input class="form-control" type="Charisma" class="form-control"
                                                id="charisma" name="Charisma" placeholder="Charisma">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <label for="strength" class="col-form-label">Wisdom</label>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input class="form-control" type="Wisdom" class="form-control"
                                                id="wisdom" name="Wisdom" placeholder="Wisdom">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <label for="strength" class="col-form-label">Intelligence</label>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <input class="form-control" type="Intelligence" class="form-control"
                                                id="Intelligence" name="Intelligence" placeholder="Intelligence">
                                        </div>
                                    </div>
                                </div>
                                </div>
                                                            <h2 class="text-center">Other Details</h2>
                        <div class="form-group row">

                            <label for="feedback" class="col-md-2 col-form-label">Feats</label>
                            <div class="col-md-10">
                                <textarea class="form-control" id="feats" name="feats" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="feedback" class="col-md-2 col-form-label">Equipment</label>
                            <div class="col-md-10">
                                <textarea class="form-control" id="feedback" name="feedback" rows="8"></textarea>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="offset-md-2 col-md-10">
                                <button type="submit" class="btn btn-primary">Create Character</button>
                            </div>
                        </div>
            </form>
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
    <script src="js/scripts.js"></script>

</body>

</html>