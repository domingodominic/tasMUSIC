import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import folkloreImg from "./img/folklore.jpg";
import theOne from "./musics/the1.mp3";
import cardigan from "./musics/cardigan.mp3";
import thelastamerican from "./musics/ThelastGreat.mp3";
import exile from "./musics/exile.mp3";
import tearsRicochet from "./musics/mytearsricochet.mp3";
import mirrorball from "./musics/mirrorball.mp3";
import seven from "./musics/seven.mp3";
import august from "./musics/august.mp3";
import trying from "./musics/thisismetrying.mp3";
import invisibleString from "./musics/invisiblestring.mp3";
import illicit from "./musics/illicit.mp3";
import madwoman from "./musics/madwoman.mp3";
import epiphany from "./musics/epiphany.mp3";
import betty from "./musics/betty.mp3";
import peace from "./musics/peace.mp3";
import hoax from "./musics/hoax.mp3";
import loverAlbum from "./img/lover--album.jpg";
import forgotExist from "./musics/forgotexisted.mp3";
import fearlessAlb from "./img/fearless-alb.jpg";
import fearless from "./musics/fearless.mp3";
import mine from "./musics/mine.mp3";
import speaknowAlb from "./img/speaknow-alb.jpg";
function App() {
  const [musicIndex, setMusicIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isToggle, setToggle] = useState(false);
  const [isImgToggle, setImgToggle] = useState(false);
  const [imgUrl, setImgurl] = useState(folkloreImg);
  function toggle() {
    setToggle(!isToggle);
  }

  const musicData = [
    {
      title: "The 1",
      url: theOne,
      img: folkloreImg,
      album: "Folklore",
      artist: "Taylor Swift",
      lyrics: `[Verse 1]
      I'm doing good, I'm on some new shit
      Been saying "yes" instead of "no"
      I thought I saw you at the bus stop, 
      I didn't though I hit the ground running
       each night I hit the Sunday matinée
      You know the greatest films of all time
      were never made
      
      [Pre-Chorus]
      I guess you never know, never know
      And if you wanted me, you really should've showed
      And if you never bleed, you're never gonna grow
      And it's alright now 
      
      [Chorus]
      But we were something, don't you think so?
      Roaring twenties, tossing pennies in the pool
      And if my wishes came true
      It would've been you
      In my defense, I have none
      For never leaving well enough alone
      But it would've been fun
      If you would've been the one
      (Ooh)
      

      [Verse 2]
      I have this dream you're doing cool shit
      Having adventures on your own
      You meet some woman on the internet and 
      take her home We never painted by the numbers,
     baby but we were making it count You know
      the greatest loves of all time are over now
      You might also like
     
      [Pre-Chorus]
      I guess you never know, never know
      And it's another day waking up alone
      

      [Chorus]
      But we were something, don't you think so?
      Roaring twenties, tossing pennies in the pool
      And if my wishes came true
      It would've been you
      In my defense, I have none
      For never leaving well enough alone
      But it would've been fun
      If you would've been the one
      

      [Bridge]
      I, I, I persist and resist the temptation
       to ask you if one thing had been different
      Would everything be different today?
      

      [Chorus]
      We were something, don't you think so?
      Rosé flowing with your chosen family
      And it would've been sweet
      If it could've been me
      In my defense, I have none
      For digging up the grave another time
      But it would've been fun
      If you would've been the one
      (Ooh)`,
    },
    {
      title: "Cardigan",
      url: cardigan,
      img: folkloreImg,
      album: "Folklore",
      lyrics: `[Verse 1]
      Vintage tee, brand new phone
      High heels on cobblestones
      When you are young, they assume you know nothing
      Sequin smile, black lipstick
      Sensual politics
      When you are young, they assume you know nothing
      
      [Chorus]
      But I knew you
      Dancin' in your Levi's
      Drunk under a streetlight, I
      I knew you
      Hand under my sweatshirt
      Baby, kiss it better, I
      
      [Refrain]
      And when I felt like I was an old cardigan
      Under someone's bed
      You put me on and said I was your favorite
      
      [Verse 2]
      A friend to all is a friend to none
      Chase two girls, lose the one
      When you are young, they assume you know nothing
      You might also like
      I Can See You (Taylor’s Version) [From The Vault]
      Taylor Swift
      ​​​vampire
      Olivia Rodrigo
      All Of The Girls You Loved Before
      Taylor Swift
      [Chorus]
      But I knew you
      Playing hide-and-seek and
      Giving me your weekends, I
      I knew you
      Your heartbeat on the High Line
      Once in twenty lifetimes, I
      
      [Refrain]
      And when I felt like I was an old cardigan
      Under someone's bed
      You put me on and said I was your favorite
      
      [Bridge]
      To kiss in cars and downtown bars
      Was all we needed
      You drew stars around my scars
      But now I'm bleedin'
      
      [Chorus]
      'Cause I knew you
      Steppin' on the last train
      Marked me like a bloodstain, I
      I knew you
      Tried to change the ending
      Peter losing Wendy, I
      I knew you
      Leavin' like a father
      Running like water, I
      And when you are young, they assume you know nothing
      [Verse 3]
      But I knew you'd linger like a tattoo kiss
      I knew you'd haunt all of my what-ifs
      The smell of smoke would hang around this long
      'Cause I knew everything when I was young
      I knew I'd curse you for the longest time
      Chasin' shadows in the grocery line
      I knew you'd miss me once the thrill expired
      And you'd be standin' in my front porch light
      And I knew you'd come back to me
      You'd come back to me
      And you'd come back to me
      And you'd come back
      
      [Refrain]
      And when I felt like I was an old cardigan
      Under someone's bed
      You put me on and said I was your favorite`,
      artist: "Taylor Swift",
    },
    {
      title: "The last great american dynasty",
      url: thelastamerican,
      img: folkloreImg,
      album: "Folklore",
      lyrics: `[Verse 1]
      Rebekah rode up on the afternoon train,
       it was sunny, Her saltbox house on the 
       coast took her mind off St. Louis
      Bill was the heir to the Standard Oil 
      name and money And the town said,
       "How did a middle-class divorcée do it?"
      The wedding was charming, if a little gauche
      There's only so far new money goes
      They picked out a home and called it
       "Holiday House "Their parties were tasteful, 
       if a little loud
      The doctor had told him to settle down
      It must have been her fault his heart gave out
      
      [Chorus]
      And they said
      "There goes the last great American dynasty
      Who knows, if she never showed up, 
      what could've been There goes the maddest
       woman this town has ever seen
      She had a marvelous time ruining everything"
      
      [Verse 2]
      Rebekah gave up on the Rhode Island set
     forever Flew in all her Bitch Pack friends 
     from the city Filled the pool with champagne
      and swam with the big names And blew through
       the money on the boys and the ballet
      And losing on card game bets with Dalí
     
      [Chorus]
      And they said
      "There goes the last great American dynasty
      Who knows, if she never showed up, what
       could've been There goes the most shameless
        woman this town has ever seen She had a 
        marvelous time ruining everything"
      
      [Bridge]
      They say she was seen on occasion
      Pacing the rocks, staring out at the
       midnight sea And in a feud with her
       neighbor She stole his dog and dyed it 
       key lime green Fifty years is a long time
      Holiday House sat quietly on that beach
      Free of women with madness, their men and
       bad habits And then it was bought by me
      
      [Chorus]
      Who knows, if I never showed up, what 
      could've been There goes the loudest woman
       this town has ever seen I had a marvelous
        time ruining everything
      
      [Outro]
      I had a marvelous time ruining everything
      A marvelous time ruining everything
      A marvelous time
      I had a marvelous time`,
      artist: "Taylor Swift",
    },
    {
      title: "Exile",
      url: exile,
      img: folkloreImg,
      album: "Folklore",
      lyrics: `[Verse 1: Justin Vernon]
      I can see you standing, honey
      With his arms around your body
      Laughin', but the joke's not funny at all
      And it took you five whole minutes
      To pack us up and leave me with it
      Holdin' all this love out here in the hall
      
      [Chorus: Justin Vernon]
      I think I've seen this film before
      And I didn't like the ending
      You're not my homeland anymore
      So what am I defending now?
      You were my town, now I'm in exile, 
      seein' you out I think I've seen this
       film before
      
      [Post-Chorus: Justin Vernon]
      Ooh, ooh, ooh
      
      [Verse 2: Taylor Swift]
      I can see you starin', honey
      Like he's just your understudy
      Like you'd get your knuckles bloody for me
      Second, third, and hundredth chances
      Balancin' on breaking branches
      Those eyes add insult to injury
     
      [Chorus: Taylor Swift]
      I think I've seen this film before
      And I didn't like the ending
      I'm not your problem anymore
      So who am I offending now?
      You were my crown, now I'm in exile,
       seein' you out I think I've seen this 
      film before, So I'm leaving out the
       side door`,
      artist: "Taylor Swift",
    },
    {
      title: "My tears ricochet",
      url: tearsRicochet,
      img: folkloreImg,
      album: "Folklore",
      lyrics: `[Verse 1]
      We gather here, we line up, weepin' 
      in a sunlit room And if I'm on fire,
       you'll be made of ashes, too
      Even on my worst day, did I deserve, babe
      All the hell you gave me?
      'Cause I loved you, I swear I loved you
      'Til my dying day
      
      [Chorus]
      I didn't have it in myself to go with
       grace And you're the hero flying around,
       saving face And if I'm dead to you, why
       are you at the wake? Cursing my name,
       wishing I stayed Look at how my tears
       ricochet
      
      [Verse 2]
      We gather stones, never knowing what
      they'll mean Some to throw, some to 
      make a diamond ring You know I didn't
       want to have to haunt you But what a
       ghostly scene You wear the same jewels
       that I gave you As you bury me
      
      [Chorus]
      I didn't have it in myself to go with
       grace 'Cause when I'd fight, you used
      to tell me I was brave
      And if I'm dead to you, why are you at 
      the wake? Cursing my name, wishing I
       stayed Look at how my tears ricochet
     
      [Bridge]
      And I can go anywhere I want
      Anywhere I want, just not home
      And you can aim for my heart, go for blood
      But you would still miss me in your bones
      And I still talk to you (When I'm screaming
       at the sky) And when you can't sleep at
       night (You hear my stolen lullabies)
      
      [Chorus]
      I didn't have it in myself to go with grace
      And so the battleships will sink beneath
      the waves You had to kill me, but it 
      killed you just the same
      Cursing my name, wishing I stayed
      You turned into your worst fears
      And you're tossing out blame, drunk on 
      this pain Crossing out the good years
      And you're cursing my name, wishing 
      I stayed Look at how my tears ricochet`,
      artist: "Taylor Swift",
    },
    {
      title: "Mirrorball",
      url: mirrorball,
      img: folkloreImg,
      album: "Folklore",
      lyrics: `[Verse 1]
      I want you to know
      I'm a mirrorball
      I'll show you every version of yourself
      tonight I'll get you out on the floor
      Shimmering beautiful And when I break,
      it's in a million pieces
      
      [Chorus]
      Hush, when no one is around, my dear
      You'll find me on my tallest tiptoes
      Spinning in my highest heels, love
      Shining just for you
      Hush, I know they said the end is near
      But I'm still on my tallest tiptoes
      Spinning in my highest heels, love
      Shining just for you
      
      [Verse 2]
      I want you to know
      I'm a mirrorball
      I can change everything about me to
     fit in You are not like the regulars
      The masquerade revelers
      Drunk as they watch my shattered 
      edges glisten 

      [Chorus]
      Hush, when no one is around, my dear
      You'll find me on my tallest tiptoes
      Spinning in my highest heels, love
      Shining just for you
      Hush, I know they said the end is near
      But I'm still on my tallest tiptoes
      Spinning in my highest heels, love
      Shining just for you
      
      [Bridge]
      And they called off the circus, burned
     the disco down When they sent home the
      horses and the rodeo clowns
      I'm still on that tightrope
      I'm still trying everything to get you
     laughing at me And I'm still a believer, 
      but I don't know why I've never been 
      a natural, all I do is try, try, try
      I'm still on that trapeze
      I'm still trying everything to keep you
       looking at me
      
      [Outro]
      Because I'm a mirrorball
      I'm a mirrorball
      And I'll show you every version of 
      yourself tonight`,
      artist: "Taylor Swift",
    },
    {
      title: "Seven",
      url: seven,
      img: folkloreImg,
      lyrics: `[Verse 1]
      Please picture me in the trees
      I hit my peak at seven
      Feet in the swing over the creek
      I was too scared to jump in
      But I, I was high in the sky
      With Pennsylvania under me
      Are there still beautiful things?
      
      [Chorus]
      Sweet tea in the summer
      Cross your heart, won't tell no other
      And though I can’t recall your face
      I still got love for you
      Your braids like a pattern
      Love you to the Moon and to Saturn
      Passed down like folk songs
      The love lasts so long
      
      [Bridge]
      And I've been meaning to tell you
      I think your house is haunted
      Your dad is always mad and that must be why
      And I think you should come live with me
      And we can be pirates
      Then you won't have to cry
      Or hide in the closet
      And just like a folk song
      Our love will be passed on

      [Verse 2]
      Please picture me in the weeds
      Before I learned civility
      I used to scream ferociously
      Any time I wanted
      I, I
      
      [Chorus]
      Sweet tea in the summer
      Cross my heart, won’t tell no other
      And though I can't recall your face
      I still got love for you
      Pack your dolls and a sweater
      We'll move to India forever
      Passed down like folk songs
      Our love lasts so long`,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "August",
      url: august,
      img: folkloreImg,
      album: "Folklore",
      lyrics: `[Verse 1]
      Salt air, and the rust on your door
      I never needed anything more
      Whispers of "Are you sure?"
      "Never have I ever before"
      
      [Chorus]
      But I can see us lost in the memory
      August slipped away into a moment in time
      'Cause it was never mine
      And I can see us twisted in bedsheets
      August sipped away like a bottle of wine
      'Cause you were never mine
      
      [Verse 2]
      Your back beneath the sun
      Wishin' I could write my name on it
      Will you call when you're back at school?
      I remember thinkin' I had you
      
      [Chorus]
      But I can see us lost in the memory
      August slipped away into a moment in time
      'Cause it was never mine
      And I can see us twisted in bedsheets
      August sipped away like a bottle of wine
      'Cause you were never mine
     
      [Bridge]
      Back when we were still changin' for 
      the better
      Wanting was enough
      For me, it was enough
      To live for the hope of it all
      Cancel plans just in case you'd call
      And say, "Meet me behind the mall"
      So much for summer love and saying "us"
      'Cause you weren't mine to lose
      You weren't mine to lose, no
      
      [Chorus]
      But I can see us lost in the memory
      August slipped away into a moment in time
      'Cause it was never mine
      And I can see us twisted in bedsheets
      August sipped away like a bottle of wine
      'Cause you were never mine
      
      [Outro]
      'Cause you were never mine
      Never mine
      But do you remember?
      Remember when I pulled up and said
     "Get in the car" And then canceled my
      plans just in case you'd call? Back when
     I was livin' for the hope of it all, for
      the hope of it all "Meet me behind the mall"
      (Remember when I pulled up and said
      "Get in the car") (And then canceled my plans
       just in case you'd call?)
      (Back when I was livin' for the hope of
       it all, for the hope of it all)
      ("Meet me behind the mall")
      Remember when I pulled up and said 
      "Get in the car" And then canceled my plans 
      just in case you'd call? Back when I was
       livin' for the hope of it all (For the hope
      of it all) For the hope of it all, for the
       hope of it all (For the hope of it all, 
        for the hope of it all)`,
      artist: "Taylor Swift",
    },

    {
      title: "This is me trying",
      url: trying,
      img: folkloreImg,
      album: "Folklore",
      lyrics: `[Verse 1]
      I've been having a hard time adjusting
      I had the shiniest wheels, now they're 
      rusting I didn't know if you'd care 
      if I came back I have a lot of regrets 
      about that Pulled the car off the road 
      to the lookout Could've followed my
       fears all the way down
      And maybe I don't quite know what to say
      But I'm here in your doorway
      
      [Chorus]
      I just wanted you to know that
      this is me trying
      I just wanted you to know that 
      this is me trying
      
      [Verse 2]
      They told me all of my cages were mental
      So I got wasted like all my potential
      And my words shoot to kill when I'm mad
      I have a lot of regrets about that
      I was so ahead of the curve, the 
      curve became a sphere
      Fell behind all my classmates and
       I ended up here
      Pouring out my heart to a stranger
      But I didn't pour the whiskey
      
      [Chorus]
      I just wanted you to know that 
      this is me trying
      I just wanted you to know
      that this is me trying
      You might also like
      All Of The Girls You Loved Before
      Taylor Swift
      Anti-Hero
      Taylor Swift
      ​mirrorball
      Taylor Swift
      [Post-Chorus]
      At least I'm trying
      
      [Bridge]
      And it's hard to be at a party when I
       feel like an open wound It's hard to
       be anywhere these days when all I want is you
      You're a flashback in a film reel on 
      the one screen in my town
      
      [Chorus]
      And I just wanted you to know that 
      this is me trying
      (And maybe I don't quite know what to say)
      I just wanted you to know that
       this is me trying
      
      [Outro]
      At least I'm trying`,
      artist: "Taylor Swift",
    },
    {
      title: "Illicit affairs",
      url: illicit,
      img: folkloreImg,
      album: "Folklore",
      lyrics: `[Verse 1]
      Make sure nobody sees you leave
      Hood over your head, keep your eyes down
      Tell your friends you're out for a run
      You’ll be flushed when you return
      Take the road less traveled by
      Tell yourself you can always stop
      What started in beautiful rooms
      Ends with meetings in parking lots
      
      [Chorus]
      And that's the thing about illicit affairs
      And clandestine meetings and longing stares
      It's born from just one single glance
      But it dies and it dies and it dies
      A million little times
      
      [Verse 2]
      Leave the perfume on the shelf
      That you picked out just for him
      So you leave no trace behind
      Like you don’t even exist
      Take the words for what they are
      A dwindling, mercurial high
      A drug that only worked
      The first few hundred times

      [Chorus]
      And that's the thing about illicit affairs
      And clandestine meetings and stolen stares
      They show their truth one single time
      But they lie and they lie and they lie
      A million little times
      
      [Bridge]
      And you wanna scream
      Don't call me "kid," don't call me "baby"
      Look at this godforsaken mess that you
     made me You showed me colors you know
      I can't see with anyone else
      Don't call me "kid," don't call me "baby"
      Look at this idiotic fool that you made me
      You taught me a secret language I can't
       speak with anyone else
      
      [Outro]
      And you know damn well
      For you, I would ruin myself
      A million little times`,
      artist: "Taylor Swift",
    },
    {
      title: "Invisible string",
      url: invisibleString,
      img: folkloreImg,
      album: "Folklore",
      lyrics: `[Verse 1]
      Green was the color of the grass
      Where I used to read at Centennial Park
      I used to think I would meet somebody there
      Teal was the color of your shirt
      When you were sixteen at the yogurt shop
      You used to work at to make a little money
      
      [Chorus]
      Time, curious time
      Gave me no compasses, gave me no signs
      Were there clues I didn't see?
      And isn't it just so pretty to think
      All along there was some
      Invisible string
      Tying you to me?
      Ooh-ooh-ooh-ooh
      
      [Verse 2]
      Bad was the blood of the song in the cab
      On your first trip to LA
      You ate at my favorite spot for dinner
      Bold was the waitress on our three-year trip
      Getting lunch down by the Lakes
      She said I looked like an American singer
     
      [Chorus]
      Time, mystical time
      Cutting me open, then healing me fine
      Were there clues I didn't see?
      And isn't it just so pretty to think
      All along there was some
      Invisible string
      Tying you to me?
      Ooh-ooh-ooh-ooh
      
      [Bridge]
      A string that pulled me
      Out of all the wrong arms, right into 
      that dive bar
      Something wrapped all of my past
       mistakes in barbed wire
      Chains around my demons
      Wool to brave the seasons
      One single thread of gold
      Tied me to you
      
      [Verse 3]
      Cold was the steel of my axe to grind
      For the boys who broke my heart
      Now I send their babies presents
      Gold was the color of the leaves
      When I showed you around Centennial Park
      Hell was the journey but it brought me heaven
      [Chorus]
      Time, wondrous time
      Gave me the blues and then purple-pink skies
      And it's cool
      Baby, with me
      And isn't it just so pretty to think
      All along there was some
      Invisible string
      Tying you to me?
      Ooh-ooh-ooh-ooh
      Me
      Ooh-ooh-ooh-ooh
      
      [Outro]
      (Ah-ah-ah)
      (Ah-ah-ah)`,
      artist: "Taylor Swift",
    },
    {
      title: "Mad woman",
      url: madwoman,
      img: folkloreImg,
      lyrics: `[Verse 1]
      What did you think I'd say to that?
      Does a scorpion sting when fighting back?
      They strike to kill, and you know I will
      You know I will
      What do you sing on your drive home?
      Do you see my face in the neighbor's lawn?
      Does she smile?
      Or does she mouth, "Fuck you forever"?
      
      [Pre-Chorus]
      Every time you call me crazy, I get more crazy
      What about that?
      And when you say I seem angry, I get more angry
      
      [Chorus]
      And there's nothing like a mad woman
      What a shame she went mad
      No one likes a mad woman
      You made her like that
      And you'll poke that bear 'til her 
      claws come out
      And you find something to wrap your 
      noose around
      And there's nothing like a mad woman
      
      [Verse 2]
      Now I breathe flames each time I talk
      My cannons all firin' at your yacht
      They say "move on," but you know I won't
      And women like hunting witches too
      Doing your dirtiest work for you
      It's obvious that wanting me dead
      Has really brought you two together
      You might also like
      ​peace
      Taylor Swift
      ​epiphany
      Taylor Swift
      ​invisible string
      Taylor Swift
      [Pre-Chorus]
      Every time you call me crazy, I get
       more crazy
      What about that?
      And when you say I seem angry, I get
       more angry
      
      [Chorus]
      And there's nothing like a mad woman
      What a shame she went mad
      No one likes a mad woman
      You made her like that
      And you'll poke that bear 'til her 
      claws come out
      And you find something to wrap your 
      noose around
      And there's nothing like a mad woman
      
      [Bridge]
      I'm taking my time, taking my time
      'Cause you took everything from me
      Watching you climb, watching you climb
      Over people like me
      The master of spin has a couple side
       flings Good wives always know
      She should be mad, should be scathing
       like me, but
      
      [Outro]
      No one likes a mad woman
      What a shame she went mad
      You made her like that`,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Epiphany",
      url: epiphany,
      img: folkloreImg,
      lyrics: `[Verse 1]
      Keep your helmet, keep your life, son
      Just a flesh wound, here's your rifle
      Crawling up the beaches now
      "Sir, I think he's bleeding out"
      And some things you just can't speak about
      
      [Chorus]
      With you I serve, with you I fall down,
       down Watch you breathe in, watch you
        breathing out, out
      
      [Verse 2]
      Something med school did not cover
      Someone's daughter, someone's mother
      Holds your hand through plastic now
      "Doc, I think she's crashing out"
      And some things you just can't speak about
      
      [Bridge]
      Only twenty minutes to sleep
      But you dream of some epiphany
      Just one single glimpse of relief
      To make some sense of what you've seen
      
      [Chorus]
      With you I serve, with you I fall down,
     down (Down) Watch you breathe in, watch 
     you breathing out, out
      With you I serve (With you I serve),
       with you I fall down (Down), down (Down)
      Watch you breathe in (Watch you breathe 
     in), watch you breathing out (Out), out (Out)
      
      [Outro]
      Only twenty minutes to sleep
      But you dream of some epiphany
      Just one single glimpse of relief
      To make some sense of what you've seen`,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Betty",
      url: betty,
      img: folkloreImg,
      lyrics: `[Verse 1]
      Betty, I won't make assumptions
      About why you switched your homeroom, but
      I think it's 'cause of me
      Betty, one time I was riding on my skateboard
      When I passed your house
      It's like I couldn't breathe
      
      [Pre-Chorus]
      You heard the rumors from Inez
      You can't believe a word she says
      Most times, but this time it was true
      The worst thing that I ever did
      Was what I did to you
      
      [Chorus]
      But if I just showed up at your party
      Would you have me? Would you want me?
      Would you tell me to go fuck myself
      Or lead me to the garden?
      In the garden, would you trust me
      If I told you it was just a summer thing?
      I'm only seventeen, I don't know anything
      But I know I miss you
      
      [Verse 2]
      Betty, I know where it all went wrong
      Your favorite song was playing
      From the far side of the gym
      I was nowhere to be found
      I hate the crowds, you know that
      Plus, I saw you dance with him
     
      [Pre-Chorus]
      You heard the rumors from Inez
      You can't believe a word she says
      Most times, but this time it was true
      The worst thing that I ever did
      Was what I did to you
      
      [Chorus]
      But if I just showed up at your party
      Would you have me? Would you want me?
      Would you tell me to go fuck myself
      Or lead me to the garden?
      In the garden, would you trust me
      If I told you it was just a summer thing?
      I'm only seventeen, I don't know anything
      But I know I miss you
      
      [Bridge]
      I was walking home on broken cobblestones
      Just thinking of you when she pulled up like
      A figment of my worst intentions
      She said "James, get in, let's drive"
      Those days turned into nights
      Slept next to her, but
      I dreamt of you all summer long
      [Verse 3]
      Betty, I'm here on your doorstep
      And I planned it out for weeks now
      But it's finally sinkin' in
      Betty, right now is the last time
      I can dream about what happens when
      You see my face again
      
      [Pre-Chorus]
      The only thing I wanna do
      Is make it up to you
      So I showed up at your party
      Yeah, I showed up at your party
      
      [Chorus]
      Yeah, I showed up at your party
      Will you have me? Will you love me?
      Will you kiss me on the porch
      In front of all your stupid friends?
      If you kiss me, will it be just like I dreamed it?
      Will it patch your broken wings?
      I'm only seventeen, I don't know anything
      But I know I miss you
      
      [Outro]
      Standing in your cardigan
      Kissin' in my car again
      Stopped at a streetlight
      You know I miss you`,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "Peace",
      url: peace,
      img: folkloreImg,
      lyrics: `[Verse 1]
      Our coming-of-age has come and gone
      Suddenly this summer, it's clear
      I never had the courage of my convictions
      As long as danger is near
      And it's just around the corner, darlin'
      'Cause it lives in me
      No, I could never give you peace
      
      [Chorus]
      But I'm a fire and I'll keep your brittle 
      heart warm
      If your cascade, ocean wave blues come
      All these people think love's for show
      But I would die for you in secret
      The devil's in the details, but you got
       a friend in me
      Would it be enough if I could never 
      give you peace?
      
      [Verse 2]
      Your integrity makes me seem small
      You paint dreamscapes on the wall
      I talk shit with my friends, it's like I'm
       wasting your honor
      And you know that I'd swing with you for 
      the fences
      Sit with you in the trenches
      Give you my wild, give you a child
      Give you the silence that only comes when two
       people understand each other
      Family that I chose, now that I see your 
      brother as my brother
      Is it enough?
      But there's robbers to the east, clowns to 
      the west
      I'd give you my sunshine, give you my best
      But the rain is always gonna come if you're
       standin' with me
     
      [Chorus]
      But I'm a fire and I'll keep your brittle
       heart warm
      If your cascade, ocean wave blues come
      All these people think love's for show
      But I would die for you in secret
      The devil's in the details, but you got
       a friend in me
      Would it be enough if I could
       never give you peace?
      Would it be enough if I could 
      never give you peace?
      Would it be enough if I could 
      never give you peace?`,
      album: "Folklore",
      artist: "Taylor Swift",
    },

    {
      title: "Hoax",
      url: hoax,
      img: folkloreImg,
      lyrics: `[Verse 1]
      My only one
      My smoking gun
      My eclipsed sun
      This has broken me down
      My twisted knife
      My sleepless night
      My winless fight
      This has frozen my ground
      
      [Chorus]
      Stood on the cliffside screaming, "Give me a reason"
      Your faithless love's the only hoax I believe in
      Don't want no other shade of blue but you
      No other sadness in the world would do
      
      [Verse 2]
      My best laid plan
      Your sleight of hand
      My barren land
      I am ash from your fire
      
      [Chorus]
      Stood on the cliffside screaming, "Give me a reason"
      Your faithless love's the only hoax I believe in
      Don't want no other shade of blue but you
      No other sadness in the world would do

      [Bridge]
      You know I left a part of me back in New York
      You knew the hero died so what's the movie for?
      You knew it still hurts underneath my scars
      From when they pulled me apart
      You knew the password so I let you in the door
      You knew you won so what's the point of
       keeping score?
      You knew it still hurts underneath my scars
      From when they pulled me apart
      But what you did was just as dark
      (Ah, ah, ah)
      Darling, this was just as hard
      As when they pulled me apart
      
      [Outro]
      My only one
      My kingdom come undone
      My broken drum
      You have beaten my heart
      Don't want no other shade of blue but you
      No other sadness in the world would do`,
      album: "Folklore",
      artist: "Taylor Swift",
    },
    {
      title: "I forgot that you existed",
      url: forgotExist,
      img: loverAlbum,
      lyrics: `[Verse 1]
      How many days did I spend thinking
      'Bout how you did me wrong, wrong, wrong?
      Lived in the shade you were throwing
      'Til all of my sunshine was gone, gone, gone
      And I couldn't get away from ya
      In my feelings more than Drake, so yeah
      Your name on my lips, tongue-tied
      Free rent, living in my mind
      
      [Pre-Chorus]
      But then something happened one magical night
      
      [Chorus]
      I forgot that you existed
      And I thought that it would kill me,
       but it didn't
      And it was so nice
      So peaceful and quiet
      I forgot that you existed
      It isn't love, it isn't hate, 
      it's just indifference
      I forgot that you
      
      [Verse 2]
      Got out some popcorn
      As soon as my rep started going down, 
      down, down
      Laughed on the school yard
      As soon as I tripped up and hit the 
      ground, ground, ground
      And I would've stuck around for ya
      Would've fought the whole town, so yeah
      Would've been right there, front row
      Even if nobody came to your show
      You might also like
      All Of The Girls You Loved Before
      Taylor Swift
      The Archer
      Taylor Swift
      I Think He Knows
      Taylor Swift
      [Pre-Chorus]
      But you showed who you are, then one 
      magical night
      
      [Chorus]
      I forgot that you existed
      And I thought that it would kill me,
       but it didn't
      And it was so nice
      So peaceful and quiet
      I forgot that you existed
      It isn't love, it isn't hate, it's just
       indifference
      I forgot that you
      
      [Bridge]
      Sent me a clear message
      Taught me some hard lessons
      I just forget what they were
      It's all just a blur
      
      [Chorus]
      I forgot that you existed
      And I thought that it would kill me,
       but it didn't
      And it was so nice
      So peaceful and quiet
      I forgot that you existed
      I did, I did, I did
      It isn't hate, it's just indifference
      It isn't love, it isn't hate, it's
       just indifference
      So, yeah`,
      album: "Lover",
      artist: "Taylor Swift",
    },
    {
      title: "Fearless",
      url: fearless,
      img: fearlessAlb,
      lyrics: `[Verse 1]
      There's something 'bout the way
      The street looks when it's just rained
      There's a glow off the pavement, you walk 
      me to the car
      And you know I wanna ask you to dance
       right there
      In the middle of the parking lot, yeah
      Oh, yeah
      
      [Verse 2]
      We're driving down the road, I wonder
       if you know
      I'm trying so hard not to get caught up now
      But you're just so cool, run your hands 
      through your hair
      Absentmindedly making me want you
      
      [Chorus]
      And I don't know how it gets better
       than this
      You take my hand and drag me head first,
       fearless
      And I don't know why but with you,
       I'd dance
      In a storm in my best dress, fearless
      
      [Verse 3]
      So, baby, drive slow 'til we run out 
      of road In this one horse town,
       I wanna stay right here
      In this passenger's seat
      You put your eyes on me
      In this moment now, capture it,
       remember it
      
      [Chorus]
      'Cause I don't know how it gets 
      better than this
      You take my hand and drag me head 
      first, fearless
      And I don't know why but with you,
       I'd dance
      In a storm in my best dress, fearless
      
      [Bridge]
      Well, you stood there with me in
       the doorway
      My hands shake, I'm not usually 
      this way but
      You pull me in and I'm a little 
      more brave
      It's the first kiss, it's flawless,
       really 
      something
      It's fearless
      Oh, yeah
      
      [Chorus]
      'Cause I don't know how it gets
       better than this
      You take my hand and drag me head 
      first, fearless And I don't know 
      why but with you,
       I'd dance In a storm in 
      fearless 'Cause I don't know how
       it gets better than this
      You take my hand and drag me head 
      first, fearless And I don't know 
      why but with you, I'd dance
      In a storm in my best dress, fearless
      
      [Outro]
      Oh, oh
      Oh, yeah`,
      album: "Fearless",
      artist: "Taylor Swift",
    },
    {
      title: "Mine",
      url: mine,
      img: speaknowAlb,
      lyrics: `[Intro]
      Oh-oh, oh-oh
      Oh-oh, oh-oh
      
      [Verse 1]
      You were in college working part time
       waitin' tables
      Left a small town, never looked back
      I was a flight risk with a fear of falling
      Wonderin' why we bother with love if
       it never lasts
      
      [Pre-Chorus]
      I say, "Can you believe it?"
      As we're lyin' on the couch
      The moment I could see it
      Yes, yes, I can see it now
      
      [Chorus]
      Do you remember, we were sittin' there
       by the water? You put your arm around
       me for the first time
      You made a rebel of a careless man's 
      careful daughter
      You are the best thing that's ever
       been mine
      
      [Verse 2]
      Flash forward and we're takin' on the
       world together And there's a drawer of
       my things at your place
      You learn my secrets and you figure
       out why I'm guarded
      You say we'll never make my parents' mistakes
     
      [Pre-Chorus]
      But we got bills to pay
      We got nothing figured out
      When it was hard to take
      Yes, yes, this is what I thought about
      
      [Chorus]
      Do you remember, we were sittin' 
      there by the water?
      You put your arm around me for the 
      first time You made a rebel of a careless
       man's careful daughter
      You are the best thing that's ever 
      been mine Do you remember all the 
      city lights on the water?
      You saw me start to believe for
       the first time You made a rebel of
       a careless man's careful daughter
      You are the best thing that's ever been mine
      
      [Post-Chorus]
      Oh-oh, oh-oh
      
      [Bridge]
      And I remember that fight, 2:30AM
      As everything was slipping right out of 
      our hands
      I ran out crying and you followed me
       out into the street
      Braced myself for the goodbye
      'Cause that's all I've ever known
      Then you took me by surprise
      You said, "I'll never leave you alone"
      [Chorus]
      You said, "I remember how we felt
       sitting by the water
      And every time I look at you, it's
       like the first time
      I fell in love with a careless man's 
      careful daughter
      She is the best thing that's ever been mine"
      
      [Post-Chorus]
      Hold on, make it last
      Hold on, never turn back
      (Hold on) You made a rebel of a careless 
      man's careful daughter (Make it last)
      (Hold on) You are the best thing 
      that's ever been mine (Hold on)
      
      [Outro]
      Yes, yes, do you believe it? (Hold on)
      Yes, yes, we're gonna make it now (Hold on)
      Yes, yes, I can see it
      Yes, yes, I can see it now`,
      album: "Speaknow",
      artist: "Taylor Swift",
    },
  ];

  const audioRef = useRef(null);

  const playPauseHandler = () => {
    document.querySelector(".image").classList.toggle("show--img--scale");
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSongHandler = () => {
    setIsPlaying(true);
    setMusicIndex((prevIndex) => (prevIndex + 1) % musicData.length);
  };

  const prevSongHandler = () => {
    setIsPlaying(true);
    setMusicIndex((prevIndex) =>
      prevIndex === 0 ? musicData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    audioRef.current.onloadedmetadata = () => {
      setDuration(audioRef.current.duration);
    };

    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  }, []);

  const imageToggle = () => {
    setImgToggle(!isImgToggle);
    document.querySelector(".lyrics").classList.toggle("lyrics--show");
    document.querySelector(".image").classList.toggle("img--float");
  };
  let bgStyles, bgAppStyles;

  function checkImgUrl() {
    let currentAlbum = musicData[musicIndex].album;

    if (currentAlbum === "Lover") {
      bgStyles = {
        boxShadow: `inset 0 0 0 100vw rgba(0, 0, 0, 0.2)`,
        background:
          "linear-gradient(90deg, rgba(236,169,212,1) 0%, rgba(139,194,228,1) 11%, rgba(193,185,222,1) 27%, rgba(202,192,217,1) 30%, rgba(255,236,185,1) 48%, rgba(193,185,222,1) 70%, rgba(254,170,194,1) 100%)",
      };

      bgAppStyles = { background: `#eca9d4` };
    } else if (currentAlbum === "Fearless") {
      bgStyles = {
        background: ` rgb(91,60,32)`,
        background: ` linear-gradient(90deg, rgba(91,60,32,1) 0%, rgba(120,87,46,1) 51%, rgba(222,188,125,1) 100%)`,
      };
      bgAppStyles = {
        background: `#DEBC7D`,
      };
    } else if (currentAlbum === "Speaknow") {
      bgStyles = {
        background: ` rgb(71,42,80)`,
        background: `linear-gradient(90deg, rgba(71,42,80,1) 0%, rgba(141,89,141,1) 51%, rgba(134,78,136,1) 100%)`,
      };
      bgAppStyles = {
        background: `#864E88`,
      };
    } else {
      bgAppStyles = {
        background: `lightgray`,
      };
      bgStyles = {
        background: "rgb(72, 72, 72)",
        background: `linear-gradient(
        90deg,
        rgba(72, 72, 72, 1) 1%,
        rgba(160, 160, 160, 1) 48%,
        rgba(255, 255, 255, 1) 100%
      )`,
      };
    }
  }

  // Call the function to set bgStyles
  checkImgUrl();

  // Use the correct variable name in the style attribute
  <div style={bgStyles}>Content with dynamic background</div>;

  checkImgUrl();

  // console.log(musicData[musicIndex].lyrics);
  return (
    <div className="App" style={bgStyles}>
      <button className="toggle--btn" onClick={toggle}>
        {isToggle ? <i class="bi bi-x-lg"></i> : <i class="bi bi-list"></i>}
      </button>
      <div
        className="musicList"
        style={{
          ...bgAppStyles,
          right: isToggle ? "0" : "-100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul className="list--music">
          {musicData.map((song, i) => (
            <li
              className="list--active"
              onClick={() => {
                setMusicIndex(i);
                setIsPlaying(true);
              }}
            >
              {song.title} <i class="bi bi-music-note"></i>
            </li>
          ))}
        </ul>
      </div>
      <div className="music--container">
        <img
          className="image"
          onClick={imageToggle}
          style={{
            width: "300px",
          }}
          src={musicData[musicIndex].img}
          alt={musicData[musicIndex].album + " Album"}
        />
        <p className="lyrics">
          <pre className="pre--lyrics"> {musicData[musicIndex].lyrics}</pre>
        </p>
        <h5
          style={{
            color: "lightgray",
            textShadow: ` 0 0 10px rgba(0,0,0,0.7)`,
          }}
        >
          {musicData[musicIndex].title}
        </h5>
        <p className="artist">{musicData[musicIndex].artist}</p>
        <input
          type="range"
          value={currentTime}
          max={duration}
          id="range"
          onChange={(e) => {
            audioRef.current.currentTime = e.target.value;
            setCurrentTime(e.target.value);
          }}
        />

        <div>
          <div className="buttons">
            <button className="rewind" onClick={prevSongHandler}>
              <i class="bi bi-rewind"></i>
            </button>
            <button className="playAndPause" onClick={playPauseHandler}>
              {isPlaying ? (
                <i class="bi bi-pause"></i>
              ) : (
                <i class="bi bi-play"></i>
              )}
            </button>
            <button className="forward" onClick={nextSongHandler}>
              {" "}
              <i class="bi bi-fast-forward"></i>
            </button>
          </div>
          <audio
            style={{ display: "none" }}
            ref={audioRef}
            src={musicData[musicIndex].url}
            controls
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}

export default App;
