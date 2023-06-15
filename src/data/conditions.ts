export default [
    {
      "title": "Ability Damaged",
      "description": "The character has lost 1 or more ability score points. The loss is temporary, and these points return at a rate of 1 per evening of rest. This differs from \"effective\" ability loss, which is an effect that goes away when the condition causing it goes away.",
      "penalties": {}
    },
    {
      "title": "Ability Drained",
      "description": "The character has lost 1 or more ability score points. The loss is permanent.",
      "penalties": {}
    },
    {
      "title": "Blinded",
      "description": "The hero can't see at all, and thus everything has total concealment to him or her. The character has a 50% chance to miss in combat. Furthermore, the blinded character has an effective Dexterity of 3, along with a -4 penalty on the use of Strength-based and Dexterity-based skills. This -4 penalty also applies to Search checks and any other skill checks for which the GM deems sight to be important. The character can't make Spot checks or perform any other activity (such as reading) that requires vision. Heroes who are blind long-term (from birth or early in life) grow accustomed to these drawbacks and can overcome some of them (at the GM's discretion).",
      "penalties": {
        "dexterityPenalty": -4
      }
    },
    {
      "title": "Cowering",
      "description": "The hero is frozen in fear, loses his or her Dexterity bonus, and can take no actions. In addition, the character takes a -2 penalty to his or her Defense. The condition typically lasts 10 rounds.",
      "penalties": {
        "dexterityPenalty": -2,
        "defensePenalty": -2
      }
    },
    {
      "title": "Dazed",
      "description": "Unable to act, a dazed character can take no actions, but still gets the benefit of his or her normal Defense. This condition typically lasts 1 round.",
      "penalties": {}
    },
    {
      "title": "Dead",
      "description": "A character dies when his or her hit points drop to -10 or lower, or when his or her Constitution drops to 0.",
      "penalties": {}
    },
    {
      "title": "Deafened",
      "description": "The hero can't hear and takes a -4 penalty on initiative checks. The character can't make Listen checks. Heroes who are deafened long-term (from birth or early in life) grow accustomed to these drawbacks and can overcome some of them (at the GM's discretion).",
      "penalties": {
        "initiativePenalty": -4
      }
    },
    {
      "title": "Disabled",
      "description": "The character has 0 hit points. The character can take only a single move action or attack action, and takes 1 point of damage after any action.",
      "penalties": {}
    },
    {
      "title": "Dying",
      "description": "The character is near death and unconscious, with -1 to -9 wound points. The character can take no actions, and each round a dying character loses 1 hit point until he or she dies or becomes stable.",
      "penalties": {}
    },
    {
      "title": "Entangled",
      "description": "An entangled character takes a -2 penalty on attack rolls in addition to a -4 penalty to Dexterity. If the entangling bonds are anchored to an immobile object, the entangled hero can't move. Otherwise, the character can move at half speed, but can't run or charge. Entangled characters also suffer a -4 penalty to Speed Ranks.",
      "penalties": {
        "attackPenalty": -2,
        "dexterityPenalty": -4
      }
    },
    {
      "title": "Exhausted",
      "description": "Heroes who are exhausted move at half speed and cannot run or charge. Furthermore, they take a -6 penalty to Strength and Dexterity. After 1 hour of complete, uninterrupted rest, an exhausted character becomes fatigued. Exhausted characters also suffer a -2 penalty to Speed Ranks.",
      "penalties": {
        "speedPenalty": -6,
        "strengthPenalty": -6,
        "dexterityPenalty": -6
      }
    },
    {
      "title": "Fatigued",
      "description": "Characters who are fatigued can't run or charge and take a penalty of -2 to Strength and Dexterity. After 8 hours of complete, uninterrupted rest, a fatigued character is no longer fatigued.",
      "penalties": {
        "speedPenalty": -2,
        "strengthPenalty": -2,
        "dexterityPenalty": -2
      }
    },
    {
      "title": "Flat-Footed",
      "description": "A character who has not yet acted during a combat is flat-footed, not reacting normally to the situation. A flat-footed character loses his or her Dexterity bonus to Defense and cannot make attacks of opportunity.",
      "penalties": {
        "defensePenalty": 0
      }
    },
    {
      "title": "Grappled",
      "description": "When grappled, a hero can't undertake any action other than attacking with his or her bare hands, attacking with a light weapon, or attempting to break free from his or her opponent. The character loses his or her Dexterity bonus to Defense, except on attacks from characters with whom he or she is grappling.",
      "penalties": {
        "defensePenalty": 0
      }
    },
    {
      "title": "Helpless",
      "description": "Paralyzed, sleeping, or unconscious characters are helpless. A helpless character has an effective Defense of 5 + size modifier. An attacker can attempt a coup de grace against a helpless character.",
      "penalties": {
        "defensePenalty": 0
      }
    },
    {
      "title": "Nauseated",
      "description": "Characters who are nauseated are unable to attack or do anything else requiring attention or concentration. The only action such a character can take is a single move action per turn.",
      "penalties": {}
    },
    {
      "title": "Panicked",
      "description": "A panicked character flees as fast as possible and cowers (see Cowering, above) if unable to get away. The character defends normally but cannot attack.",
      "penalties": {}
    },
    {
      "title": "Paralyzed",
      "description": "Heroes who are paralyzed fall to the ground, unable to move (they have an effective, but not actual, Dexterity and Strength of 0). They are helpless.",
      "penalties": {
        "dexterityPenalty": 0,
        "strengthPenalty": 0
      }
    },
    {
      "title": "Pinned",
      "description": "A pinned character is held immobile (but not helpless) in a grapple. The character takes a -4 penalty to Defense against melee attacks and loses his or her Dexterity bonus to Defense.",
      "penalties": {
        "defensePenalty": -4
      }
    },
    {
      "title": "Prone",
      "description": "An attacker who is prone (lying on the ground) takes a -4 penalty on melee attack rolls and can't use bows or thrown ranged weapons. The character gains a +4 bonus to Defense against ranged attacks, but takes a -4 penalty to Defense against melee attacks.",
      "penalties": {
        "attackPenalty": -4
      }
    },
    {
      "title": "Shaken",
      "description": "A shaken character takes a -2 penalty on attack rolls, saving throws, and skill checks.",
      "penalties": {
        "attackPenalty": -2,
        "savingThrowPenalty": -2,
        "skillCheckPenalty": -2
      }
    },
    {
      "title": "Stable",
      "description": "A stable character is no longer dying, but is still unconscious.",
      "penalties": {}
    },
    {
      "title": "Staggered",
      "description": "A staggered character cannot run or charge.",
      "penalties": {}
    },
    {
      "title": "Stunned",
      "description": "A character who becomes stunned loses his or her Dexterity bonus, drops what he or she is holding, and can take no attack or move actions. In addition, the character takes a -2 penalty to Defense. The condition typically lasts 1 round.",
      "penalties": {
        "defensePenalty": -2
      }
    },
    {
      "title": "Unconscious",
      "description": "An unconscious character is unable to defend him or herself. The character is helpless and typically falls prone.",
      "penalties": {}
    }
  ]